# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

---

## Project

Landing page for **II Desafío Medina Roja BTT** — a mountain bike race in Almedina, Ciudad Real (July 4, 2026). Single-page, Spanish-language site. Stack: Next.js 16 App Router, React 19, TypeScript 5, Tailwind CSS 4, Leaflet + react-leaflet 5 for GPX route maps.

## Commands

```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint
```

No test suite.

## Architecture

**Single source of truth:** All race data (name, date, modalities, schedule, contact, GPX paths) lives in `lib/race.ts`. Update there first; components read from it.

**Page composition:** `app/page.tsx` is a server component that imports all section components in order. Sections are independent; there is no shared state between them.

**Leaflet / SSR:** `RouteMap.tsx` is a client component loaded via `dynamic(..., { ssr: false })` inside `Mapa.tsx`. This is required — Leaflet uses `window` and cannot render server-side. The `key={route}` prop on `RouteMap` forces a full remount when the user toggles between corta/larga, which reloads the GPX file. Do not remove the `key`.

**Client components:** Only `Header.tsx` (scroll listener), `Mapa.tsx` (route toggle state), and `RouteMap.tsx` (Leaflet DOM) are `"use client"`. Keep all other components as server components.

**Tailwind CSS 4:** There is no `tailwind.config.*` file. All theme customization (custom colors, fonts) is declared in `app/globals.css` via `@theme`. The design uses a custom palette: `almagra` (rust-red), `oliva`, `naranja`, `mostaza`, `beige`, `coral`, `cream`. Use these names in class names rather than generic Tailwind grays/reds.

**Fonts:** Five Google Fonts are loaded in `app/layout.tsx` and exposed as CSS variables (`--font-big-shoulders-stencil`, `--font-stardos`, `--font-special-elite`, `--font-dm-sans`, `--font-caveat`). Apply them via Tailwind utility classes defined in `globals.css`.
