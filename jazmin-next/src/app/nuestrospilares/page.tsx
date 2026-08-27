import type { Metadata } from "next";import { images, PageHero } from "@/components/PageParts";
export const metadata:Metadata={title:"Nuestros pilares"};
const pillars=[
["Inclusión","La inclusión es un Derecho Humano y el objetivo principal de Fundación Jazmín. Donde existan hamacas debería haber al menos una inclusiva, que pueda ser utilizada por todos los chicos y permita que niños como Jazmín también puedan disfrutar, compartir y sumar su alegría."],
["Accesibilidad","La accesibilidad es la plataforma para la inclusión. La Fundación trabaja para ampliar las normas sobre equipamiento urbano y para que cada intervención tenga como eje la accesibilidad al espacio diseñado."],
["Movilidad","Cada paseo puede exigir una preparación especial. Además de veredas que permitan la movilidad, es importante que los espacios inclusivos estén cerca de las familias y sean accesibles a pie."],
["Investigación y diseño","Promovemos la investigación de espacios y equipamiento inclusivo junto a la Facultad de Arquitectura y profesionales de psicomotricidad, kinesiología, terapia ocupacional y ortopedia."],
["Equipamiento inclusivo adecuado","Diseñamos equipamiento para el juego, disfrute y rehabilitación de todos los niños, considerando diferentes edades, capacidades y las características de cada territorio."],
["Seguridad","La seguridad es un derecho de los niños. Los espacios protegidos permiten disfrutar sin riesgos innecesarios, previenen accidentes y ayudan a evitar el vandalismo."],
["Mantenimiento","Desarrollamos equipamientos y espacios de bajo costo y mantenimiento, con elementos de fácil reparación, piezas disponibles y materiales durables."]];
export default function Page(){return <main id="contenido"><PageHero eyebrow="Qué hacemos" title="La accesibilidad hace posible la inclusión." image={images.queHacemosHero}/><section className="section intro-section"><div className="container"><p className="eyebrow">Nuestros pilares</p><ol className="numbered-list">{pillars.map(([t,p])=><li key={t}><h2>{t}</h2><p>{p}</p></li>)}</ol></div></section></main>}
