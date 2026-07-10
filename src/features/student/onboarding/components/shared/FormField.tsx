import type { ReactNode } from "react";

type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
};

export default function FormField({
  id,
  label,
  error,
  hint,
  children,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-wf-text-primary"
      >
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
      {hint && !error && (
        <p className="mt-1.5 text-xs text-wf-text-muted">{hint}</p>
      )}
      {error && (
        <p className="mt-1.5 text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
