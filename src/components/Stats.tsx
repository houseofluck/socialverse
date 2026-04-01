"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

function Counter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          function update(now: number) {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setCount(Math.floor(eased * target));
            if (p < 1) requestAnimationFrame(update);
            else setCount(target);
          }
          requestAnimationFrame(update);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-display text-[3rem] font-black text-gold leading-none mb-1">
      {count}
      {suffix}
    </div>
  );
}

const STATS = [
  { target: 360, suffix: "°", label: "Degree Solutions" },
  { target: 7, suffix: "+", label: "Core Services" },
  { target: 100, suffix: "%", label: "Result Driven" },
  { target: 24, suffix: "/7", label: "Dedicated Support" },
];

export default function Stats() {
  return (
    <div className="bg-black border-t border-gold/10 py-12 px-[5%]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <div className="text-center py-4 relative">
              <Counter target={s.target} suffix={s.suffix} />
              <div className="text-[0.75rem] text-white/35 uppercase tracking-[0.18em] font-accent font-medium">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
