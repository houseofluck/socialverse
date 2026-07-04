"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/motion";

export type AccordionItem = {
  n?: string;
  title: string;
  body: string;
  bullets?: string[];
};

export function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: AccordionItem[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <ul className="border-t hairline">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.title} className="border-b hairline">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center gap-5 py-6 text-left sm:gap-8 sm:py-8"
            >
              {item.n && (
                <span className="font-mono text-xs text-stone sm:text-sm">
                  {item.n}
                </span>
              )}
              <span
                className={`flex-1 font-display text-2xl leading-tight tracking-[-0.01em] transition-colors duration-300 sm:text-4xl ${
                  isOpen ? "text-ink" : "text-ink-2 group-hover:text-ink"
                }`}
              >
                {item.title}
              </span>
              <span
                aria-hidden
                className={`relative grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
                  isOpen
                    ? "border-accent bg-accent text-accent-ink"
                    : "border-ink/15 text-ink/60 group-hover:border-ink"
                }`}
              >
                <span className="absolute h-[1.5px] w-3.5 bg-current" />
                <motion.span
                  animate={{ rotate: isOpen ? 0 : 90 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="absolute h-3.5 w-[1.5px] bg-current"
                />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-6 pb-8 sm:grid-cols-12 sm:gap-8 sm:pl-[calc(2rem+2ch)]">
                    <p className="text-base leading-relaxed text-stone sm:col-span-7">
                      {item.body}
                    </p>
                    {item.bullets && (
                      <ul className="flex flex-col gap-2.5 sm:col-span-5">
                        {item.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2.5 text-sm text-ink-2"
                          >
                            <span
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                              aria-hidden
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
