const ITEMS = [
  "Social Media",
  "Digital Advertising",
  "Web Development",
  "App Development",
  "Influencer Marketing",
  "Branding & Design",
  "Outdoor Marketing",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="bg-gold py-3 overflow-hidden whitespace-nowrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="font-accent text-[0.75rem] font-semibold tracking-[0.2em] uppercase text-black px-7 flex-shrink-0 flex items-center gap-5 after:content-['✦'] after:text-[0.55rem]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
