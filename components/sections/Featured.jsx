import { P } from "@/lib/palette";
import { FadeUp, Magnetic } from "@/components/ui/motion";
import { AssetEventCollateral } from "@/components/assets/film-ooh";

export function Featured() {
  return (
    <section aria-labelledby="featured-heading" style={{
      padding: "clamp(60px, 10vw, 100px) clamp(20px, 4vw, 36px)",
    }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <FadeUp>
          <header style={{
            display: "flex", alignItems: "center", gap: "14px", marginBottom: "36px",
          }}>
            <p className="type-label">Case Study — Fieldnote</p>
            <span style={{ flex: 1, height: "1px", background: P.hair }} />
            <span className="type-mono" style={{ fontSize: "11px", color: P.dim, letterSpacing: "0.1em" }}>
              2023 — ONGOING
            </span>
          </header>
        </FadeUp>

        <article aria-labelledby="featured-heading">
          <FadeUp delay={0.1}>
            <figure style={{
              position: "relative", overflow: "hidden",
              aspectRatio: "16/9", marginBottom: "48px",
              background: P.ink, margin: "0 0 48px",
            }}>
              <AssetEventCollateral event="FIELDNOTE" date="HARVEST MARKET 2025" />
              <figcaption className="sr-only">
                Fieldnote Harvest Market event collateral — poster, signage, wayfinding system
              </figcaption>
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(180deg, transparent 45%, rgba(26,22,19,0.75) 100%)",
              }} />
              <div style={{
                position: "absolute",
                bottom: "clamp(20px, 3vw, 40px)",
                left: "clamp(20px, 3vw, 40px)",
                right: "clamp(20px, 3vw, 40px)",
                display: "flex", justifyContent: "space-between",
                alignItems: "end", gap: "clamp(20px, 3vw, 40px)", flexWrap: "wrap",
              }}>
                <div style={{ maxWidth: "780px" }}>
                  <p className="type-mono" style={{
                    fontSize: "11px", color: P.paper, letterSpacing: "0.15em",
                    textTransform: "uppercase", opacity: 0.7, marginBottom: "20px",
                  }}>
                    Farm-Direct Marketplace
                  </p>
                  <h2 id="featured-heading" style={{
                    fontSize: "clamp(24px, 4vw, 56px)", color: P.paper,
                    lineHeight: 1.02, letterSpacing: "-0.025em", fontWeight: 500,
                  }}>
                    A twelve-farmer collective, turned into a{" "}
                    <span className="type-serif-emphasis" style={{ color: "#E8C874", fontWeight: 400 }}>
                      forty-seven-thousand
                    </span>{" "}
                    subscriber brand.
                  </h2>
                </div>
                <Magnetic strength={0.25}>
                  <a href="#" aria-label="Read the full Fieldnote case study" style={{
                    display: "inline-flex", alignItems: "center", gap: "12px",
                    padding: "16px 24px", background: P.paper, color: P.ink,
                    borderRadius: "100px", textDecoration: "none",
                    fontSize: "13px", fontWeight: 400,
                    whiteSpace: "nowrap", flexShrink: 0,
                  }}>
                    Read the full study <span aria-hidden="true">↗</span>
                  </a>
                </Magnetic>
              </div>
            </figure>
          </FadeUp>

          <dl className="sv-featured-metrics" style={{ margin: 0 }}>
            {[
              { k: "Subscribers", v: "47K", sub: "nine months, organic" },
              { k: "Retention", v: "62%", sub: "monthly repeat" },
              { k: "Revenue", v: "8.2×", sub: "year-on-year" },
              { k: "Press", v: "14", sub: "Vogue, GQ, CN Traveller" },
            ].map((m, i) => (
              <FadeUp key={m.k} delay={i * 0.08}>
                <div style={{ padding: "clamp(24px, 4vw, 40px) clamp(20px, 3vw, 32px)", background: P.paper }}>
                  <dt className="type-caption" style={{ marginBottom: "16px" }}>{m.k}</dt>
                  <dd style={{
                    fontSize: "clamp(44px, 6vw, 68px)", lineHeight: 1,
                    fontWeight: 500, letterSpacing: "-0.04em", color: P.ink, margin: 0,
                  }}>{m.v}</dd>
                  <p className="type-serif-emphasis" style={{ fontSize: "14px", color: P.muted, marginTop: "8px", fontWeight: 400 }}>
                    {m.sub}
                  </p>
                </div>
              </FadeUp>
            ))}
          </dl>
        </article>
      </div>
    </section>
  );
}

export function PracticeIntro() {
  return (
    <section id="practice" aria-labelledby="practice-heading" style={{
      padding: "clamp(100px, 15vw, 180px) clamp(20px, 4vw, 36px) clamp(60px, 8vw, 80px)",
      borderTop: `1px solid ${P.hair}`,
    }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <FadeUp>
          <p className="type-label" style={{ marginBottom: "20px" }}>
            The Practice — Six Disciplines, One Studio
          </p>
          <h2 id="practice-heading" style={{
            fontSize: "clamp(36px, 5.5vw, 92px)",
            lineHeight: 0.95, letterSpacing: "-0.03em",
            color: P.ink, fontWeight: 500, maxWidth: "1200px",
            marginBottom: "40px",
          }}>
            We work across the{" "}
            <span className="type-serif-emphasis" style={{ color: P.gold, fontWeight: 400 }}>
              full brand ecosystem
            </span>
            {" "}— so good ideas don&apos;t stop at the logo.
          </h2>
          <p style={{ fontSize: "clamp(15px, 1.4vw, 17px)", lineHeight: 1.55, color: P.inkSoft, maxWidth: "600px" }}>
            Every discipline lives under one roof, with one team. No handoffs, no surprise sub-contractors, no lost thread between strategy and execution.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
