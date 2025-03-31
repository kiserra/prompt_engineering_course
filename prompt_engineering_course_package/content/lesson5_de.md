# Interaktive Lektion 5: Prompt Engineering für Sicherheitsanalysen

## Lernziele
- Prompts für Sicherheitsanalysen optimieren
- Gemini für SOC-Aufgaben effektiv einsetzen
- Sicherheitsrelevante Informationen extrahieren

## Einführung

Willkommen zur fünften Lektion unseres Prompt Engineering Kurses! In dieser Lektion werden wir uns darauf konzentrieren, wie wir Prompt Engineering speziell für Sicherheitsanalysen und SOC-Aufgaben einsetzen können.

## Prompts für Log-Analyse

Die Analyse von Sicherheitslogs ist eine der Kernaufgaben in einem SOC. Mit gut gestalteten Prompts kann Gemini bei der Interpretation und Analyse dieser Logs unterstützen.

### Best Practices für Log-Analyse-Prompts

1. **Kontext über das Logsystem bereitstellen**: Erklären Sie das Format und die Bedeutung der Logeinträge
2. **Spezifische Muster oder Anomalien definieren**: Geben Sie an, wonach gesucht werden soll
3. **Zeitrahmen eingrenzen**: Fokussieren Sie die Analyse auf relevante Zeiträume
4. **Strukturierte Ausgabe anfordern**: Bitten Sie um eine organisierte Darstellung der Ergebnisse

### Beispiel für einen Log-Analyse-Prompt

```
Du bist ein SOC-Analyst mit Spezialisierung auf SIEM-Systeme. Analysiere die folgenden Windows-Sicherheitslogs und identifiziere mögliche Anzeichen für einen Brute-Force-Angriff oder unbefugte Zugriffsversuche.

Logformat: [Datum Zeit] [Ereignis-ID] [Benutzer] [Quell-IP] [Status] [Details]

Logs:
[2025-03-15 08:23:15] [4625] [Administrator] [198.51.100.42] [Fehlgeschlagen] [Ungültiges Passwort]
[2025-03-15 08:23:18] [4625] [Administrator] [198.51.100.42] [Fehlgeschlagen] [Ungültiges Passwort]
[2025-03-15 08:23:22] [4625] [Administrator] [198.51.100.42] [Fehlgeschlagen] [Ungültiges Passwort]
[2025-03-15 08:23:25] [4625] [Administrator] [198.51.100.42] [Fehlgeschlagen] [Ungültiges Passwort]
[2025-03-15 08:23:30] [4625] [Administrator] [198.51.100.42] [Fehlgeschlagen] [Ungültiges Passwort]
[2025-03-15 08:23:35] [4624] [Administrator] [198.51.100.42] [Erfolgreich] [Anmeldung]
[2025-03-15 08:24:02] [4688] [Administrator] [198.51.100.42] [Erfolgreich] [Neuer Prozess: cmd.exe]
[2025-03-15 08:24:15] [4688] [Administrator] [198.51.100.42] [Erfolgreich] [Neuer Prozess: powershell.exe]

Analysiere diese Logs und:
1. Identifiziere verdächtige Aktivitäten
2. Bewerte den Schweregrad (hoch, mittel, niedrig)
3. Empfehle geeignete Maßnahmen
4. Erkläre, welche zusätzlichen Logs oder Informationen hilfreich wären
```

## Mustererkennungs-Prompts

Mustererkennung ist ein wichtiger Aspekt der Sicherheitsanalyse. Mit speziellen Prompts können Sie Gemini dabei unterstützen, Muster in Daten zu erkennen, die auf Sicherheitsvorfälle hindeuten könnten.

### Elemente eines effektiven Mustererkennungs-Prompts

1. **Bekannte Muster beschreiben**: Erklären Sie typische Muster für bestimmte Angriffe
2. **Kontext über normale Aktivitäten geben**: Helfen Sie dem Modell, Abweichungen zu erkennen
3. **Mehrere Datenquellen einbeziehen**: Kombinieren Sie Informationen aus verschiedenen Quellen
4. **Nach Korrelationen fragen**: Bitten Sie das Modell, Zusammenhänge zu identifizieren

### Beispiel für einen Mustererkennungs-Prompt

```
Du bist ein Threat Hunter in einem SOC-Team. Analysiere die folgenden Netzwerk- und Endpunktdaten, um mögliche Anzeichen für eine Advanced Persistent Threat (APT) zu identifizieren.

Netzwerkverbindungen:
- 192.168.1.105 -> 203.0.113.42:443 (HTTPS, täglich, 22:00-23:00 Uhr, Datenvolumen: ~500KB)
- 192.168.1.105 -> 198.51.100.73:8080 (HTTP, unregelmäßig, verschiedene Tageszeiten)
- 192.168.1.105 -> 192.168.1.1:53 (DNS)

Prozesse auf 192.168.1.105:
- svchost.exe (legitimer Windows-Prozess, aber mit ungewöhnlichem Elternprozess)
- rundll32.exe (läuft aus dem Temp-Verzeichnis)
- powershell.exe (mit verschleierten Befehlszeilenparametern)

Typische APT-Muster umfassen:
- Regelmäßige, zeitgesteuerte Verbindungen zu C2-Servern
- Nutzung legitimer Prozesse für Malware-Ausführung
- Verschleierte Befehle und Skripte
- Datenexfiltration über verschlüsselte Kanäle

Identifiziere mögliche APT-Aktivitäten in diesen Daten, erkläre die verdächtigen Muster und empfehle weitere Untersuchungsschritte.
```

## Zusammenfassung von Sicherheitsvorfällen

Die Zusammenfassung von Sicherheitsvorfällen ist eine wichtige Aufgabe, um komplexe Informationen für verschiedene Stakeholder verständlich zu machen. Gemini kann dabei helfen, klare und präzise Zusammenfassungen zu erstellen.

### Elemente eines effektiven Zusammenfassungs-Prompts

1. **Zielgruppe definieren**: Geben Sie an, für wen die Zusammenfassung bestimmt ist
2. **Detailgrad festlegen**: Spezifizieren Sie, wie detailliert die Zusammenfassung sein soll
3. **Struktur vorgeben**: Definieren Sie die gewünschten Abschnitte der Zusammenfassung
4. **Technischen Jargon anpassen**: Je nach Zielgruppe mehr oder weniger technische Details anfordern

### Beispiel für einen Zusammenfassungs-Prompt

```
Du bist ein SOC-Manager, der einen Sicherheitsvorfall für verschiedene Stakeholder zusammenfassen muss. Basierend auf den folgenden technischen Details, erstelle drei verschiedene Zusammenfassungen:

Technische Details:
- Ransomware-Infektion durch Phishing-E-Mail mit bösartigem Makro
- Betroffene Systeme: 3 Workstations in der Finanzabteilung
- Verschlüsselung lokaler Dateien auf den betroffenen Systemen
- Keine Ausbreitung auf Netzwerkfreigaben oder Server dank schneller Isolation
- Wiederherstellung aus Backups erfolgreich, kein Lösegeld gezahlt
- Identifizierte Schwachstelle: Makros in Office-Dokumenten standardmäßig aktiviert

1. Erstelle eine technische Zusammenfassung für das IT-Sicherheitsteam (detailliert, technisch)
2. Erstelle eine Management-Zusammenfassung für die Geschäftsführung (kurz, geschäftsorientiert)
3. Erstelle eine Mitteilung für alle Mitarbeiter (einfach, bildungsorientiert)

Jede Zusammenfassung sollte die wichtigsten Informationen enthalten, die für die jeweilige Zielgruppe relevant sind.
```

## Praktische Übung: Prompts für Sicherheitsanalysen

Lassen Sie uns einige Prompts für typische SOC-Aufgaben erstellen:

1. Entwickeln Sie einen Prompt für die Analyse von Firewall-Logs, um ungewöhnlichen ausgehenden Verkehr zu identifizieren.
2. Erstellen Sie einen Prompt für die Korrelation von Ereignissen aus verschiedenen Sicherheitssystemen.
3. Formulieren Sie einen Prompt für die Priorisierung von Sicherheitswarnungen basierend auf Schweregrad und Kontext.

## Challenge: Prompt zur Erkennung von Anomalien in Netzwerkdaten

**Aufgabe:**

Entwickeln Sie einen umfassenden Prompt für ein Gemini-Modell, das Ihrem SOC-Team bei der Erkennung von Anomalien in Netzwerkdaten helfen soll. Der Prompt sollte:

1. Einen klaren Kontext über normale Netzwerkaktivitäten in Ihrem Unternehmen bieten
2. Realistische Netzwerkdaten enthalten, die sowohl normale als auch potenziell anomale Aktivitäten zeigen
3. Das Modell anweisen, spezifische Arten von Anomalien zu identifizieren und zu erklären
4. Eine strukturierte Ausgabe für die Ergebnisse anfordern
5. Empfehlungen für weitere Untersuchungen oder Maßnahmen anfordern

Denken Sie daran, SOC-spezifische Terminologie und realistische Daten zu verwenden, um den Prompt praxisnah zu gestalten.

## Zusammenfassung

In dieser Lektion haben wir gelernt:
- Wie man Prompts für die Analyse von Sicherheitslogs optimiert
- Wie man Mustererkennungs-Prompts für die Identifizierung von Sicherheitsbedrohungen erstellt
- Wie man Prompts für die Zusammenfassung von Sicherheitsvorfällen für verschiedene Zielgruppen gestaltet
- Wie man Gemini effektiv für verschiedene SOC-Aufgaben einsetzen kann

In der nächsten Lektion werden wir uns mit der Integration der Gemini API und der Automatisierung von SOC-Aufgaben befassen.
