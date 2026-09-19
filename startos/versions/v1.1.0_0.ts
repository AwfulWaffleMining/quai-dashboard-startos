import { VersionInfo } from '@start9labs/start-sdk'

export const v_1_1_0_0 = VersionInfo.of({
  version: '1.1.0:0',
  releaseNotes: {
    en_US:
      "Tells workshares and blocks apart. go-quai's stratum calls every accepted submission a block, but most are workshares: work that met the lower workshare threshold, was included in someone else's block, and pays a ninth of the reward pool. The dashboard now checks each one against the chain and labels it, showing the real reward for each (about 11 QUAI for a workshare, about 99 for a block). The Blocks tab becomes Earnings: your submissions as cards, how long since your last workshare against the typical gap, your odds of winning a block outright at your hashrate, a histogram of how close shares came, and your best shares. The share scatter plot is gone. How to connect now shows the stratum ports StartOS actually assigned instead of assuming the defaults, workers that have never submitted a share say so rather than reporting a 1970 date, and an empty block list no longer blanks the other tabs.",
  },
  migrations: {},
})
