import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import SiteShell from "@/components/SiteShell";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const serif = Lora({ variable: "--font-serif", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fundacionjazmin.org"),
  title: { default: "Fundación Jazmín | Jugar es un derecho", template: "%s | Fundación Jazmín" },
  description: "Fundación uruguaya que promueve espacios públicos inclusivos y accesibles para que todos los niños puedan jugar.",
  openGraph: { title: "Fundación Jazmín", description: "Juntos podemos cambiar el mundo jugando.", locale: "es_UY", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={`${sans.variable} ${serif.variable}`}><body><SiteShell>{children}</SiteShell></body></html>;
}
