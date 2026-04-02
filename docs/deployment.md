# Deployment

## Target

Primary deployment target is `Vercel` for the web app. Ingestion should run in `GitHub Actions` or another server environment with stable certificate trust and network access.

## Web Deployment

### Recommended Vercel Settings

- Framework preset: `Next.js`
- Root directory: `apps/web`
- Install command: `npm install`
- Build command: `npm run build:web`
- Output directory: leave default for Next.js

### Environment Variables

Minimum:

- `NEXT_PUBLIC_SITE_NAME`
- `NEXT_PUBLIC_PRIMARY_WEDGE`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_BOOK_CALL_URL`
- `NEXT_PUBLIC_TALLY_FORM_URL` optional
- `LEAD_CAPTURE_WEBHOOK_URL` optional
- `LEAD_CAPTURE_TARGET` optional, defaults to local file persistence

## Lead Capture Runtime

The app includes an internal lead-capture endpoint:

- `POST /api/lead-capture`

Behavior:

- calculates a lead score
- attempts to persist locally during development
- can forward to a webhook if `LEAD_CAPTURE_WEBHOOK_URL` is configured
- redirects to the success page in the app

Recommended production pattern:

- set `LEAD_CAPTURE_WEBHOOK_URL` to a Tally, Zapier, Make, or HubSpot-compatible workflow endpoint
- treat local file persistence as development-only

## Ingestion Runtime

### Recommended

- run ingestion from GitHub Actions on a schedule
- commit or publish normalized JSON artifacts intentionally if they are part of the product contract
- keep volatile raw fetch outputs out of Git history

### Current Machine-Specific Note

On this Mac, Python HTTPS fetches currently fail certificate validation for some public feeds, while GitHub CLI and npm work normally. That strongly suggests a local Python trust-store issue rather than a source problem.

Implication:

- local ingestion code is valid
- production fetching should not depend on this local machine
- GitHub Actions or a correctly configured server runtime is the preferred fetch environment

## Suggested Vercel Project Steps

1. Import the GitHub repo into Vercel.
2. Set root directory to `apps/web`.
3. Add the environment variables listed above.
4. Deploy.
5. Confirm `/`, `/fintech`, `/insights`, and `/contact` render correctly.

## Suggested GitHub Actions Responsibilities

- repo hygiene
- docs validation
- actions self-audit
- ingestion smoke checks
- optional scheduled data refresh in a later phase
