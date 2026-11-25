"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { company } from "@/lib/site";

/** Years since the company started, counted up when it scrolls into view. */
export function YearsInBusiness() {
  const ref = useRef<HTMLElement>(null);
  const [n, setN] = useState(48);

  useEffect(() => {
    const target = new Date().getFullYear() - company.since;
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const k = Math.min(1, (now - start) / 1600);
        setN(Math.round(target * (1 - Math.pow(1 - k, 4))));
        if (k < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return <b ref={ref}>{n}</b>;
}

export function CurrentYear() {
  // the server renders a fixed year; the browser swaps in the real one after hydration
  const y = useSyncExternalStore(
    () => () => {},
    () => new Date().getFullYear(),
    () => 2026,
  );
  return <>{y}</>;
}
