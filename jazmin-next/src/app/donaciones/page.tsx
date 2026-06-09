export default function DonacionesPage() {
  return (
    <main id="contenido">
      <section className="page-hero" style={{ backgroundImage: "url('https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-01d04ebd-f6bc-45b9-99c1-98feb41ec9f7.jpg?w=2506&e=webp')" }}>
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <p className="eyebrow">Donar</p>
          <h1>Se Parte de Fundacion Jazmin</h1>
          <p>Con tu ayuda podemos seguir creando espacios de juego inclusivos y accesibles.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="donate-actions">
            <a className="btn btn-solid" href="https://donaronline.org/fundacion-jazmin/juntos-vamos-a-cambiar-el-mundo-jugando" target="_blank" rel="noreferrer">
              Ser Padrino / Madrina
            </a>
            <a className="btn btn-outline" href="https://donaronline.org/fundacion-jazmin/juntos-vamos-a-cambiar-el-mundo-jugando" target="_blank" rel="noreferrer">
              Donacion por Unica Vez
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
