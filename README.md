# Test-Driven Development

Erstelle zuerst einen Fork von diesem Repository und klone diesen. Führe den Befehl `npm install` im geklonten Verzeichnis aus.

Bearbeite die Aufgaben nach dem folgenden Vorgehen:

1. Schreibe keinen Produktivcode, bis es einen Test gibt, der aufgrund dieses fehlenden Produktivcodes scheitert.
2. Schreibe nicht mehr Testcode, als nötig ist, um den Test zum Scheitern zu bringen.
3. Schreibe nicht mehr Produktivcode, als nötig ist, um den Test zum Laufen zu bringen.

**Erstelle mindestens nach jeder Aufgabe einen Commit!**

## Aufgabe 0: Beispielcode betrachten

Betrachte den Testcode in `src/calc.test.ts`, welcher die beiden Funktionen `sum` und `sub` von `src/calc.ts` überprüft. 

Pro Funktion gibt es mehrere Testfälle. Mithilfe von [`describe`](https://jestjs.io/docs/api#describename-fn) werden die Testfälle gruppiert.

Der obere Test (`"adding up numbers"`) testet die Funktion `sum` und verwendet dazu _gruppierte_ Tests mit einer manuell definierten Beschreibung.

Der untere Test (`"subtracting numbers"`) testet die Funktion `sub` und verwendet dazu _parametrisierte Tests_ mit einer generierten Beschreibung.

Bei der oberen Variante ist im Code besser erkennbar, was der einzelne Testfall ausdrücken soll. Bei der unteren Variante ist die Erweiterung um weitere Testfälle wesentlich weniger aufwändig, solange alle Testfälle nach dem gleichen Schema funktionieren.

In der Praxis verwendet man eine Kombination der beiden Varianten: Parametrisierte Tests für reguläre Fälle, die laufend erweitert werden (z.B. im Zuge der Korrektur von Fehlern) und gruppierte Tests mit einer präzisen Beschreibung für Spezialfälle.

Probiere in den folgenden Aufgaben beide Varianten aus (z.B. einzelne Tests in Aufgabe 1, parametrisierte Tests in Aufgabe 2 und eine Kombination davon in Aufgabe 3).

## Aufgabe 1: Zeitdauer formatieren

Bearbeite diese Aufgabe in `src/duration.test.ts` (Testcode) und `src/duration.ts` (Produktivcode).

In dieser Aufgabe soll die Funktion `formatDuration` in `src/duration.ts` implementiert werden. Anhand einer gegebenen Anzahl Sekunden soll eine Zeitdauerangabe nach der Form `XXhYYmZZs` zurückgegeben werden. Beispiele:

- `33` wird zu `33s`.
- `123` wird zu `2m3s`.
- `500` wird zu `8m20s`.
- `3600` wird zu `1h`.
- `3999` wird zu `1h6m39s`.

Schreibe Tests und Produktivcode gemäss TDD-Vorgehen, indem du die obigen Fälle und folgende Spezialfälle testest und implementierst:

- `0` wird zu `0s`.
- Negative Zahlen führen zu einem `Error` mit aussagekräftiger Beschreibung. (Teste auf eine geworfene Exception!)
- Nachkommastellen von Sekundenangaben werden durch Rundung eliminiert (siehe [`Math.round`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)).

## Aufgabe 2: Schere, Stein, Papier

Bearbeite diese Aufgabe in `src/rock-paper-scissors.test.ts` (Testcode) und `src/rock-paper-scissors.ts` (Produktivcode).

Implementiere das Spiel [_Schere, Stein, Papier_](https://de.wikipedia.org/wiki/Schere,_Stein,_Papier) bzw. [_Rock, Paper, Scissors_](https://en.wikipedia.org/wiki/Rock_paper_scissors) in der Funktion `play`.

Die Funktion erwartet als Parameter die Spielzüge zweier Spieler als Zeichenkette:

- `"rock"`: Stein
- `"paper"`: Papier
- `"scissors"`: Schere

Die Gross- und Kleinschreibung sowie führende und anschliessende Leerzeichen sollen ignoriert werden.

Die Funktion soll den folgenden Wert zurückgeben:

- `1` wenn Spieler 1 gewinnt.
- `2` wenn Spieler 2 gewinnt.
- `0` bei einem Unentschieden.

Für ungültige Spielzüge wird eine Exception mit sprechender Fehlermeldung geworfen.

Schreibe die Testfälle und implementiere die Funktion `play` gemäss TDD-Vorgehen.

## Aufgabe 3: ISBN-13

Bearbeite diese Aufgabe in `src/isbn13.test.ts` (Testcode) und `src/isbn13.ts` (Produktivcode).

Bücher werden anhand einer [ISBN](https://de.wikipedia.org/wiki/Internationale_Standardbuchnummer) (internationale Standardbuchnummer) identifiziert. Früher war dies eine zehnstellige Zahl (ISBN-10). Heutzutage verwendet man die dreizehnstellige ISBN-13, um mit [EAN](https://de.wikipedia.org/wiki/European_Article_Number) (European Article Number) kompatibel zu sein. (Als Landespräfix wird die Zahl 978 oder 979 verwendet, welche für das fiktive Land _Buchland_ steht.)

Die letzte Stelle einer ISBN-13 ist eine sogenannte Prüfsumme, mithilfe welcher man mögliche Fehler beim Übermitteln einer ISBN-13 bzw. Fehler beim Scanvorgang des Barcodes erkennen kann. Der Algorithmus zur [Berechnung der ISBN-13-Prüfsumme](https://de.wikipedia.org/wiki/Internationale_Standardbuchnummer#ISBN-13) soll gemäss TDD-Vorgehen in `src/isbn13.ts` in der Funktion `isValid` umgesetzt werden.

Schreibe die Testfälle und implementiere die Funktion `isValid` gemäss TDD-Vorgehen.

Dieses mal musst du selber sinnvolle Testdaten und -fälle zusammenstellen.

## Zusatzaufgabe: Darts (Spielvariante 501)

Bearbeite diese Aufgabe in `src/darts.test.ts` (Testcode) und `src/darts.ts` (Produktivcode).

Bei der Darts-Spielvariante _501_ geht es darum, mit möglichst wenig Würfen von 501 auf null Punkte zu kommen. Das Spiel funktioniert (vereinfacht für einen Spieler) folgendermassen:

1. Der Spieler wirft dreimal mit je einem Pfeil auf das Brett.
2. Die Anzahl Punkte für die Runde wird berchnet und vom Zwischenstand (zu Beginn: 501) abgezogen.
    1. Bei einem Treffer in einen bestimmten Sektor erhält der Spieler die einfache Punktzahl (z.B. _Single 18_: 18).
    2. Wird der _Double Ring_ getroffen, erhält der Spieler die doppelte Punktzahl des Sektors (z.B. _Double 17_: 34).
    3. Wird der _Triple Ring_ getroffen, erhält der Spieler die dreifache Punktzahl des Sektors (z.B. _Triple 20_: 60).
3. Die Runde ist zu Ende, wenn der Spieler auf null Punkten ist.
    1. Die Punktzahl 0 muss _exakt_ erreicht werden. Wird die Punktzahl 0 unterschritten (_bust_), gibt es keine Punkte. Der Zwischenstand wird auf denjenigen vor dem Wurf zurückgesetzt. (Beispiel: Bei 37 offenen Punkten trifft der Spieler zuerst die 20 und dann die 18 ‒ _bust_. Der Spieler ist wieder bei 37 Punkten.)
    2. Die Punktzahl 0 muss über einen _Double Checkout_ erreicht werden, d.h.  mit dem letzten Wurf muss man den _Double Ring_ treffen. (D.h. man kann die Runde nur beenden, wenn beim letzten Wurf eine gerade Punktzahl verbleibt.)

Zur Illustration eine Dartscheibe mit den Sektoren, Ringen und dem _Bull's Eye_
in der Mitte:

![Ein Dartsbrett](dartboard.png)

In dieser Aufgabe geht es um zwei Berechnungen:

1. Berechnung der Punktezahl aus einer Runde anhand einer Zeichenkette: Funktion `calcPoints`.
    - Der Spieler gibt seine Treffer im folgenden Format ein (Beispiele):
        - `3 20 1 17 2 4`: _Triple 20_, _Single 17_, _Double 4_: `3*20+1*17+2*4=85`
        - `2 15 1 18 3 19`: _Double 15_, _Single 18_, _Triple 19_: `2*15+1*18+3*19=105`
        - `3 20 1 5`: _Triple 20_, _Single 5_, [einmal daneben]: `3*20+1*5=65`
        - D.h. Ring-Multiplikator und Sektor wechseln sich jeweils ab.
    - Eine Funktion soll aus der Zeichenkette die Punktezahl berechnen.
2. Ermittlung eines Treffers für den _Double Checkout_ bei gegebener Punktzahl: Funktion `possibleCheckout`.
    - Der Spieler hat bisher eine bestimmte Punktezahl `x` geworfen.
    - Es verbleiben noch eine bestimmte Anzahl Punkte (`501-x`).
    - Es soll berechnet werden, mit welchem Wurf die Runde mittels _Double
      Checkout_ beendet werden kann.
    - Beispiel: `x=477`, `501-477=24`, `24:2=12`, `"Double 12"`
    - Beispiel: `x=480`, `501-480=31`, `31:2=15.5`, [unmöglich, da ungerade]
    - Beispiel: `x=441`, `501-441=60`, `60:2=30`, [unmöglich, da `30>20`]

Implementiere die beiden Funktionen, indem du dich wiederum ans TDD-Vorgehen hälst. Wenn dir unklar ist, wie die API genau funktionieren soll (z.B. was `possibleCheckout` zurückgeben soll, wenn kein Checkout möglich ist), entscheide dich selber für eine Lösung!
