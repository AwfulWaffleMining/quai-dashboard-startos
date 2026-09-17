import { sdk } from './sdk'

// Like a pool waiting on its node: the dashboard only runs once go-quai is
// running and its Chain Sync check passes.
export const setDependencies = sdk.setupDependencies(async ({ effects }) => ({
  'go-quai': {
    kind: 'running' as const,
    versionRange: '>=0.56.0:5',
    healthChecks: ['go-quai', 'sync'],
  },
}))
