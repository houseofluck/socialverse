import { P } from "@/lib/palette";

export function Wordmark({ size = 24, color = P.ink }) {
  return (
    <svg height={size} viewBox="0 0 220 40" style={{ display: "block" }} role="img" aria-label="Social Verse logo">
      <text x="0" y="28" style={{
        fontFamily: "'Fraunces', serif", fontSize: "32px",
        fontWeight: 400, fill: color, letterSpacing: "-0.02em",
        fontVariationSettings: '"opsz" 48',
      }}>Social Verse</text>
      <circle cx="212" cy="22" r="3" fill={P.gold} />
    </svg>
  );
}

export function MicroMark({ size = 10, color = P.gold }) {
  return (
    <svg viewBox="0 0 12 12" width={size} height={size} style={{ display: "inline-block" }} role="img" aria-hidden="true">
      <path d="M6 0 L7 5 L12 6 L7 7 L6 12 L5 7 L0 6 L5 5 Z" fill={color} />
    </svg>
  );
}
