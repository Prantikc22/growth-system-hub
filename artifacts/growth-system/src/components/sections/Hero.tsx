import { smoothScrollTo } from "@/lib/smooth-scroll";
import { Marquee } from "@/components/Marquee";

const CLIENT_LOGOS = [
  { src: "/clients/82e.webp",       alt: "82°E",        w: 160, h: 44 },
  { src: "/clients/bodycraft.webp", alt: "Bodycraft",   w: 120, h: 34 },
  { src: "/clients/cosmic.webp",    alt: "Cosmic",      w: 110, h: 34 },
  { src: "/clients/karigari.png",   alt: "Karigari",    w: 200, h: 48 },
  { src: "/clients/chai-point.png", alt: "Chai Point",  w: 96,  h: 34 },
  { src: "/clients/sarada.png",     alt: "Sarada",      w: 110, h: 34 },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-laptop.png')" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080B12]/98 via-[#080B12]/82 to-[#080B12]/20 md:to-[#080B12]/10" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#080B12]/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#080B12] to-transparent" />

      {/* Main content */}
      <div className="container-wide flex-1 flex items-center relative z-10 pt-24 md:pt-32 pb-12">
        <div className="w-full md:max-w-[60%]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 mb-6 md:mb-8"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Not an agency. A growth system.
          </div>

          {/* Headline — Instrument Serif */}
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

          {/* Subtitle — DM Sans */}
          <p className="text-white/55 text-base md:text-lg leading-relaxed mb-8 max-w-sm font-sans">
            Everything your brand needs to grow — in one place, at transparent pricing,
            with a team that actually shows up.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <button
              onClick={() => smoothScrollTo("#configurator")}
              className="btn-gradient inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm"
            >
              Get Growth Blueprint →
            </button>
            <button
              onClick={() => smoothScrollTo("#work")}
              className="btn-outline-dark inline-flex items-center justify-center rounded-full border border-white/30 text-white px-7 py-3.5 text-sm hover:bg-white/8 hover:border-white/50"
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

      {/* Client logos strip at the bottom */}
      <div className="relative z-10 border-t border-white/8">
        <div className="py-5 md:py-6">
          <p className="text-center text-[10px] uppercase tracking-[0.2em] text-white/25 mb-4 font-ui">Trusted by</p>
          <Marquee duration={40} gap={56}>
            {CLIENT_LOGOS.map((logo) => (
              <div key={logo.alt} className="flex items-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ width: logo.w, height: logo.h, objectFit: "contain", filter: "brightness(0) invert(1)" }}
                  className="opacity-35 hover:opacity-60 transition-opacity duration-300"
                  draggable={false}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
