# Interaktive Lektion 1: Grundlagen des Prompt Engineering

## Lernziele
- Verstehen, was Prompts sind und wie sie funktionieren
- Kennenlernen der verschiedenen Prompt-Typen
- Erste einfache Prompts formulieren

## Einführung

Willkommen zur ersten Lektion unseres Prompt Engineering Kurses! In dieser Lektion werden wir die Grundlagen des Prompt Engineerings kennenlernen und verstehen, wie wir effektive Prompts für Gemini formulieren können.

## Was ist ein Prompt?

Ein Prompt ist eine natürlichsprachliche Anfrage, die an ein Sprachmodell wie Gemini gesendet wird, um eine Antwort zu erhalten. Prompts können Fragen, Anweisungen, Kontextinformationen, Beispiele und teilweise Eingaben enthalten, die das Modell vervollständigen oder fortsetzen soll.

## Die Anatomie eines effektiven Prompts

Ein effektiver Prompt besteht aus mehreren Komponenten:

1. **Eingabe (erforderlich)**: Der Hauptteil des Prompts, für den das Modell eine Antwort liefern soll
2. **Kontext (optional)**: Hintergrundinformationen oder Anweisungen, die dem Modell helfen, die Anfrage besser zu verstehen
3. **Beispiele (optional)**: Eingabe-Ausgabe-Paare, die dem Modell zeigen, wie eine ideale Antwort aussehen sollte

## Prompt-Typen

### 1. Frage-Eingabe
Eine Frage, die Sie dem Modell stellen und die das Modell beantwortet.

**Beispiel:**
```
Was sind die häufigsten Arten von Cyberangriffen auf Unternehmensnetzwerke?
```

### 2. Aufgaben-Eingabe
Eine Aufgabe, die Sie vom Modell ausführen lassen möchten.

**Beispiel:**
```
Erstelle eine Liste mit 5 Best Practices für sichere Passwörter.
```

### 3. Entitäts-Eingabe
Eine Entität, auf der das Modell eine Aktion ausführt, wie klassifizieren oder zusammenfassen.

**Beispiel:**
```
Klassifiziere die folgenden Sicherheitsvorfälle als [hoch, mittel, niedrig] Priorität:
1. Unbekannte IP-Adresse versucht mehrfach, sich als Administrator anzumelden
2. Mitarbeiter hat ein Dokument auf einem öffentlichen Share gespeichert
3. Antivirus-Software meldet eine potenzielle Malware in einer E-Mail-Anlage
```

### 4. Vervollständigungs-Eingabe
Text, den das Modell vervollständigen oder fortsetzen soll.

**Beispiel:**
```
Vervollständige den folgenden Incident Response Plan:
1. Identifizierung des Vorfalls
2. Eindämmung des Vorfalls
3. ...
```

## Best Practices für Prompt Engineering

1. **Klare und präzise Anweisungen geben**: Je spezifischer Ihre Anweisungen sind, desto besser kann das Modell verstehen, was Sie möchten.

2. **Rolle definieren**: Weisen Sie dem Modell eine spezifische Rolle zu, um seine Antworten zu lenken.

3. **Anleitung statt Befehle**: Formulieren Sie Ihre Anfragen als Anleitungen statt als direkte Befehle.

4. **Aufgabe und Ziele klar spezifizieren**: Definieren Sie genau, was Sie erreichen möchten.

5. **Kontext bereitstellen**: Geben Sie relevante Hintergrundinformationen, um dem Modell zu helfen, Ihre Anfrage besser zu verstehen.

## Praktische Übung: Einfache Prompts erstellen

Lassen Sie uns einige einfache Prompts für allgemeine SOC-Aufgaben erstellen:

1. Erstellen Sie einen Prompt, um eine Zusammenfassung der neuesten Bedrohungen für Unternehmensnetzwerke zu erhalten.
2. Formulieren Sie einen Prompt, um Schritte zur Untersuchung einer verdächtigen E-Mail zu erhalten.
3. Entwickeln Sie einen Prompt, um eine Checkliste für die Reaktion auf einen Phishing-Angriff zu erstellen.

## Challenge: Prompt-Verbesserung

**Ausgangspunkt:**
```
Erkläre Malware.
```

**Verbesserte Version:**
```
Du bist ein Cybersecurity-Experte, der einem SOC-Team-Mitglied hilft. Erkläre die verschiedenen Arten von Malware, ihre typischen Infektionswege und wie man sie erkennen kann. Gib konkrete Beispiele und organisiere deine Antwort in klar definierte Abschnitte.
```

## Ihre Aufgabe

Verbessern Sie den folgenden einfachen Prompt, um genauere und nützlichere Antworten für Ihr SOC-Team zu erhalten:

```
Wie erkenne ich einen Datenleck?
```

Denken Sie daran, die Best Practices anzuwenden:
- Definieren Sie eine Rolle für das Modell
- Geben Sie klare Anweisungen
- Spezifizieren Sie die Aufgabe und Ziele
- Fügen Sie relevanten Kontext hinzu

## Zusammenfassung

In dieser Lektion haben wir gelernt:
- Was Prompts sind und wie sie funktionieren
- Die verschiedenen Arten von Prompts: Frage, Aufgabe, Entität und Vervollständigung
- Wie man effektive Prompts formuliert, indem man Best Practices anwendet

In der nächsten Lektion werden wir uns eingehender mit Instruction Prompts befassen und lernen, wie wir sie speziell für SOC-Teams optimieren können.
