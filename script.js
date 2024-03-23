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

function aktualisiereFortschritt() {
    const fortschrittText = `Frage ${aktuelleFrageIndex + 1} von ${quizFragen.length}`;
    document.getElementById('quiz-progress').innerText = fortschrittText;
}

function frageAnzeigen() {
    if (aktuelleFrageIndex < quizFragen.length) {
        const quizContainer = document.getElementById('quiz');
        const frage = quizFragen[aktuelleFrageIndex];

        document.getElementById('feedback-container').style.display = 'none';
        document.getElementById('previous').style.display = aktuelleFrageIndex > 0 ? 'block' : 'none';
        aktualisiereFortschritt();

        quizContainer.innerHTML = `<div class="frage-text">${frage.frage}</div><ul>` +
            Object.keys(frage.antworten).map(buchstabe =>
                `<li><button onclick="antwortAuswaehlen('${buchstabe}')">${buchstabe}) ${frage.antworten[buchstabe]}</button></li>`
            ).join('') + '</ul>';
    } else {
        console.log("Quiz ist beendet oder keine Fragen verfügbar.");
        document.getElementById('quiz').innerHTML = "<p>Das Quiz ist beendet. Vielen Dank für Ihre Teilnahme!</p>";
        document.getElementById('next').style.display = 'none';
        document.getElementById('previous').style.display = 'none';
        document.getElementById('feedback-container').style.display = 'none';
    }
}

function antwortAuswaehlen(antwort) {
    const frage = quizFragen[aktuelleFrageIndex];
    const feedbackText = frage.feedback[antwort];
    const begruendungText = frage.begruendung ? frage.begruendung[antwort] : '';
    const feedbackContainer = document.getElementById('feedback-container');

    feedbackContainer.innerHTML = `<p>${feedbackText}</p><p>${begruendungText}</p>`;
    feedbackContainer.style.display = 'block';
}

function naechsteFrage() {
    aktuelleFrageIndex++;
    frageAnzeigen();
}

function vorherigeFrage() {
    if (aktuelleFrageIndex > 0) {
        aktuelleFrageIndex--;
        frageAnzeigen();
    }
}

document.addEventListener('DOMContentLoaded', ladeFragen);