import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { smoothScrollTo } from "@/lib/smooth-scroll";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/franchise", label: "Franchise" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-40 transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
    )}>
      <div className="container-wide flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="reveal-fade flex items-center gap-2 font-display font-extrabold text-lg tracking-tight" style={{ animationDelay: "100ms" }}>
          <LogoMark />
          <span>Growth System</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l, i) => (
            <Link
              key={l.href}
              to={l.href}
              className={cn(
                "reveal-up px-4 py-2 text-sm font-medium rounded-full transition-colors",
                pathname === l.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
              style={{ animationDelay: `${200 + i * 60}ms` }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="reveal-right" style={{ animationDelay: "400ms" }}>
          <Button
            onClick={() => {
              if (pathname === "/") smoothScrollTo("#configurator");
              else window.location.href = "/#configurator";
            }}
            className="rounded-full h-10 md:h-11 px-5 md:px-6 bg-ink text-ink-foreground hover:bg-ink/90 font-semibold"
          >
            Get a quote →
          </Button>
        </div>
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <span className="grid place-items-center w-8 h-8 rounded-lg bg-ink text-ink-foreground">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 11L6 5L9 8L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
