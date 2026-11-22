import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} · SaaS & Flutter developer`, template: `%s · ${site.name}` },
  description: site.intro,
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} · SaaS & Flutter developer`,
    description: site.intro,
    images: ["/images/optician-dash/03-client-detail.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Nav />
        <main className="wrap">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
