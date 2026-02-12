import Map "mo:core/Map";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import List "mo:core/List";
import Int "mo:core/Int";
import Bool "mo:core/Bool";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Principal "mo:core/Principal";

import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Mix in authentication system and set its state.
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Type definitions for blog posts and contact forms
  public type BlogPost = {
    id : Nat;
    title : Text;
    slug : Text;
    author : Text;
    tags : [Text];
    coverImage : ?Text;
    excerpt : Text;
    content : Text;
    createdAt : Time.Time;
    updatedAt : Time.Time;
    isPublished : Bool;
  };

  public type ContactForm = {
    name : Text;
    email : Text;
    message : Text;
    submittedAt : Time.Time;
  };

  public type UserProfile = {
    name : Text;
  };

  module BlogPost {
    public func compare(p1 : BlogPost, p2 : BlogPost) : Order.Order {
      Int.compare(p1.createdAt, p2.createdAt);
    };
  };

  // State for posts and enquiries
  let blogPosts = Map.empty<Nat, BlogPost>();
  let contactForms = Map.empty<Nat, ContactForm>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  var nextPostId = 1;
  var nextEnquiryId = 1;

  // User profile management
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Blog post management functions
  public shared ({ caller }) func createBlogPost(post : BlogPost) : async Nat {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can create posts");
    };

    let newPost = {
      post with
      id = nextPostId;
      createdAt = Time.now();
      updatedAt = Time.now();
    };

    blogPosts.add(nextPostId, newPost);
    nextPostId += 1;
    newPost.id;
  };

  public shared ({ caller }) func updateBlogPost(post : BlogPost) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update posts");
    };

    let updatedPost = {
      post with
      updatedAt = Time.now();
    };

    blogPosts.add(post.id, updatedPost);
    true;
  };

  public shared ({ caller }) func deleteBlogPost(id : Nat) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can delete posts");
    };

    blogPosts.remove(id);
    true;
  };

  public query ({ caller }) func getBlogPosts(_page : Nat, _pageSize : Nat) : async [BlogPost] {
    let allPosts = blogPosts.values().toArray().filter(func(post) { post.isPublished });
    allPosts.sort();
  };

  public query ({ caller }) func getBlogPostBySlug(slug : Text) : async ?BlogPost {
    let post = blogPosts.values().toArray().find(func(post) { post.slug == slug });
    switch (post) {
      case (?p) {
        if (p.isPublished) {
          ?p;
        } else {
          null;
        };
      };
      case (null) { null };
    };
  };

  public query ({ caller }) func getBlogPostById(id : Nat) : async ?BlogPost {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can access posts by ID");
    };
    blogPosts.get(id);
  };

  // Contact form handling
  public shared ({ caller }) func submitContactForm(form : ContactForm) : async Bool {
    let newForm = {
      form with
      submittedAt = Time.now();
    };

    contactForms.add(nextEnquiryId, newForm);
    nextEnquiryId += 1;
    true;
  };

  // Admin-only: get all enquiries
  public query ({ caller }) func getAllContactForms() : async [ContactForm] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view enquiries");
    };
    contactForms.values().toArray();
  };

  public query ({ caller }) func searchContactForms(searchTerm : Text) : async [ContactForm] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can search enquiries");
    };

    contactForms.values().toArray().filter(
      func(form) {
        form.name.contains(#text searchTerm) or form.email.contains(#text searchTerm)
      }
    );
  };

  public query ({ caller }) func filterBlogPosts(tags : [Text], isPublished : ?Bool) : async [BlogPost] {
    // If filtering for unpublished posts, require admin access
    let requiresAdmin = switch (isPublished) {
      case (?false) { true };
      case (null) { true };
      case (?true) { false };
    };

    if (requiresAdmin and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view unpublished posts");
    };

    let filteredPosts = blogPosts.values().toArray().filter(
      func(post) {
        let matchesTags = if (tags.size() > 0) {
          tags.any(
            func(tag) {
              post.tags.any(
                func(postTag) {
                  postTag.contains(#text tag);
                }
              );
            }
          );
        } else { true };

        let matchesPublished = switch (isPublished) {
          case (?status) { post.isPublished == status };
          case (null) { true };
        };

        // For non-admin users, only show published posts
        let isAccessible = if (AccessControl.isAdmin(accessControlState, caller)) {
          true;
        } else {
          post.isPublished;
        };

        matchesTags and matchesPublished and isAccessible;
      }
    );
    filteredPosts.sort();
  };
};
