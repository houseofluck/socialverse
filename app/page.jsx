import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ClientBand } from "@/components/sections/ClientBand";
import { WorkIndex } from "@/components/sections/WorkIndex";
import { Featured, PracticeIntro } from "@/components/sections/Featured";
import {
  DisciplineBranding,
  DisciplineSocial,
  DisciplineDigital,
  DisciplineContent,
  DisciplineInfluence,
  DisciplineOffline,
} from "@/components/sections/Disciplines";
import { Studio } from "@/components/sections/Studio";
import { Testimonial } from "@/components/sections/Testimonial";
import { Writing } from "@/components/sections/Writing";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <div className="grain">
      {/* Skip link for screen readers — styled in globals.css */}
      <a href="#main-content" className="sv-skip-link">Skip to main content</a>

      <Nav />

      <main id="main-content">
        <Hero />
        <ClientBand />
        <WorkIndex />
        <Featured />
        <PracticeIntro />
        <DisciplineBranding />
        <DisciplineSocial />
        <DisciplineDigital />
        <DisciplineContent />
        <DisciplineInfluence />
        <DisciplineOffline />
        <Studio />
        <Testimonial />
        <Writing />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
