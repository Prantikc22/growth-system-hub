import { useEffect, useRef, useState } from "react";

export function FlapNumber({ value, className }: { value: number; className?: string }) {
  const str = value.toLocaleString("en-IN");
  return (
    <span className={className} aria-label={String(value)}>
      {str.split("").map((ch, i) => <FlapChar key={i + "-" + ch} char={ch} />)}
    </span>
  );
}

function FlapChar({ char }: { char: string }) {
  const isDigit = /\d/.test(char);
  const [prev, setPrev] = useState(char);
  const innerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner || !isDigit || char === prev) return;

    const n = Number(char);
    const p = Number(prev);

    // Snap to previous digit, then animate to new digit
    inner.style.transition = "none";
    inner.style.transform = `translateY(-${p}em)`;

    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        inner.style.transition = "transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)";
        inner.style.transform = `translateY(-${n}em)`;
      });
      return () => cancelAnimationFrame(raf2);
    });

    const timer = setTimeout(() => setPrev(char), 560);
    return () => { cancelAnimationFrame(raf1); clearTimeout(timer); };
  }, [char, prev, isDigit]);

  if (!isDigit) return <span>{char}</span>;
  return (
    <span className="flap" style={{ width: "0.62em" }}>
      <span
        ref={innerRef}
        className="flap-inner"
        style={{ transform: `translateY(-${Number(char)}em)` }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} style={{ height: "1em", display: "block", lineHeight: 1 }}>{i}</span>
        ))}
      </span>
    </span>
  );
}
