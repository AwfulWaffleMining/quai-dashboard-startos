import { VersionInfo } from '@start9labs/start-sdk'

export const v_1_1_0_2 = VersionInfo.of({
  version: '1.1.0:2',
  releaseNotes: {
    en_US:
      'Stops when the node does. Stopping Quai Network used to leave the dashboard running and showing figures it could no longer refresh. It now rides out a node restart, but if the node stays unreachable for about two minutes it shuts down, so StartOS restarts it and shows it as waiting on Quai Network until the node is back.',
  },
  migrations: {},
})
