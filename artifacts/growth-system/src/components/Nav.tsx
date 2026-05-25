import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { X, Menu } from "lucide-react";

const links = [
  { href: "/work",      label: "Work"      },
  { href: "/services",  label: "Services"  },
  { href: "/about",     label: "About"     },
  { href: "/franchise", label: "Franchise" },
  { href: "/contact",   label: "Contact"   },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isHome  = pathname === "/";
  const dark    = isHome && !scrolled;
  const navDark = dark || open;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-300",
        scrolled || open
          ? "bg-[#080B12]/96 backdrop-blur-xl border-b border-white/8"
          : "bg-transparent"
      )}
    >
      <div className="container-wide flex h-16 md:h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="reveal-fade flex items-center gap-2 font-ui font-extrabold text-lg tracking-tight" style={{ animationDelay: "100ms", fontFamily: "'Syne',sans-serif" }}>
          <LogoMark dark={navDark} />
          <span className={cn("transition-colors duration-300", navDark ? "text-white" : "text-foreground")}>Remarqd</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l, i) => (
            <Link
              key={l.href}
              to={l.href}
              className={cn(
                "reveal-up px-4 py-2 text-sm rounded-full transition-colors duration-300",
                "font-ui",
                navDark
                  ? pathname === l.href ? "text-white" : "text-white/55 hover:text-white"
                  : pathname === l.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
              style={{ animationDelay: `${200 + i * 60}ms`, fontFamily: "'Syne',sans-serif", fontWeight: 600 }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex reveal-right items-center" style={{ animationDelay: "400ms" }}>
          <button
            onClick={() => {
              if (pathname === "/") smoothScrollTo("#configurator");
              else window.location.href = "/#configurator";
            }}
            className="btn-gradient rounded-full h-10 md:h-11 px-5 md:px-6 text-sm"
          >
            Get a quote →
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          className={cn("md:hidden p-2 rounded-lg transition-colors", navDark ? "text-white" : "text-foreground")}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-300 ease-out",
        open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-6 py-5 border-t border-white/8 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={cn(
                "block px-4 py-3.5 rounded-xl text-sm font-ui transition-colors",
                pathname === l.href ? "text-white bg-white/10" : "text-white/65 hover:text-white hover:bg-white/5"
              )}
              style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600 }}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              if (pathname === "/") smoothScrollTo("#configurator");
              else window.location.href = "/#configurator";
            }}
            className="btn-gradient mt-3 w-full rounded-full py-3.5 text-sm"
          >
            Get a quote →
          </button>
        </div>
      </div>
    </header>
  );
}

function LogoMark({ dark }: { dark: boolean }) {
  return (
    <span className={cn("grid place-items-center w-8 h-8 rounded-lg transition-all duration-300", dark ? "bg-white text-[#080B12]" : "bg-ink text-ink-foreground")}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 11L6 5L9 8L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
