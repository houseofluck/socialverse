"use client";

import { useEffect } from "react";

export default function AboutPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #fff; color: #111; overflow-x: hidden;
  }

  /* ---------- NAVBAR ---------- */



  /* ---------- WHY CHOOSE SECTION ---------- */
  .why-choose {
    margin-top: 90px;
    background: #fff;
    padding: 100px 60px 120px;
    text-align: center;
  }
  .wc-eyebrow {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 2.5px;
    color: #111;
    margin-bottom: 18px;
  }
  .wc-heading {
    font-size: 72px;
    font-weight: 700;
    color: #111;
    letter-spacing: -1.5px;
    line-height: 1.05;
    margin-bottom: 80px;
  }

  .wc-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    max-width: 1500px;
    margin: 0 auto;
    text-align: center;
  }
  .wc-card {
    background: #f5f5f5;
    border-radius: 24px;
    padding: 60px 40px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease, background 0.3s ease;
  }
  .wc-card:hover {
    transform: translateY(-6px);
    background: #efefef;
  }
  .wc-illustration {
    width: 100%;
    max-width: 280px;
    aspect-ratio: 1 / 1;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .wc-illustration svg { width: 100%; height: 100%; }

  .wc-card h3 {
    font-size: 32px;
    font-weight: 700;
    color: #111;
    letter-spacing: -0.5px;
    margin-bottom: 24px;
  }
  .wc-card p {
    font-size: 17px;
    line-height: 1.65;
    color: #1a1a1a;
  }

  /* ---------- CORE STRENGTH SECTION ---------- */
  .core-strength {
    background: #fff;
    padding: 80px 60px 120px;
    text-align: center;
  }
  .cs-eyebrow {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 2.5px;
    color: #111;
    margin-bottom: 18px;
  }
  .cs-heading {
    font-size: 72px;
    font-weight: 700;
    color: #111;
    letter-spacing: -1.5px;
    line-height: 1.05;
    margin-bottom: 80px;
  }

  /* Custom 3-col grid where left+right span 2 rows */
  .cs-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: 28px;
    max-width: 1500px;
    margin: 0 auto;
    text-align: center;
  }
  .cs-card {
    background: #fff;
    border: 1.5px solid var(--accent);
    border-radius: 22px;
    padding: 50px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .cs-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 30px rgba(212, 160, 23, 0.12);
  }
  /* Tall cards (Strategy + Result) span 2 rows */
  .cs-card.tall {
    grid-row: span 2;
  }
  .cs-icon {
    width: 110px;
    height: 110px;
    background: #f3f3f3;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }
  .cs-icon svg { width: 60%; height: 60%; }
  .cs-card h3 {
    font-size: 32px;
    font-weight: 700;
    color: #111;
    letter-spacing: -0.5px;
    margin-bottom: 20px;
  }
  .cs-card p {
    font-size: 17px;
    line-height: 1.65;
    color: #1a1a1a;
    margin-bottom: 32px;
  }
  .cs-image {
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 14px;
    margin-top: auto;
    background-size: cover;
    background-position: center;
    box-shadow: 0 12px 28px rgba(0,0,0,0.1);
  }
  .cs-image-1 {
    background:
      linear-gradient(135deg, rgba(0,0,0,0.15), rgba(0,0,0,0.4)),
      linear-gradient(120deg, #f6c177 0%, #d4793c 50%, #6a4c93 100%);
    position: relative;
    overflow: hidden;
  }
  .cs-image-1::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 25% 50%, rgba(255,255,255,0.18) 0%, transparent 30%),
      radial-gradient(circle at 75% 30%, rgba(255,255,255,0.1) 0%, transparent 30%);
  }
  .cs-image-2 {
    background:
      linear-gradient(135deg, rgba(0,0,0,0.2), rgba(0,0,0,0.5)),
      linear-gradient(120deg, #1a1a2e 0%, #16213e 50%, #0f4c75 100%);
    position: relative;
    overflow: hidden;
  }
  .cs-image-2::after {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 30% 60%, rgba(46,204,113,0.2) 0%, transparent 30%),
      radial-gradient(circle at 70% 30%, rgba(52,152,219,0.2) 0%, transparent 30%);
  }

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


  /* HAMBURGER */

  body { -webkit-text-size-adjust: 100%; overflow-x: hidden; position: relative; }
  html { scroll-behavior: smooth; }
  ::selection { background: var(--accent); color: #fff; }
  a:focus-visible, button:focus-visible {
    outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px;
  }
  img, video, svg { max-width: 100%; height: auto; }

  /* RESPONSIVE */
  @media (max-width: 1200px) {
    .wc-heading, .cs-heading { font-size: 56px; }
    .wc-card h3, .cs-card h3 { font-size: 28px; }
    .why-choose { padding: 80px 40px 100px; }
    .core-strength { padding: 60px 40px 100px; }
  }
  @media (max-width: 1000px) {
    .wc-grid { grid-template-columns: 1fr; max-width: 600px; }
    /* Core strength: reflow to single column at this breakpoint */
    .cs-grid { grid-template-columns: 1fr; grid-template-rows: auto; max-width: 600px; }
    .cs-card.tall { grid-row: span 1; }
  }
  @media (max-width: 900px) {

    .why-choose { margin-top: 80px; padding: 70px 24px 80px; }
    .core-strength { padding: 50px 24px 80px; }
    .wc-heading, .cs-heading { font-size: 44px; margin-bottom: 50px; }
    .wc-card { padding: 44px 30px 36px; border-radius: 20px; }
    .wc-card h3 { font-size: 26px; }
    .wc-card p { font-size: 16px; }
    .wc-illustration { max-width: 220px; margin-bottom: 28px; }

    .cs-card { padding: 40px 30px; border-radius: 18px; }
    .cs-card h3 { font-size: 26px; }
    .cs-card p { font-size: 16px; }
    .cs-icon { width: 90px; height: 90px; margin-bottom: 24px; }

  }

  @media (max-width: 600px) {

    .why-choose { margin-top: 72px; padding: 50px 18px 60px; }
    .core-strength { padding: 40px 18px 60px; }
    .wc-heading, .cs-heading { font-size: 34px; letter-spacing: -0.5px; margin-bottom: 36px; }
    .wc-eyebrow, .cs-eyebrow { font-size: 12px; letter-spacing: 2px; }

    .wc-grid { gap: 18px; }
    .wc-card { padding: 36px 24px 30px; }
    .wc-card h3 { font-size: 22px; margin-bottom: 18px; }
    .wc-card p { font-size: 15px; }
    .wc-illustration { max-width: 180px; margin-bottom: 22px; }

    .cs-grid { gap: 16px; }
    .cs-card { padding: 32px 24px; }
    .cs-card h3 { font-size: 22px; margin-bottom: 14px; }
    .cs-card p { font-size: 15px; margin-bottom: 22px; }
    .cs-icon { width: 76px; height: 76px; margin-bottom: 20px; }


  }

  @media (max-width: 380px) {
    .wc-heading, .cs-heading { font-size: 28px; }
    .wc-card h3, .cs-card h3 { font-size: 20px; }
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


{/* WHY CHOOSE */}
<section className="why-choose">
  <p className="wc-eyebrow">WHY CHOOSE</p>
  <h1 className="wc-heading">TheSocialVerse</h1>

  <div className="wc-grid">

    <article className="wc-card">
      <div className="wc-illustration">
        {/* Why we do — figure with idea/gear */}
        <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
          {/* gear top right */}
          <g transform="translate(170 50)">
            <circle cx="0" cy="0" r="38" fill="var(--accent)"/>
            <circle cx="0" cy="0" r="14" fill="#fff"/>
            <g fill="var(--accent)">
              <rect x="-5" y="-50" width="10" height="14" rx="2"/>
              <rect x="-5" y="36" width="10" height="14" rx="2"/>
              <rect x="-50" y="-5" width="14" height="10" rx="2"/>
              <rect x="36" y="-5" width="14" height="10" rx="2"/>
              <rect x="-37" y="-37" width="10" height="14" rx="2" transform="rotate(-45)"/>
              <rect x="27" y="-37" width="10" height="14" rx="2" transform="rotate(45)"/>
              <rect x="-37" y="27" width="10" height="14" rx="2" transform="rotate(45)"/>
              <rect x="27" y="27" width="10" height="14" rx="2" transform="rotate(-45)"/>
            </g>
          </g>
          {/* character */}
          <g>
            {/* body */}
            <path d="M120 200 Q120 150 140 150 Q160 150 160 200 L160 250 L120 250 Z" fill="#1a1a1a"/>
            {/* head */}
            <circle cx="140" cy="125" r="32" fill="#fff" stroke="#1a1a1a" stroke-width="3"/>
            {/* hair */}
            <path d="M108 110 Q108 90 140 90 Q172 90 172 115 Q150 105 130 110 Q120 110 108 110 Z" fill="#1a1a1a"/>
            {/* glasses */}
            <circle cx="130" cy="128" r="7" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
            <circle cx="148" cy="128" r="7" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
            <line x1="137" y1="128" x2="141" y2="128" stroke="var(--accent)" stroke-width="2.5"/>
            {/* arms raised */}
            <path d="M120 165 Q90 150 80 105" stroke="#1a1a1a" stroke-width="6" fill="none" stroke-linecap="round"/>
            <path d="M160 165 Q190 150 200 105" stroke="#1a1a1a" stroke-width="6" fill="none" stroke-linecap="round"/>
            {/* hands */}
            <circle cx="80" cy="105" r="9" fill="#fff" stroke="#1a1a1a" stroke-width="3"/>
            <circle cx="200" cy="105" r="9" fill="#fff" stroke="#1a1a1a" stroke-width="3"/>
          </g>
          {/* lightbulb top left */}
          <g transform="translate(70 80)">
            <path d="M0 -8 Q-12 -8 -12 5 Q-12 14 -6 18 L-6 24 L6 24 L6 18 Q12 14 12 5 Q12 -8 0 -8 Z" fill="#1a1a1a"/>
            <rect x="-4" y="26" width="8" height="3" rx="1" fill="#1a1a1a"/>
            <rect x="-3" y="31" width="6" height="2" rx="1" fill="#1a1a1a"/>
          </g>
        </svg>
      </div>
      <h3>Why We Do!</h3>
      <p>
        The marketing landscape is changing fast. As a digital agency, we know how to
        connect the right content to the right audience. We believe each brand has a
        unique story — and we're passionate about bringing those stories into the world
        with clarity, craft, and conviction.
      </p>
    </article>

    <article className="wc-card">
      <div className="wc-illustration">
        {/* What we do — two people working at laptop */}
        <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
          {/* desk */}
          <rect x="60" y="220" width="160" height="6" rx="2" fill="#1a1a1a"/>
          {/* laptop */}
          <rect x="105" y="178" width="70" height="44" rx="3" fill="#1a1a1a"/>
          <rect x="110" y="183" width="60" height="34" rx="2" fill="#fff"/>
          <rect x="100" y="220" width="80" height="4" rx="2" fill="#333"/>
          {/* person 1 (left) */}
          <g>
            <circle cx="105" cy="135" r="22" fill="#fff" stroke="#1a1a1a" stroke-width="3"/>
            <path d="M85 130 Q85 110 105 110 Q125 110 125 132 Q115 124 105 126 Q95 126 85 130 Z" fill="#1a1a1a"/>
            {/* body in red */}
            <path d="M85 158 Q85 175 105 175 Q125 175 125 158 L130 200 L80 200 Z" fill="var(--accent)"/>
            {/* arm */}
            <path d="M100 175 Q95 185 110 195" stroke="#1a1a1a" stroke-width="4" fill="none" stroke-linecap="round"/>
          </g>
          {/* person 2 (right) leaning over */}
          <g>
            <circle cx="180" cy="115" r="22" fill="#fff" stroke="#1a1a1a" stroke-width="3"/>
            <path d="M160 110 Q160 90 180 90 Q200 90 200 113 Q193 100 180 102 Q170 102 160 110 Z" fill="#1a1a1a"/>
            {/* speech bubble */}
            <ellipse cx="208" cy="80" rx="20" ry="14" fill="var(--accent)"/>
            <path d="M198 92 L200 100 L210 92 Z" fill="var(--accent)"/>
            {/* body */}
            <path d="M160 138 Q160 158 180 158 L195 175 Q200 178 200 200 L150 200 L155 175 Q150 165 160 138 Z" fill="var(--accent)"/>
            {/* pointing arm */}
            <path d="M165 165 Q145 175 130 195" stroke="#1a1a1a" stroke-width="4" fill="none" stroke-linecap="round"/>
          </g>
        </svg>
      </div>
      <h3>What we do!</h3>
      <p>
        We are a digital marketing and creative agency, supporting brands as they grow.
        We deliver end-to-end solutions across video production, creative design, website
        and UI/UX, performance marketing, branding, and presentations — covering the full
        journey from concept through to delivery.
      </p>
    </article>

    <article className="wc-card">
      <div className="wc-illustration">
        {/* How we do — figure with pie chart and lightbulb */}
        <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
          {/* pie chart top left */}
          <g transform="translate(70 80)">
            <circle cx="0" cy="0" r="32" fill="var(--accent)"/>
            <path d="M0 0 L0 -32 A32 32 0 0 1 28 16 Z" fill="#1a1a1a"/>
          </g>
          {/* dotted arrows */}
          <path d="M105 75 Q140 50 170 60" stroke="#1a1a1a" stroke-width="2" stroke-dasharray="3 4" fill="none"/>
          {/* lightbulb top right */}
          <g transform="translate(210 70)">
            <circle cx="0" cy="0" r="14" fill="#fff" stroke="#1a1a1a" stroke-width="3"/>
            <circle cx="0" cy="0" r="6" fill="var(--accent)"/>
            <line x1="-18" y1="0" x2="-25" y2="0" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
            <line x1="18" y1="0" x2="25" y2="0" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
            <line x1="-13" y1="-13" x2="-19" y2="-19" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
            <line x1="13" y1="-13" x2="19" y2="-19" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
          </g>
          {/* character sitting */}
          <g>
            {/* head */}
            <circle cx="140" cy="155" r="26" fill="#fff" stroke="#1a1a1a" stroke-width="3"/>
            {/* hair */}
            <path d="M115 145 Q115 130 140 130 Q165 130 165 148 Q150 140 140 142 Q128 142 115 145 Z" fill="#1a1a1a"/>
            {/* ear */}
            <circle cx="166" cy="155" r="3" fill="var(--accent)"/>
            {/* body in red */}
            <path d="M118 178 Q118 200 140 200 Q162 200 162 178 L172 220 Q140 230 108 220 Z" fill="var(--accent)"/>
            {/* left arm holding pie */}
            <path d="M118 200 Q90 200 80 95" stroke="#1a1a1a" stroke-width="6" fill="none" stroke-linecap="round"/>
            {/* right arm reaching */}
            <path d="M162 200 Q200 200 215 90" stroke="#1a1a1a" stroke-width="6" fill="none" stroke-linecap="round"/>
            {/* legs in red */}
            <path d="M115 222 Q105 245 95 250 L115 250 L130 232 Z" fill="var(--accent)"/>
            <path d="M165 222 Q175 245 185 250 L165 250 L150 232 Z" fill="var(--accent)"/>
            {/* shoes */}
            <ellipse cx="100" cy="252" rx="14" ry="5" fill="var(--accent)"/>
            <ellipse cx="180" cy="252" rx="14" ry="5" fill="var(--accent)"/>
          </g>
        </svg>
      </div>
      <h3>How we do!</h3>
      <p>
        We bring 50+ years of combined experience and provide tailored solutions to every
        client's needs. Our value of excellence — together with the diversity of work we
        deliver and our commitment to on-time delivery — is what consistently sets us
        apart from our competitors.
      </p>
    </article>

  </div>
</section>

{/* CORE STRENGTH */}
<section className="core-strength">
  <p className="cs-eyebrow">WHAT'S OUR</p>
  <h2 className="cs-heading">Core Strength</h2>

  <div className="cs-grid">
    {/* LEFT (tall) — Strategy */}
    <article className="cs-card tall">
      <div className="cs-icon">
        {/* strategy icon: doc with magnifier */}
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <rect x="14" y="10" width="32" height="42" rx="3" fill="#fff" stroke="#1a1a1a" stroke-width="2.5"/>
          <line x1="20" y1="20" x2="40" y2="20" stroke="#1a1a1a" stroke-width="2"/>
          <line x1="20" y1="26" x2="40" y2="26" stroke="#1a1a1a" stroke-width="2"/>
          <line x1="20" y1="32" x2="34" y2="32" stroke="#1a1a1a" stroke-width="2"/>
          {/* chart line */}
          <path d="M20 42 L26 38 L32 41 L40 34" stroke="var(--accent)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          {/* magnifier */}
          <circle cx="44" cy="44" r="9" fill="#fff" stroke="#1a1a1a" stroke-width="2.5"/>
          <line x1="51" y1="51" x2="56" y2="56" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </div>
      <h3>Strategy</h3>
      <p>We help brands connect with the right people through strategy that drives sales — clear positioning, sharp messaging, and channel plans built to deliver outcomes that matter.</p>
      <div className="cs-image cs-image-1"></div>
    </article>

    {/* TOP MIDDLE — Technology */}
    <article className="cs-card">
      <div className="cs-icon">
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          {/* two interlocking gears */}
          <g transform="translate(24 24)">
            <circle cx="0" cy="0" r="11" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
            <circle cx="0" cy="0" r="3" fill="#1a1a1a"/>
            <g fill="#1a1a1a">
              <rect x="-2" y="-16" width="4" height="5" rx="1"/>
              <rect x="-2" y="11" width="4" height="5" rx="1"/>
              <rect x="-16" y="-2" width="5" height="4" rx="1"/>
              <rect x="11" y="-2" width="5" height="4" rx="1"/>
            </g>
          </g>
          <g transform="translate(42 40)">
            <circle cx="0" cy="0" r="9" fill="none" stroke="var(--accent)" stroke-width="2.5"/>
            <circle cx="0" cy="0" r="2.5" fill="var(--accent)"/>
            <g fill="var(--accent)">
              <rect x="-1.5" y="-13" width="3" height="4" rx="1"/>
              <rect x="-1.5" y="9" width="3" height="4" rx="1"/>
              <rect x="-13" y="-1.5" width="4" height="3" rx="1"/>
              <rect x="9" y="-1.5" width="4" height="3" rx="1"/>
            </g>
          </g>
        </svg>
      </div>
      <h3>Technology</h3>
      <p>We're huge fans of new technology and we invest in staying ahead of every shift — so the work we ship is always built on the most current tools.</p>
    </article>

    {/* RIGHT (tall) — Result */}
    <article className="cs-card tall">
      <div className="cs-icon">
        {/* magnifier on graph */}
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          {/* graph dots */}
          <circle cx="14" cy="40" r="3" fill="#1a1a1a"/>
          <circle cx="26" cy="32" r="3" fill="#1a1a1a"/>
          <circle cx="38" cy="22" r="3" fill="#1a1a1a"/>
          <circle cx="50" cy="14" r="3" fill="#1a1a1a"/>
          <line x1="14" y1="40" x2="26" y2="32" stroke="#1a1a1a" stroke-width="2"/>
          <line x1="26" y1="32" x2="38" y2="22" stroke="#1a1a1a" stroke-width="2"/>
          <line x1="38" y1="22" x2="50" y2="14" stroke="#1a1a1a" stroke-width="2"/>
          {/* magnifier with red dot inside */}
          <circle cx="44" cy="36" r="11" fill="#fff" stroke="#1a1a1a" stroke-width="2.5"/>
          <circle cx="44" cy="36" r="4" fill="var(--accent)"/>
          <line x1="52" y1="44" x2="58" y2="50" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </div>
      <h3>Result</h3>
      <p>Our method is proven and practical. We're here to help you achieve your goals — with measurable outcomes, clear reporting, and an obsession with what actually moves the needle.</p>
      <div className="cs-image cs-image-2"></div>
    </article>

    {/* BOTTOM MIDDLE — Innovative */}
    <article className="cs-card">
      <div className="cs-icon">
        {/* speech bubble with idea/lightbulb */}
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="22" cy="28" rx="14" ry="11" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
          <path d="M16 38 L18 44 L24 38 Z" fill="#fff" stroke="#1a1a1a" stroke-width="2.5"/>
          <text x="22" y="33" text-anchor="middle" font-family="Arial" font-size="14" font-weight="700" fill="#1a1a1a">?</text>
          <ellipse cx="44" cy="36" rx="14" ry="11" fill="#fff3d6" stroke="#1a1a1a" stroke-width="2.5"/>
          <path d="M50 46 L48 52 L42 46 Z" fill="#fff3d6" stroke="#1a1a1a" stroke-width="2.5"/>
          {/* lightbulb */}
          <path d="M44 30 Q40 30 40 35 Q40 38 42 39 L42 42 L46 42 L46 39 Q48 38 48 35 Q48 30 44 30 Z" fill="var(--accent)"/>
        </svg>
      </div>
      <h3>Innovative</h3>
      <p>We specialise in creating innovative digital strategies to grow your business — combining sharp creative thinking with a willingness to experiment and learn fast.</p>
    </article>
  </div>
</section>

{/* ==== FOOTER START ==== */}

{/* ==== FOOTER END ==== */}


{/* WHATSAPP */}
    </>
  );
}