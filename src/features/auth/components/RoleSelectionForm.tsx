"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ROUTES } from "@/constants/routes";
import { type RoleSchemaType, roleSchema } from "@/schemas/auth/role";
import RoleOptionCard from "./RoleOptionCard";

const roleOptions = [
  {
    id: "role-student",
    value: "student",
    title: "Tələbəyəm",
    description:
      "Xaricdə təhsil almaq, AI yol xəritəsi və mütəxəssis dəstəyi axtarıram.",
    icon: <GraduationCap className="h-5 w-5" />,
    accent: "student",
  },
  {
    id: "role-provider",
    value: "provider",
    title: "Provayderəm",
    description: "Müəllim və ya konsultant kimi xidmət təklif edirəm.",
    note: "Növbəti: müəllim / konsultant növünü seçəcəksiniz.",
    icon: <BriefcaseBusiness className="h-5 w-5" />,
    accent: "provider",
  },
] as const;

export default function RoleSelectionForm() {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<RoleSchemaType>({
    resolver: zodResolver(roleSchema),
  });

  const onSubmit = (data: RoleSchemaType) => {
    router.push(
      data.userRole === "student"
        ? ROUTES.registerStudent
        : ROUTES.registerProvider,
    );
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div role="radiogroup" aria-label="Hesab növü" className="space-y-3">
        {roleOptions.map((option) => (
          <RoleOptionCard
            key={option.id}
            id={option.id}
            value={option.value}
            title={option.title}
            description={option.description}
            note={"note" in option ? option.note : undefined}
            icon={option.icon}
            accent={option.accent}
            registration={register("userRole")}
          />
        ))}
      </div>

      {errors.userRole && (
        <p className="mt-3 text-sm text-red-400" role="alert">
          {errors.userRole.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 flex w-full cursor-pointer items-center justify-center rounded-[var(--wf-radius-md)] bg-wf-gradient-brand px-4 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_color-mix(in_srgb,var(--wf-primary)_45%,transparent)] transition-all duration-200 hover:shadow-[0_10px_28px_-6px_color-mix(in_srgb,var(--wf-primary)_55%,transparent)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wf-primary-soft focus-visible:ring-offset-2 focus-visible:ring-offset-wf-surface active:scale-[0.98] active:brightness-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none disabled:active:scale-100"
      >
        Davam et
      </button>
    </form>
  );
}
