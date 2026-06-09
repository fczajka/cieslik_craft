---
name: post-task-skill-maintenance
description: Use when finishing a task to review whether other skills should be updated from new learnings, workflow changes, or verification gaps.
---

# Post-Task Skill Maintenance

## Overview

Review what was learned during the task and update affected skills only when evidence shows an update is needed.

## Update Criteria

Update a skill file only if at least one condition is true:

1. A command, API, or workflow step in an existing skill is outdated.
2. A recurring failure reveals a missing guardrail.
3. The repo adopts a new architecture, UI, or testing convention.
4. A skill references missing files, stale paths, or non-existent companion skills.
5. A stronger verification command should be required globally.

## Procedure for Updating

If the criteria above are met:

1. Map the new learnings to the impacted skill files in `.agents/skills/*/SKILL.md`.
2. Apply minimal edits to only the impacted skills.
3. Preserve frontmatter integrity (`name` and `description` must remain valid YAML).
4. Re-read edited skills and ensure no contradictory guidance was introduced.

## Safety Rules

- Do not rewrite unrelated sections.
- Do not duplicate guidance already covered by another skill.
- Prefer updating an existing skill over creating a new one.
- Keep guidance repository-specific when behavior is repository-specific.

## Verification

- Re-open edited `SKILL.md` files and confirm YAML frontmatter is valid.
- Confirm referenced companion skills/files exist.
