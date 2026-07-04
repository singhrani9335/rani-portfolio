interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-14">
      {subtitle && (
        <p className="text-cyan-400 text-sm font-medium mb-2">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl md:text-5xl font-bold">
        {title}
      </h2>

      <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-cyan-400 mx-auto mt-4 rounded-full" />
    </div>
  );
}