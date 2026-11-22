const GRID = "MAGIC#.#.#.R..#.#O#.....S.##.#.S...#.#.".split("");

/** Drawn stand-ins shown until a project has real screenshots. */
export function Placeholder({ kind }: { kind: "crossword" | "wave" | "word" }) {
  if (kind === "word")
    return (
      <div className="ww" aria-hidden="true">
        W<b>O</b>R<b>D</b>
      </div>
    );
  if (kind === "wave")
    return (
      <div className="phone">
        <div className="wave" aria-hidden="true">
          {[6, 14, 9, 22, 30, 18, 26, 12, 34, 20, 10, 16, 8, 4, 12, 24, 14, 6].map((h, i) => (
            <i key={i} style={{ height: h }} />
          ))}
        </div>
      </div>
    );
  return (
    <div className="phone">
      <div className="cw" aria-hidden="true">
        {GRID.slice(0, 42).map((c, i) => (
          <span key={i} className={c === "#" ? "b" : i < 5 ? "h" : undefined}>
            {c === "#" || c === "." ? "" : c}
          </span>
        ))}
      </div>
    </div>
  );
}
