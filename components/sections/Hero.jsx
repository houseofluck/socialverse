"use client";
import { P } from "@/lib/palette";
import { useTime } from "@/lib/hooks";
import { MaskReveal, FadeUp, Magnetic } from "@/components/ui/motion";
import { AssetHeroComposition } from "@/components/assets/film-ooh";

export function Hero() {
  const time = useTime();
  return (
    <section aria-labelledby="hero-heading" style={{
      minHeight: "100vh",
      padding: "140px clamp(20px, 4vw, 36px) 60px",
      position: "relative", display: "flex",
      flexDirection: "column", justifyContent: "space-between",
    }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", width: "100%", position: "relative" }}>
        <div style={{
          position: "absolute", top: "-40px", right: "-40px",
          width: "clamp(280px, 40vw, 600px)",
          height: "clamp(220px, 30vw, 440px)",
          opacity: 0.9, pointerEvents: "none",
        }} aria-hidden="true">
          <AssetHeroComposition />
        </div>

        <FadeUp>
          <p className="type-mono" style={{
            fontSize: "11px", color: P.muted, letterSpacing: "0.1em",
            textTransform: "uppercase", marginBottom: "clamp(48px, 8vw, 80px)",
            position: "relative",
          }}>
            <span style={{ color: P.gold }}>●</span> A creative studio
            <span style={{ color: P.dim, margin: "0 10px" }}>—</span>
            for modern consumer brands
          </p>
        </FadeUp>

        <h1 id="hero-heading" style={{
          fontSize: "clamp(44px, 10vw, 168px)",
          lineHeight: 0.88, letterSpacing: "-0.035em",
          color: P.ink, fontWeight: 500,
          fontFamily: "'Archivo', sans-serif",
          position: "relative",
        }}>
          <span style={{ display: "block" }}>
            <MaskReveal delay={0.15}>We build</MaskReveal>
          </span>
          <span style={{ display: "block" }}>
            <MaskReveal delay={0.3}>
              <span className="type-serif-emphasis" style={{ color: P.gold, fontSize: "0.96em", paddingRight: "0.1em", fontWeight: 400 }}>
                the brands
              </span>
            </MaskReveal>
          </span>
          <span style={{ display: "block" }}>
            <MaskReveal delay={0.45}>worth remembering.</MaskReveal>
          </span>
        </h1>

        <div className="sv-hero-trio">
          <FadeUp delay={0.7}>
            <p style={{ fontSize: "clamp(16px, 1.2vw, 18px)", lineHeight: 1.55, color: P.inkSoft, maxWidth: "440px" }}>
              A full-service studio in Mumbai, building brand systems, digital products, and culture-first campaigns for the next generation of consumer brands.
            </p>
          </FadeUp>

          <FadeUp delay={0.8}>
            <div>
              <p className="type-caption" style={{ marginBottom: "12px" }}>Practice</p>
              <p className="type-display-serif" style={{ fontSize: "clamp(16px, 1.5vw, 20px)", lineHeight: 1.4, color: P.ink }}>
                Brand identity. Digital product.<br/>
                <span className="type-emphasis">Content & film.</span> <span className="type-emphasis">Growth & culture.</span>
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.9}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Magnetic strength={0.25}>
                <a href="#work" style={{
                  display: "inline-flex", alignItems: "center", gap: "14px",
                  padding: "16px 24px", background: P.ink, color: P.paper,
                  borderRadius: "100px", textDecoration: "none",
                  fontSize: "14px", fontWeight: 400,
                }}>
                  See selected work
                  <span style={{
                    width: "22px", height: "22px", borderRadius: "50%",
                    background: P.paper, color: P.ink,
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    fontSize: "11px",
                  }} aria-hidden="true">↗</span>
                </a>
              </Magnetic>
              <a href="#contact" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "14px 20px", color: P.ink, fontSize: "13px",
                textDecoration: "none",
                borderBottom: `1px solid ${P.ink}`, alignSelf: "flex-start",
              }}>
                Enquire about a project
              </a>
            </div>
          </FadeUp>
        </div>
      </div>

      <FadeUp delay={1.1}>
        <div role="status" aria-live="polite" className="sv-hero-status" style={{
          maxWidth: "var(--container-max)",
          margin: "clamp(48px, 8vw, 100px) auto 0",
          width: "100%",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px", color: P.muted, letterSpacing: "0.08em",
        }}>
          <span>MUMBAI 19.0760°N — {time || "—"}</span>
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#6BA368", animation: "softPulse 2.4s ease-in-out infinite" }} />
            TAKING TWO NEW PROJECTS, Q2 2026
          </span>
          <span>EST. 2022 — MMXXII</span>
        </div>
      </FadeUp>
    </section>
  );
}
