import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Accordion } from "@/components/Accordion";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital solutions designed to grow your business — social media, performance marketing, branding, content, SEO, web, apps, influencer and outdoor.",
};

export default function ServicesPage() {
  const items = SERVICES.map((s) => ({
    n: s.n,
    title: s.title,
    body: s.blurb,
    bullets: s.includes,
  }));

  return (
    <main>
      <PageHero
        title={"Digital solutions\nto grow your business."}
        intro={
          <p>
            End-to-end digital marketing under one roof. From building a brand
            from scratch to scaling it across every platform, each service is
            engineered to make you impossible to ignore.
          </p>
        }
      />

      <section className="mx-auto mt-16 w-full max-w-[1400px] px-5 sm:mt-24 sm:px-8">
        <Accordion items={items} />
      </section>

      <section className="mx-auto mt-28 w-full max-w-[1400px] px-5 sm:mt-40 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-medium leading-[1] tracking-[-0.02em]">
              A process built around performance.
            </h2>
          </Reveal>
        </div>
        <ProcessSteps />
      </section>

      <CTA />
    </main>
  );
}
