import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES } from "@/lib/data";
import { LazyVideo } from "@/components/LazyVideo";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = CASE_STUDIES.find((x) => x.slug === slug);
  if (!c) return { title: "Case Study" };
  return {
    title: `${c.brand} — Case Study`,
    description: c.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = CASE_STUDIES.findIndex((x) => x.slug === slug);
  if (idx === -1) notFound();
  const c = CASE_STUDIES[idx];
  const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];

  return (
    <main className="mx-auto w-full max-w-[1400px] px-5 pt-32 sm:px-8 sm:pt-40">
      {/* Back */}
      <Reveal>
        <Link
          href="/case-studies"
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-stone transition-colors hover:text-ink"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden
            className="transition-transform duration-300 group-hover:-translate-x-1"
          >
            <path
              d="M13 8H3M7 4L3 8l4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All case studies
        </Link>
      </Reveal>

      {/* Title */}
      <Reveal delay={0.05}>
        <h1 className="mt-8 max-w-[16ch] font-display text-[clamp(2.8rem,8vw,7rem)] font-medium leading-[0.94] tracking-[-0.02em]">
          {c.brand}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone">
          {c.summary}
        </p>
      </Reveal>

      {/* Body: sticky reel + content */}
      <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-16">
        {/* Sticky media */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[8px] bg-ink">
              {c.video && (
                <LazyVideo
                  src={c.video}
                  poster={c.poster}
                  ariaLabel={`${c.brand} reel`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-pill bg-ink/55 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-paper backdrop-blur-sm">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-accent-bright"
                  aria-hidden
                />
                Reel
              </span>
            </div>

            <div className="mt-8 border-t hairline pt-6">
              <p className="text-sm leading-relaxed text-stone">{c.about}</p>
            </div>
          </div>
        </div>

        {/* Scrolling content */}
        <div className="lg:col-span-7">
          <Section title="Objectives">
            <ul className="grid gap-3 sm:grid-cols-2">
              {c.objectives.map((o) => (
                <ListItem key={o}>{o}</ListItem>
              ))}
            </ul>
          </Section>

          <Section title="Challenges">
            <ul className="grid gap-3 sm:grid-cols-2">
              {c.challenges.map((o) => (
                <ListItem key={o}>{o}</ListItem>
              ))}
            </ul>
          </Section>

          <Section title="What we did">
            <div className="grid gap-4 sm:grid-cols-2">
              {c.strategies.map((s) => (
                <div
                  key={s.title}
                  className="rounded-[6px] border hairline bg-paper-2/50 p-6"
                >
                  <h4 className="font-display text-xl text-ink">{s.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-stone">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Results">
            <ul className="flex flex-col gap-3">
              {c.results.map((r) => (
                <ListItem key={r} large>
                  {r}
                </ListItem>
              ))}
            </ul>
          </Section>

          <Reveal className="mt-14 rounded-[8px] bg-ink p-8 text-paper sm:p-10">
            <p className="font-display text-2xl leading-snug sm:text-3xl">
              {c.conclusion}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Next case */}
      <Reveal className="mt-24 border-t hairline pt-10 sm:mt-32">
        <Link
          href={`/case-studies/${next.slug}`}
          className="group flex flex-col gap-2"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-stone">
            Next case study
          </span>
          <span className="flex items-center gap-4 font-display text-[clamp(2rem,5vw,3.5rem)] font-medium leading-none tracking-[-0.02em] text-ink">
            {next.brand}
            <svg
              width="40"
              height="40"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-2"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </Reveal>

      <div className="-mx-5 sm:-mx-8">
        <CTA />
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="mb-14 last:mb-0">
      <h2 className="mb-6 font-display text-3xl tracking-[-0.01em] text-ink sm:text-4xl">
        {title}
      </h2>
      {children}
    </Reveal>
  );
}

function ListItem({
  children,
  large = false,
}: {
  children: React.ReactNode;
  large?: boolean;
}) {
  return (
    <li
      className={`flex items-start gap-3 ${
        large ? "text-base text-ink-2" : "text-sm text-stone"
      }`}
    >
      <span
        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
        aria-hidden
      />
      {children}
    </li>
  );
}
