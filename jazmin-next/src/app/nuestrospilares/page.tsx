const pillars = [
  ["Inclusion", "La inclusion es un derecho humano y el objetivo principal de la fundacion."],
  ["Accesibilidad", "La accesibilidad es la plataforma para la inclusion en el espacio publico."],
  ["Movilidad", "Espacios inclusivos cercanos que permitan una llegada segura para las familias."],
  ["Investigacion y Diseno", "Trabajo con academia y profesionales para crear mejores soluciones."],
  ["Equipamiento Adecuado", "Equipamiento durable y funcional segun las caracteristicas de cada zona."],
  ["Seguridad y Mantenimiento", "Diseno seguro, protegido y de bajo costo de mantenimiento."],
] as const;

export default function NuestrosPilaresPage() {
  return (
    <main id="contenido">
      <section className="page-hero" style={{ backgroundImage: "url('https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-7af3573e-d7de-4802-a17f-a65c5ab9818e.jpg?w=2050&e=webp')" }}>
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <p className="eyebrow">Fundacion Jazmin</p>
          <h1>Nuestros Pilares</h1>
        </div>
      </section>

      <section className="section section-light">
        <div className="container pillars-grid">
          {pillars.map(([title, text]) => (
            <article key={title} className="pillar-card">
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
