# TestPrepWeb Projekt

![ScreenShot](pics/TestPrepWebDarkMode.jpg)
![ScreenShot](pics/TestPrepWebLightMode.jpg)

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
- **Übersicht Fortschritt-Map**: Eine Übersicht der abgearbeiteten Aufgaben implementieren, wobei die richtig und falsch
  bearbeiteten Aufgaben farblich (rot/grün) markiert werden sollen. Es soll dann auch möglich sein, einzelne Punkte
  dieser Übersicht anzuklicken, um die Aufgabenstellung zu jedem Zeitpunkt direkt zu betrachten.
- **Bilder für Aufgabenstellung**: Es soll möglich sein, Bilder für die Aufgabenstellung zu verwenden.
- **Indikator für aktive Aufgabe**: Aktive/Angezeigte Aufgabe in der Map markieren.
- **Dark Mode einbauen**: Dark Mode für die Schonung der Augen.

### Noch zu erledigen

- **Anpassung der Button-Positionen**: Sicherstellen, dass die "Zurück" und "Nächste Frage" Buttons unabhängig von der
  Textlänge der Frage oder den Antwortmöglichkeiten statisch bleiben.
- **Tests schreiben**: Gründlich testen und sicherstellen, dass TestPrepWeb über verschiedene Browser und Endgeräte
  hinweg konsistent funktioniert.
- **Trennung der Probeprüfungen nach Realisierungszeitraum**: Probeprüfungen nach Realisierungszeitraum trennen und ein
  Auswahlmenü beim Start der Anwendung implementieren.

## Geplante Features

- **Responsive Design**: Optimierung der Quiz-Anwendung für verschiedene Bildschirmgrößen und Geräte.
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

Des Weiteren erkenne ich den Beitrag der Autoren und der an der Lokalisierung und Überprüfung der Aktualisierungen
Beteiligten an. Für die Aktualisierung 2018 v3.1 bestand das Team aus Klaus Olsen (Leitung), Meile Posthuma und
Stephanie Ulrich als Autoren. An der Lokalisierung und Überprüfung der Übersetzung der Aktualisierungen wirkten Arne
Becher, Ralf Bongard, Milena Donato, Dr. Matthias Hamburg, Andreas Hetz, Tobias Horn, Karl Kemminger, Martin Klonk,
Nishan Portoyan, Horst Pohlmann und Stephanie Ulrich (Leitung) mit. Für die Aktualisierungen 2018 wurde das Team durch
Tauhida Parveen (stellvertretende Leitung), Rex Black (Projektmanager), Debra Friedenberg, Matthias Hamburg, Judy McKay,
Hans Schaefer, Radoslaw Smilgin, Mike Smith, Steve Toms, Marie Walsh und Eshraka Zakaria ergänzt, mit zusätzlicher
Unterstützung bei Lokalisierung und Überprüfung von Alisha Bülow et al., Dr. Klaudia Dussa-Zieger, Elke Mai, Atilim
Siegmund, Prof. Dr. Andreas Spillner (i.R.), Sabine Uhde und erneut Stephanie Ulrich (Leitung). Die Aktualisierungen für
2011 wurden von Thomas Müller, Debra Friedenberg und der ISTQB®-Arbeitsgruppe Foundation Level geleitet, die
Aktualisierungen für 2010 von Thomas Müller, Armin Beer, Martin Klonk und Rahul Verma.

Ich danke allen Beteiligten, die all diese Informationen frei zugänglich für die Welt zur Verfügung stellen.

## Lizenz

Dieses Projekt ist unter der [MIT-Lizenz](LICENSE.txt) veröffentlicht.

## Sprachen

- [English](README.md)
- [Deutsch](README_DE.md)
- [Français](README_FR.md)