# Gatsby to Next.js 16 Migration Plan

## 1. Goal and Scope

Migrate the real Cieslik Craft Gatsby site from `CieslikCraft/` into the root Next.js 16 App Router app with a 1:1 visual and behavioral match, while converting legacy SCSS/CSS styling to Tailwind-first components.

In scope:

- Build `/`, `/gallery`, and the custom 404 page in the root Next app.
- Copy the required Gatsby assets into `public/cieslik-craft/`.
- Recreate header, sidebar, footer, mobile bottom nav, homepage, carousel, gallery flip cards, desktop lightbox, and 404.
- Preserve root `package.json` dependencies and scripts. Do not remove dependency entries.
- Use App Router, Server Components by default, and Client Components only for browser behavior.

Out of scope:

- Do not migrate Gatsby starter `/using-typescript`.
- Do not preserve Gatsby build tooling, GraphQL queries, Gatsby plugins, Gatsby package files, or SCSS as active Next app dependencies.
- Do not redesign or modernize the visual identity.
- Do not add new dependencies unless a blocking build/runtime issue proves one is necessary.

## 2. Implementation Tasks

### Task 1: Asset Staging and Static Content Models

Expected files changed:

- `public/cieslik-craft/**`
- `features/home/data/home-content.ts`
- `features/gallery/data/gallery-content.ts`
- optional shared type files under `features/**/data` or `types/`

Actions:

- Copy all Cieslik Craft assets used by the real Gatsby routes into `public/cieslik-craft/`, preserving enough directory structure for predictable URLs.
- Define typed data arrays for social links, media links, carousel slides, home tiles, and gallery image/caption/order data.
- Exclude Gatsby starter-only source and unused `using-typescript` content.

Expected outcome:

- Next code can reference every required image/video through stable public URLs and typed content data.

Verification commands:

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

### Task 2: Root Layout, Metadata, and Global Styling Base

Expected files changed:

- `app/layout.tsx`
- `app/globals.css`
- `app/favicon.ico` or metadata icon assets if needed

Actions:

- Replace starter metadata with Cieslik Craft metadata.
- Remove starter font setup that conflicts with the legacy Kanit visual baseline.
- Add Tailwind base/global styling needed for the site: reset, body defaults, Kanit font import/fallback, flip-card primitives, animation keyframes, and small global helpers only where Tailwind utilities are not practical.
- Keep the root layout as a generic shell rather than wrapping all routes in site chrome, so the custom 404 can remain standalone.

Expected outcome:

- App-level metadata and global styling match the migration design without importing legacy CSS/SCSS.

Verification commands:

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

### Task 3: Site Chrome

Expected files changed:

- `components/site/SiteLayout.tsx`
- `components/site/SiteChrome.tsx`
- `components/site/Header.tsx`
- `components/site/Sidebar.tsx`
- `components/site/Footer.tsx`
- `components/site/BottomNavbar.tsx`

Client boundaries:

- `SiteChrome.tsx` is a Client Component for sidebar state, overlay state, keyboard/menu interactions, and media-list expansion.
- Header/sidebar/footer visual components should stay server-compatible unless they directly handle events.

Actions:

- Recreate the fixed desktop header, centered logo, social icons, hamburger, sidebar, overlay, footer, and mobile bottom nav in Tailwind.
- Preserve legacy links, labels, dimensions, breakpoints, hover states, and contact details.
- Replace imperative DOM mutations with React state while preserving the visible behavior.

Expected outcome:

- A reusable Cieslik Craft page shell exists for homepage and gallery.

Verification commands:

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

### Task 4: Homepage Route and Carousel

Expected files changed:

- `app/page.tsx`
- `features/home/components/HomePage.tsx`
- `features/home/components/HomeCarousel.tsx`
- additional small home subcomponents if needed

Client boundaries:

- `HomeCarousel.tsx` is a Client Component for active slide state, interval auto-advance, indicators, and prev/next controls.
- The rest of the homepage remains server-rendered where possible.

Actions:

- Replace the starter `app/page.tsx` with the Cieslik Craft homepage.
- Recreate the video hero, carousel, parallax sections, boats section, bottom gallery/youtube/article blocks, footer integration, and responsive behavior.
- Implement carousel markup/classes and timing to match the old Bootstrap-driven result without adding Bootstrap or React Bootstrap.
- Recreate boat hover image swaps through Tailwind/background styling.

Expected outcome:

- `/` visually and behaviorally matches the Gatsby homepage.

Verification commands:

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

### Task 5: Gallery Route and Lightbox

Expected files changed:

- `app/gallery/page.tsx`
- `features/gallery/components/GalleryPage.tsx`
- `features/gallery/components/GallerySection.tsx`
- `features/gallery/components/GalleryLightbox.tsx`
- additional small gallery subcomponents if needed

Client boundaries:

- `GalleryLightbox.tsx` or the smallest gallery wrapper is a Client Component for click-to-open, overlay close, close button, and previous/next navigation.

Actions:

- Recreate Dolce Vita first and Disco Volante second.
- Preserve the rendered gallery ordering, flip-card front/back pairings, heights, object-fit/object-position variants, responsive columns, and hover rotation.
- Preserve desktop-only modal behavior for viewports wider than 1200px.
- Preserve modal captions and wrapping prev/next behavior.

Expected outcome:

- `/gallery` visually and behaviorally matches the Gatsby gallery.

Verification commands:

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

### Task 6: Custom 404 Page

Expected files changed:

- `app/not-found.tsx`

Actions:

- Recreate the Gatsby 404 standalone page with full-screen background image, dark panel, text, and home link.
- Keep it outside the site chrome, matching the original Gatsby page.

Expected outcome:

- Unknown routes render the legacy Cieslik Craft 404 experience.

Verification commands:

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

### Task 7: Browser Visual QA and Polish

Expected files changed:

- Any previously touched component/style/data files needed to fix visual or behavioral issues.

Actions:

- Start the local Next dev server.
- Use the in-app Browser to inspect:
  - `/` desktop
  - `/` mobile
  - `/gallery` desktop
  - `/gallery` mobile
  - gallery modal desktop behavior
  - sidebar open/close and media expansion
  - unknown route / 404
- Fix mismatches found during QA.

Expected outcome:

- The implemented site passes build checks and visual/interaction smoke checks.

Verification commands:

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`
- Browser QA through the in-app Browser.

## 3. Risks and Mitigations

- Tailwind conversion visual drift:
  - Use Gatsby CSS as the measurement source for dimensions, breakpoints, colors, and responsive behavior.
- Large manual gallery data:
  - Centralize paths/captions/order in typed data files and render sections from data to avoid copy/paste drift.
- Client bundle growth:
  - Keep interactivity scoped to site chrome, carousel, and gallery modal leaves.
- Image path and filename complexity:
  - Reference stable public URLs from data files; avoid dynamic imports with very long filenames.
- Existing dirty starter `app/page.tsx`:
  - Replace it as part of Task 4 because the current diff is starter-only and conflicts with the migration target.
- Main branch protection:
  - Work is on `codex/gatsby-to-next16`.

Security risks:

- No server actions, route handlers, external secrets, auth, or runtime data writes are in scope.
- External links must include safe `target="_blank"` handling with `rel="noopener noreferrer"` where applicable.

Rollback strategy:

- All new migration work is isolated to the migration branch.
- The legacy Gatsby source remains under `CieslikCraft/` for comparison and fallback.

## 4. Verification Strategy

Every implementation task must run the required Next.js verification baseline before being marked complete:

1. `npm run lint`
2. `npx tsc --noEmit`
3. `npm run build`

Final verification additionally requires in-app Browser checks across desktop and mobile routes and the key interactions listed in Task 7.

## 5. Handoff

After this plan is approved, invoke the `executing-plans` skill with:

`.agents/plans/2026-06-09-gatsby-to-next16-plan.md`
