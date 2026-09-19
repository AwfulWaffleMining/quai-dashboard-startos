import { VersionInfo } from '@start9labs/start-sdk'

export const v_1_1_0_13 = VersionInfo.of({
  version: '1.1.0:13',
  releaseNotes: {
    en_US:
      "Shows what your lock period is worth. Each workshare records the lock tier its miner asked for, read from the header in the block that included it, and the Earnings tab now breaks your workshares into four cards: no lock, 3 months, 6 months and 12 months. Each shows how many you minted, what they earned, and what the lock boost adds, using the protocol's own rates (3.5%, 10% and 25% in the first year, decaying to 0.218%, 0.625% and 1.562% from year five). Set the tier with lock=1, lock=2 or lock=3 in a miner's password; no lock keeps the two-week default at the base rate.",
  },
  migrations: {},
})
