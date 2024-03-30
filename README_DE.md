# TestPrepWeb Projekt

## Über das Projekt

Dieses Projekt ist ein Online-Quiz, das mit HTML, CSS und JavaScript erstellt wurde. Es zielt darauf ab, Benutzern eine
ansprechende und interaktive Möglichkeit zu bieten, ihr Wissen in verschiedenen Themenbereichen zu testen und zu
erweitern.
Nutzer können die `jsonschema.json` in ihre IDE integrieren, um individuelle Fragen und Antworten in der `fragen.json`
zu implementieren und zu validieren. Dies hilft, Fehler bei selbst erstellten Fragen und Antworten zu vermeiden.

## Aktueller Stand

### Erledigte Punkte

- **Grundstruktur des Quiz**: Die Basisstruktur des Quiz mit Fragen, Antwortmöglichkeiten und Navigationsbuttons ("
  Zurück" und "Nächste Frage") ist implementiert.
- **Stylesheet-Optimierungen**: Verbesserungen in der `styles.css` für eine konsistente und ansprechende
  Benutzeroberfläche.
- **Dynamische Frageanzeige**: Fragen und Antworten werden dynamisch aus einer JSON-Datei geladen.
- **Feedback-Farbanzeige**: Die Anzeige des Feedbacks erfolgt mit einem grauen Hintergrund.
- **Verbesserung der Feedback-Anzeige**: Implementierung einer Farbkodierung für das Feedback (grün für korrekte
  Antworten, rot für falsche Antworten) und Anpassung der Schriftfarbe entsprechend.
- **Mittige Ausrichtung des Feedback-Hintergrunds**: Korrektur der Ausrichtung, sodass der Feedback-Hintergrund mittig
  und konsistent mit dem Layout der Fragen und Antworten ist.
- **Anzeige der Leistung beim ersten Versuch**: Hinzufügen einer Funktionalität zur Anzeige der Anzahl der beim ersten
  Versuch richtig beantworteten Fragen.
- **Blocksatz für Fragestellungen**: Fragen werden nun in Blocksatz angezeigt, um eine verbesserte Lesbarkeit zu bieten.
- **Tabellen**: Möglichkeit zur Erstellung von Tabellen implementiert (Kopf + Körper) & (Nur Körper) & (Kopf + Körper +
  Kopf + Körper). Visuell: Zebrastreifen für Trennung der Zeilen.

### Noch zu erledigen

- **Anpassung der Button-Positionen**: Sicherstellen, dass die "Zurück" und "Nächste Frage" Buttons unabhängig von der
  Textlänge der Frage oder den Antwortmöglichkeiten statisch bleiben.
- **Dark Mode einbauen**: Dark Mode für die Schonung der Augen.
- **Tests schreiben**: Gründlich testen und sicherstellen, dass TestPrepWeb über verschiedene Browser und Endgeräte
  hinweg konsistent funktioniert.
- **Trennung der Probeprüfungen nach Realisierungszeitraum**: Probeprüfungen nach Realisierungszeitraum trennen und ein
  Auswahlmenü beim Start der Anwendung implementieren.
- **Übersicht Fortschritt-Map**: Eine Übersicht der abgearbeiteten Aufgaben implementieren, wobei die richtig und falsch
  bearbeiteten Aufgaben farblich (rot/grün) markiert werden sollen. Es soll dann auch möglich sein, einzelne Punkte
  dieser Übersicht anzuklicken, um die Aufgabenstellung zu jedem Zeitpunkt direkt zu betrachten.

## Geplante Features

- **Responsive Design**: Optimierung der Quiz-Anwendung für verschiedene Bildschirmgrößen und Geräte.
- **Übersicht über falsche Antworten**: Eine Übersicht erstellen, die die falsch beantworteten Fragen zusammen mit den
  richtigen Antworten anzeigt, damit man sie sich erneut einprägen kann.
- **Sprachen**: Anwendung multilingual zur Verfügung stellen

## Kontinuierliche Entwicklung

- **Erweiterung des Fragenkatalogs**: Hinzufügen weiterer Fragen und Themenbereiche zum Quiz.

## Beitrag

- **Feedback und Zusammenarbeit**: Feedback und Beiträge sind willkommen! Fühlen Sie sich frei, Issues zu öffnen oder
  Pull Requests für vorgeschlagene Verbesserungen zu erstellen.

## Anerkennung externer Quellen

Ein Teil der in dieser Repo verwendeten Fragen und Antworten basiert auf Materialien des ISTQB® (International Software
Testing Qualifications Board).
Diese Materialien werden unter Anerkennung des ISTQB® als Quelle und Copyright-Inhaber gemäß ihrer Richtlinien
verwendet.
Ich danke dem ISTQB® für die Bereitstellung dieser Ressourcen und erkenne ihre Urheberschaft vollständig an.

## Lizenz

Dieses Projekt ist unter der [MIT-Lizenz](LICENSE/LICENSE.txt) veröffentlicht.

## Sprachen

- [English](README.md)
- [Deutsch](README_DE.md)
- [Français](README_FR.md)