export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'Starting the Quai mining dashboard': 0,
  Dashboard: 1,
  'The dashboard is ready': 2,
  'The dashboard is starting': 3,
  'Waiting for the Quai Network node to become reachable': 4,

  // interfaces.ts
  'Mining Dashboard': 5,
  'Hashrate, workers, blocks found, share luck, and the settings for your miners': 6,

  // actions/confirmedRewards.ts
  'Confirmed rewards': 7,
  "Decide whether the dashboard may use the node's RPC to show what each workshare actually paid.": 8,
  'Show confirmed rewards': 9,
  "The dashboard works without this: hashrate, workers, share history and the connection builder all run on the node's stats API. What needs the node's RPC is telling a workshare from a block, the reward each one actually paid, and the lock period it used. Turning this on creates a task on the Quai Network package to enable RPC sharing \u2014 a change to THAT service, which you approve there. go-quai's RPC has no authentication, so it is off by default and stays off if you decline.": 10,
  'The Quai Mining Dashboard can show what each workshare actually paid, which needs this node to share its RPC with other packages on this server. Review and save to enable it.': 11,
  "Decide whether the dashboard may use the node's RPC to show what each workshare actually paid. It runs either way.": 12,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
