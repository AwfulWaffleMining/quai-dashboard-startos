import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.1.0:15',
  releaseNotes: {
    en_US:
      'Earnings now separate what was minted from what was paid. Each workshare is checked against the chain, linked to the transaction that paid it, and shown with its confirmed reward; one that was never included in a block is marked as not rewarded. A breakdown by lock period shows what each lock is worth over a rolling twelve months, and shares counted "this session" now count from when the page was opened.',
    es_ES:
      'Ganancias ahora distingue lo minado de lo pagado. Cada participacion se verifica en la cadena, se enlaza con la transaccion que la pago y se muestra con su recompensa confirmada; la que nunca se incluyo en un bloque se marca como no recompensada. Un desglose por periodo de bloqueo muestra cuanto vale cada bloqueo en los ultimos doce meses, y las participaciones de "esta sesion" se cuentan desde que se abrio la pagina.',
    de_DE:
      'Der Ertragsbereich trennt jetzt Geleistetes von Bezahltem. Jeder Arbeitsanteil wird gegen die Kette geprueft, mit der Transaktion verknuepft, die ihn bezahlt hat, und mit seiner bestaetigten Belohnung angezeigt; ein Anteil, der nie in einen Block aufgenommen wurde, wird als nicht belohnt gekennzeichnet. Eine Aufschluesselung nach Sperrfrist zeigt ueber zwoelf rollierende Monate, was jede Sperre einbringt, und die Anteile dieser Sitzung zaehlen ab dem Oeffnen der Seite.',
    pl_PL:
      'Zarobki oddzielaja teraz to, co wydobyto, od tego, co zaplacono. Kazdy udzial jest sprawdzany w lancuchu, powiazany z transakcja, ktora go oplacila, i pokazany z potwierdzona nagroda; udzial, ktory nigdy nie trafil do bloku, jest oznaczany jako nienagrodzony. Zestawienie wedlug okresu blokady pokazuje wartosc kazdej blokady w ciagu ostatnich dwunastu miesiecy, a udzialy z tej sesji liczone sa od otwarcia strony.',
    fr_FR:
      "Les gains distinguent desormais ce qui a ete produit de ce qui a ete paye. Chaque part de travail est verifiee sur la chaine, reliee a la transaction qui l'a payee et affichee avec sa recompense confirmee ; celle qui n'a jamais ete incluse dans un bloc est signalee comme non recompensee. Une repartition par periode de blocage montre ce que vaut chaque blocage sur douze mois glissants, et les parts de cette session sont comptees depuis l'ouverture de la page.",
  },
  migrations: {},
})
