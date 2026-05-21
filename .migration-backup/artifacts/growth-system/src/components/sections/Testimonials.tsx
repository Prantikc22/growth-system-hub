import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const offsetRef = useRef(0);
  const draggingRef = useRef<{ x: number; offset: number } | null>(null);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const speed = 50; // px/sec
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const t = trackRef.current;
      if (t && !paused && !draggingRef.current) {
        offsetRef.current -= speed * dt;
        const w = t.scrollWidth / 2;
        if (-offsetRef.current >= w) offsetRef.current += w;
        t.style.transform = `translateX(${offsetRef.current}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  // drag
  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    const onDown = (e: PointerEvent) => {
      draggingRef.current = { x: e.clientX, offset: offsetRef.current };
      t.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      const dx = e.clientX - draggingRef.current.x;
      offsetRef.current = draggingRef.current.offset + dx;
      t.style.transform = `translateX(${offsetRef.current}px)`;
    };
    const onUp = () => { draggingRef.current = null; };
    t.addEventListener("pointerdown", onDown);
    t.addEventListener("pointermove", onMove);
    t.addEventListener("pointerup", onUp);
    t.addEventListener("pointercancel", onUp);
    return () => {
      t.removeEventListener("pointerdown", onDown);
      t.removeEventListener("pointermove", onMove);
      t.removeEventListener("pointerup", onUp);
      t.removeEventListener("pointercancel", onUp);
    };
  }, []);

  const items = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container-wide">
        <Reveal variant="up" className="text-center max-w-2xl mx-auto mb-12">
          <p className="pill mx-auto mb-4">From founders we work with</p>
          <h2 className="heading-section">No press releases. Just receipts.</h2>
        </Reveal>
      </div>
      <div
        className="relative cursor-grab active:cursor-grabbing select-none"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div ref={trackRef} className="flex gap-5 will-change-transform" style={{ touchAction: "pan-y" }}>
          {items.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  if (t.type === "whatsapp") {
    return (
      <div className="shrink-0 w-[300px] md:w-[340px] rounded-2xl bg-[#E5DDD5] p-3 shadow-card">
        <div className="bg-white rounded-2xl rounded-tl-sm p-4 max-w-[90%] relative">
          <div className="text-[11px] font-semibold text-[#075E54]">{t.name}</div>
          <p className="text-[15px] leading-snug text-foreground mt-1">{t.quote}</p>
          <div className="flex items-center justify-end gap-1 mt-2 text-[10px] text-muted-foreground">
            <span>{t.role}, {t.company}</span>
            <svg viewBox="0 0 16 11" width="14" height="10" fill="none"><path d="M11.071.653a.5.5 0 01.073.704L5.6 8.347a.5.5 0 01-.74.037L.93 4.45a.5.5 0 11.706-.708L5.21 7.31 10.367.726a.5.5 0 01.704-.073z" fill="#34B7F1"/></svg>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="shrink-0 w-[300px] md:w-[360px] rounded-2xl bg-card border border-border p-6 shadow-card">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full grid place-items-center font-bold text-white text-sm" style={{ background: t.accent }}>{t.initial}</div>
        <div>
          <div className="font-semibold text-sm">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.role}, {t.company}</div>
        </div>
      </div>
      <p className="text-foreground/90 text-[15px] leading-relaxed">"{t.quote}"</p>
    </div>
  );
}
