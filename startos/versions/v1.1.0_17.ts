import { VersionInfo } from '@start9labs/start-sdk'

export const v_1_1_0_17 = VersionInfo.of({
  version: '1.1.0:17',
  releaseNotes: {
    en_US:
      'Fixes the confirmed-rewards question never appearing. The settings file was not created at install, and reading a file that does not exist returns nothing rather than the default it would hold, so the task that asks about the RPC was skipped silently. Defaults are now written on install, update and restore.',
    es_ES:
      'Corrige que la pregunta sobre recompensas confirmadas nunca apareciera. El archivo de ajustes no se creaba al instalar, y leer un archivo inexistente no devuelve el valor por defecto, asi que la tarea se omitia en silencio. Ahora los valores por defecto se escriben al instalar, actualizar y restaurar.',
    de_DE:
      'Behebt, dass die Frage nach bestaetigten Belohnungen nie erschien. Die Einstellungsdatei wurde bei der Installation nicht angelegt, und das Lesen einer nicht vorhandenen Datei liefert nicht den Standardwert, sodass die Aufgabe stillschweigend uebersprungen wurde. Standardwerte werden jetzt bei Installation, Update und Wiederherstellung geschrieben.',
    pl_PL:
      'Naprawia brak pytania o potwierdzone nagrody. Plik ustawien nie byl tworzony przy instalacji, a odczyt nieistniejacego pliku nie zwraca wartosci domyslnej, wiec zadanie bylo po cichu pomijane. Wartosci domyslne sa teraz zapisywane przy instalacji, aktualizacji i przywracaniu.',
    fr_FR:
      "Corrige l'absence de la question sur les recompenses confirmees. Le fichier de reglages n'etait pas cree a l'installation, et lire un fichier inexistant ne renvoie pas la valeur par defaut, donc la tache etait ignoree en silence. Les valeurs par defaut sont desormais ecrites a l'installation, a la mise a jour et a la restauration.",
  },
  migrations: {},
})
