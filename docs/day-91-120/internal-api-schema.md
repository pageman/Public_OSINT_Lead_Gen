# Internal API Schema

## Goal

Define the minimum API shape needed to expose signals, leads, and cases internally.

## Candidate Endpoints

- `GET /api/signals/latest`
- `POST /api/lead-capture`
- `POST /api/pilot-intake`
- `GET /api/cases`

## `GET /api/signals/latest`

Returns:

- generated time
- wedge
- summary
- signals
- updates
- sources

## `GET /api/cases`

Returns:

- generated time
- case list
- status
- priority
- next step

## Principle

Keep the API internal-first and JSON-only until external demand proves otherwise.
