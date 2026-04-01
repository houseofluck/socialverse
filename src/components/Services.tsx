"use client";

import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { SERVICES, openWhatsApp } from "@/lib/config";

export default function Services() {
  return (
    <section id="services" className="py-24 px-[5%] bg-cream">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <Reveal>
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,3.8vw,3.2rem)] font-black leading-[1.1] tracking-tight">
              Complete Digital
              <br />
              <span className="text-gold">Services.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base text-gray leading-[1.75] max-w-[480px] font-light md:text-right">
              End-to-end solutions to build, grow, and scale your brand across
              every digital touchpoint.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {SERVICES.map((svc, i) => (
            <Reveal key={svc.title} delay={Math.min(i * 0.08, 0.3)}>
              <div className="bg-white p-7 rounded-[4px] relative overflow-hidden border border-black/[0.03] transition-all duration-400 cursor-pointer group hover:-translate-y-1.5 hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)] hover:bg-black hover:text-white flex flex-col h-full before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gold before:scale-x-0 before:origin-left before:transition-transform before:duration-400 hover:before:scale-x-100">
                {/* Top row */}
                <div className="flex justify-between items-start mb-5">
                  <div className="w-12 h-12 bg-cream rounded-sm flex items-center justify-center text-xl text-black transition-all duration-300 group-hover:bg-gold group-hover:text-black">
                    <i className={svc.icon} />
                  </div>
                  <i className="ri-arrow-right-up-line text-lg text-cream-dark opacity-0 mt-1.5 transition-all duration-300 group-hover:opacity-100 group-hover:text-gold" />
                </div>

                {/* Content */}
                <div className="font-display text-lg font-bold mb-2">
                  {svc.title}
                </div>
                <div className="text-[0.85rem] text-gray leading-[1.65] transition-colors duration-300 group-hover:text-white/45 flex-1">
                  {svc.description}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.65rem] px-2.5 py-1 bg-cream rounded-sm font-accent tracking-wide text-gray transition-all duration-300 group-hover:bg-white/[0.06] group-hover:text-white/45"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* WhatsApp link */}
                <button
                  onClick={() =>
                    openWhatsApp(
                      `Hi! I'm interested in ${svc.title} services.`,
                      `service_${svc.title.toLowerCase().replace(/\s+/g, '_')}`
                    )
                  }
                  className="flex items-center gap-1.5 mt-4 text-[0.72rem] font-accent font-semibold text-whatsapp tracking-wide uppercase opacity-0 transition-all duration-300 group-hover:opacity-100 bg-transparent border-none cursor-pointer hover:underline"
                >
                  <i className="ri-whatsapp-line" /> Enquire on WhatsApp
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
