export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* TODO: Student sidebar navigation */}
      <aside className="hidden w-[220px] border-r border-[var(--wf-border)] bg-wf-surface lg:block">
        <div className="p-5">
          <span className="font-heading text-lg font-bold">
            <span className="text-wf-primary-soft">Way</span>
            <span className="text-wf-provider">find</span>
          </span>
        </div>
        {/* TODO: Sidebar nav items */}
      </aside>
      <main className="flex-1 p-6 lg:p-10">{children}</main>
    </div>
  );
}
