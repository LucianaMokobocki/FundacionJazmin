export const images = {
  family: "https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-9af7586b-f60d-448d-8431-ab7babb5bcd5.jpg?w=2000&e=webp",
  children: "https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-1ffe4db8-9fa2-4595-a3bb-147efa4661e0.jpg?w=2000&e=webp",
  event: "https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-93259fbe-348f-48a2-8d51-189d790ffcf3.jpg?w=2000&e=webp",
  play: "https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-01d04ebd-f6bc-45b9-99c1-98feb41ec9f7.jpg?w=2000&e=webp",
  pillars: "https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-7af3573e-d7de-4802-a17f-a65c5ab9818e.jpg?w=2000&e=webp",
  contact: "https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-26a49b0c-b2f2-48b1-826c-d30f72bcab4b.jpg?w=2000&e=webp",
  // Fotografías de cada espacio, tomadas del sitio público de Fundación Jazmín.
  ituzaingo: "https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-2ae8d5b1-d3b7-4732-bb40-1d5f8267d316.jpg?w=2000&e=webp",
  ituzaingoJuego: "https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-f2c2927b-0754-401f-9bf7-44763da5c69d.jpg?w=1600&e=webp",
  ituzaingoTrepar: "https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-4878a14d-b847-4c46-96db-f670764be17a.jpg?w=1600&e=webp",
  botanico: "https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-aca94f2e-0bd2-468e-864b-0bc610382ee5.jpg?w=2000&e=webp",
  botanicoGlobos: "https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-c481d484-011e-45b5-afaa-caedab9cdfc8.jpg?w=1600&e=webp",
  portugal: "https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-9c60508d-cd29-4826-821b-1a9c7214e738.jpg?w=2000&e=webp",
  portugalHamacas: "https://i-p.rmcdn.net/62c472c665a4dd003e20a85b/3787201/upload-7d2f0a2f-529a-495e-af45-175425ebdfaa.jpg?w=1600&e=webp",
  portugalEscuela: "https://i-p.rmcdn.net/62c472c665a4dd003e20a85b/3787201/upload-34184019-32fd-4a6f-8f1f-279e47b965a5.jpg?w=1600&e=webp",
  vazquez: "https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-a2680069-9f83-41ed-a0c9-f7e5f07458f0.jpg?w=2000&e=webp",
  vazquezJuego: "https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-deb310fc-0cd8-4a02-a0e4-c1c121268c8d.jpg?w=1600&e=webp",
  vazquezCano: "https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-310f9f9d-ef7d-4349-8e91-742071d18ee1.jpg?w=1600&e=webp",
  hamacas: "https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-2dc0d1f2-bb0f-445e-bf9d-ca45807995e4.jpg?w=2000&e=webp",
  // Ilustración propia para la portada de "Qué hacemos".
  aviones: "/aviones-de-papel.jpg",
  globos: "/globos-cielo.jpg",
  flores: "/flores-jazmin.jpg",
  molinetes: "/molinetes.jpg",
  burbujas: "/burbujas.jpg",
  queHacemosHero: "/heroes/que-hacemos.jpg",
  proyectosHero: "/heroes/proyectos.jpg",
  noticiasHero: "/heroes/noticias.jpg",
  juegosHero: "/heroes/juegos.jpg",
  donarHero: "/heroes/donar.jpg",
  contactoHero: "/heroes/contacto.jpg",
};

export function PageHero({ eyebrow, title, text, image = images.children }: { eyebrow: string; title: string; text?: string; image?: string }) {
  return <section className="page-hero" style={{ backgroundImage: `url('${image}')` }}><div className="page-hero-shade"/><div className="container page-hero-inner"><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1>{text && <p className="hero-lead">{text}</p>}</div></section>;
}

export function SectionTitle({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return <div className="section-title">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{intro && <p>{intro}</p>}</div>;
}

export function Video({ id, title }: { id: string; title: string }) {
  return <div className="video-wrap"><iframe src={`https://www.youtube.com/embed/${id}`} title={title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>;
}
