export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* TODO: Admin sidebar navigation */}
      <aside className="hidden w-[210px] border-r border-[var(--wf-border)] bg-wf-surface lg:block">
        <div className="p-5">
          <span className="font-heading text-lg font-bold">
            <span className="text-wf-admin">Admin</span>
          </span>
        </div>
        {/* TODO: Admin nav items */}
      </aside>
      <main className="flex-1 p-6 lg:p-10">{children}</main>
    </div>
  );
}
