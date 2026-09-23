import { config as nodeConfig } from 'go-quai-startos/startos/actions/config'
import { storeJson } from '../file-models/store.json'
import { i18n } from '../i18n'
import { nodePackageId } from '../utils'
import { sdk } from '../sdk'

const { InputSpec, Value } = sdk

export const inputSpec = InputSpec.of({
  enable: Value.toggle({
    name: i18n('Show confirmed rewards'),
    description: i18n(
      "The dashboard works without this: hashrate, workers, share history and the connection builder all run on the node's stats API. What needs the node's RPC is telling a workshare from a block, the reward each one actually paid, and the lock period it used. Turning this on creates a task on the Quai Network package to enable RPC sharing — a change to THAT service, which you approve there. go-quai's RPC has no authentication, so it is off by default and stays off if you decline.",
    ),
    default: false,
  }),
})

export const confirmedRewards = sdk.Action.withInput(
  'confirmed-rewards',
  async () => ({
    name: i18n('Confirmed rewards'),
    description: i18n(
      "Decide whether the dashboard may use the node's RPC to show what each workshare actually paid.",
    ),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),
  inputSpec,
  async ({ effects }) => ({
    enable: (await storeJson.read((s) => s.rpcSharing).const(effects)) === 'enabled',
  }),
  async ({ effects, input }) => {
    await storeJson.merge(effects, {
      rpcSharing: input.enable ? 'enabled' : 'declined',
    })

    if (!input.enable) return null

    /* Ask the NODE to turn it on, with the box already ticked. The user
       approves it there: a dependency must never silently change a setting on
       the service it depends on, least of all one that exposes an
       unauthenticated RPC. */
    await sdk.action.createTask(effects, nodePackageId, nodeConfig, 'important', {
      /* accept: what would satisfy the task (RPC on). set: what to pre-fill.
         The user still presses save on the node's own Settings form. */
      input: {
        kind: 'partial',
        accept: [{ shareRpc: true }],
        set: { shareRpc: true },
      },
      reason: i18n(
        'The Quai Mining Dashboard can show what each workshare actually paid, which needs this node to share its RPC with other packages on this server. Review and save to enable it.',
      ),
    })

    return null
  },
)
