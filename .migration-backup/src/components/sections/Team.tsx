import { Reveal } from "@/components/Reveal";

const TEAM = [
  { name: "Aarav Kapoor",   role: "Founder & Strategy",        initials: "AK", tone: "#2563EB" },
  { name: "Riya Shah",      role: "Head of Performance",       initials: "RS", tone: "#0F766E" },
  { name: "Dev Sharma",     role: "Creative Director",         initials: "DS", tone: "#A8336E" },
  { name: "Anika Iyer",     role: "Head of Content",           initials: "AI", tone: "#DC2626" },
  { name: "Karthik V.",     role: "Head of Tech",              initials: "KV", tone: "#7C3AED" },
  { name: "Ishaan Gupta",   role: "Personal Brand Lead",       initials: "IG", tone: "#0EA5E9" },
];

export function Team() {
  return (
    <section className="py-24 md:py-32 container-wide">
      <Reveal variant="up" className="max-w-2xl mb-12">
        <p className="pill mb-4">The system, behind the system</p>
        <h2 className="heading-section">A small team. Senior end to end.</h2>
        <p className="mt-4 text-lg text-muted-foreground">No interns running your brand. No 14 layers of approval. Six people who own outcomes.</p>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {TEAM.map((m, i) => (
          <Reveal key={m.name} variant="flip" delay={i * 100}>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-card" style={{ background: m.tone }}>
              <div className="absolute inset-0 flex items-end p-5 bg-gradient-to-t from-black/60 to-transparent text-white">
                <div>
                  <div className="text-3xl md:text-5xl font-extrabold tracking-tighter">{m.initials}</div>
                  <div className="mt-2 font-bold">{m.name}</div>
                  <div className="text-xs opacity-80">{m.role}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
