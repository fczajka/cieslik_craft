---
name: nextjs-verification-before-completion
description: Use when verifying Next.js 16 work during the task execution loop. Requires running specific verification commands (lint, typecheck, build) and confirming output before claiming success.
---

# Next.js Verification Before Completion

## Overview

Claiming Next.js work is complete without verification is dishonesty, not efficiency. Next.js 16 introduces specific complexities (explicit `"use cache"` caching, Server vs. Client boundaries, async APIs, and Turbopack behavior) where "it works in dev" is a dangerous illusion.

**Core principle:** Evidence before claims, always.

## The Iron Law

NO COMPLETION CLAIMS WITHOUT FRESH VERIFICATION EVIDENCE.

If you haven't run the required Next.js verification commands in this message, you cannot claim a task passes or move to the next step of the execution loop.

## Required Verification Baseline

In Next.js 16, Turbopack builds **no longer run linting automatically**. Therefore, you MUST run and read the full output of these exact commands in order:

1. `npm run lint` (Mandatory: Turbopack skips this during build. Catches hook dependency issues, unhandled async APIs, and ESLint rules)
2. `npx tsc --noEmit` (Catches strict TypeScript errors, particularly around new Next.js 16 Promise-based APIs)
3. `npm run build` (Critical to catch routing errors, hydration mismatches, and production-only rendering issues)

_Note: If dependencies were modified, run `npm install` before verifying._

## Common Next.js Failures

| Claim               | Requires                                            | Not Sufficient                         |
| ------------------- | --------------------------------------------------- | -------------------------------------- |
| Build succeeds      | `npm run build` output: successful route generation | `npm run dev` works fine               |
| Types check         | `npx tsc --noEmit` output: 0 errors                 | Code editor doesn't show red squiggles |
| Linter clean        | `npm run lint` output: ✔ No ESLint warnings         | Prettier formatted the file            |
| Server/Client split | Build passes without `"use client"` boundary errors | Dev server didn't crash                |

## Red Flags - STOP

- "It works perfectly in `npm run dev`"
- Expressing satisfaction before verification ("Great!", "Perfect!", "Done!", etc.)
- Trusting agent success reports implicitly without command output.
- **ANY wording implying success without having run verification.**
