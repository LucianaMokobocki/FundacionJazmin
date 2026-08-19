import type { Metadata } from "next";
import { PageHero } from "@/components/PageParts";

export const metadata: Metadata = { title: "Donaciones" };
const donate = "https://donaronline.org/fundacion-jazmin/juntos-vamos-a-cambiar-el-mundo-jugando";

export default function Page() {
  return <main id="contenido">
    <PageHero eyebrow="Sé parte" title="Ayudanos a cambiar el mundo jugando." text="Con tu ayuda podemos seguir creando espacios de juego inclusivos y accesibles para todos los niños y niñas de nuestro país." image="/mariposa-donaciones.png"/>
    <section className="section"><div className="container donation-options">
      <article className="donation-card featured"><p className="eyebrow light">Compromiso mensual</p><h2>Ser padrino o madrina</h2><p>Tu aporte sostenido permite proyectar, construir y mantener más espacios inclusivos.</p><div className="amounts"><span>$500</span><span>$1.000</span><span>$2.000</span><span>$4.000</span></div><a className="button white" href={donate} target="_blank" rel="noreferrer">Elegir aporte mensual ↗</a></article>
      <article className="donation-card"><p className="eyebrow">Una vez</p><h2>Donación única</h2><p>Cada aporte suma. El formulario seguro es procesado por Donar Online con Mercado Pago.</p><div className="amounts"><span>$500</span><span>$1.000</span><span>$2.000</span><span>$4.000</span><span>$10.000</span><span>$20.000</span><span>$40.000 UYU</span></div><a className="button primary" href={donate} target="_blank" rel="noreferrer">Donar ahora ↗</a></article>
    </div></section>
    <section className="section intro-section"><div className="container content-grid"><h2>También podés aportar por Mercado Pago</h2><div className="prose"><p>En el sitio actual de Fundación Jazmín también se ofrecen aportes mensuales y enlaces directos de Mercado Pago.</p><p><a className="text-link" href="https://mpago.la/26dFf2Y" target="_blank" rel="noreferrer">Aporte por Mercado Pago ↗</a></p><p><a className="text-link" href="https://mpago.la/2wdLWw5" target="_blank" rel="noreferrer">Otra opción de aporte ↗</a></p></div></div></section>
  </main>;
}
