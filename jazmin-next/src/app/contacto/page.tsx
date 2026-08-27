import type { Metadata } from "next";
import { images, PageHero } from "@/components/PageParts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Contacto" };

const contactCards = [
  { number: "01", label: "Escribinos", title: "Correo", text: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { number: "02", label: "Llamanos", title: "Teléfono", text: siteConfig.contact.phoneLabel, href: siteConfig.contact.phoneHref },
  { number: "03", label: "Conversemos", title: "WhatsApp", text: siteConfig.contact.whatsappLabel, href: siteConfig.contact.whatsappHref },
  { number: "04", label: "Seguinos", title: "Instagram", text: "@fundacionjazmin", href: siteConfig.social.instagram },
] as const;

const socialCards = [
  { title: "Facebook", text: "Fundación Jazmín Uruguay", href: siteConfig.social.facebook },
  { title: "YouTube", text: "Historias y proyectos", href: siteConfig.social.youtube },
  { title: "X / Twitter", text: "@fundacionjazmin", href: siteConfig.social.twitter },
] as const;

export default function ContactPage() {
  return (
    <main id="contenido" className="contact-page">
      <PageHero eyebrow="Hablemos" title="Comunicate con nosotros." text="Ideas, consultas o ganas de colaborar: estamos del otro lado." image={images.contactoHero} />

      <section className="section contact-main">
        <div className="container">
          <div className="contact-heading">
            <div><p className="eyebrow">Contacto directo</p><h2>Estamos cerca.</h2></div>
            <p>Elegí el canal que te resulte más cómodo. Nos encanta conocer personas y organizaciones que también quieren construir un mundo donde nadie quede afuera.</p>
          </div>
          <div className="contact-channel-grid">
            {contactCards.map(({ number, label, title, text, href }) => (
              <a className="contact-channel" key={title} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
                <span>{number} · {label}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <b aria-hidden="true">↗</b>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-social-section">
        <div className="container contact-social-layout">
          <div><p className="eyebrow light">Nuestra comunidad</p><h2>Sigamos conectados.</h2><p>Conocé nuestros proyectos, actividades y avances en las redes de Fundación Jazmín.</p></div>
          <div className="contact-social-list">
            {socialCards.map(({ title, text, href }) => (
              <a key={title} href={href} target="_blank" rel="noreferrer"><span>{title}</span><small>{text}</small><b aria-hidden="true">↗</b></a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
