"use client";

import Link from "next/link";
import { SITE_CONFIG, openWhatsApp } from "@/lib/config";

const SERVICE_LINKS = [
  "Social Media",
  "Digital Advertising",
  "Web Development",
  "App Development",
  "Influencer Marketing",
  "Branding & Creative",
  "Outdoor Marketing",
];

const COMPANY_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "How We Work", href: "#process" },
  { label: "Our Work", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Why Us", href: "#why" },
  { label: "FAQ", href: "#faq" },
];

const SOCIALS = [
  { icon: "ri-linkedin-box-fill", href: SITE_CONFIG.linkedin },
  { icon: "ri-instagram-line", href: SITE_CONFIG.instagram },
  { icon: "ri-facebook-fill", href: SITE_CONFIG.facebook },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-14 pb-6 px-[5%]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.2fr] gap-8 mb-10">
        {/* Brand */}
        <div>
          <div className="font-display text-xl font-black text-white mb-3">
            Social <span className="text-gold">Verse.</span>
          </div>
          <p className="text-[0.85rem] text-white/30 leading-[1.7] max-w-[300px]">
            Your complete partner for digital growth. Strategy, creativity, and
            technology - all under one roof to help your brand succeed.
          </p>
          <div className="flex gap-2 mt-4">
            {SOCIALS.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/[0.08] rounded-sm flex items-center justify-center text-white/35 no-underline text-[0.95rem] transition-all hover:border-gold hover:text-gold hover:bg-gold/5"
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <div className="font-accent text-[0.7rem] tracking-[0.22em] uppercase text-gold mb-4 font-medium">
            Services
          </div>
          <ul className="list-none flex flex-col gap-2">
            {SERVICE_LINKS.map((s) => (
              <li key={s}>
                <Link
                  href="#services"
                  className="text-white/30 no-underline text-[0.85rem] hover:text-white transition-colors"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <div className="font-accent text-[0.7rem] tracking-[0.22em] uppercase text-gold mb-4 font-medium">
            Company
          </div>
          <ul className="list-none flex flex-col gap-2">
            {COMPANY_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-white/30 no-underline text-[0.85rem] hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <div className="font-accent text-[0.7rem] tracking-[0.22em] uppercase text-gold mb-4 font-medium">
            Get In Touch
          </div>
          <ul className="list-none flex flex-col gap-2">
            <li>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-white/30 no-underline text-[0.85rem] hover:text-white transition-colors flex items-center gap-1"
              >
                <i className="ri-mail-line text-xs" /> {SITE_CONFIG.email}
              </a>
            </li>
            <li>
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 no-underline text-[0.85rem] hover:text-white transition-colors flex items-center gap-1"
              >
                <i className="ri-instagram-line text-xs" /> @thesocialverse
              </a>
            </li>
          </ul>
          <button
            onClick={() =>
              openWhatsApp("Hi Social Verse! I'd like to discuss a project.", "footer")
            }
            className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 bg-whatsapp/10 border border-whatsapp/20 rounded-sm text-whatsapp no-underline font-accent text-[0.78rem] font-semibold tracking-wide transition-all hover:bg-whatsapp/15 hover:border-whatsapp cursor-pointer"
          >
            <i className="ri-whatsapp-line" /> Chat on WhatsApp
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-[1200px] mx-auto pt-5 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2 text-white/[0.18] text-[0.75rem] font-accent">
        <span>© {new Date().getFullYear()} Social Verse. All rights reserved.</span>
        <span>Designed with purpose ✦ Built for growth</span>
      </div>
    </footer>
  );
}
