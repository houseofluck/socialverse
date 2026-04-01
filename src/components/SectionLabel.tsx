export default function SectionLabel({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 font-accent text-[0.7rem] tracking-[0.25em] uppercase text-gold mb-4 font-medium ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="w-7 h-[1.5px] bg-gold" />
      {children}
    </div>
  );
}
