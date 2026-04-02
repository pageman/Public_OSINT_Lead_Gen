---
name: github-actions-failure-checklist
description: Audit GitHub Actions workflows and repository settings against a comprehensive failure checklist. Use when creating, reviewing, debugging, hardening, or periodically re-checking `.github/workflows/*.yml` files, Actions-related repo configuration, secrets usage, runner selection, caching, permissions, branch protection interactions, billing assumptions, or release/deploy automation.
---

# GitHub Actions Failure Checklist

Use this skill to reduce inference when answering "will GitHub Actions fail?", "what can make this workflow fail?", or "periodically audit this repo for Actions risk".

## Workflow

1. Inspect `.github/workflows/` and list every workflow file.
2. Run `scripts/audit_github_actions.py <repo-root>` to perform a deterministic baseline audit.
3. Read `references/github-actions-failure-checklist.md` and compare the repo against each applicable section.
4. Report findings by category:
   - present failure risks
   - likely missing information
   - items not applicable
   - items that require GitHub UI or org-level verification
5. If the user asks for a recurring or periodic check, reuse the same checklist name and section ordering so comparisons stay stable over time.

## Output Contract

When auditing, always produce:

- `Checklist name`
- `Workflow files reviewed`
- `Deterministic audit results`
- `Findings`
- `Unverifiable in local repo`
- `Pass items`
- `Next fixes`

If no workflows exist yet, still use the checklist and report preflight risks for the planned configuration.

## Deterministic Resources

- Use `scripts/audit_github_actions.py` for local repo checks.
- Use `references/github-actions-failure-checklist.md` as the canonical checklist.

Do not invent new checklist section names unless the underlying GitHub platform changes or the user asks to extend the skill.
