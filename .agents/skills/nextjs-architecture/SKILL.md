---
name: nextjs-architecture
description: When creating or refactoring features in the current static Next.js 16 architecture (App Router, Server/Client components, static content, root-level app/components/lib layout, optional feature folders).
---

# Next.js Static Website Architecture (Current State)

This project uses a static-first architecture via the Next.js 16 App Router (React 19).
It currently uses root-level `app/`, `components/`, `lib/`, and `proxy.ts` paths. Do not create a `src/` directory unless a dedicated migration plan explicitly says to do so.

## Current baseline

- Application code lives in root-level application folders (`app/`, `components/`, `lib/`) plus root `proxy.ts`.
- Routing and rendering standard is the Next.js App Router (`app/` directory).
- React Server Components (RSC) are the default; `"use client"` is used strictly at the leaves of the component tree for interactivity.
- Existing starter components live in `components/`; new non-trivial domain logic can be introduced under root-level `features/<feature>/` when it improves separation.
- Shared UI primitives live in `components/ui` (Shadcn/Radix).
- **Network Interception:** If request interception or redirects are explicitly needed, use root `proxy.ts` (Next.js 16 standard), NOT `middleware.ts`.

## When to use

- Adding or refactoring a route under `app/`.
- Deciding where to place new components, static content loaders, or optional service code.
- Introducing new static content models and updating TypeScript definitions.

## Folder layout to follow

```text
app/
  (site)/ # Optional route groups for logical separation
  [slug]/ # Dynamic static routes when content requires them
  page.tsx # Orchestrates static content loading and rendering
  layout.tsx
  error.tsx
components/
  ui/ # Shared/Global Shadcn UI primitives (dumb components)
lib/
  content/
    loaders.ts # Static content loaders and normalization helpers
  utils.ts # tailwind-merge, clsx, common helpers
proxy.ts # Next.js 16 network interception (replaces middleware.ts)
features/ # Optional for new non-trivial domains
  <feature>/ # e.g., 'portfolio', 'gallery', 'contact'
    components/ # Feature-specific components
    actions/ # Optional Server Actions for approved form flows
    services/ # Feature-specific content/service helpers
types/ # Optional shared content and integration types
  content.ts # Static content model types
```

Notes:

- Do not create empty folders "just in case".
- Keep routing, metadata, and data-fetching orchestration in `app/.../page.tsx`.
- Keep reusable primitives and current starter UI in `components/`; place new feature-specific view pieces in `features/<feature>/components/` when a feature folder exists.
- Keep sensitive integration logic completely out of Client Components; place it in `features/<feature>/actions/` or server-only services when such integrations are explicitly approved.

## Next.js 16 Specific Architectural Rules

1. **Async Route APIs:** Route segment APIs (`params`, `searchParams`) are strictly asynchronous. You MUST `await` them in your `page.tsx` or `layout.tsx` before accessing their properties (e.g., `const { slug } = await params;`). Accessing properties synchronously (e.g. `params.slug`) evaluates to `undefined` because dynamic segments are Promises and can break static route rendering.
2. **Explicit Caching:** Caching is opt-in, not implicit. Use the `"use cache"` directive at the top of a file or function block if you need to cache the output of a component or data fetch.

## Dependency direction

- `app/` routes depend on `components/`, optional `features/` (components, actions, services), and `types/` when present.
- `features/<feature>/components/` depend on `components/ui` primitives, types, and feature-level hooks/actions.
- `components/ui/` depend on Radix, Tailwind, and `lib/utils.ts`. They should NOT depend on feature logic.
- `features/<feature>/actions/` validate input and call `features/<feature>/services/` when optional form or revalidation flows are explicitly in scope.
- `features/<feature>/services/` own content loading, normalization, and approved external API calls.

## Content loading pattern (current)

For standard content access, prefer local static data, Markdown/MDX/content files, or build-time fetches through feature services. Keep runtime data fetching out of the project unless the user explicitly approves it.

**Suspense-Based Streaming:** Avoid page-wide data-fetching blockers. Instead of using `Promise.all()` to block the entire page render on multiple parallel queries, isolate slow data queries into individual Server Components and wrap them in React `<Suspense>` boundaries. This enables Next.js to stream the shell immediately, improving perceived performance and UX.

Example target pattern for a future portfolio feature:

    // features/portfolio/services/portfolio_service.ts
    import 'server-only';
    import { projects } from '@/lib/content/projects';

    export async function getProjects() {
      return projects;
    }

    // Server Component (app/work/page.tsx)
    import { getProjects } from '@/features/portfolio/services/portfolio_service';
    import { ProjectGrid } from '@/features/portfolio/components/ProjectGrid';

    export default async function WorkPage() {
      const projects = await getProjects();
      return <ProjectGrid projects={projects} />;
    }

## State/action pattern (current)

Prefer static pages and client-local state for interactive UI. Use Next.js Server Actions only for approved form submissions, revalidation, or integrations that require server-only keys.

- Action `submitContactForm(payload)` (in `features/contact/actions/`) validates the payload, calls an approved email or form service, and returns `{ success: true }`.
- Client Component uses React 19's `useTransition` or `useActionState` to show a loading spinner while the Server Action runs.

## Models and typing

- Define explicit TypeScript types for static content models and component props.
- Extract reusable content types into `types/` or feature-local type files:
  `type Project = { title: string; slug: string; summary: string; image: string; };`
- Ban the use of `any` completely.
- Validate Server Action inputs dynamically using Zod before calling external services.

## New feature checklist

1. Define the static content model and source files if the feature needs structured content.
2. Add or update shared TypeScript types in `types/` or feature-local type files.
3. Add any globally shared UI primitive components to `components/ui/` if required.
4. Create the new feature folder under `features/<feature>/` when the feature is large enough to need components/actions/services separation.
5. Add content/service helpers in `services/` when content loading or normalization should stay out of UI files.
6. Add optional Server Actions in `actions/` only for explicitly approved form or integration flows.
7. Add rate limits or abuse controls for public or high-value submissions when runtime actions are introduced.
8. Build feature-specific components in `components/`.
9. Wire it all together by adding the route under `app/` and building out the Server Component (`page.tsx`), ensuring `params` are awaited.
10. Run the verification baseline from `nextjs-verification-before-completion`.
