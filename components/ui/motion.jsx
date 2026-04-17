"use client";
import { useState, useRef, useCallback } from "react";
import { useInView } from "@/lib/hooks";

export function MaskReveal({ children, delay = 0 }) {
  const [ref, inView] = useInView(0.2);
  return (
    <span ref={ref} style={{
      display: "inline-block", overflow: "hidden",
      verticalAlign: "bottom", paddingBottom: "0.05em",
    }}>
      <span style={{
        display: "inline-block",
        transform: inView ? "translateY(0)" : "translateY(108%)",
        transition: `transform 1.1s cubic-bezier(0.65, 0, 0.35, 1) ${delay}s`,
      }}>{children}</span>
    </span>
  );
}

export function FadeUp({ children, delay = 0, y = 24 }) {
  const [ref, inView] = useInView(0.1);
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : `translateY(${y}px)`,
      transition: `opacity 1s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 1s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
    }}>{children}</div>
  );
}

export function Magnetic({ children, strength = 0.25, style, ...props }) {
  const ref = useRef(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  const handleMove = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    setT({
      x: (e.clientX - r.left - r.width / 2) * strength,
      y: (e.clientY - r.top - r.height / 2) * strength,
    });
  }, [strength]);
  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={() => setT({ x: 0, y: 0 })} {...props}
      style={{
        ...style, display: "inline-block",
        transform: `translate(${t.x}px, ${t.y}px)`,
        transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
      }}>
      {children}
    </div>
  );
}
