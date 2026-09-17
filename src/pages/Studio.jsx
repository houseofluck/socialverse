import React from 'react';
import { DCLogic, useDC } from '../lib/dc.js';
import { cssText } from '../lib/cssText.js';

class Component extends DCLogic {
  renderVals() {
    return {
      megaLinks: [
        { t: 'Brand Solutions', d: 'Positioning & identity', href: 'Brandsolutions.html', sq: 'width:10px; height:10px; flex:none; background:#ab905c;' },
        { t: 'Social Solutions', d: 'Content & community', href: 'Socialsolutions.html', sq: 'width:10px; height:10px; flex:none; background:#ff8fab;' },
        { t: 'Media Solutions', d: 'Planning & buying', href: 'Mediasolutions.html', sq: 'width:10px; height:10px; flex:none; background:#2ec4b6;' },
        { t: 'Tech Solutions', d: 'Web, apps, commerce', href: 'Techsolutions.html', sq: 'width:10px; height:10px; flex:none; background:#1d1a14;' },
        { t: 'Film Solutions', d: 'Direction to post', href: 'Filmsolutions.html', sq: 'width:10px; height:10px; flex:none; background:#ff6b35;' }
      ],
      rules: [
        { n: '01', t: 'No jerks. Ever.', c: 'Kindness is a hiring criterion, not a perk. Brilliant and unkind gets a polite no.', tile: 'repeating-conic-gradient(#ffd23f 0 25%, #14110c 0 50%) 0 0 / 48px 48px' },
        { n: '02', t: 'Show, don\u2019t tell.', c: 'Prototypes over promises. If it can be demoed, it gets demoed — decks stay under ten slides.', tile: '#2ec4b6 radial-gradient(#f6f3ec 26%, transparent 28%) 0 0 / 42px 42px' },
        { n: '03', t: 'Ship it scared.', c: 'The work that ends up winning felt risky the night before. We publish, then refine in the open.', tile: 'repeating-linear-gradient(45deg, #ff8fab 0 20px, #f6f3ec 20px 40px, #14110c 40px 42px)' },
        { n: '04', t: 'Chai at four.', c: 'Every day, no exceptions. Laptops close, the arguments continue over biscuits.', tile: '#f6f3ec radial-gradient(circle at 50% 100%, #ff6b35 0 34%, #14110c 35% 58%, transparent 59%) 0 0 / 56px 56px' }
      ],
      team: [
        { slot: 'team-aisha', ph: 'Portrait — Aisha', img: 'work/creatives/creative-02.jpg', name: 'Aisha Rao', role: 'Chief Creative Officer', bio: 'Fifteen years across brand and film.' },
        { slot: 'team-dev', ph: 'Portrait — Dev', img: 'work/creatives/creative-05.jpg', name: 'Dev Malhotra', role: 'Head of Technology', bio: 'Systems, commerce and AI tooling.' },
        { slot: 'team-sana', ph: 'Portrait — Sana', img: 'work/creatives/showcase-03.jpg', name: 'Sana Qureshi', role: 'ECD, Social', bio: 'Editorial-grade social, at scale.' },
        { slot: 'team-rohan', ph: 'Portrait — Rohan', img: 'work/creatives/showcase-04.jpg', name: 'Rohan Iyer', role: 'Head of Media', bio: 'Full-funnel planning and buying.' },
        { slot: 'team-mira', ph: 'Portrait — Mira', img: 'work/creatives/showcase-06.jpg', name: 'Mira D\u2019Souza', role: 'Head of Film', bio: 'Director; 120+ commissioned films.' },
        { slot: 'team-kabir', ph: 'Portrait — Kabir', img: 'work/creatives/creative-07.jpg', name: 'Kabir Shah', role: 'Strategy Partner', bio: 'Research, positioning, growth.' }
      ],
      roles: [
        { t: 'Senior Art Director', team: 'Brand', city: 'Mumbai', mail: 'mailto:people@thesocialverse.co?subject=Senior%20Art%20Director' },
        { t: 'Creative Technologist', team: 'Tech', city: 'Remote-first', mail: 'mailto:people@thesocialverse.co?subject=Creative%20Technologist' },
        { t: 'Performance Lead', team: 'Media', city: 'Bengaluru', mail: 'mailto:people@thesocialverse.co?subject=Performance%20Lead' },
        { t: 'Motion Designer', team: 'Film', city: 'Mumbai', mail: 'mailto:people@thesocialverse.co?subject=Motion%20Designer' }
      ]
    };
  }
  componentDidMount() { this._c = []; this.boot(); }
  componentWillUnmount() {
    (this._c || []).forEach(f => { try { f() } catch (e) { } });
    try { this.lines && this.lines.dispose() } catch (e) { }
  }
  on(t, ev, fn, o) { t.addEventListener(ev, fn, o); this._c.push(() => t.removeEventListener(ev, fn, o)); }
  async boot() {
    const P = this.props || {};
    const calm = (P.motion ?? 'full') === 'calm' || matchMedia('(prefers-reduced-motion: reduce)').matches;
    const $ = id => document.getElementById(id);
    // page wipe
    const wipe = $('wipe');
    if (wipe) {
      if (sessionStorage.getItem('tsv_wipe') === '1') {
        sessionStorage.removeItem('tsv_wipe');
        wipe.style.transform = 'translateX(0)';
        requestAnimationFrame(() => requestAnimationFrame(() => {
          wipe.style.transition = 'transform .6s cubic-bezier(.76,0,.24,1)';
          wipe.style.transform = 'translateX(-108%)';
        }));
      }
      this.on(document, 'click', e => {
        const a = e.target.closest && e.target.closest('a[href$=".html"]');
        if (!a || calm || e.metaKey || e.ctrlKey || a.target === '_blank') return;
        const href = a.getAttribute('href');
        if (!href || href.startsWith('#')) return;
        e.preventDefault();
        try { sessionStorage.setItem('tsv_wipe', '1'); } catch (err) { }
        wipe.style.transition = 'transform .55s cubic-bezier(.76,0,.24,1)';
        wipe.style.transform = 'translateX(0)';
        setTimeout(() => { location.href = href; }, 560);
      });
    }
    // footer reveal + clocks
    const sheet = $('sheet'), foot = $('bigFoot'), space = $('footSpace');
    const fitFoot = () => {
      if (!foot) return;
      foot.style.position = 'fixed';
      const tooTall = innerWidth < 720 || foot.offsetHeight > innerHeight * 0.92;
      foot.style.position = tooTall ? 'static' : 'fixed';
      if (space) space.style.height = tooTall ? '0px' : foot.offsetHeight + 'px';
      if (sheet) sheet.style.marginBottom = '0px';
    };
    fitFoot(); this.on(window, 'resize', fitFoot); setTimeout(fitFoot, 600); setTimeout(fitFoot, 1600);
    const clocks = [...document.querySelectorAll('[data-clock]')];
    const setClocks = () => clocks.forEach(el => {
      try { el.textContent = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone: el.getAttribute('data-clock') }).format(new Date()); } catch (e) { }
    });
    setClocks();
    const ci = setInterval(setClocks, 30000);
    this._c.push(() => clearInterval(ci));
    // mega menu
    const nav = $('nav'), mega = $('mega'), megaBtn = $('megaBtn'), caret = $('megaCaret');
    let megaOpen = false, megaT = 0;
    const setMega = open => {
      megaOpen = open;
      if (!mega) return;
      mega.style.opacity = open ? '1' : '0';
      mega.style.transform = open ? 'none' : 'translateY(-10px)';
      mega.style.pointerEvents = open ? 'auto' : 'none';
      if (caret) caret.style.transform = open ? 'rotate(180deg)' : 'none';
    };
    if (megaBtn && mega && nav) {
      let openY = 0;
      const openMega = () => { clearTimeout(megaT); openY = scrollY; setMega(true); };
      this.on(megaBtn, 'pointerenter', openMega);
      this.on(megaBtn, 'click', () => {
        if (!megaOpen) { openMega(); return; }
        setMega(false);
        try { sessionStorage.setItem('tsv_wipe', '1'); } catch (err) { }
        const w = document.getElementById('wipe');
        if (w) {
          w.style.transition = 'transform .55s cubic-bezier(.76,0,.24,1)';
          w.style.transform = 'translateX(0)';
          setTimeout(() => { location.href = 'solutions.html'; }, 560);
        } else location.href = 'solutions.html';
      });
      this.on(nav, 'pointerleave', () => { megaT = setTimeout(() => setMega(false), 300); });
      this.on(mega, 'pointerenter', () => clearTimeout(megaT));
      this.on(window, 'scroll', () => { if (megaOpen && Math.abs(scrollY - openY) > 48) setMega(false); }, { passive: true });
    }
    // videos
    document.querySelectorAll('video[data-vsrc]').forEach(v => { if (!v.getAttribute('src')) { try { v.src = v.getAttribute('data-vsrc'); } catch (e) { } } });
    const kick = () => document.querySelectorAll('video[data-auto]').forEach(v => { v.muted = true; if (v.paused) { const p = v.play(); if (p) p.catch(() => { }); } });
    kick();
    let vAlive = true;
    const vPoll = () => {
      if (!vAlive) return;
      document.querySelectorAll('video[data-auto]').forEach(v => {
        const r = v.getBoundingClientRect();
        const vis = r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth;
        if (vis && v.paused) { const p = v.play(); if (p) p.catch(() => { v.muted = true; }); }
        else if (!vis && !v.paused) v.pause();
      });
      setTimeout(() => requestAnimationFrame(vPoll), 400);
    };
    requestAnimationFrame(vPoll);
    this._c.push(() => { vAlive = false; });
    // reveals
    const mls = [...document.querySelectorAll('[data-ml]')];
    mls.forEach(el => { el.style.transform = 'translateY(115%)'; });
    const mrev = el => {
      const d = (+el.getAttribute('data-mld') || 0) * 110;
      el.style.transition = `transform 1.05s cubic-bezier(.19,1,.22,1) ${d}ms`;
      requestAnimationFrame(() => requestAnimationFrame(() => { el.style.transform = 'none'; }));
    };
    const mio = new IntersectionObserver(es => es.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.querySelectorAll('[data-ml]').forEach(mrev);
      mio.unobserve(en.target);
    }), { threshold: .15 });
    const mhosts = new Set();
    mls.forEach(el => { const h = el.closest('h1,h2') || el.parentElement; if (h) mhosts.add(h); });
    mhosts.forEach(h => mio.observe(h));
    this._c.push(() => mio.disconnect());
    const rvs = [...document.querySelectorAll('[data-rv]')];
    rvs.forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(16px)'; });
    const io = new IntersectionObserver(es => es.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target, d = (+el.getAttribute('data-rvd') || 0) * 110;
      el.style.transition = `opacity .9s cubic-bezier(.22,1,.36,1) ${d}ms, transform .9s cubic-bezier(.22,1,.36,1) ${d}ms`;
      el.style.opacity = '1'; el.style.transform = 'none';
      io.unobserve(el);
    }), { threshold: .12 });
    rvs.forEach(el => io.observe(el));
    this._c.push(() => io.disconnect());
    // card hovers
    document.querySelectorAll('[data-case]').forEach(cs => {
      const z = cs.querySelector('[data-zoom]');
      this.on(cs, 'pointerenter', () => { if (z && !calm) z.style.transform = 'scale(1.05)'; });
      this.on(cs, 'pointerleave', () => { if (z) z.style.transform = 'scale(1)'; });
    });
    // magnetic CTAs
    if (!calm && matchMedia('(pointer: fine)').matches) {
      document.querySelectorAll('[data-mag]').forEach(el => {
        const mv = e => { const b = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - b.left - b.width / 2) * .2}px, ${(e.clientY - b.top - b.height / 2) * .2}px)`; };
        const lv = () => { el.style.transition = 'transform .4s cubic-bezier(.34,1.56,.64,1), background .25s'; el.style.transform = 'none'; setTimeout(() => { el.style.transition = 'background .25s'; }, 400); };
        this.on(el, 'pointermove', mv); this.on(el, 'pointerleave', lv);
      });
    }
    // line wave hero
    import('../lib/three-fx.js').then(async fx => {
      const lc = $('lineCanvas');
      if (lc) {
        this.lines = await fx.lineWave(lc, { calm });
        const hs = $('lineHero');
        this.on(hs, 'pointermove', e => this.lines.setPointer(e.clientX, e.clientY));
        this.on(hs, 'pointerleave', () => this.lines.clearPointer());
      }
    }).catch(err => console.warn('3D disabled:', err));
  }
}

export default function StudioPage() {
  const vals = useDC(Component);
  return (
    <>





<div id="wipe" aria-hidden="true" style={{"position": "fixed", "inset": "0", "zIndex": "600", "pointerEvents": "none", "transform": "translateX(108%)", "display": "flex"}}>
  <div style={{"width": "34%", "height": "100%", "background": "#0f0d0a"}}></div>
  <div style={{"flex": "1", "height": "100%", "display": "flex", "flexDirection": "column"}}>
    <div style={{"flex": "1", "background": "repeating-linear-gradient(45deg, #ffd23f 0 38px, #ff6b35 38px 76px, #ff8fab 76px 114px, #2ec4b6 114px 152px, #0f0d0a 152px 190px)"}}></div>
    <div style={{"flex": "1", "background": "repeating-linear-gradient(-45deg, #ffd23f 0 38px, #ff6b35 38px 76px, #ff8fab 76px 114px, #2ec4b6 114px 152px, #0f0d0a 152px 190px)"}}></div>
  </div>
</div>

<div id="sheet" style={{"position": "relative", "zIndex": "2", "minHeight": "100vh", "background": "var(--color-bg)", "borderRadius": "0 0 28px 28px", "boxShadow": "0 30px 60px rgba(0,0,0,.35)"}}>

<nav id="nav" data-screen-label="Nav" style={{"position": "sticky", "top": "0", "zIndex": "90", "background": "rgba(246,243,236,.92)", "backdropFilter": "blur(14px)", "borderBottom": "2px solid var(--color-divider)"}}>
  <div style={{"display": "flex", "alignItems": "center", "gap": "clamp(16px,2.6vw,36px)", "padding": "18px clamp(24px,6vw,96px)"}}>
    <a href="index.html" style={{"display": "flex", "alignItems": "center", "gap": "11px", "textDecoration": "none", "marginRight": "auto"}}>
      
      <img src="logo-ink.png" alt="The Social Verse" width="351" height="236" style={{"display": "block", "height": "clamp(28px,3vw,36px)", "width": "auto"}} />
    </a>
    <div style={{"display": "flex", "alignItems": "center", "gap": "clamp(16px,2.6vw,36px)", "marginRight": "auto"}}>
      <a href="work.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(var(--color-accent-600),var(--color-accent-600))", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">Work</a>
      <div id="megaWrap" style={{"position": "static"}}>
        <button id="megaBtn" type="button" style={{"border": "0", "background": "none", "font": "inherit", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "padding": "0 0 2px", "display": "inline-flex", "alignItems": "center", "gap": "6px"}} className="hv-2">Solutions <span id="megaCaret" style={{"fontSize": "10px", "transition": "transform .3s"}}>▾</span></button>
      </div>
      <a href="studio.html" aria-current="page" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-accent-700)", "borderBottom": "2px solid var(--color-accent)", "paddingBottom": "2px"}}>Studio</a>
      <a href="journal.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(var(--color-accent-600),var(--color-accent-600))", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">Journal</a>
      <a href="contact.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(var(--color-accent-600),var(--color-accent-600))", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">Contact</a>
    </div>
    <a data-mag href="contact.html" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "letterSpacing": ".04em", "color": "var(--color-bg)", "background": "#1d1a14", "padding": "11px 20px", "borderRadius": "999px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "background .3s"}} className="hv-3">Contact us →</a>
  </div>
  <div id="mega" style={{"position": "absolute", "left": "0", "right": "0", "top": "100%", "background": "var(--color-bg)", "borderBottom": "2px solid var(--color-divider)", "boxShadow": "0 24px 48px rgba(43,40,32,.18)", "opacity": "0", "transform": "translateY(-10px)", "pointerEvents": "none", "transition": "opacity .35s, transform .35s"}}>
    <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(280px,1fr))", "gap": "clamp(24px,4vw,64px)", "padding": "clamp(24px,3vw,44px) clamp(24px,6vw,96px)"}}>
      <div style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
        {vals.megaLinks.map((ml, $index) => (<React.Fragment key={$index}>
          <a href={ml.href} style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "14px", "textDecoration": "none", "padding": "12px 8px", "borderBottom": "2px solid var(--color-divider)", "transition": "background .25s, padding-left .25s"}} className="hv-4">
            <span style={{"display": "flex", "alignItems": "center", "gap": "12px"}}><span style={cssText(ml.sq)}></span><span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(17px,1.6vw,22px)", "letterSpacing": "-.01em", "color": "var(--color-text)"}}>{ml.t}</span></span>
            <span style={{"fontSize": "11px", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "color-mix(in srgb, var(--color-text) 50%, transparent)"}}>{ml.d}</span>
          </a>
        </React.Fragment>))}
      </div>
      <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "18px", "alignContent": "start"}}>
        <a href="case-olive-heights.html" style={{"textDecoration": "none"}}>
          <span style={{"display": "block", "overflow": "hidden", "border": "2px solid var(--color-divider)"}}><span style={{"display": "block", "aspectRatio": "16/10", "background": "var(--color-neutral-200)"}}><image-slot id="case-feat" shape="rect" placeholder="Featured: Olive Heights" src="work/grids/olive-heights-grid.jpg"></image-slot></span></span>
          <span style={{"display": "block", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "14px", "marginTop": "10px", "color": "var(--color-text)"}}>Olive Heights: Make people want to go there</span>
          <span style={{"display": "block", "fontSize": "11px", "letterSpacing": ".12em", "textTransform": "uppercase", "marginTop": "4px", "color": "color-mix(in srgb, var(--color-text) 50%, transparent)"}}>Reels, feed, menus, ads</span>
        </a>
        <a href="case-ahvi-gold.html" style={{"textDecoration": "none"}}>
          <span style={{"display": "block", "overflow": "hidden", "border": "2px solid var(--color-divider)"}}><span style={{"display": "block", "aspectRatio": "16/10", "background": "var(--color-neutral-200)"}}><image-slot id="case-feat-2" shape="rect" placeholder="Featured: Ahvi Gold" src="work/case/ahvi-storefront.jpg"></image-slot></span></span>
          <span style={{"display": "block", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "14px", "marginTop": "10px", "color": "var(--color-text)"}}>Ahvi Gold: Selling gold is personal</span>
          <span style={{"display": "block", "fontSize": "11px", "letterSpacing": ".12em", "textTransform": "uppercase", "marginTop": "4px", "color": "color-mix(in srgb, var(--color-text) 50%, transparent)"}}>Trust-first reels and ads</span>
        </a>
      </div>
    </div>
  </div>
</nav>

<header id="lineHero" data-screen-label="Studio hero" style={{"position": "relative", "minHeight": "max(520px, calc(100vh - 160px))", "display": "flex", "flexDirection": "column", "justifyContent": "center", "overflow": "hidden"}}>
  <canvas id="lineCanvas" style={{"position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block", "pointerEvents": "none"}}></canvas>
  <div style={{"position": "relative", "padding": "0 clamp(24px,6vw,96px)"}}>
    <h1 style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(46px,7vw,116px)", "lineHeight": "1.02", "letterSpacing": "-.028em", "margin": "0", "maxWidth": "13ch"}}>
      <span style={{"display": "block", "overflow": "hidden", "paddingBottom": ".12em", "marginBottom": "-.12em"}}><span data-ml data-mld="0" style={{"display": "block"}}>Nice people.</span></span>
      <span style={{"display": "block", "overflow": "hidden", "paddingBottom": ".12em", "marginBottom": "-.12em"}}><span data-ml data-mld="1" style={{"display": "block"}}>Mean work</span></span>
    </h1>
    <p data-rv data-rvd="2" style={{"fontSize": "clamp(15px,1.3vw,18px)", "lineHeight": "1.65", "margin": "clamp(24px,4vh,40px) 0 0", "maxWidth": "44ch", "color": "color-mix(in srgb, var(--color-text) 76%, transparent)"}}>Strategy, content, ads and branding. One shared standard, sharpened daily.</p>
  </div>
</header>

<section data-screen-label="Inside" style={{"borderTop": "2px solid var(--color-divider)", "padding": "clamp(80px,10vw,150px) clamp(24px,6vw,96px)"}}>
  <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(300px,1fr))", "gap": "clamp(36px,6vw,96px)", "alignItems": "center"}}>
    <div>
      <div data-rv data-rvd="1" style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(30px,3.6vw,50px)", "lineHeight": "1.1", "letterSpacing": "-.02em", "maxWidth": "16ch"}}>A newsroom's pace, a product team's discipline.</div>
      <p data-rv data-rvd="2" style={{"fontSize": "15px", "lineHeight": "1.65", "margin": "22px 0 0", "maxWidth": "42ch", "color": "color-mix(in srgb, var(--color-text) 70%, transparent)"}}>Briefs move through the building in days, not quarters. Strategy sits next to design, design next to engineering — arguments stay short because the desks are close.</p>
      <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(120px,1fr))", "gap": "20px", "marginTop": "36px"}}>
        <div data-rv style={{"borderTop": "2px solid var(--color-divider)", "paddingTop": "12px"}}>
          <div style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "24px", "fontVariantNumeric": "tabular-nums"}}>Guwahati</div>
          <div style={{"fontSize": "11px", "letterSpacing": ".14em", "textTransform": "uppercase", "color": "color-mix(in srgb, var(--color-text) 55%, transparent)", "marginTop": "6px"}}>Home base</div>
        </div>
        <div data-rv data-rvd="1" style={{"borderTop": "2px solid var(--color-divider)", "paddingTop": "12px"}}>
          <div style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "24px", "fontVariantNumeric": "tabular-nums"}}>Social</div>
          <div style={{"fontSize": "11px", "letterSpacing": ".14em", "textTransform": "uppercase", "color": "color-mix(in srgb, var(--color-text) 55%, transparent)", "marginTop": "6px"}}>Content and reels</div>
        </div>
        <div data-rv data-rvd="2" style={{"borderTop": "2px solid var(--color-divider)", "paddingTop": "12px"}}>
          <div style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "24px", "fontVariantNumeric": "tabular-nums"}}>Ads</div>
          <div style={{"fontSize": "11px", "letterSpacing": ".14em", "textTransform": "uppercase", "color": "color-mix(in srgb, var(--color-text) 55%, transparent)", "marginTop": "6px"}}>Meta campaigns</div>
        </div>
      </div>
    </div>
    <figure data-rv data-rvd="1" style={{"margin": "0", "justifySelf": "end", "width": "100%", "maxWidth": "420px"}}>
      <div style={{"overflow": "hidden", "border": "2px solid var(--color-divider)"}}>
        <div data-zoom style={{"transition": "transform 1.4s cubic-bezier(.22,1,.36,1)"}}>
          <video data-auto data-vsrc="work/reels/reel-olive-heights-2.mp4" poster="work/reels/posters/reel-olive-heights-2.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Olive Heights reel: sounds of the kitchen" style={{"display": "block", "width": "100%", "aspectRatio": "9/16", "objectFit": "cover", "background": "var(--color-neutral-200)"}}></video>
        </div>
      </div>
      <figcaption style={{"fontSize": "11px", "letterSpacing": ".14em", "textTransform": "uppercase", "color": "color-mix(in srgb, var(--color-text) 50%, transparent)", "marginTop": "12px"}}>From our Olive Heights kitchen reel</figcaption>
    </figure>
  </div>
</section>

<section data-screen-label="Principles" style={{"borderTop": "2px solid var(--color-divider)", "padding": "clamp(80px,10vw,150px) 0"}}>
  <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "16px", "flexWrap": "wrap", "padding": "0 clamp(24px,6vw,96px)", "marginBottom": "clamp(28px,4vw,44px)"}}>
  </div>
  <div data-scrollrow style={{"display": "flex", "gap": "clamp(16px,2.4vw,28px)", "overflowX": "auto", "padding": "6px clamp(24px,6vw,96px) 18px", "scrollSnapType": "x mandatory"}}>
    {vals.rules.map((r, $index) => (<React.Fragment key={$index}>
      <article data-case style={{"flex": "0 0 min(340px,80vw)", "scrollSnapAlign": "start", "border": "2px solid var(--color-divider)", "background": "var(--color-bg)", "display": "flex", "flexDirection": "column"}}>
        <div style={{"overflow": "hidden"}}>
          <div data-zoom style={{"aspectRatio": "16/9", "transition": "transform .9s cubic-bezier(.22,1,.36,1)", "background": `${r.tile}`}}></div>
        </div>
        <div style={{"padding": "20px 20px 24px", "borderTop": "2px solid var(--color-divider)"}}>
          <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "10px"}}>
            <h3 style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(19px,2vw,24px)", "letterSpacing": "-.015em", "margin": "0"}}>{r.t}</h3>
            <span style={{"fontSize": "11px", "fontVariantNumeric": "tabular-nums", "color": "var(--color-accent-700)"}}>{r.n}</span>
          </div>
          <p style={{"fontSize": "14px", "lineHeight": "1.6", "margin": "10px 0 0", "color": "color-mix(in srgb, var(--color-text) 65%, transparent)"}}>{r.c}</p>
        </div>
      </article>
    </React.Fragment>))}
  </div>
</section>

<section data-screen-label="The team" style={{"borderTop": "2px solid var(--color-divider)", "padding": "clamp(80px,10vw,150px) clamp(24px,6vw,96px)"}}>
  <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "16px", "flexWrap": "wrap", "marginBottom": "clamp(28px,4vw,44px)"}}>
  </div>
  <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(200px,1fr))", "gap": "clamp(18px,2.6vw,36px)"}}>
    {vals.team.map((p, $index) => (<React.Fragment key={$index}>
      <figure data-case data-rv style={{"margin": "0"}}>
        <div style={{"overflow": "hidden", "border": "2px solid var(--color-divider)"}}>
          <div data-zoom style={{"transition": "transform 1.4s cubic-bezier(.22,1,.36,1)"}}>
            <div style={{"aspectRatio": "3/4", "background": "var(--color-neutral-200)"}}><image-slot id={p.slot} shape="rect" placeholder={p.ph} src={p.img}></image-slot></div>
          </div>
        </div>
        <figcaption style={{"marginTop": "12px"}}>
          <div style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "15px", "letterSpacing": "-.01em"}}>{p.name}</div>
          <div style={{"fontSize": "11px", "letterSpacing": ".14em", "textTransform": "uppercase", "color": "var(--color-accent-700)", "marginTop": "4px"}}>{p.role}</div>
          <div style={{"fontSize": "13px", "lineHeight": "1.5", "color": "color-mix(in srgb, var(--color-text) 65%, transparent)", "marginTop": "6px"}}>{p.bio}</div>
        </figcaption>
      </figure>
    </React.Fragment>))}
  </div>
</section>

<section id="roles" data-screen-label="Open roles" style={{"borderTop": "2px solid var(--color-divider)", "padding": "clamp(80px,10vw,150px) clamp(24px,6vw,96px)"}}>
  <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(300px,1fr))", "gap": "clamp(36px,6vw,96px)", "alignItems": "start"}}>
    <div style={{"position": "sticky", "top": "110px"}}>
      <div data-rv data-rvd="1" style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(30px,3.6vw,50px)", "lineHeight": "1.08", "letterSpacing": "-.02em", "maxWidth": "13ch"}}>Four seats open.</div>
      <p data-rv data-rvd="2" style={{"fontSize": "15px", "lineHeight": "1.65", "margin": "22px 0 24px", "maxWidth": "38ch", "color": "color-mix(in srgb, var(--color-text) 70%, transparent)"}}>None that fit? Write anyway — the best hires usually arrive unannounced.</p>
      <a data-rv data-rvd="3" href="mailto:people@thesocialverse.co" style={{"textDecoration": "none"}} className="btn btn-secondary">people@thesocialverse.co</a>
    </div>
    <div data-rv data-rvd="1">
      <table className="table">
        <thead>
          <tr><th>Role</th><th>Team</th><th>City</th><th></th></tr>
        </thead>
        <tbody>
          {vals.roles.map((ro, $index) => (<React.Fragment key={$index}>
            <tr>
              <td style={{"fontFamily": "var(--font-heading)", "fontWeight": "800"}}>{ro.t}</td>
              <td>{ro.team}</td>
              <td>{ro.city}</td>
              <td style={{"textAlign": "right"}}><a href={ro.mail} style={{"fontWeight": "600", "color": "var(--color-accent-700)", "textDecoration": "none"}}>Apply</a></td>
            </tr>
          </React.Fragment>))}
        </tbody>
      </table>
    </div>
  </div>
</section>

<section data-screen-label="Brief CTA" style={{"borderTop": "2px solid var(--color-divider)", "padding": "clamp(56px,7vw,96px) clamp(24px,6vw,96px)", "display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "24px", "flexWrap": "wrap"}}>
  <div style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(26px,3vw,42px)", "letterSpacing": "-.02em", "maxWidth": "22ch"}}>Rather hire the whole team at once?</div>
  <a data-mag href="contact.html" style={{"textDecoration": "none"}} className="btn btn-primary">Start a project</a>
</section>

</div>

<div id="footSpace" aria-hidden="true" style={{"height": "480px"}}></div>

<footer id="bigFoot" data-screen-label="Footer" style={{"position": "fixed", "left": "0", "right": "0", "bottom": "0", "zIndex": "1", "background": "#0f0d0a", "color": "#f1ece1", "padding": "clamp(36px,5vw,64px) clamp(24px,6vw,96px) 24px", "overflow": "hidden"}}>
  <div style={{"display": "flex", "justifyContent": "center", "gap": "clamp(12px,2vw,24px)", "flexWrap": "wrap", "marginBottom": "clamp(28px,4vw,48px)"}}>
    <span style={{"border": "2px solid rgba(241,236,225,.3)", "borderRadius": "999px", "padding": "9px 18px", "fontSize": "12px", "display": "inline-flex", "gap": "8px", "alignItems": "center"}}><strong style={{"fontFamily": "var(--font-heading)"}}>Guwahati:</strong> <span data-clock="Asia/Kolkata">—</span></span>
  </div>
  <div aria-label="The Social Verse" style={{"display": "flex", "justifyContent": "center", "alignItems": "baseline", "gap": "clamp(8px,1vw,18px)", "whiteSpace": "nowrap"}}>
    
    <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(40px,10.4vw,178px)", "lineHeight": ".95", "letterSpacing": "-.03em", "color": "#f1ece1"}}>Social Verse</span>
    <span style={{"fontSize": "clamp(12px,1.5vw,24px)", "fontWeight": "800", "alignSelf": "flex-start", "color": "var(--color-accent-300)"}}>®</span>
  </div>
  <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "18px 36px", "flexWrap": "wrap", "borderTop": "2px solid rgba(241,236,225,.22)", "marginTop": "clamp(24px,3vw,40px)", "paddingTop": "18px"}}>
    <div style={{"display": "flex", "gap": "16px", "flexWrap": "wrap"}}>
      <a href="https://instagram.com" target="_blank" rel="noopener" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "#f1ece1"}} className="hv-11">Instagram</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "#f1ece1"}} className="hv-11">LinkedIn</a>
      <a href="https://youtube.com" target="_blank" rel="noopener" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "#f1ece1"}} className="hv-11">YouTube</a>
      <a href="https://x.com" target="_blank" rel="noopener" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "#f1ece1"}} className="hv-11">X</a>
    </div>
    <div style={{"display": "flex", "gap": "16px", "flexWrap": "wrap"}}>
      <a href="index.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-11">Home</a>
      <a href="work.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-11">Work</a>
      <a href="solutions.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-11">Solutions</a>
      <a href="journal.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-11">Journal</a>
      <a href="contact.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-11">Contact</a>
    </div>
    <div style={{"textAlign": "right", "fontSize": "11px", "color": "rgba(241,236,225,.55)"}}>Based in Guwahati. All noise, no static. © 2026</div>
  </div>
</footer>

    </>
  );
}
