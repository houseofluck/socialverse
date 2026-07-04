"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { PORTFOLIO, PORTFOLIO_FILTERS } from "@/lib/data";
import { EASE } from "@/lib/motion";
import { LazyVideo } from "./LazyVideo";

export function PortfolioGallery() {
  const [filter, setFilter] = useState<(typeof PORTFOLIO_FILTERS)[number]>(
    "All"
  );
  const items =
    filter === "All"
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.category === filter);

  return (
    <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
      {/* Filter bar */}
      <div className="sticky top-20 z-30 -mx-5 mb-10 flex gap-2 overflow-x-auto bg-paper/80 px-5 py-4 backdrop-blur-md [scrollbar-width:none] sm:top-24 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
        {PORTFOLIO_FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`relative shrink-0 rounded-pill px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
              filter === f ? "text-accent-ink" : "text-ink/70 hover:text-ink"
            }`}
          >
            {filter === f && (
              <motion.span
                layoutId="filter-pill"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                className="absolute inset-0 -z-10 rounded-pill bg-accent"
              />
            )}
            {f}
          </button>
        ))}
      </div>

      {/* Masonry */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="gap-3 sm:gap-4 columns-2 lg:columns-3 xl:columns-4"
        >
          {items.map((item, i) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.04, ease: EASE }}
              data-cursor="focus"
              className="group relative mb-3 block break-inside-avoid overflow-hidden rounded-[4px] bg-paper-2 sm:mb-4"
            >
              {item.type === "video" ? (
                <div className="relative aspect-[9/16] w-full">
                  <LazyVideo
                    src={item.src}
                    poster={item.poster}
                    ariaLabel="Client reel"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-pill bg-ink/55 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-paper backdrop-blur-sm">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-accent-bright"
                      aria-hidden
                    />
                    Reel
                  </span>
                </div>
              ) : (
                <Image
                  src={item.src}
                  alt={`${item.category} by The Social Verse`}
                  width={1080}
                  height={1350}
                  sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="h-auto w-full transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
            </motion.figure>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
