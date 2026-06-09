import Link from "next/link";

export default function Home() {
  return (
    <main id="contenido">
      <section
        className="hero"
        style={{
          backgroundImage:
            "url('https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-1ffe4db8-9fa2-4595-a3bb-147efa4661e0.jpg?w=2044&e=webp&cX=0&cY=502.15068493150693&cW=5570&cH=2708.698630136986')",
        }}
      >
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">Inclusion en espacios publicos</p>
          <h1>Fundacion Jazmin</h1>
          <p>
            Fundacion Jazmin nacio el 16 de junio de 2015 con el objetivo de promover la inclusion
            de todos los ninos en el espacio publico.
          </p>
          <div className="hero-actions">
            <Link href="/donaciones" className="btn btn-primary">
              Quiero ayudar
            </Link>
            <Link href="/menu" className="btn btn-ghost">
              Ver secciones
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container section-head">
          <p className="eyebrow">Sobre Nosotros</p>
          <h2>Conectar a todos los actores de la sociedad</h2>
          <p className="lead">
            Mas del 6% de la poblacion tiene algun tipo de discapacidad en Uruguay. Fundacion Jazmin
            impulsa la accesibilidad creando ambitos de encuentro.
          </p>
        </div>
      </section>
    </main>
  );
}
