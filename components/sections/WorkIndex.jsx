"use client";
import { useState } from "react";
import { P } from "@/lib/palette";
import { FadeUp } from "@/components/ui/motion";
import { MicroMark } from "@/components/ui/Marks";
import {
  AssetBottle, AssetCoffeeBag,
} from "@/components/assets/packaging-social";
import {
  AssetPoster, AssetEventCollateral,
} from "@/components/assets/film-ooh";

export function WorkIndex() {
  const [hovered, setHovered] = useState(null);

  const projects = [
    {
      n: "2501", client: "Kindred & Co.", type: "Brand · Packaging · Digital",
      meta: "Wellness D2C", year: "2025",
      blurb: "Rebuilding a heritage apothecary for a generation that reads ingredient lists.",
      Asset: () => <AssetBottle label="KINDRED" subtitle="Facial Serum" />,
    },
    {
      n: "2502", client: "Verana Studios", type: "Digital Product · Art Direction",
      meta: "Interior Architecture", year: "2025",
      blurb: "A site as considered as the rooms they design — slow, detailed, quietly confident.",
      Asset: () => (
        <img
          src="/media/web/annatar-forge.jpg"
          alt="Verana Studios — web design"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          loading="lazy"
        />
      ),
    },
    {
      n: "2402", client: "North Meridian", type: "Brand · Campaign · Social",
      meta: "Specialty Coffee", year: "2024",
      blurb: "A coffee ritual for the mid-week moment. Built the brand, shot the campaign, ran the launch.",
      Asset: () => <AssetCoffeeBag label="KAVERI" variety="Single Origin" />,
    },
    {
      n: "2401", client: "Atelier Noon", type: "Content · Film · Social",
      meta: "Womenswear", year: "2024",
      blurb: "Photography and motion for a small-batch label that earned its own editorial cadence.",
      Asset: () => <AssetPoster brand="ATELIER NOON" season="SS26" />,
    },
    {
      n: "2301", client: "Fieldnote", type: "Brand · Product · Growth",
      meta: "Farm-direct Marketplace", year: "2023",
      blurb: "A twelve-farmer collective turned into a cult subscription. The case study we refer to most.",
      Asset: () => <AssetEventCollateral />,
    },
  ];

  return (
    <section id="work" aria-labelledby="work-heading" style={{
      padding: "clamp(80px, 10vw, 120px) clamp(20px, 4vw, 36px) 60px",
    }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <FadeUp>
          <header style={{ marginBottom: "clamp(48px, 8vw, 80px)" }}>
            <p className="type-label" style={{ marginBottom: "20px" }}>
              <MicroMark size={10} color={P.gold} /> &nbsp; Index of Work, 2023 — 2025
            </p>
            <h2 id="work-heading" style={{
              fontSize: "clamp(36px, 5.5vw, 88px)",
              lineHeight: 0.95, letterSpacing: "-0.03em",
              color: P.ink, fontWeight: 500, maxWidth: "900px",
            }}>
              Five recent engagements.{" "}
              <span className="type-serif-emphasis" style={{ color: P.gold, fontWeight: 400 }}>
                Hover for detail.
              </span>
            </h2>
          </header>
        </FadeUp>

        <ol style={{ listStyle: "none" }}>
          {projects.map((p, i) => (
            <FadeUp key={p.n} delay={i * 0.04}>
              <li>
                <a
                  href={`#work-${p.n}`}
                  aria-label={`${p.client} — ${p.meta}, ${p.year}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="sv-work-row"
                  style={{ opacity: hovered !== null && hovered !== i ? 0.35 : 1 }}
                >
                  <span className="type-mono" style={{ fontSize: "12px", color: P.dim, letterSpacing: "0.1em" }}>
                    № {p.n}
                  </span>

                  <div>
                    <h3 style={{
                      fontSize: "clamp(22px, 3vw, 44px)",
                      fontWeight: 500, letterSpacing: "-0.02em",
                      color: hovered === i ? P.gold : P.ink,
                      transition: "color 0.4s ease", lineHeight: 1.05,
                    }}>
                      {p.client}
                    </h3>
                    <p className="type-serif-emphasis" style={{
                      fontSize: "clamp(13px, 1.4vw, 16px)",
                      color: P.muted, marginTop: "4px", fontWeight: 400,
                    }}>{p.meta}</p>
                  </div>

                  <p className="type-caption" style={{ color: P.muted }}>{p.type}</p>

                  <p style={{ fontSize: "14px", color: P.muted, lineHeight: 1.5, maxWidth: "320px" }}>
                    {p.blurb}
                  </p>

                  <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "14px" }}>
                    <span className="type-mono" style={{ fontSize: "12px", color: P.dim }}>{p.year}</span>
                    <span style={{
                      width: "36px", height: "36px", borderRadius: "50%",
                      border: `1px solid ${hovered === i ? P.gold : P.hair}`,
                      background: hovered === i ? P.gold : "transparent",
                      color: hovered === i ? P.paper : P.ink,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "12px", transition: "all 0.4s ease",
                      transform: hovered === i ? "rotate(45deg)" : "rotate(0deg)",
                    }} aria-hidden="true">→</span>
                  </div>
                </a>
              </li>
            </FadeUp>
          ))}
        </ol>
        <div style={{ borderTop: `1px solid ${P.hair}` }} />

        {hovered !== null && (
          <div aria-hidden="true" style={{
            position: "fixed", top: "50%", left: "50%",
            width: "min(480px, 80vw)", height: "min(360px, 60vw)",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none", zIndex: 100,
            boxShadow: "0 40px 80px rgba(26,22,19,0.3)",
            background: P.paper,
          }}>
            {(() => { const A = projects[hovered].Asset; return <A />; })()}
          </div>
        )}
      </div>
    </section>
  );
}
