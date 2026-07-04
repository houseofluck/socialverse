"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

type Variant = "primary" | "ghost" | "invert";

const base =
  "group relative inline-flex items-center justify-center gap-2.5 rounded-pill px-7 py-3.5 text-sm font-medium tracking-tight transition-colors duration-300";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-ink hover:bg-ink hover:text-paper",
  ghost:
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  invert: "bg-paper text-ink hover:bg-accent hover:text-accent-ink",
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  arrow = true,
  ariaLabel,
  type = "button",
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  ariaLabel?: string;
  type?: "button" | "submit";
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function handleMove(e: MouseEvent<HTMLElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.4);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <svg
          width="15"
          height="15"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
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
      )}
    </>
  );

  const cls = `${base} ${variants[variant]} ${className}`;
  const isInternal = href?.startsWith("/");

  return (
    <motion.span
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="inline-flex will-change-transform"
    >
      {href ? (
        isInternal ? (
          <Link href={href} aria-label={ariaLabel} className={cls}>
            {inner}
          </Link>
        ) : (
          <a href={href} aria-label={ariaLabel} className={cls}>
            {inner}
          </a>
        )
      ) : (
        <button
          type={type}
          aria-label={ariaLabel}
          onClick={onClick}
          className={cls}
        >
          {inner}
        </button>
      )}
    </motion.span>
  );
}
