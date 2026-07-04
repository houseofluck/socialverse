"use client";

import { motion } from "framer-motion";
import { CASE_STUDIES } from "@/lib/data";
import { inView } from "@/lib/motion";
import { Reveal } from "./Reveal";
import { LazyVideo } from "./LazyVideo";
import { MediaFrame } from "./ui";

export function CaseStudies() {
  return (
    <section
      id="cases"
      className="mt-28 bg-ink py-24 text-paper sm:mt-40 sm:py-32"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <h2 className="max-w-[18ch] font-display text-[clamp(2.4rem,6vw,5rem)] font-medium leading-[0.98] tracking-[-0.02em] text-paper">
                Proof, not promises.
              </h2>
            </Reveal>
          </div>
          <Reveal
            delay={0.1}
            className="max-w-xs text-sm leading-relaxed text-paper/60"
          >
            <p>
              Real brands we&rsquo;ve helped build a stronger, more premium
              digital presence.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-4">
          {CASE_STUDIES.map((c, i) => (
            <motion.a
              key={c.brand}
              href={`/case-studies/${c.slug}`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: i * 0.08 },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              data-cursor="focus"
              className="group grid grid-cols-1 gap-6 rounded-[6px] border border-paper/10 p-5 transition-colors duration-500 hover:border-paper/25 hover:bg-paper/[0.03] sm:p-6 lg:grid-cols-12 lg:items-center lg:gap-10"
            >
              <div className="lg:col-span-4">
                {c.video ? (
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[6px] bg-ink lg:aspect-[3/4]">
                    <LazyVideo
                      src={c.video}
                      poster={c.poster}
                      ariaLabel={`${c.brand} reel`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-pill bg-ink/55 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-paper backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" aria-hidden />
                      Reel
                    </span>
                  </div>
                ) : (
                  <MediaFrame
                    label={c.brand}
                    tone={c.tone}
                    className="aspect-[16/10] w-full"
                  />
                )}
              </div>

              <div className="lg:col-span-5">
                <h3 className="font-display text-3xl leading-tight text-paper sm:text-4xl">
                  {c.brand}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-paper/70">
                  {c.summary}
                </p>
              </div>

              <div className="lg:col-span-3">
                <ul className="flex flex-col gap-3">
                  {c.results.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-2.5 text-sm text-paper/80"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-bright"
                        aria-hidden
                      />
                      {r}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-paper">
                  Read case study
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
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
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
