import { VersionInfo } from '@start9labs/start-sdk'

export const v_1_1_0_8 = VersionInfo.of({
  version: '1.1.0:8',
  releaseNotes: {
    en_US:
      '"Shares this session" now means since you opened the page, which is what it always looked like it meant. It previously showed the node\'s own counters, which start when the node does and reset when it restarts. Counting from page load makes it useful for tuning: change a miner\'s clocks and watch the shares and reject rate that follow. There is a reset link to start counting again without reloading, the card shows how long it has been counting, and if the node restarts mid-session the count re-anchors instead of going negative.',
  },
  migrations: {},
})
