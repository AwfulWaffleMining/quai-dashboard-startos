import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.1.0:6',
  releaseNotes: {
    en_US:
      'Actually corrects the Earned total this time. The previous release only fixed submissions that had not been classified yet, so workshares already labelled by an earlier version kept the block-sized reward they were recorded with. Any workshare carrying a reward several times larger than a workshare pays is now corrected.',
  },
  migrations: {},
})
