import type { CaseStudy } from "@/data/case-studies";

export function ArtBlock({ cs, className }: { cs: CaseStudy; className?: string }) {
  return (
    <div className={`aspect-[4/5] rounded-2xl overflow-hidden relative ${className || ""}`}>
      {cs.image ? (
        <img
          src={cs.image}
          alt={cs.client}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <CaseStudyIllustration slug={cs.slug} accent={cs.accent} client={cs.client} />
      )}
      {/* Bottom info strip */}
      <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent z-10">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-widest mb-2">
          {cs.category}
        </span>
        <div className="text-white font-bold text-sm leading-tight">{cs.client}</div>
      </div>
    </div>
  );
}

function CaseStudyIllustration({
  slug,
  accent,
  client,
}: {
  slug: string;
  accent: string;
  client: string;
}) {
  const initials = client
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  switch (slug) {
    case "kairo-coffee":
      return <CoffeeIllustration accent={accent} initials={initials} />;
    case "linen-by-anaya":
      return <FabricIllustration accent={accent} initials={initials} />;
    case "northstar-realty":
      return <RealtyIllustration accent={accent} initials={initials} />;
    case "nira-stays":
      return <HotelIllustration accent={accent} initials={initials} />;
    case "okura-ramen":
      return <RamenIllustration accent={accent} initials={initials} />;
    case "tilt-finance":
      return <FintechIllustration accent={accent} initials={initials} />;
    case "halo-bots":
      return <AiIllustration accent={accent} initials={initials} />;
    case "atelier-noir":
      return <FashionIllustration accent={accent} initials={initials} />;
    case "lumen-skin":
      return <SkincareIllustration accent={accent} initials={initials} />;
    case "vyom-gym":
    case "vyom-strength":
      return <FitnessIllustration accent={accent} initials={initials} />;
    case "inkpath-edu":
      return <EduIllustration accent={accent} initials={initials} />;
    case "saanvi-jewels":
      return <JewelsIllustration accent={accent} initials={initials} />;
    default:
      return <DefaultIllustration accent={accent} initials={initials} />;
  }
}

/* ─── Coffee ────────────────────────────────────────────────────────────── */
function CoffeeIllustration({ accent }: { accent: string; initials: string }) {
  return (
    <div className="w-full h-full relative overflow-hidden"
      style={{ background: `linear-gradient(160deg, #2C1A0E 0%, #4A2910 60%, ${accent}55 100%)` }}>
      <svg viewBox="0 0 300 375" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Table surface */}
        <rect x="0" y="260" width="300" height="115" fill="#1a0d05" />
        <rect x="0" y="258" width="300" height="4" fill="#3d1f0a" />
        {/* Cup body */}
        <path d="M95 200 L110 260 L190 260 L205 200 Z" fill="#f5f0ea" />
        {/* Cup handle */}
        <path d="M200 215 Q230 215 230 237 Q230 258 200 258" fill="none" stroke="#e8e0d4" strokeWidth="10" strokeLinecap="round" />
        {/* Coffee inside */}
        <ellipse cx="150" cy="200" rx="55" ry="12" fill="#4a2c10" />
        {/* Latte art */}
        <ellipse cx="150" cy="200" rx="40" ry="8" fill="#c8a97a" fillOpacity="0.6" />
        <path d="M135 198 Q150 191 165 198 Q150 205 135 198Z" fill="#c8a97a" fillOpacity="0.8" />
        {/* Steam */}
        <path d="M135 190 Q130 175 135 165 Q140 155 135 140" fill="none" stroke="white" strokeWidth="2.5" strokeOpacity="0.4" strokeLinecap="round" />
        <path d="M150 185 Q145 170 150 158 Q155 146 150 132" fill="none" stroke="white" strokeWidth="2.5" strokeOpacity="0.3" strokeLinecap="round" />
        <path d="M165 190 Q170 175 165 163 Q160 151 165 136" fill="none" stroke="white" strokeWidth="2.5" strokeOpacity="0.35" strokeLinecap="round" />
        {/* Saucer */}
        <ellipse cx="150" cy="261" rx="65" ry="8" fill="#e8e0d4" />
        <ellipse cx="150" cy="261" rx="50" ry="5" fill="#ddd4c4" />
        {/* Brand name on cup */}
        <text x="150" y="235" textAnchor="middle" fill={accent} fontSize="10" fontWeight="bold" letterSpacing="2">
          KAIRO
        </text>
      </svg>
    </div>
  );
}

/* ─── Fabric / Textile ───────────────────────────────────────────────────── */
function FabricIllustration({ accent }: { accent: string; initials: string }) {
  return (
    <div className="w-full h-full relative overflow-hidden"
      style={{ background: `linear-gradient(150deg, #f5f0e8 0%, #e8dcc8 100%)` }}>
      <svg viewBox="0 0 300 375" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        {/* Fabric ripple lines */}
        {Array.from({ length: 18 }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${20 + i * 20} Q75 ${10 + i * 20} 150 ${20 + i * 20} Q225 ${30 + i * 20} 300 ${20 + i * 20}`}
            fill="none"
            stroke={accent}
            strokeWidth="1"
            strokeOpacity={0.12 + i * 0.01}
          />
        ))}
        {/* Hanging fabric panel */}
        <rect x="80" y="30" width="140" height="220" fill="white" fillOpacity="0.7" rx="4" />
        <rect x="80" y="30" width="140" height="6" fill={accent} fillOpacity="0.4" />
        {/* Drape fold lines */}
        {[100, 120, 140, 160, 180, 200].map((x) => (
          <line key={x} x1={x} y1="36" x2={x - 5} y2="250" stroke={accent} strokeWidth="0.8" strokeOpacity="0.2" />
        ))}
        {/* Brand logo on fabric */}
        <text x="150" y="155" textAnchor="middle" fill={accent} fontSize="22" fontWeight="900" letterSpacing="3" fillOpacity="0.7">
          ANAYA
        </text>
        <line x1="100" y1="165" x2="200" y2="165" stroke={accent} strokeWidth="1" strokeOpacity="0.4" />
        <text x="150" y="180" textAnchor="middle" fill={accent} fontSize="8" letterSpacing="6" fillOpacity="0.5">
          LINEN
        </text>
        {/* Thread spool */}
        <ellipse cx="220" cy="290" rx="20" ry="8" fill={accent} fillOpacity="0.4" />
        <rect x="200" y="270" width="40" height="20" rx="4" fill={accent} fillOpacity="0.3" />
        <ellipse cx="220" cy="270" rx="20" ry="8" fill={accent} fillOpacity="0.5" />
      </svg>
    </div>
  );
}

/* ─── Real Estate ────────────────────────────────────────────────────────── */
function RealtyIllustration({ accent }: { accent: string; initials: string }) {
  return (
    <div className="w-full h-full relative overflow-hidden"
      style={{ background: `linear-gradient(180deg, #0f1e3d 0%, #1e3a6e 60%, #2952a3 100%)` }}>
      <svg viewBox="0 0 300 375" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Sky gradient stars */}
        {[40, 70, 100, 200, 250, 30, 280].map((x, i) => (
          <circle key={i} cx={x} cy={10 + i * 8} r="1" fill="white" fillOpacity="0.6" />
        ))}
        {/* Ground */}
        <rect x="0" y="300" width="300" height="75" fill="#0d1a30" />
        {/* Main building */}
        <rect x="90" y="100" width="120" height="200" fill="#1a3060" />
        <rect x="90" y="96" width="120" height="6" fill={accent} />
        {/* Windows lit */}
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: 4 }).map((_, col) => (
            <rect
              key={`${row}-${col}`}
              x={100 + col * 27}
              y={115 + row * 35}
              width="16"
              height="22"
              rx="2"
              fill={row === 2 && col === 1 ? accent : "white"}
              fillOpacity={row === 2 && col === 1 ? 0.9 : 0.15 + Math.random() * 0.4}
            />
          ))
        )}
        {/* Smaller flanking buildings */}
        <rect x="30" y="170" width="60" height="130" fill="#122448" />
        <rect x="210" y="190" width="60" height="110" fill="#122448" />
        {/* Road reflection */}
        <rect x="0" y="300" width="300" height="75" fill="#0d1a30" />
        <rect x="130" y="305" width="10" height="60" fill="#ffffff" fillOpacity="0.05" />
        {/* Brand */}
        <text x="150" y="350" textAnchor="middle" fill={accent} fontSize="11" fontWeight="bold" letterSpacing="3">
          NORTHSTAR
        </text>
      </svg>
    </div>
  );
}

/* ─── Hotel / Stays ──────────────────────────────────────────────────────── */
function HotelIllustration({ accent }: { accent: string; initials: string }) {
  return (
    <div className="w-full h-full relative overflow-hidden"
      style={{ background: `linear-gradient(145deg, #0c2233 0%, #1a4a6e 100%)` }}>
      <svg viewBox="0 0 300 375" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Room scene - looking into a luxury room */}
        {/* Wall */}
        <rect x="0" y="0" width="300" height="375" fill="#1a3a55" />
        {/* Floor */}
        <path d="M0 280 L300 280 L300 375 L0 375 Z" fill="#0d2235" />
        {/* Bed */}
        <rect x="50" y="220" width="200" height="65" rx="4" fill="#f8f4ee" />
        <rect x="50" y="220" width="200" height="20" rx="4" fill="#e8e0d4" />
        {/* Pillows */}
        <rect x="65" y="224" width="55" height="14" rx="6" fill="white" />
        <rect x="130" y="224" width="55" height="14" rx="6" fill="white" />
        {/* Headboard */}
        <rect x="48" y="180" width="204" height="42" rx="6" fill="#2a4a65" />
        {/* Nightstands */}
        <rect x="18" y="240" width="32" height="40" rx="3" fill="#0d2235" />
        <rect x="250" y="240" width="32" height="40" rx="3" fill="#0d2235" />
        {/* Lamps */}
        <circle cx="34" cy="234" r="10" fill={accent} fillOpacity="0.7" />
        <circle cx="266" cy="234" r="10" fill={accent} fillOpacity="0.7" />
        {/* Window with view */}
        <rect x="110" y="60" width="80" height="90" rx="4" fill="#a8d4f5" fillOpacity="0.3" />
        <rect x="110" y="60" width="80" height="3" fill={accent} />
        {/* Mountain/skyline in window */}
        <path d="M110 150 L135 100 L155 130 L170 90 L190 150Z" fill="#0a4a7a" fillOpacity="0.5" />
        {/* Stars in window */}
        <circle cx="125" cy="75" r="1.5" fill="white" fillOpacity="0.8" />
        <circle cx="160" cy="70" r="1" fill="white" fillOpacity="0.6" />
        <circle cx="180" cy="80" r="1.5" fill="white" fillOpacity="0.7" />
        {/* Brand */}
        <text x="150" y="350" textAnchor="middle" fill={accent} fontSize="11" fontWeight="bold" letterSpacing="3">
          NIRA STAYS
        </text>
      </svg>
    </div>
  );
}

/* ─── Ramen ──────────────────────────────────────────────────────────────── */
function RamenIllustration({ accent }: { accent: string; initials: string }) {
  return (
    <div className="w-full h-full relative overflow-hidden"
      style={{ background: `linear-gradient(160deg, #1a0505 0%, #3d1010 60%, #1a0505 100%)` }}>
      <svg viewBox="0 0 300 375" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Bowl */}
        <ellipse cx="150" cy="220" rx="110" ry="30" fill="#8b0000" />
        <path d="M40 220 Q40 310 150 310 Q260 310 260 220Z" fill="#a00000" />
        {/* Broth surface */}
        <ellipse cx="150" cy="220" rx="108" ry="28" fill="#c0392b" />
        <ellipse cx="150" cy="220" rx="90" ry="20" fill="#e74c3c" fillOpacity="0.6" />
        {/* Noodles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <path
            key={i}
            d={`M${70 + i * 15} 215 Q${90 + i * 15} 210 ${110 + i * 15} 218 Q${130 + i * 15} 225 ${150 + i * 10} 215`}
            fill="none" stroke="#f5deb3" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.9"
          />
        ))}
        {/* Chashu pork */}
        <ellipse cx="130" cy="212" rx="22" ry="14" fill="#8B4513" />
        <ellipse cx="130" cy="212" rx="16" ry="10" fill="#c27a3a" />
        <ellipse cx="130" cy="212" rx="8" ry="5" fill="#8B4513" />
        {/* Soft boiled egg */}
        <ellipse cx="175" cy="210" rx="18" ry="20" fill="#f5deb3" />
        <ellipse cx="175" cy="210" rx="10" ry="11" fill="#f39c12" fillOpacity="0.8" />
        {/* Green onion */}
        {[100, 160, 200].map((x) => (
          <line key={x} x1={x} y1="200" x2={x + 5} y2="185" stroke="#2ecc71" strokeWidth="2.5" strokeLinecap="round" />
        ))}
        {/* Nori */}
        <rect x="155" y="195" width="4" height="28" rx="2" fill="#1a1a1a" />
        {/* Brand */}
        <text x="150" y="350" textAnchor="middle" fill={accent} fontSize="12" fontWeight="bold" letterSpacing="3">
          OKURA
        </text>
      </svg>
    </div>
  );
}

/* ─── Fintech ────────────────────────────────────────────────────────────── */
function FintechIllustration({ accent }: { accent: string; initials: string }) {
  return (
    <div className="w-full h-full relative overflow-hidden"
      style={{ background: `linear-gradient(160deg, #071a10 0%, #0d2e18 100%)` }}>
      <svg viewBox="0 0 300 375" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Grid lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`h${i}`} x1="20" y1={60 + i * 30} x2="280" y2={60 + i * 30}
            stroke={accent} strokeWidth="0.4" strokeOpacity="0.15" />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`v${i}`} x1={50 + i * 35} y1="50" x2={50 + i * 35} y2="290"
            stroke={accent} strokeWidth="0.4" strokeOpacity="0.15" />
        ))}
        {/* Chart area fill */}
        <defs>
          <linearGradient id="fintechGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.4" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M30 240 C70 220 90 210 110 190 C130 170 145 175 165 155 C185 135 210 120 230 100 C250 85 265 80 280 70 L280 290 L30 290Z"
          fill="url(#fintechGrad)"
        />
        <path
          d="M30 240 C70 220 90 210 110 190 C130 170 145 175 165 155 C185 135 210 120 230 100 C250 85 265 80 280 70"
          fill="none" stroke={accent} strokeWidth="2.5"
        />
        {/* Data point */}
        <circle cx="280" cy="70" r="5" fill={accent} />
        {/* Metric card overlay */}
        <rect x="30" y="60" width="120" height="65" rx="8" fill="#0a2015" stroke={accent} strokeWidth="0.5" strokeOpacity="0.4" />
        <text x="44" y="82" fill={accent} fontSize="8" fillOpacity="0.6" letterSpacing="1">TOTAL RETURNS</text>
        <text x="44" y="105" fill="white" fontSize="20" fontWeight="900">₹3.2Cr</text>
        <text x="44" y="118" fill={accent} fontSize="9" fontWeight="bold">↑ 214% this quarter</text>
        {/* Brand */}
        <text x="150" y="340" textAnchor="middle" fill={accent} fontSize="14" fontWeight="black" letterSpacing="4">
          TILT
        </text>
      </svg>
    </div>
  );
}

/* ─── AI / Bots ──────────────────────────────────────────────────────────── */
function AiIllustration({ accent }: { accent: string; initials: string }) {
  return (
    <div className="w-full h-full relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, #0a0415 0%, #1a0a35 100%)` }}>
      <svg viewBox="0 0 300 375" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Neural network nodes */}
        {[
          [60, 100], [60, 180], [60, 260],
          [150, 60], [150, 140], [150, 220], [150, 300],
          [240, 100], [240, 180], [240, 260],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="10" fill={accent} fillOpacity="0.2" stroke={accent} strokeWidth="1" strokeOpacity="0.5" />
        ))}
        {/* Connections */}
        {[
          [60, 100, 150, 60], [60, 100, 150, 140], [60, 100, 150, 220],
          [60, 180, 150, 60], [60, 180, 150, 140], [60, 180, 150, 220], [60, 180, 150, 300],
          [60, 260, 150, 140], [60, 260, 150, 220], [60, 260, 150, 300],
          [150, 60, 240, 100], [150, 140, 240, 100], [150, 140, 240, 180],
          [150, 220, 240, 180], [150, 220, 240, 260], [150, 300, 240, 260],
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={accent} strokeWidth="0.8" strokeOpacity="0.2" />
        ))}
        {/* Center highlight node */}
        <circle cx="150" cy="140" r="16" fill={accent} fillOpacity="0.4" stroke={accent} strokeWidth="2" strokeOpacity="0.9" />
        <circle cx="150" cy="140" r="6" fill={accent} />
        {/* Pulse rings */}
        <circle cx="150" cy="140" r="24" fill="none" stroke={accent} strokeWidth="1" strokeOpacity="0.3" />
        <circle cx="150" cy="140" r="34" fill="none" stroke={accent} strokeWidth="0.5" strokeOpacity="0.15" />
        {/* Brand */}
        <text x="150" y="350" textAnchor="middle" fill={accent} fontSize="13" fontWeight="bold" letterSpacing="4">
          HALO BOTS
        </text>
      </svg>
    </div>
  );
}

/* ─── Fashion ────────────────────────────────────────────────────────────── */
function FashionIllustration({ accent }: { accent: string; initials: string }) {
  return (
    <div className="w-full h-full relative overflow-hidden"
      style={{ background: "#080808" }}>
      <svg viewBox="0 0 300 375" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Hanger */}
        <path d="M150 50 L150 75" stroke="#555" strokeWidth="2" />
        <path d="M130 75 Q150 60 170 75" fill="none" stroke="#555" strokeWidth="2" />
        <line x1="60" y1="75" x2="240" y2="75" stroke="#555" strokeWidth="2" />
        {/* Dress silhouette */}
        <path d="M110 75 L100 120 L80 200 L70 290 L230 290 L220 200 L200 120 L190 75Z"
          fill="#1a1a1a" />
        {/* Collar detail */}
        <path d="M125 75 Q150 100 175 75 L170 90 Q150 110 130 90Z"
          fill="#252525" />
        {/* Stitching detail */}
        {[130, 150, 170, 190, 210, 230, 250].map((y) => (
          <line key={y} x1="110" y1={y} x2="190" y2={y + 5}
            stroke="#2a2a2a" strokeWidth="1" />
        ))}
        {/* Brand label */}
        <rect x="115" y="200" width="70" height="22" rx="2" fill="#2a2a2a" />
        <text x="150" y="215" textAnchor="middle" fill="white" fontSize="8" letterSpacing="2" fontWeight="bold">
          ATELIER
        </text>
        {/* Accent edge light */}
        <line x1="80" y1="200" x2="80" y2="290" stroke={accent || "#888"} strokeWidth="1.5" strokeOpacity="0.4" />
        {/* Brand */}
        <text x="150" y="340" textAnchor="middle" fill="#444" fontSize="10" letterSpacing="5">
          ATELIER NOIR
        </text>
      </svg>
    </div>
  );
}

/* ─── Skincare ───────────────────────────────────────────────────────────── */
function SkincareIllustration({ accent }: { accent: string; initials: string }) {
  return (
    <div className="w-full h-full relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, #1a0510 0%, #2d0a1e 100%)` }}>
      <svg viewBox="0 0 300 375" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Serum bottle */}
        <rect x="115" y="120" width="70" height="160" rx="8" fill={accent} fillOpacity="0.15"
          stroke={accent} strokeWidth="1.5" strokeOpacity="0.6" />
        {/* Bottle cap */}
        <rect x="125" y="100" width="50" height="24" rx="6" fill={accent} fillOpacity="0.8" />
        <rect x="140" y="90" width="20" height="12" rx="4" fill={accent} />
        {/* Liquid inside */}
        <rect x="118" y="180" width="64" height="98" rx="6" fill={accent} fillOpacity="0.3" />
        {/* Label */}
        <rect x="122" y="145" width="56" height="60" rx="4" fill="white" fillOpacity="0.08" />
        <text x="150" y="165" textAnchor="middle" fill="white" fontSize="7" letterSpacing="2" fillOpacity="0.7">LUMEN</text>
        <text x="150" y="178" textAnchor="middle" fill={accent} fontSize="9" fontWeight="bold" letterSpacing="1">RADIANCE</text>
        <text x="150" y="191" textAnchor="middle" fill="white" fontSize="6" fillOpacity="0.5">SERUM 30ml</text>
        {/* Glow aura */}
        <ellipse cx="150" cy="200" rx="80" ry="90" fill={accent} fillOpacity="0.05" />
        <ellipse cx="150" cy="200" rx="55" ry="65" fill={accent} fillOpacity="0.04" />
        {/* Droplets */}
        <circle cx="200" cy="130" r="5" fill={accent} fillOpacity="0.5" />
        <circle cx="90" cy="170" r="7" fill={accent} fillOpacity="0.3" />
        <circle cx="215" cy="200" r="4" fill={accent} fillOpacity="0.4" />
        {/* Brand */}
        <text x="150" y="350" textAnchor="middle" fill={accent} fontSize="12" fontWeight="bold" letterSpacing="3">
          LUMEN SKIN
        </text>
      </svg>
    </div>
  );
}

/* ─── Fitness ────────────────────────────────────────────────────────────── */
function FitnessIllustration({ accent }: { accent: string; initials: string }) {
  return (
    <div className="w-full h-full relative overflow-hidden"
      style={{ background: `linear-gradient(160deg, #0a0a0a 0%, #1a1a1a 100%)` }}>
      <svg viewBox="0 0 300 375" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Dumbbell */}
        {/* Bar */}
        <rect x="80" y="175" width="140" height="12" rx="4" fill="#333" />
        {/* Left plates */}
        <rect x="55" y="155" width="30" height="52" rx="6" fill={accent} fillOpacity="0.9" />
        <rect x="42" y="163" width="16" height="36" rx="4" fill={accent} />
        {/* Right plates */}
        <rect x="215" y="155" width="30" height="52" rx="6" fill={accent} fillOpacity="0.9" />
        <rect x="242" y="163" width="16" height="36" rx="4" fill={accent} />
        {/* Weight labels */}
        <text x="70" y="186" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">20</text>
        <text x="230" y="186" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">20</text>
        {/* Floor shadow */}
        <ellipse cx="150" cy="240" rx="100" ry="8" fill={accent} fillOpacity="0.1" />
        {/* Metric */}
        <text x="150" y="100" textAnchor="middle" fill={accent} fontSize="36" fontWeight="900">PRO</text>
        <text x="150" y="125" textAnchor="middle" fill="white" fontSize="11" fillOpacity="0.4" letterSpacing="4">STRENGTH</text>
        {/* Brand */}
        <text x="150" y="350" textAnchor="middle" fill={accent} fontSize="12" fontWeight="bold" letterSpacing="3">
          VYOM STRENGTH
        </text>
      </svg>
    </div>
  );
}

/* ─── Education ──────────────────────────────────────────────────────────── */
function EduIllustration({ accent }: { accent: string; initials: string }) {
  return (
    <div className="w-full h-full relative overflow-hidden"
      style={{ background: `linear-gradient(150deg, #0a0f2e 0%, #0f1a4e 100%)` }}>
      <svg viewBox="0 0 300 375" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Open book */}
        <path d="M40 160 Q150 140 260 160 L260 280 Q150 260 40 280 Z" fill="#1a2550" />
        <line x1="150" y1="145" x2="150" y2="275" stroke={accent} strokeWidth="2" strokeOpacity="0.5" />
        {/* Left page lines */}
        {[175, 190, 205, 220, 235].map((y) => (
          <line key={y} x1="60" y1={y} x2="138" y2={y - 3} stroke="white" strokeWidth="1" strokeOpacity="0.15" />
        ))}
        {/* Right page lines */}
        {[175, 190, 205, 220, 235].map((y) => (
          <line key={y} x1="162" y1={y - 3} x2="240" y2={y} stroke="white" strokeWidth="1" strokeOpacity="0.15" />
        ))}
        {/* Pencil */}
        <rect x="170" y="95" width="12" height="55" rx="3" fill="#f59e0b" transform="rotate(30 176 120)" />
        <path d="M178 150 L174 162 L182 154 Z" fill="#333" transform="rotate(30 176 120)" />
        {/* Graduation cap */}
        <rect x="115" y="65" width="70" height="10" rx="2" fill={accent} />
        <path d="M150 50 L190 65 L150 80 L110 65 Z" fill={accent} fillOpacity="0.8" />
        <line x1="190" y1="65" x2="190" y2="85" stroke={accent} strokeWidth="2" />
        <circle cx="190" cy="87" r="4" fill={accent} />
        {/* Brand */}
        <text x="150" y="340" textAnchor="middle" fill={accent} fontSize="11" fontWeight="bold" letterSpacing="2">
          INKPATH EDUTECH
        </text>
      </svg>
    </div>
  );
}

/* ─── Jewellery ──────────────────────────────────────────────────────────── */
function JewelsIllustration({ accent }: { accent: string; initials: string }) {
  const gold = "#D4AF37";
  return (
    <div className="w-full h-full relative overflow-hidden"
      style={{ background: `linear-gradient(150deg, #0d0509 0%, #1a0a12 100%)` }}>
      <svg viewBox="0 0 300 375" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Necklace chain */}
        <path d="M80 80 Q150 60 220 80 Q260 100 250 150 Q240 200 200 220 Q150 240 100 220 Q60 200 50 150 Q40 100 80 80Z"
          fill="none" stroke={gold} strokeWidth="2" strokeOpacity="0.6" strokeDasharray="4 3" />
        {/* Pendant setting */}
        <circle cx="150" cy="220" r="22" fill="none" stroke={gold} strokeWidth="2" />
        <circle cx="150" cy="220" r="16" fill={gold} fillOpacity="0.15" />
        {/* Diamond gem */}
        <path d="M150 205 L165 218 L150 235 L135 218 Z" fill={accent} fillOpacity="0.8" />
        <path d="M150 205 L165 218 L150 218 Z" fill="white" fillOpacity="0.4" />
        <path d="M135 218 L150 218 L150 235 Z" fill={accent} fillOpacity="0.5" />
        {/* Sparkles */}
        {[[110, 170], [195, 165], [150, 150], [200, 230], [100, 250]].map(([x, y], i) => (
          <g key={i}>
            <line x1={x} y1={y - 6} x2={x} y2={y + 6} stroke={gold} strokeWidth="1" strokeOpacity="0.5" />
            <line x1={x - 6} y1={y} x2={x + 6} y2={y} stroke={gold} strokeWidth="1" strokeOpacity="0.5" />
          </g>
        ))}
        {/* Ring setting above */}
        <circle cx="150" cy="120" r="25" fill="none" stroke={gold} strokeWidth="3" strokeOpacity="0.7" />
        <circle cx="150" cy="120" r="12" fill={gold} fillOpacity="0.1" stroke={gold} strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="150" cy="120" r="7" fill={accent} fillOpacity="0.6" />
        {/* Brand */}
        <text x="150" y="310" textAnchor="middle" fill={gold} fontSize="10" fontWeight="bold" letterSpacing="4">
          SAANVI JEWELS
        </text>
      </svg>
    </div>
  );
}

/* ─── Default ────────────────────────────────────────────────────────────── */
function DefaultIllustration({ accent, initials }: { accent: string; initials: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center"
      style={{ background: `${accent}18` }}>
      <div
        className="w-20 h-20 rounded-2xl grid place-items-center text-2xl font-black text-white"
        style={{ background: accent }}
      >
        {initials}
      </div>
    </div>
  );
}
