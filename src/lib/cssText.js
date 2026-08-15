// Converts a CSS declaration string (from page data) into a React style object.
export function cssText(str) {
  if (!str) return undefined;
  if (typeof str === 'object') return str;
  const o = {};
  String(str).split(';').forEach(d => {
    const i = d.indexOf(':'); if (i < 0) return;
    let k = d.slice(0, i).trim(); const v = d.slice(i + 1).trim();
    if (!k || !v) return;
    if (!k.startsWith('--')) k = k.replace(/-([a-z])/g, (m, c) => c.toUpperCase());
    o[k] = v;
  });
  return o;
}
