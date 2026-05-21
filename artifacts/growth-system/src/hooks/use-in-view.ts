import { useEffect, useRef, useState } from "react";

/** Animate-in when element enters viewport (one-shot). */
export function useInView<T extends HTMLElement = HTMLDivElement>(opts?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px", ...opts },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}
