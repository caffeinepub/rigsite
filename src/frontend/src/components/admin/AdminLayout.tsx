import { Outlet } from '@tanstack/react-router';
import AdminGuard from './AdminGuard';
import AdminHeader from './AdminHeader';

export default function AdminLayout() {
  return (
    <AdminGuard>
      <div className="min-h-screen flex flex-col bg-muted/30">
        <AdminHeader />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Outlet />
        </main>
      </div>
    </AdminGuard>
  );
}
