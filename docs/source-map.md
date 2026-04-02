# Source Map

## Purpose

This file defines the initial day 0-30 public source inventory for the first wedge. It is intentionally manual and conservative. Do not publish derived claims unless the underlying source is current and the inference is supportable.

## Initial Wedge

- Crisis: Hormuz and adjacent maritime disruption
- Buyer persona: freight forwarder or logistics operator managing volatile routing and document exception handling
- Conversion promise: clearer public signal on corridor volatility and a faster path to paid exception-handling support

## Source Inventory

| Source | Type | What it provides | Cadence | Reliability | Owner |
| --- | --- | --- | --- | --- | --- |
| Official shipping advisories | Official bulletin | transit restrictions, advisories, port changes | Daily | High | Ops |
| Marine traffic APIs | Structured feed | route movement, vessel status, corridor activity | Daily | High | Builder |
| Insurer or broker notices | Industry notice | war-risk pricing and coverage signal | Daily | Medium | Analyst |
| Public news wires | News | incident reports and state actions | Daily | Medium | Analyst |
| Seafarer forums | Community signal | sentiment, refusal language, friction anecdotes | Daily | Low-Medium | Analyst |
| X advanced search | Social signal | emergent operator commentary and linked evidence | Intraday | Low-Medium | Ops |
| Trade publications | Industry media | secondary effects and sector interpretation | Daily | Medium | Analyst |
| Port authority notices | Official bulletin | localized closures, delays, restrictions | Daily | High | Ops |
| Government maritime advisories | Official bulletin | security and compliance posture | Daily | High | Ops |
| Internal editorial log | Internal | publication decisions and evidence links | Weekly | High | Founder |

## Reliability Rules

- High: official or structured data source with direct operational relevance
- Medium: reputable secondary source or commercial commentary
- Low-Medium: anecdotal or social signal that must be corroborated
- Never publish a narrative claim sourced only from low-confidence inputs

## Minimum Evidence Rule

Every published update should link to:

- at least 2 independent sources for major claims
- at least 1 high-confidence source for any operational recommendation
- an explicit note when a statement is observational rather than confirmed
