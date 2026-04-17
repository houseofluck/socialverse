import { P } from "@/lib/palette";

/* ════════════════════════════════════════════════════════════
   PACKAGING ASSETS — Branding section
   ════════════════════════════════════════════════════════════ */

export function AssetBottle({ label = "KINDRED", subtitle = "Facial Serum", bg = P.paper, bottle = P.ink, accent = P.gold, volume = "30 ML" }) {
  return (
    <svg viewBox="0 0 300 400" role="img" aria-label={`${label} apothecary bottle packaging — ${subtitle}`} style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="300" height="400" fill={bg} />
      <ellipse cx="150" cy="360" rx="55" ry="6" fill={P.ink} opacity="0.1" />
      <path d="M 115 120 L 115 340 Q 115 355 130 355 L 170 355 Q 185 355 185 340 L 185 120 Z" fill={bottle} />
      <rect x="118" y="122" width="6" height="200" fill={P.paper} opacity="0.08" />
      <rect x="135" y="80" width="30" height="45" fill={bottle} />
      <rect x="130" y="55" width="40" height="30" fill={bottle} />
      <rect x="130" y="55" width="40" height="4" fill={P.ink} opacity="0.3" />
      <rect x="125" y="180" width="50" height="120" fill={P.paper} opacity="0.94" />
      <text x="150" y="205" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "10px", fontWeight: 500, fill: P.ink, letterSpacing: "0.1em" }}>{label}</text>
      <line x1="138" y1="214" x2="162" y2="214" stroke={accent} strokeWidth="0.6" />
      <text x="150" y="235" textAnchor="middle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "5px", fill: P.ink, opacity: 0.65, letterSpacing: "0.15em" }}>{subtitle.toUpperCase()}</text>
      <circle cx="150" cy="260" r="8" fill="none" stroke={accent} strokeWidth="0.5" />
      <text x="150" y="263" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "6px", fill: accent, fontWeight: 500 }}>SV</text>
      <text x="150" y="288" textAnchor="middle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "4px", fill: P.ink, opacity: 0.5, letterSpacing: "0.15em" }}>{volume}</text>
    </svg>
  );
}

export function AssetCandle({ label = "HOURLIGHT", scent = "Cedar & Moss", bg = P.paperHi, vessel = "#2A2620" }) {
  return (
    <svg viewBox="0 0 300 400" role="img" aria-label={`${label} candle packaging — ${scent}`} style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id={`candleShine-${label}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.06" />
          <stop offset="80%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <rect width="300" height="400" fill={bg} />
      <ellipse cx="150" cy="365" rx="75" ry="8" fill={P.ink} opacity="0.1" />
      <rect x="95" y="150" width="110" height="210" fill={vessel} rx="2" />
      <rect x="95" y="150" width="110" height="210" fill={`url(#candleShine-${label})`} rx="2" />
      <ellipse cx="150" cy="170" rx="55" ry="8" fill="#3A342C" />
      <ellipse cx="150" cy="168" rx="55" ry="8" fill="#D4C9A8" opacity="0.95" />
      <line x1="150" y1="160" x2="150" y2="140" stroke={P.ink} strokeWidth="1.2" />
      <ellipse cx="150" cy="132" rx="5" ry="8" fill={P.gold} opacity="0.9" />
      <ellipse cx="150" cy="135" rx="2" ry="5" fill={P.paper} />
      <rect x="95" y="235" width="110" height="85" fill={P.paper} opacity="0.96" />
      <text x="150" y="258" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "11px", fontWeight: 500, fill: P.ink, letterSpacing: "0.18em" }}>{label}</text>
      <line x1="130" y1="268" x2="170" y2="268" stroke={P.gold} strokeWidth="0.6" />
      <text x="150" y="285" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "8px", fill: P.ink, opacity: 0.75 }}>{scent}</text>
      <text x="150" y="305" textAnchor="middle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "4.5px", fill: P.ink, opacity: 0.5, letterSpacing: "0.2em" }}>NET WT · 200 G · 40 HR</text>
    </svg>
  );
}

export function AssetCoffeeBag({ label = "KAVERI", variety = "Single Origin", bg = P.paperDk }) {
  return (
    <svg viewBox="0 0 300 400" role="img" aria-label={`${label} coffee bag packaging — ${variety}`} style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="300" height="400" fill={bg} />
      <ellipse cx="150" cy="365" rx="65" ry="6" fill={P.ink} opacity="0.12" />
      <path d="M 105 110 L 195 110 L 200 360 L 100 360 Z" fill={P.ink} />
      <rect x="105" y="100" width="90" height="12" fill="#0A0805" />
      <rect x="105" y="100" width="90" height="2" fill={P.paper} opacity="0.15" />
      <circle cx="172" cy="135" r="5" fill={P.paperHi} />
      <circle cx="172" cy="135" r="2" fill={P.ink} />
      <rect x="120" y="175" width="60" height="120" fill={P.paper} />
      <text x="150" y="200" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "13px", fontWeight: 500, fill: P.ink, letterSpacing: "0.12em" }}>{label}</text>
      <line x1="135" y1="210" x2="165" y2="210" stroke={P.gold} strokeWidth="0.8" />
      <text x="150" y="225" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "6px", fill: P.ink, opacity: 0.7 }}>{variety}</text>
      <text x="150" y="250" textAnchor="middle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "4px", fill: P.ink, opacity: 0.5, letterSpacing: "0.15em" }}>MYSURU · INDIA · 1450 M</text>
      <circle cx="150" cy="275" r="10" fill="none" stroke={P.gold} strokeWidth="0.5" />
      <text x="150" y="278" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "7px", fill: P.gold, fontWeight: 500 }}>SV</text>
    </svg>
  );
}

export function AssetTube({ label = "ODE", product = "Vitamin C Serum", bg = "#E8DDC4", tube = P.paper }) {
  return (
    <svg viewBox="0 0 300 400" role="img" aria-label={`${label} skincare tube — ${product}`} style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id={`tubeShine-${label}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="30%" stopColor="#fff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <rect width="300" height="400" fill={bg} />
      <ellipse cx="150" cy="370" rx="50" ry="5" fill={P.ink} opacity="0.1" />
      <rect x="125" y="130" width="50" height="220" rx="4" fill={tube} />
      <rect x="125" y="130" width="50" height="220" rx="4" fill={`url(#tubeShine-${label})`} />
      <rect x="135" y="100" width="30" height="30" fill={P.ink} />
      <rect x="138" y="80" width="24" height="25" fill={P.ink} rx="2" />
      <circle cx="150" cy="90" r="2" fill={P.gold} />
      <rect x="125" y="348" width="50" height="4" fill={P.inkSoft} />
      <text x="150" y="200" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "18px", fontWeight: 400, fill: P.ink, letterSpacing: "0.04em" }}>{label}</text>
      <line x1="140" y1="210" x2="160" y2="210" stroke={P.gold} strokeWidth="0.6" />
      <text x="150" y="225" textAnchor="middle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "4.5px", fill: P.ink, letterSpacing: "0.12em", opacity: 0.7 }}>{product.toUpperCase()}</text>
      <text x="150" y="275" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "7px", fill: P.ink, opacity: 0.55 }}>10% L-ascorbic</text>
      <text x="150" y="295" textAnchor="middle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "4px", fill: P.ink, opacity: 0.5, letterSpacing: "0.15em" }}>30 ML · 1 FL OZ</text>
    </svg>
  );
}

export function AssetJar({ label = "PILA", product = "Body Balm", bg = "#F0E4CC" }) {
  return (
    <svg viewBox="0 0 300 400" role="img" aria-label={`${label} jar packaging — ${product}`} style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id={`jarShine-${label}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="25%" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <rect width="300" height="400" fill={bg} />
      <ellipse cx="150" cy="350" rx="85" ry="10" fill={P.ink} opacity="0.12" />
      <ellipse cx="150" cy="175" rx="80" ry="20" fill={P.ink} />
      <rect x="70" y="175" width="160" height="25" fill={P.ink} />
      <ellipse cx="150" cy="200" rx="80" ry="18" fill="#2A2620" />
      <rect x="75" y="200" width="150" height="140" fill={P.paper} />
      <rect x="75" y="200" width="150" height="140" fill={`url(#jarShine-${label})`} />
      <ellipse cx="150" cy="340" rx="75" ry="12" fill={P.paper} />
      <ellipse cx="150" cy="340" rx="75" ry="12" fill={P.ink} opacity="0.08" />
      <text x="150" y="258" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "22px", fontWeight: 400, fill: P.ink, letterSpacing: "0.02em" }}>{label}</text>
      <line x1="130" y1="268" x2="170" y2="268" stroke={P.gold} strokeWidth="0.6" />
      <text x="150" y="285" textAnchor="middle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "4.5px", fill: P.ink, opacity: 0.7, letterSpacing: "0.14em" }}>{product.toUpperCase()}</text>
    </svg>
  );
}

export function AssetTin({ label = "THE EVERYDAY", product = "Everyday Masala", bg = "#D4C49A" }) {
  return (
    <svg viewBox="0 0 300 400" role="img" aria-label={`${label} tin packaging — ${product}`} style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id={`tinShine-${label}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="30%" stopColor="#fff" stopOpacity="0.02" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <rect width="300" height="400" fill={bg} />
      <ellipse cx="150" cy="355" rx="90" ry="8" fill={P.ink} opacity="0.12" />
      <rect x="70" y="130" width="160" height="220" fill={P.ink} />
      <rect x="70" y="130" width="160" height="220" fill={`url(#tinShine-${label})`} />
      <rect x="70" y="130" width="160" height="10" fill="#0A0805" />
      <rect x="80" y="160" width="140" height="170" fill={P.paper} />
      <text x="150" y="190" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "16px", fontWeight: 500, fill: P.ink, letterSpacing: "0.1em" }}>THE</text>
      <text x="150" y="215" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "22px", fontWeight: 500, fill: P.ink, letterSpacing: "0.04em" }}>EVERYDAY</text>
      <line x1="110" y1="228" x2="190" y2="228" stroke={P.gold} strokeWidth="0.8" />
      <text x="150" y="250" textAnchor="middle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "5px", fill: P.ink, opacity: 0.7, letterSpacing: "0.16em" }}>{product.toUpperCase()}</text>
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════
   SOCIAL POST ASSETS — 1:1 tiles
   ════════════════════════════════════════════════════════════ */

export function AssetPostBigType({ line1 = "Quiet", line2 = "mornings.", kicker = "ODE SS26", bg = P.paperHi, ink = P.ink }) {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label={`Social post: ${line1} ${line2}`} style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="400" height="400" fill={bg} />
      <text x="30" y="50" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fill: ink, opacity: 0.65, letterSpacing: "0.2em" }}>{kicker}</text>
      <text x="30" y="210" style={{ fontFamily: "'Fraunces', serif", fontSize: "78px", fontWeight: 400, fill: ink, letterSpacing: "-0.03em" }}>{line1}</text>
      <text x="30" y="285" style={{ fontFamily: "'Fraunces', serif", fontSize: "78px", fontWeight: 400, fill: P.gold, letterSpacing: "-0.03em" }}>{line2}</text>
      <line x1="30" y1="365" x2="370" y2="365" stroke={ink} strokeWidth="0.6" opacity="0.3" />
    </svg>
  );
}

export function AssetPostQuote({ bg = P.ink, ink = P.paper }) {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Studio quote: we make the thing before we name it" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="400" height="400" fill={bg} />
      <text x="200" y="180" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "22px", fontWeight: 300, fill: ink, letterSpacing: "-0.01em" }}>
        <tspan x="200" dy="0">We make the thing</tspan>
        <tspan x="200" dy="32">before we </tspan>
        <tspan x="200" dy="32" fill={P.gold}>name it.</tspan>
      </text>
      <text x="200" y="340" textAnchor="middle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fill: ink, opacity: 0.55, letterSpacing: "0.2em" }}>— STUDIO NOTE 004</text>
    </svg>
  );
}

export function AssetPostProduct({ brand = "HOURLIGHT", tagline = "Room temperature.", bg = "#3A342C" }) {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label={`Product post: ${brand} ${tagline}`} style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="400" height="400" fill={bg} />
      <rect x="165" y="150" width="70" height="140" fill={P.ink} />
      <ellipse cx="200" cy="155" rx="35" ry="5" fill="#D4C9A8" />
      <line x1="200" y1="150" x2="200" y2="135" stroke={P.paperHi} strokeWidth="1" />
      <ellipse cx="200" cy="128" rx="3" ry="5" fill={P.gold} opacity="0.9" />
      <text x="200" y="330" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "24px", fill: P.paper, fontWeight: 400 }}>{tagline}</text>
      <text x="200" y="65" textAnchor="middle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fill: P.gold, letterSpacing: "0.25em" }}>{brand}</text>
    </svg>
  );
}

export function AssetPostGrid({ bg = P.paperHi }) {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Brand palette grid composition" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="400" height="400" fill={bg} />
      {[
        { c: P.ink, x: 50, y: 50 }, { c: P.gold, x: 155, y: 50 }, { c: "#C9A96E", x: 260, y: 50 },
        { c: "#E8DDC4", x: 50, y: 155 }, { c: "#D4C49A", x: 155, y: 155 }, { c: "#A68B5B", x: 260, y: 155 },
      ].map((s, i) => (
        <g key={i}>
          <rect x={s.x} y={s.y} width="90" height="90" fill={s.c} />
          <text x={s.x + 45} y={s.y + 115} textAnchor="middle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "8px", fill: P.ink, opacity: 0.6, letterSpacing: "0.1em" }}>{String(i + 1).padStart(2, "0")}</text>
        </g>
      ))}
      <text x="200" y="360" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "16px", fill: P.ink, letterSpacing: "0.02em" }}>Kindred SS26 — Palette</text>
    </svg>
  );
}

export function AssetPostMetric({ value = "+340%", label = "DIRECT REVENUE", sub = "Month 01—06, 2025", bg = P.gold }) {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label={`Metric post: ${value} ${label}`} style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="400" height="400" fill={bg} />
      <text x="30" y="50" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fill: P.ink, opacity: 0.7, letterSpacing: "0.18em" }}>CASE · FIELDNOTE</text>
      <text x="30" y="250" style={{ fontFamily: "'Fraunces', serif", fontSize: "120px", fontWeight: 400, fill: P.ink, letterSpacing: "-0.05em" }}>{value}</text>
      <line x1="30" y1="280" x2="120" y2="280" stroke={P.ink} strokeWidth="0.8" />
      <text x="30" y="310" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fill: P.ink, letterSpacing: "0.18em" }}>{label}</text>
      <text x="30" y="335" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", fill: P.ink, opacity: 0.65, letterSpacing: "0.1em" }}>{sub}</text>
    </svg>
  );
}

export function AssetPostEditorial({ bg = P.paperHi }) {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="Editorial layout post: On slow brands" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="400" height="400" fill={bg} />
      <text x="30" y="45" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", fill: P.ink, opacity: 0.6, letterSpacing: "0.2em" }}>№ 14 · AUTUMN JOURNAL</text>
      <text x="30" y="105" style={{ fontFamily: "'Fraunces', serif", fontSize: "34px", fontWeight: 400, fill: P.ink, letterSpacing: "-0.02em" }}>On slow</text>
      <text x="30" y="140" style={{ fontFamily: "'Fraunces', serif", fontSize: "34px", fontWeight: 400, fill: P.gold, letterSpacing: "-0.02em" }}>brands.</text>
      <text x="30" y="190" style={{ fontFamily: "'Archivo', sans-serif", fontSize: "11px", fill: P.inkSoft, fontWeight: 400 }}>
        <tspan x="30" dy="0">Three years. Four hundred crore. One</tspan>
        <tspan x="30" dy="16">cult. A field report on what the category</tspan>
        <tspan x="30" dy="16">is getting wrong, and what one Mumbai</tspan>
        <tspan x="30" dy="16">studio has been quietly getting right.</tspan>
      </text>
      <rect x="30" y="280" width="340" height="60" fill={P.ink} />
      <text x="200" y="318" textAnchor="middle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fill: P.paper, letterSpacing: "0.22em" }}>READ THE ESSAY</text>
    </svg>
  );
}

export function AssetStory({ brand = "KINDRED", text = "Behind the scent.", bg = P.ink }) {
  const words = text.split(" ");
  const lastWord = words[words.length - 1];
  const firstWords = words.slice(0, -1).join(" ");
  return (
    <svg viewBox="0 0 90 160" role="img" aria-label={`${brand} story: ${text}`} style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="90" height="160" fill={bg} />
      <rect x="8" y="8" width="74" height="2" fill={P.paper} opacity="0.4" />
      <rect x="8" y="8" width="18" height="2" fill={P.gold} />
      <circle cx="15" cy="22" r="6" fill={P.gold} opacity="0.2" />
      <circle cx="15" cy="22" r="5" fill="none" stroke={P.gold} strokeWidth="0.8" />
      <text x="26" y="24" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "4.5px", fill: P.paper, letterSpacing: "0.12em" }}>{brand}</text>
      <text x="45" y="95" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "9px", fill: P.paper, letterSpacing: "-0.02em" }}>
        <tspan x="45" dy="0">{firstWords}</tspan>
        <tspan x="45" dy="11" fill={P.gold}>{lastWord}</tspan>
      </text>
    </svg>
  );
}
