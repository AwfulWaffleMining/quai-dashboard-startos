import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const v_1_0_0_0 = VersionInfo.of({
  version: '1.0.0:0',
  releaseNotes: {
    en_US:
      'First release. The mining dashboard for the Quai Network package, previously built into it: hashrate history, workers, blocks found, share luck, CSV export and a connection builder.',
  },
  migrations: { up: async ({ effects }) => {}, down: IMPOSSIBLE },
})
