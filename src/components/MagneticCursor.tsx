import { useEffect, useRef } from "react";

export const MagneticCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 768px)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x, ty = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const tick = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    const interactiveSel = 'a, button, [data-cursor], input, textarea, select, label, [role="button"]';
    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest(interactiveSel) as HTMLElement | null;
      if (!t) { dot.classList.remove("is-hover"); return; }
      const label = t.getAttribute("data-cursor") || (t.tagName === "A" ? "Open" : "View");
      if (labelRef.current) labelRef.current.textContent = label;
      dot.classList.add("is-hover");
    };
    const onOut = () => dot.classList.remove("is-hover");

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <div ref={dotRef} className="cursor-dot" aria-hidden>
      <span ref={labelRef} className="cursor-label">View</span>
    </div>
  );
};
