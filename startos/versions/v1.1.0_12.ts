import { VersionInfo } from '@start9labs/start-sdk'

export const v_1_1_0_12 = VersionInfo.of({
  version: '1.1.0:12',
  releaseNotes: {
    en_US:
      'Shows workshares that were never rewarded. A workshare accepted by your node still has to be included in a block to earn, and one that arrives too late is orphaned and pays nothing. The search for a payout now covers 50 blocks, and a workshare with no payout by then is marked "not rewarded" instead of waiting forever, is greyed out, and is left out of the Earned total. The Earned card also counts them, so an orphan rate that starts climbing is visible: it usually means shares are reaching the node too slowly.',
  },
  migrations: {},
})
