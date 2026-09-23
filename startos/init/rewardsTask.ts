import { confirmedRewards } from '../actions/confirmedRewards'
import { storeJson } from '../file-models/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

/* Asked ONCE, at install. The instructions already explain that confirmed
   rewards need the node's RPC, and that is exactly the kind of line a reader
   glazes over — so put the decision in front of them instead. Answering either
   way clears it, and stop/start never asks again. */
export const rewardsTask = sdk.setupOnInit(async (effects) => {
  const choice = await storeJson.read((s) => s.rpcSharing).const(effects)
  /* Anything that is not an explicit answer means we have not asked yet —
     including null, which is what reading a not-yet-seeded file returns. */
  if (choice !== 'enabled' && choice !== 'declined') {
    await sdk.action.createOwnTask(effects, confirmedRewards, 'critical', {
      reason: i18n(
        "Decide whether the dashboard may use the node's RPC to show what each workshare actually paid. It runs either way.",
      ),
    })
  }
})
