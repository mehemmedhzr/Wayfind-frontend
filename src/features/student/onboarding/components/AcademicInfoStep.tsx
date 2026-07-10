"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { getNextStepId, getPreviousStepId } from "../config/steps";
import {
  type AcademicInfoFormInput,
  type AcademicInfoSchemaType,
  academicInfoSchema,
  CERTIFICATE_TYPE_LABELS,
  CERTIFICATE_TYPES,
} from "../schemas/academicInfo";
import { useOnboardingStore } from "../store/useOnboardingStore";
import FormField from "./shared/FormField";
import { fieldControlClass } from "./shared/fieldStyles";
import StepFooter from "./shared/StepFooter";

// Placeholder options — exact taxonomy needs PRD/product-owner confirmation.
const EDUCATION_LEVEL_OPTIONS = [
  "Orta məktəb",
  "Bakalavr tələbəsi",
  "Bakalavr məzunu",
  "Magistr tələbəsi",
  "Magistr məzunu",
];

export default function AcademicInfoStep() {
  const router = useRouter();
  const answers = useOnboardingStore((state) => state.answers);
  const setAcademicInfo = useOnboardingStore((state) => state.setAcademicInfo);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AcademicInfoFormInput, unknown, AcademicInfoSchemaType>({
    resolver: zodResolver(academicInfoSchema),
    defaultValues: answers.academic,
  });

  const onSubmit = (data: AcademicInfoSchemaType) => {
    setAcademicInfo(data);
    const nextStepId = getNextStepId("academic");
    if (nextStepId) router.push(`/student/profile/edit/${nextStepId}`);
  };

  const goBack = () => {
    const previousStepId = getPreviousStepId("academic");
    if (previousStepId) router.push(`/student/profile/edit/${previousStepId}`);
  };

  return (
    <form className="max-w-xl" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1 className="font-heading text-2xl font-bold text-wf-text-primary">
        Akademik məlumatınız
      </h1>
      <p className="mt-2 text-sm text-wf-text-secondary">
        Bunlar AI-nin uyğunluğunuzu daha dəqiq hesablamasına köməy edir.
      </p>

      <div className="mt-8 space-y-5">
        <FormField
          id="currentEducationLevel"
          label="Hazırkı təhsil səviyyəsi"
          error={errors.currentEducationLevel?.message}
        >
          <select
            id="currentEducationLevel"
            {...register("currentEducationLevel")}
            className={fieldControlClass}
          >
            <option value="">Seçin</option>
            {EDUCATION_LEVEL_OPTIONS.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          id="fieldOfStudy"
          label="İxtisas sahəsi"
          error={errors.fieldOfStudy?.message}
        >
          <input
            id="fieldOfStudy"
            {...register("fieldOfStudy")}
            className={fieldControlClass}
            placeholder="Kompüter mühəndisliyi"
          />
        </FormField>

        <FormField
          id="gpa"
          label="GPA"
          hint="Opsional, 0-4 şkalası üzrə."
          error={errors.gpa?.message}
        >
          <input
            id="gpa"
            type="number"
            step="0.01"
            min={0}
            max={4}
            {...register("gpa")}
            className={fieldControlClass}
            placeholder="3.50"
          />
        </FormField>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            id="certificateType"
            label="Sertifikat növü"
            hint="Opsional"
            error={errors.certificateType?.message}
          >
            <select
              id="certificateType"
              {...register("certificateType")}
              className={fieldControlClass}
            >
              <option value="">Yoxdur</option>
              {CERTIFICATE_TYPES.map((type) => (
                <option key={type} value={type}>
                  {CERTIFICATE_TYPE_LABELS[type]}
                </option>
              ))}
            </select>
          </FormField>

          <FormField
            id="certificateScore"
            label="Nəticə"
            hint="Opsional"
            error={errors.certificateScore?.message}
          >
            <input
              id="certificateScore"
              type="number"
              step="0.5"
              min={0}
              {...register("certificateScore")}
              className={fieldControlClass}
              placeholder="7.0"
            />
          </FormField>
        </div>
      </div>

      <StepFooter onBack={goBack} isSubmitting={isSubmitting} />
    </form>
  );
}
