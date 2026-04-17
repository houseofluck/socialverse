import { P } from "@/lib/palette";

/* ════════════════════════════════════════════════════════════
   FILM STILLS — abstract 1:1 compositions for video tiles
   ════════════════════════════════════════════════════════════ */

export function AssetFilmStill({ variant = "A", caption = "FASHION · SS26" }) {
  const variants = {
    A: { bg: "#D4C49A", render: (
      <g>
        <rect x="80" y="80" width="280" height="280" fill="#8B7355" opacity="0.95" />
        <rect x="120" y="120" width="200" height="200" fill={P.ink} opacity="0.92" />
        <circle cx="220" cy="220" r="70" fill={P.paper} opacity="0.95" />
        <circle cx="220" cy="220" r="44" fill={P.gold} opacity="0.9" />
        <line x1="40" y1="40" x2="400" y2="40" stroke={P.gold} strokeWidth="1" opacity="0.4" />
        <line x1="40" y1="360" x2="400" y2="360" stroke={P.gold} strokeWidth="1" opacity="0.4" />
      </g>
    )},
    B: { bg: "#E8DDC4", render: (
      <g>
        <ellipse cx="220" cy="280" rx="140" ry="14" fill={P.ink} opacity="0.2" />
        <rect x="180" y="90" width="80" height="200" rx="4" fill={P.paperHi} />
        <ellipse cx="220" cy="90" rx="40" ry="6" fill={P.gold} opacity="0.6" />
        <rect x="195" y="140" width="50" height="80" fill={P.paper} opacity="0.9" />
        <text x="220" y="170" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "8px", fill: P.ink, letterSpacing: "0.2em" }}>ODE</text>
        <line x1="208" y1="178" x2="232" y2="178" stroke={P.gold} strokeWidth="0.6" />
      </g>
    )},
    C: { bg: "#C5B888", render: (
      <g>
        <path d="M 0 250 Q 100 180 220 220 T 440 200 L 440 440 L 0 440 Z" fill="#5C5238" />
        <path d="M 0 290 Q 110 230 220 260 T 440 250 L 440 440 L 0 440 Z" fill="#3D3624" />
        <circle cx="340" cy="90" r="35" fill={P.gold} opacity="0.85" />
        <rect x="40" y="40" width="80" height="1.5" fill={P.ink} />
        <text x="40" y="65" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fill: P.ink, letterSpacing: "0.18em" }}>FIELDNOTE</text>
      </g>
    )},
    D: { bg: "#2A221B", render: (
      <g>
        <circle cx="220" cy="220" r="130" fill="#3A2E23" />
        <circle cx="220" cy="220" r="90" fill="#1A130E" />
        <circle cx="220" cy="220" r="60" fill="#D4A843" opacity="0.15" />
        <path d="M 200 200 Q 220 180 240 200 Q 240 220 220 235 Q 200 220 200 200 Z" fill="#6B4E30" />
        <text x="220" y="380" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "16px", fill: P.paper, letterSpacing: "0.25em" }}>NORTH MERIDIAN</text>
      </g>
    )},
    E: { bg: "#F0E4CC", render: (
      <g>
        <ellipse cx="220" cy="250" rx="170" ry="160" fill={P.gold} opacity="0.18" />
        <ellipse cx="220" cy="250" rx="120" ry="115" fill={P.gold} opacity="0.3" />
        <ellipse cx="220" cy="250" rx="70" ry="65" fill={P.gold} />
        <rect x="207" y="120" width="26" height="90" fill={P.ink} />
        <text x="220" y="420" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "12px", fill: P.ink, letterSpacing: "0.22em" }}>KINDRED · SERUM 01</text>
      </g>
    )},
    F: { bg: "#1E1915", render: (
      <g>
        <rect x="180" y="180" width="80" height="140" fill="#2E2620" />
        <ellipse cx="220" cy="185" rx="42" ry="7" fill="#D4C9A8" />
        <line x1="220" y1="178" x2="220" y2="155" stroke={P.paperHi} strokeWidth="1.5" />
        <ellipse cx="220" cy="147" rx="4" ry="12" fill="#F5D88A" />
        <circle cx="220" cy="240" r="180" fill={P.gold} opacity="0.06" />
        <text x="220" y="380" textAnchor="middle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fill: P.paper, opacity: 0.65, letterSpacing: "0.3em" }}>HOURLIGHT</text>
      </g>
    )},
  };
  const V = variants[variant];
  return (
    <svg viewBox="0 0 440 440" role="img" aria-label={`Film still — ${caption}`} style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="440" height="440" fill={V.bg} />
      {V.render}
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════
   CREATOR REEL — 9:16 vertical with metadata overlay
   ════════════════════════════════════════════════════════════ */

export function AssetReel({ creator = "@anika.r", handle = "REEL · 00:32", bg = P.ink, accent = P.gold, scene = "A" }) {
  const scenes = {
    A: <g>
      <circle cx="90" cy="120" r="50" fill={accent} opacity="0.2" />
      <circle cx="90" cy="120" r="35" fill={accent} opacity="0.4" />
      <circle cx="90" cy="120" r="22" fill={accent} />
      <rect x="70" y="180" width="40" height="90" fill={accent} opacity="0.9" />
      <rect x="55" y="275" width="70" height="3" fill={accent} opacity="0.6" />
    </g>,
    B: <g>
      <path d="M 30 80 L 150 80 L 140 180 L 40 180 Z" fill={accent} opacity="0.25" />
      <rect x="55" y="120" width="70" height="120" fill={P.paper} opacity="0.95" />
      <rect x="65" y="130" width="50" height="90" fill={accent} opacity="0.2" />
      <text x="90" y="160" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "8px", fill: P.ink, letterSpacing: "0.15em" }}>ODE</text>
    </g>,
    C: <g>
      <rect x="40" y="90" width="100" height="160" fill={accent} opacity="0.15" />
      <circle cx="90" cy="140" r="35" fill={accent} opacity="0.3" />
      <path d="M 60 230 Q 90 210 120 230" stroke={accent} strokeWidth="2" fill="none" opacity="0.6" />
      <text x="90" y="265" textAnchor="middle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "6px", fill: accent, letterSpacing: "0.2em" }}>UNBOXING</text>
    </g>,
    D: <g>
      <rect x="30" y="100" width="120" height="80" fill={accent} opacity="0.2" />
      <rect x="50" y="120" width="80" height="40" fill={accent} opacity="0.5" />
      <rect x="35" y="200" width="110" height="6" fill={accent} opacity="0.4" />
      <rect x="35" y="215" width="75" height="6" fill={accent} opacity="0.3" />
      <rect x="35" y="230" width="90" height="6" fill={accent} opacity="0.2" />
    </g>,
  };
  return (
    <svg viewBox="0 0 180 320" role="img" aria-label={`Creator reel by ${creator}`} style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="180" height="320" fill={bg} />
      {scenes[scene]}
      <circle cx="14" cy="14" r="3" fill="#9FE89C" />
      <text x="22" y="17" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "6px", fill: P.paper, letterSpacing: "0.18em" }}>LIVE · REEL</text>
      {[0, 1, 2].map((i) => (
        <rect key={i} x={120 + i * 18} y="12" width="14" height="2" fill={P.paper} opacity={i === 1 ? 1 : 0.35} />
      ))}
      <circle cx="20" cy="290" r="9" fill={accent} opacity="0.3" />
      <circle cx="20" cy="290" r="8" fill="none" stroke={accent} strokeWidth="0.8" />
      <text x="34" y="290" style={{ fontFamily: "'Archivo', sans-serif", fontSize: "8px", fill: P.paper, fontWeight: 500 }}>{creator}</text>
      <text x="34" y="302" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "6px", fill: P.paper, opacity: 0.65, letterSpacing: "0.14em" }}>{handle}</text>
      <path d="M 155 286 L 155 300 L 168 293 Z" fill={P.paper} opacity="0.85" />
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════
   OOH ASSETS — billboard, menu, poster, signage, event, print
   ════════════════════════════════════════════════════════════ */

export function AssetBillboard({ brand = "HOURLIGHT", headline = "Room\ntemperature.", bg = "#1E1915", accent = P.gold }) {
  const lines = headline.split("\n");
  return (
    <svg viewBox="0 0 1200 500" role="img" aria-label={`Billboard OOH mockup for ${brand}`} style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <radialGradient id={`billGlow-${brand}`} cx="0.5" cy="0.5" r="0.7">
          <stop offset="0%" stopColor={accent} stopOpacity="0.15" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="500" fill="#0F0D0B" />
      <circle cx="960" cy="70" r="14" fill="#F5E8C4" opacity="0.35" />
      <g fill="#1A1612">
        <rect x="0" y="280" width="100" height="180" />
        <rect x="100" y="260" width="70" height="200" />
        <rect x="170" y="300" width="90" height="160" />
        <rect x="260" y="270" width="60" height="190" />
        <rect x="920" y="290" width="80" height="170" />
        <rect x="1000" y="260" width="60" height="200" />
        <rect x="1060" y="290" width="70" height="170" />
        <rect x="1130" y="280" width="70" height="180" />
      </g>
      {[[30,350],[60,320],[120,380],[145,340],[200,360],[230,400],[280,310],[940,340],[970,380],[1020,320],[1080,360],[1170,340]].map((p, i) => (
        <rect key={i} x={p[0]} y={p[1]} width="4" height="4" fill="#F5D88A" opacity={0.7 + (i % 3) * 0.1} />
      ))}
      <rect x="320" y="80" width="560" height="280" fill={bg} stroke="#0A0805" strokeWidth="6" />
      <rect x="320" y="80" width="560" height="280" fill={`url(#billGlow-${brand})`} />
      <text x="360" y="130" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", fill: accent, letterSpacing: "0.28em" }}>{brand}</text>
      {lines.map((line, i) => (
        <text key={i} x="360" y={200 + i * 60} style={{ fontFamily: "'Fraunces', serif", fontSize: "58px", fill: i === lines.length - 1 ? accent : P.paper, fontWeight: 400, letterSpacing: "-0.025em" }}>{line}</text>
      ))}
      <line x1="360" y1="325" x2="440" y2="325" stroke={accent} strokeWidth="1.2" />
      <text x="360" y="345" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fill: P.paper, opacity: 0.6, letterSpacing: "0.18em" }}>SLOW-MADE · SINCE 2023</text>
      <rect x="390" y="360" width="14" height="100" fill="#1A1612" />
      <rect x="800" y="360" width="14" height="100" fill="#1A1612" />
      <ellipse cx="600" cy="365" rx="300" ry="30" fill={accent} opacity="0.08" />
      <rect x="0" y="440" width="1200" height="60" fill="#050403" />
    </svg>
  );
}

export function AssetMenu({ restaurant = "NORTH MERIDIAN", bg = P.paper }) {
  return (
    <svg viewBox="0 0 600 800" role="img" aria-label={`${restaurant} menu design`} style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="600" height="800" fill={bg} />
      <rect x="50" y="40" width="500" height="720" fill={P.paperHi} />
      <line x1="300" y1="40" x2="300" y2="760" stroke={P.hair} />
      <text x="300" y="120" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "28px", fill: P.ink, letterSpacing: "0.28em" }}>{restaurant}</text>
      <line x1="240" y1="140" x2="360" y2="140" stroke={P.gold} strokeWidth="0.6" />
      <text x="300" y="160" textAnchor="middle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", fill: P.ink, opacity: 0.55, letterSpacing: "0.3em" }}>SPECIALTY COFFEE · SINCE 2023</text>
      <text x="80" y="220" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fill: P.gold, letterSpacing: "0.18em" }}>THE SLOW</text>
      <line x1="80" y1="232" x2="280" y2="232" stroke={P.hair} />
      {[["Filter — House Blend", "280"], ["Pour-over, single origin", "340"], ["Cold brew — 12 hour", "320"], ["V60 — Ethiopian", "380"], ["Chemex — Kenya", "380"]].map((item, i) => (
        <g key={i}>
          <text x="80" y={260 + i * 34} style={{ fontFamily: "'Fraunces', serif", fontSize: "14px", fill: P.ink }}>{item[0]}</text>
          <text x="280" y={260 + i * 34} textAnchor="end" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fill: P.ink, opacity: 0.6 }}>{item[1]}</text>
        </g>
      ))}
      <text x="320" y="220" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fill: P.gold, letterSpacing: "0.18em" }}>THE FAST</text>
      <line x1="320" y1="232" x2="520" y2="232" stroke={P.hair} />
      {[["Espresso", "180"], ["Macchiato", "220"], ["Flat white", "280"], ["Cortado", "260"], ["Cappuccino", "280"]].map((item, i) => (
        <g key={i}>
          <text x="320" y={260 + i * 34} style={{ fontFamily: "'Fraunces', serif", fontSize: "14px", fill: P.ink }}>{item[0]}</text>
          <text x="520" y={260 + i * 34} textAnchor="end" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fill: P.ink, opacity: 0.6 }}>{item[1]}</text>
        </g>
      ))}
      <rect x="120" y="480" width="360" height="1" fill={P.gold} opacity="0.4" />
      <text x="300" y="520" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "20px", fill: P.ink, letterSpacing: "-0.01em" }}>Beans by the bag.</text>
      <rect x="120" y="580" width="360" height="1" fill={P.gold} opacity="0.4" />
      <text x="300" y="700" textAnchor="middle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "8px", fill: P.ink, opacity: 0.5, letterSpacing: "0.22em" }}>KHAR · BANDRA · COLABA · POWAI</text>
      <circle cx="300" cy="730" r="10" fill="none" stroke={P.gold} strokeWidth="0.5" />
      <text x="300" y="734" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "9px", fill: P.gold }}>NM</text>
    </svg>
  );
}

export function AssetPoster({ brand = "ATELIER NOON", season = "SS26", bg = "#E8A38A" }) {
  return (
    <svg viewBox="0 0 500 700" role="img" aria-label={`${brand} ${season} poster design`} style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="500" height="700" fill={bg} />
      <rect x="40" y="40" width="420" height="620" fill="none" stroke={P.ink} strokeWidth="1" opacity="0.2" />
      <text x="70" y="90" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fill: P.ink, letterSpacing: "0.28em" }}>{brand}</text>
      <text x="70" y="260" style={{ fontFamily: "'Fraunces', serif", fontSize: "110px", fontWeight: 400, fill: P.ink, letterSpacing: "-0.04em" }}>Soft</text>
      <text x="70" y="370" style={{ fontFamily: "'Fraunces', serif", fontSize: "110px", fontWeight: 400, fill: P.ink, letterSpacing: "-0.04em" }}>power.</text>
      <line x1="70" y1="420" x2="180" y2="420" stroke={P.ink} strokeWidth="1.2" />
      <text x="70" y="450" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fill: P.ink, opacity: 0.7, letterSpacing: "0.18em" }}>THE SS26 COLLECTION</text>
      <text x="70" y="620" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", fill: P.ink, opacity: 0.65, letterSpacing: "0.2em" }}>{season} · 62 SITES · FEB 2026</text>
    </svg>
  );
}

export function AssetSignage({ brand = "KINDRED & CO.", context = "STORE FRONT · BANDRA", bg = "#2A221B" }) {
  return (
    <svg viewBox="0 0 800 600" role="img" aria-label={`${brand} signage — ${context}`} style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <radialGradient id={`signGlow-${brand.replace(/\W/g, "")}`} cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor={P.gold} stopOpacity="0.12" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill={bg} />
      <rect x="0" y="0" width="800" height="430" fill="#1F1914" />
      <rect x="160" y="110" width="480" height="130" fill="#0A0805" stroke={P.gold} strokeWidth="1" />
      <rect x="160" y="110" width="480" height="130" fill={`url(#signGlow-${brand.replace(/\W/g, "")})`} />
      <text x="400" y="185" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "38px", fill: P.paper, letterSpacing: "0.15em" }}>{brand}</text>
      <line x1="360" y1="205" x2="440" y2="205" stroke={P.gold} strokeWidth="0.8" />
      <text x="400" y="225" textAnchor="middle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fill: P.gold, opacity: 0.85, letterSpacing: "0.32em" }}>APOTHECARY · MMXXV</text>
      <rect x="120" y="280" width="560" height="150" fill="#0A0805" stroke="#2A221B" strokeWidth="4" />
      <rect x="200" y="330" width="30" height="70" fill="#3A3028" />
      <rect x="250" y="320" width="35" height="80" fill="#4A4038" />
      <rect x="300" y="340" width="25" height="60" fill="#3A3028" />
      <rect x="500" y="330" width="30" height="70" fill="#3A3028" />
      <rect x="550" y="320" width="35" height="80" fill="#4A4038" />
      <rect x="600" y="340" width="25" height="60" fill="#3A3028" />
      <rect x="370" y="300" width="60" height="130" fill="#1A1310" stroke={P.gold} strokeWidth="0.5" opacity="0.8" />
      <circle cx="415" cy="370" r="2" fill={P.gold} />
      <rect x="0" y="430" width="800" height="170" fill="#15110D" />
    </svg>
  );
}

export function AssetEventCollateral({ event = "FIELDNOTE HARVEST", date = "04.15 · ALIBAUG", bg = "#C5B888" }) {
  return (
    <svg viewBox="0 0 800 500" role="img" aria-label={`${event} event collateral`} style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="800" height="500" fill={bg} />
      <path d="M 40 60 L 160 60 L 150 110 L 40 110 Z" fill={P.ink} />
      <text x="100" y="90" textAnchor="middle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", fill: P.gold, letterSpacing: "0.25em" }}>FIELDNOTE</text>
      <text x="40" y="200" style={{ fontFamily: "'Fraunces', serif", fontSize: "78px", fontWeight: 400, fill: P.ink, letterSpacing: "-0.03em" }}>Harvest</text>
      <text x="40" y="275" style={{ fontFamily: "'Fraunces', serif", fontSize: "78px", fontWeight: 400, fill: "#5C5238", letterSpacing: "-0.03em" }}>Market.</text>
      <line x1="40" y1="310" x2="200" y2="310" stroke={P.ink} strokeWidth="1.2" />
      <text x="40" y="345" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fill: P.ink, letterSpacing: "0.22em" }}>{date}</text>
      <text x="40" y="365" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", fill: P.ink, opacity: 0.65, letterSpacing: "0.18em" }}>14 FARMERS · 06 CHEFS · ONE FIELD</text>
      <g transform="translate(480, 130)">
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(${i * 80}, 0)`}>
            <circle cx="30" cy="30" r="28" fill={P.paper} />
            <circle cx="30" cy="30" r="28" fill="none" stroke={P.ink} strokeWidth="0.8" />
            {i === 0 && <circle cx="30" cy="30" r="8" fill={P.gold} />}
            {i === 1 && <path d="M 15 30 L 45 30 M 30 15 L 30 45" stroke={P.ink} strokeWidth="2" />}
            {i === 2 && <path d="M 15 35 Q 30 15 45 35" stroke={P.ink} strokeWidth="2" fill="none" />}
            {i === 3 && <rect x="22" y="22" width="16" height="16" fill={P.ink} />}
            <text x="30" y="80" textAnchor="middle" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "7px", fill: P.ink, letterSpacing: "0.15em" }}>{["FIELD", "EAT", "LEARN", "MARKET"][i]}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

export function AssetPrint({ subtitle = "Ritual Manual", bg = "#F0E4CC" }) {
  return (
    <svg viewBox="0 0 600 500" role="img" aria-label={`Print editorial spread — ${subtitle}`} style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="600" height="500" fill={bg} />
      <rect x="60" y="50" width="240" height="400" fill={P.paperHi} />
      <rect x="300" y="50" width="240" height="400" fill={P.paperHi} />
      <line x1="300" y1="50" x2="300" y2="450" stroke="#000" strokeOpacity="0.08" />
      <text x="80" y="90" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "7px", fill: P.ink, opacity: 0.55, letterSpacing: "0.25em" }}>CHAPTER 03</text>
      <text x="80" y="170" style={{ fontFamily: "'Fraunces', serif", fontSize: "28px", fontWeight: 400, fill: P.ink, letterSpacing: "-0.02em" }}>A morning</text>
      <text x="80" y="200" style={{ fontFamily: "'Fraunces', serif", fontSize: "28px", fontWeight: 400, fill: P.gold, letterSpacing: "-0.02em" }}>ritual.</text>
      <line x1="80" y1="225" x2="140" y2="225" stroke={P.ink} strokeWidth="0.6" opacity="0.5" />
      {["Begin with water. Cold, not", "cool. A single splash, pressed", "gently, never rubbed. This is", "where the day decides what", "kind of day it wants to be."].map((line, i) => (
        <text key={i} x="80" y={260 + i * 16} style={{ fontFamily: "'Fraunces', serif", fontSize: "11px", fill: P.ink, opacity: 0.82 }}>{line}</text>
      ))}
      <circle cx="420" cy="220" r="75" fill={P.gold} opacity="0.25" />
      <circle cx="420" cy="220" r="55" fill={P.gold} opacity="0.4" />
      <circle cx="420" cy="220" r="35" fill={P.gold} />
      <rect x="414" y="115" width="12" height="70" fill={P.ink} />
      <text x="420" y="400" textAnchor="middle" style={{ fontFamily: "'Fraunces', serif", fontSize: "10px", fill: P.ink, opacity: 0.75 }}>{subtitle}</text>
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════
   HERO COMPOSITION — abstract decoration
   ════════════════════════════════════════════════════════════ */

export function AssetHeroComposition() {
  return (
    <svg viewBox="0 0 800 600" role="img" aria-hidden="true" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect width="800" height="600" fill="transparent" />
      <circle cx="620" cy="240" r="160" fill={P.gold} opacity="0.15" />
      <circle cx="620" cy="240" r="110" fill={P.gold} opacity="0.3" />
      <circle cx="620" cy="240" r="75" fill={P.gold} />
      <rect x="608" y="50" width="24" height="120" fill={P.ink} />
      <line x1="40" y1="520" x2="760" y2="520" stroke={P.ink} strokeWidth="0.8" opacity="0.3" />
      <line x1="40" y1="560" x2="760" y2="560" stroke={P.ink} strokeWidth="0.5" opacity="0.15" />
    </svg>
  );
}
