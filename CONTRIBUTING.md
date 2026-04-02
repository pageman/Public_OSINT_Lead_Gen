# Contributing

## Scope

This repository prioritizes one narrow wedge at a time. Contribute changes that improve:

- public signal quality
- evidence traceability
- lead capture and qualification
- execution workflow readiness

Avoid broad abstractions that are not yet justified by usage.

## Local Setup

1. Install Node.js 20 or later.
2. Install Python 3.11 or later.
3. Run `npm install`.
4. Copy `.env.example` to `.env.local` if you need local configuration overrides.
5. Run `npm run dev:web` for the app.
6. Run `npm run ingest:run` to generate or refresh local signal data.

## Expected Contribution Areas

- `apps/web`
  - public product surface
  - gated insight flows
  - lead capture UX
- `services/ingestion`
  - source fetchers
  - normalization pipelines
  - output contracts
- `packages/shared`
  - shared types and schemas
- `docs`
  - methodology
  - source maps
  - deployment and CRM mapping

## Standards

- Keep claims attributable to evidence.
- Separate observed facts from inference.
- Prefer stable persisted JSON contracts over hardcoded app-only data.
- Do not add expensive infrastructure until one wedge is clearly converting.
- Keep generated artifacts out of Git unless they are intentional fixtures or examples.

## Before Opening a PR

- Run `npm run build:web`
- Run `npm run ingest:run`
- Run `npm run audit:actions`
- Review changes to docs and data contracts for consistency

## High-Risk Changes

Call out these explicitly in PR descriptions:

- workflow permission changes
- new external services
- changes to signal methodology
- changes to lead scoring
- anything that affects public claims or source reliability
