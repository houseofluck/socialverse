import { P, BRAND } from "@/lib/palette";

export function Footer() {
  return (
    <footer role="contentinfo" style={{
      padding: "80px clamp(20px, 4vw, 36px) 40px",
      background: P.ink, color: P.paper,
    }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <div style={{ marginBottom: "60px" }} aria-hidden="true">
          <div className="sv-footer-wordmark">
            Social Verse<span style={{ color: P.gold }}>.</span>
          </div>
        </div>

        <div className="sv-footer-grid">
          <div>
            <p className="type-caption" style={{ color: P.gold, marginBottom: "12px" }}>Studio</p>
            <p style={{ fontFamily: "'Fraunces', serif", fontSize: "18px", color: P.paper, lineHeight: 1.5, fontWeight: 400 }}>
              A creative studio for modern consumer brands.<br/>
              <span style={{ color: "rgba(239,232,216,0.6)" }}>Mumbai — since {BRAND.founded}.</span>
            </p>
          </div>

          <nav aria-label="Footer — Practice">
            <p className="type-caption" style={{ color: P.gold, marginBottom: "16px" }}>Practice</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Brand", "Social", "Digital", "Content", "Influence", "Offline"].map((l) => (
                <li key={l}>
                  <a href={`#discipline-${l.toLowerCase()}`} style={{ color: "rgba(239,232,216,0.75)", textDecoration: "none", fontSize: "14px" }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer — Studio">
            <p className="type-caption" style={{ color: P.gold, marginBottom: "16px" }}>Studio</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { l: "Work", h: "#work" },
                { l: "About", h: "#studio" },
                { l: "Writing", h: "#writing" },
                { l: "Contact", h: "#contact" },
                { l: "Careers", h: "#" },
              ].map((i) => (
                <li key={i.l}>
                  <a href={i.h} style={{ color: "rgba(239,232,216,0.75)", textDecoration: "none", fontSize: "14px" }}>{i.l}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer — Social channels">
            <p className="type-caption" style={{ color: P.gold, marginBottom: "16px" }}>Elsewhere</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { l: "Instagram", h: BRAND.socials.instagram },
                { l: "LinkedIn", h: BRAND.socials.linkedin },
                { l: "Are.na", h: BRAND.socials.arena },
                { l: "Journal", h: "#writing" },
              ].map((i) => (
                <li key={i.l}>
                  <a href={i.h} style={{ color: "rgba(239,232,216,0.75)", textDecoration: "none", fontSize: "14px" }}>
                    {i.l} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div style={{
          paddingTop: "24px",
          borderTop: "1px solid rgba(255,255,255,0.12)",
          display: "flex", justifyContent: "space-between",
          flexWrap: "wrap", gap: "16px",
        }}>
          <p className="type-mono" style={{ fontSize: "11px", color: "rgba(239,232,216,0.5)", letterSpacing: "0.1em" }}>
            © {new Date().getFullYear()} Social Verse Studio Pvt. Ltd. &nbsp;·&nbsp; CIN U74999MH2022PTC000000
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a key={l} href="#" className="type-mono" style={{ fontSize: "11px", color: "rgba(239,232,216,0.5)", letterSpacing: "0.1em", textDecoration: "none" }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
