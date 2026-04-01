"use client";

import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const PILLARS = [
  { icon: "ri-search-eye-line", name: "Understand", desc: "Deep business & market analysis" },
  { icon: "ri-focus-3-line", name: "Target", desc: "Identify the right audiences" },
  { icon: "ri-quill-pen-line", name: "Create", desc: "Engaging content that converts" },
  { icon: "ri-line-chart-line", name: "Grow", desc: "Measurable, data-driven results" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-[5%] bg-off-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Visual */}
        <Reveal>
          <div className="relative aspect-[5/6] max-h-[500px]">
            <div className="w-[85%] h-full bg-black rounded-sm overflow-hidden relative">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black to-black-light relative">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(196,162,101,0.06) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="font-display text-[8rem] font-black text-gold opacity-10 tracking-tighter select-none">
                  SV
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-20px] right-[-20px] bg-gold py-5 px-6 rounded-sm z-10">
              <div className="font-display text-[2.2rem] font-black text-black leading-none">
                360°
              </div>
              <div className="text-[0.72rem] text-black uppercase tracking-[0.15em] font-accent font-semibold mt-1">
                Marketing
              </div>
            </div>
            <div className="absolute top-7 right-0 bg-white py-3 px-4 rounded-sm shadow-lg z-10 flex items-center gap-2">
              <i className="ri-verified-badge-fill text-gold text-lg" />
              <span className="text-[0.75rem] font-semibold font-accent tracking-wide">
                Verified Agency
              </span>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={0.15}>
          <SectionLabel>About Us</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,3.8vw,3.2rem)] font-black leading-[1.1] mb-4 tracking-tight">
            Every Brand Has a<br />
            Unique <span className="text-gold">Story.</span>
          </h2>
          <p className="text-base text-gray leading-[1.75] max-w-[560px] font-light">
            Social Verse is a full-service digital marketing agency focused on
            transforming brand stories into powerful digital presences. Our team
            combines strategy, creativity, and technology to deliver campaigns
            that generate real business results - whether you&apos;re a startup
            building from scratch or an established company expanding your reach.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
            {PILLARS.map((p) => (
              <div
                key={p.name}
                className="p-4 bg-cream rounded-sm border border-transparent transition-all duration-300 cursor-default hover:bg-black hover:text-white hover:border-gold/15 group"
              >
                <div className="text-xl text-black mb-2 transition-colors group-hover:text-gold">
                  <i className={p.icon} />
                </div>
                <div className="font-display font-bold text-[0.92rem] mb-0.5">
                  {p.name}
                </div>
                <div className="text-[0.78rem] text-gray leading-relaxed transition-colors group-hover:text-white/40">
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
