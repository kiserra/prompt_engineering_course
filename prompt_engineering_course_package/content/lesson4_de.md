# Interaktive Lektion 4: Fortgeschrittene Prompt-Techniken

## Lernziele
- Fortgeschrittene Prompt-Strategien kennenlernen
- Komplexe Aufgaben durch Prompts lösen
- Prompts iterativ verbessern

## Einführung

Willkommen zur vierten Lektion unseres Prompt Engineering Kurses! In dieser Lektion werden wir fortgeschrittene Prompt-Techniken erkunden, die besonders nützlich sind, um komplexe Aufgaben zu lösen und die Qualität der Antworten von Gemini weiter zu verbessern.

## Chain-of-Thought Prompting

Chain-of-Thought (CoT) Prompting ist eine Technik, bei der das Modell dazu angeregt wird, seinen Denkprozess Schritt für Schritt darzulegen, bevor es zu einer endgültigen Antwort kommt. Dies ist besonders nützlich für komplexe Aufgaben, die mehrere Denkschritte erfordern.

### Wie funktioniert Chain-of-Thought Prompting?

Bei dieser Technik fordern Sie das Modell explizit auf, "Schritt für Schritt" zu denken oder seinen Gedankengang zu erklären.

**Beispiel:**
```
Analysiere den folgenden Sicherheitsvorfall und erkläre Schritt für Schritt, wie du vorgehen würdest:

Ein Mitarbeiter meldet, dass sein Computer ungewöhnlich langsam läuft und seltsame Pop-ups anzeigt. Außerdem wurde eine große Dateiübertragung zu einer unbekannten externen IP-Adresse in den Firewall-Logs festgestellt.

Denke Schritt für Schritt durch den Vorfall und entwickle einen Untersuchungsplan.
```

### Vorteile von Chain-of-Thought Prompting

1. **Transparenz**: Sie können den Denkprozess des Modells nachvollziehen
2. **Genauigkeit**: Das Modell macht weniger Fehler bei komplexen Aufgaben
3. **Nachvollziehbarkeit**: Die Antwort ist besser dokumentiert und überprüfbar
4. **Lerneffekt**: Teammitglieder können vom dargestellten Denkprozess lernen

### Beispiel für SOC-Anwendungen

**Prompt:**
```
Du bist ein erfahrener SOC-Analyst. Analysiere die folgenden Ereignisse und erkläre Schritt für Schritt, ob sie zusammenhängen und einen koordinierten Angriff darstellen könnten:

1. 10:15 Uhr - Mehrere fehlgeschlagene Anmeldeversuche für das Admin-Konto "sysadmin" von IP 203.0.113.42
2. 10:23 Uhr - Erfolgreiche Anmeldung für das Konto "jsmith" von IP 203.0.113.42
3. 10:31 Uhr - PowerShell-Befehl zur Deaktivierung von Windows Defender auf dem Computer von "jsmith"
4. 10:42 Uhr - Ungewöhnliche ausgehende Verbindung vom Computer "jsmith" zu IP 198.51.100.73 auf Port 4444

Denke Schritt für Schritt durch die Ereignisse und erkläre deine Analyse.
```

## Rollenbasierte Prompts

Bei rollenbasierten Prompts weisen Sie dem Modell eine spezifische Rolle zu, die es bei der Beantwortung einnehmen soll. Dies kann die Qualität und Relevanz der Antworten erheblich verbessern, insbesondere für domänenspezifische Aufgaben.

### Wie funktionieren rollenbasierte Prompts?

Sie beginnen den Prompt mit einer klaren Rollenzuweisung, die dem Modell sagt, aus welcher Perspektive es antworten soll.

**Beispiel:**
```
Du bist ein Threat Intelligence Analyst mit 10 Jahren Erfahrung in der Untersuchung von APT-Gruppen. Analysiere die folgenden Indikatoren und identifiziere mögliche Angreifergruppen, die dahinter stecken könnten.
```

### Effektive Rollen für SOC-Aufgaben

1. **SOC-Analyst**: Für allgemeine Sicherheitsanalysen und Incident Response
2. **Threat Hunter**: Für proaktive Suche nach Bedrohungen
3. **Malware-Analyst**: Für die Analyse von Schadsoftware
4. **Forensiker**: Für detaillierte Untersuchungen nach Vorfällen
5. **Security Architect**: Für Empfehlungen zur Sicherheitsarchitektur
6. **Compliance-Spezialist**: Für Fragen zu Vorschriften und Standards

### Beispiel für rollenbasierte Prompts im SOC

**Prompt:**
```
Du bist ein Malware-Analyst mit Spezialisierung auf Ransomware. Ein Benutzer hat eine verdächtige E-Mail-Anlage geöffnet, und kurz darauf wurden ungewöhnliche Aktivitäten auf seinem Computer festgestellt. Die folgenden Indikatoren wurden beobachtet:

- Neue Prozesse: svchost.exe gestartet von einem ungewöhnlichen Pfad
- Netzwerkverbindungen zu IP 185.212.x.x auf Port 443
- Änderungen an der Windows-Registry unter HKCU\Software\Microsoft\Windows\CurrentVersion\Run
- Neue Dateien mit der Erweiterung .encrypted in mehreren Verzeichnissen

Analysiere diese Indikatoren, identifiziere die mögliche Ransomware-Familie und empfehle sofortige Maßnahmen zur Eindämmung.
```

## Strukturierte Ausgabeformate anfordern

Eine weitere fortgeschrittene Technik ist es, spezifische Ausgabeformate anzufordern. Dies ist besonders nützlich, wenn Sie die Antworten in einem bestimmten Format benötigen oder wenn Sie die Antworten weiterverarbeiten möchten.

### Gängige Ausgabeformate

1. **Listen**: Für übersichtliche Aufzählungen
2. **Tabellen**: Für den Vergleich von Daten
3. **JSON/XML**: Für die Weiterverarbeitung in Skripten
4. **Markdown**: Für formatierte Dokumentation
5. **YAML**: Für Konfigurationsdateien

### Beispiel für strukturierte Ausgabeformate

**Prompt:**
```
Du bist ein SOC-Analyst. Basierend auf den folgenden Ereignissen, erstelle einen Incident Report im JSON-Format mit den Feldern: incident_id, severity (high, medium, low), affected_systems (Array), indicators_of_compromise (Array), recommended_actions (Array) und summary (Text).

Ereignisse:
1. Mehrere fehlgeschlagene Anmeldeversuche für verschiedene Benutzerkonten von der IP 198.51.100.42
2. Erfolgreiche Anmeldung für das Konto "jdoe" von derselben IP
3. Ungewöhnliche PowerShell-Befehle auf dem Computer von "jdoe"
4. Verbindung zu einer bekannten C2-Domäne von diesem Computer
```

## Prompts iterativ verbessern

Eine der wichtigsten fortgeschrittenen Techniken ist die iterative Verbesserung von Prompts. Dabei analysieren Sie die erhaltenen Antworten und passen Ihre Prompts entsprechend an, um bessere Ergebnisse zu erzielen.

### Schritte zur iterativen Verbesserung

1. **Analysieren**: Bewerten Sie die erhaltene Antwort
2. **Identifizieren**: Finden Sie Probleme oder Verbesserungsmöglichkeiten
3. **Anpassen**: Ändern Sie den Prompt entsprechend
4. **Testen**: Probieren Sie den neuen Prompt aus
5. **Wiederholen**: Führen Sie den Prozess bei Bedarf erneut durch

### Beispiel für iterative Verbesserung

**Ursprünglicher Prompt:**
```
Erstelle eine Phishing-Erkennungscheckliste.
```

**Antwort:** *Zu allgemein, nicht SOC-spezifisch*

**Verbesserter Prompt:**
```
Du bist ein SOC-Analyst. Erstelle eine Checkliste zur Erkennung von Phishing-E-Mails für unser Sicherheitsteam.
```

**Antwort:** *Besser, aber immer noch zu wenig strukturiert*

**Weiter verbesserter Prompt:**
```
Du bist ein SOC-Analyst mit Spezialisierung auf E-Mail-Sicherheit. Erstelle eine detaillierte Checkliste zur Erkennung von Phishing-E-Mails für unser Sicherheitsteam. Die Checkliste sollte:

1. In Kategorien unterteilt sein (Absender, Inhalt, Links, Anhänge)
2. Sowohl technische als auch nicht-technische Indikatoren enthalten
3. Eine Bewertungsskala für jedes Element haben (hoch, mittel, niedrig)
4. Konkrete Beispiele für jeden Indikator enthalten
5. Empfohlene Maßnahmen bei Verdacht auf Phishing beinhalten

Formatiere die Checkliste übersichtlich mit Markdown.
```

## Praktische Übung: Fortgeschrittene Prompt-Techniken

Lassen Sie uns einige fortgeschrittene Prompt-Techniken für SOC-Aufgaben anwenden:

1. Erstellen Sie einen Chain-of-Thought Prompt für die Analyse eines verdächtigen Netzwerkverkehrs.
2. Formulieren Sie einen rollenbasierten Prompt für Empfehlungen zur Verbesserung der Endpunktsicherheit.
3. Entwickeln Sie einen Prompt, der eine strukturierte JSON-Ausgabe für einen Sicherheitsvorfall anfordert.

## Challenge: Chain-of-Thought Prompt für Threat Hunting

**Aufgabe:**

Entwickeln Sie einen umfassenden Chain-of-Thought Prompt für ein Gemini-Modell, das Ihrem SOC-Team bei einem Threat Hunting-Szenario helfen soll. Der Prompt sollte:

1. Eine klare Rollenzuweisung für das Modell enthalten
2. Ein realistisches Threat Hunting-Szenario beschreiben
3. Das Modell anweisen, seinen Denkprozess Schritt für Schritt darzulegen
4. Spezifische Daten oder Indikatoren enthalten, die analysiert werden sollen
5. Eine strukturierte Ausgabe für die Ergebnisse anfordern

Denken Sie daran, SOC-spezifische Terminologie und realistische Daten zu verwenden, um den Prompt praxisnah zu gestalten.

## Zusammenfassung

In dieser Lektion haben wir gelernt:
- Wie Chain-of-Thought Prompting für komplexe Analyseaufgaben eingesetzt werden kann
- Wie rollenbasierte Prompts die Qualität und Relevanz der Antworten verbessern
- Wie man spezifische Ausgabeformate anfordert, um die Weiterverarbeitung zu erleichtern
- Wie man Prompts iterativ verbessert, um optimale Ergebnisse zu erzielen

In der nächsten Lektion werden wir uns mit Prompt Engineering speziell für Sicherheitsanalysen befassen und lernen, wie wir Gemini effektiv für SOC-Aufgaben einsetzen können.
