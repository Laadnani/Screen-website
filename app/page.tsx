import Link from "next/link";
import { getProjects } from "@/lib/projects";
import { site } from "@/lib/site";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function Home() {
  const projects = getProjects().filter((p) => p.featured);
  return (
    <>
      <header className="hero">
        <div className="eyebrow">Full-stack developer · {site.location} · open to freelance</div>
        <h1>
          I build <span className="s">SaaS products</span> and <span className="f">Flutter apps</span>, from idea to shipped.
        </h1>
        <p>{site.intro}</p>
        <div className="row">
          <Link className="btn btn-primary" href="/#projects">See projects</Link>
          <Link className="btn btn-ghost" href="/#contact">Contact me</Link>
        </div>
        <div className="row">
          <span className="badge b-saas">SaaS</span>
          <span className="badge b-flutter">Flutter</span>
        </div>
      </header>

      <ProjectGrid>
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </ProjectGrid>

      <section className="section" aria-labelledby="th">
        <div className="section-head"><h2 id="th">Two tracks, one developer</h2></div>
        <div className="tracks">
          <div className="track">
            <span className="badge b-saas">SaaS</span>
            <h3>Business software that runs a company</h3>
            <ul>
              <li>Multi-tenant data with per-tenant security rules</li>
              <li>Auth, roles and onboarding</li>
              <li>Dashboards, billing and reporting</li>
            </ul>
            <div className="tags row" style={{ gap: 6 }}>
              {["Node.js", "React", "Next.js", "Firebase"].map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
          <div className="track">
            <span className="badge b-flutter">Flutter</span>
            <h3>Apps that ship to every platform</h3>
            <ul>
              <li>One codebase for Android, iOS, Windows and web</li>
              <li>Right-to-left layouts and translations</li>
              <li>Games and touch-first interfaces</li>
            </ul>
            <div className="tags row" style={{ gap: 6 }}>
              {["Flutter", "Dart", "Provider", "go_router"].map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about" aria-labelledby="ah">
        <div className="section-head"><h2 id="ah">About</h2></div>
        <div className="about">
          <p>
            I trained as a full-stack engineer through the ALX program, working in C, Python, shell and DevOps before moving
            into product work with JavaScript, React and Next.js, then Flutter.
          </p>
          <p>
            I fell in love with programming and haven't stopped learning since. I enjoy turning a real business workflow into
            software people use every day, and making apps that feel good in the hand. Outside pure tech, I'm drawn to
            problems that touch biology and health. I'm open to SaaS builds and Flutter apps, freelance or as part of a team.
          </p>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <h2>Have a product in mind?</h2>
          <p>I take on SaaS builds and Flutter apps. Write to me at <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </div>
        <a className="btn btn-primary" href={site.github}>See my GitHub</a>
      </section>
    </>
  );
}
