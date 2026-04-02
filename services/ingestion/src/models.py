from __future__ import annotations

from dataclasses import dataclass, asdict
from typing import Literal


Reliability = Literal["high", "medium", "low-medium", "low"]


@dataclass
class SourceRecord:
    id: str
    name: str
    type: str
    reliability: Reliability
    cadence: str
    owner: str
    summary: str


@dataclass
class SnapshotRecord:
    source_id: str
    status: Literal["ok", "warn"]
    observed_at: str
    note: str

    def to_dict(self) -> dict[str, str]:
        return asdict(self)
