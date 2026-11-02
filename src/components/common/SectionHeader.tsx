interface SectionHeaderProps {
  index: string;
  label: string;
}

export default function SectionHeader({ index, label }: SectionHeaderProps) {
  return (
    <p className="label flex items-center gap-3">
      <span className="h-2 w-2 bg-signal" aria-hidden="true" />
      <span>{index}</span>
      <span className="text-muted">/</span>
      <span>{label}</span>
    </p>
  );
}
