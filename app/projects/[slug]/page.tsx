import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProject, getProjects } from "@/lib/projects";
import { TrackBadges } from "@/components/Badges";
import { Gallery } from "@/components/Gallery";
import { TenantDiagram } from "@/components/TenantDiagram";
import { Placeholder } from "@/components/Placeholder";
import { Todo, markTodos } from "@/components/Todo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.tagline,
    openGraph: { title: p.title, description: p.tagline, images: p.cover ? [p.cover] : undefined },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const all = getProjects();
  const next = all[(all.findIndex((x) => x.slug === p.slug) + 1) % all.length];

  return (
    <>
      <Link className="back" href="/#projects">← All projects</Link>
      <header className="p-head">
        <TrackBadges tracks={p.tracks} />
        <h1>{p.title}</h1>
        <p className="lede"><Todo text={p.tagline} /></p>
        <dl className="facts">
          <div><dt>Role</dt><dd>{p.role}</dd></div>
          <div><dt>Platforms</dt><dd><Todo text={p.platforms} /></dd></div>
          <div><dt>Languages</dt><dd>{p.languages ?? "EN"}</dd></div>
          <div><dt>Status</dt><dd><Todo text={`${p.status} ${p.year}`} /></dd></div>
        </dl>
        <div className="row">
          {p.links?.live && <a className="btn btn-primary" href={p.links.live}>Open live app</a>}
          {p.links?.appStore && <a className="btn btn-ghost" href={p.links.appStore}>App Store</a>}
          {p.links?.playStore && <a className="btn btn-ghost" href={p.links.playStore}>Google Play</a>}
          {p.links?.repo && <a className={p.links?.live ? "btn btn-ghost" : "btn btn-primary"} href={p.links.repo}>View code on GitHub</a>}
        </div>
      </header>

      {p.cover ? (
        <div className="cover">
          <div className="bar"><i /><i /><i /><span>{p.coverLabel}</span></div>
          <img src={p.cover} alt={`${p.title}: ${p.coverLabel ?? "main screen"}`} />
        </div>
      ) : (
        <div className="cover" style={{ display: "grid", placeItems: "center", aspectRatio: "16/7", position: "relative" }}>
          <Placeholder kind={p.placeholder ?? "word"} />
          <span className="soon">screenshots coming</span>
        </div>
      )}

      <div className="p-grid">
        <article className="prose">
          <MDXRemote
            source={markTodos(p.body)}
            components={{
              Gallery: () => <Gallery shots={p.screenshots ?? []} />,
              TenantDiagram,
            }}
          />
        </article>
        <aside className="side">
          <div className="box">
            <h4>Stack</h4>
            <div className="tags row" style={{ gap: 6 }}>
              {p.stack.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
          {p.scope && (
            <div className="box">
              <h4>Scope</h4>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: 14 }}>{p.scope}</p>
            </div>
          )}
        </aside>
      </div>

      <div className="next">
        <Link className="back" style={{ margin: 0 }} href="/#projects">← All projects</Link>
        {next && next.slug !== p.slug && <Link className="back" style={{ margin: 0 }} href={`/projects/${next.slug}/`}>Next: {next.title} →</Link>}
      </div>
    </>
  );
}
