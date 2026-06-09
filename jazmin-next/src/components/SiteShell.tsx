"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/sobrenosotros", label: "Sobre Nosotros" },
  { href: "/nuestrospilares", label: "Nuestros Pilares" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/sueosyobajetivos", label: "Suenos y Objetivos" },
  { href: "/noticias", label: "Noticias" },
  { href: "/mapajazmin", label: "Mapa Jazmin" },
  { href: "/contacto", label: "Contacto" },
  { href: "/donaciones", label: "Donar" },
];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <header className="site-header" aria-label="Encabezado principal">
        <div className="container nav-wrap">
          <Link href="/" className="brand" aria-label="Inicio Fundacion Jazmin">
            <img
              src="https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-24e5ebf5-f2c4-4b52-930e-770bb456d835.png?w=218&e=webp&nll=true"
              alt="Fundacion Jazmin"
            />
          </Link>

          <button
            className={`menu-toggle ${open ? "is-open" : ""}`}
            type="button"
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label="Abrir menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav id="main-nav" className={`main-nav ${open ? "open" : ""}`} aria-label="Navegacion principal">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={link.href === "/donaciones" ? "nav-cta" : ""}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <div className="container footer-row">
          <div className="socials" aria-label="Redes sociales">
            <a href="https://es-la.facebook.com/FundacionJazminUruguay/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <img src="https://i-p.rmcdn.net/62c472c665a4dd003e20a85b/3787201/upload-86611f9f-c50e-4bd7-817f-f27a449080a1.png?w=130&e=webp&nll=true&cX=76&cY=0&cW=692&cH=596" alt="" />
            </a>
            <a href="https://www.youtube.com/channel/UCYTDFkHDzIZNL0rjBaVJdNw" target="_blank" rel="noreferrer" aria-label="YouTube">
              <img src="https://i-p.rmcdn.net/62c472c665a4dd003e20a85b/3787201/upload-2c40db8b-6546-45e2-b79f-ab25b1cb645b.png?w=118&e=webp&nll=true&cX=77&cY=0&cW=689&cH=596" alt="" />
            </a>
            <a href="https://www.instagram.com/fundacionjazmin/?hl=es" target="_blank" rel="noreferrer" aria-label="Instagram">
              <img src="https://i-p.rmcdn.net/62c472c665a4dd003e20a85b/3787201/upload-eb447786-84a8-4300-9487-9b5ce24a00c8.png?w=118&e=webp&nll=true&cX=76&cY=0&cW=689&cH=596" alt="" />
            </a>
            <a href="https://twitter.com/fundacionjazmin" target="_blank" rel="noreferrer" aria-label="Twitter">
              <img src="https://i-p.rmcdn.net/62c472c665a4dd003e20a85b/3787201/upload-69be6b55-ee41-4928-bbc8-3f2ee1098202.png?w=122&e=webp&nll=true&cX=78&cY=0&cW=686&cH=596" alt="" />
            </a>
          </div>

          <a className="whatsapp" href="https://api.whatsapp.com/send?phone=59899251414" target="_blank" rel="noreferrer">
            <img src="https://i-p.rmcdn.net/62c472c665a4dd003e20a85b/3787201/upload-08d6a6fc-3464-43cc-b4e9-4da48842e98a.png?w=116&e=webp&nll=true&cX=76&cY=0&cW=691&cH=596" alt="WhatsApp" />
            <span>099 25 14 14</span>
          </a>
        </div>
      </footer>
    </>
  );
}
