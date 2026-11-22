import { Fragment, type ReactNode } from "react";

/** Highlights "[like this]" placeholders so missing details are easy to spot. */
export function Todo({ text }: { text: string }): ReactNode {
  const parts = text.split(/(\[[^\]\n]+\])/g);
  return parts.map((p, i) =>
    /^\[[^\]\n]+\]$/.test(p) ? (
      <span key={i} className="todo">
        {p}
      </span>
    ) : (
      <Fragment key={i}>{p}</Fragment>
    ),
  );
}

/** Same idea for MDX bodies: wraps bracketed text that is not a markdown link. */
export function markTodos(md: string): string {
  return md.replace(/\[([^\]\n]+)\](?!\()/g, '<span className="todo">[$1]</span>');
}
