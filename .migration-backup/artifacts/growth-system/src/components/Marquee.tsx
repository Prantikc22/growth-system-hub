import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children, reverse, duration = 30, className, gap = 48,
}: { children: ReactNode; reverse?: boolean; duration?: number; className?: string; gap?: number }) {
  return (
    <div
      className={cn("marquee", reverse && "reverse", className)}
      style={{ ["--marquee-duration" as any]: `${duration}s`, gap }}
    >
      <div className="marquee-track" style={{ gap }}>{children}</div>
      <div className="marquee-track" aria-hidden style={{ gap }}>{children}</div>
    </div>
  );
}
