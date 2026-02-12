import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BlogPost {
    id: bigint;
    title: string;
    content: string;
    isPublished: boolean;
    createdAt: Time;
    slug: string;
    tags: Array<string>;
    author: string;
    coverImage?: string;
    updatedAt: Time;
    excerpt: string;
}
export type Time = bigint;
export interface ContactForm {
    name: string;
    submittedAt: Time;
    email: string;
    message: string;
}
export interface UserProfile {
    name: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createBlogPost(post: BlogPost): Promise<bigint>;
    deleteBlogPost(id: bigint): Promise<boolean>;
    filterBlogPosts(tags: Array<string>, isPublished: boolean | null): Promise<Array<BlogPost>>;
    getAllContactForms(): Promise<Array<ContactForm>>;
    getBlogPostById(id: bigint): Promise<BlogPost | null>;
    getBlogPostBySlug(slug: string): Promise<BlogPost | null>;
    getBlogPosts(_page: bigint, _pageSize: bigint): Promise<Array<BlogPost>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    searchContactForms(searchTerm: string): Promise<Array<ContactForm>>;
    submitContactForm(form: ContactForm): Promise<boolean>;
    updateBlogPost(post: BlogPost): Promise<boolean>;
}
