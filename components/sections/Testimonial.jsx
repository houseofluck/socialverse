"use client";
import { useState, useEffect } from "react";
import { P } from "@/lib/palette";
import { FadeUp } from "@/components/ui/motion";
import { MicroMark } from "@/components/ui/Marks";

const QUOTES = [
  {
    text: "They sat with us for six weeks before showing a single sketch. By the time we saw the work, it felt less like a pitch and more like somebody had been paying attention.",
    author: "Anika Shroff",
    role: "Founder",
    org: "Kindred & Co.",
    image: "/media/portraits/anika.jpg",
  },
  {
    text: "The site they built feels like the rooms we design — quiet, detailed, full of good decisions you notice on the third visit. We've stopped briefing other agencies.",
    author: "Rohan Mehta",
    role: "Creative Director",
    org: "Verana Studios",
    image: "/media/portraits/rohan.jpg",
  },
  {
    text: "They're the studio I call when I want the work to actually matter. Not perform. Matter.",
    author: "Ishita Rao",
    role: "Head of Brand",
    org: "North Meridian",
    image: "/media/portraits/ishita.jpg",
  },
];

export function Testimonial() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % QUOTES.length), 7000);
    return () => clearInterval(t);
  }, []);

  const q = QUOTES[i];

  return (
    <section aria-label="Client testimonials" style={{
      padding: "clamp(100px, 15vw, 160px) clamp(20px, 4vw, 36px)",
      borderTop: `1px solid ${P.hair}`,
    }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <FadeUp>
          <div style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "clamp(24px, 5vw, 60px)",
            alignItems: "start",
          }}>
            <p className="type-label" style={{ paddingTop: "12px" }}>
              <MicroMark size={10} color={P.gold} /> &nbsp; From the Clients
            </p>

            <div>
              <blockquote style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(22px, 3.2vw, 48px)",
                lineHeight: 1.25, letterSpacing: "-0.02em",
                color: P.ink, fontWeight: 400,
                margin: 0, maxWidth: "1100px",
                minHeight: "clamp(160px, 20vw, 260px)",
                transition: "opacity 0.6s ease",
              }}>
                <span style={{ color: P.gold, fontSize: "1.2em" }} aria-hidden="true">&ldquo;</span>
                {q.text}
                <span style={{ color: P.gold, fontSize: "1.2em" }} aria-hidden="true">&rdquo;</span>
              </blockquote>

              <figcaption style={{
                marginTop: "clamp(24px, 5vw, 48px)",
                display: "flex", alignItems: "center", gap: "20px",
                paddingTop: "24px", borderTop: `1px solid ${P.hair}`,
                flexWrap: "wrap",
              }}>
                <div style={{
                  width: "48px", height: "48px",
                  borderRadius: "50%", overflow: "hidden",
                  flexShrink: 0,
                  background: P.gold,
                }}>
                  <img
                    src={q.image}
                    alt={`Portrait of ${q.author}, ${q.role} at ${q.org}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    loading="lazy"
                  />
                </div>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 500, color: P.ink }}>
                    {q.author}
                  </div>
                  <div className="type-caption" style={{ fontSize: "10px", marginTop: "2px" }}>
                    {q.role} &nbsp;·&nbsp; {q.org}
                  </div>
                </div>

                <div role="tablist" aria-label="Select testimonial" style={{
                  marginLeft: "auto", display: "flex", gap: "8px",
                }}>
                  {QUOTES.map((_, idx) => (
                    <button
                      key={idx}
                      role="tab"
                      aria-selected={idx === i}
                      aria-label={`Show testimonial ${idx + 1}`}
                      onClick={() => setI(idx)}
                      style={{
                        width: idx === i ? "24px" : "6px",
                        height: "6px",
                        borderRadius: "3px",
                        background: idx === i ? P.gold : P.hair,
                        border: "none", padding: 0, cursor: "pointer",
                        transition: "all 0.4s ease",
                      }}
                    />
                  ))}
                </div>
              </figcaption>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
