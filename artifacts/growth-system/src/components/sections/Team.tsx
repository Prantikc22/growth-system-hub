import { Reveal } from "@/components/Reveal";

const TEAM = [
  { name: "Aarav Kapoor",  role: "Founder & Strategy",       initials: "AK", accent: "#2563EB" },
  { name: "Riya Shah",     role: "Head of Performance",      initials: "RS", accent: "#0F766E" },
  { name: "Dev Sharma",    role: "Creative Director",        initials: "DS", accent: "#A8336E" },
  { name: "Anika Iyer",    role: "Head of Content",          initials: "AI", accent: "#DC2626" },
  { name: "Karthik V.",    role: "Head of Tech",             initials: "KV", accent: "#7C3AED" },
  { name: "Ishaan Gupta",  role: "Personal Brand Lead",      initials: "IG", accent: "#0EA5E9" },
];

export function Team() {
  return (
    <section className="py-24 md:py-32 container-wide">
      <Reveal variant="up" className="max-w-2xl mb-14">
        <p className="pill mb-4">The system, behind the system</p>
        <h2 className="heading-section">A small team. Senior end to end.</h2>
        <p className="mt-4 text-lg text-muted-foreground">No interns running your brand. No 14 layers of approval. Six people who own outcomes.</p>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {TEAM.map((m, i) => (
          <Reveal key={m.name} variant="up" delay={i * 80}>
            <div className="group rounded-2xl bg-[#0C0C0C] border border-white/5 p-6 md:p-8 flex flex-col gap-6 transition-all duration-300 hover:border-white/15 hover:bg-[#111]">
              {/* Avatar circle */}
              <div
                className="w-12 h-12 rounded-xl grid place-items-center text-white font-extrabold text-sm tracking-widest"
                style={{ background: m.accent + "22", border: `1.5px solid ${m.accent}55` }}
              >
                <span style={{ color: m.accent }}>{m.initials}</span>
              </div>

              {/* Name & role */}
              <div className="mt-auto">
                <div className="text-white font-bold text-base md:text-lg leading-tight">{m.name}</div>
                <div className="mt-1 text-white/40 text-xs font-medium uppercase tracking-widest">{m.role}</div>
              </div>

              {/* Accent bar */}
              <div className="h-px w-8 rounded-full transition-all duration-300 group-hover:w-full" style={{ background: m.accent }} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
