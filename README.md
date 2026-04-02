# OSINT Lead Gen

An implementation repo for an OSINT-led lead generation platform that starts with public signal, converts that signal into qualified inbound demand, and monetizes the execution workflows behind the signal.

This repository is organized around a 120-day build plan. The first 30 days focus on a narrow wedge: one crisis, one buyer persona, one public intelligence hub, one repeatable publishing workflow, and one conversion path.

## Scope

This repo is intended to hold:

- Strategy and planning documents
- Architecture and implementation docs
- The public web application
- Data ingestion services
- Shared schemas and utilities
- CI automation for ingestion and deployment

This repo is not intended to start with:

- Complex ML infrastructure
- Broad multi-crisis abstractions
- Enterprise-grade API surface area
- Heavy data warehousing before usage justifies it

## Build Sequence

The implementation order is:

1. Day 0-30: launch the public OSINT hub, ingestion jobs, weekly update workflow, lead capture, and analytics.
2. Day 31-60: add gated insights, lead scoring, nurture, and community signal intake.
3. Day 61-90: productize the paid pilot and build the internal execution engine.
4. Day 91-120: standardize operations, clean up the data model, and prepare API or white-label expansion.

The full phase plan lives in [docs/roadmap.md](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/docs/roadmap.md).

## Recommended Stack

- Web: `Next.js`, `Tailwind CSS`, `Vercel`
- Ingestion: `Python`, `Playwright`, `GitHub Actions`
- Storage: `Supabase Postgres`
- Lead capture: `Tally` or `Typeform`, `HubSpot`
- Internal workflows: `FastAPI`, `Zapier` or `Make`
- Reporting: `Metabase`
- Billing: `Stripe`

## Repository Layout

```text
.
├── README.md
├── LICENSE
├── .gitignore
├── docs/
│   ├── architecture.md
│   ├── roadmap.md
│   └── issues/
│       ├── day-0-30.md
│       ├── day-31-60.md
│       ├── day-61-90.md
│       └── day-91-120.md
├── apps/
│   └── web/
├── services/
│   └── ingestion/
├── packages/
│   └── shared/
├── scripts/
└── .github/
    └── workflows/
```

## Current Milestone

Current focus is the Day 0-30 milestone:

- define the wedge
- launch the public site
- wire ingestion and storage
- publish the first three updates
- capture leads
- measure traffic and conversion

Issue breakdown is in [docs/issues/day-0-30.md](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/docs/issues/day-0-30.md).

## Implemented Foundation

The repo now includes a working day 0-30 foundation:

- [apps/web](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/apps/web) contains a real Next.js app shell with:
  - homepage
  - public hub page
  - updates archive
  - evergreen explainer
  - contact routes
- [services/ingestion](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/services/ingestion) contains a Python ingestion shell that writes a normalized snapshot
- [packages/shared](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/packages/shared) contains shared source and update types
- [docs/source-map.md](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/docs/source-map.md) defines the initial source inventory
- [docs/weekly-update-template.md](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/docs/weekly-update-template.md) defines the publication template
- [ingestion-smoke.yml](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/.github/workflows/ingestion-smoke.yml) provides a scheduled ingestion smoke workflow
- [apps/web/app/insights/page.tsx](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/apps/web/app/insights/page.tsx) starts the day 31-60 gated insight layer
- [services/ingestion/src/fetchers.py](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/services/ingestion/src/fetchers.py) includes the first real public-source fetcher
- [apps/web/app/fintech/page.tsx](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/apps/web/app/fintech/page.tsx) exposes the fintech alpha wedge in the app
- [docs/fintech-alpha](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/docs/fintech-alpha) contains the fintech day 0-30 content set

## Local Start

1. Run `npm install`
2. Run `npm run dev:web`
3. Run `npm run ingest:run`
4. Review the snapshot at `services/ingestion/data/latest_snapshot.json`

## Source Documents

Primary planning source:

- [OSINT_Lead_Gen_30_60_90_120_Day_Build_Plan.md](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/OSINT_Lead_Gen_30_60_90_120_Day_Build_Plan.md)

Supporting packet:

- [osint_lead_gen_roadmap_v2.pdf](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/osint_lead_gen_roadmap_v2.pdf)
- [OSINT_Lead_Gen_Architecture.pdf](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/OSINT_Lead_Gen_Architecture.pdf)

## Next Actions

1. Initialize the app and service directories with real code.
2. Create the first GitHub project or issue board from the docs under `docs/issues/`.
3. Push the repo to GitHub once the initial scaffold and milestone docs are in place.
