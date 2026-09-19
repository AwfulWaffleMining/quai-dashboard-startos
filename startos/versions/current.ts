import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.1.0:15',
  releaseNotes: {
    en_US:
      'Fixes the lock period breakdown, which put everything under "no lock". The tier was only read while a submission was first being classified, so workshares recorded earlier never had one, and an unread tier was indistinguishable from a genuine no-lock. Workshares are now revisited until their tier has been read from the chain, and the cards only count the ones actually read.',
  },
  migrations: {},
})
