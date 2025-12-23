interface DemoCardProps {
  title: string;
  description: string;
}

export default function DemoCard({ title, description }: DemoCardProps) {
  return (
    <div className="rounded-xl border border-zinc-300 bg-white p-6 cursor-default hover:shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
