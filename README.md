# Docker-Container für den Prompt Engineering Kurs

Diese Anleitung beschreibt, wie Sie den Prompt Engineering Kurs für SOC-Teams in einem Docker-Container bereitstellen können.

## Voraussetzungen

- Docker installiert auf Ihrem System
- Docker Compose installiert auf Ihrem System (optional, aber empfohlen)
- Gemini API-Schlüssel (für die vollständige Funktionalität der interaktiven Übungen)

## Schnellstart mit Docker Compose

1. Klonen oder kopieren Sie dieses Verzeichnis auf Ihren Server
2. Navigieren Sie zum Verzeichnis `prompt_engineering_course_docker`
3. Bearbeiten Sie die Datei `docker-compose.yml` und ersetzen Sie `YOUR_API_KEY` mit Ihrem Gemini API-Schlüssel
4. Führen Sie den folgenden Befehl aus:

```bash
docker-compose up -d
```

5. Der Kurs ist nun unter http://localhost:8080 verfügbar

## Manuelles Bauen und Ausführen mit Docker

Wenn Sie Docker Compose nicht verwenden möchten, können Sie den Container auch manuell bauen und ausführen:

1. Navigieren Sie zum Verzeichnis `prompt_engineering_course_docker`
2. Bauen Sie das Docker-Image:

```bash
docker build -t prompt-engineering-course .
```

3. Starten Sie den Container:

```bash
docker run -d -p 8080:80 -e GEMINI_API_KEY=YOUR_API_KEY --name prompt-engineering-course prompt-engineering-course
```

4. Der Kurs ist nun unter http://localhost:8080 verfügbar

## Konfiguration

### Port ändern

Wenn Sie einen anderen Port als 8080 verwenden möchten:

- Bei Docker Compose: Ändern Sie in der `docker-compose.yml` Datei den Port in der `ports`-Sektion (z.B. `"9090:80"`)
- Bei manuellem Docker-Befehl: Ändern Sie den Port im `-p` Parameter (z.B. `-p 9090:80`)

### Gemini API-Schlüssel

Der Gemini API-Schlüssel wird für die interaktiven Übungen benötigt. Sie können ihn auf folgende Weise konfigurieren:

- Bei Docker Compose: Ändern Sie den Wert von `GEMINI_API_KEY` in der `docker-compose.yml` Datei
- Bei manuellem Docker-Befehl: Setzen Sie die Umgebungsvariable mit dem `-e` Parameter

## Fehlerbehebung

### Container startet nicht

Überprüfen Sie die Container-Logs:

```bash
docker logs prompt-engineering-course
```

### Interaktive Übungen funktionieren nicht

- Stellen Sie sicher, dass Sie einen gültigen Gemini API-Schlüssel konfiguriert haben
- Überprüfen Sie die Browser-Konsole auf JavaScript-Fehler

## Sicherheitshinweise

- In einer Produktionsumgebung sollten Sie den API-Schlüssel nicht direkt in der `docker-compose.yml` Datei speichern, sondern eine sichere Methode wie Docker Secrets oder Umgebungsvariablen verwenden
- Erwägen Sie die Verwendung von HTTPS, wenn der Kurs öffentlich zugänglich sein soll

## Anpassung

Sie können den Kurs anpassen, indem Sie die Dateien im Container bearbeiten oder ein eigenes Image erstellen:

1. Ändern Sie die Kursinhalte im Verzeichnis `prompt_engineering_course_package`
2. Bauen Sie das Docker-Image neu
3. Starten Sie den Container neu
