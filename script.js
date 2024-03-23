let quizFragen = [];
let richtigBeantwortet = 0; // Zähler für richtig beantwortete Fragen beim ersten Versuch

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

function aktualisiereRichtigeAntwortenAnzeige() {
    const anzeigeElement = document.getElementById('richtige-antworten-anzeige');
    anzeigeElement.textContent = `Richtig beim ersten Versuch: ${richtigBeantwortet} von ${quizFragen.length}`;
}

function frageAnzeigen() {
    if (aktuelleFrageIndex < quizFragen.length) {
        const quizContainer = document.getElementById('quiz');
        const frage = quizFragen[aktuelleFrageIndex];

        document.getElementById('feedback-container').style.display = 'none';
        document.getElementById('previous').style.visibility = aktuelleFrageIndex > 0 ? 'visible' : 'hidden';
        aktualisiereFortschritt();

        quizContainer.innerHTML = `<div class="frage-text">${frage.frage}</div><ul>` +
            Object.keys(frage.antworten).map(buchstabe =>
                `<li><button onclick="antwortAuswaehlen('${buchstabe}')">${buchstabe}) ${frage.antworten[buchstabe]}</button></li>`
            ).join('') + '</ul>';
    } else {
        document.getElementById('quiz').innerHTML = "<p>Das Quiz ist beendet. Vielen Dank für Ihre Teilnahme!</p>";
        document.getElementById('next').style.visibility = 'hidden';
        document.getElementById('feedback-container').style.display = 'none';
    }
}

function antwortAuswaehlen(antwort) {
    const frage = quizFragen[aktuelleFrageIndex];
    const korrekt = antwort === frage.korrekteAntwort;

    if (korrekt) {
        richtigBeantwortet++;
        aktualisiereRichtigeAntwortenAnzeige();
    }

    const feedbackContainer = document.getElementById('feedback-container');
    feedbackContainer.innerHTML = `<p>${frage.feedback[antwort]}</p>`;
    feedbackContainer.style.backgroundColor = korrekt ? 'lightgreen' : 'lightcoral';
    feedbackContainer.style.color = 'black';
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