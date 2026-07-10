"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import TagChip from "./TagChip";

type ChipInputProps = {
  values: string[];
  onChange: (values: string[]) => void;
  placeholder: string;
  addLabel: string;
};

export default function ChipInput({
  values,
  onChange,
  placeholder,
  addLabel,
}: ChipInputProps) {
  const [draft, setDraft] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const addValue = () => {
    const trimmed = draft.trim();
    if (trimmed && !values.includes(trimmed)) {
      onChange([...values, trimmed]);
    }
    setDraft("");
    setIsAdding(false);
  };

  const removeValue = (value: string) => {
    onChange(values.filter((v) => v !== value));
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {values.map((value, index) => (
        <TagChip
          key={value}
          label={value}
          index={index}
          onRemove={() => removeValue(value)}
        />
      ))}

      {isAdding ? (
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addValue();
            }
            if (e.key === "Escape") {
              setDraft("");
              setIsAdding(false);
            }
          }}
          onBlur={addValue}
          placeholder={placeholder}
          className="rounded-full border border-[var(--wf-border)] bg-wf-surface-raised px-3.5 py-1.5 text-sm text-wf-text-primary placeholder:text-wf-text-muted focus:border-wf-primary focus:outline-none"
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsAdding(true)}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[var(--wf-border)] px-3.5 py-1.5 text-sm font-medium text-wf-text-secondary transition-colors duration-200 hover:border-[var(--wf-border-strong)] hover:text-wf-text-primary"
        >
          <Plus className="h-3.5 w-3.5" />
          {addLabel}
        </button>
      )}
    </div>
  );
}
