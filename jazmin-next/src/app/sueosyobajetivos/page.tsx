export default function SuenosYObjetivosPage() {
  return (
    <main id="contenido">
      <section className="page-hero" style={{ backgroundImage: "url('https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-6181ee66-6b96-4c54-bf2a-a1a760965f12.jpg?w=2074&e=webp')" }}>
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <p className="eyebrow">Fundacion Jazmin</p>
          <h1>Suenos y Objetivos</h1>
        </div>
      </section>

      <section className="section section-light">
        <div className="container two-col">
          <article className="text-card">
            <h2>Nuestros Suenos</h2>
            <ul>
              <li>Espacios de juegos para todos los ninos en todos los barrios.</li>
              <li>Ninos riendo, disfrutando e interactuando en el espacio publico.</li>
              <li>Una sociedad solidaria que cuide los espacios de todos.</li>
            </ul>
          </article>
          <article className="text-card">
            <h2>Nuestros Objetivos</h2>
            <ul>
              <li>Promover la inclusion de los ninos con distintas capacidades.</li>
              <li>Estimular el analisis y la discusion sobre accesibilidad.</li>
              <li>Impulsar alianzas para ejecutar proyectos en todo el pais.</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
