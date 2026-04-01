"use client";

import { motion } from "framer-motion";
import { openWhatsApp } from "@/lib/config";
import Link from "next/link";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const line = (d: number) => ({
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: d, ease },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-black flex items-center relative overflow-hidden"
    >
      {/* BG layers */}
      <div className="absolute inset-0 hero-dots" />
      <div
        className="absolute w-[700px] h-[700px] rounded-full right-[-150px] top-[-150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(196,162,101,0.1) 0%, transparent 65%)",
          animation: "glowPulse 6s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full left-[5%] bottom-[-10%]"
        style={{
          background:
            "radial-gradient(circle, rgba(196,162,101,0.05) 0%, transparent 65%)",
        }}
      />
      {/* <div className="hero-line-v" style={{ left: "25%" }} />
      <div className="hero-line-v" style={{ left: "50%" }} />
      <div className="hero-line-v" style={{ left: "75%" }} /> */}

      {/* Content */}
      <div className="relative z-10 px-[8%] max-w-[1400px] mx-auto w-full">
        {/* <motion.div
          {...line(0.3)}
          className="inline-flex items-center gap-2.5 px-4 py-2 border border-gold/25 text-gold font-accent text-[0.72rem] tracking-[0.22em] uppercase mb-8 font-medium"
        >
          <i className="ri-sparkling-2-fill text-sm" />
          Full-Service Digital Marketing Agency
        </motion.div> */}

        <h1 className="font-display font-black text-white leading-[1.06] mt-6 mb-6 tracking-tight text-[clamp(2.8rem,6.5vw,6rem)]">
          <motion.span {...line(0.45)} className="block">
            From the First Idea
          </motion.span>
          <motion.span {...line(0.6)} className="block">
            to the <span className="text-gold">Final Launch.</span>
          </motion.span>
          <motion.span
            {...line(0.75)}
            className="block"
            style={{
              WebkitTextStroke: "1.5px rgba(255,255,255,0.4)",
              color: "transparent",
            }}
          >
            360° Growth.
          </motion.span>
        </h1>

        <motion.p
          {...line(0.9)}
          className="text-[1.1rem] text-white/45 max-w-[520px] leading-[1.75] font-light mb-9"
        >
          We combine strategy, creativity, and technology to transform your
          brand into a powerful market presence with measurable, result-driven
          growth.
        </motion.p>

        <motion.div
          {...line(1.05)}
          className="flex gap-3 items-center flex-wrap"
        >
          <button
            onClick={() =>
              openWhatsApp(
                "Hi Social Verse! I want to grow my brand. Let's discuss.",
                "hero_cta"
              )
            }
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-black font-accent font-semibold text-[0.82rem] tracking-[0.1em] uppercase rounded-sm hover:bg-whatsapp-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(37,211,102,0.2)] transition-all cursor-pointer border-none"
          >
            <i className="ri-whatsapp-line" /> Chat With Us
          </button>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-white font-accent font-medium text-[0.82rem] tracking-[0.1em] uppercase border border-white/15 rounded-sm hover:border-gold hover:text-gold transition-all no-underline"
          >
            Explore Services <i className="ri-arrow-down-s-line" />
          </Link>
        </motion.div>

        <motion.div
          {...line(1.2)}
          className="flex items-center gap-5 mt-10 flex-wrap"
        >
          {[
            "360° Solutions",
            "Result Driven",
            "Creative Experts",
            "Data Backed",
          ].map((t) => (
            <div
              key={t}
              className="flex items-center gap-1.5 text-[0.78rem] text-white/30 font-accent"
            >
              <i className="ri-checkbox-circle-fill text-gold text-sm" /> {t}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/25 text-[0.65rem] tracking-[0.25em] uppercase font-accent">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
