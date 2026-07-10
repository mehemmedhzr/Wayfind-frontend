"use client";

import { Check } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ONBOARDING_STEPS, type OnboardingStepId } from "../config/steps";
import { getOverallCompletionPercent } from "../lib/completion";
import { useOnboardingStore } from "../store/useOnboardingStore";

export default function OnboardingStepper() {
  const pathname = usePathname();
  const answers = useOnboardingStore((state) => state.answers);
  const completedSteps = useOnboardingStore((state) => state.completedSteps);
  const activeStepId = pathname.split("/").pop() as OnboardingStepId;
  const completionPercent = getOverallCompletionPercent(answers);

  return (
    <aside className="flex w-full flex-col border-b border-[var(--wf-border)] bg-wf-surface px-6 py-8 lg:w-[300px] lg:border-b-0 lg:border-r">
      <h2 className="font-heading text-xl font-bold text-wf-text-primary">
        Profilini qur
      </h2>
      <p className="mt-1 text-sm text-wf-text-secondary">
        3 dəq · AI dəqiqliyini artırır
      </p>

      <ol className="mt-8 flex flex-col gap-2">
        {ONBOARDING_STEPS.map((step) => {
          const isCompleted = completedSteps[step.id];
          const isActive = step.id === activeStepId;
          const statusLabel = isCompleted
            ? "Tamamlandı"
            : isActive
              ? "İndi"
              : "Sonra";

          return (
            <li key={step.id}>
              <div
                className={cn(
                  "flex items-center gap-3 rounded-[var(--wf-radius-md)] border border-transparent px-3 py-2.5 transition-colors duration-200",
                  isActive && "border-wf-primary bg-wf-student-menu",
                )}
              >
                <span
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                    isCompleted
                      ? "bg-wf-success text-white"
                      : isActive
                        ? "bg-wf-primary text-white"
                        : "bg-wf-surface-raised text-wf-text-muted",
                  )}
                >
                  {isCompleted ? <Check className="h-4 w-4" /> : step.order}
                </span>
                <div>
                  <p
                    className={cn(
                      "text-sm font-semibold",
                      isActive || isCompleted
                        ? "text-wf-text-primary"
                        : "text-wf-text-muted",
                    )}
                  >
                    {step.title}
                  </p>
                  <p
                    className={cn(
                      "text-xs",
                      isCompleted
                        ? "text-wf-success"
                        : isActive
                          ? "text-wf-primary-soft"
                          : "text-wf-text-muted",
                    )}
                  >
                    {statusLabel}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-8 lg:mt-auto">
        <div className="flex items-center justify-between text-sm">
          <span className="text-wf-text-secondary">Tamamlanma</span>
          <span className="font-semibold text-wf-text-primary">
            {completionPercent}%
          </span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-wf-surface-raised">
          <div
            className="h-full rounded-full bg-wf-gradient-brand transition-all duration-300"
            style={{ width: `${completionPercent}%` }}
          />
        </div>
      </div>
    </aside>
  );
}
