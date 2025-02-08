// app/admin/layout.tsx
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {" "}
      {/* This prevents the root layout from wrapping it */}
      <head>
        <title>Admin Dashboard</title>
      </head>
      <body>
        <div className="admin-container">
          <header className="admin-header"></header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
