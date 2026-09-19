import { VersionGraph } from '@start9labs/start-sdk'
import { current } from './current'

// A version earns a file here only if it introduced a migration. This package
// has never needed one: the synthesized range vertex below `current` migrates
// any installed version in a single hop.
export const versionGraph = VersionGraph.of({ current, other: [] })
