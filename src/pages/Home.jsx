import React from 'react';
import { DCLogic, useDC } from '../lib/dc.js';
import { cssText } from '../lib/cssText.js';

class Component extends DCLogic {
  renderVals() {
    const tick = [
      { a: 'All eyes on your brand', b: "Let's talk →" },
      { a: 'We handle the thinking, the creating and the execution', b: 'What we do →' },
      { a: 'New case study: Olive Heights', b: 'Read it →' }
    ];
    const txt = "At The Social Verse, we work with brands on the stuff that actually matters: how they look, how they sound, what they say, who they reach and, most importantly, what all of it does for the business.";
    const redSet = new Set(['look,', 'sound,', 'say,', 'reach', 'business.']);
    return {
      tick4: [...tick, ...tick],
      shout4: ['All eyes on your brand', 'Stop the scroll', 'All eyes on your brand', 'Stop the scroll'],
      sh2: '#ab905c',
      close4: ['Build something', 'That stands out', 'Build something', 'That stands out'],
      closeWords: [
        { w: 'You', hc: '#f6f3ec' }, { w: 'focus', hc: '#ff6b35' }, { w: 'on', hc: '#2ec4b6' },
        { w: 'the', hc: '#ffd23f' }, { w: 'business.', hc: '#ff8fab' }
      ],
      maniWords: txt.split(' ').map(w => ({ w, r: redSet.has(w) ? '1' : '0' })),
      megaLinks: [
        { t: 'Social Media Marketing', href: 'services.html#s-smm', sq: 'width:10px; height:10px; flex:none; background:#ffd23f;' },
        { t: 'Performance Marketing', href: 'services.html#s-perf', sq: 'width:10px; height:10px; flex:none; background:#ff6b35;' },
        { t: 'Content Production', href: 'services.html#s-content', sq: 'width:10px; height:10px; flex:none; background:#2ec4b6;' },
        { t: 'Branding and Creative Strategy', href: 'services.html#s-brand', sq: 'width:10px; height:10px; flex:none; background:#ff8fab;' },
        { t: 'SEO', href: 'services.html#s-seo', sq: 'width:10px; height:10px; flex:none; background:#ab905c;' },
        { t: 'Website Development', href: 'services.html#s-web', sq: 'width:10px; height:10px; flex:none; background:#1d1a14;' },
        { t: 'App Development', href: 'services.html#s-app', sq: 'width:10px; height:10px; flex:none; background:#ffd23f;' },
        { t: 'Influencer Marketing', href: 'services.html#s-influencer', sq: 'width:10px; height:10px; flex:none; background:#ff6b35;' },
        { t: 'Outdoor Marketing', href: 'services.html#s-outdoor', sq: 'width:10px; height:10px; flex:none; background:#2ec4b6;' }
      ],
      pf: [
        { t: 'Creative Designs', d: 'The posts, campaigns and ideas that made it from our heads to the screen.', href: 'portfolio.html#creativity', slot: 'home-pf-1', ph: 'Drop a creative design', img: 'work/teasers/creative-designs.jpg', bg: '#ab905c', fg: '#14110c' },
        { t: 'Hoardings', d: "Because sometimes the screen isn't enough.", href: 'portfolio.html#hoardings', slot: 'home-pf-2', ph: 'Drop a hoarding design', img: 'work/hoardings/awesome-palace-under-one-roof.jpg', bg: '#ab905c', fg: '#14110c' },
        { t: 'Tickets', d: 'Small piece of the campaign. Still part of the brand.', href: 'portfolio.html#tickets', slot: 'home-pf-3', ph: 'Drop a ticket design', img: 'work/tickets/ticket-1.jpg', bg: '#ab905c', fg: '#14110c' }
      ],
      reels: [
        { v: 'work/reels/reel-olive-heights-1.mp4', p: 'work/reels/posters/reel-olive-heights-1.jpg', cl: 'Olive Heights', k: 'Sundays are for indulgence' },
        { v: 'work/reels/reel-olive-garden-2.mp4', p: 'work/reels/posters/reel-olive-garden-2.jpg', cl: 'Olive Garden', k: 'The art of hands' },
        { v: 'work/reels/reel-awesome-palace-rooms.mp4', p: 'work/reels/posters/reel-awesome-palace-rooms.jpg', cl: 'Awesome Palace', k: 'Ready before you arrive' },
        { v: 'work/reels/reel-ahvi-gold.mp4', p: 'work/reels/posters/reel-ahvi-gold.jpg', cl: 'Ahvi Gold', k: 'Hook them in the first second' },
        { v: 'work/reels/reel-coriander.mp4', p: 'work/reels/posters/reel-coriander.jpg', cl: 'Coriander', k: 'Built for the launch' }
      ],
      cases: [
        { n: '01', k: 'Rooftop dining, Guwahati', t: 'Olive Heights', d: 'A rooftop restaurant that already looked good. The job was making people want to go.', href: 'case-olive-heights.html', bg: '#ab905c', fg: '#14110c' },
        { n: '02', k: 'Luxury hospitality', t: 'Awesome Palace', d: 'A hotel has about five seconds to make you want to stay there.', href: 'case-awesome-palace.html', bg: '#ab905c', fg: '#14110c' },
        { n: '03', k: 'Gold buying', t: 'Ahvi Gold', d: 'Selling gold is personal. The marketing had to understand that.', href: 'case-ahvi-gold.html', bg: '#ab905c', fg: '#14110c' }
      ],
      sols: [
        { n: '01', t: 'Social Media', k: 'Not just posting', c: 'Not just posting for the sake of posting. We plan your content, create it, manage the page and keep it moving.', bg: '#ffd23f', fg: '#14110c', wm: 'rgba(20,17,12,.25)' },
        { n: '02', t: 'Ads', k: 'Spend smarter', c: "Good ads aren't about spending more. They're about spending smarter. We run campaigns built around what you actually want: leads, sales, bookings, enquiries or reach.", bg: '#ff6b35', fg: '#14110c', wm: 'rgba(20,17,12,.25)' },
        { n: '03', t: 'Content', k: 'Stop and look', c: "Photos. Reels. Videos. Campaigns. Whatever your brand needs to say, we'll figure out how to make people stop and look.", bg: '#ff8fab', fg: '#14110c', wm: 'rgba(20,17,12,.25)' },
        { n: '04', t: 'Branding', k: 'Be recognisable', c: "Your brand shouldn't look like it was picked from a Canva template. We work on the identity, visuals and creative direction that make people recognise you.", bg: '#2ec4b6', fg: '#14110c', wm: 'rgba(20,17,12,.25)' }
      ],
      clients: [
        { i: '0', name: 'Olive Heights', meta: 'Rooftop dining', logo: 'clients/olive-heights.png' }, { i: '1', name: 'Olive Garden', meta: 'Restaurant', logo: 'clients/olive-garden.png' },
        { i: '2', name: 'Awesome Palace', meta: 'Luxury hotel', logo: 'clients/awesome-palace.png' }, { i: '3', name: 'Fix24', meta: 'Cloud infrastructure', logo: 'clients/fix24.png' },
        { i: '4', name: 'Ahvi Gold', meta: 'Gold buying', logo: 'clients/ahvi-gold.png' }, { i: '5', name: 'Jewellery Hub', meta: 'Jewellery', logo: 'clients/jewellery-hub.png' },
        { i: '6', name: 'Paxmeet', meta: 'Digital platform', logo: 'clients/paxmeet.png' }, { i: '7', name: 'Coriander', meta: 'Café & bar', logo: 'clients/coriander.png' }
      ]
    };
  }
  componentDidMount() { this._c = []; this.boot(); }
  componentWillUnmount() {
    (this._c || []).forEach(f => { try { f() } catch (e) { } });
    try { this.dots && this.dots.dispose() } catch (e) { }
  }
  on(t, ev, fn, o) { t.addEventListener(ev, fn, o); this._c.push(() => t.removeEventListener(ev, fn, o)); }
  boot() {
    const P = this.props || {};
    const calm = (P.motion ?? 'full') === 'calm' || matchMedia('(prefers-reduced-motion: reduce)').matches;
    const $ = id => document.getElementById(id);
    const spd = Math.max(0.2, P.marqueeSpeed ?? 1) * (calm ? 0.7 : 1);
    document.querySelectorAll('[data-mq]').forEach(el => {
      const b = parseFloat(el.getAttribute('data-mqbase') || '40');
      el.style.animationDuration = (b / spd) + 's';
    });
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
    const inView = v => { const r = v.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth; };
    const kick = () => document.querySelectorAll('video[data-auto]').forEach(v => { if (v.dataset.snd !== '1') v.muted = true; if (v.paused && inView(v)) { const p = v.play(); if (p) p.catch(() => { }); } });
    kick();
    document.querySelectorAll('video[data-auto]').forEach(v => { ['canplay', 'loadeddata'].forEach(ev => this.on(v, ev, kick)); });
    const vids = [...document.querySelectorAll('video[data-auto]')];
    let vAlive = true;
    const vPoll = () => {
      if (!vAlive) return;
      vids.forEach(v => {
        const r = v.getBoundingClientRect();
        const vis = r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth;
        if (vis && v.paused) {
          const p = v.play();
          if (p) p.catch(() => {
            v.muted = true; delete v.dataset.snd;
            const b = $('sndBtn');
            if (b && v.id === 'reelVid') b.textContent = 'Sound off';
          });
        } else if (!vis && !v.paused) v.pause();
      });
      setTimeout(() => requestAnimationFrame(vPoll), 400);
    };
    requestAnimationFrame(vPoll);
    this._c.push(() => { vAlive = false; });
    const rvid = $('reelVid'), sb = $('sndBtn');
    if (rvid && sb) this.on(sb, 'click', () => {
      rvid.muted = !rvid.muted;
      if (rvid.muted) delete rvid.dataset.snd; else rvid.dataset.snd = '1';
      if (!rvid.muted) { rvid.volume = 1; const p = rvid.play(); if (p) p.catch(() => { }); }
      sb.textContent = rvid.muted ? 'Sound off' : 'Sound on';
    });
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
    const panels = [...document.querySelectorAll('[data-sol]')];
    const narrow = () => innerWidth < 760;
    const rail = $('solRail');
    const setActive = i => {
      panels.forEach((p, j) => {
        const on = j === i;
        p.style.flex = narrow() ? '1' : (on ? '2.6' : '1');
        p.style.background = on ? (p.getAttribute('data-bg') || 'var(--color-accent)') : 'transparent';
        const g = p.querySelector('[data-ghost]'), f = p.querySelector('[data-full]');
        if (g) g.style.opacity = on ? '0' : '1';
        if (f) { f.style.opacity = on ? '1' : '0'; f.style.pointerEvents = on ? 'auto' : 'none'; }
      });
    };
    const layoutRail = () => {
      if (!rail) return;
      if (narrow()) {
        rail.style.flexDirection = 'column';
        panels.forEach(p => {
          p.style.minHeight = '320px'; p.style.borderRight = '0'; p.style.borderBottom = '2px solid var(--color-divider)';
          const gv = p.querySelector('[data-gv]'); if (gv) { gv.style.writingMode = 'horizontal-tb'; gv.style.transform = 'none'; }
        });
      } else {
        rail.style.flexDirection = 'row';
        panels.forEach(p => {
          p.style.minHeight = ''; p.style.borderRight = '2px solid var(--color-divider)'; p.style.borderBottom = '0';
          const gv = p.querySelector('[data-gv]'); if (gv) { gv.style.writingMode = 'vertical-rl'; gv.style.transform = 'rotate(180deg)'; }
        });
      }
    };
    layoutRail();
    setActive(0);
    panels.forEach((p, i) => {
      this.on(p, 'pointerenter', () => setActive(i));
      this.on(p, 'focusin', () => setActive(i));
      if (narrow()) this.on(p, 'click', () => setActive(i));
    });
    this.on(window, 'resize', () => { layoutRail(); setActive(0); });
    const clPal = [['#ffd23f', '#14110c'], ['#ff6b35', '#14110c'], ['#2ec4b6', '#14110c'], ['#ff8fab', '#14110c'], ['#1d1a14', '#f6f3ec']];
    document.querySelectorAll('[data-cl]').forEach(cell => {
      const i = +(cell.getAttribute('data-cl') || 0);
      const [bg, fg] = clPal[i % clPal.length];
      const nm = cell.querySelector('[data-cln]'), mt = cell.querySelector('[data-clm]');
      this.on(cell, 'pointerenter', () => {
        cell.style.background = bg;
        cell.style.transform = `rotate(${i % 2 ? 2 : -2}deg) scale(1.05)`;
        cell.style.zIndex = '2'; cell.style.position = 'relative';
        if (nm) nm.style.color = fg;
        if (mt) { mt.style.color = fg; mt.style.opacity = '.85'; mt.style.maxHeight = '20px'; }
      });
      this.on(cell, 'pointerleave', () => {
        cell.style.background = 'var(--color-bg)';
        cell.style.transform = 'none'; cell.style.zIndex = '';
        if (nm) nm.style.color = 'var(--color-neutral-500)';
        if (mt) { mt.style.opacity = '0'; mt.style.maxHeight = '0'; }
      });
    });
    if (!calm && matchMedia('(pointer: fine)').matches) {
      document.querySelectorAll('[data-mag]').forEach(el => {
        const mv = e => { const b = el.getBoundingClientRect(); el.style.transform = `translate(${(e.clientX - b.left - b.width / 2) * .2}px, ${(e.clientY - b.top - b.height / 2) * .2}px)`; };
        const lv = () => { el.style.transition = 'transform .4s cubic-bezier(.34,1.56,.64,1), background .25s'; el.style.transform = 'none'; setTimeout(() => { el.style.transition = 'background .25s'; }, 400); };
        this.on(el, 'pointermove', mv); this.on(el, 'pointerleave', lv);
      });
    }
    document.querySelectorAll('[data-case]').forEach(cs => {
      const z = cs.querySelector('[data-zoom]'), tt = cs.querySelector('[data-ttl]');
      this.on(cs, 'pointerenter', () => { if (z && !calm) z.style.transform = 'scale(1.04)'; if (tt) tt.style.color = 'var(--color-accent-700)'; if (!calm && cs.style.borderWidth) { if (cs.__b === undefined) cs.__b = cs.style.borderColor; cs.style.borderColor = ['#ff6b35','#2ec4b6','#ffd23f','#ff8fab'][Math.floor(Math.random()*4)]; } });
      this.on(cs, 'pointerleave', () => { if (z) z.style.transform = 'scale(1)'; if (tt) tt.style.color = 'var(--color-text)'; if (cs.__b !== undefined) cs.style.borderColor = cs.__b; });
    });
    const reelSec = $('reelSec'), reelWrap = $('reelWrap');
    const mani = $('defines'), maniP = $('maniWords');
    const words = maniP ? [...maniP.querySelectorAll('span')] : [];
    let ri = 0;
    words.forEach(w => { if (w.getAttribute('data-red') === '1') w.__pop = ['#ff6b35', '#2ec4b6', '#ff8fab'][ri++ % 3]; });
    const reachImg = $('reachImg'), reach = $('reach');
    const c01 = v => v < 0 ? 0 : v > 1 ? 1 : v;
    let alive = true, lastWord = -1;
    const tickFn = () => {
      if (!alive) return;
      if (reelSec && reelWrap) {
        const r = reelSec.getBoundingClientRect();
        const d = r.height - innerHeight;
        const p = d > 0 ? c01(-r.top / d) : 0;
        const grow = c01(p / 0.55), gone = c01((p - 0.8) / 0.2);
        const gs = grow * grow * (3 - 2 * grow);
        reelWrap.style.width = (62 + 38 * gs) + '%';
        reelWrap.style.transform = `translateY(${-gone * 22}vh) scale(${1 - gone * .14})`;
        reelWrap.style.opacity = String(1 - gone * .95);
      }
      if (mani && words.length) {
        const r = mani.getBoundingClientRect();
        const p = c01((innerHeight * 0.9 - r.top) / (r.height + innerHeight * 0.3));
        const n = Math.floor(p * 1.3 * words.length);
        if (n !== lastWord) {
          words.forEach((w, i) => {
            const on = i < n;
            w.style.opacity = on ? '1' : '.18';
            if (w.getAttribute('data-red') === '1') w.style.color = on ? (w.__pop || 'var(--color-accent-600)') : '';
          });
          lastWord = n;
        }
      }
      if (reachImg && reach) {
        const r = reach.getBoundingClientRect();
        const p = c01((innerHeight - r.top) / (innerHeight + r.height));
        reachImg.style.transform = `translateY(${(p - 0.5) * 60}px)`;
      }
      requestAnimationFrame(tickFn);
    };
    requestAnimationFrame(tickFn);
    this._c.push(() => { alive = false; });
    import('../lib/three-fx.js').then(async fx => {
      const hc = $('heroCanvas');
      if (hc) {
        this.dots = await fx.dotField(hc, { calm });
        const hs = $('hero');
        this.on(hs, 'pointermove', e => this.dots.setPointer(e.clientX, e.clientY));
        this.on(hs, 'pointerleave', () => this.dots.clearPointer());
      }
    }).catch(err => console.warn('3D disabled:', err));
  }
}

export default function HomePage() {
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

<div data-screen-label="Ticker" style={{"overflow": "hidden", "borderBottom": "2px solid var(--color-divider)"}}>
  <div data-mq data-mqbase="42" style={{"display": "flex", "width": "max-content", "animation": "mq 42s linear infinite"}}>
    {vals.tick4.map((tk, $index) => (<React.Fragment key={$index}>
      <div style={{"display": "flex", "alignItems": "center", "gap": "24px", "padding": "9px 0 9px 24px", "whiteSpace": "nowrap"}}>
        <span style={{"fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase", "color": "color-mix(in srgb, var(--color-text) 70%, transparent)"}}>{tk.a}</span>
        <a href="contact.html" style={{"fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase", "fontWeight": "600", "color": "var(--color-accent-700)", "textDecoration": "none"}}>{tk.b}</a>
      </div>
    </React.Fragment>))}
  </div>
</div>

<nav id="nav" data-screen-label="Nav" style={{"position": "sticky", "top": "0", "zIndex": "90", "background": "rgba(246,243,236,.92)", "backdropFilter": "blur(14px)", "borderBottom": "2px solid var(--color-divider)"}}>
  <div style={{"display": "flex", "alignItems": "center", "gap": "clamp(14px,2.2vw,32px)", "padding": "16px clamp(24px,6vw,96px)"}}>
    <a href="index.html" style={{"display": "flex", "alignItems": "center", "textDecoration": "none", "marginRight": "auto"}}>
      <img src="logo-ink.png" alt="The Social Verse" width="351" height="236" style={{"display": "block", "height": "clamp(30px,3.2vw,40px)", "width": "auto"}} />
    </a>
    <div style={{"display": "flex", "alignItems": "center", "gap": "clamp(14px,2.2vw,32px)", "marginRight": "auto", "flexWrap": "wrap"}}>
      <a href="index.html" aria-current="page" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-accent-700)", "borderBottom": "2px solid var(--color-accent)", "paddingBottom": "2px"}}>Home</a>
      <a href="portfolio.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(#ff6b35,#ff6b35)", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">Portfolio</a>
      <a href="case-studies.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(#2ec4b6,#2ec4b6)", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">Case Studies</a>
      <div id="megaWrap" style={{"position": "static"}}>
        <button id="megaBtn" type="button" style={{"border": "0", "background": "none", "font": "inherit", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "padding": "0 0 2px", "display": "inline-flex", "alignItems": "center", "gap": "6px"}} className="hv-2">Services <span id="megaCaret" style={{"fontSize": "10px", "transition": "transform .3s"}}>▾</span></button>
      </div>
      <a href="about.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(#ff8fab,#ff8fab)", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">About us</a>
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
          <span style={{"display": "block", "overflow": "hidden", "border": "2px solid var(--color-divider)"}}><span style={{"display": "block", "aspectRatio": "16/10", "background": "var(--color-neutral-200)"}}><image-slot id="mega-feat-1" shape="rect" placeholder="Featured creative" src="work/grids/olive-heights-grid.jpg"></image-slot></span></span>
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

<header id="hero" data-screen-label="Hero" style={{"position": "relative", "minHeight": "72vh", "display": "flex", "flexDirection": "column", "justifyContent": "center", "overflow": "hidden", "padding": "clamp(64px,9vh,110px) clamp(24px,6vw,96px)"}}>
  <canvas id="heroCanvas" style={{"position": "absolute", "inset": "0", "width": "100%", "height": "100%", "display": "block", "pointerEvents": "none"}}></canvas>
  <div style={{"position": "absolute", "inset": "0", "background": "radial-gradient(560px circle at 72% 26%, rgba(171,144,92,.17), transparent 70%)", "pointerEvents": "none"}}></div>
  <div style={{"position": "relative"}}>
    <h1 style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(44px,6.8vw,116px)", "lineHeight": "1.02", "letterSpacing": "-.028em", "margin": "0", "maxWidth": "15ch", "color": "var(--color-text)"}}>
      <span style={{"display": "block", "overflow": "hidden", "paddingBottom": ".12em", "marginBottom": "-.12em"}}><span data-ml data-mld="0" style={{"display": "block"}}>Your brand deserves</span></span>
      <span style={{"display": "block", "overflow": "hidden", "paddingBottom": ".12em", "marginBottom": "-.12em"}}><span data-ml data-mld="1" style={{"display": "block"}}>more than <span style={{"color": "var(--color-accent-600)"}}>just a post.</span></span></span>
    </h1>
    <p data-rv data-rvd="2" style={{"fontSize": "clamp(15px,1.3vw,18px)", "lineHeight": "1.65", "margin": "clamp(24px,4vh,40px) 0 0", "maxWidth": "56ch", "color": "color-mix(in srgb, var(--color-text) 78%, transparent)"}}>There are already a thousand brands posting every day. Another reel. Another “Happy Monday.” Another boosted post that nobody remembers. We don't want to add to that noise.</p>
    <div data-rv data-rvd="3" style={{"display": "flex", "alignItems": "center", "gap": "20px", "marginTop": "clamp(22px,3.5vh,34px)"}}>
      <a href="portfolio.html" style={{"textDecoration": "none"}} className="btn btn-primary">Let's Talk</a>
      <a href="services.html" style={{"textDecoration": "none", "fontSize": "14px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(#ffd23f,#ffd23f)", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "100% 2px", "paddingBottom": "3px"}} className="hv-5">Our services</a>
    </div>
  </div>
</header>

<section data-screen-label="Marquee + Reel" style={{"borderTop": "2px solid var(--color-divider)"}}>
  <div style={{"overflow": "hidden", "padding": "14px 0", "borderBottom": "2px solid var(--color-divider)"}}>
    <div data-mq data-mqbase="32" style={{"display": "flex", "width": "max-content", "animation": "mq 32s linear infinite", "alignItems": "center"}}>
      {vals.shout4.map((sh, $index) => (<React.Fragment key={$index}>
        <div style={{"display": "flex", "alignItems": "center", "gap": "30px", "paddingRight": "30px", "whiteSpace": "nowrap"}}>
          <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "textTransform": "uppercase", "fontSize": "clamp(36px,5.4vw,76px)", "lineHeight": "1", "letterSpacing": "-.01em", "color": "transparent", "WebkitTextStroke": "1.5px color-mix(in srgb, var(--color-text) 62%, transparent)"}}>{sh}</span>
          <span style={{"width": "13px", "height": "13px", "background": `${vals.sh2}`, "flex": "none"}}></span>
        </div>
      </React.Fragment>))}
    </div>
  </div>
  <div id="reelSec" style={{"height": "240vh", "position": "relative"}}>
    <div style={{"position": "sticky", "top": "0", "height": "100vh", "overflow": "hidden", "display": "flex", "alignItems": "center", "justifyContent": "center", "background": "var(--color-bg)"}}>
      <div id="reelWrap" style={{"position": "relative", "overflow": "hidden", "width": "62%", "minWidth": "320px", "willChange": "width,transform,opacity"}}>
        <video id="reelVid" data-auto src="work/showreel/social-verse-showreel.mp4" poster="work/showreel/social-verse-showreel-poster.jpg" autoPlay muted loop playsInline preload="auto" aria-label="Showreel" style={{"display": "block", "width": "100%", "aspectRatio": "16/9", "objectFit": "cover", "filter": "brightness(.97)"}}></video>
        <button id="sndBtn" type="button" style={{"position": "absolute", "right": "16px", "bottom": "12px", "border": "2px solid rgba(255,255,255,.5)", "background": "rgba(14,13,11,.45)", "backdropFilter": "blur(8px)", "color": "#fff", "font": "inherit", "fontSize": "10px", "letterSpacing": ".18em", "textTransform": "uppercase", "padding": "7px 12px", "transition": "border-color .3s, color .3s"}} className="hv-6">Sound off</button>
      </div>
    </div>
  </div>
</section>

<section id="defines" data-screen-label="Intro" style={{"borderTop": "2px solid var(--color-divider)", "padding": "clamp(80px,10vw,150px) clamp(24px,6vw,96px)"}}>
  <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(300px,1fr))", "gap": "clamp(36px,6vw,96px)", "alignItems": "center"}}>
    <div data-rv aria-hidden="true" style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(120px,17vw,280px)", "lineHeight": ".75", "color": "var(--color-accent)"}}>↗</div>
    <div>
      <p id="maniWords" style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(24px,2.7vw,40px)", "lineHeight": "1.32", "letterSpacing": "-.015em", "margin": "0", "maxWidth": "28ch"}}>
        {vals.maniWords.map((wd, $index) => (<React.Fragment key={$index}><span data-red={wd.r} style={{"opacity": ".18", "transition": "opacity .4s, color .4s"}}>{wd.w} </span></React.Fragment>))}
      </p>
      <p data-rv style={{"fontSize": "15px", "lineHeight": "1.7", "margin": "26px 0 0", "maxWidth": "52ch", "color": "color-mix(in srgb, var(--color-text) 65%, transparent)"}}>Sometimes that means fixing a social media page. Sometimes it means running ads. Sometimes it means figuring out what the brand should actually be saying in the first place.</p>
      <a data-rv data-rvd="1" href="about.html" style={{"textDecoration": "none", "marginTop": "28px"}} className="btn btn-primary">More about us →</a>
    </div>
  </div>
</section>

<section data-screen-label="Portfolio teaser" style={{"borderTop": "2px solid var(--color-divider)", "padding": "clamp(70px,9vw,130px) clamp(24px,6vw,96px)"}}>
  <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "16px", "flexWrap": "wrap", "marginBottom": "clamp(28px,4vw,48px)"}}>
    <h2 data-rv style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(28px,3.4vw,48px)", "letterSpacing": "-.02em", "margin": "0"}}>Portfolio</h2>
    <a data-rv data-rvd="1" href="portfolio.html" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(#ff6b35,#ff6b35)", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">View Portfolio →</a>
  </div>
  <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(260px,1fr))", "gap": "clamp(18px,2.6vw,36px)"}}>
    {vals.pf.map((p, $index) => (<React.Fragment key={$index}>
      <a data-case data-rv href={p.href} style={{"textDecoration": "none", "display": "block", "border": "2px solid var(--color-divider)"}}>
        <span style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "10px", "padding": "12px 16px", "background": `${p.bg}`, "color": `${p.fg}`}}>
          <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(16px,1.6vw,20px)", "letterSpacing": "-.01em"}}>{p.t}</span>
          <span style={{"fontSize": "16px"}}>→</span>
        </span>
        <span style={{"display": "block", "overflow": "hidden"}}>
          <span data-zoom style={{"display": "block", "transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}>
            <span style={{"display": "block", "aspectRatio": "4/3", "background": "var(--color-neutral-200)"}}><image-slot id={p.slot} shape="rect" placeholder={p.ph} src={p.img}></image-slot></span>
          </span>
        </span>
        <span style={{"display": "block", "fontSize": "12px", "letterSpacing": ".06em", "padding": "12px 16px", "color": "color-mix(in srgb, var(--color-text) 60%, transparent)"}}>{p.d}</span>
      </a>
    </React.Fragment>))}
  </div>
</section>

<section data-screen-label="Reels" style={{"borderTop": "2px solid var(--color-divider)", "padding": "clamp(70px,9vw,130px) clamp(24px,6vw,96px)"}}>
  <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "16px", "flexWrap": "wrap", "marginBottom": "clamp(28px,4vw,48px)"}}>
    <h2 data-rv style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(28px,3.4vw,48px)", "letterSpacing": "-.02em", "margin": "0"}}>Reels</h2>
    <a data-rv data-rvd="1" href="portfolio.html#reels" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(#ff8fab,#ff8fab)", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">See all reels →</a>
  </div>
  <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(200px,1fr))", "gap": "clamp(14px,2vw,26px)"}}>
    {vals.reels.map((r, $index) => (<React.Fragment key={$index}>
      <div data-case data-rv style={{"border": "2px solid var(--color-divider)", "overflow": "hidden"}}>
        <div data-zoom style={{"transition": "transform 1.3s cubic-bezier(.22,1,.36,1)"}}>
          <video data-auto src={r.v} poster={r.p} autoPlay muted loop playsInline preload="metadata" aria-label={r.cl} style={{"display": "block", "width": "100%", "aspectRatio": "9/16", "objectFit": "cover", "background": "var(--color-neutral-200)"}}></video>
        </div>
        <div style={{"padding": "12px 16px"}}>
          <span style={{"display": "block", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(14px,1.4vw,17px)"}}>{r.cl}</span>
          <span style={{"display": "block", "fontSize": "12px", "letterSpacing": ".06em", "color": "color-mix(in srgb, var(--color-text) 60%, transparent)"}}>{r.k}</span>
        </div>
      </div>
    </React.Fragment>))}
  </div>
</section>

<section data-screen-label="Case studies teaser" style={{"borderTop": "2px solid var(--color-divider)", "padding": "clamp(70px,9vw,130px) clamp(24px,6vw,96px)"}}>
  <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "16px", "flexWrap": "wrap", "marginBottom": "clamp(28px,4vw,48px)"}}>
    <h2 data-rv style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(28px,3.4vw,48px)", "letterSpacing": "-.02em", "margin": "0"}}>Case studies</h2>
    <a data-rv data-rvd="1" href="case-studies.html" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(#2ec4b6,#2ec4b6)", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">Read the case studies →</a>
  </div>
  <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(280px,1fr))", "gap": "clamp(18px,2.6vw,36px)"}}>
    {vals.cases.map((c, $index) => (<React.Fragment key={$index}>
      <a data-case data-rv href={c.href} style={{"textDecoration": "none", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "gap": "26px", "minHeight": "300px", "padding": "clamp(20px,2.6vw,32px)", "background": `${c.bg}`, "color": `${c.fg}`, "position": "relative", "overflow": "hidden"}}>
        <span aria-hidden="true" style={{"position": "absolute", "right": "6px", "bottom": "-18px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(110px,12vw,180px)", "lineHeight": ".8", "opacity": ".18"}}>{c.n}</span>
        <span style={{"fontSize": "11px", "letterSpacing": ".18em", "textTransform": "uppercase", "fontWeight": "600", "opacity": ".75"}}>{c.k}</span>
        <span>
          <span style={{"display": "block", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(22px,2.3vw,32px)", "lineHeight": "1.05", "letterSpacing": "-.015em"}}>{c.t}</span>
          <span style={{"display": "block", "fontSize": "14px", "lineHeight": "1.6", "marginTop": "12px", "maxWidth": "40ch", "opacity": ".85"}}>{c.d}</span>
          <span style={{"display": "inline-block", "fontSize": "12px", "fontWeight": "600", "letterSpacing": ".08em", "textTransform": "uppercase", "marginTop": "18px", "borderBottom": "2px solid currentColor", "paddingBottom": "2px"}}>Know more →</span>
        </span>
      </a>
    </React.Fragment>))}
  </div>
</section>

<section id="services" data-screen-label="Services rail" style={{"borderTop": "2px solid var(--color-divider)"}}>
  <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "16px", "flexWrap": "wrap", "padding": "18px clamp(24px,6vw,96px)", "borderBottom": "2px solid var(--color-divider)"}}>
    <h2 style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(28px,3.4vw,48px)", "letterSpacing": "-.02em", "margin": "0"}}>What We Do</h2>
    <a href="services.html" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(#ffd23f,#ffd23f)", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">See What We Do →</a>
  </div>
  <div id="solRail" style={{"display": "flex", "minHeight": "64vh"}}>
    {vals.sols.map((s, $index) => (<React.Fragment key={$index}>
      <div data-sol data-bg={s.bg} style={{"flex": "1", "minWidth": "0", "position": "relative", "overflow": "hidden", "borderRight": "2px solid var(--color-divider)", "background": "transparent", "transition": "flex .65s cubic-bezier(.22,1,.36,1), background .5s"}}>
        <div data-ghost style={{"position": "absolute", "inset": "0", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "space-between", "padding": "22px 8px", "transition": "opacity .4s"}}>
          <span style={{"fontSize": "12px", "fontVariantNumeric": "tabular-nums", "fontWeight": "800", "color": "var(--color-accent-700)"}}>{s.n}</span>
          <span data-gv style={{"writingMode": "vertical-rl", "transform": "rotate(180deg)", "fontFamily": "var(--font-heading)", "fontWeight": "800", "textTransform": "uppercase", "fontSize": "clamp(18px,1.9vw,30px)", "letterSpacing": ".08em", "color": "var(--color-neutral-600)", "whiteSpace": "nowrap"}}>{s.t}</span>
          <span style={{"width": "8px", "height": "8px", "background": "var(--color-neutral-400)"}}></span>
        </div>
        <div data-full style={{"position": "absolute", "inset": "0", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "padding": "clamp(20px,2.6vw,40px)", "opacity": "0", "transition": "opacity .5s .08s", "color": `${s.fg}`}}>
          <div aria-hidden="true" style={{"position": "absolute", "right": "6px", "bottom": "-16px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(120px,13vw,210px)", "lineHeight": ".8", "color": "transparent", "WebkitTextStroke": `2px ${s.wm}`, "pointerEvents": "none"}}>{s.n}</div>
          <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "10px"}}>
            <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontVariantNumeric": "tabular-nums", "fontSize": "15px"}}>{s.n} / 04</span>
            <span style={{"fontSize": "10px", "letterSpacing": ".18em", "textTransform": "uppercase", "opacity": ".7"}}>{s.k}</span>
          </div>
          <div>
            <div style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "textTransform": "uppercase", "fontSize": "clamp(24px,2.6vw,42px)", "lineHeight": "1", "letterSpacing": "-.015em"}}>{s.t}</div>
            <p style={{"fontSize": "14px", "lineHeight": "1.6", "margin": "14px 0 0", "maxWidth": "38ch", "opacity": ".82"}}>{s.c}</p>
          </div>
          <a href="services.html" aria-label={s.t} style={{"alignSelf": "flex-end", "width": "46px", "height": "46px", "border": "2px solid currentColor", "display": "flex", "alignItems": "center", "justifyContent": "center", "textDecoration": "none", "color": "inherit", "fontSize": "18px", "transition": "opacity .25s, transform .25s"}} className="hv-7">→</a>
        </div>
      </div>
    </React.Fragment>))}
  </div>
</section>

<section data-screen-label="Clientele" style={{"borderTop": "2px solid var(--color-divider)", "padding": "clamp(70px,9vw,130px) clamp(24px,6vw,96px)"}}>
  <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "16px", "flexWrap": "wrap", "marginBottom": "clamp(28px,4vw,48px)"}}>
    <h2 data-rv style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(28px,3.4vw,48px)", "letterSpacing": "-.02em", "margin": "0"}}>Brands We've Worked With</h2>
    <a data-rv data-rvd="1" href="clients.html" style={{"textDecoration": "none", "fontSize": "13px", "fontWeight": "600", "color": "var(--color-text)", "backgroundImage": "linear-gradient(#ffd23f,#ffd23f)", "backgroundRepeat": "no-repeat", "backgroundPosition": "0 100%", "backgroundSize": "0 2px", "transition": "background-size .4s cubic-bezier(.22,1,.36,1)", "paddingBottom": "2px"}} className="hv-1">All clients →</a>
  </div>
  <div style={{"display": "flex", "flexWrap": "wrap", "gap": "2px", "background": "var(--color-divider)", "border": "2px solid var(--color-divider)"}}>
    {vals.clients.map((cl, $index) => (<React.Fragment key={$index}>
      <div data-cl={cl.i} data-rv style={{"flex": "1 1 130px", "background": "var(--color-bg)", "padding": "clamp(16px,2.4vw,28px) 14px", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "6px", "minHeight": "96px", "transition": "background .35s, transform .35s"}}>
        <img src={cl.logo} alt="" style={{"display": "block", "height": "clamp(30px,3.4vw,44px)", "width": "auto", "maxWidth": "84%", "objectFit": "contain", "marginBottom": "4px"}} />
        <span data-cln style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(14px,1.3vw,18px)", "letterSpacing": ".06em", "textTransform": "uppercase", "textAlign": "center", "color": "var(--color-neutral-500)", "transition": "color .3s"}}>{cl.name}</span>
        <span data-clm style={{"fontSize": "10px", "letterSpacing": ".14em", "textTransform": "uppercase", "textAlign": "center", "color": "rgba(20,17,12,.75)", "opacity": "0", "maxHeight": "0", "overflow": "hidden", "transition": "opacity .3s, max-height .3s"}}>{cl.meta}</span>
      </div>
    </React.Fragment>))}
    <a href="contact.html" data-rv style={{"flex": "1 1 130px", "background": "var(--color-accent)", "color": "#14110c", "textDecoration": "none", "padding": "clamp(16px,2.4vw,28px) 14px", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "6px", "minHeight": "96px", "transform": "rotate(-2deg)", "transition": "transform .35s"}} className="hv-8">
      <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(14px,1.3vw,18px)", "letterSpacing": ".06em", "textTransform": "uppercase", "textAlign": "center"}}>Your brand here</span>
      <span style={{"fontSize": "10px", "letterSpacing": ".14em", "textTransform": "uppercase", "opacity": ".7"}}>Let's talk →</span>
    </a>
  </div>
</section>

<section id="reach" data-screen-label="Reach" style={{"position": "relative", "minHeight": "80vh", "display": "flex", "alignItems": "flex-end", "overflow": "hidden", "borderTop": "2px solid var(--color-divider)"}}>
  <img id="reachImg" src="work/teasers/reach-billboard.jpg" alt="Billboard we designed for Jewellery Hub" style={{"position": "absolute", "left": "0", "top": "-12%", "width": "100%", "height": "124%", "objectFit": "cover", "objectPosition": "50% 22%", "filter": "brightness(.52)", "willChange": "transform"}} />
  <div style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg, rgba(14,13,11,.5) 0%, rgba(14,13,11,.34) 38%, rgba(14,13,11,.92) 100%)"}}></div>
  <div style={{"position": "relative", "width": "100%", "padding": "clamp(90px,12vw,180px) clamp(24px,6vw,96px) clamp(48px,7vw,88px)"}}>
    <h2 style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(36px,5.4vw,84px)", "lineHeight": "1.04", "letterSpacing": "-.024em", "margin": "0", "maxWidth": "16ch", "color": "#f6f3ec"}}>
      <span style={{"display": "block", "overflow": "hidden", "paddingBottom": ".12em", "marginBottom": "-.12em"}}><span data-ml data-mld="0" style={{"display": "block"}}>All eyes</span></span>
      <span style={{"display": "block", "overflow": "hidden", "paddingBottom": ".12em", "marginBottom": "-.12em"}}><span data-ml data-mld="1" style={{"display": "block"}}>on <span style={{"color": "#ffd23f"}}>your brand</span>.</span></span>
    </h2>
    <p data-rv style={{"fontSize": "15px", "lineHeight": "1.65", "margin": "22px 0 0", "maxWidth": "44ch", "color": "rgba(241,236,225,.85)"}}>Strategy, creativity and visibility, everywhere your audience looks.</p>
  </div>
</section>

<section data-screen-label="Start" style={{"background": "var(--color-accent)", "color": "#14110c", "padding": "clamp(60px,8vw,110px) 0 clamp(80px,10vw,150px)", "overflow": "hidden"}}>
  <div data-mq data-mqbase="24" style={{"display": "flex", "width": "max-content", "animation": "mq 24s linear infinite", "alignItems": "center", "marginBottom": "clamp(36px,5vw,64px)"}}>
    {vals.close4.map((cw, $index) => (<React.Fragment key={$index}>
      <div style={{"display": "flex", "alignItems": "center", "gap": "26px", "paddingRight": "26px", "whiteSpace": "nowrap"}}>
        <span style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "textTransform": "uppercase", "fontSize": "clamp(30px,4.4vw,64px)", "lineHeight": "1", "color": "transparent", "WebkitTextStroke": "1.5px rgba(20,17,12,.5)"}}>{cw}</span>
        <span style={{"width": "12px", "height": "12px", "background": "#14110c", "flex": "none"}}></span>
      </div>
    </React.Fragment>))}
  </div>
  <div style={{"padding": "0 clamp(24px,6vw,96px)"}}>
    <div style={{"fontSize": "11px", "letterSpacing": ".22em", "textTransform": "uppercase", "fontWeight": "600", "opacity": ".7", "marginBottom": "20px"}}>We handle the thinking, the creating and the execution.</div>
    <h2 style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "clamp(38px,5.8vw,96px)", "lineHeight": "1.05", "letterSpacing": "-.025em", "margin": "0", "color": "#14110c", "display": "flex", "flexWrap": "wrap", "gap": "0 .26em"}}>
      {vals.closeWords.map((wd, $index) => (<React.Fragment key={$index}><span onMouseEnter={(e)=>{Object.assign(e.currentTarget.style,{"transform": "translateY(-12px) rotate(-3deg)", "color": wd.hc});}} onMouseLeave={(e)=>{Object.assign(e.currentTarget.style,{"transform": "", "color": ""});}} style={{"display": "inline-block", "transition": "transform .35s cubic-bezier(.34,1.56,.64,1), color .25s"}}>{wd.w}</span></React.Fragment>))}
    </h2>
    <div style={{"display": "flex", "alignItems": "center", "gap": "26px", "flexWrap": "wrap", "marginTop": "36px"}}>
      <a data-mag href="contact.html" style={{"textDecoration": "none", "color": "#14110c", "border": "2px solid #14110c", "padding": "14px 26px", "fontFamily": "var(--font-heading)", "fontWeight": "800", "fontSize": "14px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "background .25s"}} className="hv-9">Let's Talk →</a>
      <a href="mailto:info@thesocialverse.co.in" style={{"color": "#14110c", "fontWeight": "600", "fontSize": "15px", "textUnderlineOffset": "5px"}} className="hv-10">info@thesocialverse.co.in</a>
    </div>
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
