"use client";

import { useRef, useState } from "react";

type GameId = "garden" | "canvas" | "memory" | "sequence";
const games: { id: GameId; type: string; title: string; description: string; access: string }[] = [
  { id:"garden", type:"Explorar", title:"Jardín sensible", description:"Cada toque hace crecer una composición viva. No hay respuestas incorrectas.", access:"Mouse · teclado · touch" },
  { id:"canvas", type:"Crear", title:"Constelación compartida", description:"Elegí formas y construí una obra visual, un elemento a la vez.", access:"Mouse · teclado · touch" },
  { id:"memory", type:"Descubrir", title:"Pares que se encuentran", description:"Encontrá relaciones entre formas. Sin reloj, presión ni penalizaciones.", access:"Mouse · teclado · touch" },
  { id:"sequence", type:"Desafiarse", title:"El ritmo de las formas", description:"Observá una secuencia y elegí qué forma continúa el patrón.", access:"Mouse · teclado · touch" },
];

export default function AccessibleGames() {
  const [active, setActive] = useState<GameId>("garden");
  return <>
    <section id="experiencias" className="section game-intro">
      <div className="container">
        <div className="game-intro-head"><div><p className="eyebrow">Jugá a tu manera</p><h2>¿Qué te gustaría experimentar?</h2></div><p>No se mide la velocidad ni hay una única manera de participar. Podés cambiar de experiencia cuando quieras.</p></div>
        <nav className="game-picker" aria-label="Elegir experiencia">
          {games.map(game => <button key={game.id} className={active===game.id?"is-active":""} onClick={()=>setActive(game.id)} aria-pressed={active===game.id}>
            <span>{game.type}</span><strong>{game.title}</strong><small>{game.description}</small><em>{game.access}</em>
          </button>)}
        </nav>
      </div>
    </section>
    <section className="game-room-section" aria-live="polite">
      <div className="container game-room">
        <header><p className="eyebrow">{games.find(g=>g.id===active)?.type}</p><h2>{games.find(g=>g.id===active)?.title}</h2></header>
        {active==="garden"&&<Garden/>}{active==="canvas"&&<Canvas/>}{active==="memory"&&<Memory/>}{active==="sequence"&&<Sequence/>}
      </div>
    </section>
  </>;
}

function Garden(){
  const [blooms,setBlooms]=useState<{x:number;y:number;kind:number}[]>([]);
  const add=(x:number,y:number)=>setBlooms(v=>[...v.slice(-27),{x,y,kind:v.length%3}]);
  return <div className="game-panel"><div className="game-instructions"><p>Tocá cualquier lugar del jardín o usá el botón. Cada acción hace aparecer una nueva flor.</p><div><button onClick={()=>add(15+Math.random()*70,18+Math.random()*65)}>Hacer crecer una flor</button><button className="quiet" onClick={()=>setBlooms([])}>Reiniciar</button></div></div><button className="garden-field" onClick={e=>{const r=e.currentTarget.getBoundingClientRect();add((e.clientX-r.left)/r.width*100,(e.clientY-r.top)/r.height*100)}} aria-label={`Jardín interactivo con ${blooms.length} flores. Activar para agregar una flor.`}>{blooms.map((b,i)=><i key={i} className={`bloom bloom-${b.kind}`} style={{left:`${b.x}%`,top:`${b.y}%`}}/>)}<span>Tu jardín tiene {blooms.length} {blooms.length===1?"flor":"flores"}</span></button></div>;
}

function Canvas(){
  const shapes=["Círculo","Arco","Estrella"];
  const [selected,setSelected]=useState(0);const [placed,setPlaced]=useState<number[]>([]);
  return <div className="game-panel"><div className="game-instructions"><p>Elegí una forma y agregala a la composición. También podés deshacer el último paso.</p><div className="shape-tools">{shapes.map((s,i)=><button key={s} aria-pressed={selected===i} onClick={()=>setSelected(i)}>{s}</button>)}<button onClick={()=>setPlaced(v=>[...v,selected])}>Agregar</button><button className="quiet" onClick={()=>setPlaced(v=>v.slice(0,-1))}>Deshacer</button></div></div><div className="art-canvas" role="img" aria-label={`Composición creada con ${placed.length} formas`}>{placed.map((s,i)=><i key={i} className={`art-shape shape-${s}`} style={{"--x":`${11+(i*23)%78}%`,"--y":`${16+(i*31)%68}%`,"--r":`${(i*37)%180}deg`} as React.CSSProperties}/>) }{!placed.length&&<p>Tu espacio para crear</p>}</div></div>;
}

const pairSymbols=["○","△","◇","✦"];
function Memory(){
  const cards=[0,1,2,3,2,0,3,1]; const [open,setOpen]=useState<number[]>([]); const [done,setDone]=useState<number[]>([]); const lock=useRef(false);
  const choose=(i:number)=>{if(lock.current||open.includes(i)||done.includes(i))return;const next=[...open,i];setOpen(next);if(next.length===2){if(cards[next[0]]===cards[next[1]]){setDone(v=>[...v,...next]);setOpen([])}else{lock.current=true;window.setTimeout(()=>{setOpen([]);lock.current=false},900)}}};
  const reset=()=>{setOpen([]);setDone([]);lock.current=false};
  return <div className="game-panel"><div className="game-instructions"><p>Elegí dos tarjetas. Si sus formas coinciden, quedan visibles. Podés tomarte todo el tiempo que necesites.</p><button className="quiet" onClick={reset}>Reiniciar</button></div><div className="memory-board" aria-label="Juego de encontrar pares">{cards.map((s,i)=>{const visible=open.includes(i)||done.includes(i);return <button key={i} className={visible?"is-open":""} onClick={()=>choose(i)} aria-label={visible?`Tarjeta ${i+1}: ${pairSymbols[s]}`:`Tarjeta ${i+1}, oculta`}>{visible?pairSymbols[s]:""}</button>})}</div><p className="game-status" role="status">{done.length===8?"Completaste todos los encuentros.":`${done.length/2} de 4 pares encontrados`}</p></div>;
}

function Sequence(){
  const rounds=[{q:["○","△","○","△"],a:"○",opts:["◇","○","△"]},{q:["○","○","◇","○","○"],a:"◇",opts:["○","△","◇"]},{q:["△","◇","○","△","◇"],a:"○",opts:["○","◇","△"]}];
  const [round,setRound]=useState(0);const [message,setMessage]=useState("Elegí la forma que continúa.");const current=rounds[round];
  const answer=(value:string)=>{if(value===current.a){setMessage("La encontraste. Avanzamos al siguiente patrón.");setRound(v=>(v+1)%rounds.length)}else setMessage("Probá otra vez. No hay apuro.")};
  return <div className="game-panel"><div className="game-instructions"><p>Observá el patrón. Elegí la forma que pensás que sigue; podés probar todas las veces que quieras.</p><button className="quiet" onClick={()=>{setRound(0);setMessage("Elegí la forma que continúa.")}}>Reiniciar</button></div><div className="sequence" aria-label={`Secuencia: ${current.q.join(", ")}, falta una forma`}>{current.q.map((s,i)=><span key={i}>{s}</span>)}<b>?</b></div><div className="sequence-options">{current.opts.map(o=><button key={o} onClick={()=>answer(o)} aria-label={`Elegir ${o}`}>{o}</button>)}</div><p className="game-status" role="status">{message}</p></div>;
}
