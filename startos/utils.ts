// The node package's own constants, imported rather than copied: if it renames
// a host or moves a port, this package fails to build instead of failing to
// find the node at runtime. That is not hypothetical — the stats API moved once
// and the dashboard went blind until the copy here was updated by hand.
import {
  mainHostId,
  rpcHostId,
  rpcInterfaceId,
  stratumApiInterfaceId,
  stratumApiPort,
  stratumInterfaceIds,
  shaPort,
  scryptPort,
  kawpowPort,
  zoneRpcPort,
} from 'go-quai-startos/startos/utils'

export const uiPort = 8080
export const mountpoint = '/data'

export const nodePackageId = 'go-quai'
export const nodeStratumHostId = mainHostId
export const nodeStratumApiPort = stratumApiPort
export const nodeRpcHostId = rpcHostId
export const nodeRpcPort = zoneRpcPort
export const nodeRpcInterfaceId = rpcInterfaceId
export const nodeStratumApiInterfaceId = stratumApiInterfaceId

// The stats API moved from 3336 to 3306; a node that has not been updated still
// answers on the old port, so the bridge lookup falls back to it.
export const nodeStratumApiPortLegacy = 3336

// Stratum interfaces exported by the node package, and the ports it asks for.
// StartOS may assign different external ports, which is why the dashboard reads
// them back rather than printing these.
export const stratumInterfaces = {
  sha256: { id: stratumInterfaceIds.sha256, internalPort: shaPort },
  scrypt: { id: stratumInterfaceIds.scrypt, internalPort: scryptPort },
  kawpow: { id: stratumInterfaceIds.kawpow, internalPort: kawpowPort },
} as const
