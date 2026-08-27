import "server-only";

export type KnowledgeEntry = {
  id: string;
  title: string;
  route: string;
  tags: string[];
  content: string;
};

// Fuente ampliable del asistente. Cada entrada reproduce información oficial
// publicada en esta web; agregar una página nueva solo requiere sumar su entrada.
export const knowledge: KnowledgeEntry[] = [
  {
    id: "guia",
    title: "Guía de Fundación Jazmín y sitio web",
    route: "/",
    tags: ["hola", "buenas", "como estas", "ayuda", "guia", "pagina", "web", "sitio", "color", "colores", "rosa", "rosado"],
    content: "La Guía Jazmín es el asistente virtual del sitio de Fundación Jazmín. Puede orientar sobre la Fundación, su historia, pilares, proyectos, plazas, juegos, donaciones y contacto. La identidad visual del sitio utiliza principalmente rosados: rosa fuerte de Fundación Jazmín para destacar, rosa claro, blanco y tonos neutros claros. La experiencia busca transmitir luz, calidez, inclusión y cercanía.",
  },
  {
    id: "institucion",
    title: "Quiénes somos e historia",
    route: "/sobrenosotros",
    tags: ["fundacion", "historia", "jazmin", "nadia dib", "fabian kopel", "quienes somos"],
    content: "Fundación Jazmín Uruguay fue creada en 2015 por los padres de Jazmín Kopel, Nadia Dib y Fabián Kopel, como un regalo a la sociedad en nombre de su hija y de todas las personas que la ayudaron y ayudan cada día. La información institucional publicada actualmente indica que Jazmín tiene 15 años. Jazmín inspira con su luz y alegría una mirada generosa, agradecida e inclusiva. La Fundación trabaja para imaginar una ciudad y un mundo mejores, con espacios de juego para todos los niños en todos los barrios.",
  },
  {
    id: "pilares",
    title: "Qué hacemos y nuestros pilares",
    route: "/nuestrospilares",
    tags: ["mision", "vision", "valores", "inclusion", "accesibilidad", "movilidad", "seguridad", "mantenimiento", "investigacion", "diseño"],
    content: "La inclusión es un Derecho Humano y el objetivo principal de Fundación Jazmín. La accesibilidad es la plataforma para la inclusión. Sus pilares son inclusión, accesibilidad, movilidad, investigación y diseño, equipamiento inclusivo adecuado, seguridad y mantenimiento. La Fundación promueve espacios y equipamientos para el juego, disfrute y rehabilitación de todos los niños, considerando distintas edades, capacidades y territorios.",
  },
  {
    id: "proyectos",
    title: "Proyectos y plazas inclusivas",
    route: "/proyectos",
    tags: ["proyectos", "plazas", "hamacas", "mapa", "ubicaciones", "montevideo", "uruguay"],
    content: "Fundación Jazmín impulsa espacios de juego accesibles e inclusivos. La web presenta Plaza Ituzaingó, Jardín Botánico, Plaza Portugal, Escuela Especial N.º 79 de Maldonado, Escuela Especial N.º 59 de Río Negro, Campaña Nacional, Plaza República Argentina, Jardín Teeny Tiny, Plaza Juan A. Silva, Plaza Vázquez Ledesma y Hamacas inclusivas en todo Uruguay. El Mapa Jazmín permite explorar dónde hay proyectos.",
  },
  {
    id: "plaza-portugal",
    title: "Plaza Portugal",
    route: "/proyectos/plazaportugal",
    tags: ["plaza portugal", "la blanqueada", "concurso", "una plaza para todos"],
    content: "En 2015 Fundación Jazmín realizó el concurso de ideas Una plaza para todos junto a la Facultad de Arquitectura de la Universidad de la República y la Intendencia de Montevideo. Se presentaron 33 propuestas para transformar Plaza Portugal, en La Blanqueada, en un espacio lúdico e inclusivo.",
  },
  {
    id: "jardin-botanico",
    title: "Jardín Botánico",
    route: "/proyectos/plazajardinbotanico",
    tags: ["jardin botanico", "arqaton", "montevideo"],
    content: "Junto al Departamento de Cultura de la Intendencia de Montevideo, Fundación Jazmín realizó un espacio recreativo, accesible e inclusivo en el Jardín Botánico. El proyecto se vinculó con Arqatón 2019, una maratón de arquitectura y laboratorio de ideas para espacios de juego accesibles e inclusivos.",
  },
  {
    id: "vazquez-ledesma",
    title: "Plaza Vázquez Ledesma",
    route: "/proyectos/vazquezledesma",
    tags: ["vazquez ledesma", "benito blanco", "municipio ch"],
    content: "En Vázquez Ledesma y Benito Blanco se generó un espacio experimental con apoyo del Municipio CH. Se diseñaron juegos con materiales simples, económicos y de fácil mantenimiento, pensados para poder replicarse en otros barrios del país. El espacio fue desarmado porque el predio privado había sido cedido temporalmente.",
  },
  {
    id: "ituzaingo",
    title: "Plaza Ituzaingó",
    route: "/proyectos/plazaituzaingo",
    tags: ["ituzaingo", "piaggio", "saldanha da gama", "arqaton"],
    content: "En Nicolás Piaggio y Saldanha da Gama se construyó un espacio de juegos accesible e inclusivo junto a la Intendencia de Montevideo. El proyecto se originó en ArqAtón 2019 y fue financiado por Fundación Jazmín y la Intendencia de Montevideo.",
  },
  {
    id: "hamacas",
    title: "Hamacas inclusivas en todo Uruguay",
    route: "/hamacasinclusivasentodouruguay",
    tags: ["hamacas", "uruguay", "campaña nacional", "solicitar", "juegos inclusivos"],
    content: "Fundación Jazmín promueve hamacas inclusivas en todo Uruguay para que los espacios de juego puedan ser disfrutados por todos los niños. La sección del sitio reúne información de esta campaña y sus intervenciones.",
  },
  {
    id: "donaciones",
    title: "Cómo donar",
    route: "/donaciones",
    tags: ["donar", "donacion", "ayudar", "aporte", "padrino", "madrina", "mercado pago", "dinero"],
    content: "Se puede colaborar con un aporte mensual como padrino o madrina, o con una donación única. La donación oficial se procesa fuera del sitio mediante Donar Online con Mercado Pago. También hay dos enlaces directos de Mercado Pago. El chat nunca solicita números de tarjeta, códigos de seguridad, contraseñas ni datos bancarios privados.",
  },
  {
    id: "contacto",
    title: "Contacto y redes",
    route: "/contacto",
    tags: ["contacto", "telefono", "correo", "email", "whatsapp", "instagram", "facebook", "youtube", "twitter", "comunicar"],
    content: "Contacto oficial: info@fundacionjazmin.org, teléfono 091 624 386 y WhatsApp 099 25 14 14. Instagram: @fundacionjazmin. También está presente en Facebook como Fundación Jazmín Uruguay, YouTube y X/Twitter.",
  },
  {
    id: "juegos",
    title: "Juegos accesibles",
    route: "/juegos",
    tags: ["juegos", "jugar", "experiencias", "accesibilidad", "memoria", "crear", "explorar"],
    content: "La sección Juegos reúne experiencias digitales accesibles para explorar, crear, descubrir y desafiarse. Están pensadas para mouse, teclado y touch, sin límites de tiempo obligatorios.",
  },
];
