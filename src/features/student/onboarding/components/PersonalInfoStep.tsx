"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { getNextStepId } from "../config/steps";
import {
  type PersonalInfoSchemaType,
  personalInfoSchema,
} from "../schemas/personalInfo";
import { useOnboardingStore } from "../store/useOnboardingStore";
import FormField from "./shared/FormField";
import { fieldControlClass } from "./shared/fieldStyles";
import StepFooter from "./shared/StepFooter";

export default function PersonalInfoStep() {
  const router = useRouter();
  const answers = useOnboardingStore((state) => state.answers);
  const setPersonalInfo = useOnboardingStore((state) => state.setPersonalInfo);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PersonalInfoSchemaType>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: answers.personal,
  });

  const onSubmit = (data: PersonalInfoSchemaType) => {
    setPersonalInfo(data);
    const nextStepId = getNextStepId("personal");
    if (nextStepId) router.push(`/student/profile/edit/${nextStepId}`);
  };

  return (
    <form className="max-w-xl" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1 className="font-heading text-2xl font-bold text-wf-text-primary">
        Şəxsi məlumatlarınız
      </h1>
      <p className="mt-2 text-sm text-wf-text-secondary">
        Bu məlumatlar hesabınızı və AI bələdçinizi fərdiləşdirmək üçün istifadə
        olunur.
      </p>

      <div className="mt-8 space-y-5">
        <FormField
          id="fullName"
          label="Ad və soyad"
          error={errors.fullName?.message}
        >
          <input
            id="fullName"
            {...register("fullName")}
            className={fieldControlClass}
            placeholder="Elvin Məmmədov"
          />
        </FormField>

        <FormField id="email" label="E-poçt" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={fieldControlClass}
            placeholder="siz@example.com"
          />
        </FormField>

        <FormField
          id="phone"
          label="Telefon nömrəsi"
          hint="Opsional, lakin tövsiyə olunur."
          error={errors.phone?.message}
        >
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className={fieldControlClass}
            placeholder="+994 XX XXX XX XX"
          />
        </FormField>
      </div>

      <StepFooter isSubmitting={isSubmitting} />
    </form>
  );
}
