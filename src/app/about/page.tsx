import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { StatRow } from "@/components/Stat";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { PILLARS, STATS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Social Verse is a modern digital marketing agency helping brands scale through creative strategy, performance marketing and content that connects.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About the studio"
        title={"Built for brands that\nwant more than reach."}
        intro={
          <p>
            The Social Verse is a modern digital marketing agency helping brands
            scale through impactful branding, strategic advertising and content
            that actually connects. We believe marketing should do more than look
            good — it should perform.
          </p>
        }
      />

      {/* Approach */}
      <section className="mx-auto mt-24 w-full max-w-[1400px] px-5 sm:mt-32 sm:px-8">
        <div className="max-w-4xl">
          <Reveal>
            <p className="font-display text-[clamp(1.8rem,4vw,3.2rem)] font-medium leading-[1.1] tracking-[-0.01em] text-ink">
              Successful marketing is built through a balance of creativity,
              strategy and performance — turning every brand&rsquo;s story into
              digital experiences that connect with the right audience.
            </p>
          </Reveal>
          <Reveal
            delay={0.1}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-stone"
          >
            <p>
              From content and branding to advertising and growth strategy, we
              pair innovative ideas with data-driven execution — building
              stronger visibility, engagement and long-term growth. Not just
              campaigns that look good, but marketing that delivers real business
              results.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 sm:mt-20">
          <StatRow stats={STATS} />
        </div>
      </section>

      {/* Why choose */}
      <section className="mx-auto mt-28 w-full max-w-[1400px] px-5 sm:mt-40 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-medium leading-[1] tracking-[-0.02em]">
              More than an agency — a creative growth partner.
            </h2>
          </Reveal>
        </div>

        <RevealGroup
          as="ul"
          stagger={0.08}
          className="mt-14 grid gap-px overflow-hidden rounded-[4px] border hairline bg-ink/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PILLARS.map((p) => (
            <RevealItem
              as="li"
              key={p.n}
              className="group flex flex-col gap-6 bg-paper p-7 transition-colors duration-500 hover:bg-paper-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-stone">{p.n}</span>
                <span className="h-2 w-2 rounded-full bg-ink/15 transition-colors duration-500 group-hover:bg-accent" />
              </div>
              <h3 className="font-display text-2xl leading-snug text-ink">
                {p.title}
              </h3>
              <p className="mt-auto text-sm leading-relaxed text-stone">
                {p.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <CTA />
    </main>
  );
}
