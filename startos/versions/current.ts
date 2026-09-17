import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.0:1',
  releaseNotes: {
    en_US:
      'Adds a donation link. Tips are optional and go to the package maintainer; the dashboard takes no fee and never touches your mining rewards.',
  },
  migrations: {},
})
