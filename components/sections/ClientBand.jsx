import { P } from "@/lib/palette";
import { MicroMark } from "@/components/ui/Marks";

export function ClientBand() {
  const names = [
    "Kindred & Co.", "Verana Studios", "North Meridian",
    "Atelier Noon", "Fieldnote", "Ode Skincare",
    "Pila House", "Lumen", "Hourlight", "Kaveri Co.",
    "Paperdaze", "The Everyday",
  ];
  return (
    <section aria-label="Recent clients" style={{
      padding: "32px 0", overflow: "hidden",
      borderTop: `1px solid ${P.hair}`, borderBottom: `1px solid ${P.hair}`,
    }}>
      <div aria-hidden="true" style={{
        display: "flex", alignItems: "center",
        animation: "marquee 60s linear infinite", whiteSpace: "nowrap",
      }}>
        {[...names, ...names].map((n, i) => (
          <span key={i} style={{
            display: "inline-flex", alignItems: "center",
            padding: "0 clamp(20px, 3vw, 36px)", flexShrink: 0,
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(20px, 3vw, 32px)",
            fontWeight: 400, color: P.ink, letterSpacing: "-0.01em",
          }}>
            {n}
            <span style={{ margin: "0 0 0 clamp(20px, 3vw, 36px)" }}>
              <MicroMark size={10} color={P.gold} />
            </span>
          </span>
        ))}
      </div>
      <ul className="sr-only">
        {names.map((n) => <li key={n}>{n}</li>)}
      </ul>
    </section>
  );
}
