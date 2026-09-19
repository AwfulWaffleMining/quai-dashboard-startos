import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.1.0:7',
  releaseNotes: {
    en_US:
      'Stops the stored history being lost on restart. Shutting down ran two saves at once, both writing to the same temporary file, which could leave a half-written stats file; the next start then found it unreadable and began with nothing. Saves are now serialised, each writes its own temporary file and flushes it to disk before replacing the old one, and the previous good copy is kept as a backup that a future unreadable file falls back to. Records lost to this cannot be recovered, though the rewards themselves are unaffected and remain on-chain.',
  },
  migrations: {},
})
