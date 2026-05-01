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
    if (!isDigit) { setPrev(char); return; }
    if (char === prev) return;
    const inner = innerRef.current;
    if (!inner) return;
    inner.style.transition = "none";
    inner.style.transform = `translateY(-${Number(prev) * 100}%)`;
    requestAnimationFrame(() => {
      inner.style.transition = "transform 0.55s cubic-bezier(0.19, 1, 0.22, 1)";
      inner.style.transform = `translateY(-${Number(char) * 100}%)`;
    });
    const timer = setTimeout(() => setPrev(char), 600);
    return () => clearTimeout(timer);
  }, [char, prev, isDigit]);

  if (!isDigit) return <span>{char}</span>;
  return (
    <span className="flap" style={{ width: "0.62em" }}>
      <span ref={innerRef} className="flap-inner">
        {Array.from({ length: 10 }, (_, i) => <span key={i} style={{ height: "1em" }}>{i}</span>)}
      </span>
    </span>
  );
}
