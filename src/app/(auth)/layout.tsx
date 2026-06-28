export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-[var(--wf-radius-lg)] border border-[var(--wf-border)] bg-wf-surface p-8">
        {children}
      </div>
    </div>
  );
}
