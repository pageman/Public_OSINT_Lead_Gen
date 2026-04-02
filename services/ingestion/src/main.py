from __future__ import annotations

import json
import sys
from datetime import datetime, timezone
from pathlib import Path

if __package__ in (None, ""):
    sys.path.append(str(Path(__file__).resolve().parent))
    from fetchers import (
        FED_ALL_PRESS_RELEASES_RSS,
        PLAID_STATUS_SUMMARY,
        fetch_google_news_rss,
        fetch_json,
        fetch_rss_feed,
    )
    from models import SnapshotRecord
    from sources import INITIAL_SOURCES
else:
    from .fetchers import (
        FED_ALL_PRESS_RELEASES_RSS,
        PLAID_STATUS_SUMMARY,
        fetch_google_news_rss,
        fetch_json,
        fetch_rss_feed,
    )
    from .models import SnapshotRecord
    from .sources import INITIAL_SOURCES


def load_seed(repo_root: Path, relative_path: str) -> dict[str, object]:
    seed_path = repo_root / relative_path
    return json.loads(seed_path.read_text(encoding="utf-8"))


def build_fintech_contract(repo_root: Path) -> dict[str, object]:
    fed_seed = load_seed(repo_root, "data/fintech/seed-fed-press-releases.json")
    plaid_seed = load_seed(repo_root, "data/fintech/seed-plaid-status.json")

    fed_items = fed_seed.get("items", [])
    plaid_status = plaid_seed.get("status", {})
    plaid_incidents = plaid_seed.get("recent_incidents", [])

    return {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "wedge": "fintech",
        "summary": {
            "title": "Cross-border payments operations pulse",
            "takeaway": (
                "Compliance-change density and corridor-specific platform brittleness "
                "are more useful than generic fintech headlines for anticipating ops pain."
            ),
        },
        "sources": [
            {
                "id": "fed-press",
                "name": "Federal Reserve press releases",
                "source_url": fed_seed["source"],
                "reliability": "high",
            },
            {
                "id": "plaid-status",
                "name": "Plaid status",
                "source_url": plaid_seed["source"],
                "reliability": "medium-high",
            },
        ],
        "signals": [
            {
                "id": "policy-density",
                "label": "Regulatory and policy change density",
                "latest_value": "Elevated",
                "direction": "up",
                "confidence": "high",
                "evidence": [item["title"] for item in fed_items[:3]],
            },
            {
                "id": "platform-brittleness",
                "label": "Public platform brittleness signal",
                "latest_value": plaid_status.get("description", "Unknown"),
                "direction": "mixed",
                "confidence": "medium",
                "evidence": [incident["title"] for incident in plaid_incidents[:3]],
            },
            {
                "id": "queue-collision",
                "label": "Compliance and exception queue collision risk",
                "latest_value": "Rising",
                "direction": "up",
                "confidence": "medium",
                "evidence": [
                    "Public policy cadence remains elevated",
                    "Recent platform incidents can spill into support and reconciliation",
                ],
            },
        ],
        "updates": [
            {
                "slug": "fintech-update-01",
                "title": "Compliance change is landing faster than workflow adaptation",
                "publishedAt": "2026-04-03",
                "summary": "Policy and enforcement signals suggest manual review load will rise before visible outages.",
            },
            {
                "slug": "fintech-update-02",
                "title": "Payout reliability is fragmenting by partner and corridor",
                "publishedAt": "2026-04-03",
                "summary": "Recent status history reinforces that incident risk is often partner-specific rather than platform-wide.",
            },
            {
                "slug": "fintech-update-03",
                "title": "Fraud and compliance are converging into the same bottleneck",
                "publishedAt": "2026-04-03",
                "summary": "Operational burden is increasingly driven by queue design and escalation logic, not raw event count.",
            },
        ],
    }


def build_snapshot() -> dict[str, object]:
    observed_at = datetime.now(timezone.utc).isoformat()
    snapshots = [
        SnapshotRecord(
            source_id=source.id,
            status="ok",
            observed_at=observed_at,
            note=f"Prepared placeholder snapshot for {source.name}.",
        ).to_dict()
        for source in INITIAL_SOURCES
    ]
    return {
        "generated_at": observed_at,
        "source_count": len(INITIAL_SOURCES),
        "sources": [source.__dict__ for source in INITIAL_SOURCES],
        "snapshots": snapshots,
    }


def main() -> None:
    repo_root = Path(__file__).resolve().parents[3]
    output_dir = repo_root / "services" / "ingestion" / "data"
    output_dir.mkdir(parents=True, exist_ok=True)
    output_path = output_dir / "latest_snapshot.json"
    output_path.write_text(json.dumps(build_snapshot(), indent=2), encoding="utf-8")
    print(f"Wrote {output_path}")

    live_output_path = output_dir / "google_news_hormuz.json"
    try:
        live_result = fetch_google_news_rss("Hormuz maritime shipping")
        live_output_path.write_text(json.dumps(live_result, indent=2), encoding="utf-8")
        print(f"Wrote {live_output_path}")
    except Exception as exc:
        print(f"Skipped live fetch: {exc}")

    fintech_dir = output_dir / "fintech"
    fintech_dir.mkdir(parents=True, exist_ok=True)
    stable_fintech_path = repo_root / "data" / "fintech" / "signals.latest.json"

    try:
        fed_result = fetch_rss_feed(FED_ALL_PRESS_RELEASES_RSS)
        fed_path = fintech_dir / "fed_press_releases.json"
        fed_path.write_text(json.dumps(fed_result, indent=2), encoding="utf-8")
        print(f"Wrote {fed_path}")
    except Exception as exc:
        print(f"Skipped Fed fetch: {exc}")

    try:
        plaid_result = fetch_json(PLAID_STATUS_SUMMARY)
        plaid_path = fintech_dir / "plaid_status_summary.json"
        plaid_path.write_text(json.dumps(plaid_result, indent=2), encoding="utf-8")
        print(f"Wrote {plaid_path}")
    except Exception as exc:
        print(f"Skipped Plaid status fetch: {exc}")

    stable_fintech_path.write_text(
        json.dumps(build_fintech_contract(repo_root), indent=2), encoding="utf-8"
    )
    print(f"Wrote {stable_fintech_path}")


if __name__ == "__main__":
    main()
