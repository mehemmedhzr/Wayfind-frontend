"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { COUNTRY_OPTIONS } from "./countryOptions";
import TagChip from "./TagChip";

type CountryChipInputProps = {
  values: string[];
  onChange: (values: string[]) => void;
};

export default function CountryChipInput({
  values,
  onChange,
}: CountryChipInputProps) {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const remainingOptions = COUNTRY_OPTIONS.filter(
    (option) => !values.includes(option.label),
  );

  const addCountry = (label: string) => {
    onChange([...values, label]);
    setIsPickerOpen(false);
  };

  const removeCountry = (label: string) => {
    onChange(values.filter((v) => v !== label));
  };

  return (
    <div className="relative flex flex-wrap items-center gap-2">
      {values.map((label, index) => {
        const option = COUNTRY_OPTIONS.find((o) => o.label === label);
        return (
          <TagChip
            key={label}
            label={option ? `${option.flag} ${option.label}` : label}
            index={index}
            onRemove={() => removeCountry(label)}
          />
        );
      })}

      <button
        type="button"
        onClick={() => setIsPickerOpen((open) => !open)}
        className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[var(--wf-border)] px-3.5 py-1.5 text-sm font-medium text-wf-text-secondary transition-colors duration-200 hover:border-[var(--wf-border-strong)] hover:text-wf-text-primary"
      >
        <Plus className="h-3.5 w-3.5" />
        Ölkə əlavə et
      </button>

      {isPickerOpen && (
        <div className="absolute top-full left-0 z-10 mt-2 max-h-56 w-56 overflow-y-auto rounded-[var(--wf-radius-md)] border border-[var(--wf-border)] bg-wf-surface-raised p-1.5 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.5)]">
          {remainingOptions.length === 0 ? (
            <p className="px-3 py-2 text-sm text-wf-text-muted">
              Bütün ölkələr seçildi
            </p>
          ) : (
            remainingOptions.map((option) => (
              <button
                key={option.label}
                type="button"
                onClick={() => addCountry(option.label)}
                className="flex w-full cursor-pointer items-center gap-2 rounded-[var(--wf-radius-sm)] px-3 py-2 text-left text-sm text-wf-text-primary transition-colors duration-200 hover:bg-wf-surface"
              >
                <span>{option.flag}</span>
                {option.label}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
