---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill for ALL UI, UX, styling, and design decisions. This is the absolute source of truth for aesthetics in this project. Generates creative, polished code and UI design that avoids generic AI aesthetics.
---

# Frontend Design (Source of Truth for UI/UX)

This skill is the absolute authority on visual execution. It guides the creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

## Tech Stack Alignment

Your tools for achieving these designs are **Tailwind CSS** and **Radix UI Primitives** (via your `package.json`).

- Do not default to the basic, utilitarian "Shadcn look" just because Radix is present.
- Use Radix for accessible functionality (focus management, ARIA), but aggressively style them with custom Tailwind classes, arbitrary values (`w-[31vw]`), and extended theme configurations in the `app/globals.css` `@theme` block to achieve the design vision.
- If complex animations are needed, use CSS/Tailwind animations or explicitly ask to install an animation library like Framer Motion or GSAP.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:

- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code that is:

- Production-grade and functional.
- Visually striking and memorable.
- Cohesive with a clear aesthetic point-of-view.
- Meticulously refined in every detail.

## Frontend Aesthetics Guidelines

Focus on:

- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial, Inter, or Roboto. Opt instead for distinctive choices that elevate the frontend's aesthetics. Pair a distinctive display font with a refined body font (update Next.js `next/font` imports accordingly).
- **Color & Theme**: Commit to a cohesive aesthetic. Extend Tailwind's theme in the configuration if necessary. Dominant colors with sharp accents outperform timid, evenly-distributed palettes. Utilize `next-themes` for striking Dark/Light mode contrasts, not just inverted grays. **CRITICAL**: Do NOT use gradients (for text, backgrounds, or borders) unless explicitly specified by the user.
- **Motion**: Use animations for effects and micro-interactions via `tailwindcss-animate` or custom CSS. Focus on high-impact moments: one well-orchestrated page load with staggered reveals creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density. Break out of standard 12-column rigid grids when it serves the aesthetic.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects: gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families, cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details.
