"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { SERVICES } from "@/lib/data";
import { EASE } from "@/lib/motion";
import { Reveal } from "./Reveal";

const PREVIEW_TONES = [
  "from-[#e7d9c2] to-[#c9ad82]",
  "from-[#cdd3c6] to-[#98a68c]",
  "from-[#e6d3a0] to-[#bd9c4e]",
];

export function Services() {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 180, damping: 22, mass: 0.5 });
  const py = useSpring(my, { stiffness: 180, damping: 22, mass: 0.5 });

  return (
    <section
      id="services"
      className="mx-auto mt-28 w-full max-w-[1400px] px-5 sm:mt-40 sm:px-8"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - rect.left);
        my.set(e.clientY - rect.top);
      }}
    >
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <Reveal>
            <h2 className="max-w-[16ch] font-display text-[clamp(2.4rem,6vw,5rem)] font-medium leading-[0.98] tracking-[-0.02em]">
              Digital solutions built to grow your business.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="max-w-xs text-sm leading-relaxed text-stone">
            Nine disciplines, one team — every service engineered to make your
            brand impossible to scroll past.
          </p>
        </Reveal>
      </div>

      {/* Floating preview (desktop) */}
      {!reduce && (
        <AnimatePresence>
          {active !== null && (
            <motion.div
              aria-hidden
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.35, ease: EASE }}
              style={{ x: px, y: py }}
              className="pointer-events-none absolute left-0 top-0 z-20 hidden lg:block"
            >
              <div
                className={`h-52 w-72 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[4px] bg-gradient-to-br ${
                  PREVIEW_TONES[active % PREVIEW_TONES.length]
                } shadow-2xl`}
              >
                <div className="grain-overlay absolute inset-0 opacity-15 mix-blend-multiply" />
                <div className="absolute inset-0 flex items-end p-5">
                  <span className="font-display text-2xl text-paper drop-shadow">
                    {SERVICES[active].title}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      <ul className="relative mt-14 border-t hairline">
        {SERVICES.map((s, i) => (
          <li
            key={s.n}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className="border-b hairline"
          >
            <motion.a
              href="/services"
              initial={false}
              animate={{
                paddingLeft: active === i && !reduce ? 24 : 0,
                color:
                  active === i ? "var(--color-ink)" : "var(--color-ink-2)",
              }}
              transition={{ duration: 0.4, ease: EASE }}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-6 sm:gap-8 sm:py-8"
            >
              <span className="font-mono text-xs text-stone sm:text-sm">
                {s.n}
              </span>

              <div className="flex flex-col gap-2">
                <span className="font-display text-2xl leading-tight tracking-[-0.01em] sm:text-4xl">
                  {s.title}
                </span>
                <span
                  className={`max-w-xl text-sm leading-relaxed text-stone transition-opacity duration-300 ${
                    active === i ? "opacity-100" : "opacity-60 lg:opacity-0"
                  }`}
                >
                  {s.blurb}
                </span>
              </div>

              <span
                aria-hidden
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-400 ${
                  active === i
                    ? "border-accent bg-accent text-accent-ink"
                    : "border-ink/15 text-ink/50"
                }`}
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 12L12 4M12 4H5M12 4v7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </motion.a>
          </li>
        ))}
      </ul>
    </section>
  );
}
