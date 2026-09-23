import { storeJson } from '../file-models/store.json'
import { sdk } from '../sdk'

/* Write defaults on install/update/restore, so every later read gets a full
   store instead of null. Without this the rewards task never fires: reading a
   file that does not exist returns null, not the 'unset' the zod default
   implies, and `null === 'unset'` is false. */
export const seedFiles = sdk.setupOnInit(async (effects, kind) => {
  if (!kind) return
  await storeJson.merge(effects, {})
})
