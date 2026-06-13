# Gatsby to Next.js 16 Migration Design

## Goal

Migrate the real Cieslik Craft Gatsby website from `CieslikCraft/` into the root Next.js 16 App Router project as a visually and behaviorally faithful 1:1 recreation.

The migration will target the active root app, not create a new nested app.

## Confirmed Scope

- Migrate the Cieslik Craft public site routes:
  - `/`
  - `/gallery`
  - the custom 404 page
- Exclude the Gatsby starter-only `/using-typescript` route.
- Preserve the main project `package.json` dependencies; do not remove dependency entries.
- Migrate styling from legacy SCSS/CSS into Tailwind-first React code.
- Use the existing root-level App Router structure. Do not create a new `src/` directory.

## Source Inventory

Legacy Gatsby source:

- Pages:
  - `CieslikCraft/src/pages/index.js`
  - `CieslikCraft/src/pages/gallery.js`
  - `CieslikCraft/src/pages/404.js`
- Shared components:
  - `layout.js`, `header.js`, `sidebar.js`, `navbar-bottom.js`, `footer.js`, `seo.js`
- Gallery components:
  - `dolceVita.js`
  - `discoVolante.js`
- Assets:
  - Hero video: `CieslikCraft.mp4`
  - Home images, icons, parallax backgrounds, boat hover images
  - 8 slider images
  - 28 Dolce Vita images
  - 37 Disco Volante images

## Route Design

- `app/page.tsx`
  - Server Component.
  - Renders the homepage inside the Cieslik Craft site shell.
- `app/gallery/page.tsx`
  - Server Component.
  - Renders the gallery page inside the Cieslik Craft site shell.
- `app/not-found.tsx`
  - Server Component.
  - Renders the legacy standalone 404 view without the site header/footer, matching Gatsby.
- `app/layout.tsx`
  - Root layout only: metadata, global styles, font hooks/base body.
  - Does not wrap every route in the site shell because the 404 page did not use the Gatsby layout.

## Component Design

Use root-level folders following the project architecture:

- `components/site/`
  - `SiteLayout.tsx`
  - `Header.tsx`
  - `Sidebar.tsx`
  - `Footer.tsx`
  - `BottomNavbar.tsx`
  - `SiteChrome.tsx` as a small Client Component for sidebar/overlay state
- `features/home/`
  - `components/HomePage.tsx`
  - `components/HomeCarousel.tsx` as a Client Component
  - `data/home-content.ts`
- `features/gallery/`
  - `components/GalleryPage.tsx`
  - `components/GallerySection.tsx`
  - `components/GalleryLightbox.tsx` as a Client Component
  - `data/gallery-content.ts`

Server Components remain the default. Client Components are used only where Gatsby used browser behavior:

- sidebar open/close
- media menu expand/collapse
- homepage carousel controls/interval
- gallery image click modal, overlay close, previous/next controls

## Styling Design

The legacy SCSS/CSS will not be copied as the primary styling layer. Instead:

- Tailwind utility classes will recreate the legacy fixed header, responsive breakpoints, spacing, dimensions, footer, bottom nav, parallax blocks, boat hover tiles, gallery grid, flip cards, and modal layout.
- `app/globals.css` will stay small and contain:
  - `@import 'tailwindcss'`
  - base reset/body rules
  - Kanit font family fallback/global token
  - any minimal reusable CSS needed for 3D flip preservation, backface visibility, keyframes, or browser-specific primitives that are impractical as inline Tailwind utilities
- SCSS files from the Gatsby project will remain in `CieslikCraft/` as legacy source, but the migrated Next app will not depend on them.
- No broad visual redesign is in scope. Tailwind classes should reproduce the old design, not modernize it.

## Asset Design

Copy the Gatsby image/video assets into a public path such as:

`public/cieslik-craft/`

Use stable public URLs for video backgrounds, CSS background images, gallery thumbnails, and modal images.

Use `next/image` where it preserves the layout faithfully and does not complicate dynamic gallery paths. Use plain `img` or background images where the original behavior depends on CSS background swapping, modal `src` changes, or precise object-fit behavior.

Keep the Cieslik Craft icon available for metadata/icons. Do not remove existing package dependencies.

## Behavior Parity

Homepage:

- Fixed 10vh header, centered logo, desktop social icons, hamburger menu.
- Full viewport hero video, autoplay loop muted.
- 8-image carousel with indicators, next/previous controls, and 5s auto-advance behavior matching Bootstrap defaults.
- Parallax image blocks with original copy.
- Two boat hover tiles swapping grayscale/color images.
- Bottom gallery/youtube/article blocks with hover overlays.
- Footer and mobile fixed bottom social nav.

Sidebar:

- Slides from the left.
- Overlay appears while open.
- Media list expands/collapses to the same effective heights as the Gatsby version.
- Preserve social/media/contact links and visible labels.

Gallery:

- Dolce Vita section first, then Disco Volante.
- Preserve the rendered image order, flip-card pairings, heights, hover rotation, object positioning, and responsive column layout.
- Preserve desktop-only modal behavior based on screen width greater than 1200px.
- Preserve modal captions, previous/next wrapping, overlay close, and close button.

404:

- Full-screen background image.
- Centered dark panel with the legacy text and home link.

## SEO and Metadata

Replace `react-helmet` with Next metadata.

Use the legacy site metadata as the baseline:

- title: `Cieslik Craft`
- description: Gatsby legacy description unless updated later by the user
- author/twitter creator: `@gatsbyjs`, if strict 1:1 metadata is desired

No dynamic metadata is required.

## Dependencies

- Do not remove anything from the root `package.json`.
- Avoid adding dependencies unless a later blocker proves they are necessary.
- Do not add Gatsby, React Bootstrap, Bootstrap, Sass, or Font Awesome packages for the migration.

## Risks and Mitigations

- Visual drift from SCSS to Tailwind:
  - Keep the legacy CSS open as reference and match dimensions/breakpoints directly.
- Carousel parity:
  - Implement only the Bootstrap behavior used by the current page.
- Browser-only behavior:
  - Keep it in small Client Components and avoid turning whole pages into Client Components.
- Asset path spaces:
  - Store assets in public with stable URLs and centralize paths in data files.
- Existing dirty `app/page.tsx`:
  - Migration will replace the starter page after user approval. The current diff is starter-only and not Cieslik Craft product code.

## Verification Plan

After implementation, run:

1. `npm run lint`
2. `npx tsc --noEmit`
3. `npm run build`

Then start the local Next dev server and use the in-app Browser to visually verify:

- `/` desktop and mobile
- `/gallery` desktop and mobile
- image modal behavior on desktop
- sidebar open/close and media expand
- 404 page

## Approval Gate

Implementation must not begin until this design is approved by the user.
