export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* TODO: Public header / navbar */}
      <header className="border-b border-[var(--wf-border)]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="font-heading text-xl font-bold">
            <span className="text-wf-primary-soft">Way</span>
            <span className="text-wf-provider">find</span>
          </span>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      {/* TODO: Footer */}
    </div>
  );
}
