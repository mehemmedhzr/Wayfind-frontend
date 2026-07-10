import { X } from "lucide-react";

const CHIP_GRADIENTS = [
  "linear-gradient(135deg, #7C3AED, #EC4899)",
  "linear-gradient(135deg, #3B82F6, #7C3AED)",
  "linear-gradient(135deg, #EC4899, #F97316)",
  "linear-gradient(135deg, #10B981, #3B82F6)",
];

type TagChipProps = {
  label: string;
  index: number;
  onRemove: () => void;
};

export default function TagChip({ label, index, onRemove }: TagChipProps) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium text-white"
      style={{ backgroundImage: CHIP_GRADIENTS[index % CHIP_GRADIENTS.length] }}
    >
      {label}
      <button
        type="button"
        onClick={onRemove}
        aria-label={`${label} sil`}
        className="cursor-pointer rounded-full transition-opacity duration-200 hover:opacity-70"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </span>
  );
}
