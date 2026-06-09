const projects = [
  ["Plaza Ituzaingo", "Montevideo", "https://www.fundacionjazmin.org/plazaituzaingo/"],
  ["Jardin Botanico", "Montevideo", "https://www.fundacionjazmin.org/plazajardinbotanico/"],
  ["Plaza Portugal", "Montevideo", "https://www.fundacionjazmin.org/plazaportugal/"],
] as const;

export default function ProyectosPage() {
  return (
    <main id="contenido">
      <section className="page-hero" style={{ backgroundImage: "url('https://i-p.rmcdn.net/62bf0f610714b800281263af/3801592/upload-8118ac2e-5029-4354-b56c-5349dcf8df05.jpg?w=2506&e=webp')" }}>
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <p className="eyebrow">Nuestro Trabajo</p>
          <h1>Proyectos</h1>
        </div>
      </section>

      <section className="section section-light">
        <div className="container projects-grid">
          {projects.map(([title, city, href]) => (
            <a key={title} className="project-card" href={href} target="_blank" rel="noreferrer">
              <h3>{title}</h3>
              <p>{city}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
