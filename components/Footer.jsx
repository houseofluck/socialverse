"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-col">
          <Link href="/" className="logo">
            <img
              src="/brand/social-verse-wordmark.png"
              alt="The Social Verse"
              className="logo-img"
            />
            <div className="logo-tagline">
              All eyes on your brand<span className="dot-accent">.</span>
            </div>
          </Link>
          <p className="footer-desc">
            Social Verse is a full-service digital marketing agency helping
            brands grow through creative strategy, performance marketing,
            branding, website development, and content creation.
          </p>
          <div className="social-icons">
            <a className="social-icon" href="https://instagram.com/the_socialverse" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.2-.1 1.6-.1 4.8-.1zm0 2.2c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.7a4.1 4.1 0 110 8.2 4.1 4.1 0 010-8.2zm0 6.7a2.6 2.6 0 100-5.2 2.6 2.6 0 000 5.2zm5.2-7.1a1 1 0 110 1.9 1 1 0 010-1.9z"/></svg>
            </a>
            <a className="social-icon" href="https://www.linkedin.com/in/the-social-verse-155371384/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.3 18.3v-8.5H5.5v8.5h2.8zm-1.4-9.7a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2zm11.5 9.7v-4.6c0-2.4-1.3-3.5-3-3.5-1.4 0-2 .8-2.3 1.3v-1.1H10.3c0 .8 0 8.5 0 8.5h2.8v-4.7c0-.3 0-.5.1-.7.2-.5.6-1 1.3-1 .9 0 1.3.7 1.3 1.8v4.6h2.6z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Phone</h4>
          <ul className="footer-list">
            <li><a href="tel:+916000955672">+91 60009 55672</a></li>
            <li><a href="tel:+918099531944">+91 80995 31944</a></li>
          </ul>
          <h4 className="footer-heading" style={{ marginTop: "32px" }}>Email</h4>
          <ul className="footer-list">
            <li><a href="mailto:info@thesocialverse.co.in">info@thesocialverse.co.in</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-list">
            <li><Link href="/services/social-media-marketing">Social Media Marketing</Link></li>
            <li><Link href="/services/performance-marketing">Performance Marketing</Link></li>
            <li><Link href="/services/content-production">Content Production</Link></li>
            <li><Link href="/services/branding-creative-strategy">Branding &amp; Creative Strategy</Link></li>
            <li><Link href="/services/website-development">Website Development</Link></li>
            <li><Link href="/services/outdoor-marketing">Outdoor Marketing</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/works">Portfolio</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/contact">Contact us</Link></li>
          </ul>
        </div>
      </div>

      <div className="copyright-bar">
        © {year} The Social Verse. All rights reserved.
      </div>
    </footer>
  );
}
