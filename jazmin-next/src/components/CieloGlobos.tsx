// Cielo de atardecer con globos rosados que suben, animado por CSS.
// Referencia: globos rosas y blancos a contraluz sobre nubes cálidas.
// Sin video ni imágenes: sólo posición y transformaciones.

type Globo = {
  x: number;       // posición horizontal en %
  tam: number;     // ancho del globo en px
  dur: number;     // segundos de recorrido
  fase: number;    // 0-1: en qué punto del recorrido arranca
  vaiven: number;  // amplitud del balanceo en px
  tono: string;
  tonoOscuro: string;
  desenfoque: number;
  opacidad: number;
  hilo: number;    // largo del hilo respecto del ancho del globo
};

// Paleta tomada de la referencia: fucsia, rosa, rosa pálido y blanco.
const FUCSIA = ["#ff2f8e", "#d81b74"];
const ROSA = ["#ff6fae", "#e14a91"];
const SUAVE = ["#ffa8ce", "#ef82b6"];
const PALIDO = ["#ffd2e4", "#f4aacb"];
const BLANCO = ["#ffffff", "#efdfe7"];

const g = (
  x: number, tam: number, dur: number, fase: number, vaiven: number,
  tono: string[], desenfoque = 0, opacidad = 1, hilo = 1.6,
): Globo => ({ x, tam, dur, fase, vaiven, tono: tono[0], tonoOscuro: tono[1], desenfoque, opacidad, hilo });

const GLOBOS: Globo[] = [
  // primer plano: grandes y nítidos
  g(63, 196, 30, .48, 14, ROSA, 0, 1, 1.9),
  g(22, 148, 34, .16, 16, SUAVE, 0, 1, 1.7),
  g(85, 126, 32, .74, 15, FUCSIA, 0, 1, 1.8),
  g(41, 114, 36, .88, 17, PALIDO, 0, .96, 1.6),
  g(72, 94, 33, .34, 18, BLANCO, 0, .92, 1.5),
  // plano medio
  g(6, 86, 40, .58, 20, SUAVE, .6, .92, 1.5),
  g(31, 74, 42, .30, 22, FUCSIA, .6, .9, 1.4),
  g(52, 68, 39, .66, 21, PALIDO, .8, .9, 1.4),
  g(78, 62, 44, .12, 23, ROSA, .8, .88, 1.3),
  g(95, 80, 37, .82, 19, SUAVE, .6, .9, 1.4),
  g(15, 58, 46, .92, 24, BLANCO, 1, .85, 1.3),
  g(58, 54, 43, .22, 25, ROSA, 1, .85, 1.3),
  // fondo: chicos, difusos y lentos
  g(2, 40, 52, .40, 26, PALIDO, 2, .7, 1.1),
  g(11, 34, 56, .70, 28, FUCSIA, 2.2, .62, 1),
  g(27, 30, 58, .06, 30, SUAVE, 2.4, .6, 1),
  g(36, 44, 50, .54, 26, BLANCO, 1.8, .66, 1.1),
  g(46, 26, 60, .78, 32, PALIDO, 2.6, .55, .9),
  g(56, 38, 54, .96, 27, FUCSIA, 2, .62, 1),
  g(67, 28, 59, .26, 31, SUAVE, 2.4, .58, .9),
  g(75, 46, 51, .62, 25, PALIDO, 1.8, .68, 1.1),
  g(88, 32, 57, .10, 29, ROSA, 2.2, .6, 1),
  g(92, 24, 62, .44, 33, BLANCO, 2.8, .52, .9),
  g(19, 22, 63, .86, 34, PALIDO, 2.8, .5, .9),
  g(48, 20, 65, .18, 35, SUAVE, 3, .48, .8),
];

// Nubes: manchas suaves que cruzan muy lento.
const NUBES = [
  { y: 2, alto: 30, dur: 190, fase: .1, opacidad: .78 },
  { y: 24, alto: 26, dur: 240, fase: .6, opacidad: .68 },
  { y: 46, alto: 34, dur: 210, fase: .35, opacidad: .8 },
  { y: 68, alto: 30, dur: 260, fase: .8, opacidad: .62 },
  { y: 84, alto: 24, dur: 300, fase: .45, opacidad: .5 },
];

export default function CieloGlobos() {
  return <div className="cielo" aria-hidden="true">
    <div className="cielo-nubes">
      {NUBES.map((n, i) => <span
        key={i}
        className="nube"
        style={{
          top: `${n.y}%`,
          height: `${n.alto}%`,
          opacity: n.opacidad,
          animationDuration: `${n.dur}s`,
          animationDelay: `${-(n.fase * n.dur).toFixed(0)}s`,
        } as React.CSSProperties}
      />)}
    </div>
    <div className="cielo-sol" />
    <div className="cielo-globos">
      {GLOBOS.map((b, i) => <span
        key={i}
        className="globo"
        style={{
          left: `${b.x}%`,
          width: `${b.tam}px`,
          animationDuration: `${b.dur}s`,
          animationDelay: `${-(b.fase * b.dur).toFixed(1)}s`,
          filter: b.desenfoque ? `blur(${b.desenfoque}px)` : undefined,
          opacity: b.opacidad,
          "--reposo": `${Math.round(100 - b.fase * 132)}%`,
        } as React.CSSProperties}
      >
        <span
          className="globo-vaiven"
          style={{
            animationDuration: `${(b.dur / 5).toFixed(1)}s`,
            animationDelay: `${-(b.fase * b.dur).toFixed(1)}s`,
            "--vaiven": `${b.vaiven}px`,
          } as React.CSSProperties}
        >
          <span className="globo-cuerpo" style={{ "--tono": b.tono, "--tono-oscuro": b.tonoOscuro } as React.CSSProperties} />
          <svg className="globo-hilo" style={{ height: `${b.hilo * 100}%` }} viewBox="0 0 20 120" preserveAspectRatio="none">
            <path d="M10 0 C15 28 5 54 10 80 C13 98 8 106 10 120" fill="none" stroke="rgba(255,255,255,.45)" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </span>
      </span>)}
    </div>
  </div>;
}
