"use client";

import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { WHY_ITEMS } from "@/lib/config";

export default function WhyUs() {
  return (
    <section id="why" className="py-24 px-[5%] bg-off-white">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="mb-12">
            <SectionLabel>Why Social Verse</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,3.8vw,3.2rem)] font-black leading-[1.1] tracking-tight">
              Where Everything Feels the Same,
              <br />
              We Make Your Brand{" "}
              <span className="text-gold">Different.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {WHY_ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i * 0.08, 0.4)}>
              <div className="p-6 border border-black/5 rounded-[4px] transition-all duration-300 relative overflow-hidden hover:border-gold/30 hover:shadow-[0_12px_40px_rgba(196,162,101,0.06)] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[2px] before:bg-gold before:scale-x-0 before:transition-transform before:duration-400 hover:before:scale-x-100">
                <div className="text-2xl text-gold mb-4">
                  <i className={item.icon} />
                </div>
                <div className="font-display font-bold text-base mb-2">
                  {item.title}
                </div>
                <div className="text-[0.83rem] text-gray leading-[1.65]">
                  {item.desc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
