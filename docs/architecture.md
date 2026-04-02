# Architecture

## Objective

Build a lean OSINT-led growth system with four layers:

1. public signal generation
2. lead capture and qualification
3. internal execution workflows
4. later-stage API and data product access

The architecture is intentionally phased. Day 0-30 uses the minimum components required to publish credible signal and capture demand. Day 31-120 extends the same system without forcing a premature platform build.

## System Overview

```text
Public Sources
  -> Ingestion Jobs
  -> Normalized Storage
  -> Editorial Views / Weekly Update Inputs
  -> Public Web Hub
  -> Gated Insights and Lead Capture
  -> CRM and Nurture
  -> Paid Pilot Intake
  -> Internal Execution Workflows
  -> Later API / White-label Access
```

## Phase 1 Architecture: Day 0-30

### Components

- `apps/web`
  - public OSINT hub
  - evergreen explainer
  - update archive
  - contact and booking pages
- `services/ingestion`
  - source fetchers
  - parsers
  - normalization jobs
  - scheduled tasks
- `packages/shared`
  - shared schemas
  - signal types
  - validation helpers
- `Supabase`
  - signal tables
  - source metadata
  - update records
  - lead submission metadata
- `HubSpot`
  - lead capture
  - attribution
  - lifecycle stage
- `GitHub Actions`
  - scheduled ingestion
  - test and lint automation
  - deployment hooks

## Data Domains

### Public Signals

Core stored entities:

- source
- source_snapshot
- signal_event
- signal_metric
- weekly_update
- submission
- lead

### Example Responsibilities

- `source`
  - where the data came from
  - source type
  - reliability score
- `source_snapshot`
  - raw source capture at a point in time
  - fetch timestamp
  - parser version
- `signal_event`
  - derived operational event or change
  - category
  - confidence
  - summary
- `signal_metric`
  - time-series numeric metric used in dashboards and gated views
- `weekly_update`
  - published narrative output
  - linked source evidence
- `submission`
  - community-contributed observation
  - moderation status
- `lead`
  - captured commercial interest
  - source attribution
  - score

## Delivery Phases

## Day 0-30

Ship:

- web hub
- ingestion v1
- source map
- first three updates
- form capture
- analytics baseline

Avoid:

- custom ML pipeline
- public API
- enterprise auth
- multi-crisis generalization

## Day 31-60

Add:

- gated insights pages
- CSV export
- simple nowcast logic
- lead scoring
- nurture emails
- community signal intake

## Day 61-90

Add:

- pilot intake
- case triage
- execution dashboard
- billing and contracting
- KPI reporting for client work

## Day 91-120

Add:

- internal API layer
- unified data model cleanup
- SOPs
- pricing architecture for API or white-label beta

## Deployment Model

### Web

- deploy from `apps/web` to `Vercel`
- preview builds on pull requests
- production deployment from the default branch

### Ingestion

- run scheduled jobs from `GitHub Actions` initially
- if job volume grows, move ingestion into a dedicated worker runtime

### Storage

- start with `Supabase Postgres`
- only introduce a warehouse when volume or reporting complexity requires it

## Engineering Standards

- Keep one narrow wedge until conversion is proven.
- Treat editorial quality and source traceability as first-class product concerns.
- Build for repeatability before building for scale.
- Every later layer must depend on evidence from the earlier layer.

## Immediate Build Order

1. Create the web app shell.
2. Create the ingestion service shell.
3. Define shared schemas for source, signal, update, lead, and submission.
4. Stand up storage and analytics plumbing.
5. Publish manually assisted updates before attempting full automation.
