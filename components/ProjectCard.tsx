import Link from "next/link";
import type { Project } from "@/lib/projects";
import { TrackBadges } from "./Badges";
import { Placeholder } from "./Placeholder";
import { Todo } from "./Todo";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <Link className="card" href={`/projects/${p.slug}/`} data-tracks={p.tracks.join(" ")}>
      <div className="visual">
        {p.cover ? (
          <div className="browser">
            <div className="bar">
              <i />
              <i />
              <i />
            </div>
            <img src={p.cover} alt={`${p.title} screenshot`} />
          </div>
        ) : (
          <>
            <Placeholder kind={p.placeholder ?? "word"} />
            <span className="soon">screenshots coming</span>
          </>
        )}
      </div>
      <div className="body">
        <TrackBadges tracks={p.tracks} />
        <h3>{p.title}</h3>
        <p>
          <Todo text={p.tagline} />
        </p>
        <div className="meta">
          {p.cardTags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
