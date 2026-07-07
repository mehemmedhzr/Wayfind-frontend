import DashboardLayout from "@/components/layouts/DashboardLayout";

export default function ProviderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout role="provider">{children}</DashboardLayout>;
}
