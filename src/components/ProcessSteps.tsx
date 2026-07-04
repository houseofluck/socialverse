"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { PROCESS } from "@/lib/data";
import { EASE, inView } from "@/lib/motion";

export function ProcessSteps() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <ol ref={ref} className="relative mt-14 sm:mt-20">
      {/* progress spine */}
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-ink/10 sm:left-[calc(50%-0.5px)]" />
      {!reduce && (
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-accent sm:left-[calc(50%-0.5px)]"
        />
      )}

      {PROCESS.map((step, i) => (
        <motion.li
          key={step.n}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.6, ease: EASE }}
          className={`relative flex gap-6 pb-12 last:pb-0 sm:w-1/2 ${
            i % 2 === 0
              ? "sm:ml-0 sm:pr-12 sm:text-right"
              : "sm:ml-[50%] sm:pl-12"
          }`}
        >
          {/* node */}
          <span
            className={`absolute top-1 h-4 w-4 rounded-full border-2 border-accent bg-paper ${
              i % 2 === 0
                ? "left-0 sm:left-auto sm:right-[-8px]"
                : "left-0 sm:left-[-8px]"
            }`}
          />
          <div className={`pl-10 ${i % 2 === 0 ? "sm:pl-0" : "sm:pl-0"}`}>
            <span className="font-mono text-xs text-accent-deep">{step.n}</span>
            <h3 className="mt-2 font-display text-3xl leading-tight text-ink sm:text-4xl">
              {step.title}
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone sm:ml-auto">
              {step.body}
            </p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
