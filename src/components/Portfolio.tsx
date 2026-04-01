"use client";

import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { PORTFOLIO_ITEMS } from "@/lib/config";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-[5%] bg-off-white">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="text-center mb-10">
            <SectionLabel center>Our Work</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,3.8vw,3.2rem)] font-black leading-[1.1] tracking-tight">
              Brands We&apos;ve <span className="text-gold">Elevated.</span>
            </h2>
            <p className="text-base text-gray leading-[1.75] max-w-[560px] mx-auto mt-3 font-light">
              A selection of projects across branding, social media, web
              development, and digital advertising.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <Reveal
              key={item.name}
              delay={i * 0.08}
              className={item.large ? "sm:col-span-2 sm:row-span-2" : ""}
            >
              <div className="aspect-square bg-black rounded-[4px] overflow-hidden relative cursor-pointer group h-full">
                {/* BG */}
                <div className="w-full h-full flex items-center justify-center relative">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(196,162,101,0.05) 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                  <i
                    className={`${item.icon} ${
                      item.large ? "text-7xl" : "text-4xl"
                    } text-gold opacity-30 transition-all duration-300 group-hover:opacity-60 group-hover:scale-110`}
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent flex flex-col justify-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="text-[0.65rem] text-gold uppercase tracking-[0.2em] font-accent font-medium mb-1">
                    {item.cat}
                  </div>
                  <div
                    className={`font-display font-bold text-white ${
                      item.large ? "text-xl" : "text-base"
                    }`}
                  >
                    {item.name}
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
