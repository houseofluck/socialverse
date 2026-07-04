"use client";

import { motion } from "framer-motion";
import { REELS } from "@/lib/data";
import { inView } from "@/lib/motion";
import { LazyVideo } from "./LazyVideo";
import { Reveal } from "./Reveal";

export function Reels() {
  return (
    <section className="mt-28 sm:mt-40">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <h2 className="max-w-[20ch] font-display text-[clamp(2.4rem,6vw,5rem)] font-medium leading-[0.98] tracking-[-0.02em]">
                Visual storytelling that drives engagement.
              </h2>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Full-bleed horizontal reel strip */}
      <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:scroll-px-8 sm:px-8">
        {REELS.map((r, i) => (
          <motion.article
            key={r.video}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: (i % 5) * 0.06 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            data-cursor="focus"
            className="group relative aspect-[9/16] w-[240px] shrink-0 snap-start overflow-hidden rounded-[8px] bg-ink sm:w-[280px]"
          >
            <LazyVideo
              src={r.video}
              poster={r.poster}
              ariaLabel={`${r.brand} reel`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />

            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-pill bg-ink/55 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-paper backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" aria-hidden />
              Reel
            </span>

            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="font-display text-xl text-paper drop-shadow-sm">
                {r.brand}
              </p>
            </div>
          </motion.article>
        ))}

        {/* trailing spacer so last card can snap clear of the edge */}
        <div className="w-1 shrink-0" aria-hidden />
      </div>
    </section>
  );
}
