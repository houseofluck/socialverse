"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { EASE } from "@/lib/motion";

/** Full-bleed cinematic showreel — autoplay muted loop with a sound toggle. */
export function Showreel() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [muted, setMuted] = useState(true);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.14, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  function toggleSound() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) v.play().catch(() => {});
    setMuted(v.muted);
  }

  return (
    <section className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="group relative aspect-[16/10] w-full overflow-hidden rounded-[6px] bg-ink sm:aspect-[16/8] lg:aspect-[21/9]"
        data-cursor="focus"
      >
        {/* Cinematic film */}
        <motion.video
          ref={videoRef}
          style={reduce ? undefined : { scale, y }}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/showreel-poster.jpg"
        >
          <source src="/showreel.mp4" type="video/mp4" />
        </motion.video>

        {/* legibility scrim */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/40" />

        {/* overlay content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-9">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-[16ch] font-display text-3xl leading-tight text-paper drop-shadow-sm sm:text-5xl">
              Your complete partner for digital growth.
            </h2>
            <button
              type="button"
              onClick={toggleSound}
              aria-label={muted ? "Unmute showreel" : "Mute showreel"}
              className="flex shrink-0 items-center gap-3 rounded-pill bg-paper/95 py-2 pl-2 pr-5 text-ink transition-transform duration-500 hover:scale-105"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-accent-ink">
                {muted ? (
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 8v4h3l4 3V5L7 8H4Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14 8l4 4M18 8l-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M4 8v4h3l4 3V5L7 8H4Z" fill="currentColor" />
                    <path
                      d="M14 7a4 4 0 0 1 0 6M16.5 5a7 7 0 0 1 0 10"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </span>
              <span className="text-sm font-medium">
                {muted ? "Play with sound" : "Mute"}
              </span>
            </button>
          </div>
        </div>

        {/* corner frame accents */}
        <span className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l border-t border-paper/40" />
        <span className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b border-r border-paper/40" />
      </motion.div>
    </section>
  );
}
