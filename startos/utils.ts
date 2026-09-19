// The dashboard's own port, and the go-quai package's ids it resolves over the
// LXC bridge. These mirror mainHostId / rpcHostId in go-quai-startos.
export const uiPort = 8080
export const mountpoint = '/data'

export const nodePackageId = 'go-quai'
export const nodeStratumHostId = 'main'
export const nodeStratumApiPort = 3336
export const nodeRpcHostId = 'rpc'
export const nodeRpcPort = 9200

// Stratum interfaces exported by the node package, and the ports it asks for.
// StartOS may assign different external ports, which is exactly why the
// dashboard reads them back rather than printing these.
export const stratumInterfaces = {
  sha256: { id: 'stratum-sha256', internalPort: 3333 },
  scrypt: { id: 'stratum-scrypt', internalPort: 3334 },
  kawpow: { id: 'stratum-kawpow', internalPort: 3335 },
} as const
