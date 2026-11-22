import { TRACK_LABEL, type Track } from "@/lib/projects";

export function TrackBadges({ tracks }: { tracks: Track[] }) {
  return (
    <div className="meta row">
      {tracks.map((t) => (
        <span key={t} className={`badge b-${t}`}>
          {TRACK_LABEL[t]}
        </span>
      ))}
    </div>
  );
}
