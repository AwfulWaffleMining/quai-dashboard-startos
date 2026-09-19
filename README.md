<p align="center">
  <img src="icon.svg" alt="Quai Mining Dashboard Logo" width="21%" />
</p>

# Quai Mining Dashboard on StartOS

> **Upstream docs:** <https://docs.qu.ai/>
>
> This package has no upstream project: the dashboard and its collector are
> written and maintained here. Anything it reports about mining comes from the
> [Quai Network](https://github.com/AwfulWaffleMining/go-quai-startos) package
> on the same server, whose behavior is upstream go-quai.

A mining dashboard for the Quai Network package: hashrate with history, your
workers, the workshares you have minted and what each was actually paid, how
close your shares are coming, and a builder that fills in the stratum settings
for your hardware.

It exists because go-quai keeps its mining statistics in memory only. Workers
vanish on restart, hashrate is a ten-minute window, share history is capped, and
the record of what you earned is lost. This package records all of it on its own
volume, and checks each submission against the chain.

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Configuration Management](#configuration-management)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Actions](#actions)
- [Backups and Restore](#backups-and-restore)
- [Health Checks](#health-checks)
- [Dependencies](#dependencies)
- [Limitations and Differences](#limitations-and-differences)
- [What Is Unchanged from Upstream](#what-is-unchanged-from-upstream)
- [Contributing](#contributing)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

| What | Detail |
| --- | --- |
| Image source | Custom Dockerfile: a Go server built from source in this repository, on Alpine |
| Architectures | x86_64 |
| Entrypoint | The server binary |

The server uses the Go standard library only, so the image build pulls no
modules. The page is a single HTML file with hand-drawn SVG charts, no
framework and no charting library, and its fonts are bundled, so it makes no
outside requests.

## Volume and Data Layout

One volume, `main`, mounted at `/data`.

| Path | Contents | In backups |
| --- | --- | --- |
| `dashboard/stats.json` | Hashrate history, worker records, share history, and every submission with what it was paid | yes |
| `dashboard/stats.json.bak` | Previous good copy, used if the main file is ever unreadable | yes |

Writes are serialised, go through a private temporary file, and are flushed to
disk before replacing the previous copy, because this file is the only record of
what you earned.

## Installation and First-Run Flow

Nothing to configure. The package finds the node over the local bridge and
starts collecting. StartOS holds it until the Quai Network package is running
and its chain is synced, so on a fresh install it will wait, sometimes for a
long time if the node is still syncing.

History accumulates from first start. Restarts and updates keep it.

## Configuration Management

| StartOS-managed | Upstream-managed |
| --- | --- |
| The node's address and stats API port, the assigned stratum ports shown in How to connect, and whether the node's RPC is available | Mining itself, which is configured on each miner and in the Quai Network package |

The page remembers a few per-browser preferences locally: theme, selected
algorithm, and the values typed into the connection builder.

## Network Access and Interfaces

| Interface | Port | Protocol | Purpose |
| --- | --- | --- | --- |
| Mining Dashboard | 8080 | HTTP | The dashboard itself |

The server also answers a small set of read-only JSON endpoints on the same
port, which the page uses: a summary, workers, submissions, hashrate history,
share history, a CSV export of hashrate, and a health endpoint.

## Actions

None. Everything is on the page.

## Backups and Restore

Included: the whole volume, which is the recorded history and nothing else. It
is small.

This is worth backing up precisely because it cannot be rebuilt: the node does
not remember its mining statistics, so a lost file means a lost record of what
you mined, even though the coins themselves are safe on chain.

## Health Checks

| Check | Meaning |
| --- | --- |
| Dashboard | The server is listening and serving the page |

If the node's stats API stops answering for about two minutes, the service exits
and StartOS restarts it, which parks it on the dependency until the node is back.
Shorter gaps, such as a node restart for a settings change, are ridden out, and
the page says the node is unreachable rather than guessing at its state.

## Dependencies

**Quai Network** — required.

| What | Detail |
| --- | --- |
| Health checks | The node must be running and its chain synced before this service starts |
| Mounted volumes | None |
| Purpose | Mining statistics come from the node's stats API. Reward figures, the classification of each submission, and lock periods come from its zone RPC when sharing is enabled |

Without the node's RPC the dashboard still works: it shows estimated rewards
instead of confirmed ones, and cannot tell which lock period a workshare used.

## Limitations and Differences

1. **Reward figures are estimates until the payout is found.** A workshare is
   paid by a transaction a few blocks later; until the dashboard finds it, the
   card shows an estimate and says so.
2. **Confirmation and unlocking are different things.** A reward confirms in
   seconds and may then be locked for weeks or months, depending on the lock
   period the miner asked for.
3. **A workshare can earn nothing.** One that is not included in a block in time
   is orphaned, and the dashboard marks it rather than waiting forever.
4. **Blocks are minted by KawPoW miners.** SHA-256 and Scrypt hardware mints
   workshares, so the dashboard reports workshares rather than blocks. That is
   Quai's design, not a limitation of this package.
5. **No price data.** Everything is denominated in QUAI, because fetching a
   price would mean the dashboard making outside requests.
6. **x86_64 only**, matching the node package.
7. **The reward classification needs the node's RPC.** Without it, submissions
   stay unverified.

## What Is Unchanged from Upstream

Nothing about mining is changed: the dashboard only reads. It does not touch
stratum, submit work, hold keys, or alter the node's behavior in any way. Every
figure it shows can be checked against the node's own API or a block explorer.

## Contributing

See [AGENTS.md](AGENTS.md) for the conventions this package follows, and
[docs/internals.md](docs/internals.md) for how the collector works.

---

## Quick Reference for AI Consumers

```yaml
package_id: quai-dashboard
architectures: [x86_64]
volumes:
  main: /data
ports:
  ui: 8080
dependencies:
  - go-quai
startos_managed_env_vars:
  - DASH_ADDR
  - DASH_ASSETS
  - DASH_DATA
  - DASH_STRATUM
  - DASH_STRATUM_PORTS
  - DASH_RPC
  - DASH_HEALTH
actions: []
health_checks:
  - dashboard
endpoints:
  - dash/summary
  - dash/workers
  - dash/blocks
  - dash/history
  - dash/shares
  - dash/export.csv
  - health
```
