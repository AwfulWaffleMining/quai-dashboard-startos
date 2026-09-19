import { i18n } from './i18n'
import { sdk } from './sdk'
import {
  mountpoint,
  nodePackageId,
  nodeRpcHostId,
  nodeRpcPort,
  nodeStratumApiPort,
  nodeStratumApiPortLegacy,
  nodeStratumHostId,
  stratumInterfaces,
  uiPort,
} from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('Starting the Quai mining dashboard'))

  const depResult = await sdk.checkDependencies(effects)
  depResult.throwIfNotSatisfied()

  // The node's stratum API over the LXC bridge. Reactive: if go-quai's assigned
  // port changes, this restarts with the new address.
  const bridgeTo = async (internalPort: number) =>
    sdk.host
      .getBridgeAddress(effects, {
        packageId: nodePackageId,
        hostId: nodeStratumHostId,
        internalPort,
        ssl: false,
      })
      .const()
      .catch(() => null)

  const stratum =
    (await bridgeTo(nodeStratumApiPort)) ??
    (await bridgeTo(nodeStratumApiPortLegacy))
  if (!stratum) {
    throw new Error(
      i18n('Waiting for the Quai Network node to become reachable'),
    )
  }

  // Zone RPC is optional: go-quai only exports it when RPC sharing is switched
  // on. Without it the dashboard simply omits reward and difficulty estimates.
  const rpc = await sdk.host
    .getBridgeAddress(effects, {
      packageId: nodePackageId,
      hostId: nodeRpcHostId,
      internalPort: nodeRpcPort,
      ssl: false,
    })
    .const()
    .catch(() => null)

  // The external ports StartOS assigned to the node's stratum interfaces. These
  // are what miners must connect to, and they are often not the defaults: any
  // other package holding 3333 (Public Pool, for one) pushes ours elsewhere.
  const ports = await sdk.host
    .get(
      effects,
      { packageId: nodePackageId, hostId: nodeStratumHostId },
      (host) => {
        const ifaces = host
          ? Object.values(host.bindings).flatMap((b) =>
              Object.values(b.interfaces),
            )
          : []
        return Object.entries(stratumInterfaces)
          .map(([algo, spec]) => {
            const match = ifaces.find((i) => i.id === spec.id)
            const port =
              match?.addressInfo?.filter({ kind: ['ipv4', 'mdns', 'domain'] })
                ?.hostnames?.[0]?.port ?? spec.internalPort
            return `${algo}=${port}`
          })
          .join(',')
      },
    )
    .const()
    .catch(() => '')

  return sdk.Daemons.of(effects).addDaemon('dashboard', {
    subcontainer: await sdk.SubContainer.of(
      effects,
      { imageId: 'dashboard' },
      sdk.Mounts.of().mountVolume({
        volumeId: 'main',
        subpath: null,
        mountpoint,
        readonly: false,
      }),
      'dashboard',
    ),
    exec: {
      command: ['/usr/local/bin/quai-dashboard'],
      env: {
        DASH_ADDR: `:${uiPort}`,
        DASH_ASSETS: '/opt/dashboard',
        DASH_DATA: `${mountpoint}/dashboard`,
        DASH_STRATUM: `http://${stratum}`,
        DASH_RPC: rpc ? `http://${rpc}` : '',
        DASH_HEALTH: '',
        DASH_STRATUM_PORTS: ports || '',
      },
    },
    ready: {
      display: i18n('Dashboard'),
      gracePeriod: 10_000,
      fn: () =>
        sdk.healthCheck.checkPortListening(effects, uiPort, {
          successMessage: i18n('The dashboard is ready'),
          errorMessage: i18n('The dashboard is starting'),
        }),
    },
    requires: [],
  })
})
