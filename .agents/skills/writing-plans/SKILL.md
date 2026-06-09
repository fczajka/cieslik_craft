---
name: writing-plans
description: Use when design is approved and you need a concrete, step-by-step implementation plan for Next.js work, including verification commands.
---

# Writing Plans

## Overview

Convert an approved design into an execution-ready plan that is scoped, testable, and safe to run in one session.

Announce at start:
"I'm using the writing-plans skill to produce an implementation plan."

## Inputs Required

- Approved design notes or spec
- Current codebase context (relevant files, Next.js App vs Pages router, rendering patterns)
- Constraints (time, data fetching strategies, performance, dependencies)

If any input is missing, ask focused questions before planning.

## Plan Output Format

Write the plan to:
`.agents/plans/YYYY-MM-DD-<topic>-plan.md`

Create `.agents/plans/` first if it does not exist.

Include these sections:

1. Goal and scope

- What will change
- What will not change (non-goals)

2. Implementation tasks

- Ordered, bite-sized tasks
- For each task include:
  - Files/components expected to change (noting "use client" boundaries if applicable)
  - Exact expected outcome
  - Verification command(s)

3. Risks and mitigations

- Main technical risks (e.g., hydration mismatches, build-time vs run-time errors)
- Security risks for server actions, caching, public routes, approved integrations, and rate limits when they are in scope
- Rollback or fallback strategy

4. Verification strategy

- Required baseline commands:
  - `npm run lint` (or yarn/pnpm/bun equivalent)
  - `npx tsc --noEmit` (for strict TypeScript validation)
  - `npm run build` (critical to verify SSR/SSG and catch production-only errors)
- Additional targeted checks based on scope (e.g., `npm run test` for Jest/Vitest, Cypress/Playwright commands for E2E)
- Security-targeted checks based on scope, such as external integration validation, rate-limit tests, and cache/privacy assertions

5. Handoff

- Explicit instruction to invoke executing-plans with this plan file

## Quality Bar

A good plan is:

- Executable without guessing
- Small enough that each task can be verified
- Explicit about acceptance criteria
- Aligned with Next.js architecture patterns (Server vs. Client boundaries, routing conventions, and state management)

## Stop Conditions

Do not create an implementation plan if the design is not approved.
If design has contradictions or unresolved decisions, return to brainstorming first.
