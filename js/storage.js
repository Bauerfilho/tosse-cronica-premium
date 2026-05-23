/* storage.js — wrapper de localStorage com namespacing */

const NS = 'tb-bauer:';

export function get(key, fallback = null) {
  try {
    const v = localStorage.getItem(NS + key);
    if (v === null) return fallback;
    try { return JSON.parse(v); }
    catch { return v; }
  } catch {
    return fallback;
  }
}

export function set(key, value) {
  try {
    const v = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(NS + key, v);
    return true;
  } catch {
    return false;
  }
}

export function remove(key) {
  try { localStorage.removeItem(NS + key); return true; }
  catch { return false; }
}

export function getSet(key) {
  const arr = get(key, []);
  return new Set(Array.isArray(arr) ? arr : []);
}

export function addToSet(key, item) {
  const s = getSet(key);
  s.add(item);
  set(key, Array.from(s));
}

export function removeFromSet(key, item) {
  const s = getSet(key);
  s.delete(item);
  set(key, Array.from(s));
}
