import type { Metadata } from "next";
import AccessibleGames from "@/components/AccessibleGames";

export const metadata: Metadata = {
  title: "Juegos accesibles",
  description: "Experiencias digitales accesibles para explorar, crear y jugar a tu manera.",
};

export default function Page() {
  return <main id="contenido" className="games-page">
    <section className="games-hero">
      <div className="games-orbit" aria-hidden="true"><i/><i/><i/></div>
      <div className="container games-hero-copy">
        <p className="eyebrow light">Juegos accesibles e inclusivos</p>
        <h1>Una forma distinta de jugar.</h1>
        <p>Experiencias creadas para explorar, imaginar y descubrir sin apuro. Elegí cómo participar: con mouse, teclado o pantalla táctil.</p>
        <a className="button white" href="#experiencias">Elegir una experiencia <span aria-hidden="true">↓</span></a>
      </div>
    </section>
    <AccessibleGames />
  </main>;
}
