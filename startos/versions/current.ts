import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.1.0:11',
  releaseNotes: {
    en_US:
      'A workshare that has not been paid yet says "awaiting confirmation" rather than "awaiting payout". The reward is already earned when the workshare is accepted; what is pending is the chain confirming it.',
  },
  migrations: {},
})
