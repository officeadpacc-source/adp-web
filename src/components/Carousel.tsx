"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";

/**
 * Lightweight carousel matching the origin's Swiper UX: horizontal slides,
 * square outline prev/next buttons and dots, no external dependencies.
 * Slides are plain children; per-view widths are set by the caller via
 * the slideClass (e.g. basis classes).
 */
export default function Carousel({
  children,
  slideClass = "",
  dark = false,
}: {
  children: ReactNode[];
  slideClass?: string;
  dark?: boolean;
}) {
  const track = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => {
      setPages(Math.max(1, Math.ceil(el.scrollWidth / el.clientWidth - 0.02)));
      setPage(Math.round(el.scrollLeft / el.clientWidth));
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  const btn = `flex h-12 w-12 items-center justify-center border transition ${
    dark
      ? "border-white/30 text-white hover:border-white"
      : "border-line text-navy hover:border-navy"
  }`;

  return (
    <div>
      <div
        ref={track}
        className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:-mx-0 md:px-0"
      >
        <div className="w-4 shrink-0 md:hidden" />
        {children.map((c, i) => (
          <div key={i} className={`shrink-0 snap-start ${slideClass}`}>
            {c}
          </div>
        ))}
        <div className="w-4 shrink-0 md:hidden" />
      </div>
      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === page
                  ? dark
                    ? "bg-white"
                    : "bg-navy"
                  : dark
                    ? "bg-white/30"
                    : "bg-line"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button aria-label="Predchádzajúce" className={btn} onClick={() => go(-1)}>
            ←
          </button>
          <button aria-label="Ďalšie" className={btn} onClick={() => go(1)}>
            →
          </button>
        </div>
      </div>
    </div>
  );
}
