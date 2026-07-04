"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CREATIVES, FEATURES } from "@/lib/data";
import { inView } from "@/lib/motion";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { MediaFrame } from "./ui";

export function Work() {
  return (
    <section
      id="work"
      className="mx-auto mt-28 w-full max-w-[1400px] px-5 sm:mt-40 sm:px-8"
    >
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <Reveal>
            <h2 className="max-w-[18ch] font-display text-[clamp(2.4rem,6vw,5rem)] font-medium leading-[0.98] tracking-[-0.02em]">
              A showcase of brands, campaigns &amp; creativity.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="hidden sm:block">
          <MagneticButton href="/portfolio" variant="ghost">
            Explore portfolio
          </MagneticButton>
        </Reveal>
      </div>

      {/* Creatives feed — masonry via CSS columns handles mixed aspects */}
      <div className="mt-14 [column-fill:_balance] gap-3 sm:gap-4 columns-2 lg:columns-3 xl:columns-4">
        {CREATIVES.map((src, i) => (
          <motion.figure
            key={src}
            variants={{
              hidden: { opacity: 0, y: 28 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: (i % 4) * 0.05 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            data-cursor="focus"
            className="group relative mb-3 block break-inside-avoid overflow-hidden rounded-[4px] bg-paper-2 sm:mb-4"
          >
            <Image
              src={src}
              alt="Social media creative by The Social Verse"
              width={1080}
              height={1350}
              sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="h-auto w-full transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
            />
            <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
          </motion.figure>
        ))}
      </div>

      {/* Category features */}
      <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            variants={{
              hidden: { opacity: 0, y: 28 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: i * 0.08 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={inView}
          >
            <MediaFrame
              label={f.title}
              caption={f.caption}
              tone={f.tone}
              image={f.image}
              objectPosition={f.objectPosition}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="aspect-[4/5] h-full"
            />
          </motion.div>
        ))}
      </div>

      <Reveal className="mt-8 sm:hidden">
        <MagneticButton href="/portfolio" variant="ghost" className="w-full">
          Explore portfolio
        </MagneticButton>
      </Reveal>
    </section>
  );
}
