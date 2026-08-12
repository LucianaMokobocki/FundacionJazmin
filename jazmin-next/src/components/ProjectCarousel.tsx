"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

/* eslint-disable @next/next/no-img-element -- Las acuarelas son assets locales ya optimizados. */

export type ProjectSlide = {
  title: string;
  location: string;
  image: string;
  href?: string;
};

const AUTOPLAY_DELAY = 2000;

export default function ProjectCarousel({ projects }: { projects: readonly ProjectSlide[] }) {
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStart = useRef<number | null>(null);

  const select = useCallback((index: number) => {
    setActive((index + projects.length) % projects.length);
  }, [projects.length]);
  const previous = useCallback(() => select(active - 1), [active, select]);
  const next = useCallback(() => select(active + 1), [active, select]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setInterval(next, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [next, reducedMotion]);

  const positionFor = (index: number) => {
    let distance = index - active;
    const middle = projects.length / 2;
    if (distance > middle) distance -= projects.length;
    if (distance < -middle) distance += projects.length;
    if (distance < -2 || distance > 2) return "is-hidden";
    if (distance === -2) return "is-far-left";
    if (distance === -1) return "is-left";
    if (distance === 1) return "is-right";
    if (distance === 2) return "is-far-right";
    return "is-center";
  };

  const activeProject = projects[active];

  return <section
    className="project-carousel"
    aria-roledescription="carrusel"
    aria-label="Proyectos de Fundación Jazmín"
  >
    <div
      className="project-runway"
      tabIndex={0}
      aria-label="Pasarela de proyectos. Usá las flechas izquierda y derecha para navegar."
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); previous(); }
        if (event.key === "ArrowRight") { event.preventDefault(); next(); }
      }}
      onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
      onTouchEnd={(event) => {
        if (touchStart.current !== null) {
          const distance = event.changedTouches[0].clientX - touchStart.current;
          if (Math.abs(distance) > 50) {
            if (distance > 0) previous();
            else next();
          }
        }
        touchStart.current = null;
      }}
    >
      {projects.map((project, index) => {
        const position = positionFor(index);
        const isActive = index === active;
        const picture = <>
          <img src={project.image} alt={isActive ? `${project.title}, ${project.location}` : ""} />
          <span className="project-card-shade" />
        </>;
        return <article
          key={`${project.title}-${index}`}
          className={`project-runway-card ${position}`}
          aria-hidden={!isActive}
          onClick={() => !isActive && select(index)}
        >
          {isActive && project.href
            ? <Link href={project.href} aria-label={`Conocer el proyecto ${project.title}`}>{picture}</Link>
            : <button type="button" tabIndex={isActive ? 0 : -1} onClick={() => select(index)} aria-label={`Mostrar ${project.title}`}>{picture}</button>}
        </article>;
      })}

      <button className="runway-arrow runway-previous" type="button" onClick={previous} aria-label="Proyecto anterior">←</button>
      <button className="runway-arrow runway-next" type="button" onClick={next} aria-label="Proyecto siguiente">→</button>
    </div>

    <div className="project-runway-info" aria-live="polite" aria-atomic="true">
      <p>{activeProject.location}</p>
      <h2>{activeProject.title}</h2>
      {activeProject.href && <Link href={activeProject.href}>Conocer proyecto <span aria-hidden="true">→</span></Link>}
    </div>

    <div className="project-dots" aria-label="Elegir proyecto">
      {projects.map((project, index) => <button
        key={`${project.title}-control`}
        type="button"
        className={index === active ? "is-active" : ""}
        aria-label={`Ver ${project.title}`}
        aria-current={index === active ? "true" : undefined}
        onClick={() => select(index)}
      />)}
    </div>
    <p className="sr-only" aria-live="polite">Proyecto {active + 1} de {projects.length}: {activeProject.title}</p>
  </section>;
}
