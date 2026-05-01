import type { CaseStudy } from "@/data/case-studies";

export function ArtBlock({ cs, className }: { cs: CaseStudy; className?: string }) {
  const a = cs.accent;
  switch (cs.art) {
    case "phone":
      return (
        <div className={"relative aspect-[4/5] rounded-2xl overflow-hidden bg-secondary " + (className || "")}>
          <div className="absolute inset-0 grid place-items-center">
            <div className="w-[58%] h-[80%] rounded-[28px] border-[6px] border-ink overflow-hidden bg-card relative shadow-card">
              <div style={{ background: a }} className="absolute inset-0" />
              <div className="absolute inset-0 p-3 flex flex-col justify-end gap-1.5">
                <div className="h-2 w-3/4 bg-white/40 rounded" />
                <div className="h-2 w-1/2 bg-white/40 rounded" />
                <div className="h-6 w-24 bg-white/80 rounded mt-2" />
              </div>
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 rounded-full bg-ink" />
            </div>
          </div>
        </div>
      );
    case "browser":
      return (
        <div className={"relative aspect-[4/5] rounded-2xl overflow-hidden bg-secondary p-6 " + (className || "")}>
          <div className="rounded-xl border border-border bg-card overflow-hidden shadow-card">
            <div className="flex items-center gap-1.5 p-2.5 border-b border-border bg-muted/40">
              <span className="w-2 h-2 rounded-full bg-foreground/20" />
              <span className="w-2 h-2 rounded-full bg-foreground/20" />
              <span className="w-2 h-2 rounded-full bg-foreground/20" />
            </div>
            <div style={{ background: a }} className="aspect-[4/3]" />
            <div className="p-4 space-y-2">
              <div className="h-2 w-2/3 bg-foreground/10 rounded" />
              <div className="h-2 w-1/2 bg-foreground/10 rounded" />
              <div className="h-2 w-3/4 bg-foreground/10 rounded" />
            </div>
          </div>
        </div>
      );
    case "swatch":
      return (
        <div className={"aspect-[4/5] rounded-2xl overflow-hidden bg-secondary p-6 grid grid-cols-3 grid-rows-3 gap-2 " + (className || "")}>
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-lg" style={{ background: i % 3 === 0 ? a : i % 3 === 1 ? "#0F0F0F" : "#FFFFFF", opacity: i % 3 === 1 ? 0.9 : 1, border: "1px solid hsl(0 0% 92%)" }} />
          ))}
        </div>
      );
    case "ad":
      return (
        <div className={"aspect-[4/5] rounded-2xl overflow-hidden surface-ink p-8 flex flex-col justify-between " + (className || "")}>
          <div className="text-ink-foreground/60 text-xs uppercase tracking-widest">Campaign</div>
          <div>
            <div className="h-3 w-3/4 mb-2 rounded" style={{ background: a }} />
            <div className="text-ink-foreground text-2xl md:text-3xl font-extrabold leading-tight">{cs.client}</div>
            <div className="text-ink-foreground/60 mt-2 text-sm">{cs.summary.slice(0, 50)}…</div>
          </div>
          <div className="flex justify-between items-end">
            <span className="text-xs text-ink-foreground/40">{cs.region}</span>
            <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: a, color: "#fff" }}>Learn more →</span>
          </div>
        </div>
      );
    case "venue":
      return (
        <div className={"aspect-[4/5] rounded-2xl overflow-hidden bg-secondary relative " + (className || "")}>
          <svg viewBox="0 0 200 250" className="absolute inset-0 w-full h-full">
            <rect x="0" y="160" width="200" height="90" fill={a} opacity="0.25" />
            <polygon points="20,160 50,100 80,160" fill={a} />
            <polygon points="80,160 120,80 160,160" fill={a} opacity="0.85" />
            <polygon points="160,160 180,120 200,160" fill={a} opacity="0.6" />
            <rect x="40" y="170" width="10" height="20" fill="#fff" opacity="0.7" />
            <rect x="100" y="170" width="10" height="20" fill="#fff" opacity="0.7" />
            <rect x="155" y="170" width="10" height="20" fill="#fff" opacity="0.7" />
          </svg>
        </div>
      );
  }
}
