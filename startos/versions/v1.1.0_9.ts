import { VersionInfo } from '@start9labs/start-sdk'

export const v_1_1_0_9 = VersionInfo.of({
  version: '1.1.0:9',
  releaseNotes: {
    en_US:
      "Calls things what they are. Blocks on Quai are minted by KawPoW miners; SHA-256 and Scrypt hardware mints workshares, which are included in a block and earn a share of its reward pool. The tab is now Earnings and counts workshares minted, with the reward per workshare and how many slots make up a block's pool. The \"blocks won outright\" card and its odds are gone, because that outcome is not reachable with SHA-256 or Scrypt hardware, and the estimate on the Dashboard is labelled as the next workshare rather than the next block. Quai's own tooling calls these blocks; this package does not.",
  },
  migrations: {},
})
