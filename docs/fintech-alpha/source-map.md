# Fintech Alpha Source Map

## Initial Wedge

- Crisis or friction zone: cross-border payments disruption and compliance pressure
- Buyer persona: payments ops lead, compliance ops lead, risk ops lead
- Conversion promise: clearer signal on corridor, payout, and compliance friction plus a path to execution support

## Source Inventory

| Source | Type | What it provides | Cadence | Reliability | Owner |
| --- | --- | --- | --- | --- | --- |
| Central bank notices | Official bulletin | payment rule changes, reporting requirements, restrictions | Daily | High | Analyst |
| OFAC and sanctions notices | Official bulletin | sanctions updates and compliance trigger points | Daily | High | Analyst |
| FCA, MAS, EU, and regional regulator updates | Official bulletin | supervision, enforcement, and guidance changes | Daily | High | Analyst |
| SWIFT and payment rail notices | Industry notice | service changes, message standard updates, rail disruptions | Daily | High | Ops |
| Major bank partner status pages | Structured feed | service degradations and scheduled incidents | Intraday | Medium-High | Ops |
| PSP status pages | Structured feed | payout delays, API incidents, settlement issues | Intraday | Medium-High | Builder |
| Fraud and cyber incident disclosures | News | account takeover, mule activity, merchant fraud patterns | Daily | Medium | Analyst |
| Fintech trade publications | Industry media | market interpretation and second-order effects | Daily | Medium | Analyst |
| Job postings from target accounts | Public signal | hints of workflow pain, corridor expansion, and tooling gaps | Weekly | Medium | Founder |
| Customer complaint forums and social posts | Community signal | early friction anecdotes and support pain patterns | Intraday | Low-Medium | Ops |
| Earnings calls and investor letters | Public company disclosure | risk themes, corridor exposure, and margin pressure | Quarterly | Medium | Founder |
| Internal editorial log | Internal | evidence links and publication decisions | Weekly | High | Founder |

## Reliability Rules

- High: direct regulator, official rail, or official service notice
- Medium-High: operator status page or direct public system message
- Medium: reputable industry interpretation or public disclosure
- Low-Medium: anecdotal signal requiring corroboration

## Minimum Evidence Rule

- major operational claim requires at least 2 independent sources
- any workflow recommendation requires at least 1 high-confidence source
- social or complaint signals cannot stand alone
