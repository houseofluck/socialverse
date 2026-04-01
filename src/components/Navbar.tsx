"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    setMenuOpen((p) => !p);
    document.body.style.overflow = menuOpen ? "" : "hidden";
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] px-[5%] flex items-center justify-between transition-all duration-400 ${
          scrolled
            ? "py-3.5 bg-black/[0.96] backdrop-blur-2xl shadow-[0_1px_0_rgba(196,162,101,0.12)]"
            : "py-5"
        }`}
      >
        <Link
          href="#"
          className="font-display text-[1.55rem] font-black text-white no-underline tracking-tight z-[1001] relative"
        >
          Social <span className="text-gold">Verse.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-10 list-none items-center">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-white/60 no-underline text-[0.78rem] font-medium tracking-[0.14em] uppercase font-accent hover:text-white transition-colors relative group"
              >
                {l.label}
                <span className="absolute bottom-[-5px] left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-black no-underline font-accent font-semibold text-[0.78rem] tracking-[0.08em] uppercase rounded-sm hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(196,162,101,0.2)] transition-all"
          >
            <i className="ri-whatsapp-line text-base" />
            Let&apos;s Talk
          </Link>

          <button
            onClick={toggleMenu}
            className="lg:hidden bg-transparent border-none cursor-pointer p-2 z-[1001] relative"
            aria-label="Menu"
          >
            <span
              className={`block w-[22px] h-[2px] bg-white my-[5px] transition-all origin-center ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-[22px] h-[2px] bg-white my-[5px] transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-[22px] h-[2px] bg-white my-[5px] transition-all origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/[0.98] z-[999] flex flex-col items-center justify-center gap-7 transition-all duration-400 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={closeMenu}
            className="font-display text-3xl font-bold text-white no-underline hover:text-gold transition-colors"
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="#contact"
          onClick={closeMenu}
          className="mt-3 px-7 py-3 bg-gold text-black font-accent font-semibold text-sm tracking-[0.1em] uppercase rounded-sm flex items-center gap-2 no-underline"
        >
          <i className="ri-whatsapp-line" /> Chat on WhatsApp
        </Link>
      </div>
    </>
  );
}
