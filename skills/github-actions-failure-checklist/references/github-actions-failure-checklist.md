# GitHub Actions Failure Checklist

Use this as the canonical checklist name in future audits.

## 1. Workflow File Existence and Discovery

- Workflow file missing from `.github/workflows/`
- Workflow file uses unsupported extension or malformed filename
- Workflow file exists but is ignored due to branch mismatch
- Workflow file is not on the default branch when required for event visibility
- Workflow was added in a PR and never merged to the branch that triggers it
- Repository has no workflows although team expects scheduled or CI automation

## 2. YAML and Syntax Integrity

- Invalid YAML syntax
- Invalid GitHub Actions schema keys
- Duplicate keys causing silent override
- Bad indentation changing structure
- Invalid matrix syntax
- Invalid `if:` expressions
- Invalid `${{ }}` interpolation syntax
- Invalid heredoc or multiline output syntax in shell step
- Unclosed quotes or broken escaping in `run:` blocks
- Action input names do not match the action's supported inputs

## 3. Trigger Configuration

- Wrong `on:` event
- Missing event types
- Wrong branch filters
- Wrong path filters
- Wrong tag filters
- Schedule cron is invalid
- Schedule cron valid but runs at an unexpected UTC time
- Manual `workflow_dispatch` missing when expected
- Reusable workflow trigger not configured with `workflow_call`
- `pull_request` used where `pull_request_target` was intended, or vice versa
- Trigger excluded by `paths-ignore` or branch ignore rules
- Expected workflow not triggered for forks due to event choice
- Required status check references a workflow name that changed

## 4. Repository and Organization Settings

- Actions disabled at repository level
- Actions disabled or restricted at organization level
- Only allowlisted actions are permitted and the workflow uses blocked actions
- Fork pull request workflow permissions restricted beyond workflow needs
- Required approval for first-time contributors blocks execution
- Default workflow permissions set too low for required writes
- Default workflow permissions set too high for intended security posture
- Artifact retention or policy settings conflict with workflow expectations

## 5. Runner Selection and Availability

- Unsupported `runs-on` label
- Runner label typo
- Larger runner selected unintentionally
- Self-hosted runner required but unavailable
- Self-hosted runner offline
- Self-hosted runner missing required labels
- Self-hosted runner lacks required tools or OS packages
- OS mismatch with script or dependency assumptions
- Architecture mismatch such as `arm64` versus `x64`
- Runner image deprecation or behavior drift
- Concurrency saturation or runner queue delays interpreted as failure

## 6. Billing and Quota Assumptions

- Repo is private and free-minute assumptions are wrong
- Workflow uses larger runners that incur charges even for public repos
- Storage overages on artifacts or caches
- Budget or spending limit reached on the account
- Organization policy disables hosted runner usage
- User assumes MIT license changes billing behavior
- Workflow depends on a paid third-party action or external service quota

## 7. Permissions and Token Scope

- `GITHUB_TOKEN` lacks required scopes
- `permissions:` block omits needed scopes
- `permissions:` block over-restricts reusable workflow caller/callee interaction
- PAT missing or expired
- Fine-grained PAT missing repo access
- GitHub App token missing installation scope
- Token unavailable to forked PR workflows
- OIDC permissions missing for cloud auth
- OIDC trust policy in cloud provider rejects claims
- Branch protection blocks write-back step even with token

## 8. Secrets and Variables

- Required secret missing
- Secret name mismatch
- Environment variable name mismatch
- Environment-level secret not available because job does not target the environment
- Secret unavailable on forked pull requests
- Secret value malformed
- Multiline secret breaks shell command
- Secret masking obscures debugging of parsed values
- Repo variable missing
- Org variable missing or shadowed
- Secret exists in GitHub but not in the right repo or environment

## 9. Action Resolution and Supply Chain

- Referenced action repository is private or inaccessible
- Action version tag deleted or moved
- Action ref typo
- Action pinned to SHA from wrong repository
- Marketplace action is deprecated or archived
- Third-party action has breaking change on floating tag
- Composite action local path wrong
- Reusable workflow path wrong
- Submodule action path unresolved because checkout omitted submodules

## 10. Checkout and Repository State

- Missing `actions/checkout`
- Wrong checkout version
- Shallow clone lacks tags or history needed by scripts
- Detached HEAD assumptions break versioning step
- Submodules not fetched
- Git LFS files unavailable
- Sparse checkout omits needed files
- Wrong repository checked out in a multi-repo workflow
- Wrong ref checked out in pull request context

## 11. Dependency Installation and Toolchain

- Package manager not installed
- Wrong language runtime version
- Wrong package manager lockfile
- Dependency registry auth missing
- Package registry rate limit
- Install command expects interactive TTY
- Native build tooling missing
- OS package missing
- Toolchain cache poisoned or stale
- Generated code not regenerated before build
- Build step depends on local-only files never committed

## 12. Shell and Script Execution

- Script path wrong
- Script missing execute bit when invoked directly
- Script assumes `bash` on runner that uses `sh`
- Windows path assumptions in Linux job, or inverse
- `set -e` or pipefail behavior surprises step logic
- Environment variable expansion bug
- Relative path bug due to working directory
- Command writes to protected path
- Command depends on unavailable network endpoint
- Command depends on GUI or interactive prompt

## 13. Caching

- Cache key too broad causing stale state
- Cache key too narrow causing no hits and slow builds
- Cache restore path wrong
- Cache saves corrupted artifacts
- Cache relies on files not present yet
- Cache exceeds size or storage policy limits
- Cache invalidation not tied to lockfile or toolchain version

## 14. Artifacts and Outputs

- Artifact path wrong
- Artifact directory absent
- Artifact name collision
- Artifact too large
- Job output not set correctly
- Deprecated output syntax still used incorrectly
- Step ID mismatch when reading outputs
- Matrix job output expectations incorrect
- Consumer job references output from job not listed in `needs`

## 15. Job Dependency Graph

- Missing `needs`
- Circular dependency
- Job skipped unexpectedly due to failed or skipped prerequisite
- `if: always()` / `if: failure()` / `if: cancelled()` logic wrong
- Matrix fail-fast setting hides later results
- Deployment job starts before build artifacts exist
- Required environment approval stalls downstream jobs

## 16. Matrix and Fan-Out Logic

- Empty matrix
- Matrix variable name mismatch
- Invalid JSON passed into `fromJson`
- Excluded combinations remove all intended jobs
- Included combinations malformed
- Matrix values not quoted correctly
- Dynamic matrix producer emits invalid JSON

## 17. Branch Protection and Required Checks

- Required check name changed
- Workflow job names changed without updating protection rules
- Workflow skipped by filters but still required
- Push blocked because workflow cannot report success
- Auto-merge blocked by missing required check
- Workflow tries to push to protected branch without approval path

## 18. Environments and Deployments

- Environment does not exist
- Environment protection rules require reviewers
- Wait timer delays job unexpectedly
- Environment secrets missing
- Deployment target credentials invalid
- Preview/prod environment mismatch
- Workflow assumes auto-deploy but environment requires manual approval

## 19. Reusable Workflows and Composite Actions

- Caller passes unsupported input
- Required input omitted
- Secret not forwarded to called workflow
- Output not declared by called workflow
- Permissions mismatch between caller and called workflow
- Relative path wrong for local composite action
- Composite action shell assumptions differ from runner

## 20. Containers and Services

- Container image pull fails
- Registry auth missing
- Service container health check never becomes ready
- Port mismatch
- DNS hostname mismatch between job and service container
- Container user lacks file permissions
- Docker unavailable on chosen runner
- Volume mount or path assumptions wrong

## 21. Networking and External Dependencies

- DNS resolution failure
- Remote API outage
- Firewall or IP allowlist blocks runner
- TLS certificate validation failure
- Proxy required but unset
- Download rate limiting
- API quota exceeded
- Dependency mirror unavailable
- External SaaS webhook timeout

## 22. Time and Scheduling Semantics

- Cron interpreted in UTC, not local timezone
- Schedule delayed under GitHub load
- Scheduled workflows disabled due to repo inactivity policy
- Date logic fails across DST assumptions in external tooling
- Release/version scripts fail on month, week, or timezone boundaries

## 23. GitHub Event Context Pitfalls

- Using `github.ref` where `github.head_ref` or `github.base_ref` is needed
- Wrong SHA used in pull request context
- Fork context differs from same-repo PR
- Tag, branch, and release contexts mixed up
- `workflow_run` consumes artifacts or refs from the wrong workflow

## 24. Data and File Assumptions

- Expected config file missing
- Case-sensitive path mismatch
- Generated file ignored by `.gitignore`
- Line ending differences break scripts
- Encoding issue in config or source data
- Large file missing due to LFS or fetch depth

## 25. Testing and Quality Gates

- Tests are flaky
- Snapshot drift
- Integration tests require unavailable service
- Coverage gate threshold too high or misconfigured
- Lint rule set changed without baseline update
- Tests mutate shared state across matrix jobs

## 26. Security and Policy Enforcement

- Code scanning or secret scanning step blocks merge
- Dependency review policy blocks update
- Signed commit or signed artifact policy unmet
- Organization policy blocks unpinned actions
- SARIF upload permissions missing
- Artifact attestation or provenance step misconfigured

## 27. Release and Versioning

- Tag already exists
- Release notes generation step lacks history
- Semantic version script computes invalid version
- Changelog step assumes conventional commits but history does not conform
- Publish step runs on wrong branch or tag
- Package publish token missing
- Duplicate publish attempt on rerun

## 28. Monorepo and Path-Specific Pitfalls

- Workflow runs in wrong package directory
- Path filters miss shared-package changes
- Monorepo tooling bootstraps only part of dependency graph
- Cache shared across incompatible packages
- Versioning step ignores workspace linkage

## 29. Observability and Debugging Gaps

- Logs too sparse to diagnose failure
- Secrets masking hides critical context without safe substitutes
- No artifact upload for failing test output
- No summary emitted for matrix results
- Step names too generic to identify failing stage

## 30. Human and Process Errors

- Workflow edited without test run on branch
- Repo renamed and URLs or tokens still point to old slug
- Secret rotated without workflow update
- Infrastructure change made outside repo assumptions
- Required reviewer or environment approver unavailable
- Incident caused by undocumented manual dependency

## Repo-to-Checklist Comparison Method

For periodic checks, classify each item as:

- `fail`: directly evidenced risk in the repo or known settings
- `warn`: plausible risk or unverifiable from local context
- `pass`: checked and no current issue found
- `na`: not applicable

Always keep section ordering stable so results are comparable across audits.
