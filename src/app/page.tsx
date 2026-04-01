import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <WhyUs />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
    </>
  );
}
