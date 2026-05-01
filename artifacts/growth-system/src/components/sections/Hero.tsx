import { smoothScrollTo } from "@/lib/smooth-scroll";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col bg-[#050709]">
      {/* ── Background photo ─────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      {/* Heavy left fade so text stays readable; subtle elsewhere */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050709]/95 via-[#050709]/60 to-[#050709]/15" />
      {/* Soft top fade */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#050709]/75 to-transparent" />
      {/* Bottom fade into stats bar – NO border line */}
      <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-[#050709] to-transparent" />

      {/* ── Text — left half ─────────────────────────────────────────────── */}
      <div className="container-wide flex-1 flex items-center relative z-10 pt-28 md:pt-32 pb-16">
        <div className="max-w-[52%]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/70 text-xs font-medium tracking-wide">
              Not an agency. A growth system.
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.6rem,4.2vw,4.8rem)] font-black leading-[1.05] tracking-tight text-white mb-6">
            Growth systems<br />
            that{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #A855F7 0%, #06B6D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              print revenue.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/50 text-base md:text-lg leading-relaxed mb-9 max-w-xs">
            We scale modern brands through ads, content, funnels and
            retention systems.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <button
              onClick={() => smoothScrollTo("#configurator")}
              className="inline-flex items-center gap-2 rounded-full bg-white text-[#050709] font-bold px-7 py-3.5 text-sm md:text-base hover:bg-white/90 transition-colors"
            >
              Get Growth Blueprint →
            </button>
            <button
              onClick={() => smoothScrollTo("#work")}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white font-semibold px-7 py-3.5 text-sm md:text-base hover:border-white/55 hover:bg-white/5 transition-all"
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
                  className="w-8 h-8 rounded-full border-2 border-[#050709] grid place-items-center text-[10px] font-bold text-white"
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

        {/* ── Floating cards — right side, over the laptop screen ── */}
        {/* ROAS — top-right above the screen */}
        <FloatCard
          className="absolute top-[12%] right-[3%]"
          color="#818CF8" icon="roas"
          metric="8.1x" label="ROAS" delta="↑ 162%"
        />
        {/* Revenue — right of screen, mid */}
        <FloatCard
          className="absolute top-[38%] right-[1%] -translate-y-1/2"
          color="#06B6D4" icon="cart"
          metric="₹3.2Cr" label="Revenue in 90 Days" delta="↑ 214%"
        />
        {/* Organic Growth — bottom right */}
        <FloatCard
          className="absolute bottom-[20%] right-[2%]"
          color="#A855F7" icon="growth"
          metric="+214%" label="Organic Growth in 120 Days" delta="↑ 214%"
        />
        {/* Brands — bottom, left of the laptop base */}
        <FloatCard
          className="absolute bottom-[32%] left-[50%]"
          color="#F59E0B" icon="brands"
          metric="12+" label="Brands Scaled Past ₹1Cr" delta="↑ 100%"
        />
      </div>

      {/* ── Stats bar — NO top border ────────────────────────────────────── */}
      <div className="relative z-10">
        <div className="container-wide py-6 grid grid-cols-2 md:grid-cols-4 gap-5">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-white/15 grid place-items-center text-white/45 shrink-0">
                <s.Icon />
              </div>
              <div>
                {s.value && (
                  <div className="text-white font-extrabold text-base md:text-lg leading-tight">
                    {s.value}
                  </div>
                )}
                <div className="text-white/40 text-[11px] leading-snug">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Stats config ─────────────────────────────────────────────────────────── */
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

/* ── Floating card ────────────────────────────────────────────────────────── */
type IconName = "roas" | "cart" | "growth" | "brands";

function FloatCard({
  className,
  color,
  icon,
  metric,
  label,
  delta,
}: {
  className: string;
  color: string;
  icon: IconName;
  metric: string;
  label: string;
  delta: string;
}) {
  const icons: Record<IconName, React.ReactNode> = {
    roas: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    cart: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 001.98 1.61h9.72a2 2 0 001.98-1.61L23 6H6" />
      </svg>
    ),
    growth: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    brands: (
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  };

  return (
    <div className={`${className} rounded-xl bg-[#0A0C15]/90 border border-white/12 backdrop-blur-md p-3 w-[132px] shadow-[0_8px_32px_rgba(0,0,0,0.55)]`}>
      <div className="flex items-center gap-1.5 mb-1.5 text-white/35 text-[9px]">
        {icons[icon]}
        <span className="leading-tight">{label}</span>
      </div>
      <div className="text-white text-xl font-extrabold leading-tight tracking-tight">
        {metric}
      </div>
      <div className="text-emerald-400 text-[9px] font-semibold mt-1">{delta}</div>
    </div>
  );
}
