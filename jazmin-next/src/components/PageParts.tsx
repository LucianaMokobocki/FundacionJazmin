import Link from "next/link";

export const images = {
  family: "https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-9af7586b-f60d-448d-8431-ab7babb5bcd5.jpg?w=2000&e=webp",
  children: "https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-1ffe4db8-9fa2-4595-a3bb-147efa4661e0.jpg?w=2000&e=webp",
  event: "https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-93259fbe-348f-48a2-8d51-189d790ffcf3.jpg?w=2000&e=webp",
  play: "https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-01d04ebd-f6bc-45b9-99c1-98feb41ec9f7.jpg?w=2000&e=webp",
  pillars: "https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-7af3573e-d7de-4802-a17f-a65c5ab9818e.jpg?w=2000&e=webp",
  contact: "https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-26a49b0c-b2f2-48b1-826c-d30f72bcab4b.jpg?w=2000&e=webp",
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

export function DonateBand() {
  return <section className="donate-band"><div className="container donate-band-inner"><div><p className="eyebrow light">Sé parte</p><h2>Tu ayuda abre nuevos espacios para jugar.</h2></div><Link className="button white" href="/donaciones">Quiero ayudar <span aria-hidden="true">→</span></Link></div></section>;
}
