"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { container, EASE, fadeUp, lineReveal } from "@/lib/motion";
import { MagneticButton } from "./MagneticButton";
import { Marquee } from "./Marquee";

const CAPABILITIES = [
  "Social Media Marketing",
  "Performance Marketing",
  "Branding & Creative",
  "Content Production",
  "Web & App Development",
  "SEO & Growth",
];

function Line({ children }: { children: React.ReactNode }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span variants={lineReveal} className="block">
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bloomA = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const bloomB = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-dvh flex-col overflow-hidden pt-32 sm:pt-36"
    >
      {/* depth blooms */}
      {!reduce && (
        <>
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: EASE }}
            style={{ y: bloomA }}
            className="pointer-events-none absolute right-[4%] top-[14%] -z-10 h-72 w-72 rounded-full bg-accent/25 blur-[100px] sm:h-[32rem] sm:w-[32rem]"
          />
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, delay: 0.2, ease: EASE }}
            style={{ y: bloomB }}
            className="pointer-events-none absolute -left-[6%] bottom-[18%] -z-10 h-64 w-64 rounded-full bg-[#c9b79a]/40 blur-[110px] sm:h-96 sm:w-96"
          />
        </>
      )}
      {/* faint grain */}
      <div className="grain-overlay pointer-events-none absolute inset-0 -z-10 opacity-[0.05]" />

      {/* main content */}
      <motion.div
        style={reduce ? undefined : { y: contentY }}
        className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-5 sm:px-8"
      >
        <motion.div variants={container(0.12, 0.05)} initial="hidden" animate="show">
          <h1 className="font-display text-[clamp(3.4rem,13vw,12rem)] font-medium leading-[0.9] tracking-[-0.02em] text-ink">
            <Line>All</Line>
            <Line>
              <span className="italic">eyes</span>{" "}
              <span className="relative text-ink">
                on
                <svg
                  className="absolute -bottom-1 left-0 w-full sm:-bottom-2"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <motion.path
                    d="M2 8C40 3 90 3 130 6C160 8 180 9 198 5"
                    stroke="var(--color-accent)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    initial={reduce ? undefined : { pathLength: 0 }}
                    animate={reduce ? undefined : { pathLength: 1 }}
                    transition={{ duration: 1, delay: 1.1, ease: EASE }}
                  />
                </svg>
              </span>{" "}
              your
            </Line>
            <Line>brand.</Line>
          </h1>

          <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:items-end">
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3 lg:col-span-6"
            >
              <MagneticButton href="/contact" variant="primary">
                Start a project
              </MagneticButton>
              <MagneticButton href="/portfolio" variant="ghost" arrow={false}>
                <span className="flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-paper">
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                      <path d="M2 1.5v7l6-3.5-6-3.5Z" fill="currentColor" />
                    </svg>
                  </span>
                  Watch our work
                </span>
              </MagneticButton>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed text-ink-2 lg:col-span-6 lg:pl-8"
            >
              Your complete partner for digital growth. From building a brand
              from scratch to scaling it across every platform, we craft{" "}
              <span className="font-medium text-ink">360° marketing</span> that
              makes you impossible to ignore.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* base band: scroll cue + capabilities marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
        className="mt-14 border-t hairline py-5"
      >
        <div className="mx-auto mb-4 flex w-full max-w-[1400px] px-5 sm:px-8">
          <motion.span
            aria-hidden
            animate={reduce ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 text-ink/55"
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 3v10M4 9l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.span>
        </div>
        <Marquee
          items={CAPABILITIES}
          duration={38}
          className="font-display text-2xl text-ink/35 sm:text-3xl"
          itemClassName="pr-12"
        />
      </motion.div>
    </section>
  );
}
