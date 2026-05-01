import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CityTime({ tz, city }: { tz: string; city: string }) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-IN", { timeZone: tz, hour: "2-digit", minute: "2-digit", hour12: true }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 10000);
    return () => clearInterval(id);
  }, [tz]);
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-white/35 text-[10px] font-semibold uppercase tracking-widest">{city}</span>
      <span className="text-white/70 text-sm font-mono tabular-nums">{time}</span>
    </div>
  );
}

const SocialIcon = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-9 h-9 rounded-full border border-white/15 grid place-items-center text-white/50 hover:text-white hover:border-white/40 transition-all"
  >
    {children}
  </a>
);

export function Footer() {
  return (
    <footer>
      {/* ── TOP: Dark statement block ──────────────────────────────── */}
      <div className="bg-[#0C0C0C] px-6 md:px-12 pt-16 md:pt-20 pb-14 md:pb-16">
        <div className="max-w-screen-xl mx-auto">
          {/* City clocks */}
          <div className="flex flex-wrap gap-8 md:gap-14 mb-12 md:mb-16">
            <CityTime tz="Asia/Kolkata" city="Kolkata" />
            <CityTime tz="Asia/Kolkata" city="Bangalore" />
            <CityTime tz="Europe/London" city="London" />
          </div>

          {/* Giant wordmark */}
          <div className="border-t border-white/8 pt-10 md:pt-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-3">Brands that compound</p>
              <h2
                className="text-[clamp(4rem,14vw,12rem)] font-black leading-[0.88] tracking-tight text-white select-none"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Remarqd
              </h2>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-4">
              <p className="text-white/30 text-[10px] uppercase tracking-widest font-semibold">Follow us</p>
              <div className="flex gap-3">
                <SocialIcon href="https://instagram.com" label="Instagram">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
                </SocialIcon>
                <SocialIcon href="https://linkedin.com" label="LinkedIn">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                </SocialIcon>
                <SocialIcon href="https://twitter.com" label="X / Twitter">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </SocialIcon>
                <SocialIcon href="https://youtube.com" label="YouTube">
                  <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                </SocialIcon>
              </div>
              <a
                href="mailto:hello@remarqd.com"
                className="text-white/50 hover:text-white text-sm font-medium transition-colors"
              >
                hello@remarqd.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM: Light nav section ───────────────────────────────── */}
      <div className="bg-[#F7F6F3] px-6 md:px-12 py-12 md:py-14">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-4">Company</p>
            <ul className="space-y-2.5">
              {[["About", "/about"], ["Work", "/work"], ["Services", "/services"], ["Franchise", "/franchise"]].map(([l, h]) => (
                <li key={h}><Link to={h} className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-4">Services</p>
            <ul className="space-y-2.5">
              {[
                ["Performance Marketing", "/services/performance-marketing"],
                ["Social Media", "/services/social-media"],
                ["Content Creation", "/services/content-creation"],
                ["Web & Tech", "/services/web-tech"],
                ["Personal Branding", "/services/personal-branding"],
              ].map(([label, path]) => (
                <li key={path}><Link to={path} className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-4">Reach us</p>
            <ul className="space-y-2.5">
              <li><Link to="/contact" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Contact</Link></li>
              <li><a href="https://wa.me/919073559000" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">WhatsApp</a></li>
              <li><a href="mailto:hello@remarqd.com" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">hello@remarqd.com</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-4">Newsletter</p>
            <form className="has-system-cursor" onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="you@brand.com"
                  className="flex-1 min-w-0 rounded-full bg-white border border-border px-4 py-2 text-sm focus:outline-none focus:border-foreground"
                />
                <button type="submit" className="rounded-full bg-[#0C0C0C] text-white px-4 py-2 text-sm font-semibold hover:bg-black/80 transition-colors">→</button>
              </div>
              <p className="mt-2 text-xs text-foreground/40">Brief weekly note. No fluff.</p>
            </form>
          </div>
        </div>
      </div>

      {/* ── LEGAL strip ────────────────────────────────────────────── */}
      <div className="bg-[#EFEFED] px-6 md:px-12 py-5">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] text-foreground/40">
          <p>© {new Date().getFullYear()} Remarqd. All rights reserved. &nbsp;·&nbsp; GST: XXAABCG1234A1Z5 &nbsp;·&nbsp; CIN: U74999MH2022PTC123456</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-foreground/60 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground/60 transition-colors">Terms</Link>
            <span>Crafted in India · Working globally</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
