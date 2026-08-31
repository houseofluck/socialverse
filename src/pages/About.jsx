import React from 'react';
import { DCLogic, useDC } from '../lib/dc.js';
import { cssText } from '../lib/cssText.js';

class Component extends DCLogic {
  renderVals() { return { megaLinks: [
        { t: 'Social Media Marketing', href: 'services.html#s-smm', sq: 'width:10px; height:10px; flex:none; background:#ffd23f;' },
        { t: 'Performance Marketing', href: 'services.html#s-perf', sq: 'width:10px; height:10px; flex:none; background:#ff6b35;' },
        { t: 'Content Production', href: 'services.html#s-content', sq: 'width:10px; height:10px; flex:none; background:#2ec4b6;' },
        { t: 'Branding and Creative Strategy', href: 'services.html#s-brand', sq: 'width:10px; height:10px; flex:none; background:#ff8fab;' },
        { t: 'SEO', href: 'services.html#s-seo', sq: 'width:10px; height:10px; flex:none; background:#ab905c;' },
        { t: 'Website Development', href: 'services.html#s-web', sq: 'width:10px; height:10px; flex:none; background:#1d1a14;' },
        { t: 'App Development', href: 'services.html#s-app', sq: 'width:10px; height:10px; flex:none; background:#ffd23f;' },
        { t: 'Influencer Marketing', href: 'services.html#s-influencer', sq: 'width:10px; height:10px; flex:none; background:#ff6b35;' },
        { t: 'Outdoor Marketing', href: 'services.html#s-outdoor', sq: 'width:10px; height:10px; flex:none; background:#2ec4b6;' }
      ] }; }
  componentDidMount() { this._c = []; this.boot(); }
  componentWillUnmount() { (this._c || []).forEach(f => { try { f() } catch (e) { } }); }
  on(t, ev, fn, o) { t.addEventListener(ev, fn, o); this._c.push(() => t.removeEventListener(ev, fn, o)); }
  boot() {
    const P = this.props || {};
    const calm = (P.motion ?? 'full') === 'calm' || matchMedia('(prefers-reduced-motion: reduce)').matches;
    const $ = id => document.getElementById(id);
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
        if (a.__wiped) { a.__wiped = false; return; }
        e.preventDefault();
        try { sessionStorage.setItem('tsv_wipe', '1'); } catch (err) { }
        wipe.style.transition = 'transform .55s cubic-bezier(.76,0,.24,1)';
        wipe.style.transform = 'translateX(0)';
        a.__wiped = true;
        setTimeout(() => { a.click(); }, 560);
      });
    }
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
    const nav = $('nav'), mega = $('mega'), megaBtn = $('megaBtn'), caret = $('megaCaret');
    let megaOpen = false, megaT = 0;
    const setMega = open => {
      megaOpen = open;
      if (!mega) return;
      mega.style.opacity = open ? '1' : '0';
      mega.style.transform = open ? 'none' : 'translateY(-10px)';
      mega.style.pointerEvents = open ? 'auto' : 'none';
      const shEl = document.getElementById('sheet'); if (shEl) shEl.style.overflow = open ? 'visible' : 'clip';
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
        const w = $('wipe');
        if (w) {
          w.style.transition = 'transform .55s cubic-bezier(.76,0,.24,1)';
          w.style.transform = 'translateX(0)';
          setTimeout(() => { const t = document.createElement('a'); t.href = 'services.html'; t.__wiped = true; document.body.appendChild(t); t.click(); t.remove(); }, 560);
        } else { const t = document.createElement('a'); t.href = 'services.html'; t.__wiped = true; document.body.appendChild(t); t.click(); t.remove(); }
      });
      this.on(nav, 'pointerleave', () => { megaT = setTimeout(() => setMega(false), 300); });
      this.on(mega, 'pointerenter', () => clearTimeout(megaT));
      this.on(window, 'scroll', () => { if (megaOpen && Math.abs(scrollY - openY) > 48) setMega(false); }, { passive: true });
    }
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
    document.querySelectorAll('[data-case]').forEach(cs => {
      const z = cs.querySelector('[data-zoom]');
      this.on(cs, 'pointerenter', () => { if (z && !calm) z.style.transform = 'scale(1.04)'; if (!calm && cs.style.borderWidth) { if (cs.__b === undefined) cs.__b = cs.style.borderColor; cs.style.borderColor = ['#ff6b35','#2ec4b6','#ffd23f','#ff8fab'][Math.floor(Math.random()*4)]; } });
      this.on(cs, 'pointerleave', () => { if (z) z.style.transform = 'scale(1)'; if (cs.__b !== undefined) cs.style.borderColor = cs.__b; });
    });
    if (!calm && matchMedia('(pointer: fine)').matches) {
      document.querySelectorAll('[data-mag]').forEach(el => {
        const mv = e => { const b = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - b.left - b.width / 2) * .2}px, ${(e.clientY - b.top - b.height / 2) * .2}px)`; };
        const lv = () => { el.style.transition = 'transform .4s cubic-bezier(.34,1.56,.64,1), background .25s'; el.style.transform = 'none'; setTimeout(() => { el.style.transition = 'background .25s'; }, 400); };
        this.on(el, 'pointermove', mv); this.on(el, 'pointerleave', lv);
      });
    }
  }
}

export default function AboutPage() {
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

<div id="sheet" style={{"position": "relative", "zIndex": "2", "minHeight": "100vh", "background": "var(--color-bg)", "borderRadius": "0 0 28px 28px", "boxShadow": "0 30px 60px rgba(0,0,0,.35)", "overflow": "clip"}}>

<nav id="nav" data-screen-label="Nav" style={{"position": "sticky", "top": "0", "zIndex": "90", "background": "rgba(246,243,236,.92)", "backdropFilter": "blur(14px)", "borderBottom": "2px solid var(--color-divider)"}}>
  <div style={{"display": "flex", "alignItems": "center", "gap": "clamp(14px,2.2vw,32px)", "padding": "16px clamp(24px,6vw,96px)"}}>
    <a href="index.html" style={{"display": "flex", "alignItems": "center", "textDecoration": "none", "marginRight": "auto"}}>
      <img src="logo-ink.png" alt="The Social Verse" width="351" height="236" style={{"display": "block", "height": "clamp(30px,3.2vw,40px)", "width": "auto"}} />
    </a>
    <div style={{"display": "flex", "alignItems": "center", "gap": "clamp(14px,2.2vw,32px)", "marginRight": "auto", "flexWrap": "wrap"}}>
      <a href="index.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(var(--color-accent-600),var(--color-accent-600))", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">Home</a>
      <a href="portfolio.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(#ff6b35,#ff6b35)", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">Portfolio</a>
      <a href="case-studies.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(#2ec4b6,#2ec4b6)", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">Case Studies</a>
      <div id="megaWrap" style={{"position": "static"}}>
        <button id="megaBtn" type="button" style={{"border": "0", "background": "none", "font": "inherit", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "padding": "0 0 2px", "display": "inline-flex", "alignItems": "center", "gap": "6px"}} className="hv-2">Services <span id="megaCaret" style={{"fontSize": "10px", "transition": "transform .3s"}}>▾</span></button>
      </div>
      <a href="about.html" aria-current="page" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-accent-700)", "borderBottom": "2px solid var(--color-accent)", "paddingBottom": "2px"}}>About us</a>
      <a href="contact.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(#2ec4b6,#2ec4b6)", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">Contact us</a>
    </div>
    <a data-mag href="contact.html" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "letterSpacing": ".04em", "color": "var(--color-bg)", "background": "#1d1a14", "padding": "11px 20px", "borderRadius": "999px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "background .3s"}} className="hv-3">Let's talk →</a>
  </div>
  <div id="mega" style={{"position": "absolute", "left": "0", "right": "0", "top": "100%", "background": "var(--color-bg)", "borderBottom": "2px solid var(--color-divider)", "boxShadow": "0 24px 48px rgba(43,40,32,.18)", "opacity": "0", "transform": "translateY(-10px)", "pointerEvents": "none", "transition": "opacity .35s, transform .35s"}}>
    <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(280px,1fr))", "gap": "clamp(24px,4vw,64px)", "padding": "clamp(24px,3vw,44px) clamp(24px,6vw,96px)"}}>
      <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "2px clamp(16px,2vw,32px)"}}>
        {vals.megaLinks.map((ml, $index) => (<React.Fragment key={$index}>
          <a href={ml.href} style={{"display": "flex", "alignItems": "center", "gap": "12px", "textDecoration": "none", "padding": "11px 8px", "borderBottom": "2px solid var(--color-divider)", "transition": "background .25s, padding-left .25s"}} className="hv-4">
            <span style={cssText(ml.sq)}></span><span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(14px,1.3vw,17px)", "letterSpacing": "-.01em", "color": "var(--color-text)"}}>{ml.t}</span>
          </a>
        </React.Fragment>))}
      </div>
      <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "18px", "alignContent": "start"}}>
        <a href="portfolio.html" style={{"textDecoration": "none"}}>
          <span style={{"display": "block", "overflow": "hidden", "border": "2px solid var(--color-divider)"}}><span style={{"display": "block", "aspectRatio": "16/10", "background": "var(--color-neutral-200)"}}><image-slot id="mega-feat-1" shape="rect" placeholder="Featured creative" src="work/creatives/social-grid.jpg"></image-slot></span></span>
          <span style={{"display": "block", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "14px", "marginTop": "10px", "color": "var(--color-text)"}}>Our creativity</span>
        </a>
        <a href="case-studies.html" style={{"textDecoration": "none"}}>
          <span style={{"display": "block", "overflow": "hidden", "border": "2px solid var(--color-divider)"}}><span style={{"display": "block", "aspectRatio": "16/10", "background": "var(--color-neutral-200)"}}><image-slot id="mega-feat-2" shape="rect" placeholder="Featured case" src="work/case/ahvi-storefront.jpg"></image-slot></span></span>
          <span style={{"display": "block", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "14px", "marginTop": "10px", "color": "var(--color-text)"}}>Case studies</span>
        </a>
      </div>
    </div>
  </div>
</nav>

<header data-screen-label="Hero" style={{"position": "relative", "overflow": "hidden", "background": "var(--color-bg)", "color": "var(--color-text)", "padding": "clamp(70px,9vw,140px) clamp(24px,6vw,96px)"}}>
  <div data-rv style={{"fontSize": "11px", "letterSpacing": ".22em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)", "marginBottom": "clamp(18px,3vh,30px)"}}>About us</div>
  <h1 style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(34px,5vw,84px)", "lineHeight": "1.02", "letterSpacing": "-.025em", "margin": "0", "maxWidth": "20ch", "color": "inherit"}}>
    <span style={{"display": "block", "overflow": "hidden", "paddingBottom": ".12em", "marginBottom": "-.12em"}}><span data-ml data-mld="0" style={{"display": "block"}}>We're Not A Very Big Agency.</span></span>
  </h1>
  <p data-rv data-rvd="2" style={{"fontSize": "clamp(15px,1.3vw,17px)", "lineHeight": "1.65", "margin": "clamp(20px,3vh,32px) 0 0", "maxWidth": "56ch", "opacity": ".85"}}>And honestly, we like it that way. The Social Verse started with a simple idea: good marketing doesn't need a huge team. It needs good people who care about the work.</p>
</header><section data-screen-label="Statement" style={{"background": "#1d1a14", "color": "#f6f3ec", "padding": "clamp(64px,8vw,120px) clamp(24px,6vw,96px)", "borderTop": "2px solid var(--color-divider)"}}>
  <h2 style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(30px,4.4vw,68px)", "lineHeight": "1.08", "letterSpacing": "-.022em", "margin": "0", "maxWidth": "22ch"}}>
    <span style={{"display": "block", "overflow": "hidden", "paddingBottom": ".12em", "marginBottom": "-.12em"}}><span data-ml data-mld="0" style={{"display": "block"}}>We'd rather throw out a bad idea</span></span>
    <span style={{"display": "block", "overflow": "hidden", "paddingBottom": ".12em", "marginBottom": "-.12em"}}><span data-ml data-mld="1" style={{"display": "block"}}>in the room than put a bad campaign</span></span>
    <span style={{"display": "block", "overflow": "hidden", "paddingBottom": ".12em", "marginBottom": "-.12em"}}><span data-ml data-mld="2" style={{"display": "block"}}><span style={{"color": "#ffd23f"}}>in front of your audience.</span></span></span>
  </h2>
  <p data-rv style={{"fontSize": "15px", "lineHeight": "1.7", "margin": "20px 0 0", "maxWidth": "62ch", "opacity": ".85"}}>We're a small, hands on team working across strategy, content, design, advertising and digital. We work closely with the brands we take on. We ask questions. We try things. We change things when they don't work. And yes, sometimes the first idea is terrible. That's fine.</p>
</section>
<section data-screen-label="Our Approach" style={{"padding": "clamp(56px,7vw,110px) clamp(24px,6vw,96px)", "borderTop": "2px solid var(--color-divider)", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(300px,1fr))", "gap": "clamp(28px,4.5vw,72px)", "alignItems": "start"}}>
  <h2 data-rv style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(26px,3.2vw,46px)", "letterSpacing": "-.02em", "margin": "0", "maxWidth": "12ch"}}>We Start With The Brand. Not The Trend.</h2>
  <div style={{"display": "flex", "flexDirection": "column", "gap": "18px"}}>
    <p data-rv style={{"fontSize": "15px", "lineHeight": "1.7", "margin": "0", "maxWidth": "60ch", "color": "color-mix(in srgb, var(--color-text) 78%, transparent)"}}>There's always a new trend. A new audio. A new format. A new &ldquo;hack&rdquo; someone says every brand needs to try. We'll use it if it makes sense. And ignore it if it doesn't.</p>
    <div style={{"display": "grid", "borderBottom": "2px solid var(--color-divider)", "maxWidth": "60ch"}}>
      <div data-rv data-rvd="1" style={{"borderTop": "2px solid var(--color-divider)", "padding": "13px 0", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(16px,1.6vw,20px)", "lineHeight": "1.15", "letterSpacing": "-.01em"}}>Who are you?</div>
      <div data-rv data-rvd="2" style={{"borderTop": "2px solid var(--color-divider)", "padding": "13px 0", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(16px,1.6vw,20px)", "lineHeight": "1.15", "letterSpacing": "-.01em"}}>Who are you talking to?</div>
      <div data-rv data-rvd="3" style={{"borderTop": "2px solid var(--color-divider)", "padding": "13px 0", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(16px,1.6vw,20px)", "lineHeight": "1.15", "letterSpacing": "-.01em"}}>What are you trying to achieve?</div>
      <div data-rv data-rvd="4" style={{"borderTop": "2px solid var(--color-divider)", "padding": "13px 0", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(16px,1.6vw,20px)", "lineHeight": "1.15", "letterSpacing": "-.01em"}}>And why should anyone care?</div>
    </div>
    <p data-rv data-rvd="5" style={{"fontSize": "15px", "lineHeight": "1.7", "margin": "0", "maxWidth": "60ch", "color": "color-mix(in srgb, var(--color-text) 78%, transparent)"}}>Once we know that, the creative becomes much easier.</p>
  </div>
</section>
<section data-screen-label="Why choose" style={{"borderTop": "2px solid var(--color-divider)", "padding": "clamp(56px,7vw,110px) clamp(24px,6vw,96px)"}}>
  <h2 data-rv style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(26px,3.2vw,46px)", "letterSpacing": "-.02em", "margin": "0 0 34px"}}>Why Social Verse?</h2>
  <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(240px,1fr))", "gap": "clamp(14px,2vw,24px)"}}>
    <div data-case data-rv style={{"transition": "border-color .3s", "background": "var(--color-bg)", "border": "2px solid var(--color-divider)", "color": "var(--color-text)", "padding": "clamp(18px,2.2vw,28px)", "display": "flex", "flexDirection": "column", "gap": "12px", "minHeight": "200px", "position": "relative", "overflow": "hidden"}}>
      <span aria-hidden="true" style={{"position": "absolute", "right": "4px", "bottom": "-12px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "80px", "lineHeight": ".8", "opacity": ".16"}}>01</span>
      <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(16px,1.6vw,20px)", "lineHeight": "1.15", "letterSpacing": "-.01em"}}>We're Hands On</span>
      <span style={{"fontSize": "13.5px", "lineHeight": "1.6", "opacity": ".82"}}>You won't disappear into a WhatsApp group after signing the contract. We're involved in the work.</span>
    </div>
    <div data-case data-rv style={{"transition": "border-color .3s", "background": "var(--color-bg)", "border": "2px solid var(--color-divider)", "color": "var(--color-text)", "padding": "clamp(18px,2.2vw,28px)", "display": "flex", "flexDirection": "column", "gap": "12px", "minHeight": "200px", "position": "relative", "overflow": "hidden"}}>
      <span aria-hidden="true" style={{"position": "absolute", "right": "4px", "bottom": "-12px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "80px", "lineHeight": ".8", "opacity": ".16"}}>02</span>
      <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(16px,1.6vw,20px)", "lineHeight": "1.15", "letterSpacing": "-.01em"}}>We Care About The Actual Business</span>
      <span style={{"fontSize": "13.5px", "lineHeight": "1.6", "opacity": ".82"}}>A nice feed is great. But if the business isn't getting anything from it, what's the point?</span>
    </div>
    <div data-case data-rv style={{"transition": "border-color .3s", "background": "var(--color-bg)", "border": "2px solid var(--color-divider)", "color": "var(--color-text)", "padding": "clamp(18px,2.2vw,28px)", "display": "flex", "flexDirection": "column", "gap": "12px", "minHeight": "200px", "position": "relative", "overflow": "hidden"}}>
      <span aria-hidden="true" style={{"position": "absolute", "right": "4px", "bottom": "-12px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "80px", "lineHeight": ".8", "opacity": ".16"}}>03</span>
      <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(16px,1.6vw,20px)", "lineHeight": "1.15", "letterSpacing": "-.01em"}}>We're Creative, But Not Just For The Sake Of It</span>
      <span style={{"fontSize": "13.5px", "lineHeight": "1.6", "opacity": ".82"}}>We like good design. We also like ideas that have a reason behind them.</span>
    </div>
    <div data-case data-rv style={{"transition": "border-color .3s", "background": "var(--color-bg)", "border": "2px solid var(--color-divider)", "color": "var(--color-text)", "padding": "clamp(18px,2.2vw,28px)", "display": "flex", "flexDirection": "column", "gap": "12px", "minHeight": "200px", "position": "relative", "overflow": "hidden"}}>
      <span aria-hidden="true" style={{"position": "absolute", "right": "4px", "bottom": "-12px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "80px", "lineHeight": ".8", "opacity": ".16"}}>04</span>
      <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(16px,1.6vw,20px)", "lineHeight": "1.15", "letterSpacing": "-.01em"}}>We Don't Believe In One Size Fits All</span>
      <span style={{"fontSize": "13.5px", "lineHeight": "1.6", "opacity": ".82"}}>A restaurant doesn't need the same strategy as a gold buyer. A hotel doesn't need the same content as a tech company. So why would we give them the same marketing?</span>
    </div>
    <div data-case data-rv style={{"transition": "border-color .3s", "background": "var(--color-bg)", "border": "2px solid var(--color-divider)", "color": "var(--color-text)", "padding": "clamp(18px,2.2vw,28px)", "display": "flex", "flexDirection": "column", "gap": "12px", "minHeight": "200px", "position": "relative", "overflow": "hidden"}}>
      <span aria-hidden="true" style={{"position": "absolute", "right": "4px", "bottom": "-12px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "80px", "lineHeight": ".8", "opacity": ".16"}}>05</span>
      <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(16px,1.6vw,20px)", "lineHeight": "1.15", "letterSpacing": "-.01em"}}>We Say What We Think</span>
      <span style={{"fontSize": "13.5px", "lineHeight": "1.6", "opacity": ".82"}}>Sometimes we'll tell you an idea is good. Sometimes we'll tell you it isn't. That's part of the job.</span>
    </div>
  </div>
</section>
<section data-screen-label="Founders" style={{"borderTop": "2px solid var(--color-divider)", "padding": "clamp(56px,7vw,110px) clamp(24px,6vw,96px)", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(300px,1fr))", "gap": "clamp(28px,4.5vw,72px)", "alignItems": "start"}}>
  <div>
    <div data-rv style={{"fontSize": "11px", "letterSpacing": ".22em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)", "marginBottom": "clamp(14px,2vh,22px)"}}>Meet the founders</div>
    <h2 data-rv data-rvd="1" style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(26px,3.2vw,46px)", "letterSpacing": "-.02em", "margin": "0", "maxWidth": "12ch"}}>Behind The Social Verse</h2>
  </div>
  <div style={{"display": "flex", "flexDirection": "column", "gap": "18px"}}>
    <p data-rv style={{"fontSize": "15px", "lineHeight": "1.7", "margin": "0", "maxWidth": "60ch", "color": "color-mix(in srgb, var(--color-text) 78%, transparent)"}}>We're two people who ended up building this together because we looked at marketing a little differently. One of us is more focused on ads, content and making sure the work actually reaches people. The other lives in design, creative ideas and constantly looking at what's new, what's working and what we can do differently.</p>
    <p data-rv data-rvd="1" style={{"fontSize": "15px", "lineHeight": "1.7", "margin": "0", "maxWidth": "60ch", "color": "color-mix(in srgb, var(--color-text) 78%, transparent)"}}>We bounce ideas off each other, disagree quite often, make things, scrap things and make them again. And somewhere in between all of that, The Social Verse happened. We're still building it. That's probably the best part.</p>
  </div>
</section>
<section data-screen-label="Build together" style={{"background": "var(--color-accent)", "color": "#14110c", "padding": "clamp(64px,8vw,120px) clamp(24px,6vw,96px)", "borderTop": "2px solid var(--color-divider)"}}>
  <h2 style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(32px,4.6vw,72px)", "lineHeight": "1.04", "letterSpacing": "-.022em", "margin": "0", "maxWidth": "18ch"}}>
    <span style={{"display": "block", "overflow": "hidden", "paddingBottom": ".12em", "marginBottom": "-.12em"}}><span data-ml data-mld="0" style={{"display": "block"}}>Have something in mind?</span></span>
  </h2>
  <p data-rv style={{"fontSize": "15px", "lineHeight": "1.7", "margin": "20px 0 0", "maxWidth": "62ch", "opacity": ".85"}}>Whether you are launching a new business, growing an existing brand, or looking to strengthen your digital presence, let's create something meaningful, impactful, and growth-driven together.</p>
  <div style={{"display": "flex", "alignItems": "center", "gap": "24px", "flexWrap": "wrap", "marginTop": "30px"}}>
    <a data-mag href="contact.html" style={{"textDecoration": "none", "color": "#14110c", "border": "2px solid #14110c", "padding": "13px 24px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "14px", "transition": "background .25s"}} className="hv-9">Start A Conversation →</a>
    <a href="mailto:info@thesocialverse.co.in" style={{"color": "#14110c", "fontWeight": "600", "fontSize": "15px", "textUnderlineOffset": "5px"}} className="hv-10">info@thesocialverse.co.in</a>
  </div>
</section>

</div>

<div id="footSpace" aria-hidden="true" style={{"height": "480px"}}></div>

<footer id="bigFoot" data-screen-label="Footer" style={{"position": "fixed", "left": "0", "right": "0", "bottom": "0", "zIndex": "1", "background": "#0f0d0a", "color": "#f1ece1", "padding": "clamp(36px,5vw,64px) clamp(24px,6vw,96px) 24px", "overflow": "hidden"}}>
  <div style={{"display": "flex", "justifyContent": "center", "gap": "clamp(12px,2vw,24px)", "flexWrap": "wrap", "marginBottom": "clamp(24px,3.5vw,40px)"}}>
    <a href="tel:6000955672" style={{"textDecoration": "none", "color": "#f1ece1", "border": "2px solid rgba(241,236,225,.3)", "borderRadius": "999px", "padding": "9px 18px", "fontSize": "12px", "display": "inline-flex", "gap": "8px", "alignItems": "center", "transition": "border-color .3s"}} className="hv-11"><strong style={{"fontFamily": "var(--font-heading)"}}>Call:</strong> 6000955672</a>
    <a href="tel:8099531944" style={{"textDecoration": "none", "color": "#f1ece1", "border": "2px solid rgba(241,236,225,.3)", "borderRadius": "999px", "padding": "9px 18px", "fontSize": "12px", "display": "inline-flex", "gap": "8px", "alignItems": "center", "transition": "border-color .3s"}} className="hv-12"><strong style={{"fontFamily": "var(--font-heading)"}}>Call:</strong> 8099531944</a>
    <a href="mailto:info@thesocialverse.co.in" style={{"textDecoration": "none", "color": "#f1ece1", "border": "2px solid rgba(241,236,225,.3)", "borderRadius": "999px", "padding": "9px 18px", "fontSize": "12px", "display": "inline-flex", "gap": "8px", "alignItems": "center", "transition": "border-color .3s"}} className="hv-13"><strong style={{"fontFamily": "var(--font-heading)"}}>Email:</strong> info@thesocialverse.co.in</a>
  </div>
  <p style={{"textAlign": "center", "fontSize": "13.5px", "lineHeight": "1.7", "maxWidth": "64ch", "margin": "0 auto clamp(24px,3.5vw,40px)", "color": "rgba(241,236,225,.7)"}}>Strategy, content, ads, branding, websites and everything in between.</p>
  <div aria-label="The Social Verse" style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "10px"}}>
    <span style={{"display": "flex", "alignItems": "baseline", "gap": "clamp(8px,1vw,18px)", "whiteSpace": "nowrap"}}><span aria-hidden="true" style={{"width": "clamp(14px,1.8vw,28px)", "height": "clamp(14px,1.8vw,28px)", "background": "var(--color-accent)", "flex": "none", "alignSelf": "center"}}></span><span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(38px,9.6vw,164px)", "lineHeight": ".95", "letterSpacing": "-.03em", "color": "#f1ece1"}}>The Social Verse</span></span>
    <span style={{"fontSize": "clamp(10px,1.2vw,14px)", "letterSpacing": ".34em", "textTransform": "uppercase", "fontWeight": "600", "color": "#dcc89d"}}>All eyes on your brand</span>
  </div>
  <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "18px 36px", "flexWrap": "wrap", "borderTop": "2px solid rgba(241,236,225,.22)", "marginTop": "clamp(24px,3vw,40px)", "paddingTop": "18px"}}>
    <div style={{"display": "flex", "gap": "16px", "flexWrap": "wrap"}}>
      <a href="index.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-14">Home</a>
      <a href="portfolio.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-15">Portfolio</a>
      <a href="case-studies.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-16">Case Studies</a>
      <a href="services.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-17">Services</a>
      <a href="about.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-14">About us</a>
      <a href="contact.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-15">Contact us</a>
      <a href="clients.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-16">Clients</a>
      <a href="blog.html" style={{"textDecoration": "none", "fontSize": "13px", "color": "#f1ece1"}} className="hv-17">Blog</a>
    </div>
    <div style={{"display": "flex", "gap": "16px", "flexWrap": "wrap"}}>
      <a href="https://instagram.com" target="_blank" rel="noopener" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "#f1ece1"}} className="hv-14">Instagram</a>
      <a href="https://facebook.com" target="_blank" rel="noopener" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "#f1ece1"}} className="hv-15">Facebook</a>
      <a href="https://linkedin.com" target="_blank" rel="noopener" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "#f1ece1"}} className="hv-16">LinkedIn</a>
      <a href="https://youtube.com" target="_blank" rel="noopener" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "#f1ece1"}} className="hv-17">YouTube</a>
    </div>
    <div style={{"textAlign": "right", "fontSize": "11px", "color": "rgba(241,236,225,.55)"}}>© The Social Verse</div>
  </div>
</footer>

    </>
  );
}
