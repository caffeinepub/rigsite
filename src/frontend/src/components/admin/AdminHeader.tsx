import { Link } from '@tanstack/react-router';
import AuthButton from './AuthButton';

export default function AdminHeader() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/admin" className="text-xl font-bold">
            RIG Admin
          </Link>
          <nav className="flex items-center space-x-6">
            <Link to="/admin" className="text-sm font-medium hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link to="/admin/blogs" className="text-sm font-medium hover:text-primary transition-colors">
              Blogs
            </Link>
            <Link to="/admin/enquiries" className="text-sm font-medium hover:text-primary transition-colors">
              Enquiries
            </Link>
            <AuthButton />
          </nav>
        </div>
      </div>
    </header>
  );
}
