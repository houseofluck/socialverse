"use client";

import { useEffect } from "react";

export default function CaseStudyPage() {
  useEffect(() => {
    // ---------- CHALLENGES ACCORDION ----------
      document.querySelectorAll('.ch-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
          const item = btn.parentElement;
          // Close other items, open this one (single-open behavior)
          const isOpen = item.classList.contains('open');
          document.querySelectorAll('.ch-item').forEach(i => i.classList.remove('open'));
          if (!isOpen) item.classList.add('open');
        });
      });

      // ---------- PROVEN RESULTS PAGINATION ----------
      // For now this is a 2-page indicator with arrow placeholders.
      // When you have multiple slides per "page", expand this logic.
      let provenPage = 1;
      const provenTotal = 2;
      const provenCurrent = document.getElementById('provenCurrent');
      document.getElementById('provenPrev')?.addEventListener('click', () => {
        provenPage = provenPage === 1 ? provenTotal : provenPage - 1;
        provenCurrent.textContent = provenPage;
      });
      document.getElementById('provenNext')?.addEventListener('click', () => {
        provenPage = provenPage === provenTotal ? 1 : provenPage + 1;
        provenCurrent.textContent = provenPage;
      });

      // ---------- HIDE FLOATING NEXT WHEN FOOTER VISIBLE ----------
      const float = document.getElementById('nextProjectFloat');
      window.addEventListener('scroll', () => {
        const footer = document.querySelector('.site-footer');
        if (!footer || !float) return;
        const rect = footer.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          float.style.transform = 'translateY(150%)';
        } else {
          float.style.transform = 'translateY(0)';
        }
      });
  }, []);

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

{/* NAVBAR */}


{/* HERO */}
<section className="cs-hero hero-gradient theme-green">
  <button className="back-btn" onClick={() => { history.back() }}>←</button>
  <p className="cs-category">Case Studies</p>
  <h1 className="cs-title">Sample Project — A Digital Marketing Success Story</h1>
</section>

{/* BREADCRUMB */}
<div className="breadcrumb">
  <a href="/">Home</a>
  <span className="sep">›</span>
  <a href="/works">Portfolio</a>
  <span className="sep">›</span>
  <span className="current">Sample Project — A Digital Marketing Success Story</span>
</div>

{/* INTRO + RESULTS */}
<section className="cs-intro">
  <div>
    <h2>About Company</h2>
    <p>
      Sample Client was founded in 2019 and is based in a major metropolitan hub. They
      operate in a fast-growing industry with their on-demand product offering and have
      quickly built a reputation for convenience, quality, and reliability with customers
      across multiple cities.
    </p>
    <p>
      Replace this section with the real client background — what they do, where they're
      based, and the broader context of the business.
    </p>

    <h2 className="spaced">Campaign Objectives</h2>
    <p>
      Our mission was to boost the client's digital footprint, expand market share, and
      increase online sales through tailored digital marketing strategies.
    </p>
    <ul className="objective-list">
      <li><span><strong>Boost Online Visibility:</strong> Increase traffic across the client's digital platforms by emphasising their unique product proposition and standing out in a competitive landscape.</span></li>
      <li><span><strong>Franchise Recruitment:</strong> Attract potential franchisees through targeted campaigns and qualified lead generation.</span></li>
      <li><span><strong>Market Penetration:</strong> Expand consumer adoption across priority cities and emerging markets.</span></li>
      <li><span><strong>Customer Engagement:</strong> Build a community-driven presence that turns first-time buyers into loyal repeat customers.</span></li>
    </ul>
  </div>

  <aside className="cs-results-card">
    <h3>Results</h3>
    <p>
      Achieved a 60% increase in website traffic and a 70% increase in social media
      engagement. Grew the franchisee network by 45%, significantly exceeding initial
      targets.
    </p>
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-num">60K</div>
        <div className="stat-label">Website Traffic</div>
      </div>
      <div className="stat-card">
        <div className="stat-num">45%</div>
        <div className="stat-label">Franchise Network</div>
      </div>
      <div className="stat-card">
        <div className="stat-num">40%</div>
        <div className="stat-label">Increase Customer Base</div>
      </div>
      <div className="stat-card">
        <div className="stat-num">70%</div>
        <div className="stat-label">Increase in Social Media</div>
      </div>
    </div>
  </aside>
</section>

{/* CHALLENGES FACED */}
<section className="cs-challenges">
  <div className="challenges-grid-cs">
    <div className="challenges-left">
      <h2>Challenges Faced</h2>
      <div className="ch-accordion">
        <div className="ch-item open">
          <button type="button" className="ch-toggle">
            <span>Emerging Market Education</span>
            <span className="ch-icon"></span>
          </button>
          <div className="ch-answer">
            <div className="ch-answer-inner">
              Educating a market unfamiliar with the client's category and product proposition required clear, consistent messaging and lots of supporting content.
            </div>
          </div>
        </div>
        <div className="ch-item">
          <button type="button" className="ch-toggle">
            <span>Brand Differentiation</span>
            <span className="ch-icon"></span>
          </button>
          <div className="ch-answer">
            <div className="ch-answer-inner">
              Standing out in a crowded category meant doubling down on a sharp brand point of view and visual identity that was consistently applied across every channel.
            </div>
          </div>
        </div>
        <div className="ch-item">
          <button type="button" className="ch-toggle">
            <span>Conversion Optimisation</span>
            <span className="ch-icon"></span>
          </button>
          <div className="ch-answer">
            <div className="ch-answer-inner">
              Turning paid traffic into qualified conversions called for tight funnel design, ongoing creative testing, and aggressive landing-page optimisation.
            </div>
          </div>
        </div>
        <div className="ch-item">
          <button type="button" className="ch-toggle">
            <span>Cross-City Consistency</span>
            <span className="ch-icon"></span>
          </button>
          <div className="ch-answer">
            <div className="ch-answer-inner">
              Running campaigns across multiple cities required regional creative variants while keeping the core brand voice and visual system tightly consistent.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="challenges-image"></div>
  </div>
</section>

{/* CAMPAIGN STRATEGIES */}
<section className="cs-strategies">
  <h2>Campaign Strategies</h2>
  <p className="cs-strategies-desc">
    To address the challenges above and meet the campaign objectives, we devised the
    following strategies and implemented appropriate solutions:
  </p>
  <div className="strategies-grid">
    <div className="strategy-card">
      <h3>Google Ads &amp; Meta Marketing</h3>
      <p>Leveraged high-impact pay-per-click (PPC) campaigns and social media advertising to target both potential franchisees and end-users with sharp creative and tight audience segmentation.</p>
    </div>
    <div className="strategy-card">
      <h3>Data Driven Targeting</h3>
      <p>Utilised advanced analytics to refine audience targeting on a weekly basis, increasing campaign relevance and effectiveness while bringing down cost per acquisition.</p>
    </div>
    <div className="strategy-card">
      <h3>Conversion Tracking &amp; Funnel Analysis</h3>
      <p>Deployed advanced attribution models and full-funnel analysis to optimise campaign flow and budget allocation across every stage of the customer journey.</p>
    </div>
  </div>
</section>

{/* PROVEN RESULTS CAROUSEL */}
<section className="cs-proven">
  <h2>Proven Results</h2>
  <div className="proven-stage">
    <button className="proven-arrow prev" id="provenPrev" aria-label="Previous">←</button>

    <div className="proven-laptop">
      <div className="proven-mini">
        <div className="proven-screen">
          <div className="pscreen-top">
            <span></span><span></span><span></span>
            <em style={{marginLeft: '8px', fontStyle: 'normal'}}>Google Ads · Campaign</em>
          </div>
          <div className="pscreen-content">
            <div className="pbar"></div>
            <div className="pbar s"></div>
            <div className="pbar r"></div>
            <div className="pbar b"></div>
            <div className="pbar s"></div>
            <div className="pchart"></div>
          </div>
        </div>
      </div>
      <div className="proven-keyboard"></div>
    </div>

    <div className="proven-laptop">
      <div className="proven-mini">
        <div className="proven-screen">
          <div className="pscreen-top">
            <span></span><span></span><span></span>
            <em style={{marginLeft: '8px', fontStyle: 'normal'}}>Analytics · Realtime</em>
          </div>
          <div className="pscreen-content">
            <div className="pbar"></div>
            <div className="pbar s"></div>
            <div className="pbar b"></div>
            <div className="pbar s"></div>
            <div className="pbar r"></div>
            <div className="pchart"></div>
          </div>
        </div>
      </div>
      <div className="proven-keyboard"></div>
    </div>

    <button className="proven-arrow next" id="provenNext" aria-label="Next">→</button>
  </div>
  <div className="proven-pagination">
    <span className="pnum active" id="provenCurrent">1</span>
    <span className="pline"></span>
    <span className="pnum" id="provenTotal">2</span>
  </div>
</section>

{/* RESULTS ACHIEVED */}
<section className="cs-results">
  <h2>Results Achieved</h2>
  <ul className="results-list">
    <li><span><strong>Digital Engagement:</strong> Achieved a 60% increase in website traffic and a 70% increase in social media engagement.</span></li>
    <li><span><strong>Franchise Network Expansion:</strong> Grew the franchisee network by 45%, significantly exceeding initial targets.</span></li>
    <li><span><strong>Increased Service Uptake:</strong> Registered a 55% rise in user adoption rate, thanks to precise market targeting and compelling call-to-action strategies.</span></li>
    <li><span><strong>Improved ROAS:</strong> Reduced cost per acquisition by 32% over the first quarter through continuous creative testing and audience refinement.</span></li>
  </ul>
</section>

{/* TESTIMONIAL */}
<section className="cs-testi">
  <div className="cs-testi-grid">
    <div>
      <p className="cs-testi-eyebrow">TESTIMONIALS</p>
      <h2 className="cs-testi-heading">What our clients say about us</h2>
    </div>
    <div className="cs-testi-quote">
      <p className="cs-testi-quote-text">
        TheSocialVerse played a pivotal role in amplifying our lead generation
        efforts. Their expertise in crafting targeted campaigns is unparalleled, and
        their ability to communicate effectively ensures that we're always aligned on
        our goals. The professionalism and deep understanding of digital marketing they
        bring to the table have greatly enhanced our outreach, making them a key asset
        in our marketing strategy.
      </p>
      <div className="cs-testi-stars">★ ★ ★ ★ ★</div>
      <div className="cs-testi-author">Sample Client Name</div>
      <div className="cs-testi-author-meta">Vice President, Strategic Partnerships</div>
    </div>
    <div className="cs-testi-photo"></div>
  </div>
</section>

{/* CONCLUSION */}
<section className="cs-conclusion">
  <h2>Conclusion</h2>
  <p>
    TheSocialVerse's targeted digital marketing campaign for our client showcases a
    stellar example of how tailored digital strategies can substantially elevate a brand's
    presence and commercial success in a niche market. Our work not only amplified their
    digital footprint but also expanded their business operations through effective
    franchisee recruitment and customer conversion strategies, setting a benchmark in the
    industry.
  </p>
</section>

{/* RELATED CASE STUDIES */}
<section className="cs-related">
  <h2 className="cs-related-heading">Related Case Studies</h2>
  <div className="cs-related-grid">
    <article className="cs-related-card">
      <a href="/case-studies/sample-case" className="cs-related-image" style={{background: '#fde6f0'}}>
        <div className="cs-related-mark">Sample One</div>
        <div className="cs-related-bar" style={{background: '#f7c4d6'}}></div>
      </a>
      <h3 className="cs-related-title">Sample One — A Digital Marketing Success Story</h3>
      <p className="cs-related-meta">Case Studies</p>
    </article>
    <article className="cs-related-card">
      <a href="/case-studies/sample-case" className="cs-related-image" style={{background: '#e6f5d4'}}>
        <div className="cs-related-mark">Sample Two</div>
        <div className="cs-related-bar" style={{background: '#cce8a8'}}></div>
      </a>
      <h3 className="cs-related-title">Sample Two — A Proven Google Ads Case Study</h3>
      <p className="cs-related-meta">Case Studies</p>
    </article>
    <article className="cs-related-card">
      <a href="/case-studies/sample-case" className="cs-related-image" style={{background: '#ededed'}}>
        <div className="cs-related-mark">Sample Three</div>
        <div className="cs-related-bar" style={{background: '#d0d0d0'}}></div>
      </a>
      <h3 className="cs-related-title">Sample Three — Case Study | Google Analytics GA4</h3>
      <p className="cs-related-meta">Case Studies</p>
    </article>
  </div>
</section>

{/* FLOATING NEXT */}
<div className="next-project-float" id="nextProjectFloat">
  <div className="np-label">
    <span>Next Project</span>
    <div className="np-arrows">
      <button className="prev" aria-label="Previous">←</button>
      <button className="next" aria-label="Next">→</button>
    </div>
  </div>
  <div className="np-title">
    <a href="/case-studies/sample-case">Sample Next Project — Case Study</a>
  </div>
</div>

{/* ==== FOOTER START ==== */}

{/* ==== FOOTER END ==== */}


{/* WHATSAPP */}
    </>
  );
}