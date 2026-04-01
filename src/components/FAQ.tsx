"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { FAQ_ITEMS, openWhatsApp } from "@/lib/config";

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="faq" className="py-24 px-[5%] bg-cream">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
        {/* Left side */}
        <Reveal>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,3.8vw,3.2rem)] font-black leading-[1.1] tracking-tight">
            Common <span className="text-gold">Questions.</span>
          </h2>
          <p className="text-base text-gray leading-[1.75] max-w-[560px] mt-3 font-light">
            Everything you need to know before getting started. Can&apos;t find
            your answer? Chat with us on WhatsApp.
          </p>
          <button
            onClick={() =>
              openWhatsApp("Hi! I have a question about your services.", "faq")
            }
            className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-gold text-black font-accent font-semibold text-[0.82rem] tracking-[0.1em] uppercase rounded-sm hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(196,162,101,0.25)] transition-all cursor-pointer border-none"
          >
            <i className="ri-whatsapp-line" /> Ask on WhatsApp
          </button>
        </Reveal>

        {/* Right side - accordion */}
        <Reveal delay={0.15}>
          <div className="flex flex-col">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="border-b border-black/[0.06]">
                <button
                  onClick={() => setActiveIdx(activeIdx === i ? -1 : i)}
                  className="w-full bg-transparent border-none py-5 font-body text-[0.95rem] font-semibold text-black cursor-pointer flex justify-between items-center gap-3 text-left"
                >
                  {item.q}
                  <i
                    className={`ri-add-line text-lg text-gold flex-shrink-0 transition-transform duration-300 ${
                      activeIdx === i ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`faq-answer ${activeIdx === i ? "open" : ""}`}
                >
                  <p className="text-[0.88rem] text-gray leading-[1.7]">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
