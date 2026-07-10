"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { getPreviousStepId } from "../config/steps";
import {
  type InterestsSchemaType,
  interestsSchema,
} from "../schemas/interests";
import { useOnboardingStore } from "../store/useOnboardingStore";
import ChipInput from "./shared/ChipInput";
import FormField from "./shared/FormField";
import StepFooter from "./shared/StepFooter";

export default function InterestsStep() {
  const router = useRouter();
  const answers = useOnboardingStore((state) => state.answers);
  const setInterests = useOnboardingStore((state) => state.setInterests);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InterestsSchemaType>({
    resolver: zodResolver(interestsSchema),
    defaultValues: { interests: answers.interests.interests ?? [] },
  });

  const onSubmit = (data: InterestsSchemaType) => {
    setInterests(data);
    router.push("/student/profile");
  };

  const goBack = () => {
    const previousStepId = getPreviousStepId("interests");
    if (previousStepId) router.push(`/student/profile/edit/${previousStepId}`);
  };

  return (
    <form className="max-w-xl" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1 className="font-heading text-2xl font-bold text-wf-text-primary">
        Sizi nə maraqlandırır?
      </h1>
      <p className="mt-2 text-sm text-wf-text-secondary">
        Bunlar AI-nin sizə uyğun sahə və proqramları tövsiyə etməsinə köməy
        edir.
      </p>

      <div className="mt-8">
        <FormField
          id="interests"
          label="Maraq sahələri"
          error={errors.interests?.message}
        >
          <Controller
            control={control}
            name="interests"
            render={({ field }) => (
              <ChipInput
                values={field.value ?? []}
                onChange={field.onChange}
                placeholder="Məsələn, süni intellekt"
                addLabel="Maraq əlavə et"
              />
            )}
          />
        </FormField>
      </div>

      <StepFooter
        onBack={goBack}
        isSubmitting={isSubmitting}
        nextLabel="Tamamla"
      />
    </form>
  );
}
