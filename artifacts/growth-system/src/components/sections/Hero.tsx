import { smoothScrollTo } from "@/lib/smooth-scroll";
import { Marquee } from "@/components/Marquee";
import { useEffect, useRef } from "react";

const CLIENT_LOGOS: { src: string; alt: string; mode?: "screen" }[] = [
  { src: "/clients/bodycraft.webp",   alt: "Bodycraft" },
  { src: "/clients/cosmic.webp",      alt: "Cosmic" },
  { src: "/clients/karigari.png",     alt: "Karigari" },
  { src: "/clients/chai-point.png",   alt: "Chai Point" },
  { src: "/clients/sarada.png",       alt: "Sarada Robotech" },
  { src: "/clients/dailyobjects.png", alt: "Daily Objects" },
  { src: "/clients/tott.png",         alt: "TOTT" },
  { src: "/clients/svaraa.png",       alt: "Svaraa" },
  { src: "/clients/oliva.png",        alt: "Oliva Clinic" },
  { src: "/clients/chaikaapi.png",    alt: "Chai Kaapi", mode: "screen" },
  { src: "/clients/on.jpg",           alt: "On Running",  mode: "screen" },
  { src: "/clients/kalyani.png",      alt: "Kalyani Packaging" },
  { src: "/clients/flank.png",        alt: "Flank",       mode: "screen" },
];

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const handleMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      target.x = (e.clientX - cx) / cx;
      target.y = (e.clientY - cy) / cy;
    };

    const animate = () => {
      current.x += (target.x - current.x) * 0.055;
      current.y += (target.y - current.y) * 0.055;
      const x = current.x;
      const y = current.y;

      if (bgRef.current)
        bgRef.current.style.transform = `translate(${x * 10}px, ${y * 6}px) scale(1.05)`;
      if (glowRef.current)
        glowRef.current.style.transform = `translate(${x * 28}px, ${y * 20}px)`;
      if (textRef.current)
        textRef.current.style.transform = `translate(${x * -4}px, ${y * -3}px)`;

      rafId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">

      {/* Background image layer — parallax depth 1 */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ backgroundImage: "url('/hero-laptop.png')" }}
      />

      {/* Ambient glow orb — parallax depth 2 */}
      <div
        ref={glowRef}
        className="absolute will-change-transform hero-glow-orb"
        style={{ top: "10%", right: "15%", width: 600, height: 600, pointerEvents: "none" }}
      />

      {/* Mobile overlay */}
      <div className="absolute inset-0 bg-[#080B12]/90 md:hidden" />
      {/* Desktop gradient */}
      <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#080B12]/98 via-[#080B12]/82 to-[#080B12]/10" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#080B12]/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#080B12] to-transparent" />

      {/* Main text content — parallax depth 3 */}
      <div className="container-wide flex-1 flex items-center relative pt-24 md:pt-32 pb-12" style={{ zIndex: 10 }}>
        <div ref={textRef} className="w-full md:max-w-[60%] will-change-transform">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 mb-6 md:mb-8"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Not an agency. An AI-powered growth system.
          </div>

          {/* Headline */}
          <h1 className="font-serif text-[clamp(3rem,8vw,5.5rem)] font-normal leading-[0.98] tracking-tight text-white mb-6 md:mb-7">
            More{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(90deg, #93c5fd 0%, #c4b5fd 45%, #f9a8d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              revenue.
            </em>
            <br />
            Less noise.
            <br />
            One team.
          </h1>

          {/* Subtitle */}
          <p className="text-white/55 text-base md:text-lg leading-relaxed mb-8 max-w-sm font-sans">
            AI-powered strategy, tech, performance ads, social and content —
            in one place, at transparent pricing, with a team that actually shows up.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <div className="hero-cta-ring rounded-full">
              <button
                onClick={() => smoothScrollTo("#configurator")}
                className="btn-gradient inline-flex items-center justify-center rounded-full w-full sm:w-auto px-8 py-4 text-sm relative z-10"
              >
                Get Growth Blueprint →
              </button>
            </div>
            <button
              onClick={() => smoothScrollTo("#work")}
              className="btn-outline-dark inline-flex items-center justify-center rounded-full border border-white/30 text-white w-full sm:w-auto px-8 py-4 text-sm hover:bg-white/8 hover:border-white/50"
            >
              See Case Studies
            </button>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {(["#7C3AED", "#0F766E", "#A8336E"] as const).map((c, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#080B12] grid place-items-center text-[10px] font-bold text-white" style={{ background: c }}>
                  {["AK", "RS", "DS"][i]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#FACC15">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/40 text-xs font-sans">4.9/5 from 25+ growth-focused brands</p>
            </div>
          </div>
        </div>
      </div>

      {/* Client logos strip */}
      <div className="relative" style={{ zIndex: 10, background: "linear-gradient(180deg, transparent 0%, rgba(8,11,18,0.85) 30%, #080B12 100%)" }}>
        <div className="py-6 md:py-7">
          <p className="text-center text-[10px] uppercase tracking-[0.2em] text-white/20 mb-5" style={{ fontFamily: "'Syne',sans-serif" }}>Trusted by</p>
          <Marquee duration={60} gap={72}>
            {CLIENT_LOGOS.map((logo) => (
              <div key={logo.alt} className="flex items-center justify-center shrink-0" style={{ height: 44 }}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  draggable={false}
                  className="opacity-40 hover:opacity-70 transition-opacity duration-300"
                  style={{
                    height: 38,
                    width: "auto",
                    maxWidth: 150,
                    objectFit: "contain",
                    ...(logo.mode === "screen"
                      ? { mixBlendMode: "screen", filter: "saturate(0) brightness(2.5)" }
                      : { filter: "brightness(0) invert(1)" }),
                  }}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
