"use client";
/* eslint-disable @next/next/no-img-element -- El logo remoto no expone dimensiones estables. */

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNavigation, siteConfig } from "@/config/site";

const AssistantWidget = dynamic(() => import("./assistant/AssistantWidget"));

const socialLinks = [
  { href: siteConfig.social.facebook, label: "Facebook", icon: "f" },
  { href: siteConfig.social.youtube, label: "YouTube", icon: "▶" },
  { href: siteConfig.social.instagram, label: "Instagram", icon: "◎" },
  { href: siteConfig.social.twitter, label: "X / Twitter", icon: "𝕏" },
] as const;

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = document.querySelectorAll<HTMLElement>(
      "main > section:not(.home-hero):not(.page-hero), .project-list > a, .news-card, .info-card, .numbered-list > li",
    );
    targets.forEach((target) => target.classList.add("reveal-item"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px" },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [pathname]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <header className="site-header">
        <div className="nav-shell">
          <Link href="/" className="brand" aria-label={`${siteConfig.name}, ir al inicio`}>
            <img src={siteConfig.logo} alt={siteConfig.name} />
          </Link>
          <nav className="desktop-nav" aria-label="Navegación principal">
            {mainNavigation.map(({ href, label }) => (
              <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>
                {label}
              </Link>
            ))}
          </nav>
          <Link className="header-donate" href="/donaciones">Donar</Link>
          <button
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span /><span /><span />
          </button>
        </div>
        <nav id="mobile-menu" className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-label="Navegación móvil">
          <Link href="/" onClick={closeMenu}>Inicio</Link>
          {mainNavigation.map(({ href, label }, index) => (
            <Link key={href} href={href} onClick={closeMenu}>
              <small>0{index + 1}</small>{label}
            </Link>
          ))}
          <Link className="mobile-donate" href="/donaciones" onClick={closeMenu}>Quiero ayudar</Link>
        </nav>
      </header>

      {children}

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-intro">
            <img src={siteConfig.logo} alt={siteConfig.name} />
            <p>Tu ayuda abre nuevos espacios para jugar.</p>
          </div>
          <div>
            <h2>Explorá</h2>
            {mainNavigation.map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
            <Link href="/mapajazmin">Mapa Jazmín</Link>
          </div>
          <div>
            <h2>Contacto</h2>
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phoneLabel}</a>
            <a href={siteConfig.contact.whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp {siteConfig.contact.whatsappLabel}
            </a>
          </div>
          <div>
            <h2>Seguinos</h2>
            <div className="social-links">
              {socialLinks.map(({ href, label, icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>{icon}</a>
              ))}
            </div>
            <Link className="footer-donate" href="/donaciones">Quiero ayudar <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>{siteConfig.legalName} · Uruguay</span>
          <span>Inclusión, accesibilidad y juego</span>
        </div>
      </footer>
      <a
        className="floating-whatsapp"
        href={siteConfig.contact.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label={`Escribir a ${siteConfig.name} por WhatsApp`}
      >
        WhatsApp
      </a>
      <AssistantWidget />
    </>
  );
}
