// The dashboard's own port, and the go-quai package's ids it resolves over the
// LXC bridge. These mirror mainHostId / rpcHostId in go-quai-startos.
export const uiPort = 8080
export const mountpoint = '/data'

export const nodePackageId = 'go-quai'
export const nodeStratumHostId = 'main'
export const nodeStratumApiPort = 3336
export const nodeRpcHostId = 'rpc'
export const nodeRpcPort = 9200
