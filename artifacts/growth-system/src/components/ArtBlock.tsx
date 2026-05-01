import type { CaseStudy } from "@/data/case-studies";

const SLUG_SEEDS: Record<string, string> = {
  "kairo-coffee": "coffee-beans",
  "linen-by-anaya": "fabric-textile",
  "northstar-realty": "architecture-building",
  "nira-stays": "hotel-resort",
  "okura-ramen": "japanese-food",
  "tilt-finance": "fintech-office",
  "halo-bots": "technology-dark",
  "atelier-noir": "fashion-dark",
  "lumen-skin": "skincare-beauty",
  "vyom-strength": "fitness-gym",
  "inkpath-edu": "education-study",
  "saanvi-jewels": "jewelry-gold",
};

export function ArtBlock({ cs, className }: { cs: CaseStudy; className?: string }) {
  const seed = SLUG_SEEDS[cs.slug] ?? cs.slug;
  const photo = `https://picsum.photos/seed/${seed}/600/750`;
  const base = `aspect-[4/5] rounded-2xl overflow-hidden relative ${className || ""}`;

  return (
    <div className={base}>
      {/* Photo base */}
      <img
        src={photo}
        alt={cs.client}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      {/* Accent tint overlay */}
      <div className="absolute inset-0" style={{ background: cs.accent + "55", mixBlendMode: "multiply" }} />
      {/* Bottom info strip */}
      <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-widest mb-2">
          {cs.category}
        </span>
        <div className="text-white font-bold text-sm leading-tight">{cs.client}</div>
      </div>
    </div>
  );
}
