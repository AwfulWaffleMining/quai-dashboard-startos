import { VersionInfo } from '@start9labs/start-sdk'

export const v_1_1_0_1 = VersionInfo.of({
  version: '1.1.0:1',
  releaseNotes: {
    en_US:
      "Fixes the dashboard going blank against Quai Network 0.56.0:7. That release moved the node's stats API from port 3336 to 3306, and the dashboard was still asking for the old one, so it could not reach the node and wrongly reported it as syncing with no blocks. It now tries the new port and falls back to the old one, and when the node genuinely cannot be reached it says so plainly instead of pretending to know the sync state.",
  },
  migrations: {},
})
