# OSINT Lead Gen

An implementation repo for an OSINT-led lead generation platform that starts with public signal, converts that signal into qualified inbound demand, and monetizes the execution workflows behind the signal.

![OSINT Lead Gen roadmap](./Strategic%20OSINT%20Business%20Development%20Roadmap.png)

This repository is organized around a 120-day build plan. The first 30 days focus on a narrow wedge: one crisis, one buyer persona, one public intelligence hub, one repeatable publishing workflow, and one conversion path.

## Research Arc

This repo is built around one claim:

Public operational signal can become the top of a lead-generation engine if it is clear enough to orient buyers and specific enough to expose the workflow pain they will pay to fix.

The repo follows a strict sequence:

1. `Public signal`: turn noisy public inputs into a usable operational read.
2. `Qualification`: gate sharper assets to identify who has real workflow pain.
3. `Execution`: convert the highest-friction problems into narrow paid pilots.
4. `Standardization`: turn repeated wins into routes, contracts, SOPs, and internal APIs.

The commercial logic is simple:

- do not monetize raw visibility first
- give away the signal
- charge for executing on the queue, corridor, compliance, reconciliation, or exception burden the signal reveals

That is why this repo is not just content, not just a dashboard, and not just a codebase. It is a staged operating model for moving from research to trust to demand to paid workflow execution.

Read the full narrative and method here:

- [Research Arc](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/docs/research-arc.md)
- [Research Arc Diagram](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/docs/research-arc-diagram.md)
- [How To Use This Repo](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/docs/how-to-use-this-repo.md)

## Important: Example Outputs vs Live Alpha

Many of the fintech artifacts in this repo are intentionally included as **example / exemplar outputs**.

That includes:

- fintech updates in `docs/fintech-alpha/`
- sales assets in `docs/fintech-alpha/`
- investor and client one-pagers
- the current persisted fintech signal contract in `data/fintech/signals.latest.json`

These are useful because they show:

- what a good output looks like
- how the narrative should be structured
- how public signal turns into qualification and execution

They should **not** be treated as timeless truth.

To generate up-to-date alpha for a new date or a new wedge:

1. Refresh the signal contract with `npm run ingest:run`
2. Review the current persisted JSON in `data/fintech/` or the relevant wedge data folder
3. Rebuild the public narrative, nowcast, and sales outputs from the refreshed contract
4. Keep the date explicit in every time-sensitive memo, briefing, or landing-page story
5. If changing wedges, repeat the same method with a new source map, new contract, and new public signal route

The repo’s durable value is the **method**, not any one dated alpha memo.

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

## Deployment

- Vercel deployment guide: [docs/deployment.md](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/docs/deployment.md)
- Contributor guide: [CONTRIBUTING.md](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/CONTRIBUTING.md)
- CRM mapping: [docs/crm-mapping.md](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/docs/crm-mapping.md)

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
- [data/fintech/signals.latest.json](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/data/fintech/signals.latest.json) is the stable persisted fintech signal contract consumed by the app
- [pilot-intake](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/apps/web/app/pilot-intake/page.tsx) is the minimum viable paid-pilot intake path
- [ops/cases](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/apps/web/app/ops/cases/page.tsx) is the minimum viable internal case queue
- [refresh-fintech-signals.yml](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/.github/workflows/refresh-fintech-signals.yml) schedules weekly fintech contract refreshes
- [docs/day-31-60](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/docs/day-31-60/README.md), [docs/day-61-90](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/docs/day-61-90/README.md), and [docs/day-91-120](/Users/hifi/Downloads/Public_OSINT_Lead_Gen/docs/day-91-120/README.md) flesh out the later phases with concrete operating artifacts

## Local Start

1. Run `npm install`
2. Run `npm run dev:web`
3. Run `npm run ingest:run`
4. Review the snapshot at `services/ingestion/data/latest_snapshot.json`
5. Review the fintech contract at `data/fintech/signals.latest.json`

## How To Produce New Alpha

Use this sequence for any new date:

1. Refresh source-derived contracts with `npm run ingest:run`
2. Review the main public contract in `data/fintech/signals.latest.json`
3. Check supporting qualification and ops contracts in `data/qualification/` and `data/ops/`
4. Update or regenerate:
   - public pulse
   - gated insights
   - pilot framing
   - sales assets
5. Stamp the output with the actual date you are using

Use this sequence for a new wedge:

1. Define a new wedge and source map
2. Create a new stable data contract
3. Render it in routes
4. regenerate exemplar outputs using the same narrative and method arcs

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
