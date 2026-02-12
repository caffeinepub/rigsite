import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import PublicLayout from './components/public/PublicLayout';
import AdminLayout from './components/admin/AdminLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import InternationalCoursesPage from './pages/InternationalCoursesPage';
import AcademicPartnersPage from './pages/AcademicPartnersPage';
import LeadershipPage from './pages/LeadershipPage';
import FacultyPage from './pages/FacultyPage';
import InternshipPage from './pages/InternshipPage';
import PlacementPage from './pages/PlacementPage';
import EventsPage from './pages/EventsPage';
import NewsPage from './pages/NewsPage';
import IndustryVisitPage from './pages/IndustryVisitPage';
import InfrastructurePage from './pages/InfrastructurePage';
import TestimonialsPage from './pages/TestimonialsPage';
import FaqPage from './pages/FaqPage';
import EligibilityPage from './pages/EligibilityPage';
import ScholarshipTestPage from './pages/ScholarshipTestPage';
import EducationLoanPage from './pages/EducationLoanPage';
import TrainingProgramPage from './pages/TrainingProgramPage';
import BlogsListPage from './pages/BlogsListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactPage from './pages/ContactPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminBlogsPage from './pages/admin/AdminBlogsPage';
import AdminBlogEditorPage from './pages/admin/AdminBlogEditorPage';
import AdminEnquiriesPage from './pages/admin/AdminEnquiriesPage';
import AdminEnquiryDetailPage from './pages/admin/AdminEnquiryDetailPage';

const rootRoute = createRootRoute({
  component: () => <PublicLayout />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const coursesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/courses',
  component: CoursesPage,
});

const internationalCoursesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/international-courses',
  component: InternationalCoursesPage,
});

const academicPartnersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/academic-partners',
  component: AcademicPartnersPage,
});

const leadershipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/leadership',
  component: LeadershipPage,
});

const facultyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/faculty',
  component: FacultyPage,
});

const internshipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/internship',
  component: InternshipPage,
});

const placementRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/placement',
  component: PlacementPage,
});

const eventsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/events',
  component: EventsPage,
});

const newsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/news',
  component: NewsPage,
});

const industryVisitRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/industry-visit',
  component: IndustryVisitPage,
});

const infrastructureRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/infrastructure',
  component: InfrastructurePage,
});

const testimonialsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/testimonials',
  component: TestimonialsPage,
});

const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/faq',
  component: FaqPage,
});

const eligibilityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/eligibility',
  component: EligibilityPage,
});

const scholarshipTestRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/scholarship-test',
  component: ScholarshipTestPage,
});

const educationLoanRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/education-loan',
  component: EducationLoanPage,
});

const trainingProgramRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/training-program',
  component: TrainingProgramPage,
});

const blogsListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blogs',
  component: BlogsListPage,
});

const blogDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blogs/$slug',
  component: BlogDetailPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const adminRootRoute = createRootRoute({
  component: () => <AdminLayout />,
});

const adminDashboardRoute = createRoute({
  getParentRoute: () => adminRootRoute,
  path: '/admin',
  component: AdminDashboardPage,
});

const adminBlogsRoute = createRoute({
  getParentRoute: () => adminRootRoute,
  path: '/admin/blogs',
  component: AdminBlogsPage,
});

const adminBlogEditorRoute = createRoute({
  getParentRoute: () => adminRootRoute,
  path: '/admin/blogs/editor',
  component: AdminBlogEditorPage,
});

const adminBlogEditRoute = createRoute({
  getParentRoute: () => adminRootRoute,
  path: '/admin/blogs/editor/$id',
  component: AdminBlogEditorPage,
});

const adminEnquiriesRoute = createRoute({
  getParentRoute: () => adminRootRoute,
  path: '/admin/enquiries',
  component: AdminEnquiriesPage,
});

const adminEnquiryDetailRoute = createRoute({
  getParentRoute: () => adminRootRoute,
  path: '/admin/enquiries/$id',
  component: AdminEnquiryDetailPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  coursesRoute,
  internationalCoursesRoute,
  academicPartnersRoute,
  leadershipRoute,
  facultyRoute,
  internshipRoute,
  placementRoute,
  eventsRoute,
  newsRoute,
  industryVisitRoute,
  infrastructureRoute,
  testimonialsRoute,
  faqRoute,
  eligibilityRoute,
  scholarshipTestRoute,
  educationLoanRoute,
  trainingProgramRoute,
  blogsListRoute,
  blogDetailRoute,
  contactRoute,
]);

const adminRouteTree = adminRootRoute.addChildren([
  adminDashboardRoute,
  adminBlogsRoute,
  adminBlogEditorRoute,
  adminBlogEditRoute,
  adminEnquiriesRoute,
  adminEnquiryDetailRoute,
]);

const router = createRouter({ routeTree });
const adminRouter = createRouter({ routeTree: adminRouteTree });

function App() {
  const isAdminPath = window.location.pathname.startsWith('/admin');

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <RouterProvider router={isAdminPath ? adminRouter : router} />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
