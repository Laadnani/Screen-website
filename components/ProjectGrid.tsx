"use client";

import { useState, type ReactNode } from "react";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "saas", label: "SaaS" },
  { id: "flutter", label: "Flutter" },
  { id: "web", label: "Web" },
];

/** Filter chips over server-rendered cards: hides cards whose data-tracks don't match. */
export function ProjectGrid({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState("all");
  return (
    <section className="section" id="projects" aria-labelledby="ph">
      <div className="section-head">
        <h2 id="ph">Selected work</h2>
        <div className="chips" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              id={`filter-${f.id}`}
              className="chip"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid" data-filter={filter}>
        {children}
      </div>
      <style>{filter === "all" ? "" : `.grid[data-filter="${filter}"] > .card:not([data-tracks~="${filter}"]){display:none}`}</style>
    </section>
  );
}
