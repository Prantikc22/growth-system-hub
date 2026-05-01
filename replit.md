# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Growth System (`artifacts/growth-system`)
- **Type**: React + Vite web app (frontend-only, no backend required)
- **Preview path**: `/`
- **Description**: Brand marketing/agency website for "Growth System" — a productized brand growth system
- **Routes**: `/` (home), `/work`, `/work/:slug`, `/services`, `/about`, `/contact`, `/franchise`
- **Stack**: React 18, react-router-dom, Tailwind CSS v3, shadcn/ui, Inter font
- **Key features**: Animated hero with word-reveal, magnetic cursor, scroll progress indicator, service configurator with pricing engine, case studies portfolio, marquee animations
- **Data**: Static data files in `src/data/` (case-studies.ts, testimonials.ts, partnerships.ts)
- **Styling**: Custom design tokens in `src/index.css`, tailwind.config.ts with brand colors (electric blue #2563EB, growth green)

### API Server (`artifacts/api-server`)
- **Type**: Express API server
- **Preview path**: `/api`
- **Description**: Backend API server (currently minimal — Growth System app is frontend-only)

### Canvas (`artifacts/mockup-sandbox`)
- **Type**: Design/mockup sandbox
- **Preview path**: `/__mockup`
