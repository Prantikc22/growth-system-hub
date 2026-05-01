import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Team } from "@/components/sections/Team";
import { Stats } from "@/components/sections/Stats";
import { Reveal } from "@/components/Reveal";

export default function About() {
  return (
    <>
      <Nav />
      <main className="pt-28 md:pt-36">
        <section className="container-wide grid lg:grid-cols-12 gap-12 items-end mb-16">
          <Reveal variant="up" className="lg:col-span-7">
            <p className="pill mb-4">About</p>
            <h1 className="heading-display">We built the system we wished existed.</h1>
          </Reveal>
          <Reveal variant="up" delay={120} className="lg:col-span-5 text-lg text-muted-foreground">
            <p>Growth System started when our founder watched four agencies fail one brand. Each blamed the next. Nobody owned the funnel. We built a single team that does — under one roof, one contract, one weekly review. Today we run growth for 120+ brands across India and beyond.</p>
          </Reveal>
        </section>
        <section className="container-wide grid md:grid-cols-3 gap-6 mb-20">
          {[
            { t: "Outcomes over outputs", d: "Decks don't grow brands. Compounding systems do." },
            { t: "Fewer, deeper", d: "We work with a small roster so each brand gets senior attention." },
            { t: "Honest pricing", d: "Productized scopes. No ambiguous retainers. No mystery line items." },
          ].map((v, i) => (
            <Reveal key={v.t} variant="up" delay={i * 120}>
              <div className="rounded-2xl border border-border p-8 h-full">
                <h3 className="text-xl font-bold">{v.t}</h3>
                <p className="mt-3 text-muted-foreground">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </section>
        <Team />
        <Stats />
      </main>
      <Footer />
    </>
  );
}
