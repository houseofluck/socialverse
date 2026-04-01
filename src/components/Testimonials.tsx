"use client";

import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { TESTIMONIALS } from "@/lib/config";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-[5%] bg-cream">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <SectionLabel center>Testimonials</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,3.8vw,3.2rem)] font-black leading-[1.1] tracking-tight">
              What Our Clients <span className="text-gold">Say.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="bg-white p-7 rounded-[4px] border border-black/[0.04] transition-all duration-300 hover:border-gold hover:shadow-[0_12px_40px_rgba(196,162,101,0.06)] h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <i key={j} className="ri-star-fill text-gold text-sm" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-[0.92rem] text-black leading-[1.7] mb-5 italic font-display flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center font-display font-black text-sm text-black">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-[0.72rem] text-gray">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
