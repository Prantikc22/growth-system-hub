import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="surface-ink mt-16">
      <Reveal variant="up" className="container-wide py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <h2 className="heading-section text-ink-foreground">
              Not an agency.<br />
              <span className="text-primary-glow">A growth system.</span>
            </h2>
            <p className="mt-6 text-ink-foreground/60 max-w-md">
              One team across ads, social, content, tech and personal brand.
              Predictable pricing. Real outcomes.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-widest text-ink-foreground/50 mb-4">Company</p>
            <ul className="space-y-2 text-sm text-ink-foreground/80">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/franchise">Franchise</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-widest text-ink-foreground/50 mb-4">Reach us</p>
            <ul className="space-y-2 text-sm text-ink-foreground/80">
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="https://wa.me/919999999999" data-cursor="Chat">WhatsApp</a></li>
              <li><a href="mailto:hi@growthsystem.in">hi@growthsystem.in</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-ink-foreground/50 mb-4">Newsletter</p>
            <form className="flex gap-2 has-system-cursor" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@brand.com" className="flex-1 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-ink-foreground placeholder:text-ink-foreground/40 focus:outline-none focus:border-primary-glow" />
              <button type="submit" className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold">Join</button>
            </form>
            <p className="mt-3 text-xs text-ink-foreground/40">Brief weekly note. No fluff.</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-ink-foreground/50">
          <p>© {new Date().getFullYear()} Growth System. All rights reserved.</p>
          <p>Crafted in India · Working globally</p>
        </div>
      </Reveal>
    </footer>
  );
}
