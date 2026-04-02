#!/usr/bin/env python3
"""Baseline GitHub Actions audit for local repositories.

This script is intentionally conservative. It reports direct repo findings and
separates anything that cannot be verified locally.
"""

from __future__ import annotations

import pathlib
import re
import sys


WORKFLOW_EXTENSIONS = {".yml", ".yaml"}


def list_workflows(repo_root: pathlib.Path) -> list[pathlib.Path]:
    workflow_dir = repo_root / ".github" / "workflows"
    if not workflow_dir.exists():
        return []
    return sorted(
        p for p in workflow_dir.iterdir() if p.is_file() and p.suffix in WORKFLOW_EXTENSIONS
    )


def read_text(path: pathlib.Path) -> str:
    try:
        return path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return path.read_text(encoding="utf-8", errors="replace")


def add(findings: list[str], message: str) -> None:
    if message not in findings:
        findings.append(message)


def audit_file(path: pathlib.Path, text: str, findings: list[str], passes: list[str]) -> None:
    if "\truns-on:" in text or "\tsteps:" in text:
        add(findings, f"{path}: tabs detected near YAML structure; YAML indentation risk")

    if "runs-on:" not in text:
        add(findings, f"{path}: missing runs-on")
    else:
        passes.append(f"{path}: declares runs-on")

    if "on:" not in text:
        add(findings, f"{path}: missing on trigger block")
    else:
        passes.append(f"{path}: declares trigger block")

    if "actions/checkout" not in text:
        add(findings, f"{path}: no actions/checkout usage detected")

    if "ubuntu-latest" in text or "macos-latest" in text or "windows-latest" in text:
        passes.append(f"{path}: uses standard hosted runner label")

    if re.search(r"runs-on:\s+.*larger", text):
        add(findings, f"{path}: possible larger runner usage")

    if "workflow_dispatch:" not in text:
        add(findings, f"{path}: no workflow_dispatch trigger for manual reruns")

    if "schedule:" in text and "cron:" not in text:
        add(findings, f"{path}: schedule declared without cron")

    if "secrets." in text:
        passes.append(f"{path}: references GitHub secrets")

    if "permissions:" not in text:
        add(findings, f"{path}: no explicit permissions block")

    if "pull_request_target" in text:
        add(findings, f"{path}: uses pull_request_target; review trust boundary carefully")

    if "uses:" in text and "@main" in text:
        add(findings, f"{path}: action pinned to floating main ref")

    if "cache:" in text or "actions/cache" in text:
        passes.append(f"{path}: caching present")


def main() -> int:
    repo_root = pathlib.Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else pathlib.Path.cwd()
    findings: list[str] = []
    passes: list[str] = []
    unverifiable = [
        "Repository/org Actions policy settings",
        "Hosted-runner budget or larger-runner billing settings",
        "Secrets existence and values in GitHub UI",
        "Environment approvals and protection rules",
        "Branch protection required-check configuration",
        "External service quotas and token validity",
    ]

    workflows = list_workflows(repo_root)

    print("Checklist name: GitHub Actions Failure Checklist")
    print(f"Repository: {repo_root}")
    print(f"Workflow files reviewed: {len(workflows)}")

    if not workflows:
        print("Findings:")
        print("- No workflow files found in .github/workflows")
        print("Unverifiable in local repo:")
        for item in unverifiable:
            print(f"- {item}")
        return 0

    print("Workflow inventory:")
    for path in workflows:
        print(f"- {path.relative_to(repo_root)}")

    for workflow in workflows:
        text = read_text(workflow)
        audit_file(workflow.relative_to(repo_root), text, findings, passes)

    print("Findings:")
    if findings:
        for item in findings:
            print(f"- {item}")
    else:
        print("- No direct local-file findings")

    print("Pass items:")
    if passes:
        for item in passes:
            print(f"- {item}")
    else:
        print("- No pass items recorded")

    print("Unverifiable in local repo:")
    for item in unverifiable:
        print(f"- {item}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
