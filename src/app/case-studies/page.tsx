import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CaseStudiesGrid } from "@/components/CaseStudiesGrid";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Proof, not promises — how The Social Verse helped Olive Heights, Awesome Palace and Ahvi Gold build stronger, more premium digital presences.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Case studies"
        title={"Proof,\nnot promises."}
        intro={
          <p>
            Real brands we&rsquo;ve helped build a stronger, more premium digital
            presence — through creative storytelling, consistent content and
            performance-driven campaigns.
          </p>
        }
      />

      <section className="mt-8 sm:mt-12">
        <CaseStudiesGrid />
      </section>

      <CTA />
    </main>
  );
}
