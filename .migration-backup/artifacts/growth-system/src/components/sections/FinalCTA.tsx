import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 container-wide">
      <Reveal variant="pop">
        <div className="rounded-3xl bg-gradient-blue text-primary-foreground p-10 md:p-20 text-center shadow-pop overflow-hidden relative">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <p className="text-xs uppercase tracking-widest opacity-80">Your move</p>
          <h2 className="mt-3 heading-section">Ready to actually grow?</h2>
          <p className="mt-5 max-w-xl mx-auto text-lg opacity-90">Tell us what you're building. We'll send a system back. No deck, no fluff.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button onClick={() => smoothScrollTo("#configurator")} className="rounded-full h-12 px-7 bg-ink text-ink-foreground hover:bg-ink/90 font-semibold">Build my plan →</Button>
            <Button asChild variant="outline" className="rounded-full h-12 px-7 border-white/40 bg-white/10 text-white hover:bg-white/20">
              <Link to="/contact">Or talk to a human</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
