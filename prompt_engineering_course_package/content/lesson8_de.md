# Interaktive Lektion 8: Abschlussprojekt - SOC Prompt Engineering Challenge

## Lernziele
- Das Gelernte in einem praxisnahen Projekt anwenden
- Komplexe SOC-Aufgaben mit Prompt Engineering lösen
- Prompts iterativ verbessern und optimieren

## Einführung

Willkommen zur achten und letzten Lektion unseres Prompt Engineering Kurses! In dieser Lektion werden wir all das Wissen, das Sie in den vorherigen Lektionen erworben haben, in einem umfassenden Abschlussprojekt anwenden.

## Zusammenfassung der Kursinhalte

Bevor wir mit dem Abschlussprojekt beginnen, lassen Sie uns kurz die wichtigsten Konzepte zusammenfassen, die wir in diesem Kurs behandelt haben:

1. **Grundlagen des Prompt Engineering**
   - Verschiedene Prompt-Typen: Frage, Aufgabe, Entität, Vervollständigung
   - Anatomie eines effektiven Prompts: Eingabe, Kontext, Beispiele

2. **Instruction Prompts für SOC-Teams**
   - Klare Rollenanweisungen
   - Spezifische Aufgabenbeschreibungen
   - Formatierungsanweisungen

3. **Kontext und Beispiele in Prompts**
   - Zero-Shot vs. Few-Shot Prompting
   - Bereitstellung relevanter Hintergrundinformationen
   - Demonstration von Format und Logik durch Beispiele

4. **Fortgeschrittene Prompt-Techniken**
   - Chain-of-Thought Prompting
   - Rollenbasierte Prompts
   - Strukturierte Ausgabeformate

5. **Prompt Engineering für Sicherheitsanalysen**
   - Log-Analyse-Prompts
   - Mustererkennungs-Prompts
   - Zusammenfassung von Sicherheitsvorfällen

6. **Gemini API Integration und Automatisierung**
   - Grundlagen der Gemini API
   - Prompt-Templates und deren Anpassung
   - Automatisierung von SOC-Aufgaben

7. **Best Practices und Fallstricke**
   - Häufige Fehler vermeiden
   - Prompts systematisch verbessern
   - Ethische Aspekte berücksichtigen

## Abschlussprojekt: Incident Response Workflow mit Prompt Engineering

Für unser Abschlussprojekt werden wir einen umfassenden Incident Response Workflow entwickeln, der Prompt Engineering nutzt, um verschiedene Aspekte eines Sicherheitsvorfalls zu analysieren und zu bewältigen.

### Szenario

Sie sind Teil des SOC-Teams eines mittelgroßen Finanzdienstleisters. Ihr Unternehmen hat kürzlich verdächtige Aktivitäten festgestellt, die auf einen möglichen Sicherheitsvorfall hindeuten. Als Prompt Engineering-Experte sollen Sie einen Workflow entwickeln, der Gemini nutzt, um den Vorfall zu analysieren und zu bewältigen.

### Verfügbare Daten

Für dieses Projekt stehen Ihnen folgende Daten zur Verfügung:

1. **Firewall-Logs**: Zeigen ungewöhnliche ausgehende Verbindungen von einem internen Server zu einer unbekannten externen IP-Adresse.

2. **E-Mail-Header**: Eine verdächtige E-Mail, die an mehrere Mitarbeiter der Finanzabteilung gesendet wurde.

3. **Endpunkt-Telemetrie**: Ungewöhnliche Prozessaktivitäten auf mehreren Workstations in der Finanzabteilung.

4. **Netzwerkverkehr**: Erhöhtes Datenvolumen zu ungewöhnlichen Tageszeiten.

### Aufgabe

Entwickeln Sie einen umfassenden Prompt Engineering-Workflow für diesen Incident Response-Fall. Ihr Workflow sollte folgende Komponenten enthalten:

1. **Erste Bewertung**: Ein Prompt zur ersten Analyse und Bewertung der verfügbaren Daten.

2. **Tiefere Untersuchung**: Mehrere spezialisierte Prompts für die detaillierte Analyse verschiedener Aspekte des Vorfalls (Netzwerk, E-Mail, Endpunkt).

3. **Korrelation und Zusammenfassung**: Ein Prompt zur Korrelation der Ergebnisse und Erstellung einer Gesamtanalyse.

4. **Maßnahmenempfehlungen**: Ein Prompt zur Entwicklung von Empfehlungen für Eindämmung, Beseitigung und Wiederherstellung.

5. **Berichterstellung**: Prompts für die Erstellung von Berichten für verschiedene Zielgruppen (technisches Team, Management, Mitarbeiter).

### Anforderungen

Für jede Komponente Ihres Workflows sollten Sie:

1. Einen detaillierten Prompt erstellen, der Best Practices aus dem Kurs anwendet
2. Erklären, welche Prompt-Techniken Sie verwendet haben und warum
3. Potenzielle Fallstricke identifizieren und wie Sie diese vermeiden
4. Ethische Überlegungen berücksichtigen

## Praktische Umsetzung

Lassen Sie uns nun Schritt für Schritt durch die Entwicklung dieses Workflows gehen:

### 1. Erste Bewertung

**Prompt für die erste Bewertung:**

```
Du bist ein erfahrener SOC-Analyst mit Spezialisierung auf Incident Response. Du wurdest mit der ersten Bewertung eines möglichen Sicherheitsvorfalls beauftragt.

Verfügbare Daten:

1. Firewall-Logs:
- Server 192.168.10.15 hat in den letzten 48 Stunden mehrere Verbindungen zur externen IP 203.0.113.42 auf Port 8080 hergestellt
- Das Datenvolumen dieser Verbindungen beträgt insgesamt ca. 2,3 GB
- Die Verbindungen finden hauptsächlich zwischen 2:00 und 4:00 Uhr morgens statt

2. E-Mail-Header:
From: support@financial-updates.com
Subject: Wichtiges Finanz-Update - Sofortige Aktion erforderlich
Date: 28.03.2025 09:15:22
Attachment: Q1_Financial_Report_2025.xlsx

3. Endpunkt-Telemetrie:
- Auf 3 Workstations in der Finanzabteilung wurde die Ausführung von powershell.exe mit verschleierten Befehlszeilenparametern festgestellt
- Auf diesen Workstations wurden ungewöhnliche Registry-Änderungen im Bereich HKCU\Software\Microsoft\Windows\CurrentVersion\Run vorgenommen
- Alle betroffenen Benutzer haben die E-Mail von support@financial-updates.com erhalten und geöffnet

4. Netzwerkverkehr:
- Erhöhtes ausgehendes Datenvolumen zwischen 2:00 und 4:00 Uhr morgens
- Ungewöhnliche DNS-Anfragen zu Domains mit zufällig erscheinenden Namen

Führe eine erste Bewertung dieses möglichen Sicherheitsvorfalls durch. Gehe dabei wie folgt vor:

1. Analysiere jede Datenquelle und identifiziere verdächtige Elemente
2. Korreliere die Informationen aus verschiedenen Quellen
3. Bewerte den Schweregrad des möglichen Vorfalls (kritisch, hoch, mittel, niedrig)
4. Stelle eine vorläufige Hypothese über die Art des Vorfalls auf
5. Empfehle sofortige nächste Schritte für die weitere Untersuchung

Strukturiere deine Antwort in klar definierte Abschnitte mit Markdown-Überschriften.
```

**Erklärung:**
- **Verwendete Techniken**: Rollenanweisung, detaillierter Kontext, strukturierte Aufgabenbeschreibung, Formatierungsanweisungen
- **Vorteile**: Klare Aufgabenstellung, umfassender Kontext, strukturierte Ausgabe
- **Vermiedene Fallstricke**: Zu vage Anweisungen, fehlender Kontext

### 2. Tiefere Untersuchung - Netzwerkanalyse

**Prompt für die Netzwerkanalyse:**

```
Du bist ein Netzwerksicherheitsexperte in einem SOC-Team. Basierend auf der ersten Bewertung eines Sicherheitsvorfalls sollst du eine tiefere Analyse der Netzwerkaspekte durchführen.

Kontext aus der ersten Bewertung:
- Server 192.168.10.15 hat Verbindungen zur externen IP 203.0.113.42 auf Port 8080 hergestellt
- Hohe Datenübertragung (2,3 GB) hauptsächlich zwischen 2:00 und 4:00 Uhr morgens
- Ungewöhnliche DNS-Anfragen zu Domains mit zufällig erscheinenden Namen
- Verdacht auf Datenexfiltration nach einer Malware-Infektion durch eine Phishing-E-Mail

Zusätzliche Netzwerkdaten:
- Die IP 203.0.113.42 ist mit keinem bekannten Geschäftspartner assoziiert
- Geolokalisierung der IP: Osteuropa
- Der Server 192.168.10.15 ist ein interner Dateiserver mit Zugriff auf Finanzdaten
- Typische Kommunikationsmuster des Servers sind auf Geschäftszeiten (8:00-18:00 Uhr) beschränkt
- DNS-Anfragen gehen an Domains wie: a7f3b2c1.financialdata.net, 9d2e5f8c.bankupdate.org

Analysiere diese Netzwerkdaten und:
1. Bewerte die Wahrscheinlichkeit einer Datenexfiltration
2. Identifiziere mögliche Command-and-Control (C2) Kommunikation
3. Erkläre die Bedeutung der zeitlichen Muster
4. Analysiere die DNS-Anfragen auf Anzeichen von Domain Generation Algorithms (DGA)
5. Empfehle spezifische Netzwerk-basierte Eindämmungsmaßnahmen

Denke Schritt für Schritt durch deine Analyse und erkläre deine Schlussfolgerungen. Strukturiere deine Antwort in klar definierte Abschnitte.
```

**Erklärung:**
- **Verwendete Techniken**: Spezialisierte Rollenanweisung, Chain-of-Thought Prompting, detaillierter Kontext
- **Vorteile**: Fokussierte Analyse eines spezifischen Aspekts, nachvollziehbarer Denkprozess
- **Vermiedene Fallstricke**: Zu breite Aufgabenstellung, fehlende Spezialisierung

### 3. Korrelation und Zusammenfassung

**Prompt für Korrelation und Zusammenfassung:**

```
Du bist ein Senior SOC-Analyst mit Erfahrung in der Korrelation von Sicherheitsdaten aus verschiedenen Quellen. Basierend auf den Ergebnissen mehrerer Analysen sollst du eine Gesamtbewertung eines Sicherheitsvorfalls erstellen.

Ergebnisse der Netzwerkanalyse:
- Hohe Wahrscheinlichkeit einer Datenexfiltration über verschlüsselte HTTP-Verbindungen
- Die externe IP 203.0.113.42 ist mit bekannten APT-Gruppen assoziiert
- DNS-Anfragen zeigen Merkmale eines Domain Generation Algorithm (DGA)
- Empfohlene Netzwerkmaßnahmen: Blockieren der externen IP, Überwachung ungewöhnlicher ausgehender Verbindungen

Ergebnisse der E-Mail-Analyse:
- Die E-Mail von support@financial-updates.com ist ein Phishing-Versuch
- Der Anhang enthält ein bösartiges Makro, das PowerShell-Code ausführt
- Die Absender-Domain wurde erst kürzlich registriert
- Ähnliche Phishing-Kampagnen wurden mit der APT-Gruppe "FinancialHarvest" in Verbindung gebracht

Ergebnisse der Endpunkt-Analyse:
- Die PowerShell-Befehle laden einen zweistufigen Loader herunter
- Die Registry-Änderungen dienen der Persistenz
- Auf den betroffenen Workstations wurde Zugriff auf sensible Finanzdokumente festgestellt
- Es wurden Anzeichen für laterale Bewegung zum Dateiserver gefunden

Erstelle eine umfassende Korrelation und Zusammenfassung des Vorfalls:
1. Beschreibe die wahrscheinliche Angriffskette (Kill Chain) von Anfang bis Ende
2. Identifiziere die wahrscheinlichen Angreifer und ihre Motivation
3. Bewerte den Schweregrad und die Auswirkungen des Vorfalls
4. Fasse die wichtigsten Indikatoren of Compromise (IoCs) zusammen
5. Erstelle eine Timeline der wichtigsten Ereignisse

Deine Zusammenfassung sollte sowohl für technische Experten als auch für das Management verständlich sein. Verwende eine klare Struktur mit Abschnitten und Unterabschnitten.
```

**Erklärung:**
- **Verwendete Techniken**: Rollenanweisung, umfassender Kontext aus verschiedenen Quellen, strukturierte Aufgabenbeschreibung
- **Vorteile**: Ermöglicht die Korrelation verschiedener Datenquellen, bietet einen Gesamtüberblick
- **Vermiedene Fallstricke**: Isolierte Betrachtung einzelner Aspekte, fehlende Zusammenhänge

### 4. Maßnahmenempfehlungen

**Prompt für Maßnahmenempfehlungen:**

```
Du bist ein Incident Response-Spezialist in einem SOC-Team. Nach der Analyse eines Sicherheitsvorfalls sollst du einen umfassenden Maßnahmenplan entwickeln.

Zusammenfassung des Vorfalls:
- APT-Gruppe "FinancialHarvest" hat durch eine Phishing-E-Mail mit bösartigem Excel-Makro Zugang erlangt
- Betroffene Systeme: 3 Workstations in der Finanzabteilung und 1 Dateiserver
- Anzeichen für Datenexfiltration von Finanzdaten (ca. 2,3 GB)
- Persistenzmechanismen wurden auf den betroffenen Systemen installiert
- Der Angriff läuft seit mindestens 48 Stunden

Entwickle einen detaillierten Maßnahmenplan mit folgenden Phasen:

1. Sofortige Eindämmung:
   - Welche unmittelbaren Maßnahmen sollten ergriffen werden, um den Angriff zu stoppen?
   - Wie können weitere Schäden verhindert werden?

2. Beseitigung:
   - Wie sollten die betroffenen Systeme bereinigt werden?
   - Welche Schritte sind notwendig, um alle Komponenten der Malware zu entfernen?

3. Wiederherstellung:
   - Wie sollten die Systeme wiederhergestellt werden?
   - Welche Schritte sind notwendig, um den normalen Betrieb sicherzustellen?

4. Verbesserung:
   - Welche Schwachstellen wurden ausgenutzt?
   - Welche langfristigen Maßnahmen können ähnliche Vorfälle in Zukunft verhindern?

Berücksichtige bei deinen Empfehlungen die Geschäftskontinuität und die Notwendigkeit, Beweise für mögliche forensische Untersuchungen zu sichern. Priorisiere die Maßnahmen nach Dringlichkeit und Wirksamkeit.
```

**Erklärung:**
- **Verwendete Techniken**: Spezialisierte Rollenanweisung, strukturierte Aufgabenbeschreibung, klare Phasen
- **Vorteile**: Praktische, umsetzbare Empfehlungen, klare Priorisierung
- **Vermiedene Fallstricke**: Zu theoretische oder allgemeine Empfehlungen, fehlende Struktur

### 5. Berichterstellung für das Management

**Prompt für die Berichterstellung:**

```
Du bist ein SOC-Manager, der einen Sicherheitsvorfall für die Geschäftsführung zusammenfassen muss. Erstelle einen Executive Summary, der die wichtigsten Aspekte des Vorfalls in einer für Nicht-Techniker verständlichen Weise darstellt.

Details des Vorfalls:
- APT-Gruppe hat durch Phishing Zugang zu Finanzsystemen erlangt
- Sensible Finanzdaten wurden möglicherweise gestohlen (ca. 2,3 GB)
- Betroffene Systeme wurden identifiziert und isoliert
- Ein umfassender Maßnahmenplan wurde entwickelt und wird umgesetzt
- Keine Hinweise auf Beeinträchtigung von Kundendaten

Erstelle einen Executive Summary mit folgenden Abschnitten:

1. Vorfallübersicht:
   - Was ist passiert? (in nicht-technischer Sprache)
   - Wann wurde es entdeckt?
   - Welche Systeme/Daten sind betroffen?

2. Geschäftliche Auswirkungen:
   - Welche potenziellen Auswirkungen hat der Vorfall auf das Unternehmen?
   - Gibt es regulatorische oder Compliance-Implikationen?
   - Welche Risiken bestehen für Reputation und Finanzen?

3. Aktuelle Maßnahmen:
   - Welche Schritte wurden bereits unternommen?
   - Wie wird die Situation aktuell gehandhabt?

4. Nächste Schritte:
   - Welche weiteren Maßnahmen sind geplant?
   - Welche Ressourcen werden benötigt?
   - Welcher Zeitrahmen wird erwartet?

5. Empfehlungen:
   - Welche strategischen Entscheidungen sollte die Geschäftsführung treffen?
   - Welche Investitionen könnten zukünftige Vorfälle verhindern?

Der Bericht sollte maximal eine Seite lang sein, klar und prägnant. Vermeide technischen Jargon und konzentriere dich auf geschäftliche Aspekte und Risikomanagement.
```

**Erklärung:**
- **Verwendete Techniken**: Zielgruppenspezifische Rollenanweisung, klare Formatierungsvorgaben, Fokus auf nicht-technische Aspekte
- **Vorteile**: Für die Zielgruppe relevante Informationen, geschäftsorientierte Perspektive
- **Vermiedene Fallstricke**: Zu technische Details, fehlender Geschäftsbezug

## Bewertungskriterien

Ihr Abschlussprojekt wird anhand der folgenden Kriterien bewertet:

1. **Vollständigkeit**: Haben Sie alle geforderten Komponenten des Workflows abgedeckt?
2. **Anwendung der Kursinhalte**: Haben Sie die verschiedenen Prompt-Techniken aus dem Kurs effektiv eingesetzt?
3. **Qualität der Prompts**: Sind Ihre Prompts klar, präzise und effektiv für die jeweilige Aufgabe?
4. **Berücksichtigung von Best Practices**: Haben Sie die Best Practices für Prompt Engineering angewendet?
5. **Vermeidung von Fallstricken**: Haben Sie häufige Fehler vermieden?
6. **Ethische Überlegungen**: Haben Sie ethische Aspekte angemessen berücksichtigt?
7. **Praktische Anwendbarkeit**: Ist Ihr Workflow in einem realen SOC-Umfeld umsetzbar?

## Ihre Aufgabe

Entwickeln Sie einen eigenen Incident Response Workflow mit Prompt Engineering für ein Szenario Ihrer Wahl. Sie können das oben beschriebene Szenario verwenden oder ein eigenes entwickeln, das für Ihr SOC-Team relevant ist.

Ihr Workflow sollte mindestens vier verschiedene Prompts enthalten, die verschiedene Aspekte des Incident Response-Prozesses abdecken. Für jeden Prompt sollten Sie erklären:
- Welche Prompt-Techniken Sie verwendet haben
- Warum Sie diese Techniken gewählt haben
- Welche Fallstricke Sie vermieden haben
- Welche ethischen Überlegungen Sie berücksichtigt haben

## Zusammenfassung

In dieser letzten Lektion haben wir:
- Die wichtigsten Konzepte des Kurses zusammengefasst
- Ein umfassendes Abschlussprojekt durchgeführt
- Verschiedene Prompt-Techniken in einem realistischen Szenario angewendet
- Einen vollständigen Incident Response Workflow mit Prompt Engineering entwickelt

Herzlichen Glückwunsch zum Abschluss des Prompt Engineering Kurses! Sie haben nun ein solides Fundament im Bereich Prompt Engineering für SOC-Teams und können diese Fähigkeiten in Ihrer täglichen Arbeit einsetzen, um die Effizienz und Effektivität Ihres Teams zu steigern.
