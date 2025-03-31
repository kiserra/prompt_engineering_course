# Interaktive Lektion 6: Gemini API Integration und Automatisierung

## Lernziele
- Gemini API in Workflows integrieren
- Prompt-basierte Automatisierung verstehen
- Eigene Prompt-Templates erstellen

## Einführung

Willkommen zur sechsten Lektion unseres Prompt Engineering Kurses! In dieser Lektion werden wir uns damit befassen, wie wir die Gemini API in unsere Workflows integrieren und SOC-Aufgaben mit Hilfe von Prompts automatisieren können.

## Grundlagen der Gemini API

Die Gemini API ermöglicht es uns, die Fähigkeiten von Gemini direkt in unsere Anwendungen und Workflows zu integrieren. Dadurch können wir Prompt Engineering für die Automatisierung von Aufgaben nutzen.

### Wichtige Komponenten der Gemini API

1. **API-Schlüssel**: Für die Authentifizierung bei der API
2. **Modellauswahl**: Verschiedene Gemini-Modelle für unterschiedliche Anforderungen
3. **Prompt-Parameter**: Steuerung des Modellverhaltens
4. **Antwortformate**: Strukturierte Ausgaben für die Weiterverarbeitung

### Grundlegende Parameter für die API

- **Temperature**: Steuert die Kreativität vs. Determinismus (0.0 - 1.0)
- **Top-k** und **Top-p**: Beeinflussen die Vielfalt der Antworten
- **Max Output Tokens**: Begrenzt die Länge der Antwort
- **Safety Settings**: Steuert die Inhaltsfilterung

## Prompt-Templates und deren Anpassung

Prompt-Templates sind wiederverwendbare Prompt-Strukturen, die für bestimmte Aufgaben optimiert sind. Sie können als Grundlage für verschiedene Anwendungsfälle dienen und nach Bedarf angepasst werden.

### Aufbau eines Prompt-Templates

Ein effektives Prompt-Template besteht aus mehreren Komponenten:

1. **Statischer Teil**: Gleichbleibende Anweisungen und Kontext
2. **Dynamischer Teil**: Platzhalter für variable Informationen
3. **Formatierungsanweisungen**: Vorgaben für das Ausgabeformat
4. **Beispiele**: Demonstrationen des erwarteten Verhaltens

### Beispiel für ein SOC-Prompt-Template

```
Du bist ein SOC-Analyst mit Spezialisierung auf {{SPEZIALISIERUNG}}. Analysiere die folgenden {{DATENTYP}} und identifiziere mögliche Sicherheitsbedrohungen.

Daten:
{{DATEN}}

Berücksichtige dabei folgende Faktoren:
- Bekannte Indikatoren für {{BEDROHUNGSTYP}}
- Typische Muster für diese Art von Aktivität
- Kontext des Unternehmens: {{UNTERNEHMENSKONTEXT}}

Deine Analyse sollte folgende Abschnitte enthalten:
1. Zusammenfassung der Ergebnisse
2. Identifizierte verdächtige Aktivitäten
3. Schweregrad-Bewertung (hoch, mittel, niedrig)
4. Empfohlene Maßnahmen
5. Zusätzliche Untersuchungsschritte

Formatiere deine Antwort als strukturierten Bericht mit Markdown-Überschriften.
```

### Anpassung von Templates für spezifische Anwendungsfälle

Dieses Template kann für verschiedene SOC-Aufgaben angepasst werden, indem die Platzhalter entsprechend gefüllt werden:

- **Phishing-Analyse**: SPEZIALISIERUNG = "E-Mail-Sicherheit", DATENTYP = "E-Mail-Header und -Inhalt"
- **Malware-Analyse**: SPEZIALISIERUNG = "Malware-Analyse", DATENTYP = "Prozess- und Netzwerkaktivitäten"
- **Netzwerk-Analyse**: SPEZIALISIERUNG = "Netzwerksicherheit", DATENTYP = "Netzwerkverkehrslogs"

## Automatisierung von SOC-Aufgaben mit Prompts

Die Kombination aus Gemini API und gut gestalteten Prompts ermöglicht die Automatisierung verschiedener SOC-Aufgaben.

### Typische Automatisierungsszenarien

1. **Erste Bewertung von Warnmeldungen**: Automatische Analyse und Priorisierung von Sicherheitswarnungen
2. **Anreicherung von Vorfällen**: Automatisches Hinzufügen von Kontext und Threat Intelligence
3. **Erstellung von Berichten**: Automatische Generierung von Zusammenfassungen und Berichten
4. **Empfehlungen für Maßnahmen**: Vorschläge für nächste Schritte basierend auf Vorfallsdetails

### Beispiel: Automatisierung der ersten Bewertung von Warnmeldungen

```python
import requests
import json

# Gemini API-Konfiguration
API_KEY = "YOUR_API_KEY"
API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent"

# Prompt-Template für die Bewertung von Warnmeldungen
def create_alert_assessment_prompt(alert_data):
    return f"""
    Du bist ein SOC-Analyst, der Sicherheitswarnungen bewertet. Analysiere die folgende Warnmeldung und bewerte ihre Priorität.

    Warnmeldung:
    {alert_data}

    Bewerte diese Warnung nach folgenden Kriterien:
    1. Schweregrad (kritisch, hoch, mittel, niedrig)
    2. Wahrscheinlichkeit eines echten Sicherheitsvorfalls (hoch, mittel, niedrig)
    3. Potenzielle Auswirkungen
    4. Empfohlene nächste Schritte

    Gib deine Bewertung im JSON-Format zurück mit den Feldern: severity, likelihood, impact, recommended_actions.
    """

# Funktion zum Aufrufen der Gemini API
def assess_alert(alert_data):
    prompt = create_alert_assessment_prompt(alert_data)
    
    headers = {
        "Content-Type": "application/json",
        "x-goog-api-key": API_KEY
    }
    
    data = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "temperature": 0.2,
            "topK": 40,
            "topP": 0.95,
            "maxOutputTokens": 1024
        }
    }
    
    response = requests.post(API_URL, headers=headers, json=data)
    result = response.json()
    
    # Extrahiere die Textantwort
    response_text = result["candidates"][0]["content"]["parts"][0]["text"]
    
    # Versuche, die JSON-Antwort zu parsen
    try:
        assessment = json.loads(response_text)
        return assessment
    except:
        # Fallback, wenn die Antwort kein gültiges JSON ist
        return {"error": "Konnte keine strukturierte Bewertung erstellen", "raw_response": response_text}

# Beispiel für die Verwendung
alert_example = """
Quelle: Firewall
Zeit: 2025-03-28 15:42:23
Typ: Mehrere fehlgeschlagene Anmeldeversuche
Benutzer: admin
Quell-IP: 203.0.113.42
Ziel: Interner Server (192.168.1.10)
Details: 15 fehlgeschlagene Anmeldeversuche innerhalb von 2 Minuten
"""

assessment_result = assess_alert(alert_example)
print(json.dumps(assessment_result, indent=2, ensure_ascii=False))
```

## Praktische Übung: Gemini API Integration

Lassen Sie uns einige praktische Übungen zur Integration der Gemini API durchführen:

1. Erstellen Sie ein Prompt-Template für die Analyse von Phishing-E-Mails.
2. Entwickeln Sie ein einfaches Python-Skript, das die Gemini API verwendet, um Sicherheitslogs zu analysieren.
3. Entwerfen Sie einen automatisierten Workflow für die Erstellung von Incident-Response-Berichten mit Hilfe der Gemini API.

## Challenge: Prompt-Template für wiederkehrende SOC-Aufgaben

**Aufgabe:**

Entwickeln Sie ein umfassendes Prompt-Template für eine wiederkehrende SOC-Aufgabe Ihrer Wahl (z.B. Malware-Analyse, Phishing-Bewertung, Vulnerability Assessment). Das Template sollte:

1. Klar definierte Platzhalter für variable Informationen enthalten
2. Detaillierte Anweisungen für das Modell bieten
3. Spezifische Formatierungsanforderungen für die Ausgabe definieren
4. Beispiele für die erwartete Ausgabe enthalten
5. Anpassbar sein für verschiedene Varianten der Aufgabe

Erstellen Sie zusätzlich ein einfaches Konzept für ein Python-Skript, das dieses Template mit der Gemini API verwenden würde, um die Aufgabe zu automatisieren.

## Zusammenfassung

In dieser Lektion haben wir gelernt:
- Die Grundlagen der Gemini API und ihrer wichtigsten Parameter
- Wie man Prompt-Templates erstellt und für verschiedene Anwendungsfälle anpasst
- Wie man SOC-Aufgaben mit Hilfe von Prompts und der Gemini API automatisieren kann
- Praktische Beispiele für die Integration von Gemini in SOC-Workflows

In der nächsten Lektion werden wir uns mit Best Practices und häufigen Fallstricken beim Prompt Engineering befassen.
