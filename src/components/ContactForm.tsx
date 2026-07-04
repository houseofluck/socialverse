"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CONTACT, SERVICES } from "@/lib/data";
import { EASE } from "@/lib/motion";

type Fields = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const EMPTY: Fields = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const fieldCls =
  "peer w-full border-b border-ink/20 bg-transparent py-3 text-lg text-ink outline-none transition-colors placeholder:text-transparent focus:border-accent";
const labelCls =
  "pointer-events-none absolute left-0 top-3 origin-left font-mono text-[11px] uppercase tracking-[0.2em] text-stone transition-all duration-300 peer-focus:-translate-y-5 peer-focus:text-accent-deep peer-[:not(:placeholder-shown)]:-translate-y-5";

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function set<K extends keyof Fields>(k: K, v: string) {
    setFields((f) => ({ ...f, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!fields.name || !fields.message) {
      setError("Please add your name and a short message.");
      return;
    }
    setError(null);

    // Build a pre-filled WhatsApp message from the form and open the chat.
    const lines = [
      "Hi The Social Verse! 👋 I'd like to start a project.",
      "",
      `*Name:* ${fields.name}`,
      fields.email && `*Email:* ${fields.email}`,
      fields.phone && `*Phone:* ${fields.phone}`,
      fields.service && `*Service:* ${fields.service}`,
      "",
      `*Message:*`,
      fields.message,
    ].filter(Boolean);

    const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex flex-col items-start gap-5 rounded-[6px] border hairline bg-paper-2 p-8"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-ink">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h3 className="font-display text-3xl text-ink">Thank you.</h3>
            <p className="max-w-md text-stone">
              WhatsApp should have opened with your message ready to send. If it
              didn&rsquo;t, message us on{" "}
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-accent underline-offset-4"
              >
                WhatsApp
              </a>{" "}
              or email{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-ink underline decoration-accent underline-offset-4"
              >
                {CONTACT.email}
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => {
                setSent(false);
                setFields(EMPTY);
              }}
              className="mt-2 text-sm font-medium text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-9"
            noValidate
          >
            <div className="grid gap-9 sm:grid-cols-2">
              <div className="relative">
                <input
                  id="name"
                  className={fieldCls}
                  placeholder="Name"
                  value={fields.name}
                  onChange={(e) => set("name", e.target.value)}
                />
                <label htmlFor="name" className={labelCls}>
                  Your name *
                </label>
              </div>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  className={fieldCls}
                  placeholder="Email"
                  value={fields.email}
                  onChange={(e) => set("email", e.target.value)}
                />
                <label htmlFor="email" className={labelCls}>
                  Email
                </label>
              </div>
              <div className="relative">
                <input
                  id="phone"
                  type="tel"
                  className={fieldCls}
                  placeholder="Phone"
                  value={fields.phone}
                  onChange={(e) => set("phone", e.target.value)}
                />
                <label htmlFor="phone" className={labelCls}>
                  Phone
                </label>
              </div>
              <div className="relative">
                <select
                  id="service"
                  className={`${fieldCls} appearance-none`}
                  value={fields.service}
                  onChange={(e) => set("service", e.target.value)}
                >
                  <option value="">Any service</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
                <label
                  htmlFor="service"
                  className="pointer-events-none absolute left-0 -top-2 font-mono text-[11px] uppercase tracking-[0.2em] text-stone"
                >
                  Service of interest
                </label>
                <svg
                  className="pointer-events-none absolute right-1 top-4 text-ink/50"
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="relative">
              <textarea
                id="message"
                rows={4}
                className={`${fieldCls} resize-none`}
                placeholder="Message"
                value={fields.message}
                onChange={(e) => set("message", e.target.value)}
              />
              <label htmlFor="message" className={labelCls}>
                Tell us about your project *
              </label>
            </div>

            {error && (
              <p role="alert" className="text-sm text-accent-deep">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="group inline-flex w-fit items-center gap-2.5 rounded-pill bg-ink px-8 py-4 text-sm font-medium text-paper transition-colors duration-300 hover:bg-accent hover:text-accent-ink"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.86 9.86 0 004.73 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.04 8.04 0 012.37 5.73c0 4.46-3.63 8.09-8.1 8.09a8.1 8.1 0 01-4.13-1.13l-.3-.18-3.07.8.82-3-.19-.31a8.02 8.02 0 01-1.24-4.28c0-4.46 3.63-8.09 8.1-8.09zm4.68 11.44c-.26-.13-1.51-.75-1.74-.83-.23-.09-.4-.13-.57.13-.17.26-.65.83-.8 1-.14.17-.29.19-.55.06-.26-.13-1.08-.4-2.06-1.27-.76-.68-1.28-1.52-1.43-1.78-.15-.26-.02-.4.11-.53.12-.12.26-.29.39-.44.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.57-1.38-.78-1.89-.21-.5-.42-.43-.57-.44l-.49-.01c-.17 0-.44.06-.67.32-.23.26-.88.86-.88 2.1 0 1.24.9 2.43 1.03 2.6.13.17 1.77 2.7 4.3 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.51-.62 1.72-1.21.21-.6.21-1.11.15-1.21-.06-.11-.23-.17-.49-.3z" />
              </svg>
              Send on WhatsApp
              <svg
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
