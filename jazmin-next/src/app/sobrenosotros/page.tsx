export default function SobreNosotrosPage() {
  return (
    <main id="contenido">
      <section
        className="page-hero"
        style={{
          backgroundImage:
            "url('https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-9af7586b-f60d-448d-8431-ab7babb5bcd5.jpg?w=2050&e=webp&cX=0&cY=1295&cW=3997&cH=1735')",
        }}
      >
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <p className="eyebrow">Fundacion Jazmin</p>
          <h1>Sobre Nosotros</h1>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-head">
            <h2>Quienes somos</h2>
            <p className="lead">
              Fundacion Jazmin fue creada por los padres de Jazmin Kopel, Nadia Dib y Fabian Kopel,
              como un regalo a la sociedad en nombre de su hija.
            </p>
          </div>
          <div className="photo-row">
            <figure className="photo-card">
              <img src="https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-9af7586b-f60d-448d-8431-ab7babb5bcd5.jpg?w=1600&e=webp" alt="Familia Fundacion Jazmin" />
            </figure>
            <figure className="photo-card">
              <img src="https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-1ffe4db8-9fa2-4595-a3bb-147efa4661e0.jpg?w=1600&e=webp" alt="Ninos jugando" />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
