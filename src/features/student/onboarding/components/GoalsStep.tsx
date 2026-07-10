"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FileText, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { fieldControlClass } from "@/features/student/onboarding/components/shared/fieldStyles";
import { getNextStepId, getPreviousStepId } from "../config/steps";
import {
  type GoalsFormInput,
  type GoalsSchemaType,
  goalsSchema,
} from "../schemas/goals";
import { useOnboardingStore } from "../store/useOnboardingStore";
import CountryChipInput from "./shared/CountryChipInput";
import FormField from "./shared/FormField";
import StepFooter from "./shared/StepFooter";

const DEGREE_OPTIONS: {
  value: GoalsSchemaType["degreeTarget"];
  label: string;
}[] = [
  { value: "bachelor", label: "Bakalavr" },
  { value: "master", label: "Magistr" },
  { value: "phd", label: "PhD" },
];

const CURRENT_YEAR = new Date().getFullYear();
const INTAKE_YEAR_OPTIONS = Array.from(
  { length: 6 },
  (_, i) => CURRENT_YEAR + i,
);

const BUDGET_MIN = 1000;
const BUDGET_MAX = 30000;
const BUDGET_STEP = 500;

function formatBudget(value: number) {
  return `€${value.toLocaleString("de-DE")}`;
}

export default function GoalsStep() {
  const router = useRouter();
  const answers = useOnboardingStore((state) => state.answers);
  const setGoals = useOnboardingStore((state) => state.setGoals);
  const transcript = useOnboardingStore((state) => state.transcript);
  const setTranscript = useOnboardingStore((state) => state.setTranscript);

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<GoalsFormInput, unknown, GoalsSchemaType>({
    resolver: zodResolver(goalsSchema),
    defaultValues: {
      targetCountries: answers.goals.targetCountries ?? [],
      degreeTarget: answers.goals.degreeTarget,
      intakeYear: answers.goals.intakeYear ?? CURRENT_YEAR + 1,
      budget: answers.goals.budget ?? 8000,
    },
  });

  const budget = Number(watch("budget") ?? BUDGET_MIN);

  const onSubmit = (data: GoalsSchemaType) => {
    setGoals(data);
    const nextStepId = getNextStepId("goals");
    if (nextStepId) router.push(`/student/profile/edit/${nextStepId}`);
  };

  const goBack = () => {
    const previousStepId = getPreviousStepId("goals");
    if (previousStepId) router.push(`/student/profile/edit/${previousStepId}`);
  };

  const handleTranscriptChange = (file: File | undefined) => {
    if (!file) return;
    setTranscript({
      fileName: file.name,
      sizeMb: Math.round((file.size / (1024 * 1024)) * 10) / 10,
    });
  };

  return (
    <form className="max-w-2xl" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1 className="font-heading text-2xl font-bold text-wf-text-primary">
        Hədəflərin nədir?
      </h1>
      <p className="mt-2 text-sm text-wf-text-secondary">
        Bunlar AI-nin universitet və təqaüd uyğunluğunu hesablamasına köməy
        edir.
      </p>

      <div className="mt-8 space-y-6">
        <FormField
          id="targetCountries"
          label="Hədəf ölkələr"
          error={errors.targetCountries?.message}
        >
          <Controller
            control={control}
            name="targetCountries"
            render={({ field }) => (
              <CountryChipInput
                values={field.value ?? []}
                onChange={field.onChange}
              />
            )}
          />
        </FormField>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField
            id="degreeTarget"
            label="Dərəcə"
            error={errors.degreeTarget?.message}
          >
            <Controller
              control={control}
              name="degreeTarget"
              render={({ field }) => (
                <div className="flex gap-2">
                  {DEGREE_OPTIONS.map((option) => {
                    const isSelected = field.value === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => field.onChange(option.value)}
                        className={
                          isSelected
                            ? "flex-1 cursor-pointer rounded-[var(--wf-radius-md)] bg-wf-primary px-3 py-2.5 text-sm font-semibold text-white transition-colors duration-200"
                            : "flex-1 cursor-pointer rounded-[var(--wf-radius-md)] border border-[var(--wf-border)] bg-wf-surface-raised px-3 py-2.5 text-sm font-semibold text-wf-text-secondary transition-colors duration-200 hover:border-[var(--wf-border-strong)]"
                        }
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              )}
            />
          </FormField>

          <FormField
            id="intakeYear"
            label="Qəbul ili"
            error={errors.intakeYear?.message}
          >
            <select
              id="intakeYear"
              {...register("intakeYear")}
              className={fieldControlClass}
            >
              {INTAKE_YEAR_OPTIONS.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        <FormField
          id="budget"
          label="İllik büdcə (təhsil + yaşayış)"
          error={errors.budget?.message}
        >
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-lg font-bold text-wf-text-primary">
              {formatBudget(budget)}
            </span>
            <span className="text-sm text-wf-text-secondary">/ il qədər</span>
          </div>
          <input
            id="budget"
            type="range"
            min={BUDGET_MIN}
            max={BUDGET_MAX}
            step={BUDGET_STEP}
            {...register("budget")}
            className="mt-2 w-full cursor-pointer accent-wf-primary"
          />
        </FormField>

        <div>
          <label
            className="block text-sm font-medium text-wf-text-primary"
            htmlFor="transcriptFile"
          >
            Transkript
          </label>
          <label
            htmlFor="transcriptFile"
            className="mt-1.5 flex cursor-pointer items-center gap-3 rounded-[var(--wf-radius-md)] border border-[var(--wf-border)] bg-wf-surface-raised px-4 py-3 transition-colors duration-200 hover:border-[var(--wf-border-strong)]"
          >
            {transcript ? (
              <FileText className="h-4 w-4 shrink-0 text-wf-primary-soft" />
            ) : (
              <Upload className="h-4 w-4 shrink-0 text-wf-text-muted" />
            )}
            <span className="text-sm text-wf-text-secondary">
              {transcript ? (
                <>
                  <span className="text-wf-text-primary">
                    {transcript.fileName}
                  </span>{" "}
                  yükləndi — AI bunu analiz edəcək.{" "}
                  <span className="font-mono text-xs text-wf-text-muted">
                    {transcript.sizeMb} MB
                  </span>
                </>
              ) : (
                "Transkript faylını yükləyin (PDF, maks. 10MB)"
              )}
            </span>
            <input
              id="transcriptFile"
              type="file"
              accept=".pdf,image/*"
              className="sr-only"
              onChange={(e) => handleTranscriptChange(e.target.files?.[0])}
            />
          </label>
        </div>
      </div>

      <StepFooter onBack={goBack} isSubmitting={isSubmitting} />
    </form>
  );
}
