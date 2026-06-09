export default function ContactoPage() {
  return (
    <main id="contenido">
      <section className="page-hero" style={{ backgroundImage: "url('https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-26a49b0c-b2f2-48b1-826c-d30f72bcab4b.jpg?w=2506&e=webp')" }}>
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <p className="eyebrow">Fundacion Jazmin</p>
          <h1>Comunicate con Nosotros</h1>
        </div>
      </section>

      <section className="section section-light">
        <div className="container contact-grid">
          <article className="text-card">
            <h2>Canales</h2>
            <p><strong>Email:</strong> info@fundacionjazmin.org</p>
            <p><strong>Telefono:</strong> 091 624 386</p>
            <p><strong>Instagram:</strong> @fundacionjazmin</p>
          </article>
          <article className="text-card">
            <h2>Mensaje</h2>
            <p>Juntos podemos cambiar el mundo jugando.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
