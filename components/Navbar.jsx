"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Work", href: "/works" },
  { label: "Services", href: "/services" },
  { label: "Clients", href: "/#clients" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog/sample-post" },
  { label: "Career", href: "/careers" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on resize above breakpoint
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <nav className="navbar">
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

        <ul className={`nav-links${open ? " open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={isActive(item.href) ? "active" : ""}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button className="cta-btn" type="button">Set a Meeting</button>
          </li>
        </ul>

        <button
          className={`hamburger${open ? " open" : ""}`}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div
        className={`mobile-overlay${open ? " active" : ""}`}
        onClick={() => setOpen(false)}
      />
    </>
  );
}
