import { DEPARTAMENTOS, LUGARES, MAPA_ALTO, MAPA_VIEWBOX } from "./mapaUruguay";

// Departamentos donde Fundación Jazmín tiene espacios inclusivos.
const DESTACADOS = ["Montevideo", "Maldonado", "Río Negro", "Artigas"];

// Hacia dónde sale la etiqueta de cada punto.
const ETIQUETAS: Record<string, string> = {
  Artigas: "der",
  "Río Negro": "izq",
  Montevideo: "abajo-izq",
  Maldonado: "abajo-der",
};

export default function MapaUruguay() {
  return <div className="mapa-uy">
    <svg viewBox={MAPA_VIEWBOX} role="img" aria-label="Mapa de Uruguay: Fundación Jazmín tiene espacios inclusivos en Artigas, Río Negro, Montevideo y Maldonado">
      <g className="mapa-uy-deptos">
        {DEPARTAMENTOS.map((d) => <path key={d.nombre} d={d.d} className={DESTACADOS.includes(d.nombre) ? "depto destacado" : "depto"} />)}
      </g>
      <g className="mapa-uy-puntos">
        {LUGARES.map((l) => <circle key={l.nombre} cx={l.x} cy={l.y} r={13} />)}
      </g>
    </svg>
    {LUGARES.map((l) => <span
      key={l.nombre}
      className={`mapa-uy-pill pos-${ETIQUETAS[l.nombre]}`}
      style={{ left: `${(l.x / 1000) * 100}%`, top: `${(l.y / MAPA_ALTO) * 100}%` }}
      aria-hidden="true"
    >{l.nombre}</span>)}
  </div>;
}
