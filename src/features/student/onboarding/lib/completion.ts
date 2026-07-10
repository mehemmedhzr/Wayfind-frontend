import type { OnboardingStepId } from "../config/steps";
import type { OnboardingAnswers } from "../store/useOnboardingStore";

const REQUIRED_FIELDS_BY_STEP: Record<OnboardingStepId, string[]> = {
  personal: ["fullName", "email"],
  academic: ["currentEducationLevel", "fieldOfStudy"],
  goals: ["targetCountries", "degreeTarget", "intakeYear", "budget"],
  interests: ["interests"],
};

function isFilled(value: unknown): boolean {
  if (Array.isArray(value)) return value.length > 0;
  return value !== undefined && value !== null && value !== "";
}

export function getStepCompletionRatio(
  stepId: OnboardingStepId,
  answers: OnboardingAnswers,
): number {
  const fields = REQUIRED_FIELDS_BY_STEP[stepId];
  const stepAnswers = answers[stepId] as Record<string, unknown>;
  const filledCount = fields.filter((field) =>
    isFilled(stepAnswers?.[field]),
  ).length;
  return filledCount / fields.length;
}

export function getOverallCompletionPercent(
  answers: OnboardingAnswers,
): number {
  const stepIds = Object.keys(REQUIRED_FIELDS_BY_STEP) as OnboardingStepId[];
  const total = stepIds.reduce(
    (sum, stepId) => sum + getStepCompletionRatio(stepId, answers),
    0,
  );
  return Math.round((total / stepIds.length) * 100);
}
