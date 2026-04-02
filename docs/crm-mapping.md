# CRM Mapping

## Purpose

Map the gated insights and contact flows into a CRM-friendly schema so the day 31-60 layer has a direct path to qualification and follow-up.

## Minimum Lead Fields

| Field | Example | Notes |
| --- | --- | --- |
| email | ops@company.com | required |
| company | Example Payments | required |
| role | payments_ops | required |
| urgency | this_week | required |
| current_pain | corridor payout delays | required |
| wedge | fintech | required |
| lead_score | 75 | computed |
| score_band | high_intent | computed |
| source_page | /insights | computed |
| submitted_at | ISO timestamp | computed |

## Suggested HubSpot Properties

- `osint_wedge`
- `osint_lead_score`
- `osint_score_band`
- `osint_current_pain`
- `osint_urgency`
- `osint_source_page`
- `osint_submission_time`

## Suggested Routing Rules

- `80+`: route to founder or ops lead same day
- `60-79`: route to nurture plus manual review
- `<60`: keep in nurture until stronger workflow pain is explicit

## Suggested Lifecycle Mapping

- gated insights submit -> `Lead`
- booked briefing -> `MQL`
- qualified workflow pain and urgency -> `SQL`
- paid pilot accepted -> `Opportunity`
