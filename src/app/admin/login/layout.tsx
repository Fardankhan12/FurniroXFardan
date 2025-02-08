// app/admin/layout.tsx
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-wrapper">
      <header>
        {/* Admin header, sidebar, etc. */}
        <h1>Admin Panel</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
