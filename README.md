# Screen website

Mohamed Laadnani's portfolio: SaaS and Flutter work in one site. It's built with Next.js (static export) and MDX, and deployed on Netlify.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
```

## Add or edit a project

1. Create `content/projects/<slug>.mdx`. Copy the front matter from `optician-dash.mdx` (title, tagline, tracks, status, year, stack, screenshots, links…).
2. Put the images in `public/images/<slug>/` and reference them by file name in `cover` and `screenshots`.
3. Write the case study below the front matter in Markdown. `<Gallery />` renders the screenshots.

Text in `[square brackets]` is a placeholder. The site highlights it so it's easy to spot and replace.

Site-wide details (name, email, LinkedIn) live in `lib/site.ts`.

## Deploy on Netlify

`netlify.toml` already sets the build command (`npm run build`) and the publish folder (`out`). In Netlify, choose **Add new site → Import an existing project → GitHub → Screen-website**. Alternatively, link the existing site under **Site configuration → Build & deploy → Link repository**.
