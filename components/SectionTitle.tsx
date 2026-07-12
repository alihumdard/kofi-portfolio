import Reveal from "./Reveal";

export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto mb-16 max-w-2xl text-center">
      <h2 className="text-4xl font-extrabold text-[#1f1f25] md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-[#717173]">{subtitle}</p>}
    </Reveal>
  );
}
