"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "motion";
import { useInView, useReducedMotion } from "motion/react";
import { dur, ease } from "@/lib/motion";

type CountUpProps = {
  to: number;
  from?: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
  decimals?: number;
  className?: string;
};

function formatCount(value: number, decimals?: number) {
  if (decimals == null) return String(Math.round(value));
  return value.toFixed(decimals).replace(".", ",");
}

export function CountUp({
  to,
  from = 0,
  suffix = "",
  prefix = "",
  delay = 0,
  decimals,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(from);
  const formatted = formatCount(reduced ? to : value, decimals);

  useEffect(() => {
    if (reduced || !inView) return;

    const controls = animate(from, to, {
      duration: dur.hero,
      delay,
      ease: ease.out,
      onUpdate: (latest) => setValue(decimals == null ? Math.round(latest) : latest),
    });

    return () => controls.stop();
  }, [decimals, delay, from, inView, reduced, to]);

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${formatCount(to, decimals)}${suffix}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
