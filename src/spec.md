# Specification

## Summary
**Goal:** Replicate riginstitute.com as a pixel-accurate, fully responsive React frontend with Motoko-backed blogs and enquiry handling, including an Internet Identity–protected admin area.

**Planned changes:**
- Build a React + Tailwind public site matching the reference layout/spacing/typography/colors with consistent header/footer and realistic English dummy copy (no placeholder strings).
- Implement routing and page content sections for: Home, About, Courses (with sub-sections), International Courses, Academic Partners, Leadership, Faculty, Internship, Placement, Events, News, Industry Visit, Infrastructure, Testimonials, FAQ, Eligibility, Scholarship Test, Education Loan, Training Program, Blogs (list + detail), Contact.
- Add fully responsive behavior across mobile/tablet/desktop including mobile navigation behavior comparable to the reference.
- Add static, non-copyrighted dummy images wired into the UI (no hotlinking from riginstitute.com).
- Implement a single Motoko actor data model + APIs for enquiries and blog posts (CRUD, slug-based fetch, publish status), persisting via stable storage across upgrades.
- Build Contact/Enquiry form with client-side validation and success/error UI; submit to Motoko backend.
- Build public blog listing (pagination or “load more”) and blog detail by slug (including friendly not-found for unknown slugs), loading from backend; show only published posts publicly.
- Implement an admin area using Internet Identity authentication; restrict admin pages and admin-only backend methods to authenticated admins.
- Admin UI: create/edit/delete blog posts (draft/published) and view/search/filter enquiries (at least by name/email/date) with an enquiry detail view.
- Provide IC-appropriate run/deploy documentation (dfx local + production), explicitly noting the non-applicability of PHP/MySQL+cPanel ZIP deployment in this stack.

**User-visible outcome:** Visitors can browse a responsive replica of the riginstitute.com site, submit enquiries via a working contact form, and read published blog posts; authenticated admins can log in to manage blog content and review/search enquiries.
