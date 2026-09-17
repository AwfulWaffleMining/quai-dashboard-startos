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
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
