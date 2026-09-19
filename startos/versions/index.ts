import { VersionGraph } from '@start9labs/start-sdk'
import { current } from './current'
import { v_1_0_0_0 } from './v1.0.0_0'
import { v_1_0_0_1 } from './v1.0.0_1'
import { v_1_1_0_0 } from './v1.1.0_0'
import { v_1_1_0_1 } from './v1.1.0_1'
import { v_1_1_0_2 } from './v1.1.0_2'

export const versionGraph = VersionGraph.of({
  current,
  other: [v_1_1_0_2, v_1_1_0_1, v_1_1_0_0, v_1_0_0_1, v_1_0_0_0],
})
