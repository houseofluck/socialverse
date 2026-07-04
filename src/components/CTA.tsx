"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CONTACT } from "@/lib/data";
import { EASE } from "@/lib/motion";
import { Marquee } from "./Marquee";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";

export function CTA() {
  const reduce = useReducedMotion();
  return (
    <section id="contact" className="mt-28 px-3 sm:mt-40 sm:px-5">
      <div className="relative isolate overflow-hidden rounded-[10px] bg-accent px-5 py-20 text-accent-ink sm:px-10 sm:py-28">
        {/* rotating accent ring */}
        {!reduce && (
          <motion.div
            aria-hidden
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-accent-ink/25 sm:h-96 sm:w-96"
          />
        )}

        <div className="relative mx-auto w-full max-w-[1200px]">
          <Reveal>
            <h2 className="max-w-[15ch] font-display text-[clamp(2.6rem,7.5vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.02em]">
              Your brand deserves more than ordinary.
            </h2>
          </Reveal>

          <Reveal
            delay={0.1}
            className="mt-8 max-w-xl text-lg leading-relaxed text-accent-ink/85"
          >
            <p>
              Let&rsquo;s build something that stands out. Tell us where you want
              to go — we&rsquo;ll craft the strategy, creative and campaigns to
              get you there.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-col gap-10 border-t border-accent-ink/25 pt-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-ink/70">
                Email us
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="link-underline mt-2 inline-block font-display text-2xl tracking-tight sm:text-4xl"
              >
                {CONTACT.email}
              </a>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-accent-ink/70">
                Call us
              </p>
              <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-lg">
                {CONTACT.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p}`}
                    className="link-underline font-medium"
                  >
                    {p}
                  </a>
                ))}
              </div>
            </div>

            <MagneticButton
              href={`mailto:${CONTACT.email}`}
              variant="invert"
              className="shrink-0 !bg-ink !text-paper hover:!bg-paper hover:!text-ink"
            >
              Start a project
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* scrolling tagline under the panel */}
      <div className="mt-6">
        <Marquee
          items={Array(6).fill("All eyes on your brand")}
          duration={40}
          reverse
          className="font-display text-3xl text-ink/25 sm:text-5xl"
          itemClassName="pr-10"
          separator={
            <span className="text-accent-deep" aria-hidden>
              ✦
            </span>
          }
        />
      </div>
    </section>
  );
}
