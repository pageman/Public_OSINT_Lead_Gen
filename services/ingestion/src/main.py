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


if __name__ == "__main__":
    main()
