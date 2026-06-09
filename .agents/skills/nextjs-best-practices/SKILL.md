---
name: nextjs-best-practices
description: Use when implementing, refactoring, or reviewing Next.js (App Router) code for maintainability and consistency in this repo; enforces Next.js 16 technical best practices (Server Components, strict typing, explicit caching) while deferring entirely to frontend-design for UI/UX.
---

# Next.js Best Practices

Use this skill to keep feature code performant, secure, and aligned with the current Next.js 16 App Router architecture.

**UI/UX Rule:** For ALL visual styling, layout, aesthetic choices, and component design, you MUST defer completely to the `frontend-design` skill.

## When to use

- Building a new Next.js route, page, or feature.
- Refactoring existing state or data-fetching code.
- Reviewing pull requests for correctness, caching behaviors, and maintainability.
- Fixing hydration errors or server/client boundary issues.

## Core Technical Rules

1. **Server Components by Default:** Always use React Server Components (RSC) unless interactivity or browser APIs are explicitly required.
2. **Push `"use client"` Down:** Keep the `"use client"` directive as low in the component tree as possible (at the leaves) to maximize server rendering and minimize bundle size.
3. **Keep Client Components Public:** Never place secrets, private tokens, or sensitive fetch logic in Client Components. Use local static content, build-time helpers, or server-only modules when data preparation is needed.
4. **Prefer Static Output:** This project is a static website by default. Introduce Server Actions, Route Handlers, or runtime backend behavior only when the user explicitly approves that scope.
5. **Treat Server Actions as Public Endpoints When Used:** If a Server Action is explicitly in scope, validate input with a schema, return minimal data, and add rate limits for public or high-value submissions.
6. **Cache Public Content Intentionally:** Static public content should be cacheable. Avoid caching responses that depend on cookies, request headers, or other per-visitor state unless the cache boundary is explicitly designed.
7. **Represent Async States Explicitly:** Always provide a `loading.tsx` or wrap async components in `<Suspense fallback={...}>` to prevent UI blocking.
8. **Strict Type Safety:** Avoid `any`. Define strict TypeScript interfaces/types for all component props, static content models, and API responses.
9. **Verify Locally:** Run `npm run lint`, `npx tsc --noEmit` (tsc), and `npm run build` locally before claiming a feature is complete. A successful dev server does not guarantee a successful production build.
10. **Handle Errors Gracefully:** Provide an `error.tsx` file for critical routes to catch and display graceful fallback UIs without crashing the whole app.
11. **Strict Code Quality and File Separation:** Keep `.tsx` files clean by extracting TypeScript `interface`/`type` declarations, static content lists/arrays, and utility/helper functions into their own dedicated files. Use shared global files (e.g., in `lib/` or feature-specific shared folders) if these interfaces, content lists, or utility functions can be reused across multiple components.
12. **TSX File Length Limit:** Keep TSX files under 100 lines where possible. If a component grows beyond this, break it down into smaller subcomponents, custom hooks, or helper functions to maximize readability and maintainability.
13. **Dynamic Data Fetching and Turbopack Compatibility:** When `nextConfig.cacheComponents` is enabled in Next.js 16, do NOT use route segment configurations like `export const dynamic = 'force-dynamic'`. Instead, push any dynamic data-fetching logic (such as reading cookies, headers, or uncached remote state) into async child Server Components wrapped inside a React `<Suspense>` boundary. Next.js will compile the page segment as a Partial Prerender (PPR) stream, keeping it fully compatible with Turbopack builds while avoiding prerendering blocking-route errors.

## Component Composition Rule (The Server/Client Boundary)

Never wrap your entire application or large page layouts in a Client Component just to use React Context or a hook.

Use these alternatives for composition:

- Pass Server Components as `children` to Client Components to keep the child rendered on the server.
- Use Zustand or similar lightweight state for global client state instead of massive React Context providers.
- Use URL Search Parameters (`?query=foo`) for shareable state (like active tabs or search filters).
  - **CRITICAL (Next.js 16):** APIs like `searchParams`, `params`, `cookies()`, and `headers()` are strictly asynchronous. You MUST `await` them before accessing their properties in Server Components (e.g., `const { query } = await searchParams;`). In Client Components, use the `useSearchParams` hook.

## UI Implementation Guidance (Radix + Tailwind)

- Use **Radix UI Primitives** (`@radix-ui/*`) for accessible, unstyled core components (dropdowns, dialogs, checkboxes).
- Style everything using **Tailwind CSS**, but execute styling according to the bold rules defined in `frontend-design`. Do not default to generic, uninspired layouts.
- Use `next/image` (`<Image />`) for all static and dynamic imagery to ensure automatic WebP conversion and lazy loading.
- Use `next/link` (`<Link />`) for all internal navigation to enable prefetching.

## Data Fetching and Caching Guidance (Next.js 16)

- Fetch data directly in Server Components using `await`. Avoid `useEffect` for data fetching unless polling or highly specific client-side logic is required.
- **Explicit Caching:** Dynamic code executes at request time by default in Next.js 16. `fetch` requests are NO LONGER cached automatically. If a page, component, or data-fetching function needs to be cached, you **must** explicitly opt-in using the `"use cache"` directive at the top of the file or function block.
- Prefer build-time or static public data for this project. Do not introduce visitor-specific dynamic data unless it is part of an explicitly approved backend feature.
- Avoid **Waterfall Fetching**: If a page requires multiple independent data sources, fetch them in parallel using `Promise.all()`. However, if some data fetches are significantly slower than others, do not block the entire page render. Instead, isolate the slow fetches inside separate Server Components and wrap them in React `<Suspense>` boundaries. This enables streaming and lets the page load the shell and fast components immediately.

## Optimistic UI and State Synchronization (UX & Performance)

When implementing asynchronous operations that modify list orders, toggles, or deletions, waiting for a remote request or Server Action revalidation to complete can make the interface feel laggy. Implement Optimistic UI updates to make the UX feel instantaneous.

### 1. Rules for Optimistic UI:

- **Immediate Local Updates:** When the user triggers an action (e.g., reordering list items), immediately update the local client state (arranging and sorting in-memory) so the visual representation updates instantly.
- **Background Sync:** Fire the Server Action asynchronously in the background. Do not block the UI or show modal loading spinners for quick, low-risk actions.
- **Rollback on Failure:** Wrap the server interaction in a `try-catch` block. If the server action returns `success: false` or throws an error, restore the local state to the original props.

### 2. Rules for Prop-to-State Synchronization (Preventing Cascading Renders):

When syncing local client state (like optimistic lists) with fresh props pushed down from the server:

- **Banned Pattern:** BANNED from using `useEffect` to call state setters synchronously when props change. Doing so triggers the `react-hooks/set-state-in-effect` lint warning, causes performance-degrading cascading renders, and can lead to UI flickering.
  ```typescript
  // BANNED: Banned from doing this!
  React.useEffect(() => {
    setLocalItems(allItems);
  }, [allItems]);
  ```
- **Approved Pattern:** Synchronize state **during the render phase** (before the component returns its JSX). This allows React to immediately re-run the component with the new state, committing only once to the DOM.
  ```typescript
  // APPROVED: Adjust state during render phase
  const [prevItems, setPrevItems] = React.useState(allItems);
  const [localItems, setLocalItems] = React.useState(allItems);
  if (allItems !== prevItems) {
    setPrevItems(allItems);
    setLocalItems(allItems);
  }
  ```
