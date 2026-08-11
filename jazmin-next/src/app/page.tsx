import Link from "next/link";
/* eslint-disable @next/next/no-img-element -- Se conservan fotografías remotas originales de Fundación Jazmín. */
import { DonateBand, images, SectionTitle, Video } from "@/components/PageParts";
import AnimatedCounter from "@/components/AnimatedCounter";

const projects = [
  ["Plaza Ituzaingó", "Montevideo", "/plazaituzaingo", images.event],
  ["Jardín Botánico", "Montevideo", "/plazajardinbotanico", images.children],
  ["Plaza Portugal", "Montevideo", "/plazaportugal", images.family],
] as const;

export default function Home() {
  return <main id="contenido">
    <section className="home-hero" style={{backgroundImage:`url('${images.children}')`}}>
      <div className="home-hero-shade"/><div className="container home-hero-content">
        <p className="eyebrow light">Inclusión en el espacio público</p>
        <h1>Un lugar donde<br/><em>todos</em> puedan jugar.</h1>
        <p>Fundación Jazmín promueve la inclusión de todos los niños en el espacio público, considerando sus diferentes capacidades.</p>
        <div className="hero-actions"><Link className="button primary" href="/donaciones">Quiero ayudar <span aria-hidden="true">→</span></Link><Link className="text-link light" href="/proyectos">Conocé nuestro trabajo</Link></div>
      </div><a className="scroll-cue" href="#mision">Descubrí nuestra historia <span aria-hidden="true">↓</span></a>
    </section>

    <section id="mision" className="section intro-section home-intro"><div className="container"><div className="intro-grid"><p className="eyebrow">Nuestra razón de ser</p><div><h2>Jugar juntos puede transformar la sociedad.</h2><p className="large-text">Fundación Jazmín nació el 16 de junio de 2015 con el objetivo de promover la inclusión de todos los niños en el espacio público, considerando sus diferentes capacidades, para contribuir desde esta experiencia a una transformación de la sociedad toda.</p><Link className="text-link" href="/sobrenosotros">Conocé nuestra historia <span aria-hidden="true">→</span></Link></div></div><div className="intro-photo-composition"><figure className="intro-photo-main"><img src={images.event} alt="Familias reunidas en una actividad de Fundación Jazmín"/></figure><figure className="intro-photo-tall"><img src={images.children} alt="Niños disfrutando de un espacio de juego inclusivo"/></figure><p aria-hidden="true">Jugar · compartir · incluir</p></div></div></section>

    <section className="photo-statement"><img src={images.family} alt="Jazmín junto a su familia"/><div className="statement-card"><span>Más del</span><strong>6%</strong><p>de la población tiene algún tipo de discapacidad en Uruguay.</p></div></section>

    <section className="section impact-section"><div className="container impact-frame"><div className="impact-heading"><SectionTitle eyebrow="El desafío" title="La accesibilidad es la plataforma para la inclusión." intro="Fundación Jazmín crea ámbitos para conectar a todos los actores involucrados en la sociedad."/><Link className="button outline" href="/nuestrospilares">Nuestros pilares <span aria-hidden="true">→</span></Link></div><div className="stats-grid"><article><strong><AnimatedCounter value={18} suffix=" mil"/></strong><p>personas tienen algún tipo de discapacidad en Uruguay</p></article><article><strong><AnimatedCounter value={99} suffix=" mil"/></strong><p>hogares tienen personas con discapacidad en Uruguay</p></article><article><strong><AnimatedCounter value={197} suffix=" mil"/></strong><p>niños tienen algún tipo de discapacidad en Uruguay</p></article></div></div></section>

    <section className="section projects-section"><div className="container"><div className="title-row"><SectionTitle eyebrow="Nuestro trabajo" title="Espacios que hacen lugar a todos."/><Link className="text-link" href="/proyectos">Ver todos los proyectos →</Link></div><div className="project-cards">{projects.map(([title,city,href,image],i)=><Link href={href} className={`project-feature feature-${i+1}`} key={title}><img src={image} alt=""/><div><span>0{i+1} · Proyecto</span><h3>{title}</h3><p>{city}</p></div></Link>)}</div></div></section>

    <section className="section campaign-section"><div className="container split-feature"><div className="campaign-copy"><p className="eyebrow light">Campaña nacional</p><h2>Hamacas inclusivas en todo Uruguay</h2><p>Durante 2022 y 2023 se llevó adelante esta campaña con el apoyo del Ministerio de Desarrollo Social y de las 19 intendencias. Su objetivo: llevar una hamaca inclusiva a cada departamento.</p><Link className="button white" href="/hamacasinclusivasentodouruguay">Conocé la campaña →</Link></div><div className="campaign-visual"><Video id="fz61OP80s2A" title="Hamacas inclusivas en todo Uruguay"/><img src={images.event} alt="Inauguración de una intervención inclusiva de Fundación Jazmín"/></div></div></section>

    <section className="section map-preview"><div className="container title-row"><SectionTitle eyebrow="En todo el país" title="Encontrá un espacio inclusivo cerca tuyo."/><Link className="button primary" href="/mapajazmin">Abrir Mapa Jazmín →</Link></div><div className="map-art" aria-hidden="true"><span>Artigas</span><span>Río Negro</span><span>Montevideo</span><span>Maldonado</span></div></section>
    <DonateBand/>
  </main>;
}
