import OnboardingStepper from "@/features/student/onboarding/components/OnboardingStepper";

export default function ProfileEditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <OnboardingStepper />
      <main className="flex-1 px-6 py-10 lg:px-12 lg:py-14">{children}</main>
    </div>
  );
}
