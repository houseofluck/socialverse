import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { CONTACT, SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let's build your brand together. Tell The Social Verse about your project — email info@thesocialverse.co.in or call 6000955672 / 8099531944.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title={"Let's build\nyour brand together."}
        intro={
          <p>
            Whether you&rsquo;re launching something new or scaling an existing
            brand, tell us where you want to go — we&rsquo;ll craft the strategy,
            creative and campaigns to get you there.
          </p>
        }
      />

      <section className="mx-auto mt-16 w-full max-w-[1400px] px-5 pb-28 sm:mt-24 sm:px-8 sm:pb-40">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Details */}
          <div className="lg:col-span-5">
            <Reveal className="border-t hairline pt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-stone">
                Email
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="link-underline mt-2 inline-block font-display text-2xl tracking-tight text-ink sm:text-3xl"
              >
                {CONTACT.email}
              </a>
            </Reveal>

            <Reveal delay={0.05} className="mt-8 border-t hairline pt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-stone">
                Call
              </p>
              <div className="mt-2 flex flex-col gap-1">
                {CONTACT.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p}`}
                    className="link-underline font-display text-2xl tracking-tight text-ink sm:text-3xl"
                  >
                    {p}
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 border-t hairline pt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-stone">
                What we can help with
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {SERVICES.map((s) => (
                  <li
                    key={s.slug}
                    className="rounded-pill border border-ink/15 px-3.5 py-1.5 text-sm text-ink-2"
                  >
                    {s.title}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15} className="mt-8 border-t hairline pt-6">
              <p className="text-sm leading-relaxed text-stone">
                Based in Guwahati, working with brands everywhere. We typically
                reply within one business day.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
