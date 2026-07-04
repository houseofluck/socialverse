"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CASE_STUDIES } from "@/lib/data";
import { EASE, inView } from "@/lib/motion";
import { LazyVideo } from "./LazyVideo";

export function CaseStudiesGrid() {
  return (
    <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-6 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
      {CASE_STUDIES.map((c, i) => (
        <motion.div
          key={c.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
        >
          <Link
            href={`/case-studies/${c.slug}`}
            data-cursor="focus"
            className="group flex h-full flex-col"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[6px] bg-ink">
              {c.video && (
                <LazyVideo
                  src={c.video}
                  poster={c.poster}
                  ariaLabel={`${c.brand} reel`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <span className="absolute left-4 top-4 font-mono text-xs text-paper/80">
                {c.index}
              </span>
            </div>

            <h3 className="mt-5 font-display text-3xl leading-tight tracking-[-0.01em] text-ink">
              {c.brand}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">
              {c.summary}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink">
              Read case study
              <svg
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
