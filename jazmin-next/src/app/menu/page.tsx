import Link from "next/link";

const pages = [
  ["/sobrenosotros", "Sobre Nosotros"],
  ["/nuestrospilares", "Nuestros Pilares"],
  ["/proyectos", "Proyectos"],
  ["/sueosyobajetivos", "Suenos y Objetivos"],
  ["/noticias", "Noticias"],
  ["/mapajazmin", "Mapa Jazmin"],
  ["/contacto", "Contacto"],
  ["/donaciones", "Donaciones"],
] as const;

export default function MenuPage() {
  return (
    <main id="contenido">
      <section
        className="page-hero"
        style={{
          backgroundImage:
            "url('https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-1ffe4db8-9fa2-4595-a3bb-147efa4661e0.jpg?w=2044&e=webp')",
        }}
      >
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <p className="eyebrow">Fundacion Jazmin</p>
          <h1>Menu</h1>
        </div>
      </section>

      <section className="section section-light">
        <div className="container menu-grid">
          {pages.map(([href, label]) => (
            <Link key={href} href={href} className={`menu-card ${href === "/donaciones" ? "menu-donate" : ""}`}>
              {label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
