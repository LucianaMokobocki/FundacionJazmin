const news = [
  ["Jardin Botanico - Canal 10", "https://www.canal10.com.uy/jardin-botanico-espacio-juegos-inclusivo-n919366"],
  ["Diario El Pais", "https://www.elpais.com.uy/bienestar/vida-sana/nueva-plaza-infantil-accesible-e-inclusiva-en-el-jardin-botanico-de-montevideo?_amp=true"],
  ["Radio Sarandi", "https://www.sarandi690.com.uy/2023/06/26/un-proyecto-fruto-del-amor-fundacion-jazmin-lucha-por-inaugurar-mas-espacios-de-juegos-inclusivos-en-uruguay/"],
  ["Subrayado", "https://www.subrayado.com.uy/un-padre-cumplio-su-sueno-inauguro-una-plaza-su-hija-jazmin-n71266"],
] as const;

export default function NoticiasPage() {
  return (
    <main id="contenido">
      <section className="page-hero" style={{ backgroundImage: "url('https://i-p.rmcdn.net/62bf0f610714b800281263af/3801592/upload-8118ac2e-5029-4354-b56c-5349dcf8df05.jpg?w=2506&e=webp')" }}>
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <p className="eyebrow">Fundacion Jazmin</p>
          <h1>Noticias</h1>
        </div>
      </section>

      <section className="section section-light">
        <div className="container news-grid">
          {news.map(([title, href]) => (
            <a key={title} className="news-card" href={href} target="_blank" rel="noreferrer">
              <h3>{title}</h3>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
