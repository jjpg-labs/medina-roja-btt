# medina-roja-btt

Los avisos de `AGENTS.md` (Next.js 16 con cambios de ruptura; leer `node_modules/next/dist/docs/` antes de tocar APIs de Next) valen tal cual. El entorno local general está en `~/Projects/CLAUDE.md` y `~/Projects/devenv/CLAUDE.md`.

## Qué es

Landing de una sola página, en español, del **II Desafío Medina Roja BTT** (Almedina, Ciudad Real; carrera del 4 de julio de 2026, ya celebrada). Estática, sin BD, sin variables de entorno y sin tests. Stack: Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS 4, Leaflet + react-leaflet 5 para los mapas GPX.

El proyecto está **terminado** (ficha: `~/Documentos/Obsidian/JJPG/02-Projects/medina-roja-btt/medina-roja-btt.md`, que no se copia aquí). La web está en modo posevento: los botones llevan a `resultsUrl` en vez de a la inscripción. Existe también un tenant `medina-roja` dentro de `~/Projects/vereda`; son dos cosas separadas.

## Comandos

Dev server en el puerto **3061**.

| Para | Comando |
|---|---|
| Dev | `npm run dev` |
| Lint | `npm run lint` |
| Build | `npm run build` |

No hay script de test ni CI en GitHub (no existe `.github/`): el gate real es `npm run lint` y `npm run build`.

## Arquitectura

- **Fuente única de datos:** todo lo de la carrera (nombre, fecha, modalidades, cronograma, precios, contacto, patrocinadores, rutas GPX) está en `lib/race.ts`. Se edita ahí primero; los componentes leen de él.
- **Composición:** `app/page.tsx` (server component) monta en orden `Header`, `Hero`, `Galeria`, `Modalidades`, `Mapa`, `Patrocinadores`, `Cartel`, `Cronograma`, `Alojamientos`, `Faqs`, `Contacto`, `Footer`. Las secciones son independientes y no comparten estado.
- **Client components:** solo `Header` (scroll), `Mapa` (selector de ruta), `RouteMap` (Leaflet), `GaleriaGrid` y `SponsorGrid`. El resto, server components.
- **Leaflet y SSR:** `RouteMap` se carga con `dynamic(..., { ssr: false })` dentro de `Mapa`, porque Leaflet usa `window`. El `key={route}` fuerza el remontaje al cambiar entre corta y larga y recarga el GPX: no quitarlo.
- **Tailwind 4:** no hay `tailwind.config.*`; el tema (`almagra`, `oliva`, `naranja`, `mostaza`, `beige`, `coral`, `cream`…) está en `@theme` de `app/globals.css`. Se usan esos nombres, no los grises o rojos genéricos.
- **Fuentes:** cinco Google Fonts en `app/layout.tsx`, expuestas como variables `--font-mr-*` y mapeadas a `--font-display`, `--font-stencil`, `--font-body` y `--font-script` en `globals.css`.
- **SEO:** `metadataBase`, canónica `/` y JSON-LD (`SportsEvent`) en `app/layout.tsx`; `app/robots.ts` y `app/sitemap.ts`.
- **Estáticos:** GPX (`corta-30km.gpx`, `larga-50km.gpx`), PDFs (reglamento, autorización de menores), galería y logos de patrocinadores en `public/`. Las imágenes y los GPX se sirven con caché `immutable` de un año (`next.config.ts`): si se reemplaza un fichero, hay que cambiarle el nombre.

## Despliegue

El repo **no está en `DEPLOY_REPOS`**: un merge a `main` no despliega por sí mismo desde Coolify. Producción sigue en **Vercel** (`medina-roja-btt.vercel.app`, decisión del 2026-07-10, ver `~/Projects/infra/docs/wiring.md` § «Fuera de Coolify»); hay además un recurso Coolify inactivo en sslip.io y un `Dockerfile` standalone (`output: "standalone"`) preparado para migrarlo. `robots.ts` y `sitemap.ts` apuntan todavía al dominio de Vercel.

## Trampas propias

- `lib/race.ts` aún dice «Vuelve el desafío» y «II Edición · 2026» y conserva `registrationOpen: true`: la web se pasó a modo posevento con `resultsUrl`, y esa URL apunta a la misma ficha de Deporchip (su comentario pide verificar que muestre resultados).
- No reponer la cifra de «450 plazas» ni otras que no salgan del repo (auditoría de veracidad del 2026-08-30, en la ficha).
- Design system: pendiente la migración a los tokens de Familia JJPG (medina-roja-btt#3, comparte tema con vereda).

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
