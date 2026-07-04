"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { NAV_LINKS } from "@/lib/data";
import { EASE } from "@/lib/motion";
import { Logo } from "./Logo";
import { MagneticButton } from "./MagneticButton";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={false}
        animate={{
          backgroundColor: scrolled
            ? "rgba(241,237,227,0.72)"
            : "rgba(241,237,227,0)",
          borderColor: scrolled ? "rgba(22,21,15,0.10)" : "rgba(22,21,15,0)",
          paddingTop: scrolled ? 12 : 22,
          paddingBottom: scrolled ? 12 : 22,
        }}
        transition={{ duration: 0.4, ease: EASE }}
        className="border-b backdrop-blur-md"
      >
        <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 sm:px-8">
          <Logo
            className="h-9 w-auto sm:h-10"
            onClick={() => setOpen(false)}
          />

          <div className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.slice(1, 5).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`link-underline text-sm transition-colors hover:text-ink ${
                  isActive(l.href) ? "text-ink" : "text-ink/70"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <MagneticButton href="/contact" variant="primary">
                Let&rsquo;s talk
              </MagneticButton>
            </div>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-ink/15 lg:hidden"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
                className="block h-[1.5px] w-5 bg-ink"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
                className="block h-[1.5px] w-5 bg-ink"
              />
            </button>
          </div>
        </nav>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="fixed inset-0 top-0 -z-10 flex flex-col bg-paper px-6 pb-10 pt-28 lg:hidden"
          >
            <ul className="flex flex-col divide-y divide-ink/10">
              {NAV_LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, ease: EASE }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-5 font-display text-4xl tracking-tight ${
                      isActive(l.href) ? "text-accent" : "text-ink"
                    }`}
                  >
                    {l.label}
                    <span className="text-accent-deep">↗</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto pt-10">
              <MagneticButton
                href="/contact"
                variant="primary"
                className="w-full"
              >
                Start a project
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
