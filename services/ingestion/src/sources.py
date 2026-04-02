from __future__ import annotations

try:
    from .models import SourceRecord
except ImportError:
    from models import SourceRecord


INITIAL_SOURCES = [
    SourceRecord(
        id="official-advisories",
        name="Official shipping advisories",
        type="official-bulletin",
        reliability="high",
        cadence="daily",
        owner="Ops",
        summary="Primary advisories for route restriction, closures, and maritime guidance.",
    ),
    SourceRecord(
        id="marine-traffic",
        name="Marine traffic APIs",
        type="structured-feed",
        reliability="high",
        cadence="daily",
        owner="Builder",
        summary="Structured movement and corridor activity data used for weekly snapshots.",
    ),
    SourceRecord(
        id="broker-notices",
        name="Broker and insurer notices",
        type="industry-notice",
        reliability="medium",
        cadence="daily",
        owner="Analyst",
        summary="War-risk premium and market commentary used for operational context.",
    ),
]
