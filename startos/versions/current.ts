import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.1.0:16',
  releaseNotes: {
    en_US:
      "Asks once, at install, whether the dashboard may use the node's RPC. Without it the dashboard still shows hashrate, workers, share history and the connection builder, but it cannot tell a workshare from a block, cannot show what each one actually paid, and cannot read the lock period — it shows estimates instead. Saying yes raises a task on the Quai Network package to turn RPC sharing on, which you approve there, because a dependency should never quietly change a setting on the service it depends on. Saying no is final until you re-run the action, and the dashboard runs either way.",
    es_ES:
      'Pregunta una vez, al instalar, si el panel puede usar el RPC del nodo. Sin el, el panel sigue mostrando hashrate, trabajadores, historial de participaciones y el asistente de conexion, pero no puede distinguir una participacion de un bloque, ni mostrar lo que pago cada una, ni leer el periodo de bloqueo: muestra estimaciones. Decir que si crea una tarea en el paquete Quai Network para activar el uso compartido de RPC, que apruebas alli, porque una dependencia nunca deberia cambiar en silencio un ajuste del servicio del que depende.',
    de_DE:
      'Fragt einmal bei der Installation, ob das Dashboard die RPC des Knotens nutzen darf. Ohne sie zeigt das Dashboard weiterhin Hashrate, Worker, Anteilsverlauf und den Verbindungsassistenten, kann aber einen Arbeitsanteil nicht von einem Block unterscheiden, nicht zeigen, was jeder tatsaechlich gezahlt hat, und die Sperrfrist nicht lesen - es zeigt Schaetzungen. Ein Ja erzeugt eine Aufgabe im Paket Quai Network, die RPC-Freigabe einzuschalten, die du dort bestaetigst, denn eine Abhaengigkeit sollte niemals still eine Einstellung des Dienstes aendern, von dem sie abhaengt.',
    pl_PL:
      'Pyta raz, przy instalacji, czy panel moze korzystac z RPC wezla. Bez tego panel nadal pokazuje hashrate, koparki, historie udzialow i kreator polaczenia, ale nie odrozni udzialu od bloku, nie pokaze, ile kazdy faktycznie zaplacil, ani nie odczyta okresu blokady - pokazuje szacunki. Zgoda tworzy zadanie w pakiecie Quai Network, aby wlaczyc udostepnianie RPC, ktore zatwierdzasz tam, poniewaz zaleznosc nigdy nie powinna po cichu zmieniac ustawienia uslugi, od ktorej zalezy.',
    fr_FR:
      "Demande une fois, a l'installation, si le tableau de bord peut utiliser le RPC du noeud. Sans lui, le tableau de bord affiche toujours le hashrate, les mineurs, l'historique des parts et l'assistant de connexion, mais il ne peut pas distinguer une part d'un bloc, ni montrer ce que chacune a reellement paye, ni lire la periode de blocage : il affiche des estimations. Accepter cree une tache sur le paquet Quai Network pour activer le partage du RPC, que vous approuvez la-bas, car une dependance ne doit jamais modifier en silence un reglage du service dont elle depend.",
  },
  migrations: {},
})
