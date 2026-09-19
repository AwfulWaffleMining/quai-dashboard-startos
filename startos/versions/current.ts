import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.1.0:4',
  releaseNotes: {
    en_US:
      'Fixes the Earned total. Submissions recorded before 1.1.0:1 stored their reward in wei, so a single one read as 9968495115916515737 instead of 9.97 QUAI and swamped the total. Those values are rescaled once on upgrade; nothing else changes.',
  },
  migrations: {},
})
