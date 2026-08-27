# Fundación Jazmín

Sitio institucional de Fundación Jazmín Uruguay, desarrollado con Next.js,
TypeScript y React. Incluye un asistente conversacional conectado a Claude.

## Requisitos

- Node.js 20 o superior
- npm
- Una API key de Anthropic para habilitar el asistente

## Desarrollo local

```bash
npm install
copy .env.example .env.local
npm run dev
```

El sitio queda disponible en <http://localhost:3001>.

## Variables de entorno

```env
ANTHROPIC_API_KEY=
ANTHROPIC_MODEL=claude-sonnet-4-5
ASSISTANT_RATE_LIMIT_SALT=
```

`ANTHROPIC_API_KEY` y `ASSISTANT_RATE_LIMIT_SALT` son secretos del servidor. No
deben usar el prefijo `NEXT_PUBLIC_`, almacenarse en Git ni copiarse al frontend.

## Comandos

| Comando | Uso |
| --- | --- |
| `npm run dev` | Servidor local en el puerto 3001 |
| `npm run lint` | Revisión estática del código |
| `npm run build` | Compilación de producción |
| `npm run start` | Ejecución de la compilación |

## Organización del proyecto

```text
src/
├── app/                    # Rutas, páginas y endpoints de Next.js
│   └── api/chat/           # Controlador HTTP del asistente
├── components/             # Componentes visuales reutilizables
│   └── assistant/          # Interfaz del chat
├── config/                 # Datos globales del sitio y navegación
└── lib/assistant/          # Dominio del asistente
    ├── claude.ts           # Integración exclusiva con Anthropic
    ├── config.ts           # Configuración privada del servidor
    ├── knowledge.ts        # Información institucional para la IA
    ├── rate-limit.ts       # Límite básico de solicitudes
    ├── request.ts          # Validación y normalización de entradas
    ├── system-prompt.ts    # Comportamiento editable del asistente
    └── types.ts            # Contratos compartidos
```

## Mantenimiento de contenido

- Datos globales, contacto, redes y navegación: `src/config/site.ts`.
- Información institucional utilizada por Claude: `src/lib/assistant/knowledge.ts`.
- Reglas de comportamiento de Claude: `src/lib/assistant/system-prompt.ts`.
- Contenido visible de cada página: `src/app/<ruta>/page.tsx`.

Cuando cambie un dato institucional, actualizá tanto la página correspondiente
como `knowledge.ts` para mantener alineado el sitio con el asistente.

## Publicación

1. Configurar las tres variables de entorno en la plataforma de hosting.
2. Ejecutar `npm run build` durante el despliegue.
3. No publicar `.env.local`.
4. Configurar límites de consumo y facturación en Anthropic.
5. Para múltiples instancias, reemplazar el rate limit en memoria por un almacén
   compartido como Redis o el servicio equivalente de la plataforma.

## Seguridad

El navegador solo se comunica con `/api/chat`. La API key se lee dentro del
runtime de Node.js y nunca se incluye en el bundle público. El endpoint limita el
tamaño del mensaje, la cantidad de historial, el tiempo de espera y la frecuencia
de solicitudes.
