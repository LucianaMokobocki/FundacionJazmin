import type { Metadata } from "next";
import AccessibleGames from "@/components/AccessibleGames";
import { images, PageHero } from "@/components/PageParts";

export const metadata: Metadata = {
  title: "Juegos accesibles",
  description: "Experiencias digitales accesibles para explorar, crear y jugar a tu manera.",
};

export default function Page() {
  return <main id="contenido" className="games-page">
    <PageHero eyebrow="Juegos accesibles e inclusivos" title="Una forma distinta de jugar." text="Experiencias creadas para explorar, imaginar y descubrir sin apuro. Elegí cómo participar: con mouse, teclado o pantalla táctil." image={images.juegosHero} />
    <AccessibleGames />
  </main>;
}
