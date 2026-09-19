import { VersionInfo } from '@start9labs/start-sdk'

export const v_1_1_0_5 = VersionInfo.of({
  version: '1.1.0:5',
  releaseNotes: {
    en_US:
      'Corrects rewards on older submissions. Anything recorded before this package could tell a workshare from a block was stored with the full block reward, roughly 99 QUAI instead of 11, which inflated the Earned total. Each one is now corrected to match what it actually was once the node confirms it. Very lucky shares also read as a multiple (219x) rather than an unreadable percentage (21913.4%).',
  },
  migrations: {},
})
