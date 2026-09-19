# quai-dashboard-startos

Technical reference for the `quai-dashboard` StartOS package. End-user documentation is in [instructions.md](instructions.md).

## What it runs

`dashboard/main.go`, a Go server (standard library only) that serves a single-page UI and collects mining stats from the [go-quai package](https://github.com/AwfulWaffleMining/go-quai-startos). One daemon, one volume, one UI interface on port 8080.

## Dependency contract

`go-quai`, `kind: running`, `versionRange >=0.56.0:5`, health checks `go-quai` and `sync`: StartOS holds this service until the node is running and synced, so the dashboard never reports against a half-synced chain.

Addresses are resolved with `sdk.host.getBridgeAddress` against ids the node package exports (see `mainHostId` / `rpcHostId` in its `startos/utils.ts`):

| What | Host id | Port | Required |
| --- | --- | --- | --- |
| Stratum stats API | `main` | 3306 (falls back to 3336 for nodes before 0.56.0:7) | yes |
| Zone RPC | `rpc` | 9200 | no: only exported when the node's RPC sharing is on |

Without the RPC the dashboard omits `estimatedBlockReward`, `workshareReward` and `avgBlockTime`; blocks found are then recorded with no reward figure.

## Collector

go-quai keeps stratum stats in memory only (workers vanish on restart, hashrate is a 10-minute window, share history caps at 500, blocks found are lost). The server polls every 15 s and writes `dashboard/stats.json` on the volume atomically:

| Kept | Retention |
| --- | --- |
| Hashrate and reject rate per algorithm, one sample a minute | 7 days |
| Per-worker samples (24 h average), last share, offline status | worker drops 24 h after its last share |
| Shares with difficulty and block threshold | 6000 per algorithm |
| Submissions (workshares and blocks) with their reward | permanent |

Each submission is classified by asking the node for the canonical block at that height: if its hash matches ours we won the block (reward `estimatedBlockReward`), otherwise it was a workshare included in someone else's block (reward `workshareReward`, a ninth of the pool). Without the node RPC they stay `unverified`.

Environment: `DASH_ADDR`, `DASH_ASSETS`, `DASH_DATA`, `DASH_STRATUM`, `DASH_STRATUM_PORTS` (`sha256=60862,...`, the external ports StartOS assigned to the node, read with `sdk.host.get`), `DASH_RPC` (optional), `DASH_HEALTH` (optional; go-quai's `--rpc.health` endpoint, only reachable when the dashboard runs inside the node package). `DASH_SAMPLE_SECONDS` and `DASH_POLL_SECONDS` exist for tests.

## When the node goes away

The collector counts consecutive failed polls. Eight in a row (about two minutes) and the process exits non-zero: StartOS restarts it, `checkDependencies` fails, and the service sits in the dependency state until the node is healthy again. Shorter gaps, such as a node restart for a settings change, are ridden out, with the page showing "Node unreachable" in the meantime.

## Endpoints

Served relative, so the UI works on any StartOS address: `dash/summary`, `dash/workers`, `dash/blocks`, `dash/history?range=1h|24h|7d`, `dash/shares?range=`, `dash/export.csv?range=&algo=`, `/health`.

## The page

`dashboard/index.html` is a single file: hand-drawn SVG charts, no framework, no CDN, no charting library. Fonts are bundled in `dashboard/fonts` (Bai Jamjuree, Michroma, JetBrains Mono, subset to Latin, OFL). Styling follows Quai's media kit: monochrome with Quai red `#E20101`, per-algorithm colors from their supply tracker. Quai's Yapari and Monorama fonts and the Quai logo are deliberately not included.

`scripts/make-dashboard-preview.sh` produces a standalone web preview: Google Fonts instead of local files, and `dash-mode: auto`, which falls back to clearly-labelled demo data when no server answers.

## Building

```sh
npm ci
make            # produces quai-dashboard_x86_64.s9pk
make install    # sideloads to the server in ~/.startos/config.yaml
```

## Donate

Optional, and appreciated: [DONATE.md](DONATE.md).
