"use client";

import { useEffect, useState } from "react";
import type { Screenshot } from "@/lib/projects";

/** Screenshot grid with a click-to-zoom lightbox. */
export function Gallery({ shots }: { shots: Screenshot[] }) {
  const [open, setOpen] = useState<Screenshot | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  if (!shots.length) return null;
  return (
    <>
      <h2>Screens</h2>
      <div className="gallery">
        {shots.map((s) => (
          <figure key={s.src}>
            <button
              type="button"
              onClick={() => setOpen(s)}
              style={{ all: "unset", cursor: "zoom-in", display: "block", width: "100%" }}
              aria-label={`Enlarge: ${s.caption}`}
            >
              <img src={s.src} alt={s.caption} loading="lazy" />
            </button>
            <figcaption>{s.caption}</figcaption>
          </figure>
        ))}
      </div>
      {open && (
        <div className="lightbox" onClick={() => setOpen(null)} role="dialog" aria-label={open.caption}>
          <img src={open.src} alt={open.caption} />
        </div>
      )}
    </>
  );
}
