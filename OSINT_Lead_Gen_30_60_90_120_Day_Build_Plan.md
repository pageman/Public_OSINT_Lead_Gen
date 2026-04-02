# OSINT Lead Gen 30/60/90/120-Day Build Plan

## Objective

Build a public OSINT-led inbound engine that creates trust first, captures leads second, and monetizes execution workflows third. This plan assumes a lean team, one initial crisis/use-case, and a bias toward shipping with low-friction tools before building custom infrastructure.

## Working Assumptions

- Initial wedge: one crisis topic, one buyer persona, one core pain point.
- Team shape: 1 founder/operator, 1 builder, 1 analyst/content lead, plus contractors as needed.
- Motion: weekly publishing cadence from day 14 onward.
- Constraint: do not build a large proprietary platform until signal quality and inbound demand are proven.

## Recommended Core Stack

- Site and landing pages: Next.js, Vercel, Tailwind CSS, Plausible Analytics.
- CMS and content ops: Notion or markdown-in-repo via GitHub.
- Public data collection: Python, Playwright, RSS feeds, simple API clients, GitHub Actions cron jobs.
- Lead capture: Tally or Typeform, HubSpot free CRM.
- Email and nurture: Mailchimp or HubSpot email.
- Data storage: Postgres via Supabase.
- Internal automations: Zapier or Make.
- Paid workflow productization: Airtable or Supabase + FastAPI.
- Billing and contracts: Stripe Payment Links, DocuSign or PandaDoc.
- Reporting: Metabase or Supabase dashboards.

## North Star Metrics

- Weekly site sessions.
- Visitor to lead conversion rate.
- Number of repeat visitors.
- Number of inbound calls attributed to OSINT updates.
- Number of weekly public updates shipped on time.
- Number of community signal submissions.
- Number of paid pilots started.
- Time from signal detected to client-ready recommendation.

## Day 0-30: Foundation and Public Signal Launch

### Goal

Launch a credible public OSINT hub with a repeatable weekly publishing system and a soft CTA for calls.

### Tools

- Next.js
- Vercel
- GitHub
- Tailwind CSS
- Plausible Analytics
- Tally or Typeform
- HubSpot free CRM
- Python
- GitHub Actions
- Supabase Postgres

### Deliverables

- Live public site with:
  - Homepage
  - Crisis hub page
  - Evergreen explainer page
  - Archive page for weekly updates
  - CTA page for booking a call
- Brand kit lite:
  - One-line positioning
  - Visual style guide
  - Tone guide for updates
- Source map:
  - 10-20 public sources
  - Reliability ranking for each source
  - Collection frequency and owner
- Data pipeline v1:
  - 3-5 public data collectors or scrapers
  - Normalized tables in Supabase
  - Daily scheduled ingestion jobs
- Editorial system:
  - Weekly update template
  - Second-order effects template
  - Review checklist to avoid publishing unsupported claims
- Conversion layer v1:
  - Contact form
  - Book-a-call link
  - CRM sync
- Analytics baseline:
  - Site traffic dashboard
  - Form submissions dashboard
  - Attribution fields in CRM

### Build Sequence

1. Define the exact wedge.
   Deliverable: one-page ICP brief with persona, crisis, pain, and conversion promise.

2. Create the message architecture.
   Deliverable: homepage copy, explainer page copy, CTA copy.

3. Build the site.
   Deliverable: deployed Next.js site on Vercel with analytics installed.

4. Build ingestion v1.
   Deliverable: Python jobs for source fetching, parsing, storage, and timestamping.

5. Publish the first 2-3 updates.
   Deliverable: initial archive that makes the site feel alive and credible.

6. Wire lead capture.
   Deliverable: Tally or Typeform embedded, HubSpot sync, routing rules for follow-up.

7. Stand up distribution.
   Deliverable: LinkedIn post template, X thread template, Substack post template.

### End-of-Day-30 Exit Criteria

- Site is live.
- At least 3 high-quality public updates are published.
- Data ingestion runs automatically at least once daily.
- A lead can submit a form and land in CRM with source attribution.
- A founder can publish a weekly update in under 90 minutes.

## Day 31-60: Gated Signal and Lead Qualification

### Goal

Turn public attention into qualified leads by introducing a gated deeper-cut layer and a consistent content distribution engine.

### Tools

- Everything from day 0-30
- Mailchimp or HubSpot Email
- Calendly
- Loom
- Fathom or Plausible event tracking
- OpenAI API for light summarization, classification, and tagging

### Deliverables

- Gated insights layer:
  - Historical charts
  - CSV export
  - Simple forward-looking nowcast
- Lead qualification funnel:
  - Form fields for company, role, use case, urgency
  - Auto-segmentation rules in CRM
  - Post-submit booking page
- Outbound assist systems:
  - Alert when a high-intent lead submits the form
  - Same-day follow-up template
- Content engine:
  - Weekly article
  - 1 LinkedIn carousel per week
  - 1 short video or Loom recap per week
  - 1 X thread per update
- Community signal loop v1:
  - Anonymous submission form
  - Internal moderation queue
  - Workflow to incorporate validated submissions into updates

### Build Sequence

1. Add gated pages.
   Deliverable: authenticated or tokenized access to higher-value views and downloadable assets.

2. Create lead scoring rules.
   Deliverable: score based on company type, urgency, corridor exposure, and workflow pain.

3. Build a nowcast v1.
   Deliverable: simple heuristic model plus narrative explanation, not full ML infrastructure.

4. Launch email nurture.
   Deliverable: 3-email sequence for new leads.

5. Add community signal intake.
   Deliverable: anonymous form, moderation process, contributor tagging.

6. Establish publishing SLA.
   Deliverable: content calendar and owner schedule for every Monday update and distribution.

### End-of-Day-60 Exit Criteria

- Gated asset is live and collecting qualified emails.
- All leads route into CRM with score and source.
- Weekly content production is operational and repeatable.
- At least one inbound demo per week references the public updates.
- At least five community submissions have been collected and reviewed.

## Day 61-90: Paid Pilot and Execution Engine

### Goal

Convert trust and signal into revenue by packaging the messy execution layer as a paid pilot.

### Tools

- Supabase
- Airtable or Linear for case tracking
- FastAPI
- Zapier or Make
- Stripe Payment Links
- PandaDoc or DocuSign
- Slack
- Metabase

### Deliverables

- Paid pilot offer:
  - One-page service brief
  - Scope, pricing, SLA, and onboarding checklist
  - Pilot contract and payment flow
- Internal execution tooling:
  - Risk classification dashboard
  - Queue for exception cases
  - Playbook for alternative routing, claims, or reconciliation work
  - Audit trail for each intervention
- Operations layer:
  - Intake form for pilot customers
  - Slack alerts for urgent events
  - KPI dashboard for turnaround time and exception resolution
- Sales assets:
  - Demo deck
  - Case-study template
  - ROI calculator template

### Build Sequence

1. Productize the service.
   Deliverable: offer definition with exact promise, turnaround, exclusions, and escalation path.

2. Build pilot intake and triage.
   Deliverable: structured intake, case assignment, and status tracking.

3. Build execution support tools.
   Deliverable: FastAPI or internal dashboard endpoints for case logging, risk tagging, and recommendation output.

4. Add billing and contracting.
   Deliverable: payment links, proposal template, signature workflow.

5. Run 1-3 paid pilots.
   Deliverable: live client work, documented outcomes, and post-mortem per pilot.

6. Convert pilot learnings into content.
   Deliverable: anonymized case studies and stronger CTA messaging.

### End-of-Day-90 Exit Criteria

- Paid pilot offer is live.
- At least one client has paid.
- Internal case workflow is operational.
- Time-to-first-recommendation is measurable.
- One case study or credible pilot narrative is available for sales.

## Day 91-120: Standardization, API Prep, and Expansion Readiness

### Goal

Stabilize the operating system, improve margins, and prepare the business for API or white-label expansion without overbuilding.

### Tools

- FastAPI
- API Gateway or simple managed edge deployment
- Stripe
- dbt
- BigQuery or Snowflake only if volume justifies it
- Metabase
- GitHub Actions
- Sentry

### Deliverables

- Standard operating system:
  - SOPs for ingestion failures, publishing workflow, lead handoff, and pilot delivery
  - QA checklist for signal confidence and claim substantiation
- API readiness layer:
  - Internal API schema for signal data
  - Rate limit model
  - Free versus paid endpoint definition
- Pricing architecture:
  - Free public signal
  - Gated pro signal
  - Paid execution pilot
  - API or white-label beta pricing
- Data model cleanup:
  - Unified schema for signals, updates, leads, submissions, and cases
  - Dashboard definitions for funnel and ops metrics
- Expansion thesis:
  - Which adjacent persona or adjacent crisis to enter next
  - Exact criteria for expansion

### Build Sequence

1. Standardize everything you did manually in the first 90 days.
   Deliverable: SOP library and role handoff documentation.

2. Refactor the data model.
   Deliverable: cleaner schema and reporting consistency.

3. Build internal API endpoints first.
   Deliverable: structured signal access for internal tools and beta partners.

4. Define expansion rules.
   Deliverable: scorecard for whether to add a new corridor, crisis, or persona.

5. Launch beta conversations for API or white-label.
   Deliverable: 3-5 partner conversations with requirements captured.

### End-of-Day-120 Exit Criteria

- Core publishing and lead-gen workflows are stable and documented.
- Paid service delivery is repeatable.
- Beta API or white-label requirements are defined.
- The team has enough evidence to decide whether to deepen the first wedge or expand to a second one.

## Suggested Team Cadence

- Monday: publish weekly OSINT update.
- Tuesday: distribute on LinkedIn, X, and email.
- Wednesday: conduct lead follow-up and demos.
- Thursday: improve data ingestion and update dashboards.
- Friday: pilot delivery review, metric review, and backlog grooming.

## Suggested Weekly Operating Dashboard

- New sessions.
- Returning sessions.
- Form fills.
- Gated downloads.
- Calls booked.
- Demos held.
- Pilots proposed.
- Pilots closed.
- Average time from signal to publish.
- Average time from lead to founder response.
- Number of source ingestions failing.
- Number of credible community submissions.

## What Not to Build in the First 120 Days

- Complex custom ML infrastructure.
- A native mobile app.
- Multi-tenant enterprise permissions.
- Heavy data warehouse architecture before usage justifies it.
- A broad multi-crisis footprint before one wedge consistently converts.

## Decision Gates After Day 120

- Double down on the same wedge if inbound demos and paid pilots are compounding.
- Expand to an adjacent crisis if content is working but TAM is too narrow.
- Build API monetization only if at least 3 buyers ask for direct systems integration.
- Hire operators before hiring more engineers if execution demand is the bottleneck.
