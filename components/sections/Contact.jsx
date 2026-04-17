"use client";
import { P, BRAND } from "@/lib/palette";
import { MaskReveal, FadeUp, Magnetic } from "@/components/ui/motion";
import { MicroMark } from "@/components/ui/Marks";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" style={{
      padding: "clamp(120px, 18vw, 200px) clamp(20px, 4vw, 36px) clamp(100px, 15vw, 160px)",
      borderTop: `1px solid ${P.hair}`,
      background: P.paper, position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "-20%", right: "-10%",
        width: "clamp(400px, 60vw, 700px)",
        height: "clamp(400px, 60vw, 700px)",
        opacity: 0.3, pointerEvents: "none",
      }} aria-hidden="true">
        <svg viewBox="0 0 700 700">
          <circle cx="350" cy="350" r="300" fill={P.gold} opacity="0.15" />
          <circle cx="350" cy="350" r="220" fill={P.gold} opacity="0.2" />
          <circle cx="350" cy="350" r="140" fill={P.gold} opacity="0.35" />
        </svg>
      </div>

      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", position: "relative" }}>
        <FadeUp>
          <p className="type-label" style={{ marginBottom: "40px" }}>
            <MicroMark size={10} color={P.gold} /> &nbsp; New Business — {BRAND.email}
          </p>
        </FadeUp>

        <h2 id="contact-heading" className="sv-contact-heading">
          <span style={{ display: "block" }}>
            <MaskReveal delay={0.1}>Let&apos;s build</MaskReveal>
          </span>
          <span style={{ display: "block" }}>
            <MaskReveal delay={0.25}>
              <span className="type-serif-emphasis" style={{ color: P.gold, fontWeight: 400 }}>
                something
              </span>
            </MaskReveal>
          </span>
          <span style={{ display: "block" }}>
            <MaskReveal delay={0.4}>worth remembering.</MaskReveal>
          </span>
        </h2>

        <div className="sv-contact-grid">
          <FadeUp delay={0.5}>
            <div>
              <p className="type-caption" style={{ marginBottom: "16px" }}>New Business</p>
              <a href={`mailto:${BRAND.email}`} style={{
                fontFamily: "'Fraunces', serif", fontSize: "clamp(20px, 2.4vw, 28px)",
                color: P.ink, fontWeight: 400, textDecoration: "none",
                letterSpacing: "-0.015em",
                borderBottom: `1px solid ${P.hair}`, paddingBottom: "4px",
                display: "inline-block", wordBreak: "break-word",
              }}>
                {BRAND.email}
              </a>
              <p style={{ fontSize: "14px", color: P.muted, marginTop: "16px", lineHeight: 1.55 }}>
                For briefs, timelines, budgets. We respond within two working days and schedule a 30-minute call with every enquiry.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.6}>
            <div>
              <p className="type-caption" style={{ marginBottom: "16px" }}>Studio</p>
              <address style={{
                fontStyle: "normal",
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(15px, 1.6vw, 18px)",
                color: P.ink, fontWeight: 400, lineHeight: 1.4,
              }}>
                Social Verse Studio<br/>
                {BRAND.address}
              </address>
              <p className="type-mono" style={{ fontSize: "11px", color: P.muted, marginTop: "16px", letterSpacing: "0.1em" }}>
                MON—FRI · 10:00—19:00 IST<br/>
                {BRAND.phone}
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.7}>
            <div>
              <p className="type-caption" style={{ marginBottom: "16px" }}>Availability</p>
              <p style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(15px, 1.6vw, 18px)",
                color: P.ink, fontWeight: 400, lineHeight: 1.4,
              }}>
                Taking on <span style={{ color: P.gold }}>two new engagements</span> for Q2 2026. Book discovery calls before April 30th to start by June.
              </p>
              <Magnetic strength={0.2}>
                <a href={`mailto:${BRAND.email}?subject=New Project Enquiry`} style={{
                  display: "inline-flex", alignItems: "center", gap: "12px",
                  padding: "16px 24px", background: P.ink, color: P.paper,
                  borderRadius: "100px", textDecoration: "none",
                  fontSize: "13px", fontWeight: 400, marginTop: "24px",
                }}>
                  Start a project <span aria-hidden="true">↗</span>
                </a>
              </Magnetic>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
