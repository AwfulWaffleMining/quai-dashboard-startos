# AGENTS.md

This is a StartOS service-package repository. It builds a `.s9pk` for StartOS using `@start9labs/start-sdk`. The packaging guide is at <https://docs.start9.com/packaging>.

Keep `README.md` (technical reference) and `instructions.md` (end-user docs) in sync with your changes. Bugs and feature requests go in GitHub issues, not in TODO files.

## This repo

- **Port changes in the node package break this one.** The stats API moved 3336 -> 3306 in node 0.56.0:7; always keep a fallback to the previous port so the two packages can be updated in either order.
- **The node package is the source of truth for ids.** `mainHostId`, `rpcHostId`, their ports and the health check ids live in go-quai-startos; `startos/utils.ts` mirrors them. Change both together.
- **The zone RPC is optional.** Never make the dashboard fail when it is absent: the node only shares it when the user turns it on.
- **Keep the page free of external requests** — no CDNs, no web fonts, no charting libraries.
- **Don't bundle Quai's Yapari or Monorama fonts, or the Quai logo.** Quai's media kit treats them as brand resources.
- **`dashboard/index.html` is the packaged page** (bundled fonts, never fakes data). Regenerate the web preview with `scripts/make-dashboard-preview.sh`; don't hand-edit a second copy.
- **Test the collector against a fake node** serving go-quai's JSON shapes, covering a worker going offline, the CSV export, and reloading blocks and history after SIGTERM.
