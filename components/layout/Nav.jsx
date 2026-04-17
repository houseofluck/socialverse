"use client";
import { useState } from "react";
import { P } from "@/lib/palette";
import { useScroll } from "@/lib/hooks";
import { Wordmark } from "@/components/ui/Marks";
import { Magnetic } from "@/components/ui/motion";

export function Nav() {
  const y = useScroll();
  const [open, setOpen] = useState(false);
  const scrolled = y > 40;

  const links = [
    { label: "Work", href: "#work", num: "01" },
    { label: "Practice", href: "#practice", num: "02" },
    { label: "Studio", href: "#studio", num: "03" },
    { label: "Writing", href: "#writing", num: "04" },
  ];

  return (
    <header role="banner" style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? "14px clamp(20px, 4vw, 36px)" : "24px clamp(20px, 4vw, 36px)",
      background: scrolled ? "rgba(239,232,216,0.88)" : "transparent",
      backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
      borderBottom: scrolled ? `1px solid ${P.hair}` : "1px solid transparent",
      transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
      display: "flex", justifyContent: "space-between", alignItems: "center",
    }}>
      <a href="/" aria-label="Social Verse — Home" style={{ textDecoration: "none", display: "block" }}>
        <Wordmark size={22} />
      </a>

      <nav
        role="navigation"
        aria-label="Primary"
        className="sv-nav-links"
        data-open={open ? "true" : "false"}
      >
        {links.map((i) => (
          <a key={i.label} href={i.href} onClick={() => setOpen(false)} style={{
            color: P.ink, textDecoration: "none", fontSize: "13px", fontWeight: 400,
            display: "inline-flex", alignItems: "baseline", gap: "6px",
          }}>
            <sup className="type-mono" style={{ fontSize: "9px", color: P.dim }}>{i.num}</sup>
            {i.label}
          </a>
        ))}
        <Magnetic strength={0.2}>
          <a href="#contact" onClick={() => setOpen(false)} style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            padding: "11px 20px", background: P.ink, color: P.paper,
            borderRadius: "100px", textDecoration: "none",
            fontSize: "13px", fontWeight: 400,
            whiteSpace: "nowrap",
          }}>
            Start a project
            <span style={{ width: "4px", height: "4px", background: "currentColor", borderRadius: "50%" }} />
            2 spots
          </a>
        </Magnetic>
      </nav>

      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="sv-nav-toggle"
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          {open ? (
            <path d="M3 3 L13 13 M13 3 L3 13" stroke="currentColor" strokeWidth="1.5" fill="none" />
          ) : (
            <g stroke="currentColor" strokeWidth="1.5">
              <line x1="2" y1="5" x2="14" y2="5" />
              <line x1="2" y1="11" x2="14" y2="11" />
            </g>
          )}
        </svg>
      </button>
    </header>
  );
}
