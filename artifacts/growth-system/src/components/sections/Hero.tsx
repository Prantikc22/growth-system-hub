import { smoothScrollTo } from "@/lib/smooth-scroll";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col bg-[#050709]">
      {/* ── Background photo ─────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050709]/95 via-[#050709]/65 to-[#050709]/30" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050709]/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#050709] to-transparent" />

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div className="container-wide flex-1 grid lg:grid-cols-2 gap-6 xl:gap-8 items-center pt-28 md:pt-32 pb-16 relative z-10">

        {/* ── Left column — text ── */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/70 text-xs font-medium tracking-wide">
              Not an agency. A growth system.
            </span>
          </div>

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

          <p className="text-white/50 text-base md:text-lg leading-relaxed mb-9 max-w-sm">
            We scale modern brands through ads, content, funnels and
            retention systems.
          </p>

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

        {/* ── Right column — laptop mockup + cards ── */}
        <div className="relative hidden lg:flex items-center justify-center" style={{ minHeight: "480px" }}>
          <LaptopMockup />
        </div>
      </div>

      {/* ── Stats bar — no border line ───────────────────────────────────── */}
      <div className="relative z-10">
        <div className="container-wide py-6 grid grid-cols-2 md:grid-cols-4 gap-5">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-white/15 grid place-items-center text-white/45 shrink-0">
                <s.Icon />
              </div>
              <div>
                {s.value && (
                  <div className="text-white font-extrabold text-base md:text-lg leading-tight">{s.value}</div>
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

/* ─── Laptop mockup with dashboard on screen ──────────────────────────────── */
function LaptopMockup() {
  return (
    <div className="relative w-full" style={{ perspective: "1400px" }}>
      {/* The entire laptop + screen, 3-D tilted */}
      <div
        className="relative mx-auto"
        style={{
          transform: "rotateY(-14deg) rotateX(4deg)",
          transformOrigin: "65% center",
          maxWidth: "520px",
        }}
      >
        {/* ── Screen assembly ── */}
        <div
          className="rounded-t-2xl border border-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_32px_80px_rgba(0,0,0,0.85)]"
          style={{ background: "#1A1B1F" }}
        >
          {/* Bezel top — camera dot */}
          <div className="flex justify-center py-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          </div>

          {/* Screen glass */}
          <div className="mx-2 mb-2 rounded-lg overflow-hidden" style={{ background: "#0B0D14" }}>
            {/* Chrome bar */}
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/8" style={{ background: "#0F1018" }}>
              <div className="w-2 h-2 rounded-full bg-red-500/70" />
              <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
              <div className="w-2 h-2 rounded-full bg-green-400/70" />
              <div className="flex-1 mx-3 rounded-full h-3 max-w-[130px]" style={{ background: "rgba(255,255,255,0.06)" }} />
            </div>

            {/* Dashboard content */}
            <div className="p-3.5">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded bg-indigo-600/30 grid place-items-center">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#818CF8" strokeWidth="2.5">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  </div>
                  <span className="text-white/75 text-[10px] font-semibold tracking-wide">Ad Performance Overview</span>
                </div>
                <span className="text-white/20 text-[8px]">Apr 1 – Apr 30 ↓</span>
              </div>

              {/* Metric row */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="rounded-lg p-2.5" style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="text-white/30 text-[7px] uppercase tracking-widest mb-0.5">Total Spend</div>
                  <div className="text-white font-bold text-[11px] leading-tight">₹12,45,231</div>
                  <div className="text-emerald-400 text-[7px] font-semibold mt-0.5">+23.5%</div>
                </div>
                <div className="col-span-2 rounded-lg p-2.5" style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="text-white/30 text-[7px] uppercase tracking-widest mb-0.5">Revenue Generated</div>
                  <div className="text-white font-bold text-[13px] leading-tight">₹3,21,45,231</div>
                  <div className="text-emerald-400 text-[7px] font-semibold mt-0.5">+24.1%</div>
                </div>
              </div>

              {/* ROAS + Chart row */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="rounded-lg p-2.5" style={{ background: "rgba(99,102,241,0.18)", border: "1px solid rgba(99,102,241,0.3)" }}>
                  <div className="text-indigo-300/60 text-[7px] uppercase tracking-widest mb-0.5">ROAS</div>
                  <div className="text-white font-extrabold text-lg leading-tight">8.1x</div>
                  <div className="text-indigo-300/60 text-[7px] mt-0.5">+16.2%</div>
                </div>
                <div className="col-span-2 rounded-lg overflow-hidden p-2.5" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="text-white/25 text-[7px] mb-1.5">Revenue Over Time</div>
                  <svg viewBox="0 0 160 36" className="w-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="lg1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366F1" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,32 C10,28 20,25 30,22 C42,17 52,20 63,14 C74,8 84,6 96,4 C108,2 118,3 132,2 C144,1 152,1 160,0"
                      fill="none" stroke="#6366F1" strokeWidth="1.5" />
                    <path d="M0,32 C10,28 20,25 30,22 C42,17 52,20 63,14 C74,8 84,6 96,4 C108,2 118,3 132,2 C144,1 152,1 160,0 L160,36 L0,36Z"
                      fill="url(#lg1)" />
                  </svg>
                </div>
              </div>

              {/* Bottom row */}
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-lg p-2.5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="text-white/30 text-[7px] uppercase tracking-widest mb-0.5">Purchases</div>
                  <div className="text-white font-bold text-[11px]">14,792</div>
                </div>
                <div className="rounded-lg p-2.5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="text-white/30 text-[7px] uppercase tracking-widest mb-0.5">Cost/Purchase</div>
                  <div className="text-white font-bold text-[11px]">₹185.42</div>
                </div>
                <div className="rounded-lg p-2.5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="text-white/30 text-[7px] uppercase tracking-widest mb-0.5">CTR</div>
                  <div className="text-white font-bold text-[11px]">2.45%</div>
                </div>
              </div>

              {/* Campaigns */}
              <div className="mt-3 rounded-lg p-2.5" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-white/30 text-[7px] uppercase tracking-widest">Top Campaigns</span>
                  <span className="text-indigo-400/70 text-[7px]">View all</span>
                </div>
                {[
                  { name: "Scaling Core",     roas: "8.7x" },
                  { name: "Retargeting Pro",  roas: "7.6x" },
                  { name: "Lookalike 1%",     roas: "6.3x" },
                  { name: "New Launch Boost", roas: "5.9x" },
                ].map((r) => (
                  <div key={r.name} className="flex items-center justify-between py-0.5">
                    <span className="text-white/35 text-[8px]">{r.name}</span>
                    <span className="text-emerald-400/80 text-[8px] font-bold">{r.roas}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Laptop base / hinge ── */}
        <div
          className="h-2 mx-4 rounded-b-sm"
          style={{ background: "linear-gradient(to bottom, #28292E, #1C1D21)", boxShadow: "0 4px 16px rgba(0,0,0,0.7)" }}
        />
        <div
          className="h-3 mx-0 rounded-b-xl"
          style={{ background: "linear-gradient(to bottom, #1C1D21, #141416)", boxShadow: "0 8px 32px rgba(0,0,0,0.8)" }}
        />
      </div>

      {/* ── Floating metric cards ── */}
      <FloatCard
        style={{ top: "2%", right: "-2%" }}
        color="#818CF8" icon="roas"
        metric="8.1x" label="ROAS" delta="↑ 162%"
      />
      <FloatCard
        style={{ top: "36%", right: "-5%" }}
        color="#06B6D4" icon="cart"
        metric="₹3.2Cr" label="Revenue in 90 Days" delta="↑ 214%"
      />
      <FloatCard
        style={{ bottom: "12%", right: "-2%" }}
        color="#A855F7" icon="growth"
        metric="+214%" label="Organic Growth" delta="vs prev period"
      />
      <FloatCard
        style={{ bottom: "18%", left: "-4%" }}
        color="#F59E0B" icon="brands"
        metric="12+" label="Brands Past ₹1Cr" delta="↑ 100%"
      />
    </div>
  );
}

/* ── Stats ───────────────────────────────────────────────────────────────── */
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
  style,
  color,
  icon,
  metric,
  label,
  delta,
}: {
  style: React.CSSProperties;
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
    <div
      className="absolute rounded-xl border border-white/12 backdrop-blur-md p-3 w-[128px] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
      style={{ ...style, background: "rgba(10,12,21,0.88)" }}
    >
      <div className="flex items-center gap-1.5 mb-1.5 text-white/35 text-[9px]">
        {icons[icon]}
        <span className="leading-tight">{label}</span>
      </div>
      <div className="text-white text-xl font-extrabold leading-tight tracking-tight">{metric}</div>
      <div className="text-emerald-400 text-[9px] font-semibold mt-1">{delta}</div>
    </div>
  );
}
