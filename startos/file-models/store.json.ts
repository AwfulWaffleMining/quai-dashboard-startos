import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

/* What the owner decided about confirmed rewards, asked once at install.
   'unset' raises the task; the other two silence it.

   The DISPLAY rule deliberately does NOT read this. If the node's RPC is
   reachable the dashboard uses it, because someone who enables RPC later for
   any reason should simply get better data rather than having to come back
   here and change an answer. This governs whether we ASK, nothing else. */
export const shape = z
  .object({
    rpcSharing: z.enum(['unset', 'enabled', 'declined']).catch('unset'),
  })
  .strip()

export const storeJson = FileHelper.json(
  {
    base: sdk.volumes.main,
    subpath: '/dashboard/store.json',
  },
  shape,
)
