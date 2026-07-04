"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";
import { StatRow } from "./Stat";
import { PILLARS, STATS } from "@/lib/data";

/**
 * Highlights individual words as they scroll through the viewport —
 * the signature "manifesto" moment.
 */
function Manifesto() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.25"],
  });

  const words =
    "We believe marketing should do more than just look good. It should perform.".split(
      " "
    );

  return (
    <p
      ref={ref}
      className="font-display text-[clamp(1.9rem,4.6vw,4rem)] font-medium leading-[1.08] tracking-[-0.01em]"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return <Word key={i} range={[start, end]} progress={scrollYProgress} word={word} />;
      })}
    </p>
  );
}

function Word({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: import("framer-motion").MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const perform = word.toLowerCase().startsWith("perform");
  return (
    <span className="relative mr-[0.25em] inline-block">
      <span className="absolute inset-0 opacity-15">{word}</span>
      <motion.span
        style={{ opacity }}
        className={perform ? "italic text-ink" : "text-ink"}
      >
        {word}
      </motion.span>
    </span>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="mx-auto mt-28 w-full max-w-[1400px] px-5 sm:mt-40 sm:px-8"
    >
      <div>
        <Manifesto />
        <Reveal
          delay={0.1}
          className="mt-10 max-w-2xl text-lg leading-relaxed text-stone"
        >
          <p>
            The Social Verse is a modern digital marketing agency helping brands
            scale through impactful branding, strategic advertising and content
            that actually connects. We blend creativity, strategy and performance
            into digital experiences built to deliver real business results — not
            just pretty campaigns.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 sm:mt-20">
        <StatRow stats={STATS} />
      </div>

      {/* Pillars */}
      <RevealGroup
        as="ul"
        stagger={0.1}
        className="mt-20 grid gap-px overflow-hidden rounded-[4px] border hairline bg-ink/10 sm:mt-28 sm:grid-cols-2 lg:grid-cols-4"
      >
        {PILLARS.map((p) => (
          <RevealItem
            as="li"
            key={p.n}
            className="group flex flex-col gap-6 bg-paper p-7 transition-colors duration-500 hover:bg-paper-2"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-stone">{p.n}</span>
              <span className="h-2 w-2 rounded-full bg-ink/15 transition-colors duration-500 group-hover:bg-accent-deep" />
            </div>
            <h3 className="font-display text-2xl leading-snug text-ink">
              {p.title}
            </h3>
            <p className="mt-auto text-sm leading-relaxed text-stone">
              {p.body}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
