import type { Metadata } from "next";
import { images, PageHero } from "@/components/PageParts";
import ProjectCarousel from "@/components/ProjectCarousel";

export const metadata: Metadata = { title: "Proyectos" };

const projects = [
  { title: "Plaza Ituzaingó", location: "Montevideo", href: "/plazaituzaingo", image: "/projects/watercolor/plaza-ituzaingo.png" },
  { title: "Jardín Botánico", location: "Montevideo", href: "/plazajardinbotanico", image: "/projects/watercolor/jardin-botanico.png" },
  { title: "Plaza Portugal", location: "Montevideo", href: "/plazaportugal", image: "/projects/watercolor/plaza-portugal.png" },
  { title: "Escuela Esp. N.º 79", location: "Maldonado", image: "/projects/watercolor/escuela-79.png" },
  { title: "Escuela Esp. N.º 59", location: "Río Negro", image: "/projects/watercolor/escuela-59.png" },
  { title: "Campaña Nacional", location: "Uruguay", href: "/hamacasinclusivasentodouruguay", image: "/projects/watercolor/campana-nacional.png" },
  { title: "Plaza Rep. Argentina", location: "Montevideo", image: "/projects/watercolor/plaza-republica-argentina.png" },
  { title: "Jardín Teeny Tiny", location: "Montevideo", image: "/projects/watercolor/jardin-teeny-tiny.png" },
  { title: "Plaza Juan A. Silva", location: "Montevideo", image: "/projects/watercolor/plaza-juan-a-silva.png" },
  { title: "Plaza Vázquez Ledesma", location: "Montevideo", href: "/vazquezledesma", image: "/projects/watercolor/plaza-vazquez-ledesma.png" },
  { title: "Concierto a beneficio", location: "Hospital Pereira Rossell", href: "/conciertoabeneficio", image: images.contact },
  { title: "Hamacas inclusivas", location: "Todo Uruguay", href: "/hamacasinclusivasentodouruguay", image: images.hamacas },
] as const;

export default function Page() {
  return <main id="contenido">
    <PageHero eyebrow="Nuestro trabajo" title="Proyectos que cambian la forma de jugar." text="Espacios públicos accesibles, seguros e inclusivos." image={images.flores} />
    <section className="section">
      <div className="container">
        <ProjectCarousel projects={projects} />
      </div>
    </section>
  </main>;
}
