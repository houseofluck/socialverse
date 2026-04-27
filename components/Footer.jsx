"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const CITIES = [
  "Mumbai", "Bengaluru", "Delhi", "Hyderabad", "Chennai", "Pune",
  "Kolkata", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh", "Indore",
  "Kochi", "Coimbatore", "Surat", "Nagpur", "Bhopal", "Patna",
  "Goa", "Dehradun", "Visakhapatnam", "Vadodara", "Gurgaon", "Noida",
];

export default function Footer() {
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-col">
          <Link href="/" className="logo">
            <div className="logo-main">
              <span className="thin">THE SOCIAL</span>
              <span>VERSE</span>
            </div>
            <div className="logo-tagline">
              Connect<span className="dot-accent">.</span> Create
              <span className="dot-accent">.</span> Thrive
              <span className="dot-accent">.</span>
            </div>
          </Link>
          <p className="footer-desc">
            TheSocialVerse is a digital marketing and creative agency, helping
            brands grow through strategy, design, video, and performance
            marketing across India and beyond.
          </p>
          <div className="trust-badges">
            <div className="trust-badge">
              <span className="star">★</span>
              <span>4.9 / 5 Trustpilot</span>
            </div>
            <div className="trust-badge">
              <span className="star">★</span>
              <span>4.8 / 5 Glassdoor</span>
            </div>
          </div>
          <div className="social-icons">
            <a className="social-icon" href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.2-.1 1.6-.1 4.8-.1zm0 2.2c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.7a4.1 4.1 0 110 8.2 4.1 4.1 0 010-8.2zm0 6.7a2.6 2.6 0 100-5.2 2.6 2.6 0 000 5.2zm5.2-7.1a1 1 0 110 1.9 1 1 0 010-1.9z"/></svg>
            </a>
            <a className="social-icon" href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.3 18.3v-8.5H5.5v8.5h2.8zm-1.4-9.7a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2zm11.5 9.7v-4.6c0-2.4-1.3-3.5-3-3.5-1.4 0-2 .8-2.3 1.3v-1.1H10.3c0 .8 0 8.5 0 8.5h2.8v-4.7c0-.3 0-.5.1-.7.2-.5.6-1 1.3-1 .9 0 1.3.7 1.3 1.8v4.6h2.6z"/></svg>
            </a>
            <a className="social-icon" href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.6 9.9v-7H8v-3h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5V12H16l-.4 3h-2.2v7A10 10 0 0022 12z"/></svg>
            </a>
            <a className="social-icon" href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24"><path d="M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 002.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 001.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5 3-5 3z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Mumbai</h4>
          <ul className="footer-list">
            <li className="footer-text">
              123 Business Tower, Andheri East,<br />
              Mumbai, Maharashtra 400069
            </li>
          </ul>
          <h4 className="footer-heading" style={{ marginTop: "32px" }}>Bengaluru</h4>
          <ul className="footer-list">
            <li className="footer-text">
              45 Innovation Park, Koramangala,<br />
              Bengaluru, Karnataka 560034
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Phone</h4>
          <ul className="footer-list">
            <li><a href="tel:+919876543210">+91 98765 43210</a></li>
            <li><a href="tel:+919876543211">+91 98765 43211</a></li>
          </ul>
          <h4 className="footer-heading" style={{ marginTop: "32px" }}>Work Inquiries</h4>
          <ul className="footer-list">
            <li><a href="mailto:hello@thesocialverse.com">hello@thesocialverse.com</a></li>
            <li><a href="mailto:work@thesocialverse.com">work@thesocialverse.com</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-list">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/works">Our Work</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/blog/sample-post">Blog</Link></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
          </ul>
        </div>
      </div>

      <div className="cities-section">
        <button
          className="accordion-toggle"
          aria-expanded={citiesOpen}
          onClick={() => setCitiesOpen((v) => !v)}
        >
          <span>Our Services Across India</span>
          <span className="arrow">▾</span>
        </button>
        <div className={`accordion-panel${citiesOpen ? " open" : ""}`}>
          <div className="accordion-panel-inner">
            {CITIES.map((c) => (<span key={c}>{c}</span>))}
          </div>
        </div>
      </div>

      <div className="copyright-bar">
        © {year} TheSocialVerse. All rights reserved.
      </div>
    </footer>
  );
}
