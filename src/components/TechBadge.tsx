interface TechBadgeProps {
  label: string;
}

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-lg border bg-white px-3 py-1.5 text-sm text-gray-700">
      {label}
    </span>
  );
}
