import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { ClientBand } from "@/components/ClientBand";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A showcase of brands, campaigns and creativity — social media creatives, cinematic reels, hoarding designs and ticket designs by The Social Verse.",
};

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        eyebrow="Portfolio"
        title={"A showcase of\nbrands & creativity."}
        intro={
          <p>
            Creative designs built to capture attention, cinematic reels that
            drive engagement, and outdoor work that owns the street. Filter by
            what you want to see.
          </p>
        }
      />

      <section className="mt-12 sm:mt-16">
        <PortfolioGallery />
      </section>

      <ClientBand />
      <CTA />
    </main>
  );
}
