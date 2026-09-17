# Quai Mining Dashboard

This package shows what your miners are doing on your Quai Network node: hashrate, workers, blocks found, and how close your shares are coming to a block.

## Before it starts

It needs the **Quai Network** package installed, running and **synced**. StartOS shows it as a dependency and holds this service until the node's Chain Sync check passes, so there is nothing to configure. If the node falls behind later, the dashboard stops until it catches up.

## Reward estimates (optional)

Quai's node keeps reward and difficulty figures behind its RPC, which is off by default. Without it the dashboard shows everything except estimated rewards and the "next block" estimate.

To turn it on, open the **Quai Network** service, run the **Settings** action, and switch on **Share node RPC with other packages**. That RPC has no password, so anything that can reach your node can query it; leave it off if you would rather not.

## The tabs

- **Dashboard**: hashrate with history (1H, 24H, 7D), workers, shares, and how long a block should take at your hashrate. The SHA-256 / Scrypt / KawPoW buttons switch which miners the tab is about.
- **Workers**: every worker with its hashrate, 24-hour average, reject rate and last share. Workers that stop are marked offline and drop off after 24 hours without a share.
- **Blocks & luck**: blocks you have found, and a chart of each share's difficulty against the block threshold. In solo mining a share that meets the threshold *is* a block.
- **How to connect**: fills in the pool URL, username and password for your hardware, including a suggested fixed difficulty and the lock period.

## What it keeps

go-quai forgets its mining stats whenever it restarts. This package records them on its own volume:

| Kept | For how long |
| --- | --- |
| Hashrate and reject rate per algorithm | 7 days |
| Per-worker averages and last-share times | until 24 hours after a worker's last share |
| Share difficulty history | last 6000 shares per algorithm |
| Blocks found | permanently, and included in backups |

Hashrate history can be exported as CSV from the chart.

## Notes

This is a community package, not affiliated with Quai Network or Dominant Strategies. It follows Quai's published brand colors and uses open-licensed fonts; Quai's own fonts and logo are not included.
