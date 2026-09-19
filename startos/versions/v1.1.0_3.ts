import { VersionInfo } from '@start9labs/start-sdk'

export const v_1_1_0_3 = VersionInfo.of({
  version: '1.1.0:3',
  releaseNotes: {
    en_US:
      "How to connect now separates password options with an underscore (d=32131_lock=3) instead of a comma. go-quai accepts either, but Canaan and Avalon firmware refuse a comma in the password field, which made fixed difficulty and reward locking mutually exclusive on those miners. The three port cards also show the ports the node was actually assigned rather than the documented defaults.",
  },
  migrations: {},
})
