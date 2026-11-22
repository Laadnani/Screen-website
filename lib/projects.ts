import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Track = "saas" | "flutter" | "web";

export type Screenshot = { src: string; caption: string };

export type ProjectMeta = {
  slug: string;
  title: string;
  tagline: string;
  tracks: Track[];
  status: string;
  year: string;
  role: string;
  platforms: string;
  languages?: string;
  stack: string[];
  cardTags: string[];
  featured: boolean;
  order: number;
  /** Shown in a browser frame on the card and at the top of the project page. */
  cover?: string;
  coverLabel?: string;
  /** Drawn stand-in used until real screenshots exist. */
  placeholder?: "crossword" | "wave" | "word";
  screenshots?: Screenshot[];
  links?: { live?: string; repo?: string; appStore?: string; playStore?: string };
  scope?: string;
};

export type Project = ProjectMeta & { body: string };

const DIR = path.join(process.cwd(), "content", "projects");

export function getProjects(): Project[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(DIR, file), "utf8");
      const { data, content } = matter(raw);
      return { ...(data as Omit<ProjectMeta, "slug">), slug: file.replace(/\.mdx$/, ""), body: content };
    })
    .sort((a, b) => a.order - b.order);
}

export function getProject(slug: string): Project | undefined {
  return getProjects().find((p) => p.slug === slug);
}

export const TRACK_LABEL: Record<Track, string> = { saas: "SaaS", flutter: "Flutter", web: "Web" };
