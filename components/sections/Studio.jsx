import { P } from "@/lib/palette";
import { FadeUp } from "@/components/ui/motion";
import { MicroMark } from "@/components/ui/Marks";

export function Studio() {
  const principles = [
    { n: "I.", title: "Culture is the craft",
      body: "The brands that win aren't the ones with better ads — they're the ones who read the moment first. Every project begins with a cultural read, not a mood board." },
    { n: "II.", title: "One room, one opinion",
      body: "Strategists, designers, writers, filmmakers, engineers — all under one roof. No handoffs to agencies you've never met. The team in week one ships in week twelve." },
    { n: "III.", title: "Be missed, not tolerated",
      body: "Safe work disappears. We'll show you the confident version and the comfortable version — and tell you which one we'd bet on." },
    { n: "IV.", title: "Slower now, faster later",
      body: "Strategy before design. Design before execution. Execution before scale. Shortcuts are why every feed looks the same in every category." },
  ];

  return (
    <section id="studio" aria-labelledby="studio-heading" style={{
      padding: "clamp(100px, 15vw, 160px) clamp(20px, 4vw, 36px)",
      background: P.ink, color: P.paper,
      borderTop: `1px solid ${P.hair}`,
    }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <FadeUp>
          <header style={{ marginBottom: "clamp(60px, 10vw, 100px)" }}>
            <p className="type-label" style={{ color: P.gold, marginBottom: "20px" }}>
              <MicroMark size={10} color={P.gold} /> &nbsp; The Studio — Principles & Practice
            </p>
            <h2 id="studio-heading" style={{
              fontSize: "clamp(36px, 5.5vw, 92px)", lineHeight: 0.95,
              letterSpacing: "-0.03em", color: P.paper, fontWeight: 500,
              maxWidth: "1100px",
            }}>
              Four principles we&apos;ve{" "}
              <span className="type-serif-emphasis" style={{ color: P.gold, fontWeight: 400 }}>
                earned the right
              </span>
              {" "}to hold.
            </h2>
          </header>
        </FadeUp>

        <ol className="sv-studio-grid">
          {principles.map((p, i) => (
            <FadeUp key={p.n} delay={i * 0.08}>
              <li style={{
                padding: "clamp(32px, 5vw, 56px) clamp(24px, 4vw, 48px)", background: P.ink,
                display: "flex", flexDirection: "column", gap: "20px",
                minHeight: "340px",
              }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
                  <span className="type-mono" style={{ fontSize: "11px", color: P.gold, letterSpacing: "0.2em" }}>
                    {p.n}
                  </span>
                  <span className="type-caption" style={{ color: P.gold, fontSize: "9px" }}>
                    PRINCIPLE {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 style={{
                  fontSize: "clamp(24px, 3vw, 44px)", lineHeight: 1.05,
                  letterSpacing: "-0.025em", color: P.paper, fontWeight: 500,
                }}>{p.title}</h3>
                <p style={{ fontSize: "clamp(14px, 1.4vw, 16px)", lineHeight: 1.6, color: "rgba(239,232,216,0.72)" }}>
                  {p.body}
                </p>
              </li>
            </FadeUp>
          ))}
        </ol>

        <FadeUp delay={0.4}>
          <div className="sv-studio-team" style={{
            marginTop: "clamp(60px, 10vw, 80px)", padding: "48px 0",
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}>
            <div>
              <p className="type-caption" style={{ color: P.gold, marginBottom: "16px" }}>The Team</p>
              <p style={{
                fontSize: "clamp(16px, 2vw, 20px)", lineHeight: 1.4, color: P.paper,
                fontFamily: "'Fraunces', serif", fontWeight: 400,
              }}>
                Sixteen people. One building. <span style={{ color: P.gold }}>Zero sub-contractors.</span>
              </p>
            </div>
            <dl className="sv-studio-team-stats">
              {[
                { k: "Strategy & Brand", v: "4" },
                { k: "Design", v: "5" },
                { k: "Film & Photo", v: "3" },
                { k: "Engineering", v: "4" },
              ].map((r) => (
                <div key={r.k}>
                  <dt className="type-caption" style={{ color: "rgba(239,232,216,0.55)", fontSize: "10px", marginBottom: "8px" }}>
                    {r.k}
                  </dt>
                  <dd style={{
                    fontSize: "clamp(32px, 4vw, 44px)", lineHeight: 1, fontWeight: 500,
                    letterSpacing: "-0.03em", color: P.paper, margin: 0,
                  }}>{r.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
