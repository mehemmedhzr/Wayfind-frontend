import type { ReactNode } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/lib/utils";

type RoleAccent = "student" | "provider";

type RoleOptionCardProps = {
  id: string;
  value: string;
  title: string;
  description: string;
  note?: string;
  icon: ReactNode;
  accent: RoleAccent;
  registration: UseFormRegisterReturn;
};

const ACCENT_STYLES: Record<
  RoleAccent,
  { iconBg: string; overlay: string; indicator: string; note: string }
> = {
  student: {
    iconBg: "bg-wf-primary",
    overlay:
      "peer-checked:border-wf-primary peer-checked:ring-2 peer-checked:ring-wf-primary/30",
    indicator: "peer-checked:border-wf-primary peer-checked:bg-wf-primary",
    note: "text-wf-primary-soft",
  },
  provider: {
    iconBg: "bg-wf-provider",
    overlay:
      "peer-checked:border-wf-provider peer-checked:ring-2 peer-checked:ring-wf-provider/30",
    indicator: "peer-checked:border-wf-provider peer-checked:bg-wf-provider",
    note: "text-wf-provider",
  },
};

export default function RoleOptionCard({
  id,
  value,
  title,
  description,
  note,
  icon,
  accent,
  registration,
}: RoleOptionCardProps) {
  const styles = ACCENT_STYLES[accent];

  return (
    <label
      htmlFor={id}
      className="relative block cursor-pointer rounded-[var(--wf-radius-lg)] border border-[var(--wf-border)] bg-wf-surface-raised p-4 transition-colors duration-200 hover:border-[var(--wf-border-strong)]"
    >
      <input
        id={id}
        type="radio"
        value={value}
        className="peer sr-only"
        {...registration}
      />

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[var(--wf-radius-lg)] border-2 border-transparent transition-all duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-wf-text-primary/40",
          styles.overlay,
        )}
      />

      <div className="flex items-start gap-3">
        <span
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white",
            styles.iconBg,
          )}
        >
          {icon}
        </span>

        <div className="min-w-0 flex-1 pr-6">
          <p className="font-heading font-semibold text-wf-text-primary">
            {title}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-wf-text-secondary">
            {description}
          </p>
          {note && (
            <p className={cn("mt-1.5 text-xs font-medium", styles.note)}>
              {note}
            </p>
          )}
        </div>
      </div>

      <span
        aria-hidden="true"
        className={cn(
          "absolute right-4 top-4 h-5 w-5 rounded-full border-2 border-[var(--wf-border-strong)] transition-colors duration-200",
          styles.indicator,
        )}
      />
    </label>
  );
}
