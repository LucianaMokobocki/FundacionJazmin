export const siteConfig = {
  name: "Fundación Jazmín",
  legalName: "Fundación Jazmín Uruguay",
  url: "https://www.fundacionjazmin.org",
  description:
    "Fundación uruguaya que promueve espacios públicos inclusivos y accesibles para que todos los niños puedan jugar.",
  logo:
    "https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-24e5ebf5-f2c4-4b52-930e-770bb456d835.png?w=300&e=webp&nll=true",
  contact: {
    email: "info@fundacionjazmin.org",
    phoneLabel: "091 624 386",
    phoneHref: "tel:+59891624386",
    whatsappLabel: "099 25 14 14",
    whatsappHref: "https://api.whatsapp.com/send?phone=59899251414",
  },
  social: {
    facebook: "https://es-la.facebook.com/FundacionJazminUruguay/",
    youtube: "https://www.youtube.com/channel/UCYTDFkHDzIZNL0rjBaVJdNw",
    instagram: "https://www.instagram.com/fundacionjazmin/?hl=es",
    twitter: "https://twitter.com/fundacionjazmin",
  },
} as const;

export const mainNavigation = [
  { href: "/sobrenosotros", label: "Quiénes somos" },
  { href: "/nuestrospilares", label: "Qué hacemos" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/noticias", label: "Noticias" },
  { href: "/juegos", label: "Juegos" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const sitemapRoutes = [
  "",
  "sobrenosotros",
  "nuestrospilares",
  "proyectos",
  "sueosyobajetivos",
  "plazaportugal",
  "plazajardinbotanico",
  "conciertoabeneficio",
  "vazquezledesma",
  "plazaituzaingo",
  "hamacasinclusivasentodouruguay",
  "noticias",
  "mapajazmin",
  "donaciones",
  "juegos",
  "contacto",
] as const;
