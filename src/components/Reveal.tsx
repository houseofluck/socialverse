"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { container, fadeUp, inView } from "@/lib/motion";

type Tag = "div" | "section" | "article" | "ul" | "li" | "span" | "p";

const MOTION = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  ul: motion.ul,
  li: motion.li,
  span: motion.span,
  p: motion.p,
} as const;

/** Single element that fades + rises into view once. */
export function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
  variants = fadeUp,
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
  delay?: number;
  variants?: Variants;
}) {
  const MotionTag = MOTION[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}

/** Wrapper that staggers its <RevealItem> children into view. */
export function RevealGroup({
  children,
  className,
  as = "div",
  stagger = 0.09,
  delayChildren = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
  stagger?: number;
  delayChildren?: number;
}) {
  const MotionTag = MOTION[as];
  return (
    <MotionTag
      className={className}
      variants={container(stagger, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={inView}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
  variants = fadeUp,
}: {
  children: ReactNode;
  className?: string;
  as?: Tag;
  variants?: Variants;
}) {
  const MotionTag = MOTION[as];
  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
