import { Reveal } from "@/components/Reveal";

const TEAM_MEMBERS = [
  { name: "Priya Nair",      role: "Head of Performance Marketing" },
  { name: "Siddharth Mehta", role: "Creative Director"             },
  { name: "Aditi Rao",       role: "Head of Content & Social"      },
];

export function Team() {
  return (
    <section className="py-24 md:py-32 container-wide">
      <Reveal variant="up" className="max-w-2xl mb-14">
        <p className="pill mb-4">The system, behind the system</p>
        <h2 className="heading-section">A small team. Senior end to end.</h2>
        <p className="mt-4 text-lg text-muted-foreground">No interns running your brand. No 14 layers of approval. People who own outcomes.</p>
      </Reveal>

      {/* Founder — featured card */}
      <Reveal variant="up" className="mb-6">
        <div className="rounded-2xl bg-[#0C0C0C] border border-white/10 p-8 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/30 mb-3">Founder & Owner</p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Reanka Chatterjee</h3>
            <p className="mt-2 text-white/50 text-sm max-w-md">Brand strategist and growth architect. Built Marqd to give ambitious D2C and service brands a performance-led growth system without the agency bloat.</p>
          </div>
          <div className="shrink-0">
            <div className="h-px w-24 md:w-32 rounded-full bg-primary" />
          </div>
        </div>
      </Reveal>

      {/* Rest of team — compact cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TEAM_MEMBERS.map((m, i) => (
          <Reveal key={m.name} variant="up" delay={i * 80}>
            <div className="group rounded-2xl bg-[#0C0C0C] border border-white/5 p-6 md:p-7 flex flex-col gap-4 transition-all duration-300 hover:border-white/15 hover:bg-[#111]">
              <div className="mt-auto">
                <div className="text-white font-bold text-base md:text-lg leading-tight">{m.name}</div>
                <div className="mt-1 text-white/40 text-xs font-medium uppercase tracking-widest">{m.role}</div>
              </div>
              <div className="h-px w-8 rounded-full transition-all duration-300 group-hover:w-full bg-white/20 group-hover:bg-primary" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
