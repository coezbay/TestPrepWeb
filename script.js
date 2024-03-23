let quizFragen = [];

function ladeFragen() {
    fetch('fragen.json')
        .then(response => response.json())
        .then(fragen => {
            quizFragen = fragen;
            frageAnzeigen();
        })
        .catch(error => {
            console.error("Fehler beim Laden der Fragen: ", error);
        });
}

let aktuelleFrageIndex = 0;

function frageAnzeigen() {
    if (aktuelleFrageIndex < quizFragen.length) {
        const quizContainer = document.getElementById('quiz');
        const frage = quizFragen[aktuelleFrageIndex];

        // Versteckt das Feedback beim Anzeigen der neuen Frage
        document.getElementById('feedback-container').style.display = 'none';

        quizContainer.innerHTML = `<div class="frage-text">${frage.frage}</div><ul>` +
            Object.keys(frage.antworten).map(buchstabe =>
                `<li><button onclick="antwortAuswaehlen('${buchstabe}')">${buchstabe}) ${frage.antworten[buchstabe]}</button></li>`
            ).join('') + '</ul>';
    } else {
        // Quiz ist zu Ende oder keine Fragen verfügbar
        console.log("Quiz ist beendet oder keine Fragen verfügbar.");
        // Optional: Anzeigen einer Nachricht oder eines Ergebnisses hier
    }
}

function antwortAuswaehlen(antwort) {
    const frage = quizFragen[aktuelleFrageIndex];
    const feedbackText = frage.feedback[antwort];
    const begruendungText = frage.begruendung ? frage.begruendung[antwort] : '';
    const feedbackContainer = document.getElementById('feedback-container');

    // Setzt Feedback-Text und Begründung
    feedbackContainer.innerHTML = `<p>${feedbackText}</p><p>${begruendungText}</p>`;
    feedbackContainer.style.display = 'block'; // Zeigt das Feedback an

    // Optional: Verstecken des "Nächste Frage"-Buttons, bis eine Antwort ausgewählt wurde
    document.getElementById('next').style.visibility = 'visible';
}

function naechsteFrage() {
    aktuelleFrageIndex++;
    if (aktuelleFrageIndex < quizFragen.length) {
        frageAnzeigen();
    } else {
        console.log("Ende des Quiz");
        // Hier könnte man z.B. eine Endseite oder ein Ergebnis anzeigen
        document.getElementById('quiz').innerHTML = "<p>Das Quiz ist beendet. Vielen Dank für Ihre Teilnahme!</p>";
        // Verstecken des "Nächste Frage"-Buttons am Ende des Quiz
        document.getElementById('next').style.display = 'none';
        document.getElementById('feedback-container').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', ladeFragen);