"use client";

import { ArrowRight } from "lucide-react";

type StepFooterProps = {
  onBack?: () => void;
  isSubmitting?: boolean;
  nextLabel?: string;
};

export default function StepFooter({
  onBack,
  isSubmitting,
  nextLabel = "Davam et",
}: StepFooterProps) {
  return (
    <div className="mt-10 flex items-center justify-between gap-3">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="cursor-pointer rounded-[var(--wf-radius-md)] border border-[var(--wf-border)] bg-transparent px-5 py-2.5 text-sm font-semibold text-wf-text-primary transition-colors duration-200 hover:border-[var(--wf-border-strong)]"
        >
          Geri
        </button>
      ) : (
        <span />
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex cursor-pointer items-center gap-2 rounded-[var(--wf-radius-md)] bg-wf-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_color-mix(in_srgb,var(--wf-primary)_45%,transparent)] transition-all duration-200 hover:shadow-[0_10px_28px_-6px_color-mix(in_srgb,var(--wf-primary)_55%,transparent)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wf-primary-soft focus-visible:ring-offset-2 focus-visible:ring-offset-wf-bg active:scale-[0.98] active:brightness-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none"
      >
        {nextLabel}
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
