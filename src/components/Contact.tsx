"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { openWhatsApp, SITE_CONFIG } from "@/lib/config";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    service: "",
    budget: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const submit = async () => {
    if (!form.name.trim()) {
      setError("name");
      return;
    }

    setSending(true);

    // Save lead to backend (fire-and-forget, don't block WhatsApp redirect)
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "contact_form" }),
      });
    } catch {
      // Silently fail - WhatsApp redirect is the priority
    }

    let msg = `Hi Social Verse! 👋\n\n`;
    msg += `*Name:* ${form.name}\n`;
    if (form.business) msg += `*Business:* ${form.business}\n`;
    if (form.service) msg += `*Service:* ${form.service}\n`;
    if (form.budget) msg += `*Budget:* ${form.budget}\n`;
    if (form.message) msg += `\n*Message:*\n${form.message}\n`;
    msg += `\nLooking forward to connecting!`;

    openWhatsApp(msg, "contact_form");
    setSending(false);
  };

  const inputClass =
    "w-full bg-white/[0.04] border border-white/[0.08] rounded-sm px-4 py-3 text-white font-body text-[0.88rem] outline-none transition-colors focus:border-gold placeholder:text-white/20";

  return (
    <section id="contact" className="py-24 px-[5%] bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 contact-dots" />
      <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left - Info */}
        <Reveal>
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,3.8vw,3.2rem)] font-black leading-[1.1] tracking-tight text-white">
            Let&apos;s Build Your
            <br />
            <span className="text-gold">Brand Together.</span>
          </h2>
          <p className="text-base text-white/40 leading-[1.75] max-w-[500px] mt-3 font-light">
            Whether you want to increase brand awareness, generate leads, or
            grow your online presence - we&apos;re here to make it happen.
          </p>

          <div className="flex flex-col gap-5 mt-8">
            {[
              {
                icon: "ri-whatsapp-line",
                label: "WhatsApp",
                text: "Chat with us instantly",
                action: () => openWhatsApp("Hi Social Verse!", "contact_info"),
              },
              {
                icon: "ri-mail-line",
                label: "Email",
                text: SITE_CONFIG.email,
                href: `mailto:${SITE_CONFIG.email}`,
              },
              {
                icon: "ri-instagram-line",
                label: "Instagram",
                text: "@thesocialverse",
                href: SITE_CONFIG.instagram,
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-11 h-11 border border-gold/20 rounded-sm flex items-center justify-center text-gold text-lg flex-shrink-0">
                  <i className={item.icon} />
                </div>
                <div>
                  <div className="text-[0.68rem] text-gold uppercase tracking-[0.15em] font-accent font-medium mb-0.5">
                    {item.label}
                  </div>
                  {item.action ? (
                    <button
                      onClick={item.action}
                      className="text-[0.9rem] text-white/55 bg-transparent border-none cursor-pointer font-body hover:text-gold transition-colors p-0"
                    >
                      {item.text}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      target={item.href?.startsWith("http") ? "_blank" : undefined}
                      className="text-[0.9rem] text-white/55 no-underline hover:text-gold transition-colors"
                    >
                      {item.text}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Right - Form */}
        <Reveal delay={0.15}>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-md p-8">
            <h3 className="font-display text-xl font-bold mb-1">
              Send us a message
            </h3>
            <p className="text-[0.82rem] text-white/35 mb-6">
              Fill in your details and we&apos;ll continue the conversation on
              WhatsApp.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-[0.72rem] text-white/40 uppercase tracking-[0.15em] font-accent font-medium mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={`${inputClass} ${
                    error === "name" ? "!border-red-500" : ""
                  }`}
                />
              </div>
              <div>
                <label className="block text-[0.72rem] text-white/40 uppercase tracking-[0.15em] font-accent font-medium mb-1.5">
                  Business Name
                </label>
                <input
                  type="text"
                  placeholder="Your Company"
                  value={form.business}
                  onChange={(e) => update("business", e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="block text-[0.72rem] text-white/40 uppercase tracking-[0.15em] font-accent font-medium mb-1.5">
                Service Interested In
              </label>
              <select
                value={form.service}
                onChange={(e) => update("service", e.target.value)}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="" className="bg-black text-white">Select a service...</option>
                <option className="bg-black text-white">Social Media Management</option>
                <option className="bg-black text-white">Digital Advertising</option>
                <option className="bg-black text-white">Website Development</option>
                <option className="bg-black text-white">App Development</option>
                <option className="bg-black text-white">Influencer Marketing</option>
                <option className="bg-black text-white">Branding &amp; Creative Design</option>
                <option className="bg-black text-white">Outdoor Marketing</option>
                <option className="bg-black text-white">Complete 360° Package</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="block text-[0.72rem] text-white/40 uppercase tracking-[0.15em] font-accent font-medium mb-1.5">
                Estimated Budget
              </label>
              <select
                value={form.budget}
                onChange={(e) => update("budget", e.target.value)}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="" className="bg-black text-white">Select budget range...</option>
                <option className="bg-black text-white">₹10K - ₹25K/mo</option>
                <option className="bg-black text-white">₹25K - ₹50K/mo</option>
                <option className="bg-black text-white">₹50K - ₹1L/mo</option>
                <option className="bg-black text-white">₹1L+/mo</option>
                <option className="bg-black text-white">Let&apos;s discuss</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="block text-[0.72rem] text-white/40 uppercase tracking-[0.15em] font-accent font-medium mb-1.5">
                Your Message
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about your project or goals..."
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className={`${inputClass} resize-y min-h-[80px]`}
              />
            </div>

            <button
              onClick={submit}
              disabled={sending}
              className="w-full py-3.5 bg-whatsapp text-white border-none rounded-sm font-accent font-semibold text-[0.85rem] tracking-[0.08em] uppercase cursor-pointer flex items-center justify-center gap-2 transition-all hover:bg-whatsapp-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(37,211,102,0.2)] mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
            >
              <i className={`${sending ? "ri-loader-4-line animate-spin" : "ri-whatsapp-line"} text-lg`} />
              {sending ? "Opening WhatsApp..." : "Send via WhatsApp"}
            </button>

            <p className="text-center mt-3 text-[0.72rem] text-white/25 font-accent">
              Your message will open in WhatsApp for instant conversation.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
