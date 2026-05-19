"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";

const CASE_STUDIES = {
  "olive-heights": {
    brand: "Olive Heights",
    title: "Olive Heights — How We Helped Build A Strong Digital Presence",
    category: "Case Studies · Hospitality · Rooftop Dining",
    theme: "theme-green",
    about: [
      "Olive Heights is a premium rooftop restaurant and bar located in Guwahati, offering a blend of multi-cuisine dining, handcrafted beverages, and a sophisticated rooftop ambiance.",
      "Known for its scenic rooftop experience, vibrant nightlife, and modern dining atmosphere, Olive Heights delivers a memorable experience for food lovers, couples, families, and social gatherings.",
    ],
    objectivesIntro:
      "Our mission was to build a premium digital identity for Olive Heights and drive measurable footfall through content-led and performance-driven marketing.",
    objectives: [
      { strong: "Premium Digital Identity:", text: "Build a visually appealing and luxury-aligned digital identity across all platforms." },
      { strong: "Brand Awareness:", text: "Increase brand awareness and online visibility within the Guwahati audience." },
      { strong: "Customer Engagement:", text: "Drive higher engagement through cinematic reels, premium creatives, and consistent storytelling." },
      { strong: "Footfall Generation:", text: "Convert online attention into restaurant visits through targeted Meta advertising campaigns." },
    ],
    resultsBlurb:
      "Significant uplift in social media engagement, premium brand perception, and footfall — driven by a consistent content strategy and performance-focused Meta campaigns.",
    stats: [
      { num: "3.2×", label: "Engagement Growth" },
      { num: "4.8×", label: "Reach Increase" },
      { num: "+62%", label: "Customer Inquiries" },
      { num: "+45%", label: "Restaurant Footfall" },
    ],
    challenges: [
      { q: "Standing Out In A Saturated Market", a: "Rooftop cafés and restaurants are a highly discussed category among Guwahati audiences. Creating a distinct identity required sharp aesthetics and a clear point of view." },
      { q: "Maintaining A Premium Visual Identity", a: "Every post, reel, and creative had to feel cohesive and premium — consistent across the Instagram grid, ad creatives, and content drops." },
      { q: "Balancing Luxury With Engagement", a: "Luxury aesthetics often feel cold. We had to balance polished visuals with warm, audience-engaging content that drove real interactions." },
      { q: "Driving Real Footfall, Not Just Likes", a: "The goal was real restaurant visits, reservations, and inquiries — not vanity metrics. That meant tight creative + funnel optimization on Meta ads." },
    ],
    strategiesIntro:
      "To strengthen Olive Heights' digital presence we executed a complete content-driven and performance-oriented marketing strategy.",
    strategies: [
      { h: "Premium Visual Branding", p: "High-quality cinematic reels showcasing the rooftop ambiance, signature dishes, cocktails, nightlife, sunsets, and customer experiences." },
      { h: "Engaging Social Media Grid", p: "A visually consistent and aesthetically aligned Instagram grid that established a premium and recognizable brand identity." },
      { h: "Reels & Short-Form Content", p: "Trend-based and storytelling-driven reels produced to maximize reach, audience engagement, and organic visibility." },
      { h: "Performance Marketing", p: "Targeted Meta ad campaigns focused on increasing restaurant footfall, brand awareness, and promoting offers, events, and nightlife experiences." },
      { h: "Audience-Centric Content", p: "Content strategically planned around customer psychology — food cravings, rooftop ambiance, weekend experiences, and cocktail culture." },
    ],
    achievements: [
      { strong: "Social Reach & Engagement:", text: "Increased social media reach and profile engagement through consistent, high-quality storytelling." },
      { strong: "Audience Retention:", text: "Improved content interaction and audience retention via trend-driven reels and event-based content." },
      { strong: "Premium Brand Perception:", text: "Enhanced premium brand perception online — Olive Heights now reads as a destination, not just a restaurant." },
      { strong: "Footfall Generation:", text: "Better footfall generation through optimized Meta advertising campaigns targeting dining and nightlife audiences." },
    ],
    conclusion:
      "Through premium visual storytelling, strategic content creation, engaging social media management, and performance-driven advertising, Social Verse helped Olive Heights establish a stronger and more impactful digital presence. The campaign improved online engagement and visibility, and contributed to building a recognizable rooftop dining brand that resonates with modern audiences seeking premium experiences.",
    related: [
      { slug: "awesome-palace", brand: "Awesome Palace", title: "Awesome Palace — A Strong Luxury Hospitality Presence", bg: "#e6ecf3", bar: "#1a3b5d" },
      { slug: "ahvi-gold", brand: "Ahvi Gold", title: "Ahvi Gold — Transforming Into A Recognizable Brand", bg: "#faf1d8", bar: "#caa14a" },
    ],
    next: { slug: "awesome-palace", brand: "Awesome Palace" },
  },

  "awesome-palace": {
    brand: "Awesome Palace",
    title: "Awesome Palace — Creating A Strong Luxury Hospitality Presence",
    category: "Case Studies · Hospitality · Luxury Hotel",
    theme: "theme-blue",
    about: [
      "Awesome Palace is a luxury hotel and hospitality destination located near Guwahati Airport in Borjhar, offering premium accommodations, elegant interiors, fine dining experiences, banquet facilities, and modern hospitality services for business and leisure travelers.",
      "With a focus on comfort, convenience, and premium guest experiences, the hotel caters to travelers seeking luxury stays close to the airport while maintaining a sophisticated hospitality experience.",
    ],
    objectivesIntro:
      "Our mission was to position Awesome Palace as the preferred luxury stay near Guwahati Airport through premium visuals, consistent identity, and strategic Meta advertising.",
    objectives: [
      { strong: "Premium Brand Presence:", text: "Build a strong and premium digital brand presence across social media platforms." },
      { strong: "Hotel Visibility:", text: "Increase hotel visibility and position Awesome Palace as a preferred luxury stay near the airport." },
      { strong: "Guest Inquiries:", text: "Drive guest inquiries, bookings, and direct engagement through performance campaigns." },
      { strong: "Luxury Positioning:", text: "Enhance audience perception through premium visuals and consistent storytelling." },
    ],
    resultsBlurb:
      "Strong growth in social media reach, engagement, and inquiries — anchored by premium content and a luxury-aligned brand identity.",
    stats: [
      { num: "2.7×", label: "Reach Growth" },
      { num: "+58%", label: "Engagement" },
      { num: "+48%", label: "Guest Inquiries" },
      { num: "+39%", label: "Booking Intent" },
    ],
    challenges: [
      { q: "Saturated Hospitality Market", o: "The luxury hospitality industry near transit zones is highly competitive — guests have many accommodation options." },
      { q: "Establishing Trust & Premium Identity", a: "Building a premium and trustworthy digital identity in a category where social proof and visual polish drive booking decisions." },
      { q: "Visually Appealing Content At Scale", a: "Creating visually appealing content consistently — rooms, dining, banquets, services — required disciplined production." },
      { q: "Driving Real Inquiries", a: "Converting engagement into actual guest inquiries and bookings meant tight Meta funnel design and ongoing creative iteration." },
    ],
    strategiesIntro:
      "We implemented a complete content + performance marketing strategy focused on luxury branding and audience engagement.",
    strategies: [
      { h: "Premium Visual Production", p: "High-quality reels, cinematic walkthroughs, professional photography, and visually refined creatives highlighting rooms, dining, banquets, and guest experiences." },
      { h: "Engaging Social Media Grid", p: "A modern and aesthetically aligned content grid that reinforced the hotel's premium identity across every channel." },
      { h: "Reels & Storytelling", p: "Short-form content and trend-driven reels strategically created to maximize reach, engagement, and audience retention." },
      { h: "Meta Advertising Campaigns", p: "Targeted campaigns focused on hotel visibility, guest inquiries, luxury stays, and reaching travelers and local premium audiences." },
      { h: "Audience-Focused Branding", p: "Content emphasized luxury lifestyle experiences, airport convenience, elegant aesthetics, trust, and credibility." },
    ],
    achievements: [
      { strong: "Brand Visibility:", text: "Increased brand visibility and audience reach across social media platforms." },
      { strong: "Premium Engagement:", text: "Higher engagement through premium visual content and storytelling-led reels." },
      { strong: "Luxury Positioning:", text: "Improved luxury brand positioning online — Awesome Palace now reads as a destination, not a transit hotel." },
      { strong: "Inquiries & Interactions:", text: "Growth in inquiries and customer interactions through optimized Meta campaigns." },
    ],
    conclusion:
      "Through premium content creation, strategic branding, engaging social media management, and performance-focused Meta advertising, Social Verse enhanced Awesome Palace's digital presence and luxury positioning. The campaign created stronger audience engagement, improved visibility, and a more refined online identity that reflects the premium hospitality experience offered by the hotel.",
    related: [
      { slug: "olive-heights", brand: "Olive Heights", title: "Olive Heights — How We Helped Build A Strong Digital Presence", bg: "#f1ead3", bar: "#d4793c" },
      { slug: "ahvi-gold", brand: "Ahvi Gold", title: "Ahvi Gold — Transforming Into A Recognizable Brand", bg: "#faf1d8", bar: "#caa14a" },
    ],
    next: { slug: "ahvi-gold", brand: "Ahvi Gold" },
  },

  "ahvi-gold": {
    brand: "Ahvi Gold",
    title: "Ahvi Gold — Transforming Into A Recognizable Gold Buying Brand",
    category: "Case Studies · Financial Services · Bullion",
    theme: "theme-orange",
    about: [
      "Ahvi Gold is a trusted gold and silver buying company specializing in transparent valuation, instant payments, and secure transactions for customers looking to sell their precious metals.",
      "The brand focuses on providing customers with a professional, trustworthy, and hassle-free experience through accurate purity testing, fair market pricing, and customer-centric service.",
    ],
    objectivesIntro:
      "Our mission was to build trust and credibility for Ahvi Gold through educational, transparent content and lead-driving Meta advertising.",
    objectives: [
      { strong: "Trust & Credibility:", text: "Build trust and credibility through professional digital branding in a sensitive financial category." },
      { strong: "Service Awareness:", text: "Increase awareness about gold and silver buying services and educate audiences on transparent valuation." },
      { strong: "Footfall & Inquiries:", text: "Drive higher footfall and customer inquiries through targeted Meta campaigns." },
      { strong: "Quality Lead Flow:", text: "Generate quality leads via educational creatives and trust-led messaging." },
    ],
    resultsBlurb:
      "Strong gains in trust, reach, and customer inquiries — driven by an educational content strategy and trust-based Meta campaigns.",
    stats: [
      { num: "+74%", label: "Trust Score" },
      { num: "3.5×", label: "Reach" },
      { num: "+82%", label: "Customer Inquiries" },
      { num: "+51%", label: "Store Footfall" },
    ],
    challenges: [
      { q: "High-Trust Financial Category", a: "Building trust in a highly sensitive category — gold and silver buying — required transparent, educational, and credible content." },
      { q: "Customer Hesitation", a: "Overcoming customer hesitation around gold selling services through clear communication of valuation, purity, and payment processes." },
      { q: "Differentiation From Local Buyers", a: "Standing out from traditional local gold buyers required a modern, professional, and digitally-led brand identity." },
      { q: "Simplifying Technical Processes", a: "Translating complex valuation and purity-testing processes into engaging, easy-to-understand visual content." },
    ],
    strategiesIntro:
      "We developed a strategic content and advertising approach focused on trust, transparency, and engagement.",
    strategies: [
      { h: "Premium Visual Branding", p: "Professional visuals, premium reels, and informative creatives showcasing gold purity testing, transparent valuation, and modern service environment." },
      { h: "Educational Content Strategy", p: "Informative content educating audiences about how gold valuation works, benefits of selling through trusted buyers, and pricing transparency." },
      { h: "Engaging Social Creatives", p: "A visually consistent and premium social media feed that strengthened brand perception and audience trust." },
      { h: "Reels & Short-Form Videos", p: "Trend-driven reels used to improve engagement, increase reach, and simplify complex information through visual storytelling." },
      { h: "Meta Advertising Campaigns", p: "Targeted Meta campaigns to increase local brand awareness, generate customer inquiries, drive footfall, and promote trust-based messaging." },
    ],
    achievements: [
      { strong: "Engagement Lift:", text: "Increased engagement across social media platforms through consistent, educational content." },
      { strong: "Audience Awareness:", text: "Improved audience awareness about gold buying services and valuation processes." },
      { strong: "Trust Through Education:", text: "Enhanced trust through educational and transparent content that demystified the gold buying process." },
      { strong: "Footfall & Recognition:", text: "Growth in customer inquiries, store visits, and recognition among local target audiences." },
    ],
    conclusion:
      "Through premium visual storytelling, educational content strategies, creative social media management, and performance-driven Meta advertising, Social Verse helped Ahvi Gold strengthen its digital presence and customer trust. The campaign contributed towards building a more professional, transparent, and recognizable brand identity while increasing visibility, engagement, and customer interaction for the business.",
    related: [
      { slug: "olive-heights", brand: "Olive Heights", title: "Olive Heights — How We Helped Build A Strong Digital Presence", bg: "#f1ead3", bar: "#d4793c" },
      { slug: "awesome-palace", brand: "Awesome Palace", title: "Awesome Palace — A Strong Luxury Hospitality Presence", bg: "#e6ecf3", bar: "#1a3b5d" },
    ],
    next: { slug: "olive-heights", brand: "Olive Heights" },
  },
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params?.slug;
  const cs = slug && CASE_STUDIES[slug] ? CASE_STUDIES[slug] : null;
  const initRef = useRef(false);

  useEffect(() => {
    if (initRef.current) return;
    initRef.current = true;
    // ---------- CHALLENGES ACCORDION ----------
      document.querySelectorAll('.ch-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
          const item = btn.parentElement;
          const isOpen = item.classList.contains('open');
          document.querySelectorAll('.ch-item').forEach(i => i.classList.remove('open'));
          if (!isOpen) item.classList.add('open');
        });
      });

      // ---------- HIDE FLOATING NEXT WHEN FOOTER VISIBLE ----------
      const float = document.getElementById('nextProjectFloat');
      const onScroll = () => {
        const footer = document.querySelector('.site-footer');
        if (!footer || !float) return;
        const rect = footer.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          float.style.transform = 'translateY(150%)';
        } else {
          float.style.transform = 'translateY(0)';
        }
      };
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
  }, [slug]);

  if (!cs) {
    return (
      <div style={{
        marginTop: 90, minHeight: '60vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '60px 24px', textAlign: 'center',
      }}>
        <h1 style={{ fontSize: 36, marginBottom: 16 }}>Case study not found</h1>
        <Link href="/case-studies" style={{
          background: 'var(--accent)', color: '#fff',
          padding: '14px 28px', borderRadius: 8,
          textDecoration: 'none', fontWeight: 600,
        }}>
          All Case Studies
        </Link>
      </div>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #fff; color: #111; overflow-x: hidden;
  }

  /* ---------- NAVBAR ---------- */



  /* ---------- HERO ---------- */
  .cs-hero {
    margin-top: 90px;
    width: 100%;
    min-height: 520px;
    background: transparent;
    position: relative;
    padding: 60px 60px 80px;
    color: #fff;
    overflow: hidden;
  }
  
  .back-btn {
    background: none; border: none; color: #fff;
    font-size: 24px; cursor: pointer; margin-bottom: 60px;
    padding: 8px; transition: transform 0.2s ease;
  }
  .back-btn:hover { transform: translateX(-4px); }
  .cs-category {
    font-size: 16px; font-weight: 500;
    color: #fff; margin-bottom: 24px;
    position: relative; z-index: 2;
  }
  .cs-title {
    font-size: 64px; font-weight: 700; color: #fff;
    line-height: 1.05; letter-spacing: -1.5px;
    max-width: 1100px;
    position: relative; z-index: 2;
  }

  /* ---------- BREADCRUMB ---------- */

  /* ---------- INTRO + RESULTS ---------- */
  .cs-intro {
    padding: 80px 60px 100px;
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 70px;
    align-items: start;
  }
  .cs-intro h2 {
    font-size: 42px; font-weight: 700; color: #111;
    letter-spacing: -0.5px; margin-bottom: 24px;
    line-height: 1.1;
  }
  .cs-intro h2.spaced { margin-top: 60px; }
  .cs-intro p {
    font-size: 17px; line-height: 1.75; color: #1a1a1a;
    margin-bottom: 16px;
  }
  .objective-list {
    list-style: none; padding: 0; margin-top: 24px;
  }
  .objective-list li {
    display: flex; gap: 14px;
    margin-bottom: 18px;
    font-size: 16px; line-height: 1.65; color: #1a1a1a;
  }
  .objective-list li::before {
    content: "✓";
    flex-shrink: 0;
    width: 20px; height: 20px;
    border-radius: 50%;
    background: var(--accent);
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 3px;
  }
  .objective-list li strong { font-weight: 700; }

  /* Results card on right */
  .cs-results-card {
    background: #f3f3f3;
    border-radius: 18px;
    padding: 48px 44px;
    position: sticky;
    top: 110px;
  }
  .cs-results-card h3 {
    font-size: 38px; font-weight: 700; color: #111;
    letter-spacing: -0.5px; margin-bottom: 20px;
  }
  .cs-results-card p {
    font-size: 16px; line-height: 1.65; color: #1a1a1a;
    margin-bottom: 32px;
  }
  .stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .stat-card {
    background: #fff;
    border-radius: 14px;
    padding: 28px 24px;
    text-align: center;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .stat-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(0,0,0,0.08);
  }
  .stat-num {
    font-size: 38px; font-weight: 800; color: #111;
    letter-spacing: -1px;
    margin-bottom: 8px;
    line-height: 1;
  }
  .stat-label {
    font-size: 14px; color: var(--accent); font-weight: 600;
  }

  /* ---------- CHALLENGES ---------- */
  .cs-challenges {
    background: #f5f5f5;
    padding: 100px 60px;
  }
  .challenges-grid-cs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
  }
  .challenges-left h2 {
    font-size: 56px; font-weight: 700; color: #111;
    letter-spacing: -1px; line-height: 1.05;
    margin-bottom: 40px;
  }
  .ch-accordion {
    display: flex; flex-direction: column; gap: 16px;
  }
  .ch-item {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    transition: background 0.2s ease;
  }
  .ch-toggle {
    width: 100%;
    background: none; border: none;
    padding: 22px 26px;
    cursor: pointer;
    font-family: inherit;
    font-size: 17px; font-weight: 600; color: #111;
    text-align: left;
    display: flex; align-items: center; justify-content: space-between;
    gap: 16px;
  }
  .ch-icon {
    width: 22px; height: 22px;
    display: inline-flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    font-size: 22px; line-height: 1; font-weight: 300;
    transition: transform 0.3s ease;
  }
  .ch-icon::after { content: "+"; display: block; }
  .ch-item.open .ch-icon::after { content: "−"; }
  .ch-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
  }
  .ch-answer-inner {
    padding: 0 26px 22px;
    font-size: 16px;
    line-height: 1.65;
    color: #333;
  }
  .ch-item.open .ch-answer { max-height: 400px; }
  .ch-item.open .ch-toggle { background: #e8e8e8; }

  .challenges-image {
    aspect-ratio: 4 / 3.5;
    border-radius: 18px;
    background:
      linear-gradient(135deg, rgba(0,0,0,0.05), rgba(0,0,0,0.2)),
      linear-gradient(120deg, #2c3e50 0%, #4a6278 100%);
    box-shadow: 0 20px 50px rgba(0,0,0,0.12);
    position: relative;
    overflow: hidden;
  }
  .challenges-image::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 30% 50%, rgba(255,255,255,0.08) 0%, transparent 30%),
      radial-gradient(circle at 70% 30%, rgba(255,255,255,0.06) 0%, transparent 30%);
  }

  /* ---------- CAMPAIGN STRATEGIES ---------- */
  .cs-strategies {
    background: #fff;
    padding: 100px 60px;
    text-align: center;
  }
  .cs-strategies h2 {
    font-size: 56px; font-weight: 700; color: #111;
    letter-spacing: -1px; line-height: 1.05;
    margin-bottom: 24px;
  }
  .cs-strategies-desc {
    font-size: 17px; line-height: 1.65; color: #1a1a1a;
    max-width: 850px; margin: 0 auto 60px;
  }
  .strategies-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    text-align: left;
  }
  .strategy-card {
    background: #fff;
    border-radius: 16px;
    padding: 40px 36px;
    box-shadow: 0 6px 24px rgba(0,0,0,0.06);
    border: 1px solid #f0f0f0;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .strategy-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 32px rgba(0,0,0,0.1);
  }
  .strategy-card h3 {
    font-size: 22px; font-weight: 700; color: #111;
    letter-spacing: -0.3px; margin-bottom: 22px;
    line-height: 1.25;
  }
  .strategy-card p {
    font-size: 15px; line-height: 1.7; color: #444;
  }

  /* ---------- PROVEN RESULTS (carousel) ---------- */
  .cs-proven {
    background: #f5f5f5;
    padding: 100px 60px;
    position: relative;
    overflow: hidden;
  }
  .cs-proven h2 {
    font-size: 56px; font-weight: 700; color: #111;
    letter-spacing: -1px; line-height: 1.05;
    text-align: center;
    margin-bottom: 60px;
  }
  .proven-stage {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
    padding: 0 70px;
  }
  .proven-laptop {
    background: #fff;
    border-radius: 18px;
    padding: 40px;
    aspect-ratio: 16 / 11;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .proven-mini {
    width: 100%;
    background: #1a1a1a;
    border-radius: 8px 8px 0 0;
    padding: 12px 12px 0;
  }
  .proven-screen {
    background: #fff;
    aspect-ratio: 16 / 10;
    border-radius: 2px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .proven-screen .pscreen-top {
    background: #f5f5f5;
    height: 18px;
    border-bottom: 1px solid #e8e8e8;
    display: flex;
    align-items: center;
    padding: 0 8px;
    gap: 4px;
    font-size: 5px;
    color: #555;
  }
  .proven-screen .pscreen-top span {
    width: 6px; height: 6px; border-radius: 50%;
  }
  .proven-screen .pscreen-top span:nth-child(1) { background: #ff6058; }
  .proven-screen .pscreen-top span:nth-child(2) { background: #ffbe2f; }
  .proven-screen .pscreen-top span:nth-child(3) { background: #29c845; }
  .proven-screen .pscreen-content {
    flex: 1;
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    position: relative;
  }
  .pscreen-content .pbar {
    height: 5px; background: #e8e8e8; border-radius: 2px;
  }
  .pscreen-content .pbar.s { width: 60%; }
  .pscreen-content .pbar.r { background: var(--accent); height: 4px; width: 30%; }
  .pscreen-content .pbar.b { background: #1e88e5; height: 4px; width: 40%; }
  .pscreen-content .pchart {
    margin-top: 6px;
    flex: 1;
    background:
      linear-gradient(180deg, transparent 70%, rgba(212,160,23,0.15) 70%);
    border-radius: 4px;
    position: relative;
  }
  .pscreen-content .pchart::after {
    content: "";
    position: absolute;
    bottom: 30%; left: 0; right: 0;
    height: 2px;
    background:
      repeating-linear-gradient(90deg, var(--accent) 0 20%, transparent 20% 25%, #1e88e5 25% 45%);
  }
  .proven-keyboard {
    background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
    height: 12px;
    border-radius: 0 0 8px 8px;
    margin: -2px 0 0;
    position: relative;
  }
  .proven-keyboard::after {
    content: "";
    position: absolute;
    top: 0; left: 50%;
    transform: translateX(-50%);
    width: 60px; height: 3px;
    background: #444;
    border-radius: 0 0 4px 4px;
  }

  .proven-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px; height: 50px;
    background: #fff;
    border-radius: 50%;
    border: 1px solid #e0e0e0;
    color: #111;
    font-size: 22px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 6px 18px rgba(0,0,0,0.08);
    transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
    z-index: 3;
  }
  .proven-arrow:hover { background: #111; color: #fff; transform: translateY(-50%) scale(1.05); }
  .proven-arrow.prev { left: 10px; }
  .proven-arrow.next { right: 10px; }

  .proven-pagination {
    display: flex; justify-content: center; align-items: center;
    gap: 16px; margin-top: 50px;
    color: #555; font-size: 16px; font-weight: 500;
  }
  .proven-pagination .pline {
    width: 40px; height: 1.5px; background: #555;
  }
  .proven-pagination .pnum.active { color: #111; font-weight: 700; }

  /* ---------- RESULTS ACHIEVED ---------- */
  .cs-results {
    background: #fff;
    padding: 100px 60px;
  }
  .cs-results h2 {
    font-size: 56px; font-weight: 700; color: #111;
    letter-spacing: -1px; line-height: 1.05;
    margin-bottom: 50px;
  }
  .results-list {
    list-style: none;
    padding: 0;
    max-width: 1300px;
  }
  .results-list li {
    display: flex; gap: 18px;
    margin-bottom: 24px;
    font-size: 17px; line-height: 1.65; color: #1a1a1a;
  }
  .results-list li::before {
    content: "✓";
    flex-shrink: 0;
    width: 22px; height: 22px;
    border-radius: 50%;
    background: var(--accent);
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
  }
  .results-list li strong { font-weight: 700; }

  /* ---------- TESTIMONIAL ---------- */
  .cs-testi {
    background: #f5f5f5;
    padding: 90px 60px;
  }
  .cs-testi-grid {
    display: grid;
    grid-template-columns: 0.9fr 1.7fr 1fr;
    gap: 50px;
    align-items: center;
  }
  .cs-testi-eyebrow {
    font-size: 14px; font-weight: 600; letter-spacing: 1.5px;
    color: var(--accent); text-transform: uppercase;
    margin-bottom: 14px;
  }
  .cs-testi-heading {
    font-size: 36px; font-weight: 700; color: #111;
    letter-spacing: -0.5px; line-height: 1.1;
  }
  .cs-testi-quote {
    position: relative;
    padding: 0 16px;
  }
  .cs-testi-quote-text {
    font-size: 16px; line-height: 1.7; color: #1a1a1a;
    font-style: italic;
    margin-bottom: 20px;
  }
  .cs-testi-stars {
    color: #f5b800;
    font-size: 20px;
    letter-spacing: 2px;
    margin-bottom: 14px;
  }
  .cs-testi-author {
    font-size: 18px;
    font-weight: 700;
    color: #111;
    font-style: italic;
  }
  .cs-testi-author-meta {
    font-size: 14px;
    color: #555;
    font-style: italic;
    margin-top: 4px;
  }
  .cs-testi-photo {
    aspect-ratio: 4 / 5;
    border-radius: 8px;
    background:
      linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.7)),
      linear-gradient(120deg, #444 0%, #888 100%);
    position: relative;
    overflow: hidden;
    box-shadow: 0 12px 30px rgba(0,0,0,0.15);
    filter: grayscale(1);
    display: flex; align-items: flex-end;
    justify-content: center;
    padding: 24px;
    color: #fff;
  }
  .cs-testi-photo::before {
    content: "''";
    position: absolute;
    top: 14px; right: 18px;
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    line-height: 1;
    transform: rotate(180deg);
    opacity: 0.85;
  }

  /* ---------- CONCLUSION ---------- */
  .cs-conclusion {
    background: #f5f5f5;
    padding: 80px 60px 100px;
    text-align: center;
  }
  .cs-conclusion h2 {
    font-size: 56px; font-weight: 700; color: #111;
    letter-spacing: -1px; line-height: 1.05;
    margin-bottom: 30px;
  }
  .cs-conclusion p {
    font-size: 17px; line-height: 1.75; color: #1a1a1a;
    max-width: 1100px; margin: 0 auto;
  }

  /* ---------- RELATED CASE STUDIES ---------- */
  .cs-related {
    background: #fff;
    padding: 80px 60px 100px;
  }
  .cs-related-heading {
    font-size: 56px; font-weight: 700; color: #111;
    letter-spacing: -1px; line-height: 1.05;
    text-align: center;
    margin-bottom: 60px;
  }
  .cs-related-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
  .cs-related-card { display: flex; flex-direction: column; }
  .cs-related-image {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 18px;
    overflow: hidden;
    position: relative;
    margin-bottom: 24px;
    text-decoration: none;
    transition: transform 0.4s ease;
  }
  .cs-related-image:hover { transform: translateY(-4px); }
  .cs-related-mark {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 32px; font-weight: 800; color: #1a1a1a;
    letter-spacing: -0.5px;
  }
  .cs-related-bar {
    position: absolute; left: 0; right: 0; bottom: 0;
    height: 14%;
  }
  .cs-related-title {
    font-size: 22px; font-weight: 700; color: #111;
    letter-spacing: -0.3px; margin-bottom: 10px;
    line-height: 1.3;
  }
  .cs-related-meta { font-size: 16px; color: #444; }

  /* ---------- FLOATING NEXT ---------- */
  .next-project-float {
    position: fixed;
    bottom: 0; left: 0;
    background: #fff;
    box-shadow: 0 -4px 24px rgba(0,0,0,0.08);
    padding: 22px 32px;
    border-radius: 0 12px 0 0;
    z-index: 50;
    min-width: 320px;
    transition: transform 0.3s ease;
  }
  .next-project-float .np-label {
    font-size: 14px; font-weight: 600; color: #111;
    margin-bottom: 8px;
    display: flex; justify-content: space-between; align-items: center; gap: 30px;
  }
  .next-project-float .np-arrows { display: flex; gap: 12px; }
  .next-project-float .np-arrows button {
    background: none; border: none; cursor: pointer;
    font-size: 20px; color: #111;
  }
  .next-project-float .np-title {
    font-size: 16px; font-weight: 700; color: #111;
    line-height: 1.3;
  }
  .next-project-float .np-title a { color: inherit; text-decoration: none; }

  /* ---------- WHATSAPP ---------- */
  /* ---------- FOOTER ---------- */


  /* Brand column */
  .footer-logo-main {
    font-weight: 800;
    font-size: 24px;
    letter-spacing: 0.5px;
    color: #fff;
    line-height: 1;
  }
  .footer-logo-main .thin { font-weight: 500; }
  .footer-logo-tagline {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.5px;
    color: #fff;
    margin-top: 6px;
  }
  .footer-logo-tagline .dot-red { color: var(--accent); }


  .trust-badge-title {
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 4px;
    letter-spacing: 0.5px;
  }
  .trust-badge-stars {
    color: #00b67a;
    font-size: 16px;
    letter-spacing: 1px;
    margin-bottom: 4px;
  }
  .trust-badge-source {
    font-size: 11px;
    color: #555;
    text-transform: uppercase;
    letter-spacing: 1px;
  }


  /* Other columns */
  .footer-heading-spaced { margin-top: 40px; }

  .footer-address {
    font-style: normal;
    font-size: 16px;
    line-height: 1.8;
    color: #e8e8e8;
    margin-bottom: 36px;
  }

  .footer-line {
    font-size: 16px;
    line-height: 1.9;
    color: #e8e8e8;
  }

  .footer-links {
    list-style: none;
  }
  .footer-links li { margin-bottom: 14px; }
  .footer-links a {
    color: #e8e8e8;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.2s ease, padding-left 0.2s ease;
  }
  .footer-links a:hover {
    color: var(--accent);
    padding-left: 4px;
  }

  /* Accordion */
  .footer-accordion {
    border-top: 1px solid #1a1a1a;
    padding: 30px 0 20px;
  }
  .accordion-icon, .accordion-icon-right {
    width: 22px;
    height: 22px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: 300;
    flex-shrink: 0;
  }
  .accordion-icon-right { margin-left: auto; }
  .accordion-title { flex: 1; text-align: left; }


  .accordion-inner {
    padding: 24px 28px 8px;
  }
  .accordion-cities {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 28px;
  }
  .accordion-cities span {
    color: #ccc;
    font-size: 15px;
    padding: 6px 0;
    cursor: default;
    transition: color 0.2s ease;
  }
  .accordion-cities span:hover { color: var(--accent); }

  /* Bottom bar */
  .footer-bottom {
    border-top: 1px solid #1a1a1a;
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    color: #888;
    font-size: 14px;
  }
  .footer-bottom-links {
    display: flex;
    gap: 28px;
  }
  .footer-bottom-links a {
    color: #888;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  .footer-bottom-links a:hover { color: var(--accent); }

  @media (max-width: 1024px) {
  }
  @media (max-width: 600px) {
    .footer-bottom { flex-direction: column; align-items: flex-start; }
  }


  /* ====== HAMBURGER ====== */


  body { -webkit-text-size-adjust: 100%; overflow-x: hidden; position: relative; }
  html { scroll-behavior: smooth; }
  ::selection { background: var(--accent); color: #fff; }
  a:focus-visible, button:focus-visible {
    outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px;
  }
  img, video, svg { max-width: 100%; height: auto; }

  /* ====== RESPONSIVE ====== */
  @media (max-width: 1200px) {
    .cs-title { font-size: 50px; }
    .cs-intro h2,
    .challenges-left h2,
    .cs-strategies h2,
    .cs-proven h2,
    .cs-results h2,
    .cs-conclusion h2,
    .cs-related-heading { font-size: 44px; }
    .cs-results-card h3 { font-size: 32px; }
    .cs-intro { grid-template-columns: 1fr; gap: 50px; }
    .cs-results-card { position: static; }
    .strategies-grid { grid-template-columns: 1fr; }
    .cs-related-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 900px) {

    .cs-hero { margin-top: 80px; padding: 40px 24px 60px; min-height: 400px; }
    .back-btn { margin-bottom: 50px; }
    .cs-title { font-size: 38px; letter-spacing: -1px; }

    .cs-intro { padding: 60px 24px 80px; gap: 40px; }
    .cs-intro h2,
    .challenges-left h2,
    .cs-strategies h2,
    .cs-proven h2,
    .cs-results h2,
    .cs-conclusion h2,
    .cs-related-heading { font-size: 36px; }
    .cs-results-card { padding: 36px 30px; }
    .cs-results-card h3 { font-size: 28px; }
    .stat-num { font-size: 32px; }

    .cs-challenges { padding: 70px 24px; }
    .challenges-grid-cs { grid-template-columns: 1fr; gap: 36px; }
    .ch-toggle { padding: 18px 22px; font-size: 16px; }
    .ch-answer-inner { padding: 0 22px 20px; }

    .cs-strategies { padding: 70px 24px; }
    .strategy-card { padding: 32px 28px; }

    .cs-proven { padding: 70px 24px; }
    .proven-stage { grid-template-columns: 1fr; padding: 0 60px; gap: 24px; }
    .proven-arrow { width: 42px; height: 42px; font-size: 20px; }

    .cs-results { padding: 70px 24px; }
    .cs-testi { padding: 70px 24px; }
    .cs-testi-grid { grid-template-columns: 1fr; gap: 32px; }
    .cs-testi-photo { aspect-ratio: 4 / 3; max-width: 320px; }
    .cs-testi-heading { font-size: 28px; }

    .cs-conclusion { padding: 60px 24px 80px; }
    .cs-related { padding: 60px 24px 80px; }
    .cs-related-grid { grid-template-columns: repeat(2, 1fr); }

    .next-project-float {
      min-width: auto; width: calc(100% - 100px);
      max-width: 380px; padding: 16px 22px;
    }
    .next-project-float .np-title { font-size: 14px; }

  }
  @media (max-width: 600px) {

    .cs-hero { margin-top: 72px; padding: 24px 18px 40px; min-height: 320px; }
    .back-btn { margin-bottom: 36px; font-size: 22px; }
    .cs-title { font-size: 28px; letter-spacing: -0.5px; }
    .cs-category { font-size: 14px; margin-bottom: 16px; }

    .cs-intro { padding: 40px 18px 60px; gap: 30px; }
    .cs-intro h2,
    .challenges-left h2,
    .cs-strategies h2,
    .cs-proven h2,
    .cs-results h2,
    .cs-conclusion h2,
    .cs-related-heading { font-size: 28px; }
    .cs-intro p { font-size: 16px; }
    .cs-results-card { padding: 30px 24px; }
    .stats-grid { gap: 12px; }
    .stat-card { padding: 24px 18px; }
    .stat-num { font-size: 28px; }
    .stat-label { font-size: 13px; }

    .cs-challenges { padding: 50px 18px; }
    .ch-toggle { padding: 16px 20px; font-size: 15px; }

    .cs-strategies { padding: 50px 18px; }
    .cs-strategies-desc { font-size: 16px; }
    .strategy-card { padding: 28px 24px; }
    .strategy-card h3 { font-size: 20px; }

    .cs-proven { padding: 50px 18px; }
    .proven-stage { padding: 0 44px; }
    .proven-laptop { padding: 24px; }
    .proven-arrow { width: 36px; height: 36px; font-size: 18px; }
    .proven-arrow.prev { left: 4px; }
    .proven-arrow.next { right: 4px; }

    .cs-results { padding: 50px 18px; }
    .results-list li { font-size: 16px; }

    .cs-testi { padding: 50px 18px; }
    .cs-testi-quote-text { font-size: 15px; }

    .cs-conclusion { padding: 40px 18px 60px; }
    .cs-conclusion p { font-size: 16px; }
    .cs-related { padding: 40px 18px 60px; }
    .cs-related-grid { grid-template-columns: 1fr; gap: 32px; }

    .next-project-float {
      width: calc(100vw - 100px);
      padding: 12px 18px;
      border-radius: 0 10px 0 0;
    }
    .next-project-float .np-label { font-size: 12px; gap: 16px; }
    .next-project-float .np-title { font-size: 13px; }


  }
  @media (max-width: 380px) {
    .cs-title { font-size: 24px; }
    .cs-intro h2,
    .challenges-left h2,
    .cs-strategies h2,
    .cs-proven h2,
    .cs-results h2,
    .cs-conclusion h2,
    .cs-related-heading { font-size: 24px; }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }


      `}} />

{/* HERO */}
<section className={`cs-hero hero-gradient ${cs.theme}`}>
  <Link href="/case-studies" className="back-btn" style={{textDecoration: 'none', display: 'inline-block'}}>←</Link>
  <p className="cs-category">{cs.category}</p>
  <h1 className="cs-title">{cs.title}</h1>
</section>

{/* BREADCRUMB */}
<div className="breadcrumb">
  <Link href="/">Home</Link>
  <span className="sep">›</span>
  <Link href="/case-studies">Case Studies</Link>
  <span className="sep">›</span>
  <span className="current">{cs.brand}</span>
</div>

{/* INTRO + RESULTS */}
<section className="cs-intro">
  <div>
    <h2>About {cs.brand}</h2>
    {cs.about.map((para, i) => (<p key={i}>{para}</p>))}

    <h2 className="spaced">Campaign Objectives</h2>
    <p>{cs.objectivesIntro}</p>
    <ul className="objective-list">
      {cs.objectives.map((o, i) => (
        <li key={i}><span><strong>{o.strong}</strong> {o.text}</span></li>
      ))}
    </ul>
  </div>

  <aside className="cs-results-card">
    <h3>Results</h3>
    <p>{cs.resultsBlurb}</p>
    <div className="stats-grid">
      {cs.stats.map((s, i) => (
        <div key={i} className="stat-card">
          <div className="stat-num">{s.num}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  </aside>
</section>

{/* CHALLENGES FACED */}
<section className="cs-challenges">
  <div className="challenges-grid-cs">
    <div className="challenges-left">
      <h2>Challenges Faced</h2>
      <div className="ch-accordion">
        {cs.challenges.map((c, i) => (
          <div key={i} className={`ch-item${i === 0 ? ' open' : ''}`}>
            <button type="button" className="ch-toggle">
              <span>{c.q}</span>
              <span className="ch-icon"></span>
            </button>
            <div className="ch-answer">
              <div className="ch-answer-inner">{c.a || c.o}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="challenges-image"></div>
  </div>
</section>

{/* CAMPAIGN STRATEGIES */}
<section className="cs-strategies">
  <h2>Campaign Strategies</h2>
  <p className="cs-strategies-desc">{cs.strategiesIntro}</p>
  <div className="strategies-grid">
    {cs.strategies.slice(0, 3).map((s, i) => (
      <div key={i} className="strategy-card">
        <h3>{s.h}</h3>
        <p>{s.p}</p>
      </div>
    ))}
  </div>
  {cs.strategies.length > 3 && (
    <div className="strategies-grid" style={{marginTop: 28}}>
      {cs.strategies.slice(3).map((s, i) => (
        <div key={i} className="strategy-card">
          <h3>{s.h}</h3>
          <p>{s.p}</p>
        </div>
      ))}
    </div>
  )}
</section>

{/* RESULTS ACHIEVED */}
<section className="cs-results">
  <h2>Key Achievements</h2>
  <ul className="results-list">
    {cs.achievements.map((a, i) => (
      <li key={i}><span><strong>{a.strong}</strong> {a.text}</span></li>
    ))}
  </ul>
</section>

{/* CONCLUSION */}
<section className="cs-conclusion">
  <h2>Conclusion</h2>
  <p>{cs.conclusion}</p>
</section>

{/* RELATED CASE STUDIES */}
<section className="cs-related">
  <h2 className="cs-related-heading">Related Case Studies</h2>
  <div className="cs-related-grid">
    {cs.related.map((r) => (
      <article key={r.slug} className="cs-related-card">
        <Link href={`/case-studies/${r.slug}`} className="cs-related-image" style={{background: r.bg}}>
          <div className="cs-related-mark">{r.brand}</div>
          <div className="cs-related-bar" style={{background: r.bar}}></div>
        </Link>
        <h3 className="cs-related-title">{r.title}</h3>
        <p className="cs-related-meta">Case Studies</p>
      </article>
    ))}
  </div>
</section>

{/* FLOATING NEXT */}
<div className="next-project-float" id="nextProjectFloat">
  <div className="np-label">
    <span>Next Project</span>
  </div>
  <div className="np-title">
    <Link href={`/case-studies/${cs.next.slug}`}>{cs.next.brand} — Case Study →</Link>
  </div>
</div>
    </>
  );
}