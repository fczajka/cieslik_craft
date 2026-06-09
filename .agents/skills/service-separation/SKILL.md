---
name: service-separation
description: Use when adding or refactoring Next.js code that touches external data, build-time content processing, or sensitive service calls; keeps fetching, parsing, and business logic out of UI component files and in dedicated service files.
---

# Service Separation (UI vs Content/Services)

Use this skill to keep React components focused on rendering UI and move content preparation, remote API calls, and sensitive external integrations into dedicated services or Server Actions.

## Core rule

Do not define complex content parsing, remote API fetch logic, or sensitive integration code directly inside React components (whether Server or Client components). Delegate that work to dedicated service functions organized by feature.

For this static website, default to local static content and build-time data preparation. Add runtime services, Route Handlers, or Server Actions only when the user explicitly approves the feature scope.

Keep secrets and private API credentials server-side. Browser-visible code may call only public endpoints or public tokens that are safe to expose.

- **Server Isolation:** All server-only service/content files (`*_service.ts`) must import the `'server-only'` package at the top to guarantee they are never bundled into client components. Do NOT add the `"use server"` directive at the top of service files, as that registers all their functions as public Server Action HTTP endpoints. The `"use server"` directive must be kept exclusively in Server Action files (`*_actions.ts`), which serve as the secure validation and entry-point layer.

## Preferred structure (Feature-Sliced)

app/
[route]/
page.tsx # Server component (calls services, passes data to UI)
components/
ui/ # Shared primitives
lib/
content/ # Shared content loaders, parsers, and static data helpers
features/
<feature>/
components/ # Pure UI components (Client or Server) specific to this feature
actions/
<feature>\_actions.ts # Optional Server Actions (form handling, revalidation)
services/
<feature>\_service.ts # Content/service layer (static data, remote APIs)

- UI files (`page.tsx`, `layout.tsx`, components) render data, handle client state, and wire up callbacks.
- Server Actions validate inputs, orchestrate approved form submissions, call services when needed, and handle cache revalidation (`revalidatePath`).
- Services own static content loading, normalization, and external HTTP requests. They must also contain any checks or transformations that should not live in UI code.

## File-size guidance

- Aim for files around or below 100-150 lines when practical.
- This is a guideline, not a strict limit.
- If a file starts mixing concerns (e.g., a large UI component that also validates schemas, parses content, and calls an external service), split the UI, Server Actions, and service logic into their respective feature folders.
