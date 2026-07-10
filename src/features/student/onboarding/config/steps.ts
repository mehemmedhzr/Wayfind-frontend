export type OnboardingStepId = "personal" | "academic" | "goals" | "interests";

export type OnboardingStepConfig = {
  id: OnboardingStepId;
  order: number;
  title: string;
  description: string;
};

export const ONBOARDING_STEPS: OnboardingStepConfig[] = [
  {
    id: "personal",
    order: 1,
    title: "Şəxsi məlumat",
    description: "Ad, soyad və əlaqə məlumatları.",
  },
  {
    id: "academic",
    order: 2,
    title: "Akademik məlumat",
    description: "Təhsil səviyyəsi və sertifikat nəticələri.",
  },
  {
    id: "goals",
    order: 3,
    title: "Hədəflər",
    description: "Hədəf ölkələr, dərəcə, qəbul ili və büdcə.",
  },
  {
    id: "interests",
    order: 4,
    title: "Maraqlar",
    description: "Sizi maraqlandıran sahələr.",
  },
];

export function getNextStepId(
  currentStepId: OnboardingStepId,
): OnboardingStepId | null {
  const currentIndex = ONBOARDING_STEPS.findIndex(
    (step) => step.id === currentStepId,
  );
  return ONBOARDING_STEPS[currentIndex + 1]?.id ?? null;
}

export function getPreviousStepId(
  currentStepId: OnboardingStepId,
): OnboardingStepId | null {
  const currentIndex = ONBOARDING_STEPS.findIndex(
    (step) => step.id === currentStepId,
  );
  return ONBOARDING_STEPS[currentIndex - 1]?.id ?? null;
}
