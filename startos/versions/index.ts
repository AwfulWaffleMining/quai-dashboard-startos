import { VersionGraph } from '@start9labs/start-sdk'
import { current } from './current'
import { v_1_0_0_0 } from './v1.0.0_0'
import { v_1_0_0_1 } from './v1.0.0_1'
import { v_1_1_0_0 } from './v1.1.0_0'
import { v_1_1_0_1 } from './v1.1.0_1'
import { v_1_1_0_2 } from './v1.1.0_2'
import { v_1_1_0_3 } from './v1.1.0_3'
import { v_1_1_0_4 } from './v1.1.0_4'
import { v_1_1_0_5 } from './v1.1.0_5'
import { v_1_1_0_6 } from './v1.1.0_6'
import { v_1_1_0_7 } from './v1.1.0_7'
import { v_1_1_0_8 } from './v1.1.0_8'
import { v_1_1_0_9 } from './v1.1.0_9'
import { v_1_1_0_10 } from './v1.1.0_10'

export const versionGraph = VersionGraph.of({
  current,
  other: [v_1_1_0_10, v_1_1_0_9, v_1_1_0_8, v_1_1_0_7, v_1_1_0_6, v_1_1_0_5, v_1_1_0_4, v_1_1_0_3, v_1_1_0_2, v_1_1_0_1, v_1_1_0_0, v_1_0_0_1, v_1_0_0_0],
})
