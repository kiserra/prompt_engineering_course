# Grundlagen des Prompt Engineering für Gemini

## Was ist ein Prompt?

Ein Prompt ist eine natürlichsprachliche Anfrage, die an ein Sprachmodell gesendet wird, um eine Antwort zu erhalten. Prompts können Fragen, Anweisungen, Kontextinformationen, Beispiele und teilweise Eingaben enthalten, die das Modell vervollständigen oder fortsetzen soll. Nachdem das Modell einen Prompt erhalten hat, kann es je nach Modelltyp Text, Embeddings, Code, Bilder, Videos, Musik und mehr generieren.

## Prompt-Inhaltstypen

Prompts können einen oder mehrere der folgenden Inhaltstypen enthalten:

### 1. Eingabe (erforderlich)

Eine Eingabe ist der Text im Prompt, für den das Modell eine Antwort liefern soll, und ist ein erforderlicher Inhaltstyp. Eingaben können sein:

#### Frage-Eingabe
Eine Frage, die Sie dem Modell stellen und die das Modell beantwortet.

**Beispiel:**
```
Was ist ein guter Name für ein Blumengeschäft, das sich auf den Verkauf von Sträußen aus getrockneten Blumen spezialisiert hat? Erstelle eine Liste mit 10 Optionen, nur mit den Namen.
```

#### Aufgaben-Eingabe
Eine Aufgabe, die Sie vom Modell ausführen lassen möchten.

**Beispiel:**
```
Gib mir eine einfache Liste mit nur den Dingen, die ich auf einen Campingausflug mitnehmen muss. Die Liste sollte 10 Elemente enthalten.
```

#### Entitäts-Eingabe
Eine Entität, auf der das Modell eine Aktion ausführt, wie klassifizieren oder zusammenfassen.

**Beispiel:**
```
Klassifiziere die folgenden Elemente als [groß, klein].
Elefant
Maus
Schnecke
```

#### Vervollständigungs-Eingabe
Text, den das Modell vervollständigen oder fortsetzen soll.

**Beispiel:**
```
Vervollständige den folgenden Prompt: Einige einfache Strategien zur Überwindung einer Schreibblockade sind...
```

### 2. Kontext (optional)

Kontext kann Folgendes sein:
- Anweisungen, die angeben, wie sich das Modell verhalten soll
- Informationen, die das Modell verwendet oder auf die es sich bezieht, um eine Antwort zu generieren

**Beispiel:**
```
Murmeln:
Farbe: rot
Anzahl: 12
Farbe: blau
Anzahl: 28
Farbe: gelb
Anzahl: 15
Farbe: grün
Anzahl: 17

Wie viele grüne Murmeln gibt es?
```

### 3. Beispiele (optional)

Beispiele sind Eingabe-Ausgabe-Paare, die Sie in den Prompt aufnehmen, um dem Modell ein Beispiel für eine ideale Antwort zu geben. Die Einbeziehung von Beispielen in den Prompt ist eine effektive Strategie zur Anpassung des Antwortformats.

**Beispiel:**
```
Klassifiziere das Folgende.
Optionen:
- Rotwein
- Weißwein

Text: Chardonnay
Die Antwort ist: Weißwein
Text: Cabernet
Die Antwort ist: Rotwein
Text: Moscato
Die Antwort ist: Weißwein

Text: Riesling
Die Antwort ist:
```

## Best Practices für Prompt Engineering

1. **Klare und präzise Anweisungen geben**: Je spezifischer Ihre Anweisungen sind, desto besser kann das Modell verstehen, was Sie möchten.

2. **Kontext bereitstellen**: Geben Sie relevante Hintergrundinformationen, um dem Modell zu helfen, Ihre Anfrage besser zu verstehen.

3. **Beispiele verwenden**: Zeigen Sie dem Modell, wie eine ideale Antwort aussehen sollte, indem Sie Beispiele für Eingabe-Ausgabe-Paare bereitstellen.

4. **Strukturierte Prompts verwenden**: Organisieren Sie Ihre Prompts in logische Abschnitte, um die Klarheit zu verbessern.

5. **Iterativ arbeiten**: Verfeinern Sie Ihre Prompts basierend auf den erhaltenen Antworten, um bessere Ergebnisse zu erzielen.

6. **Spezifische Ausgabeformate anfordern**: Geben Sie an, in welchem Format Sie die Antwort haben möchten (Liste, Tabelle, JSON usw.).

7. **Komplexe Aufgaben aufteilen**: Teilen Sie komplexe Aufgaben in kleinere, überschaubare Schritte auf.

8. **Rollenanweisungen verwenden**: Weisen Sie dem Modell eine bestimmte Rolle zu, um seine Antworten zu lenken (z.B. "Agiere als Cybersecurity-Experte").

9. **Grenzen setzen**: Definieren Sie klar, was das Modell tun soll und was nicht.

10. **Experimentieren und anpassen**: Verschiedene Formulierungen und Strukturen ausprobieren, um optimale Ergebnisse zu erzielen.
