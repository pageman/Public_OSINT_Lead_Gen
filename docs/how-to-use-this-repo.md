# How To Use This Repo

## Purpose

This document explains the best practical way to use the repository as:

- a public demo product
- a research and alpha generation system
- a commercial operating model

## Start With The Right Mental Model

This repo is a staged system:

1. public signal
2. qualification
3. execution
4. standardization

Read these first:

- [README.md](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/README.md)
- [research-arc.md](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/docs/research-arc.md)
- [research-arc-diagram.md](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/docs/research-arc-diagram.md)

## Example Outputs vs Live System

### Example / Exemplar Outputs

These show what good output looks like:

- [docs/fintech-alpha](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/docs/fintech-alpha)

Use them for:

- structure
- tone
- framing
- output quality

Do not treat them as timeless truth.

### Live System Contracts

These drive the actual app:

- [signals.latest.json](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/data/fintech/signals.latest.json)
- [nowcast.latest.json](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/data/qualification/nowcast.latest.json)
- [community-signals.json](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/data/qualification/community-signals.json)
- [cases.json](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/data/ops/cases.json)
- [dashboard.json](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/data/ops/dashboard.json)
- [pricing.json](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/data/ops/pricing.json)

## Core Commands

From repo root:

```bash
npm install
npm run ingest:run
npm run dev:web
npm run build:web
npm run audit:actions
npm run lint:docs
```

## First-Time Setup

1. Go to the repo:

```bash
cd /Users/hifi/Downloads/Public_OSINT_Lead_Gen
```

2. Install dependencies:

```bash
npm install
```

3. Review env defaults in:

- [.env.example](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/.env.example)

4. Refresh the contracts:

```bash
npm run ingest:run
```

5. Start the app:

```bash
npm run dev:web
```

## Best Route Walkthrough

Use this route order:

1. `/`
2. `/fintech`
3. `/insights`
4. `/qualification/nowcast`
5. `/qualification/community-signals`
6. `/pilot-intake`
7. `/ops/cases`
8. `/ops/dashboard`
9. `/pricing`
10. `/platform/api`

## Best Way To Use It By Goal

### See The Product

Use:

- `/`
- `/fintech`
- `/insights`
- `/pilot-intake`
- `/ops/cases`

### Generate New Alpha

1. Run:

```bash
npm run ingest:run
```

2. Review:

- [signals.latest.json](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/data/fintech/signals.latest.json)
- [nowcast.latest.json](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/data/qualification/nowcast.latest.json)
- [community-signals.json](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/data/qualification/community-signals.json)

3. Regenerate dated outputs from the current contracts.

### Use It For Sales

Start with:

- [sales-script-2026-04-02.md](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/docs/fintech-alpha/sales-script-2026-04-02.md)
- [cold-outbound-email-2026-04-02.md](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/docs/fintech-alpha/cold-outbound-email-2026-04-02.md)
- [five-minute-sales-call-script-2026-04-02.md](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/docs/fintech-alpha/five-minute-sales-call-script-2026-04-02.md)
- [client-briefing-memo-2026-04-02.md](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/docs/fintech-alpha/client-briefing-memo-2026-04-02.md)

Refresh the alpha first if the date has changed.

## How To Produce New Alpha Correctly

1. Refresh the contracts.
2. Read the contracts first, not the old memos.
3. Choose and stamp the current date explicitly.
4. Use exemplar outputs as templates only.
5. Produce a new public pulse, gated insight, and commercial framing set.

## How To Use It For A New Wedge

1. Define a new wedge.
2. Create a new source map.
3. Create a stable contract.
4. Add a route.
5. Regenerate exemplar outputs using the same method.

## Team Usage

### Research / Analyst

Own:

- source maps
- signal review
- narrative quality
- exemplar outputs

### Builder

Own:

- `apps/web`
- `services/ingestion`
- data contracts
- API routes
- workflows

### Operator / Founder

Own:

- qualification
- pilot routing
- cases
- pricing
- sales assets

## Maintenance Workflow

Before publishing or pushing meaningful changes:

```bash
npm run ingest:run
npm run build:web
npm run audit:actions
```

If docs changed significantly:

```bash
npm run lint:docs
```

## Definition Of Good Use

This repo is being used well when it:

- produces a usable public signal
- converts readers into qualified leads
- turns qualified leads into narrow paid pilots
- tracks cases and operational proof
- standardizes the repeatable wins
