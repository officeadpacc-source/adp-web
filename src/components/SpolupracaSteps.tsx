"use client";

import { useState } from "react";
import { homeFor, type Lang } from "@/lib/i18n";

/**
 * Collaboration steps accordion — the active step has a sand background with a
 * gold left border; the others collapse to just their title on paper.
 */
export default function SpolupracaSteps({ lang = "sk" }: { lang?: Lang }) {
  const [active, setActive] = useState(0);
  const { spolupraca } = homeFor(lang);

  return (
    <div className="space-y-4">
      {spolupraca.steps.map((s, i) => (
        <button
          key={s.title}
          onClick={() => setActive(i)}
          className={`block w-full text-left transition ${
            i === active
              ? "border-l-4 border-sand-dark bg-sand p-6"
              : "bg-paper p-6 hover:bg-sand/50"
          }`}
        >
          <h3 className="font-heading text-h5 text-navy">{s.title}</h3>
          {i === active && <p className="mt-3 text-base text-body">{s.text}</p>}
        </button>
      ))}
    </div>
  );
}
