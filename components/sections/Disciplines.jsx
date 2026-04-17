"use client";
import { useState, useRef, useEffect } from "react";
import { P } from "@/lib/palette";
import { FadeUp } from "@/components/ui/motion";
import { useScroll } from "@/lib/hooks";
import {
  AssetBottle, AssetCandle, AssetCoffeeBag, AssetTube, AssetJar,
  AssetPostBigType, AssetPostQuote, AssetPostProduct, AssetPostGrid,
  AssetPostMetric, AssetPostEditorial, AssetStory,
} from "@/components/assets/packaging-social";
import {
  AssetFilmStill, AssetReel, AssetBillboard, AssetMenu, AssetPoster,
  AssetSignage, AssetEventCollateral, AssetPrint,
} from "@/components/assets/film-ooh";

/* ════════════════════════════════════════════════════════════
   DELIVERABLES FOOTER — shared pattern
   ════════════════════════════════════════════════════════════ */
function Deliverables({ items, link }) {
  return (
    <FadeUp delay={0.4}>
      <footer className="sv-deliverables">
        <span className="type-caption">Deliverables</span>
        <ul className="sv-deliverables-list">
          {items.map((d, i, arr) => (
            <li key={d} style={{ display: "inline-flex", alignItems: "center", gap: "24px" }}>
              {d}
              {i < arr.length - 1 && <span style={{ color: P.gold }} aria-hidden="true">·</span>}
            </li>
          ))}
        </ul>
        <a href="#" className="type-mono" style={{
          fontSize: "11px", color: P.ink, letterSpacing: "0.1em",
          textTransform: "uppercase", textDecoration: "none",
          borderBottom: `1px solid ${P.gold}`, paddingBottom: "2px",
        }}>{link} <span aria-hidden="true">↗</span></a>
      </footer>
    </FadeUp>
  );
}

function SectionHeader({ num, kicker, heading, emphasis, description }) {
  return (
    <FadeUp>
      <header className="sv-section-header">
        <div>
          <p className="type-label" style={{ marginBottom: "16px" }}>§ {num} — {kicker}</p>
          <h2 style={{
            fontSize: "clamp(30px, 4.5vw, 68px)", lineHeight: 0.98,
            letterSpacing: "-0.025em", color: P.ink, fontWeight: 500,
          }}>
            {heading}<br />
            <span className="type-serif-emphasis" style={{ color: P.gold, fontWeight: 400 }}>
              {emphasis}
            </span>
          </h2>
        </div>
        <div className="sv-section-header__divider" />
        <p style={{ fontSize: "clamp(14px, 1.3vw, 16px)", lineHeight: 1.6, color: P.inkSoft, maxWidth: "440px" }}>
          {description}
        </p>
      </header>
    </FadeUp>
  );
}

/* ════════════════════════════════════════════════════════════
   § 01 — BRAND & PACKAGING
   ════════════════════════════════════════════════════════════ */
export function DisciplineBranding() {
  const scroll = useScroll();
  const pieces = [
    { Asset: AssetBottle,    label: "Kindred & Co.", note: "Apothecary · 2025",  aspect: "3/4", plx: 0.018 },
    { Asset: AssetCandle,    label: "Hourlight",     note: "Candles · 2025",     aspect: "4/3", plx: 0.012 },
    { Asset: AssetJar,       label: "Pila House",    note: "Body Care · 2024",   aspect: "4/3", plx: 0.008 },
    { Asset: AssetCoffeeBag, label: "Kaveri Co.",    note: "Coffee · 2024",      aspect: "4/5", plx: 0.022 },
    { Asset: AssetTube,      label: "Ode Skincare",  note: "Skincare · 2025",    aspect: "4/5", plx: 0.015 },
  ];

  return (
    <section id="discipline-brand" aria-labelledby="branding-heading" style={{
      padding: "80px clamp(20px, 4vw, 36px) clamp(100px, 15vw, 160px)",
      background: P.paperHi,
      borderTop: `1px solid ${P.hair}`,
    }}>
      <div id="discipline-branding" style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <SectionHeader
          num="01" kicker="Brand & Packaging"
          heading="The thing people"
          emphasis="photograph first."
          description="Identity systems, naming, and packaging for the brands on your shelf — and the ones about to be. Every surface treated like editorial design: composed, considered, crafted to earn a second look."
        />

        <div className="sv-branding-grid">
          {pieces.map((p, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <PackagingTile {...p} scroll={scroll} />
            </FadeUp>
          ))}
        </div>

        <Deliverables
          items={["Strategy", "Naming", "Logos", "Typography", "Packaging", "Print", "Guidelines"]}
          link="See all branding work"
        />
      </div>
    </section>
  );
}

function PackagingTile({ Asset, label, note, aspect, plx, scroll }) {
  const [hov, setHov] = useState(false);
  return (
    <figure
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative", overflow: "hidden",
        aspectRatio: aspect, margin: 0,
        transform: `translateY(${scroll * plx}px)`,
      }}
    >
      <div style={{
        width: "100%", height: "100%",
        transform: hov ? "scale(1.03)" : "scale(1)",
        transition: "transform 1.2s cubic-bezier(0.22,1,0.36,1)",
      }}>
        <Asset label={label.toUpperCase().split(" ")[0]} />
      </div>
      <figcaption style={{
        position: "absolute", bottom: "20px", left: "20px", right: "20px",
        display: "flex", justifyContent: "space-between", alignItems: "end",
        color: P.ink, pointerEvents: "none",
        transform: hov ? "translateY(0)" : "translateY(4px)",
        opacity: hov ? 1 : 0.85,
        transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
      }}>
        <div style={{
          background: "rgba(245,239,225,0.92)", padding: "8px 12px",
          backdropFilter: "blur(8px)",
        }}>
          <div className="type-serif-emphasis" style={{ fontSize: "clamp(15px, 1.5vw, 18px)", letterSpacing: "-0.01em", fontWeight: 500 }}>
            {label}
          </div>
          <div className="type-caption" style={{ fontSize: "9px", marginTop: "2px" }}>{note}</div>
        </div>
      </figcaption>
    </figure>
  );
}

/* ════════════════════════════════════════════════════════════
   § 02 — SOCIAL MEDIA
   Mixes SVG designed posts with real Paxmeet media uploads
   ════════════════════════════════════════════════════════════ */
export function DisciplineSocial() {
  const feedTiles = [
    { kind: "svg", el: <AssetPostBigType line1="Quiet" line2="mornings." kicker="ODE · SS26" /> },
    { kind: "svg", el: <AssetPostQuote /> },
    { kind: "img", src: "/media/social/still-alone.jpg", alt: "Social feed post: Surrounded by people — still alone?" },
    { kind: "svg", el: <AssetPostGrid /> },
    { kind: "svg", el: <AssetPostProduct brand="HOURLIGHT" tagline="Room temperature." /> },
    { kind: "svg", el: <AssetPostEditorial /> },
    { kind: "img", src: "/media/social/online-to-offline.jpg", alt: "Social feed post: Bringing socializing from online to offline" },
    { kind: "svg", el: <AssetPostProduct brand="KINDRED" tagline="Made slowly." bg="#4A3E2A" /> },
    { kind: "svg", el: <AssetPostMetric value="47K" label="NEW SUBSCRIBERS" sub="Fieldnote, 9 months" bg={P.paperDk} /> },
  ];

  const stories = [
    { brand: "KINDRED", text: "Behind the scent." },
    { brand: "HOURLIGHT", text: "The 40-hour burn." },
    { brand: "FIELDNOTE", text: "Harvest Wednesday." },
    { brand: "ODE", text: "The morning ritual." },
  ];

  return (
    <section id="discipline-social" aria-labelledby="social-heading" style={{
      padding: "clamp(80px, 12vw, 140px) clamp(20px, 4vw, 36px)",
      borderTop: `1px solid ${P.hair}`,
    }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <SectionHeader
          num="02" kicker="Social & Content Systems"
          heading="A feed that reads like a"
          emphasis="magazine you'd subscribe to."
          description="Strategy, calendars, grid systems, story frameworks, reels — built to compound. We design the post, the series, and the rhythm that turns followers into loyal readers."
        />

        <div className="sv-social-layout">
          <FadeUp delay={0.1}>
            <div>
              <p className="type-caption" style={{ marginBottom: "16px" }}>Stories · Today</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {stories.map((s, i) => (
                  <div key={i} style={{ aspectRatio: "9/16", width: "clamp(140px, 16vw, 180px)", overflow: "hidden" }}>
                    <AssetStory brand={s.brand} text={s.text} />
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div>
              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "8px",
              }}>
                <p className="type-caption">The Feed — @kindred.apothecary</p>
                <div className="type-mono" style={{
                  fontSize: "10px", color: P.dim, letterSpacing: "0.12em",
                  display: "flex", gap: "12px",
                }}>
                  <span>47.2K FOLLOWERS</span>
                  <span aria-hidden="true">·</span>
                  <span>+142% / 90D</span>
                </div>
              </div>
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
                gap: "4px",
              }}>
                {feedTiles.map((tile, i) => (
                  <div key={i} style={{ aspectRatio: "1/1", overflow: "hidden", background: P.paperDk }}>
                    {tile.kind === "img" ? (
                      <img src={tile.src} alt={tile.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                    ) : tile.el}
                  </div>
                ))}
              </div>
              <div style={{
                marginTop: "16px", display: "flex",
                justifyContent: "space-between", alignItems: "center",
                padding: "14px 16px", background: P.paperHi,
                flexWrap: "wrap", gap: "8px",
              }}>
                <span className="type-mono" style={{ fontSize: "10px", color: P.muted, letterSpacing: "0.12em" }}>
                  9 OF 248 POSTS · LAST UPDATE 4 HRS AGO
                </span>
                <span className="type-mono" style={{ fontSize: "10px", color: P.gold, letterSpacing: "0.12em" }}>
                  POSTING 5×/WEEK · MON–FRI
                </span>
              </div>
            </div>
          </FadeUp>
        </div>

        <Deliverables
          items={["Strategy", "Calendar", "Grid design", "Reels", "Stories", "Community", "Reporting"]}
          link="See all social work"
        />
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   § 03 — DIGITAL PRODUCT
   Real: Annatar forge screenshot + app-demo.mp4
   ════════════════════════════════════════════════════════════ */
export function DisciplineDigital() {
  const videoRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = videoRef.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => {
      setInView(e.isIntersecting);
      if (e.isIntersecting) el.play().catch(() => {});
      else el.pause();
    }, { threshold: 0.4 });
    o.observe(el);
    return () => o.disconnect();
  }, []);

  return (
    <section id="discipline-digital" aria-labelledby="digital-heading" style={{
      padding: "clamp(80px, 12vw, 140px) clamp(20px, 4vw, 36px)",
      background: P.paperHi, borderTop: `1px solid ${P.hair}`,
    }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <SectionHeader
          num="03" kicker="Digital Product"
          heading="Websites and apps"
          emphasis="that hold their weight."
          description="Brand sites, commerce, and consumer apps built with the same care as the brand itself. Bespoke Next.js, Shopify, iOS and Android — every detail thought through, because the screen is where the brand lives now."
        />

        <div className="sv-digital-layout">
          <FadeUp delay={0.1}>
            <figure style={{ margin: 0 }}>
              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "8px",
              }}>
                <p className="type-caption">Web — Verana Studios</p>
                <span className="type-mono" style={{ fontSize: "10px", color: P.dim, letterSpacing: "0.12em" }}>
                  DESKTOP · 1440PX
                </span>
              </div>
              <div style={{
                aspectRatio: "16/10", overflow: "hidden",
                boxShadow: "0 30px 60px rgba(26,22,19,0.12)", background: P.ink,
              }}>
                <img
                  src="/media/web/annatar-forge.jpg"
                  alt="Verana Studios — custom Next.js website with custom CMS and editorial product layouts"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <figcaption className="type-serif-emphasis" style={{
                fontSize: "clamp(13px, 1.2vw, 15px)", color: P.muted, marginTop: "12px", fontWeight: 400,
              }}>
                A site as considered as the rooms they design. Next.js 14, custom CMS, 100/100 Lighthouse.
              </figcaption>
            </figure>
          </FadeUp>

          <FadeUp delay={0.2}>
            <figure style={{ margin: 0 }}>
              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "8px",
              }}>
                <p className="type-caption">App — Lumen</p>
                <span className="type-mono" style={{ fontSize: "10px", color: P.dim, letterSpacing: "0.12em" }}>
                  iOS · LIVE DEMO
                </span>
              </div>
              <div style={{
                aspectRatio: "9/19.5",
                maxWidth: "min(380px, 100%)",
                margin: "0 auto",
                background: "#1A1612",
                borderRadius: "42px",
                padding: "12px",
                filter: "drop-shadow(0 30px 40px rgba(26,22,19,0.25))",
                position: "relative",
              }}>
                <div style={{
                  width: "100%", height: "100%",
                  background: "#000", borderRadius: "32px",
                  overflow: "hidden", position: "relative",
                }}>
                  <video
                    ref={videoRef}
                    src="/media/video/app-demo.mp4"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="Lumen app demo — macro-tracker walkthrough"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  {/* Notch */}
                  <div style={{
                    position: "absolute", top: "8px", left: "50%",
                    transform: "translateX(-50%)",
                    width: "90px", height: "22px",
                    background: "#0A0805", borderRadius: "14px",
                  }} aria-hidden="true" />
                </div>
              </div>
              <figcaption className="type-serif-emphasis" style={{
                fontSize: "clamp(13px, 1.2vw, 15px)", color: P.muted, marginTop: "12px",
                textAlign: "center", fontWeight: 400,
              }}>
                Macro-tracker for people who hate macro-tracking. 4.8★, 140K downloads.
              </figcaption>
            </figure>
          </FadeUp>
        </div>

        <FadeUp delay={0.3}>
          <div style={{
            marginTop: "60px", padding: "24px clamp(20px, 3vw, 32px)",
            background: P.paper, border: `1px solid ${P.hair}`,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "clamp(20px, 3vw, 32px)",
          }}>
            {[
              { k: "Stack", v: "Next.js · React · Swift" },
              { k: "Commerce", v: "Shopify · Stripe · Razorpay" },
              { k: "CMS", v: "Sanity · Contentful · Custom" },
              { k: "Hosting", v: "Vercel · AWS · Railway" },
            ].map((c) => (
              <div key={c.k}>
                <p className="type-caption" style={{ fontSize: "9px", marginBottom: "8px" }}>{c.k}</p>
                <p style={{ fontFamily: "'Fraunces', serif", fontSize: "14px", color: P.ink, fontWeight: 400 }}>{c.v}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        <Deliverables
          items={["Web design", "Commerce", "iOS", "Android", "Design systems", "CMS", "Performance"]}
          link="See all digital work"
        />
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════
   § 04 — CONTENT, PHOTO & FILM
   ════════════════════════════════════════════════════════════ */
export function DisciplineContent() {
  const tiles = [
    { variant: "A", client: "Atelier Noon", kind: "SS26 CAMPAIGN", span: { col: "span 2", row: "span 2" } },
    { variant: "B", client: "Ode Skincare", kind: "PRODUCT FILM", span: { col: "span 2", row: "span 1" } },
    { variant: "C", client: "Fieldnote", kind: "HARVEST SERIES", span: { col: "span 2", row: "span 1" } },
    { variant: "D", client: "North Meridian", kind: "BRAND FILM", span: { col: "span 2", row: "span 1" } },
    { variant: "E", client: "Kindred & Co.", kind: "HERO FILM", span: { col: "span 2", row: "span 2" } },
    { variant: "F", client: "Hourlight", kind: "STILL LIFE", span: { col: "span 2", row: "span 1" } },
  ];

  return (
    <section id="discipline-content" aria-labelledby="content-heading" style={{
      padding: "clamp(80px, 12vw, 140px) clamp(20px, 4vw, 36px)",
      borderTop: `1px solid ${P.hair}`,
    }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <SectionHeader
          num="04" kicker="Content, Photo & Film"
          heading="The campaign we"
          emphasis="designed, we shot."
          description="Photography, film, motion, and sound design in-house — so the work looks and sounds like one idea. No sub-contracting the art direction halfway through."
        />

        <div className="sv-content-grid">
          {tiles.map((t, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <FilmTile {...t} />
            </FadeUp>
          ))}
        </div>

        <Deliverables
          items={["Art direction", "Photography", "Film", "Motion", "Sound", "Edit", "Post"]}
          link="See the reel"
        />
      </div>
    </section>
  );
}

function FilmTile({ variant, client, kind, span }) {
  const [hov, setHov] = useState(false);
  return (
    <figure
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        gridColumn: span.col, gridRow: span.row,
        position: "relative", overflow: "hidden", margin: 0,
        width: "100%", height: "100%", background: P.ink,
      }}
    >
      <div style={{
        width: "100%", height: "100%",
        transform: hov ? "scale(1.04)" : "scale(1)",
        transition: "transform 1.4s cubic-bezier(0.22,1,0.36,1), filter 0.6s",
        filter: hov ? "brightness(1)" : "brightness(0.92)",
      }}>
        <AssetFilmStill variant={variant} caption={kind} />
      </div>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.55) 100%)",
      }} />
      <div style={{
        position: "absolute", top: "14px", left: "14px",
        display: "flex", alignItems: "center", gap: "6px",
      }}>
        <span style={{ width: "6px", height: "6px", background: "#E5484D", borderRadius: "50%", animation: "softPulse 2s ease-in-out infinite" }} />
        <span className="type-mono" style={{ fontSize: "9px", color: P.paper, letterSpacing: "0.14em", opacity: 0.85, textTransform: "uppercase" }}>
          Live
        </span>
      </div>
      <figcaption style={{ position: "absolute", bottom: "14px", left: "14px", right: "14px", color: P.paper }}>
        <div className="type-serif-emphasis" style={{
          fontSize: "clamp(16px, 1.8vw, 22px)", letterSpacing: "-0.01em", fontWeight: 500,
          textShadow: "0 2px 8px rgba(0,0,0,0.5)",
        }}>{client}</div>
        <div className="type-caption" style={{ fontSize: "9px", color: P.paper, opacity: 0.8, marginTop: "2px" }}>
          {kind}
        </div>
      </figcaption>
    </figure>
  );
}

/* ════════════════════════════════════════════════════════════
   § 05 — INFLUENCE & CREATORS
   ════════════════════════════════════════════════════════════ */
export function DisciplineInfluence() {
  const reels = [
    { scene: "A", creator: "@anika.r", handle: "REEL · 00:32", product: "Kindred Serum 01", views: "142K", engagement: "8.9%" },
    { scene: "B", creator: "@tara.jo", handle: "REEL · 00:28", product: "Ode Vitamin C", views: "98K", engagement: "11.2%" },
    { scene: "C", creator: "@devfit",  handle: "REEL · 00:45", product: "Lumen App", views: "215K", engagement: "7.4%" },
    { scene: "D", creator: "@theroom", handle: "REEL · 00:36", product: "Verana Studios", views: "76K", engagement: "9.8%" },
  ];

  return (
    <section id="discipline-influence" aria-labelledby="influence-heading" style={{
      padding: "clamp(80px, 12vw, 140px) clamp(20px, 4vw, 36px)",
      background: P.paperHi, borderTop: `1px solid ${P.hair}`,
    }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <SectionHeader
          num="05" kicker="Influence & Creators"
          heading="The right voice,"
          emphasis="at the right moment."
          description="We cast the room and shape the narrative. A small, considered creator programme that reads as recommendation — not advertising. Four recent campaigns below."
        />

        <div className="sv-reels-grid">
          {reels.map((r, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <ReelTile {...r} />
            </FadeUp>
          ))}
        </div>

        <Deliverables
          items={["Casting", "Briefing", "Production", "Approvals", "Seeding", "Reporting", "Retention"]}
          link="See creator roster"
        />
      </div>
    </section>
  );
}

function ReelTile({ scene, creator, handle, product, views, engagement }) {
  const [hov, setHov] = useState(false);
  return (
    <figure onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ margin: 0 }}>
      <div style={{
        position: "relative", overflow: "hidden",
        aspectRatio: "9/16",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
      }}>
        <AssetReel scene={scene} creator={creator} handle={handle} />
      </div>
      <figcaption style={{
        marginTop: "16px", display: "flex",
        justifyContent: "space-between", alignItems: "start", gap: "12px", flexWrap: "wrap",
      }}>
        <div>
          <p className="type-serif-emphasis" style={{ fontSize: "clamp(13px, 1.3vw, 16px)", color: P.ink, fontWeight: 500 }}>
            {product}
          </p>
          <p className="type-caption" style={{ fontSize: "9px", marginTop: "4px" }}>{creator}</p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: "12px", color: P.ink, fontWeight: 500 }}>
            {views} · <span style={{ color: P.gold }}>{engagement}</span>
          </p>
          <p className="type-caption" style={{ fontSize: "9px", marginTop: "2px" }}>VIEWS · ENG</p>
        </div>
      </figcaption>
    </figure>
  );
}

/* ════════════════════════════════════════════════════════════
   § 06 — OFFLINE / OUT-OF-HOME
   ════════════════════════════════════════════════════════════ */
export function DisciplineOffline() {
  return (
    <section id="discipline-offline" aria-labelledby="offline-heading" style={{
      padding: "clamp(80px, 12vw, 140px) clamp(20px, 4vw, 36px)",
      borderTop: `1px solid ${P.hair}`,
    }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <SectionHeader
          num="06" kicker="Offline & Out-of-Home"
          heading="The moment your brand"
          emphasis="steps off the screen."
          description="Billboards, storefronts, menus, event design, print editorial, wayfinding. We treat every physical surface like a spread — the street is the one feed you can't scroll past."
        />

        <FadeUp delay={0.1}>
          <figure className="sv-billboard" style={{
            margin: "0 0 20px",
            position: "relative", overflow: "hidden",
            aspectRatio: "21/9", background: P.ink,
          }}>
            <AssetBillboard brand="HOURLIGHT" headline={"Room\ntemperature."} />
            <div style={{
              position: "absolute", top: "clamp(16px, 2vw, 24px)", left: "clamp(16px, 2vw, 24px)", right: "clamp(16px, 2vw, 24px)",
              display: "flex", justifyContent: "space-between", alignItems: "start",
              color: P.paper, pointerEvents: "none", flexWrap: "wrap", gap: "8px",
            }}>
              <div className="type-mono" style={{
                fontSize: "10px", letterSpacing: "0.14em",
                textTransform: "uppercase", opacity: 0.7,
                display: "flex", alignItems: "center", gap: "8px",
              }}>
                <span style={{ width: "6px", height: "6px", background: "#9FE89C", borderRadius: "50%", animation: "softPulse 2.4s ease-in-out infinite" }} />
                Live · Campaign SV/2501-OOH
              </div>
              <div className="type-mono" style={{
                fontSize: "10px", letterSpacing: "0.12em",
                textTransform: "uppercase", opacity: 0.55, textAlign: "right",
              }}>
                48 SITES · 3 CITIES · 12.4M IMPRESSIONS
              </div>
            </div>
          </figure>
        </FadeUp>

        <div className="sv-offline-3up">
          <FadeUp delay={0.15}>
            <OfflineTile format="STORE SIGNAGE" label="Kindred Apothecary" city="Bandra, Mumbai · 2025"
              Asset={() => <AssetSignage brand="KINDRED & CO." context="BANDRA · STORE FRONT" />} aspect="4/3" />
          </FadeUp>
          <FadeUp delay={0.2}>
            <OfflineTile format="MENU SYSTEM" label="North Meridian" city="Specialty Coffee · 4 locations"
              Asset={() => <AssetMenu restaurant="NORTH MERIDIAN" />} aspect="3/4" />
          </FadeUp>
          <FadeUp delay={0.25}>
            <OfflineTile format="WILD POSTING" label="Atelier Noon" city="SS26 · 62 sites"
              Asset={() => <AssetPoster brand="ATELIER NOON" season="SS26" />} aspect="3/4" />
          </FadeUp>
        </div>

        <div className="sv-offline-2up">
          <FadeUp delay={0.3}>
            <OfflineTile format="EVENT DESIGN" label="Fieldnote Harvest Market" city="Alibaug · 14,000 attendees"
              Asset={() => <AssetEventCollateral />} aspect="16/10" />
          </FadeUp>
          <FadeUp delay={0.35}>
            <OfflineTile format="PRINT EDITORIAL" label="Ode Skincare" city="14-page ritual manual"
              Asset={() => <AssetPrint subtitle="Ritual Manual" />} aspect="16/10" />
          </FadeUp>
        </div>

        <Deliverables
          items={["OOH", "Billboards", "Menus", "Signage", "Events", "Print", "Wayfinding"]}
          link="See all OOH work"
        />
      </div>
    </section>
  );
}

function OfflineTile({ format, label, city, Asset, aspect }) {
  const [hov, setHov] = useState(false);
  return (
    <figure onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ margin: 0 }}>
      <div style={{ position: "relative", overflow: "hidden", aspectRatio: aspect, background: P.ink }}>
        <div style={{
          width: "100%", height: "100%",
          transform: hov ? "scale(1.03)" : "scale(1)",
          transition: "transform 1.4s cubic-bezier(0.22,1,0.36,1)",
        }}>
          <Asset />
        </div>
        <div style={{
          position: "absolute", top: "14px", left: "14px",
          padding: "6px 10px", background: "rgba(245,239,225,0.95)",
          backdropFilter: "blur(6px)",
        }}>
          <span className="type-mono" style={{
            fontSize: "9px", color: P.ink, letterSpacing: "0.14em",
            textTransform: "uppercase", fontWeight: 500,
          }}>{format}</span>
        </div>
      </div>
      <figcaption style={{
        marginTop: "14px",
        display: "flex", justifyContent: "space-between",
        alignItems: "baseline", gap: "8px", flexWrap: "wrap",
      }}>
        <p className="type-serif-emphasis" style={{ fontSize: "clamp(15px, 1.5vw, 18px)", color: P.ink, fontWeight: 500 }}>
          {label}
        </p>
        <p className="type-caption" style={{ fontSize: "10px" }}>{city}</p>
      </figcaption>
    </figure>
  );
}
