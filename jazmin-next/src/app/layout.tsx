import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import SiteShell from "@/components/SiteShell";
import { siteConfig } from "@/config/site";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const serif = Lora({ variable: "--font-serif", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} | Jugar es un derecho`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  openGraph: { title: siteConfig.name, description: "Juntos podemos cambiar el mundo jugando.", locale: "es_UY", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={`${sans.variable} ${serif.variable}`}><body><SiteShell>{children}</SiteShell></body></html>;
}
