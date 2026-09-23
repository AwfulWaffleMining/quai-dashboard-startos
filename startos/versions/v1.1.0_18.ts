import { VersionInfo } from '@start9labs/start-sdk'

export const v_1_1_0_18 = VersionInfo.of({
  version: '1.1.0:18',
  releaseNotes: {
    en_US:
      'Stops workshares being marked "not rewarded" when the node simply did not answer. Looking for a payout means reading a run of blocks, and a lookup that fails proves nothing — but a failed lookup was being counted the same as a block with no payment in it, so three unlucky attempts condemned a workshare permanently. This happened on a fresh install, where the node restarts as soon as RPC sharing is approved. A workshare is now only marked unrewarded when the search actually completed, and anything already marked that way is re-checked.',
    es_ES:
      'Evita que las participaciones se marquen como "sin recompensa" cuando el nodo simplemente no respondio. Buscar un pago implica leer una serie de bloques, y una consulta fallida no prueba nada, pero se contaba igual que un bloque sin pago, de modo que tres intentos con mala suerte condenaban una participacion para siempre. Ahora solo se marca sin recompensa cuando la busqueda se completo, y lo ya marcado se vuelve a comprobar.',
    de_DE:
      'Verhindert, dass Arbeitsanteile als "nicht belohnt" markiert werden, wenn der Knoten schlicht nicht geantwortet hat. Die Suche nach einer Zahlung liest eine Reihe von Bloecken, und eine fehlgeschlagene Abfrage beweist nichts - sie wurde aber wie ein Block ohne Zahlung gezaehlt, sodass drei unglueckliche Versuche einen Anteil dauerhaft verurteilten. Jetzt gilt das nur, wenn die Suche vollstaendig war, und bereits Markiertes wird erneut geprueft.',
    pl_PL:
      'Zapobiega oznaczaniu udzialow jako "bez nagrody", gdy wezel po prostu nie odpowiedzial. Szukanie wyplaty to odczyt serii blokow, a nieudane zapytanie niczego nie dowodzi - liczylo sie jednak tak samo jak blok bez platnosci, wiec trzy pechowe proby trwale skazywaly udzial. Teraz dzieje sie to tylko wtedy, gdy wyszukiwanie sie zakonczylo, a wczesniej oznaczone sa sprawdzane ponownie.',
    fr_FR:
      "Empeche qu'une part de travail soit marquee « non recompensee » alors que le noeud n'a simplement pas repondu. Chercher un paiement consiste a lire une serie de blocs, et une requete qui echoue ne prouve rien - elle etait pourtant comptee comme un bloc sans paiement, si bien que trois tentatives malchanceuses condamnaient une part definitivement. Ce n'est desormais le cas que si la recherche a abouti, et ce qui etait deja marque est reverifie.",
  },
  migrations: {},
})
