import { Hero } from "@/components/Hero";
import { Showreel } from "@/components/Showreel";
import { ClientBand } from "@/components/ClientBand";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Reels } from "@/components/Reels";
import { CaseStudies } from "@/components/CaseStudies";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Showreel />
      <ClientBand />
      <About />
      <Services />
      <Work />
      <Reels />
      <CaseStudies />
      <CTA />
    </main>
  );
}
