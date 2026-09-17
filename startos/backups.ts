import { sdk } from './sdk'

// Hashrate history, worker records and every block found: small, and not
// recoverable from the node, which keeps its mining stats in memory only.
export const { createBackup, restoreInit } = sdk.setupBackups(async () =>
  sdk.Backups.ofVolumes('main'),
)
