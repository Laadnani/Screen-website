import { site } from "@/lib/site";
import { Todo } from "./Todo";

export function Footer() {
  return (
    <footer className="wrap">
      <span>© {new Date().getFullYear()} {site.name}</span>
      <span className="row" style={{ gap: 14 }}>
        <a href={site.github}>GitHub</a>
        {site.linkedin && <a href={site.linkedin}>LinkedIn</a>}
        <span><Todo text={site.email} /></span>
      </span>
    </footer>
  );
}
