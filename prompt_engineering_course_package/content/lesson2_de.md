# Interaktive Lektion 2: Instruction Prompts für SOC-Teams

## Lernziele
- Verstehen, wie Instruction Prompts funktionieren
- Effektive Anweisungen für Gemini formulieren können
- SOC-spezifische Instruction Prompts erstellen

## Einführung

Willkommen zur zweiten Lektion unseres Prompt Engineering Kurses! In dieser Lektion werden wir uns mit Instruction Prompts befassen und lernen, wie wir sie speziell für SOC-Teams optimieren können.

## Was sind Instruction Prompts?

Instruction Prompts sind Anweisungen, die dem Sprachmodell genau sagen, was es tun soll. Sie sind besonders nützlich, wenn Sie spezifische Aufgaben erledigen oder bestimmte Informationen erhalten möchten. Im Gegensatz zu einfachen Fragen geben Instruction Prompts dem Modell klare Anweisungen über die gewünschte Aktion und das erwartete Ergebnis.

## Aufbau von Instruction Prompts

Ein effektiver Instruction Prompt besteht aus mehreren Elementen:

1. **Rollenanweisung**: Definiert, als wer oder was das Modell antworten soll
2. **Aufgabenbeschreibung**: Beschreibt die zu erledigende Aufgabe
3. **Formatierungsanweisungen**: Gibt an, wie die Antwort strukturiert sein soll
4. **Einschränkungen**: Definiert Grenzen oder spezifische Anforderungen
5. **Beispiele**: Zeigt, wie die Antwort aussehen sollte

## Best Practices für Instruction Prompts

### 1. Klare Rollenanweisung geben

Weisen Sie dem Modell eine spezifische Rolle zu, die für die Aufgabe relevant ist.

**Beispiel:**
```
Du bist ein erfahrener SOC-Analyst, der ein Team bei der Untersuchung von Sicherheitsvorfällen unterstützt.
```

### 2. Anleitung statt Befehle

Formulieren Sie Ihre Anfragen als Anleitungen statt als direkte Befehle.

**Weniger effektiv:**
```
Erstelle eine Liste von IoCs.
```

**Effektiver:**
```
Als SOC-Analyst würdest du eine Liste von Indicators of Compromise (IoCs) erstellen, die bei der Untersuchung eines Ransomware-Angriffs hilfreich wären. Bitte teile diese Liste.
```

### 3. Aufgabe und Ziele klar spezifizieren

Definieren Sie genau, was Sie erreichen möchten.

**Beispiel:**
```
Erstelle einen Schritt-für-Schritt-Leitfaden zur Untersuchung verdächtiger Netzwerkaktivitäten. Der Leitfaden sollte für Junior-Analysten verständlich sein und die wichtigsten Indikatoren für mögliche Eindringlinge hervorheben.
```

### 4. Formatierungsanweisungen geben

Geben Sie an, wie die Antwort strukturiert sein soll.

**Beispiel:**
```
Strukturiere deine Antwort in folgende Abschnitte:
1. Erste Anzeichen für einen Angriff
2. Zu sammelnde Beweise
3. Analyse-Schritte
4. Empfohlene Maßnahmen
```

### 5. Einschränkungen definieren

Setzen Sie klare Grenzen für die Antwort.

**Beispiel:**
```
Konzentriere dich ausschließlich auf Windows-Umgebungen und berücksichtige keine Cloud-Dienste.
```

## SOC-spezifische Instruction Prompts

Hier sind einige Beispiele für effektive Instruction Prompts, die speziell für SOC-Teams relevant sind:

### Beispiel 1: Incident Response

```
Du bist ein Senior SOC-Analyst mit Spezialisierung auf Incident Response. Erstelle einen detaillierten Reaktionsplan für einen vermuteten Ransomware-Angriff. Der Plan sollte folgende Abschnitte enthalten:

1. Sofortige Eindämmungsmaßnahmen
2. Beweissicherung
3. Analyse der Angriffsvektoren
4. Wiederherstellungsschritte
5. Nachbereitung und Lessons Learned

Berücksichtige dabei besonders die Kommunikation mit dem Management und anderen Abteilungen. Der Plan sollte für ein mittelgroßes Unternehmen mit Windows-Infrastruktur und einigen Cloud-Diensten geeignet sein.
```

### Beispiel 2: Threat Hunting

```
Als erfahrener Threat Hunter sollst du eine Anleitung zur proaktiven Suche nach Anzeichen einer Advanced Persistent Threat (APT) in einem Unternehmensnetzwerk erstellen. Deine Anleitung sollte:

- Die wichtigsten Indikatoren für APT-Aktivitäten auflisten
- Spezifische Log-Quellen identifizieren, die überprüft werden sollten
- Konkrete Suchabfragen für SIEM-Systeme vorschlagen
- Eine Priorisierungsstrategie für Alarme empfehlen

Halte die Anleitung praktisch und umsetzbar für ein SOC-Team mit begrenzten Ressourcen.
```

## Praktische Übung: Instruction Prompts für SOC-Aufgaben

Lassen Sie uns einige Instruction Prompts für typische SOC-Aufgaben erstellen:

1. Erstellen Sie einen Instruction Prompt für die Analyse von Firewall-Logs.
2. Formulieren Sie einen Instruction Prompt für die Erstellung einer Phishing-Erkennungscheckliste.
3. Entwickeln Sie einen Instruction Prompt für die Bewertung der Schwere eines Sicherheitsvorfalls.

## Challenge: Komplexer Instruction Prompt für Incident Response

**Aufgabe:**

Entwickeln Sie einen umfassenden Instruction Prompt für ein Gemini-Modell, das Ihrem SOC-Team bei der Reaktion auf einen vermuteten Datenleck helfen soll. Der Prompt sollte:

1. Dem Modell eine klare Rolle zuweisen
2. Die spezifische Aufgabe und Ziele definieren
3. Formatierungsanweisungen enthalten
4. Relevante Einschränkungen setzen
5. Einen beispielhaften Kontext für den Datenleck bereitstellen

Denken Sie daran, die Best Practices für Instruction Prompts anzuwenden und den Prompt speziell für die Bedürfnisse eines SOC-Teams zu optimieren.

## Zusammenfassung

In dieser Lektion haben wir gelernt:
- Was Instruction Prompts sind und wie sie funktionieren
- Wie man effektive Instruction Prompts mit klaren Rollenanweisungen, Aufgabenbeschreibungen und Formatierungsanweisungen erstellt
- Wie man SOC-spezifische Instruction Prompts für verschiedene Sicherheitsaufgaben entwickelt

In der nächsten Lektion werden wir uns mit der Verwendung von Kontext und Beispielen in Prompts befassen, um noch präzisere und nützlichere Antworten von Gemini zu erhalten.
