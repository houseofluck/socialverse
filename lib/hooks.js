"use client";
import { useState, useEffect, useRef } from "react";

export function useInView(threshold = 0.15, once = true) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setV(true); if (once) o.unobserve(el); }
      else if (!once) setV(false);
    }, { threshold });
    o.observe(el); return () => o.disconnect();
  }, [threshold, once]);
  return [ref, v];
}

export function useScroll() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}

export function useTime() {
  const [t, setT] = useState("");
  useEffect(() => {
    const fmt = () => {
      const d = new Date();
      return `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")} IST`;
    };
    setT(fmt());
    const i = setInterval(() => setT(fmt()), 30000);
    return () => clearInterval(i);
  }, []);
  return t;
}

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    setMatches(m.matches);
    const h = (e) => setMatches(e.matches);
    m.addEventListener("change", h);
    return () => m.removeEventListener("change", h);
  }, [query]);
  return matches;
}
