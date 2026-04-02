from __future__ import annotations

import json
from datetime import datetime, timezone
from typing import Any
from urllib.parse import quote_plus
from urllib.request import urlopen
import xml.etree.ElementTree as ET
import json as jsonlib


GOOGLE_NEWS_RSS = (
    "https://news.google.com/rss/search?q={query}&hl=en-US&gl=US&ceid=US:en"
)
FED_ALL_PRESS_RELEASES_RSS = "https://www.federalreserve.gov/feeds/press_all.xml"
PLAID_STATUS_SUMMARY = "https://status.plaid.com/api/v2/summary.json"


def fetch_google_news_rss(query: str, limit: int = 5) -> dict[str, Any]:
    url = GOOGLE_NEWS_RSS.format(query=quote_plus(query))
    with urlopen(url, timeout=15) as response:
        payload = response.read()

    root = ET.fromstring(payload)
    items: list[dict[str, str]] = []
    for item in root.findall("./channel/item")[:limit]:
        items.append(
            {
                "title": item.findtext("title", default="").strip(),
                "link": item.findtext("link", default="").strip(),
                "pubDate": item.findtext("pubDate", default="").strip(),
            }
        )

    return {
        "fetched_at": datetime.now(timezone.utc).isoformat(),
        "query": query,
        "source": "google-news-rss",
        "items": items,
    }


def serialize_fetch_result(result: dict[str, Any]) -> str:
    return json.dumps(result, indent=2)


def fetch_rss_feed(feed_url: str, limit: int = 5) -> dict[str, Any]:
    with urlopen(feed_url, timeout=15) as response:
        payload = response.read()

    root = ET.fromstring(payload)
    items: list[dict[str, str]] = []
    for item in root.findall("./channel/item")[:limit]:
        items.append(
            {
                "title": item.findtext("title", default="").strip(),
                "link": item.findtext("link", default="").strip(),
                "pubDate": item.findtext("pubDate", default="").strip(),
                "description": item.findtext("description", default="").strip(),
            }
        )

    return {
        "fetched_at": datetime.now(timezone.utc).isoformat(),
        "source": feed_url,
        "items": items,
    }


def fetch_json(url: str) -> dict[str, Any]:
    with urlopen(url, timeout=15) as response:
        payload = response.read()
    return jsonlib.loads(payload.decode("utf-8"))
