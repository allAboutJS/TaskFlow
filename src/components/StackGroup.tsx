interface StackGroupProps {
  title: string;
  children: React.ReactNode;
}

export default function StackGroup({ title, children }: StackGroupProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
        {title}
      </h3>

      <div className="mt-3 flex flex-wrap gap-3">{children}</div>
    </div>
  );
}
