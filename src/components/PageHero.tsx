"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { container, EASE, fadeUp, lineReveal } from "@/lib/motion";

/**
 * Reusable page header with masked line-reveal title. Clears the fixed nav.
 * `title` lines are split on "\n".
 */
export function PageHero({
  title,
  intro,
  aside,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  aside?: ReactNode;
}) {
  const reduce = useReducedMotion();
  const lines = title.split("\n");

  return (
    <section className="relative mx-auto w-full max-w-[1400px] px-5 pb-6 pt-36 sm:px-8 sm:pt-48">
      {!reduce && (
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
          className="pointer-events-none absolute right-[8%] top-[30%] -z-10 h-56 w-56 rounded-full bg-accent/20 blur-[90px] sm:h-80 sm:w-80"
        />
      )}

      <motion.div variants={container(0.1, 0.05)} initial="hidden" animate="show">
        <h1 className="font-display text-[clamp(2.8rem,9vw,8rem)] font-medium leading-[0.94] tracking-[-0.02em] text-ink">
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-[0.06em]">
              <motion.span variants={lineReveal} className="block">
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {(intro || aside) && (
          <motion.div
            variants={fadeUp}
            className="mt-10 grid gap-8 border-t hairline pt-8 lg:grid-cols-12 lg:items-start"
          >
            {intro && (
              <div className="max-w-2xl text-lg leading-relaxed text-stone lg:col-span-8">
                {intro}
              </div>
            )}
            {aside && (
              <div className="lg:col-span-4 lg:text-right">{aside}</div>
            )}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
