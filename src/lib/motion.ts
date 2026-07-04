import type { Variants } from "framer-motion";

/** Signature easing — expressive "ease-out expo" used across the site. */
export const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE },
  },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

/** Clip-reveal for headline lines. */
export const lineReveal: Variants = {
  hidden: { opacity: 0, y: "110%" },
  show: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.9, ease: EASE },
  },
};

export const container = (stagger = 0.09, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** Viewport config reused by every scroll-reveal. */
export const inView = { once: true, amount: 0.25, margin: "0px 0px -10% 0px" };
