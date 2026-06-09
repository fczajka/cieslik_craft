---
name: brainstorming-nextjs
description: Use when designing new Next.js features, routing changes, data fetching strategies, or complex state before implementation. Supports quick mode for small scoped changes and full mode for complex work.
---

# Brainstorming Ideas Into Designs (Next.js)

Turn ideas into approved, implementation-ready designs through collaborative dialogue.

Start by understanding project context (App Router vs. Pages Router, SSR/SSG/ISR needs), then ask focused questions one at a time.

## Hard Gate

Do NOT implement, scaffold, or modify code until the user approves the design.
This applies to both quick mode and full mode.

## Pick a Mode First

Choose mode after a short context scan.

### Quick Mode (small changes)

Use quick mode when ALL are true:

- Single page, component, or minor route adjustment
- Localized state or simple static content change
- No new major dependencies or architectural layers
- Risk is low and rollback is easy

Flow:

1. Confirm goal and success criteria
2. Ask 1-2 clarifying questions (one per message)
3. Offer 2 approaches with trade-offs (e.g., Server vs. Client component)
4. Present a short design (5-10 bullets)
5. Get explicit approval
6. Invoke writing-plans for a short execution plan

### Full Mode (complex changes)

Use full mode when ANY are true:

- Multi-route or nested layout changes
- Complex content loading (streaming, caching strategies, suspense boundaries)
- `proxy.ts`, global state changes, or approved runtime service changes
- New external API integrations
- Significant testing, SEO, or migration impact

Flow:

1. Explore project context (Next.js version, rendering paradigms, existing content structure)
2. Ask clarifying questions one at a time
3. Propose 2-3 approaches and recommend one (evaluating performance and UX trade-offs)
4. Present design sections and validate incrementally
5. Write spec to `.agents/specs/YYYY-MM-DD-<topic>-design.md`, creating the directory first if it does not exist
6. Self-review for hydration issues, caching traps, ambiguity, and scope
7. Ask user to review the spec file
8. Invoke writing-plans for implementation planning

## Next.js Design Checklist

For approved designs, cover these explicitly:

- Routing scope: App Router layout/page structure, dynamic segments, catch-alls
- Rendering scope: Server Components (RSC) vs. Client Components ("use client"), Suspense boundaries
- Data scope: static content sources, optional Server Actions, API Routes/Route Handlers, caching strategy (using the `"use cache"` directive, Cache Components, and Partial Pre-Rendering)
- Security scope: public submission rate limits, cache privacy, and approved external integration trust boundaries when in scope
- State scope: URL state vs. React Context vs. global stores (Zustand/Redux)
- Failure states: `error.tsx`, `loading.tsx`, `not-found.tsx`, error boundaries
- SEO & Meta scope: dynamic metadata, Open Graph, sitemaps
- Test scope: unit tests, Playwright/Cypress E2E expectations

## Question Style

- Ask one question per message
- Prefer multiple-choice where useful
- Focus on rendering paradigm, data freshness needs, and success criteria

## Working In Existing Codebases

- Strictly adhere to the existing routing paradigm (App vs. Pages router) unless a migration is the explicit goal
- Follow established data-fetching and styling conventions
- Keep Server and Client module boundaries clear

## Transition Rule

After user approval, invoke writing-plans.
Do not jump directly from brainstorming to implementation.
