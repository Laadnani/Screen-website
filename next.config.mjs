/** Static export: `next build` writes plain HTML/CSS/JS to `out/`, which Netlify serves as-is. */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
