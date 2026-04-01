"use client";

import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { PROCESS_STEPS } from "@/lib/config";

export default function Process() {
  return (
    <section id="process" className="py-24 px-[5%] bg-black text-white">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <SectionLabel center>How We Work</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,3.8vw,3.2rem)] font-black leading-[1.1] tracking-tight text-white">
              Our <span className="text-gold">Approach.</span>
            </h2>
            <p className="text-base text-white/35 leading-[1.75] max-w-[560px] mx-auto mt-3 font-light">
              A structured, results-driven process for every project we take on.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.12}>
              <div className="text-center px-4 relative group">
                <div className="w-[88px] h-[88px] border-[1.5px] border-gold/25 rounded-full flex items-center justify-center mx-auto mb-6 bg-black relative z-10 transition-all duration-300 group-hover:bg-gold group-hover:border-gold">
                  <i
                    className={`${step.icon} text-2xl text-gold transition-colors duration-300 group-hover:text-black`}
                  />
                </div>
                <div className="font-mono text-[0.65rem] text-gold tracking-wider mb-2">
                  Step {step.num}
                </div>
                <div className="font-display text-lg font-bold mb-2">
                  {step.title}
                </div>
                <div className="text-[0.82rem] text-white/35 leading-relaxed">
                  {step.description}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
