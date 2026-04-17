import { P } from "@/lib/palette";
import { FadeUp } from "@/components/ui/motion";
import { MicroMark } from "@/components/ui/Marks";

const ESSAYS = [
  {
    n: "No. 14", date: "OCT 2025",
    title: "On slow brands, and why they compound",
    dek: "Three years, four hundred crore, one cult following. A field report on what the D2C category is getting wrong — and what one Mumbai studio has been quietly getting right.",
    read: "11 min read",
    cover: "/media/editorial/community.jpg",
    alt: "Editorial illustration — community as the new storefront",
  },
  {
    n: "No. 13", date: "SEP 2025",
    title: "The feed is the new storefront",
    dek: "Why we design Instagram grids like we design magazines — with hierarchy, cadence, and a section editor.",
    read: "7 min read",
    cover: "/media/editorial/growth.jpg",
    alt: "Editorial illustration — where the money goes vs where it grows",
  },
  {
    n: "No. 12", date: "JUL 2025",
    title: "Packaging as editorial design",
    dek: "The label isn't a marker — it's the first page of the book. A case for treating every surface like a spread.",
    read: "9 min read",
    cover: "/media/editorial/isolation.jpg",
    alt: "Editorial illustration — connection and isolation in modern social life",
  },
];

export function Writing() {
  return (
    <section id="writing" aria-labelledby="writing-heading" style={{
      padding: "clamp(100px, 15vw, 160px) clamp(20px, 4vw, 36px)",
      background: P.paperHi,
      borderTop: `1px solid ${P.hair}`,
    }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <FadeUp>
          <header style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "end", marginBottom: "clamp(48px, 8vw, 80px)",
            gap: "40px", flexWrap: "wrap",
          }}>
            <div>
              <p className="type-label" style={{ marginBottom: "20px" }}>
                <MicroMark size={10} color={P.gold} /> &nbsp; Writing — Studio Journal
              </p>
              <h2 id="writing-heading" style={{
                fontSize: "clamp(36px, 5vw, 80px)", lineHeight: 0.95,
                letterSpacing: "-0.03em", color: P.ink, fontWeight: 500,
              }}>
                Notes from the{" "}
                <span className="type-serif-emphasis" style={{ color: P.gold, fontWeight: 400 }}>
                  practice.
                </span>
              </h2>
            </div>
            <a href="#" className="type-mono" style={{
              fontSize: "11px", color: P.ink, letterSpacing: "0.1em",
              textTransform: "uppercase", textDecoration: "none",
              borderBottom: `1px solid ${P.gold}`, paddingBottom: "2px",
            }}>
              Read the full journal <span aria-hidden="true">↗</span>
            </a>
          </header>
        </FadeUp>

        <div className="sv-writing-grid">
          {ESSAYS.map((e, i) => (
            <FadeUp key={e.n} delay={i * 0.08}>
              <article>
                <a href="#" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                  <figure style={{
                    aspectRatio: "1/1", overflow: "hidden",
                    margin: 0, marginBottom: "24px",
                    background: P.ink,
                  }}>
                    <img
                      src={e.cover}
                      alt={e.alt}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      loading="lazy"
                    />
                  </figure>
                  <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
                    <span className="type-caption" style={{ color: P.gold }}>{e.n}</span>
                    <span className="type-caption">{e.date}</span>
                  </div>
                  <h3 style={{
                    fontSize: "clamp(20px, 2vw, 24px)", lineHeight: 1.15,
                    letterSpacing: "-0.015em", color: P.ink, fontWeight: 500,
                    marginBottom: "12px",
                    fontFamily: "'Fraunces', serif",
                  }}>{e.title}</h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.55, color: P.muted, marginBottom: "20px" }}>
                    {e.dek}
                  </p>
                  <p className="type-caption" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    {e.read} &nbsp;<span aria-hidden="true">→</span>
                  </p>
                </a>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
