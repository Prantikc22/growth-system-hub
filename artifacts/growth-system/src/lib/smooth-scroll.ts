// Smooth scroll with cubic ease — one global helper
export function smoothScrollTo(target: number | string, duration = 800) {
  if (typeof window === "undefined") return;
  const startY = window.scrollY;
  let endY: number;
  if (typeof target === "number") endY = target;
  else {
    const el = document.querySelector(target) as HTMLElement | null;
    if (!el) return;
    endY = window.scrollY + el.getBoundingClientRect().top - 64;
  }
  const dist = endY - startY;
  const startT = performance.now();
  const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  function step(now: number) {
    const t = Math.min(1, (now - startT) / duration);
    window.scrollTo(0, startY + dist * ease(t));
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

export function bindAnchorSmoothScroll() {
  document.addEventListener("click", (e) => {
    const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
    if (!a) return;
    const id = a.getAttribute("href");
    if (!id || id === "#") return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    smoothScrollTo(id);
  });
}
