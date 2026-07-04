"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { EASE } from "@/lib/motion";

/** Animated count-up for a value like "360°", "7+", "100%", "9". */
function Counter({ value }: { value: string }) {
  const m = value.match(/^(\d+)(.*)$/);
  const hasNum = !!m;
  const target = m ? parseInt(m[1], 10) : 0;
  const suffix = m ? m[2] : "";

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  // Deps are stable primitives only — avoids the effect restarting each frame.
  useEffect(() => {
    if (!inView || !hasNum) return;
    if (reduce) {
      setN(target);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.4,
      ease: EASE,
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, hasNum, target]);

  return <span ref={ref}>{hasNum ? `${n}${suffix}` : value}</span>;
}

export function StatRow({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border hairline bg-ink/10 lg:grid-cols-4">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
          className="flex flex-col gap-3 bg-paper p-7 sm:p-9"
        >
          <span className="font-display text-[clamp(2.6rem,6vw,4.5rem)] font-medium leading-none tracking-[-0.02em] text-ink">
            <Counter value={s.value} />
          </span>
          <span className="text-sm text-stone">{s.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
