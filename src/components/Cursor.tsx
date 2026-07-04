"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Subtle trailing accent ring for fine-pointer devices.
 * Keeps the native cursor for accessibility; skips touch + reduced-motion.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduce) return;
    setEnabled(true);

    function move(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      setActive(
        !!el?.closest("a, button, [data-cursor='focus'], input, textarea")
      );
    }
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="rounded-full border border-ink/40"
        animate={{
          width: active ? 46 : 12,
          height: active ? 46 : 12,
          x: active ? -23 : -6,
          y: active ? -23 : -6,
          backgroundColor: active
            ? "rgba(198,242,78,0.18)"
            : "rgba(198,242,78,0)",
          borderColor: active
            ? "rgba(22,21,15,0.55)"
            : "rgba(22,21,15,0.35)",
        }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
      />
    </motion.div>
  );
}
