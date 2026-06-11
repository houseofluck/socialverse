"use client";

import Link from "next/link";

const CASE_STUDIES = [
  {
    slug: "olive-heights",
    brand: "Olive Heights",
    title: "How We Helped Build A Strong Digital Presence",
    meta: "Hospitality · Rooftop Dining · Guwahati",
    img: "/work/creatives/showcase-03.jpg",
    bar: "#d4793c",
  },
  {
    slug: "awesome-palace",
    brand: "Awesome Palace",
    title: "Creating A Strong Luxury Hospitality Presence",
    meta: "Hospitality · Luxury Hotel · Borjhar",
    img: "/work/creatives/showcase-04.jpg",
    bar: "#1a3b5d",
  },
  {
    slug: "ahvi-gold",
    brand: "Ahvi Gold",
    title: "Transforming Ahvi Gold Into A Recognizable Brand",
    meta: "Financial Services · Bullion · Guwahati",
    img: "/work/case/ahvi-storefront.jpg",
    bar: "#caa14a",
  },
];

export default function CaseStudiesIndexPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `

  /* ---------- PAGE HEADER ---------- */
  .page-header {
    margin-top: 90px;
    background: #ededed;
    padding: 90px 60px 100px;
    text-align: center;
  }
  .page-header .section-eyebrow {
    font-size: 13px; font-weight: 600; letter-spacing: 2px;
    color: #111; margin-bottom: 18px;
  }
  .page-header h1 {
    font-size: 64px; font-weight: 700; color: #111;
    letter-spacing: -1.5px; line-height: 1.05;
    max-width: 900px; margin: 0 auto;
  }
  .page-header p {
    font-size: 17px; color: #333; max-width: 760px;
    margin: 22px auto 0; line-height: 1.6;
  }

  /* ---------- CASE STUDIES GRID ---------- */
  .case-studies-page {
    background: #fff;
    padding: 100px 60px 120px;
  }
  .case-studies-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    max-width: 1500px;
    margin: 0 auto;
  }
  .case-card { display: flex; flex-direction: column; }
  .case-card-image {
    display: block; width: 100%;
    aspect-ratio: 4 / 3; border-radius: 18px;
    overflow: hidden; position: relative;
    margin-bottom: 24px; text-decoration: none;
    background: #111;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }
  .case-card-image:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 50px rgba(0,0,0,0.16);
  }
  .case-card-image img {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover; display: block;
    transition: transform 0.5s ease;
  }
  .case-card-image:hover img { transform: scale(1.04); }
  .case-bar {
    position: absolute; left: 0; right: 0; bottom: 0;
    height: 14%;
  }
  .case-title {
    font-size: 24px; font-weight: 700; color: #111;
    letter-spacing: -0.4px; line-height: 1.25;
    margin-bottom: 12px;
  }
  .case-meta { font-size: 16px; color: #444; }
  .case-link {
    display: inline-flex; align-items: center; gap: 12px;
    text-decoration: none; color: #111;
    font-size: 16px; font-weight: 500;
    margin-top: 8px;
  }
  .case-link-line {
    display: inline-block;
    width: 50px; height: 1.5px;
    background: #111;
    transition: width 0.25s ease;
  }
  .case-card:hover .case-link-line { width: 80px; }

  /* ---------- CTA ---------- */
  .case-cta {
    background: #f5f5f5;
    padding: 80px 60px;
    text-align: center;
  }
  .case-cta-inner { max-width: 800px; margin: 0 auto; }
  .case-cta h2 {
    font-size: 42px; font-weight: 700; color: #111;
    letter-spacing: -0.8px; line-height: 1.1;
    margin-bottom: 22px;
  }
  .case-cta p {
    font-size: 17px; line-height: 1.6;
    color: #1a1a1a; margin-bottom: 32px;
  }
  .case-cta .meeting-btn {
    display: inline-block;
    background: #0d0d0d; color: #fff;
    padding: 16px 36px; border-radius: 8px;
    text-decoration: none; font-weight: 600;
    font-size: 16px;
    transition: background 0.2s ease, transform 0.2s ease;
  }
  .case-cta .meeting-btn:hover {
    background: #000; transform: translateY(-2px);
  }

  /* RESPONSIVE */
  @media (max-width: 1024px) {
    .case-studies-grid { grid-template-columns: repeat(2, 1fr); }
    .page-header h1 { font-size: 48px; }
  }
  @media (max-width: 900px) {
    .page-header { margin-top: 80px; padding: 60px 24px 70px; }
    .page-header h1 { font-size: 40px; }
    .case-studies-page { padding: 70px 24px 90px; }
    .case-cta { padding: 60px 24px; }
    .case-cta h2 { font-size: 32px; }
  }
  @media (max-width: 600px) {
    .page-header { margin-top: 72px; padding: 50px 18px 60px; }
    .page-header h1 { font-size: 32px; letter-spacing: -0.5px; }
    .page-header p { font-size: 15px; }
    .case-studies-page { padding: 50px 18px 70px; }
    .case-studies-grid { grid-template-columns: 1fr; gap: 32px; }
    .case-title { font-size: 22px; }
    .case-cta { padding: 50px 18px; }
    .case-cta h2 { font-size: 28px; }
    .case-cta .meeting-btn { width: 100%; text-align: center; }
  }
      ` }} />

      <header className="page-header">
        <p className="section-eyebrow">CASE STUDIES</p>
        <h1>Real brands. Real strategy. Real results.</h1>
        <p>
          A closer look at how Social Verse turned a brief into measurable
          digital growth — across hospitality, financial services, and beyond.
        </p>
      </header>

      <section className="case-studies-page">
        <div className="case-studies-grid">
          {CASE_STUDIES.map((cs) => (
            <article key={cs.slug} className="case-card">
              <Link
                href={`/case-studies/${cs.slug}`}
                className="case-card-image"
              >
                <img src={cs.img} alt={cs.brand} loading="lazy" />
                <div className="case-bar" style={{ background: cs.bar }}></div>
              </Link>
              <h3 className="case-title">{cs.brand} — {cs.title}</h3>
              <p className="case-meta">{cs.meta}</p>
              <Link href={`/case-studies/${cs.slug}`} className="case-link">
                Read case study <span className="case-link-line"></span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="case-cta">
        <div className="case-cta-inner">
          <h2>Ready to be our next success story?</h2>
          <p>
            Let&apos;s create something meaningful, impactful, and growth-driven
            together.
          </p>
          <Link href="/contact" className="meeting-btn">Let&apos;s Work Together</Link>
        </div>
      </section>
    </>
  );
}
