# Interaktive Lektion 3: Kontext und Beispiele in Prompts

## Lernziele
- Die Rolle von Kontext in Prompts verstehen
- Beispiele effektiv in Prompts einbauen
- Prompts mit relevanten Informationen anreichern

## Einführung

Willkommen zur dritten Lektion unseres Prompt Engineering Kurses! In dieser Lektion werden wir uns damit befassen, wie Kontext und Beispiele in Prompts die Qualität der Antworten von Gemini erheblich verbessern können.

## Die Bedeutung von Kontext in Prompts

Kontext gibt dem Sprachmodell zusätzliche Informationen, die es benötigt, um präzise und relevante Antworten zu generieren. Ohne ausreichenden Kontext muss das Modell Annahmen treffen, was zu ungenauen oder unvollständigen Antworten führen kann.

Kontext kann verschiedene Formen annehmen:
- Hintergrundinformationen zum Problem
- Spezifische Anforderungen oder Einschränkungen
- Domänenspezifisches Wissen
- Vorherige Interaktionen oder Ergebnisse

## Kontextbereitstellung in Prompts

### 1. Relevante Hintergrundinformationen

Geben Sie dem Modell wichtige Hintergrundinformationen, die für die Aufgabe relevant sind.

**Beispiel:**
```
Kontext: Unser Unternehmen ist ein mittelständischer Finanzdienstleister mit 500 Mitarbeitern. Wir verwenden eine hybride Cloud-Infrastruktur mit On-Premise-Servern und Azure-Diensten. Kürzlich haben wir verdächtige Aktivitäten in unserem Netzwerk festgestellt, die auf einen möglichen Lateral Movement hindeuten.

Aufgabe: Erstelle eine Checkliste für die Untersuchung dieser verdächtigen Aktivitäten.
```

### 2. Spezifische Anforderungen

Definieren Sie klar, welche spezifischen Anforderungen oder Einschränkungen für die Antwort gelten.

**Beispiel:**
```
Erstelle einen Incident Response Plan für einen Ransomware-Angriff. Der Plan muss:
- Für ein SOC-Team mit 3 Analysten umsetzbar sein
- Keine Tools erfordern, die mehr als 5.000 € kosten
- In einer Windows-Umgebung funktionieren
- Compliance mit DSGVO sicherstellen
```

### 3. Domänenspezifisches Wissen

Stellen Sie relevantes Fachwissen bereit, das für die Aufgabe wichtig ist.

**Beispiel:**
```
In unserem SIEM-System verwenden wir folgende Ereignis-IDs für Windows-Sicherheitslogs:
- 4624: Erfolgreiche Anmeldung
- 4625: Fehlgeschlagene Anmeldung
- 4648: Explizite Anmeldung mit alternativen Anmeldedaten
- 4672: Besondere Berechtigungen zugewiesen

Erstelle eine Suchabfrage, die potenzielle Pass-the-Hash-Angriffe identifiziert.
```

## Few-Shot und Zero-Shot Prompting

### Zero-Shot Prompting

Bei Zero-Shot Prompting geben Sie dem Modell eine Aufgabe, ohne Beispiele für die erwartete Antwort zu liefern. Das Modell muss die Aufgabe ohne spezifische Beispiele verstehen und lösen.

**Beispiel:**
```
Klassifiziere die folgenden Sicherheitswarnungen nach Schweregrad (kritisch, hoch, mittel, niedrig):

1. Mehrere fehlgeschlagene Anmeldeversuche für ein Admin-Konto
2. Ungewöhnlicher Datenupload zu einer externen IP-Adresse
3. Antivirus-Warnung für eine temporäre Datei
4. Unbekanntes USB-Gerät angeschlossen
```

### Few-Shot Prompting

Bei Few-Shot Prompting geben Sie dem Modell einige Beispiele für die erwartete Antwort, bevor Sie die eigentliche Aufgabe stellen. Dies hilft dem Modell, das gewünschte Format und die Logik zu verstehen.

**Beispiel:**
```
Klassifiziere die folgenden Sicherheitswarnungen nach Schweregrad (kritisch, hoch, mittel, niedrig):

Beispiele:
- Unbefugter Zugriff auf Finanzunterlagen -> kritisch
- Verdächtige PowerShell-Befehle -> hoch
- Fehlgeschlagene VPN-Anmeldung -> mittel
- Veraltete Software erkannt -> niedrig

Jetzt klassifiziere diese Warnungen:
1. Mehrere fehlgeschlagene Anmeldeversuche für ein Admin-Konto
2. Ungewöhnlicher Datenupload zu einer externen IP-Adresse
3. Antivirus-Warnung für eine temporäre Datei
4. Unbekanntes USB-Gerät angeschlossen
```

## Beispiele effektiv in Prompts einbauen

### 1. Format und Struktur demonstrieren

Verwenden Sie Beispiele, um das gewünschte Format und die Struktur der Antwort zu zeigen.

**Beispiel:**
```
Erstelle Beschreibungen für die folgenden Sicherheitsvorfälle im Format:
[Vorfall-ID] - [Datum] - [Kurzbeschreibung]
[Betroffene Systeme]
[Auswirkung]
[Empfohlene Maßnahmen]

Beispiel:
INC-2023-001 - 15.03.2023 - Phishing-Kampagne gegen Finanzabteilung
Betroffene Systeme: 3 Workstations in der Finanzabteilung
Auswirkung: Potenzieller Zugriff auf Finanzdaten, keine bestätigte Datenkompromittierung
Empfohlene Maßnahmen: Passwörter zurücksetzen, Endpunkt-Scan durchführen, Phishing-Training für Finanzteam

Jetzt erstelle Beschreibungen für:
1. Verdächtige Anmeldung aus dem Ausland
2. Malware-Erkennung auf einem Server
```

### 2. Logik und Denkprozess zeigen

Verwenden Sie Beispiele, um die Logik und den Denkprozess zu demonstrieren, den Sie in der Antwort erwarten.

**Beispiel:**
```
Analysiere die folgenden Netzwerkverbindungen und identifiziere verdächtige Aktivitäten. Erkläre deine Analyse.

Beispiel:
Verbindung: 192.168.1.105:49234 -> 203.0.113.42:445
Analyse: Verdächtig. Ein interner Host (192.168.1.105) verbindet sich zu Port 445 (SMB) einer externen IP-Adresse. SMB-Verbindungen sollten normalerweise nicht über das Internet gehen und könnten auf einen Datenexfiltrations-Versuch oder eine Command-and-Control-Verbindung hindeuten.

Jetzt analysiere:
1. 192.168.1.110:52413 -> 198.51.100.73:22
2. 192.168.1.115:63142 -> 172.16.0.5:3389
```

## Praktische Übung: Prompts mit Kontext und Beispielen

Lassen Sie uns einige Prompts mit Kontext und Beispielen für SOC-Aufgaben erstellen:

1. Erstellen Sie einen Few-Shot Prompt für die Klassifizierung von Phishing-E-Mails.
2. Formulieren Sie einen Prompt mit detailliertem Kontext für die Analyse von Netzwerkverkehr.
3. Entwickeln Sie einen Prompt mit Beispielen für die Erstellung von Incident Response-Berichten.

## Challenge: Few-Shot Prompt für die Klassifizierung von Sicherheitswarnungen

**Aufgabe:**

Entwickeln Sie einen umfassenden Few-Shot Prompt für ein Gemini-Modell, das Ihrem SOC-Team bei der Klassifizierung von Sicherheitswarnungen helfen soll. Der Prompt sollte:

1. Einen klaren Kontext für die Klassifizierungsaufgabe bieten
2. Mindestens 3 Beispiele für verschiedene Schweregrade enthalten
3. Die Logik hinter der Klassifizierung erklären
4. Spezifische Kriterien für jede Schweregradkategorie definieren
5. Mindestens 5 neue Sicherheitswarnungen zur Klassifizierung enthalten

Denken Sie daran, SOC-spezifische Terminologie und realistische Szenarien zu verwenden, um den Prompt praxisnah zu gestalten.

## Zusammenfassung

In dieser Lektion haben wir gelernt:
- Wie wichtig Kontext in Prompts ist und wie man ihn effektiv bereitstellt
- Den Unterschied zwischen Zero-Shot und Few-Shot Prompting
- Wie man Beispiele verwendet, um Format, Struktur und Logik zu demonstrieren
- Wie man Prompts mit relevanten Informationen anreichert, um präzisere Antworten zu erhalten

In der nächsten Lektion werden wir uns mit fortgeschrittenen Prompt-Techniken befassen, darunter Chain-of-Thought Prompting und rollenbasierte Prompts.
