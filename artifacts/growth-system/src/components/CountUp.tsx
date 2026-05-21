import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

type Props = {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
};

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export function CountUp({ to, prefix = "", suffix = "", duration = 1200, decimals, className }: Props) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [val, setVal] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;
    const start = performance.now();
    const dec = decimals ?? (Number.isInteger(to) ? 0 : 1);
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const v = to * easeOutExpo(t);
      setVal(Number(v.toFixed(dec)));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, decimals]);

  const dec = decimals ?? (Number.isInteger(to) ? 0 : 1);
  const display = val.toLocaleString("en-IN", { minimumFractionDigits: dec, maximumFractionDigits: dec });

  return <span ref={ref} className={className}>{prefix}{display}{suffix}</span>;
}
