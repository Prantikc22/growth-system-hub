import { useEffect, useRef } from "react";

export const MagneticCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 768px)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let tx = x, ty = y;
    let rx = x, ry = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const tick = () => {
      x = tx; y = ty;
      rx += (tx - rx) * 0.14;
      ry += (ty - ry) * 0.14;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    const interactiveSel = 'a, button, [data-cursor], input, textarea, select, label, [role="button"]';
    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest(interactiveSel) as HTMLElement | null;
      if (!t) { dot.classList.remove("is-hover"); ring.classList.remove("is-hover"); return; }
      const label = t.getAttribute("data-cursor") || (t.tagName === "A" ? "Open" : "View");
      if (labelRef.current) labelRef.current.textContent = label;
      dot.classList.add("is-hover");
      ring.classList.add("is-hover");
    };
    const onOut = () => { dot.classList.remove("is-hover"); ring.classList.remove("is-hover"); };

    // Detect dark/light background to switch cursor color
    const onMoveDetect = (e: MouseEvent) => {
      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      if (!el) return;
      let node: HTMLElement | null = el;
      let dark = false;
      while (node && node !== document.body) {
        const bg = window.getComputedStyle(node).backgroundColor;
        const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (m) {
          const lum = 0.299 * +m[1] + 0.587 * +m[2] + 0.114 * +m[3];
          if (lum < 110) { dark = true; break; }
          if (lum > 200) { break; }
        }
        node = node.parentElement;
      }
      dot.classList.toggle("on-dark", dark);
      ring.classList.toggle("on-dark", dark);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousemove", onMoveDetect, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", onMoveDetect);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden>
        <span ref={labelRef} className="cursor-label">View</span>
      </div>
    </>
  );
};
