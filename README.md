# Fundación Jazmín

Sitio web oficial de **Fundación Jazmín**, una organización uruguaya sin fines de lucro que trabaja para que todos los niños, con y sin discapacidad, puedan jugar y disfrutar de los espacios públicos en igualdad de condiciones.

---

## Sobre la fundación

Fundación Jazmín fue creada en **2015** por **Nadia Dib y Fabián Kopel**, inspirados por su hija Jazmín. Desde entonces, su misión es transformar plazas, parques y espacios de juego en lugares verdaderamente inclusivos, donde ningún niño quede afuera.

### ¿Qué hacen?

- Diseño y adaptación de **plazas y espacios de juego inclusivos**
- Instalación de **hamacas y juegos adaptados** para niños con discapacidad
- Trabajo colaborativo con **intendencias y universidades** para crear entornos accesibles
- Difusión y concientización sobre el derecho al juego inclusivo

---

## Sobre este proyecto

Este repositorio contiene el código fuente del sitio web de la Fundación Jazmín, desarrollado para acercar la fundación a más familias, aliados y colaboradores.

### Objetivos del sitio

- Presentar la misión y los proyectos de la fundación
- Visibilizar el impacto del juego inclusivo en Uruguay
- Facilitar el contacto con familias, intendencias y posibles donantes
- Permitir colaboraciones y apoyo a la causa

---

## Stack tecnológico

- **Framework:** [Next.js](https://nextjs.org/) — React con soporte SSR/SSG, ideal para SEO y rendimiento
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) — utilidades CSS que agilizan el desarrollo y mantienen consistencia visual
- **Deploy:** [Vercel](https://vercel.com/) — integración nativa con Next.js, despliegue continuo y plan gratuito

---

## Instalación y uso local

```bash
# Clonar el repositorio
git clone https://github.com/CeciliaMilano/FundacionJazmin.git
cd FundacionJazmin

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

---

## Estructura de ramas

Este proyecto sigue el flujo de trabajo **GitFlow**:

| Rama | Descripción |
|------|-------------|
| `main` | Código en producción. Solo recibe merges desde `release` o `hotfix` |
| `develop` | Rama de integración. Base para todas las nuevas funcionalidades |
| `feature/*` | Una rama por funcionalidad, creada desde `develop` y mergeada de vuelta a `develop` |
| `release/*` | Preparación de una nueva versión. Se crea desde `develop` y mergea a `main` y `develop` |
| `hotfix/*` | Correcciones urgentes en producción. Se crea desde `main` y mergea a `main` y `develop` |

```
main
 └── develop
      ├── feature/nombre-funcionalidad
      ├── release/x.x.x
      └── hotfix/descripcion-fix
```

---

## Contacto

- Sitio oficial: [fundacionjazmin.org](https://www.fundacionjazmin.org)

---

*Desarrollado para Fundación Jazmín — porque todos los niños tienen derecho a jugar.*
