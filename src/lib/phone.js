// Phone helpers shared by every page. Called once from useDC's mount effect, right after the page's boot().
export function phoneEnhance() {
  const offs = [];
  const on = (t, ev, fn, o) => { t.addEventListener(ev, fn, o); offs.push(() => t.removeEventListener(ev, fn, o)); };
  const done = () => () => offs.forEach(f => f());

  // (a) Back/forward cache. boot() slides #wipe over the page (translateX(0)) before following an internal link, and only a fresh load slides it away. A page restored by Back would stay covered by the stripes.
  on(window, 'pageshow', e => {
    if (!e.persisted) return;
    try { sessionStorage.removeItem('tsv_wipe'); } catch (err) { }
    const w = document.getElementById('wipe');
    if (!w) return;
    const t = w.style.transform;
    if (t !== 'translateX(0px)' && t !== 'translateX(0)') return;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      w.style.transition = 'transform .6s cubic-bezier(.76,0,.24,1)';
      w.style.transform = 'translateX(-108%)';
    }));
  });

  if (innerWidth >= 760) return done();

  // (b) Phone nav swipe row: if the current page's link is not fully visible, centre it (About is cut off and Contact is fully off-screen at 360/390).
  const row = document.querySelector('#nav > div:first-child > div');
  const cur = row && row.querySelector('[aria-current="page"]');
  if (row && cur) {
    let setTo = 0;
    const centre = () => {
      if (innerWidth >= 760 || row.scrollWidth <= row.clientWidth) return;
      const r = row.getBoundingClientRect(), c = cur.getBoundingClientRect();
      const pad = parseFloat(getComputedStyle(row).paddingLeft) || 0;
      if (c.left >= r.left + pad && c.right <= r.right - pad) return;
      const max = row.scrollWidth - row.clientWidth;
      row.scrollLeft = Math.max(0, Math.min(max, row.scrollLeft + (c.left + c.width / 2) - (r.left + r.width / 2)));
      setTo = row.scrollLeft;
    };
    centre();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (row.scrollLeft === setTo) centre(); });
  }

  // (d) Swipe rows: slot images past the row's clip edge are outside Chrome's lazy-load distance, so they would only start loading when swiped to. Load a row's images once the row nears the viewport.
  const swipeRows = document.querySelectorAll('#menus + div');
  if (swipeRows.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (!en.isIntersecting) return;
      io.unobserve(en.target);
      en.target.querySelectorAll('image-slot').forEach(sl => { if (sl.shadowRoot) sl.shadowRoot.querySelectorAll('img[loading="lazy"]').forEach(im => { im.loading = 'eager'; }); });
    }), { rootMargin: '600px 0px' });
    swipeRows.forEach(r => io.observe(r));
    offs.push(() => io.disconnect());
  }

  // (c) Deep links such as portfolio.html#reels (linked from Home). React renders the ids after the browser's own fragment scroll, so a fresh load stays at scrollY 0.
  const navEntry = performance.getEntriesByType ? performance.getEntriesByType('navigation')[0] : null;
  if (location.hash.length > 1 && (!navEntry || navEntry.type === 'navigate')) {
    let tg = null;
    try { tg = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch (err) { }
    if (tg) requestAnimationFrame(() => {
      tg.scrollIntoView({ block: 'start', behavior: 'instant' });
      const y0 = scrollY;
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (Math.abs(scrollY - y0) < 2) tg.scrollIntoView({ block: 'start', behavior: 'instant' }); });
    });
  }
  return done();
}
