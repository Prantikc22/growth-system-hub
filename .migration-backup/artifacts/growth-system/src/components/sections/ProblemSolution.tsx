import { Reveal } from "@/components/Reveal";

export function ProblemSolution() {
  return (
    <section className="py-24 md:py-32 container-wide">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        <Reveal variant="left">
          <div className="rounded-3xl bg-secondary p-8 md:p-12 h-full">
            <p className="pill mb-6">The problem</p>
            <h3 className="heading-section">Five vendors. One brand. Zero accountability.</h3>
            <ul className="mt-8 space-y-4 text-muted-foreground text-lg">
              {[
                "Your ad agency blames the website.",
                "Your designer blames the strategist.",
                "Nobody owns the funnel end to end.",
                "Spend goes up. Outcomes don't.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-destructive shrink-0" />{t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal variant="right" delay={120}>
          <div className="rounded-3xl surface-ink p-8 md:p-12 h-full">
            <p className="pill mb-6 bg-white/5 border-white/10 text-ink-foreground/70">The system</p>
            <h3 className="heading-section text-ink-foreground">One team. One contract. Real accountability.</h3>
            <ul className="mt-8 space-y-4 text-ink-foreground/70 text-lg">
              {[
                "Strategy, ads, content, tech — under one roof.",
                "Productized scopes with predictable pricing.",
                "Weekly outcomes review, not monthly excuses.",
                "We win when your numbers move. Not before.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-glow shrink-0" />{t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
