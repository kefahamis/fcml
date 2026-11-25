"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/** Scroll reveals for [data-reveal], a scroll progress bar and a back-to-top button. */
export default function Motion() {
  const pathname = usePathname();
  const bar = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("js");
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.current?.style.setProperty("--p", String(max > 0 ? window.scrollY / max : 0));
      setTop(window.scrollY > 700);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="progress" ref={bar} aria-hidden="true" />
      <button
        className={"totop" + (top ? " show" : "")}
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        &#8593;
      </button>
    </>
  );
}
