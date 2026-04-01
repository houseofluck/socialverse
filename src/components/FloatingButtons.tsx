"use client";

import { useState, useEffect } from "react";
import { openWhatsApp } from "@/lib/config";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Float */}
      <div className="fixed bottom-7 right-7 z-[990] flex flex-col items-end gap-2.5 group">
        <div className="bg-white text-black px-3.5 py-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg text-[0.82rem] font-medium shadow-lg opacity-0 translate-y-1 scale-95 transition-all duration-300 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 whitespace-nowrap">
          Chat with us!
        </div>
        <button
          onClick={() =>
            openWhatsApp("Hi Social Verse! I'm interested in your services.", "floating_button")
          }
          className="wa-pulse w-[58px] h-[58px] bg-whatsapp rounded-full flex items-center justify-center text-white text-[1.6rem] shadow-[0_6px_24px_rgba(37,211,102,0.35)] transition-all hover:scale-110 hover:shadow-[0_8px_30px_rgba(37,211,102,0.45)] cursor-pointer border-none relative"
          aria-label="Chat on WhatsApp"
        >
          <i className="ri-whatsapp-line" />
        </button>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-7 right-[100px] w-10 h-10 bg-black border border-gold/20 rounded-sm flex items-center justify-center text-gold text-base z-[990] transition-all cursor-pointer hover:bg-gold hover:text-black ${
          showTop ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-label="Back to top"
      >
        <i className="ri-arrow-up-s-line" />
      </button>
    </>
  );
}
