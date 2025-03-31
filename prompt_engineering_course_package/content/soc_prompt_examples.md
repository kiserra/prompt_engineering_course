# SOC-spezifische Prompt-Beispiele

Dieses Dokument enthält eine Sammlung von SOC-spezifischen Prompt-Beispielen, die in verschiedenen Szenarien im Security Operations Center verwendet werden können. Die Beispiele sind nach Anwendungsfällen kategorisiert und enthalten sowohl den Prompt als auch eine Erklärung der verwendeten Techniken.

## 1. Log-Analyse und Incident Response

### Beispiel 1: Analyse von Firewall-Logs

**Prompt:**
```
Du bist ein erfahrener SOC-Analyst mit Spezialisierung auf Netzwerksicherheit. Analysiere die folgenden Firewall-Logs und identifiziere mögliche verdächtige Aktivitäten.

Firewall-Logs:
2025-03-28 02:15:23 DENY TCP 203.0.113.42:45678 -> 192.168.1.25:3389 (Ziel nicht erreichbar)
2025-03-28 02:15:24 DENY TCP 203.0.113.42:45679 -> 192.168.1.26:3389 (Ziel nicht erreichbar)
2025-03-28 02:15:25 DENY TCP 203.0.113.42:45680 -> 192.168.1.27:3389 (Ziel nicht erreichbar)
2025-03-28 02:15:26 DENY TCP 203.0.113.42:45681 -> 192.168.1.28:3389 (Ziel nicht erreichbar)
2025-03-28 02:15:27 DENY TCP 203.0.113.42:45682 -> 192.168.1.29:3389 (Ziel nicht erreichbar)
2025-03-28 02:15:28 DENY TCP 203.0.113.42:45683 -> 192.168.1.30:3389 (Ziel nicht erreichbar)
2025-03-28 02:16:01 ALLOW TCP 203.0.113.42:45690 -> 192.168.1.35:3389 (Verbindung hergestellt)

Berücksichtige folgende Faktoren in deiner Analyse:
1. Muster in den Quell- und Ziel-IPs
2. Zeitliche Abfolge der Ereignisse
3. Zielports und deren bekannte Dienste
4. Mögliche Angriffsszenarien basierend auf diesen Logs

Strukturiere deine Antwort in folgende Abschnitte:
- Identifizierte verdächtige Aktivitäten
- Mögliches Angriffsszenario
- Empfohlene nächste Schritte für die Untersuchung
- Empfehlungen zur Eindämmung
```

**Verwendete Techniken:**
- Rollenanweisung (SOC-Analyst mit Spezialisierung)
- Spezifischer Kontext (Firewall-Logs)
- Strukturierte Aufgabenbeschreibung (Berücksichtige folgende Faktoren)
- Formatierungsanweisungen (Strukturiere deine Antwort)

### Beispiel 2: Analyse eines Phishing-Verdachts

**Prompt:**
```
Du bist ein Cybersecurity-Experte, der sich auf Phishing-Angriffe spezialisiert hat. Ein Mitarbeiter hat eine verdächtige E-Mail erhalten und an das SOC-Team weitergeleitet. Analysiere die folgenden E-Mail-Header und -Inhalte und bewerte, ob es sich um einen Phishing-Versuch handelt.

E-Mail-Header:
From: security-update@microsoft-secure-login.com
Reply-To: admin@microsoft-secure-login.com
Subject: Dringende Sicherheitswarnung - Sofortige Aktion erforderlich
Date: Fri, 28 Mar 2025 09:23:45 +0000
To: j.schmidt@unternehmen.de
X-Mailer: PHPMailer 6.5.0
MIME-Version: 1.0
Content-Type: multipart/alternative; boundary="b1_f8a7d6c5e4b3a2"

E-Mail-Inhalt:
Sehr geehrter Kunde,

Wir haben ungewöhnliche Anmeldeaktivitäten in Ihrem Microsoft-Konto festgestellt. Aus Sicherheitsgründen müssen Sie Ihr Passwort sofort zurücksetzen.

Klicken Sie auf den folgenden Link, um Ihr Passwort zu aktualisieren:
[Passwort zurücksetzen](https://microsoft-secure-login.com/reset-password?user=j.schmidt@unternehmen.de&token=f8a7d6c5e4b3a2)

Wenn Sie nicht innerhalb von 24 Stunden reagieren, wird Ihr Konto gesperrt.

Mit freundlichen Grüßen,
Das Microsoft-Sicherheitsteam

Führe eine detaillierte Analyse durch und berücksichtige dabei:
1. Anzeichen für Phishing in den E-Mail-Headern
2. Verdächtige Elemente im E-Mail-Inhalt
3. Legitimität der enthaltenen URLs
4. Dringlichkeitselemente und psychologische Taktiken
5. Gesamtbewertung der Wahrscheinlichkeit eines Phishing-Versuchs (hoch, mittel, niedrig)

Gib außerdem Empfehlungen, wie der Mitarbeiter und das SOC-Team reagieren sollten.
```

**Verwendete Techniken:**
- Spezialisierte Rollenanweisung (Cybersecurity-Experte für Phishing)
- Detaillierter Kontext (E-Mail-Header und -Inhalt)
- Spezifische Analysekriterien
- Aufforderung zur Bewertung und Handlungsempfehlung

## 2. Threat Hunting und Anomalieerkennung

### Beispiel 3: Netzwerkverkehrsanalyse

**Prompt:**
```
Du bist ein Threat Hunter in einem SOC-Team. Analysiere die folgenden Netzwerkverkehrsmuster und identifiziere mögliche Anzeichen für eine Command-and-Control (C2) Kommunikation oder Datenexfiltration.

Netzwerkverkehrsdaten:
- Interner Host: 192.168.5.45 (Workstation, Finanzabteilung)
- Externer Host: 45.199.87.123 (Geolokalisierung: Osteuropa)
- Protokoll: HTTPS (Port 443)
- Verbindungsmuster: Alle 4 Stunden für jeweils 15-20 Sekunden
- Datenvolumen: Ausgehend ~2KB, eingehend ~500B pro Verbindung
- Zeitpunkt: Hauptsächlich außerhalb der Geschäftszeiten (22:00 - 06:00 Uhr)
- Zertifikat: Selbstsigniert, erstellt vor 2 Tagen
- DNS-Anfragen: Der interne Host fragt regelmäßig die Domain "cdn-analytics-services.com" ab, die erst vor einer Woche registriert wurde

Typische Aktivitäten des Benutzers der Workstation:
- Finanzanalyst, arbeitet hauptsächlich mit Excel und dem internen Finanzsystem
- Normale Arbeitszeiten: 08:00 - 17:00 Uhr
- Keine geplanten automatisierten Prozesse auf diesem System
- Keine geschäftlichen Verbindungen zu Osteuropa

Analysiere diese Daten mit einem Chain-of-Thought-Ansatz:
1. Bewerte jedes Element der Netzwerkverkehrsdaten einzeln
2. Identifiziere Abweichungen vom normalen Benutzerverhalten
3. Vergleiche die Muster mit bekannten C2- oder Datenexfiltrationstechniken
4. Ziehe eine Schlussfolgerung über die Wahrscheinlichkeit einer Bedrohung
5. Empfehle konkrete nächste Schritte für das SOC-Team

Strukturiere deine Antwort in klar definierte Abschnitte und erkläre deinen Denkprozess.
```

**Verwendete Techniken:**
- Rollenanweisung (Threat Hunter)
- Umfassender Kontext (Netzwerkverkehrsdaten und Benutzerverhalten)
- Chain-of-Thought Prompting
- Strukturierte Aufgabenbeschreibung

### Beispiel 4: Endpunktverhalten-Analyse

**Prompt:**
```
Als SOC-Analyst mit Spezialisierung auf Endpunktsicherheit: Analysiere die folgenden Prozessaktivitäten auf einem Windows-System und identifiziere mögliche Anzeichen für eine Kompromittierung.

Prozessaktivitäten:
1. svchost.exe (PID 4856) gestartet von services.exe (PID 672) - Normal
2. powershell.exe (PID 5923) gestartet von explorer.exe (PID 2104) - Benutzeraktion
3. cmd.exe (PID 6234) gestartet von powershell.exe (PID 5923) mit verstecktem Fenster
4. rundll32.exe (PID 6542) gestartet von cmd.exe (PID 6234)
5. rundll32.exe (PID 6542) lädt eine DLL aus C:\Users\Administrator\AppData\Local\Temp\kb4d5f8.tmp
6. rundll32.exe (PID 6542) erstellt einen geplanten Task "SystemUpdateTask" mit täglicher Ausführung
7. rundll32.exe (PID 6542) nimmt Verbindung zu 185.212.x.x:8080 auf
8. schtasks.exe (PID 7012) gestartet von rundll32.exe (PID 6542)
9. Neuer Registrierungsschlüssel erstellt unter HKCU\Software\Microsoft\Windows\CurrentVersion\Run

Analysiere diese Aktivitäten Schritt für Schritt:
1. Welche Prozesse und Aktionen sind normal und welche sind verdächtig?
2. Welche Indikatoren für eine mögliche Kompromittierung erkennst du?
3. Welche Taktiken, Techniken und Prozeduren (TTPs) könnten hier zum Einsatz kommen?
4. Wie würdest du diesen Vorfall nach dem MITRE ATT&CK Framework kategorisieren?
5. Welche sofortigen Maßnahmen empfiehlst du?

Gib eine detaillierte Analyse mit Begründungen für deine Schlussfolgerungen.
```

**Verwendete Techniken:**
- Rollenanweisung mit Spezialisierung
- Detaillierte Prozessdaten als Kontext
- Schritt-für-Schritt-Analyse (Chain-of-Thought)
- Bezug zu Frameworks (MITRE ATT&CK)

## 3. Vulnerability Management

### Beispiel 5: Priorisierung von Schwachstellen

**Prompt:**
```
Du bist ein Vulnerability Management Spezialist in einem SOC-Team. Nach einem Schwachstellen-Scan wurden die folgenden kritischen und hochriskanten Schwachstellen in der Unternehmensinfrastruktur identifiziert. Hilf dem Team, diese Schwachstellen zu priorisieren und einen Behebungsplan zu erstellen.

Identifizierte Schwachstellen:
1. CVE-2025-1234 - Apache Log4j Remote Code Execution (CVSS 9.8)
   - Betroffen: 15 interne Anwendungsserver
   - Exponiert: Nur intern, hinter Firewall
   - Exploits: Öffentlich verfügbar, aktiv ausgenutzt

2. CVE-2025-5678 - Microsoft Exchange Server Privilege Escalation (CVSS 8.4)
   - Betroffen: 2 E-Mail-Server
   - Exponiert: Extern zugänglich (OWA)
   - Exploits: Proof-of-Concept verfügbar

3. CVE-2025-9012 - Cisco ASA VPN Remote Code Execution (CVSS 9.2)
   - Betroffen: 3 VPN-Gateways
   - Exponiert: Direkt aus dem Internet zugänglich
   - Exploits: Keine öffentlichen Exploits bekannt

4. CVE-2025-3456 - Windows Server SMB Remote Code Execution (CVSS 8.8)
   - Betroffen: 25 Windows-Server
   - Exponiert: Nur intern, segmentiertes Netzwerk
   - Exploits: Öffentlich verfügbar

5. CVE-2025-7890 - Oracle Database Authentication Bypass (CVSS 9.1)
   - Betroffen: 1 Datenbank-Server mit Kundendaten
   - Exponiert: Nur intern, hinter mehreren Sicherheitsschichten
   - Exploits: Keine öffentlichen Exploits bekannt

Berücksichtige bei deiner Priorisierung:
- Schweregrad der Schwachstelle (CVSS-Score)
- Exposition und Zugänglichkeit
- Verfügbarkeit von Exploits
- Geschäftskritikalität der betroffenen Systeme
- Potenzielle Auswirkungen einer erfolgreichen Ausnutzung
- Ressourcenaufwand für die Behebung

Erstelle einen priorisierten Behebungsplan mit Zeitrahmen und spezifischen Empfehlungen für jede Schwachstelle. Begründe deine Priorisierungsentscheidungen.
```

**Verwendete Techniken:**
- Spezialisierte Rollenanweisung
- Strukturierte Daten als Kontext
- Spezifische Bewertungskriterien
- Aufforderung zur Begründung der Entscheidungen

### Beispiel 6: Sicherheitsempfehlungen für neue Technologie

**Prompt:**
```
Als Sicherheitsarchitekt in einem SOC-Team: Die IT-Abteilung plant die Einführung einer neuen Cloud-basierten Kollaborationsplattform für das Unternehmen. Entwickle Sicherheitsempfehlungen und Best Practices für die sichere Implementierung und Nutzung dieser Plattform.

Details zur geplanten Implementierung:
- Microsoft 365 mit SharePoint, Teams und Exchange Online
- Single Sign-On (SSO) über Azure AD
- Zugriff sowohl von Unternehmensgeräten als auch privaten Mobilgeräten
- Externe Freigabe von Dokumenten für Partner und Kunden
- Integration mit bestehenden On-Premises-Systemen über APIs
- Speicherung sensibler Unternehmensdaten und personenbezogener Daten

Erstelle umfassende Sicherheitsempfehlungen, die folgende Bereiche abdecken:
1. Identitäts- und Zugriffsmanagement
2. Datenschutz und Datensicherheit
3. Bedrohungserkennung und -abwehr
4. Compliance und Governance
5. Sicherer Fernzugriff und BYOD-Richtlinien
6. Sicherheitsmonitoring und Incident Response

Für jeden Bereich:
- Identifiziere potenzielle Sicherheitsrisiken
- Empfehle konkrete Sicherheitsmaßnahmen und Konfigurationen
- Schlage relevante Sicherheitstools oder -funktionen vor
- Berücksichtige branchenübliche Best Practices und Compliance-Anforderungen

Strukturiere deine Antwort in klar definierte Abschnitte und priorisiere die Empfehlungen nach Wichtigkeit.
```

**Verwendete Techniken:**
- Rollenanweisung (Sicherheitsarchitekt)
- Detaillierter Kontext zur geplanten Implementierung
- Strukturierte Aufgabenbeschreibung mit spezifischen Bereichen
- Aufforderung zur Priorisierung

## 4. Threat Intelligence

### Beispiel 7: Analyse einer Bedrohungsgruppe

**Prompt:**
```
Du bist ein Threat Intelligence Analyst in einem SOC-Team. Erstelle ein umfassendes Profil der APT-Gruppe "Cobalt Spider" (auch bekannt als "FIN8"), die auf den Finanzsektor abzielt. Das Profil soll dem SOC-Team helfen, Angriffe dieser Gruppe zu erkennen und zu verhindern.

Berücksichtige in deinem Profil:

1. Taktiken, Techniken und Prozeduren (TTPs):
   - Typische Angriffsvektoren und Initial Access-Methoden
   - Bevorzugte Malware und Tools
   - Lateral Movement-Techniken
   - Persistenzmechanismen
   - Exfiltrationsmethoden

2. Indikatoren einer Kompromittierung (IoCs):
   - Typische Netzwerk-Indikatoren (IPs, Domains, URLs)
   - Host-basierte Indikatoren (Dateipfade, Registry-Einträge, Prozessnamen)
   - Malware-Signaturen und Verhaltensweisen

3. Ziele und Motivation:
   - Bevorzugte Zielorganisationen und -branchen
   - Typische Ziele innerhalb einer Organisation
   - Primäre Motivation (finanziell, Spionage, etc.)

4. Abwehr- und Erkennungsstrategien:
   - Spezifische SIEM-Regeln und Alarme
   - Empfohlene Präventionsmaßnahmen
   - Incident Response-Strategien bei Verdacht auf Cobalt Spider-Aktivität

Strukturiere deine Antwort in klar definierte Abschnitte und priorisiere die Informationen nach ihrer Relevanz für die Erkennung und Abwehr. Beziehe dich auf das MITRE ATT&CK Framework, wo angemessen.
```

**Verwendete Techniken:**
- Spezialisierte Rollenanweisung (Threat Intelligence Analyst)
- Strukturierte Aufgabenbeschreibung mit spezifischen Kategorien
- Bezug zu Frameworks (MITRE ATT&CK)
- Aufforderung zur Priorisierung nach Relevanz

### Beispiel 8: Analyse von Threat Intelligence Reports

**Prompt:**
```
Als Threat Intelligence Analyst in einem SOC-Team: Analysiere die folgenden Auszüge aus aktuellen Threat Intelligence Reports und erstelle eine konsolidierte Zusammenfassung der relevanten Bedrohungen für ein Finanzinstitut.

Report 1 (Mandiant):
"Die Bedrohungsgruppe APT41 hat ihre Aktivitäten auf den Finanzsektor in Europa ausgeweitet. Die Gruppe nutzt neuerdings Zero-Day-Schwachstellen in VPN-Lösungen für den initialen Zugriff und setzt eine modifizierte Version der POISONPLUG-Malware ein. Nach der Kompromittierung werden Backdoors installiert und laterale Bewegung zu Finanzsystemen angestrebt."

Report 2 (CrowdStrike):
"CARBON SPIDER (auch bekannt als FIN7) zeigt ein verändertes TTPs-Profil mit Fokus auf Ransomware-Deployment nach Datenexfiltration. Die Gruppe nutzt verstärkt Spear-Phishing mit gefälschten Finanzformularen und hat ihre Infrastruktur auf neue C2-Server umgestellt. Beobachtete IOCs umfassen Verbindungen zu den Domains finance-secure-docs.com und banking-verification-portal.net."

Report 3 (Microsoft):
"Die NOBELIUM-Gruppe (verantwortlich für SolarWinds) hat ihre Angriffskampagne auf Finanzdienstleister und deren Technologiepartner ausgeweitet. Die Gruppe nutzt Supply-Chain-Kompromittierungen und gestohlene OAuth-Tokens für persistenten Zugriff. Besonders besorgniserregend ist die neue Fähigkeit, EDR-Lösungen zu umgehen und sich in der Microsoft 365-Umgebung lateral zu bewegen."

Report 4 (IBM X-Force):
"Wir beobachten eine Zunahme von Angriffen auf SWIFT-Systeme in kleineren Finanzinstituten. Die Angreifer nutzen öffentlich zugängliche Exploits für veraltete Windows-Server und setzen spezialisierte Malware ein, die SWIFT-Transaktionen abfangen und manipulieren kann. Die Kampagne zeigt Ähnlichkeiten mit früheren Aktivitäten der Lazarus-Gruppe."

Erstelle eine konsolidierte Analyse mit:
1. Priorisierung der Bedrohungen basierend auf ihrer Relevanz für ein Finanzinstitut
2. Zusammenfassung der wichtigsten TTPs und IOCs
3. Konkrete Empfehlungen für Erkennungs- und Präventionsmaßnahmen
4. Vorgeschlagene SIEM-Regeln oder Monitoring-Strategien

Berücksichtige dabei die spezifischen Risiken für Finanzinstitute und priorisiere die Bedrohungen nach Aktualität, Zielausrichtung und potenziellen Auswirkungen.
```

**Verwendete Techniken:**
- Rollenanweisung mit Kontext (Threat Intelligence Analyst in einem Finanzinstitut)
- Umfangreiche Informationen aus verschiedenen Quellen
- Aufforderung zur Konsolidierung und Priorisierung
- Spezifische Anforderungen an das Ausgabeformat

## 5. Security Awareness und Training

### Beispiel 9: Erstellung von Sicherheitsrichtlinien

**Prompt:**
```
Du bist ein Cybersecurity-Experte, der für die Erstellung von Sicherheitsrichtlinien und -schulungen verantwortlich ist. Entwickle eine benutzerfreundliche Richtlinie für den sicheren Umgang mit E-Mails, die speziell auf die Bedürfnisse von Mitarbeitern in einem Finanzinstitut zugeschnitten ist.

Die Richtlinie sollte folgende Aspekte abdecken:

1. Erkennung von Phishing-E-Mails:
   - Typische Anzeichen von Phishing-Versuchen
   - Beispiele für Finanzsektor-spezifische Phishing-Angriffe
   - Praktische Tipps zur Überprüfung der Legitimität von E-Mails

2. Sicherer Umgang mit Anhängen und Links:
   - Wann und wie Anhänge geöffnet werden sollten
   - Sicheres Überprüfen von Links vor dem Klicken
   - Umgang mit unerwarteten Dokumenten von bekannten Absendern

3. Vertrauliche Informationen in E-Mails:
   - Welche Informationen niemals per E-Mail gesendet werden sollten
   - Verwendung von Verschlüsselung für sensible Daten
   - Sichere Alternativen für den Austausch vertraulicher Informationen

4. Meldeverfahren für verdächtige E-Mails:
   - Klare Schritte zum Melden verdächtiger E-Mails
   - Kontaktinformationen des Sicherheitsteams
   - Was nach einer Meldung passiert

Die Richtlinie sollte:
- In klarer, nicht-technischer Sprache verfasst sein
- Konkrete Beispiele und visuelle Hinweise enthalten
- Kurz und prägnant sein (maximal 2 Seiten)
- Einen positiven, unterstützenden Ton haben statt Angst zu schüren
- Praktische Handlungsanweisungen bieten, die leicht zu befolgen sind

Erstelle eine Richtlinie, die sowohl effektiv als auch benutzerfreundlich ist und die Mitarbeiter motiviert, sichere Praktiken zu befolgen.
```

**Verwendete Techniken:**
- Rollenanweisung (Cybersecurity-Experte für Richtlinien)
- Strukturierte Aufgabenbeschreibung mit spezifischen Kategorien
- Klare Formatierungsvorgaben
- Zielgruppenspezifische Anforderungen

### Beispiel 10: Erstellung eines Security Awareness Trainings

**Prompt:**
```
Als Security Awareness Trainer: Entwickle ein interaktives Schulungsmodul zum Thema "Sichere Nutzung von mobilen Geräten für SOC-Mitarbeiter". Das Modul soll SOC-Analysten dabei helfen, ihre eigenen mobilen Geräte sicher zu nutzen und gleichzeitig als Vorbilder für andere Mitarbeiter zu fungieren.

Das Schulungsmodul sollte folgende Themen abdecken:

1. Spezifische Risiken für SOC-Mitarbeiter:
   - Gezielte Angriffe auf Sicherheitspersonal
   - Risiken durch Zugriff auf sensible Sicherheitsinformationen
   - Reputationsrisiken bei Sicherheitsvorfällen

2. Sichere Konfiguration mobiler Geräte:
   - Empfohlene Sicherheitseinstellungen für iOS und Android
   - Sichere Authentifizierungsmethoden
   - Verschlüsselung und Datensicherung

3. Sichere Kommunikation unterwegs:
   - Verwendung von VPNs und sicheren Netzwerken
   - Sichere Messaging-Apps für Team-Kommunikation
   - Vermeidung von Man-in-the-Middle-Angriffen

4. Incident Response für mobile Geräte:
   - Erkennung von Kompromittierungsanzeichen
   - Sofortmaßnahmen bei Verdacht auf Kompromittierung
   - Meldeverfahren und Dokumentation

Das Schulungsmodul sollte:
- Interaktive Elemente enthalten (Quizfragen, Szenarien, Entscheidungsbäume)
- Auf die technischen Fähigkeiten von SOC-Mitarbeitern zugeschnitten sein
- Praktische Übungen für die direkte Anwendung beinhalten
- Aktuelle Bedrohungen und Angriffsvektoren berücksichtigen
- Sowohl präventive als auch reaktive Maßnahmen abdecken

Entwickle einen detaillierten Schulungsplan mit Lernzielen, Inhalten, interaktiven Elementen und Erfolgsmessung. Berücksichtige dabei die besondere Rolle von SOC-Mitarbeitern als Sicherheitsexperten und Vorbilder.
```

**Verwendete Techniken:**
- Rollenanweisung (Security Awareness Trainer)
- Zielgruppenspezifischer Kontext (SOC-Mitarbeiter)
- Strukturierte Aufgabenbeschreibung mit spezifischen Kategorien
- Klare Anforderungen an das Format und die Inhalte

## 6. Compliance und Audit

### Beispiel 11: Vorbereitung auf ein Sicherheitsaudit

**Prompt:**
```
Du bist ein Cybersecurity-Compliance-Spezialist in einem SOC-Team. Dein Unternehmen bereitet sich auf ein externes Sicherheitsaudit nach ISO 27001 vor, mit besonderem Fokus auf das Security Operations Center. Erstelle einen umfassenden Vorbereitungsplan für das SOC-Team.

Bereiche, die im Audit überprüft werden:
- Incident Response-Prozesse und -Dokumentation
- Threat Intelligence-Integration und -Nutzung
- Monitoring und Alarmierung
- Vulnerability Management
- Zugriffskontrolle und Berechtigungsverwaltung
- Schulung und Awareness des SOC-Personals
- Business Continuity und Disaster Recovery
- Compliance mit internen Richtlinien und externen Vorschriften

Erstelle einen detaillierten Vorbereitungsplan, der folgende Elemente enthält:

1. Pre-Audit-Bewertung:
   - Selbstbewertung der aktuellen Prozesse und Dokumentation
   - Gap-Analyse im Vergleich zu ISO 27001-Anforderungen
   - Priorisierung der zu behebenden Lücken

2. Dokumentationsvorbereitung:
   - Liste der erforderlichen Dokumente und Nachweise
   - Aktualisierung veralteter Dokumentation
   - Erstellung fehlender Dokumentation

3. Prozessoptimierung:
   - Verbesserung nicht konformer Prozesse
   - Implementierung fehlender Kontrollen
   - Validierung und Testing der Prozesse

4. Personalvorbereitung:
   - Schulung des SOC-Teams zu Audit-Fragen und -Antworten
   - Rollenzuweisung während des Audits
   - Mock-Interviews und Simulationen

5. Zeitplan und Meilensteine:
   - Detaillierter Zeitplan für die Audit-Vorbereitung
   - Verantwortlichkeiten und Zuständigkeiten
   - Überprüfungspunkte und Fortschrittsmessung

Der Plan sollte praktisch umsetzbar sein, klare Verantwortlichkeiten zuweisen und realistische Zeitrahmen berücksichtigen. Hebe besonders kritische Bereiche hervor, die besondere Aufmerksamkeit erfordern.
```

**Verwendete Techniken:**
- Spezialisierte Rollenanweisung (Compliance-Spezialist)
- Detaillierter Kontext (ISO 27001-Audit)
- Strukturierte Aufgabenbeschreibung mit spezifischen Kategorien
- Klare Anforderungen an den Ausgabeformat

### Beispiel 12: Datenschutz-Folgenabschätzung

**Prompt:**
```
Als Datenschutz- und Sicherheitsexperte in einem SOC-Team: Führe eine Datenschutz-Folgenabschätzung (DPIA) für die geplante Implementierung eines neuen Security Information and Event Management (SIEM)-Systems durch, das Logs aus allen Unternehmenssystemen sammeln und analysieren wird.

Projektdetails:
- Das SIEM-System wird Logs aus allen Unternehmensanwendungen, Netzwerkgeräten und Endpunkten sammeln
- Die Logs können personenbezogene Daten enthalten (Benutzernamen, IP-Adressen, Zugriffszeiten, besuchte Websites)
- Das System wird automatisierte Verhaltensanalysen durchführen, um anomales Benutzerverhalten zu erkennen
- Aufbewahrungsfrist für Logs: 12 Monate
- Zugriff auf das System haben SOC-Analysten und ausgewählte IT-Administratoren
- Das System wird von einem externen Anbieter gehostet, aber vom internen SOC-Team verwaltet

Führe eine strukturierte DPIA durch, die folgende Aspekte berücksichtigt:

1. Beschreibung der Verarbeitung:
   - Zweck der Datenverarbeitung
   - Art der verarbeiteten Daten
   - Betroffene Personengruppen
   - Datenflüsse und Verarbeitungsaktivitäten

2. Notwendigkeit und Verhältnismäßigkeit:
   - Rechtmäßigkeit der Verarbeitung
   - Zweckbindung und Datenminimierung
   - Aufbewahrungsfristen und Löschkonzept
   - Transparenz und Betroffenenrechte

3. Risikobewertung:
   - Identifikation potenzieller Risiken für die Rechte und Freiheiten der Betroffenen
   - Bewertung der Eintrittswahrscheinlichkeit und Schwere der Risiken
   - Besondere Risiken durch automatisierte Entscheidungsfindung

4. Risikominderung:
   - Technische und organisatorische Maßnahmen
   - Zugriffsbeschränkungen und Berechtigungskonzept
   - Verschlüsselung und Pseudonymisierung
   - Audit und Überwachung

5. Schlussfolgerung und Empfehlungen:
   - Gesamtbewertung der Datenschutzrisiken
   - Empfehlungen zur Risikominderung
   - Notwendigkeit einer Konsultation der Aufsichtsbehörde

Die DPIA sollte sowohl datenschutzrechtliche als auch sicherheitstechnische Aspekte berücksichtigen und konkrete, umsetzbare Empfehlungen enthalten.
```

**Verwendete Techniken:**
- Rollenanweisung mit Spezialisierung
- Detaillierter Kontext zum Projekt
- Strukturierte Aufgabenbeschreibung mit spezifischen Kategorien
- Aufforderung zu konkreten, umsetzbaren Empfehlungen

## 7. Forensik und Incident Response

### Beispiel 13: Analyse eines Sicherheitsvorfalls

**Prompt:**
```
Du bist ein Digital Forensiker in einem SOC-Team. Es wurde ein Sicherheitsvorfall gemeldet, bei dem möglicherweise unbefugter Zugriff auf einen kritischen Server stattgefunden hat. Analysiere die folgenden forensischen Daten und erstelle einen detaillierten Untersuchungsbericht.

Forensische Daten:

1. Systemlogs:
- 2025-03-28 01:23:45 Erfolgreiche Anmeldung, Benutzer: admin, Quell-IP: 203.0.113.42
- 2025-03-28 01:24:12 Fehlgeschlagene Anmeldung, Benutzer: root, Quell-IP: 203.0.113.42
- 2025-03-28 01:24:30 Erfolgreiche Anmeldung, Benutzer: sysadmin, Quell-IP: 203.0.113.42
- 2025-03-28 01:25:15 Benutzer hinzugefügt: maintenance_user, durch: sysadmin
- 2025-03-28 01:26:03 Benutzer maintenance_user zur Gruppe Administratoren hinzugefügt
- 2025-03-28 01:27:45 Erfolgreiche Anmeldung, Benutzer: maintenance_user, Quell-IP: 203.0.113.42
- 2025-03-28 01:28:10 Ausführung: powershell.exe -ExecutionPolicy Bypass -File C:\temp\script.ps1
- 2025-03-28 01:35:22 Große ausgehende Datenübertragung (2,3 GB) zu IP: 198.51.100.73
- 2025-03-28 01:42:18 Löschung mehrerer Systemlogs durch maintenance_user

2. Dateisystemanalyse:
- Datei C:\temp\script.ps1 erstellt am 2025-03-28 01:27:58
- Inhalt von script.ps1: PowerShell-Code zum Sammeln und Komprimieren von Dateien aus dem Verzeichnis D:\Financial_Data\
- Erstellte Datei: C:\temp\backup.zip (2,3 GB)
- Mehrere gelöschte Dateien im Verzeichnis C:\temp\ (teilweise wiederherstellbar)

3. Netzwerkverkehr:
- Verbindungen von 203.0.113.42 zum Server über SSH (Port 22)
- Datenübertragung von Server zu 198.51.100.73 über verschlüsseltes Protokoll (Port 443)
- DNS-Anfragen zu domain-backup-service.com (löst auf zu 198.51.100.73)

4. Zusätzliche Informationen:
- Der Benutzer "sysadmin" ist ein legitimer Administrator, der zu dieser Zeit nicht im Dienst war
- Die IP 203.0.113.42 stammt aus einem Land, in dem das Unternehmen nicht tätig ist
- Es gibt keine geplanten Wartungsarbeiten oder Backups für diesen Zeitraum
- Der Server enthält sensible Finanzdaten und Kundendaten

Führe eine detaillierte forensische Analyse durch und erstelle einen strukturierten Bericht mit:

1. Zusammenfassung des Vorfalls
2. Chronologische Rekonstruktion der Ereignisse
3. Identifizierte Indikatoren einer Kompromittierung (IoCs)
4. Bewertung des Ausmaßes der Kompromittierung
5. Betroffene Systeme und Daten
6. Verwendete Angriffsmethoden und -techniken
7. Empfehlungen für sofortige Eindämmungsmaßnahmen
8. Empfehlungen für die weitere Untersuchung

Verwende einen Chain-of-Thought-Ansatz, um deine Schlussfolgerungen zu erklären und zu begründen.
```

**Verwendete Techniken:**
- Spezialisierte Rollenanweisung (Digital Forensiker)
- Umfangreiche forensische Daten als Kontext
- Strukturierte Aufgabenbeschreibung
- Chain-of-Thought Prompting

### Beispiel 14: Erstellung eines Incident Response Plans

**Prompt:**
```
Als Incident Response Manager in einem SOC-Team: Entwickle einen umfassenden Incident Response Plan für Ransomware-Angriffe. Der Plan soll als Leitfaden für das SOC-Team dienen, um effektiv auf Ransomware-Vorfälle zu reagieren.

Der Incident Response Plan sollte folgende Phasen abdecken:

1. Vorbereitung:
   - Erforderliche Tools und Ressourcen
   - Rollen und Verantwortlichkeiten im IR-Team
   - Kontaktinformationen interner und externer Stakeholder
   - Vorbereitende Maßnahmen zur Minimierung der Auswirkungen

2. Erkennung und Analyse:
   - Typische Indikatoren für Ransomware-Angriffe
   - Prozess zur Bestätigung eines Ransomware-Vorfalls
   - Initiale Bewertung des Umfangs und der Auswirkungen
   - Klassifizierung der Schwere des Vorfalls

3. Eindämmung:
   - Sofortige Maßnahmen zur Begrenzung der Ausbreitung
   - Netzwerksegmentierung und Isolation betroffener Systeme
   - Entscheidungskriterien für Systemabschaltungen
   - Sicherung von Beweismitteln

4. Beseitigung:
   - Identifizierung und Entfernung des Ransomware-Payloads
   - Beseitigung von Persistenzmechanismen
   - Identifizierung und Schließung des initialen Zugangspunkts
   - Überprüfung auf zusätzliche Kompromittierungen

5. Wiederherstellung:
   - Priorisierung der wiederherzustellenden Systeme
   - Prozess für sichere Wiederherstellung aus Backups
   - Verifizierung der Systemintegrität vor Wiederinbetriebnahme
   - Schrittweise Wiederherstellung des Normalbetriebs

6. Nachbereitung:
   - Dokumentation des Vorfalls
   - Lessons Learned und Verbesserungsmaßnahmen
   - Aktualisierung von Sicherheitskontrollen
   - Schulung und Awareness-Maßnahmen

Der Plan sollte:
- Klare, umsetzbare Anweisungen enthalten
- Entscheidungsbäume für kritische Entscheidungen bieten
- Checklisten für jede Phase beinhalten
- Kommunikationsrichtlinien für interne und externe Kommunikation definieren
- Rechtliche und regulatorische Anforderungen berücksichtigen
- Spezifische Ransomware-Aspekte wie Lösegeldforderungen behandeln

Erstelle einen detaillierten, praktisch anwendbaren Plan, der sowohl für technische als auch nicht-technische Teammitglieder verständlich ist.
```

**Verwendete Techniken:**
- Spezialisierte Rollenanweisung (Incident Response Manager)
- Strukturierte Aufgabenbeschreibung mit Phasen
- Spezifische Anforderungen an den Plan
- Fokus auf Praktikabilität und Anwendbarkeit

## 8. Automatisierung und SOAR

### Beispiel 15: Entwicklung eines SOAR-Playbooks

**Prompt:**
```
Du bist ein Security Orchestration, Automation and Response (SOAR) Spezialist in einem SOC-Team. Entwickle ein detailliertes SOAR-Playbook für die automatisierte Reaktion auf verdächtige Anmeldeversuche in der Unternehmensumgebung.

Umgebungsdetails:
- Identity Provider: Azure Active Directory
- Endpunktsicherheit: Microsoft Defender for Endpoint
- SIEM: Microsoft Sentinel
- Ticketing-System: ServiceNow
- E-Mail-System: Microsoft 365
- Kommunikationsplattform: Microsoft Teams

Das Playbook sollte auf folgende Trigger reagieren:
- Mehrere fehlgeschlagene Anmeldeversuche von ungewöhnlichen Standorten
- Erfolgreiche Anmeldung nach mehreren fehlgeschlagenen Versuchen
- Anmeldung eines Benutzers von mehreren geografischen Standorten innerhalb kurzer Zeit
- Anmeldung außerhalb der üblichen Arbeitszeiten des Benutzers

Entwickle ein vollständiges Playbook mit:

1. Trigger und Bedingungen:
   - Genaue Definition der Auslösebedingungen
   - Schwellenwerte und Zeitfenster
   - Ausnahmen und Whitelist-Kriterien

2. Automatisierte Aktionen:
   - Datensammlung und Anreicherung
   - Korrelation mit anderen Sicherheitsereignissen
   - Risikobewertung basierend auf Benutzerverhalten und Kontext
   - Automatische Eindämmungsmaßnahmen basierend auf Risikostufe

3. Menschliche Entscheidungspunkte:
   - Wann menschliches Eingreifen erforderlich ist
   - Welche Informationen für die Entscheidungsfindung bereitgestellt werden
   - Optionen und empfohlene Aktionen

4. Eskalationspfade:
   - Kriterien für verschiedene Eskalationsstufen
   - Zuständigkeiten und Kontaktinformationen
   - Zeitliche Vorgaben für Reaktionen

5. Dokumentation und Berichterstattung:
   - Automatische Dokumentation aller Aktionen
   - Erstellung von Berichten für verschiedene Stakeholder
   - Metriken zur Messung der Effektivität

Das Playbook sollte in einem Format präsentiert werden, das direkt in ein SOAR-System implementiert werden kann, mit klaren Workflow-Schritten, Entscheidungspunkten und Aktionen. Berücksichtige dabei Best Practices für SOAR-Implementierungen und minimiere False Positives.
```

**Verwendete Techniken:**
- Spezialisierte Rollenanweisung (SOAR-Spezialist)
- Detaillierter Kontext zur Umgebung
- Strukturierte Aufgabenbeschreibung mit spezifischen Kategorien
- Fokus auf Implementierbarkeit

### Beispiel 16: Entwicklung von SIEM-Regeln

**Prompt:**
```
Als SIEM-Spezialist in einem SOC-Team: Entwickle eine Reihe von fortgeschrittenen Erkennungsregeln für Microsoft Sentinel, um Anzeichen für einen Advanced Persistent Threat (APT) in einer Microsoft 365 und Azure-Umgebung zu identifizieren.

Umgebungsdetails:
- Microsoft 365 E5 mit allen Sicherheitsfeatures
- Azure-Infrastruktur mit VMs, Datenbanken und Speicher
- Azure Active Directory für Identitätsmanagement
- Windows 10/11 Endpunkte mit Microsoft Defender
- VPN für Remotezugriff

Entwickle Erkennungsregeln für die folgenden APT-Taktiken:

1. Initial Access:
   - Phishing-Angriffe über E-Mail
   - Kompromittierung von Lieferanten mit Zugriff auf das Unternehmensnetzwerk
   - Ausnutzung von Schwachstellen in öffentlich zugänglichen Anwendungen

2. Persistence:
   - Erstellung ungewöhnlicher Dienstkonten oder Anwendungsregistrierungen
   - Änderungen an Authentifizierungsmethoden (z.B. Hinzufügen von Anmeldeinformationen)
   - Ungewöhnliche Konfigurationsänderungen in Azure AD

3. Privilege Escalation:
   - Ungewöhnliche Änderungen an Rollenberechtigungen
   - Missbrauch von privilegierten Rollen
   - Manipulation von Gruppenrichtlinien

4. Defense Evasion:
   - Deaktivierung von Sicherheitsfeatures
   - Löschung von Audit-Logs
   - Verwendung von Living-off-the-Land-Techniken

5. Lateral Movement:
   - Ungewöhnliche Authentifizierungsmuster zwischen Ressourcen
   - Verdächtige Remote-Sitzungen
   - Ungewöhnlicher Zugriff auf sensible Ressourcen

6. Data Exfiltration:
   - Große ausgehende Datenübertragungen
   - Ungewöhnliche API-Aufrufe zu Speicherdiensten
   - Verdächtige E-Mail-Weiterleitungsregeln

Für jede Erkennungsregel gib an:
- Exakte KQL-Abfrage (Kusto Query Language)
- Datenquellen und erforderliche Konnektoren
- Empfohlene Schwellenwerte und Zeitfenster
- Erwartete False Positives und deren Minimierung
- Schweregrad und MITRE ATT&CK-Mapping
- Empfohlene Reaktionsmaßnahmen

Die Regeln sollten einen ausgewogenen Ansatz zwischen Erkennungsrate und False Positives bieten und für eine Unternehmensumgebung mit etwa 1000 Benutzern geeignet sein.
```

**Verwendete Techniken:**
- Spezialisierte Rollenanweisung (SIEM-Spezialist)
- Detaillierter Kontext zur Umgebung
- Strukturierung nach MITRE ATT&CK-Framework
- Anforderung spezifischer technischer Details (KQL-Abfragen)

## Zusammenfassung

Diese SOC-spezifischen Prompt-Beispiele decken verschiedene Bereiche der Cybersicherheit ab und demonstrieren unterschiedliche Prompt-Engineering-Techniken. Die Beispiele können als Ausgangspunkt für eigene Prompts dienen und an spezifische Anforderungen angepasst werden.

Wichtige Prompt-Engineering-Techniken, die in diesen Beispielen demonstriert werden:

1. **Rollenanweisungen**: Definieren einer klaren Rolle für das Modell
2. **Kontextbereitstellung**: Liefern relevanter Hintergrundinformationen
3. **Strukturierte Aufgabenbeschreibungen**: Klare Gliederung der erwarteten Analyse oder Ausgabe
4. **Chain-of-Thought Prompting**: Anleitung zu schrittweisem Denken
5. **Formatierungsanweisungen**: Vorgaben für das Format der Antwort
6. **Spezialisierte Fachsprache**: Verwendung von Fachbegriffen aus dem SOC-Bereich
7. **Bezug zu Frameworks**: Einbindung von Branchenstandards wie MITRE ATT&CK

Diese Beispiele können als Referenz dienen, um effektive Prompts für verschiedene SOC-Aufgaben zu erstellen und die Fähigkeiten von Gemini optimal zu nutzen.
