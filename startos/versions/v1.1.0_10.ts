import { VersionInfo } from '@start9labs/start-sdk'

export const v_1_1_0_10 = VersionInfo.of({
  version: '1.1.0:10',
  releaseNotes: {
    en_US:
      'Shows what each workshare actually paid. A workshare is rewarded by a coinbase transaction a few blocks later, so the dashboard now looks for it and records the real amount and its transaction. Cards show the confirmed figure and link straight to the payment on quaiscan instead of linking to the block it was included in, which belongs to whoever mined it. Until a payout lands the card shows the estimate, marked as such. Needs the node RPC; without it the estimates are kept as before.',
  },
  migrations: {},
})
