# Ingestion Service

This service is the day 0-30 ingestion shell. It reads a small curated source inventory, simulates a fetch cycle, and writes a normalized snapshot to `services/ingestion/data/latest_snapshot.json`.

It also includes real public-source fetchers for:

- Google News RSS search, written to `services/ingestion/data/google_news_hormuz.json`
- Federal Reserve press release RSS, written to `services/ingestion/data/fintech/fed_press_releases.json`
- Plaid Status API summary, written to `services/ingestion/data/fintech/plaid_status_summary.json`

Use it to prove the shape of the ingestion loop before adding real authenticated APIs or scrapers.
