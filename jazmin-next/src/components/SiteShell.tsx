"use client";
/* eslint-disable @next/next/no-img-element -- Los assets originales de Readymag no exponen dimensiones estables. */

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  ["/sobrenosotros", "Quiénes somos"],
  ["/nuestrospilares", "Qué hacemos"],
  ["/proyectos", "Proyectos"],
  ["/noticias", "Noticias"],
  ["/contacto", "Contacto"],
] as const;

const socials = [
  ["https://es-la.facebook.com/FundacionJazminUruguay/", "Facebook", "f"],
  ["https://www.youtube.com/channel/UCYTDFkHDzIZNL0rjBaVJdNw", "YouTube", "▶"],
  ["https://www.instagram.com/fundacionjazmin/?hl=es", "Instagram", "◎"],
  ["https://twitter.com/fundacionjazmin", "X / Twitter", "𝕏"],
] as const;

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = document.querySelectorAll<HTMLElement>(
      "main > section:not(.home-hero):not(.page-hero), .project-list > a, .news-card, .info-card, .numbered-list > li"
    );
    targets.forEach((target) => target.classList.add("reveal-item"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -32px" });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [pathname]);

  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="brand" aria-label="Fundación Jazmín, ir al inicio">
          <img src="https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-24e5ebf5-f2c4-4b52-930e-770bb456d835.png?w=300&e=webp&nll=true" alt="Fundación Jazmín" />
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map(([href, label]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}
        </nav>
        <Link className="header-donate" href="/donaciones">Donar</Link>
        <button className={`menu-toggle ${open ? "is-open" : ""}`} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Cerrar menú" : "Abrir menú"}>
          <span /><span /><span />
        </button>
      </div>
      <nav id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`} aria-label="Navegación móvil">
        <Link href="/" onClick={() => setOpen(false)}>Inicio</Link>
        {links.map(([href, label], index) => <Link key={href} href={href} onClick={() => setOpen(false)}><small>0{index + 1}</small>{label}</Link>)}
        <Link className="mobile-donate" href="/donaciones" onClick={() => setOpen(false)}>Quiero ayudar</Link>
      </nav>
    </header>
    {children}
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro"><img src="https://i-p.rmcdn.net/62bf0f610714b800281263af/4579695/image-24e5ebf5-f2c4-4b52-930e-770bb456d835.png?w=300&e=webp&nll=true" alt="Fundación Jazmín" /><p>Juntos podemos cambiar el mundo jugando.</p></div>
        <div><h2>Explorá</h2>{links.map(([href,label]) => <Link key={href} href={href}>{label}</Link>)}<Link href="/mapajazmin">Mapa Jazmín</Link></div>
        <div><h2>Contacto</h2><a href="mailto:info@fundacionjazmin.org">info@fundacionjazmin.org</a><a href="tel:+59891624386">091 624 386</a><a href="https://api.whatsapp.com/send?phone=59899251414" target="_blank" rel="noreferrer">WhatsApp 099 25 14 14</a></div>
        <div><h2>Seguinos</h2><div className="social-links">{socials.map(([href,label,icon]) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>{icon}</a>)}</div><Link className="footer-donate" href="/donaciones">Hacer una donación</Link></div>
      </div>
      <div className="container footer-bottom"><span>Fundación Jazmín · Uruguay</span><span>Inclusión, accesibilidad y juego</span></div>
    </footer>
    <a className="floating-whatsapp" href="https://api.whatsapp.com/send?phone=59899251414" target="_blank" rel="noreferrer" aria-label="Escribir a Fundación Jazmín por WhatsApp">WhatsApp</a>
  </>;
}
