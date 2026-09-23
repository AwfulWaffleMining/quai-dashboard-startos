import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.1.0:19',
  releaseNotes: {
    en_US:
      'Payout links now open explorer.qu.ai, the explorer Quai Network points people at, rather than quaiscan, whose future is uncertain. It also indexes workshares, which is what this dashboard is about.',
    es_ES:
      'Los enlaces de pago ahora abren explorer.qu.ai, el explorador que recomienda Quai Network, en lugar de quaiscan, cuyo futuro es incierto. Ademas indexa participaciones, que es de lo que trata este panel.',
    de_DE:
      'Auszahlungslinks oeffnen jetzt explorer.qu.ai, den von Quai Network empfohlenen Explorer, statt quaiscan, dessen Zukunft ungewiss ist. Er indexiert ausserdem Arbeitsanteile, worum es in diesem Dashboard geht.',
    pl_PL:
      'Linki do wyplat otwieraja teraz explorer.qu.ai, eksplorator polecany przez Quai Network, zamiast quaiscan, ktorego przyszlosc jest niepewna. Indeksuje on takze udzialy, o ktore chodzi w tym panelu.',
    fr_FR:
      "Les liens de paiement ouvrent desormais explorer.qu.ai, l'explorateur recommande par Quai Network, plutot que quaiscan, dont l'avenir est incertain. Il indexe aussi les parts de travail, ce dont ce tableau de bord s'occupe.",
  },
  migrations: {},
})
