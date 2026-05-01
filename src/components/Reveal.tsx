import { useInView } from "@/hooks/use-in-view";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "up" | "left" | "right" | "pop" | "flip" | "stamp";
const map: Record<Variant, string> = {
  up: "iv-reveal",
  left: "iv-slide-l",
  right: "iv-slide-r",
  pop: "iv-pop",
  flip: "iv-flip",
  stamp: "iv-stamp",
};

export function Reveal({
  children, variant = "up", delay = 0, className, as: Tag = "div",
}: { children: ReactNode; variant?: Variant; delay?: number; className?: string; as?: keyof JSX.IntrinsicElements }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Comp: any = Tag;
  return (
    <Comp ref={ref as any} className={cn(map[variant], inView && "is-in", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Comp>
  );
}
