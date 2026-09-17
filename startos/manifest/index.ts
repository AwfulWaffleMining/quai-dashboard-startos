import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'quai-dashboard',
  title: 'Quai Mining Dashboard',
  license: 'MIT',
  packageRepo: 'https://github.com/AwfulWaffleMining/quai-dashboard-startos',
  upstreamRepo: 'https://github.com/AwfulWaffleMining/quai-dashboard-startos',
  marketingUrl: 'https://www.awfulwafflemining.com',
  donationUrl: null,
  description: { short, long },
  volumes: ['main'],
  images: {
    dashboard: {
      source: { dockerBuild: {} },
      arch: ['x86_64'],
    },
  },
  dependencies: {
    'go-quai': {
      description:
        'The dashboard reads mining stats from your Quai Network node and starts once the node is synced.',
      optional: false,
      metadata: {
        title: 'Quai Network',
        icon: 'https://raw.githubusercontent.com/AwfulWaffleMining/go-quai-startos/main/icon.svg',
      },
    },
  },
})
