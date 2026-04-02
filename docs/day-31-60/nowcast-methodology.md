# Nowcast Methodology

## Goal

Produce a lightweight, explainable forward-looking signal without building full ML infrastructure.

## Inputs

- policy-change density
- public platform incident recency
- corridor-specific operational mentions
- unresolved exception-handling indicators

## Output

Each nowcast should answer:

- which workflow pain is likely to increase next
- confidence level
- what evidence supports the view
- what operators should monitor over the next 7 days

## Rules

- prefer directional judgments over fake precision
- separate observed evidence from forward-looking interpretation
- keep confidence explicit
- keep the explanation short enough for an ops lead to use immediately

## Example Output Shape

- signal: compliance review load
- outlook: rising
- confidence: medium-high
- evidence: elevated policy cadence plus recent platform-specific incident history
- operator action: review queue aging and partner escalation paths
