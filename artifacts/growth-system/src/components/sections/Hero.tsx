import { smoothScrollTo } from "@/lib/smooth-scroll";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Full-bleed background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-laptop.png')" }}
      />
      {/* Dark gradient: heavy on left for text, fades right — full coverage on mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080B12]/98 via-[#080B12]/80 to-[#080B12]/30 md:via-[#080B12]/65 md:to-[#080B12]/15" />
      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#080B12]/80 to-transparent" />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#080B12] to-transparent" />

      {/* Text content — full width on mobile, half on desktop */}
      <div className="container-wide flex-1 flex items-center relative z-10 pt-24 md:pt-32 pb-16">
        <div className="w-full md:max-w-[58%]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 mb-6 md:mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/70 text-xs font-medium tracking-wide">
              Not an agency. A growth system.
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.4rem,7vw,4.8rem)] font-black leading-[1.05] tracking-tight text-white mb-5 md:mb-6">
            More visibility.<br />
            More{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 60%, #C026D3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              revenue.
            </span>
            <br />
            Less chaos.
          </h1>

          {/* Subtitle */}
          <p className="text-white/55 text-base md:text-lg leading-relaxed mb-8 md:mb-9 max-w-sm md:max-w-sm">
            Everything your brand needs to grow — in one place, at transparent
            pricing, with a team that actually shows up.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <button
              onClick={() => smoothScrollTo("#configurator")}
              className="inline-flex items-center justify-center gap-2 rounded-full font-bold px-7 py-3.5 text-sm md:text-base text-white transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
                boxShadow: "0 8px 30px rgba(37,99,235,0.45)",
              }}
            >
              Get Growth Blueprint →
            </button>
            <button
              onClick={() => smoothScrollTo("#work")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 text-white font-semibold px-7 py-3.5 text-sm md:text-base hover:border-white/55 hover:bg-white/5 transition-all"
            >
              See Case Studies
            </button>
          </div>

          {/* Trust row */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {(["#7C3AED", "#0F766E", "#A8336E"] as const).map((c, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#080B12] grid place-items-center text-[10px] font-bold text-white"
                  style={{ background: c }}
                >
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
              <p className="text-white/45 text-xs">4.9/5 from 25+ growth-focused brands</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10">
        <div className="container-wide py-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-white/15 grid place-items-center text-white/45 shrink-0">
                <s.Icon />
              </div>
              <div>
                {s.value && (
                  <div className="text-white font-extrabold text-sm md:text-lg leading-tight">{s.value}</div>
                )}
                <div className="text-white/40 text-[10px] md:text-[11px] leading-snug">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STATS = [
  {
    Icon: () => (
      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    value: undefined as string | undefined,
    label: "Trusted by ambitious D2C & service brands",
  },
  {
    Icon: () => (
      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    value: "₹12Cr+",
    label: "Revenue Influenced",
  },
  {
    Icon: () => (
      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    value: "25+",
    label: "Brands Scaled",
  },
  {
    Icon: () => (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    value: "4.9/5",
    label: "Client Satisfaction",
  },
];
