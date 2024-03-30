let quizFragen = [];
let richtigBeantwortet = 0;
let antwortVersuche = [];
let aktuelleFrageIndex = 0;

function ladeFragen() {
    fetch('fragen.json')
        .then(response => response.json())
        .then(fragen => {
            quizFragen = fragen;
            antwortVersuche = fragen.map(() => false);
            generiereFortschrittsMap();
            frageAnzeigen(aktuelleFrageIndex);
        })
        .catch(error => {
            console.error("Fehler beim Laden der Fragen: ", error);
        });
}

function generiereFortschrittsMap() {
    const mapContainer = document.getElementById('fortschritt-map-container');
    mapContainer.innerHTML = '';
    quizFragen.forEach((_, index) => {
        const punkt = document.createElement('span');
        punkt.classList.add('fortschritt-punkt');
        punkt.setAttribute('data-index', index);
        punkt.innerText = index + 1; // Nummerierung der Punkte
        punkt.addEventListener('click', () => frageAnzeigen(index));
        mapContainer.appendChild(punkt);
    });
}

function aktualisiereFortschritt() {
    document.getElementById('quiz-progress').innerText = `Frage ${aktuelleFrageIndex + 1} von ${quizFragen.length}`;
}

function aktualisiereRichtigeAntwortenAnzeige() {
    document.getElementById('richtige-antworten-anzeige').textContent = `Richtig beim ersten Versuch: ${richtigBeantwortet} von ${quizFragen.length}`;
}

function frageAnzeigen(index) {
    aktuelleFrageIndex = index;
    const frage = quizFragen[index];
    const quizContainer = document.getElementById('quiz');

    document.getElementById('feedback-container').style.display = 'none';
    document.getElementById('previous').style.visibility = index > 0 ? 'visible' : 'hidden';
    aktualisiereFortschritt();

    let htmlContent = `<div class="frage-text">${frage.frage}</div>`;

    if (frage.tabelle) {
        htmlContent += `<table class="quiz-tabelle"><thead><tr>`;
        frage.tabelle.kopf.forEach(kopfElement => {
            htmlContent += `<th>${kopfElement}</th>`;
        });
        htmlContent += `</tr></thead><tbody>`;

        frage.tabelle.koerper.forEach(zeilenElement => {
            if (zeilenElement.istKopfZeile) {
                htmlContent += `<tr class="tabellen-kopf-zeile">`;
                zeilenElement.zeile.forEach(zelle => {
                    htmlContent += `<td>${zelle}</td>`;
                });
            } else {
                htmlContent += `<tr>`;
                zeilenElement.forEach(zelle => {
                    htmlContent += `<td>${zelle}</td>`;
                });
            }
            htmlContent += `</tr>`;
        });

        htmlContent += `</tbody></table>`;
    }

    if (frage.fortsetzung) {
        htmlContent += `<div class="frage-text">${frage.fortsetzung}</div>`;
    }

    htmlContent += `<ul>` + Object.keys(frage.antworten).map(buchstabe =>
        `<li><button onclick="antwortAuswaehlen('${buchstabe}')">${buchstabe}) ${frage.antworten[buchstabe]}</button></li>`
    ).join('') + `</ul>`;

    quizContainer.innerHTML = htmlContent;
}

function antwortAuswaehlen(antwort) {
    if (!antwortVersuche[aktuelleFrageIndex]) {
        antwortVersuche[aktuelleFrageIndex] = true;
        const frage = quizFragen[aktuelleFrageIndex];
        const korrekt = antwort === frage.korrekteAntwort;

        if (korrekt) {
            richtigBeantwortet++;
        }

        aktualisiereRichtigeAntwortenAnzeige();
        markiereFortschrittsPunkt(aktuelleFrageIndex, korrekt);
        const feedbackContainer = document.getElementById('feedback-container');
        feedbackContainer.innerHTML = `<p>${frage.feedback[antwort]}</p>`;
        feedbackContainer.style.backgroundColor = korrekt ? 'lightgreen' : 'lightcoral';
        feedbackContainer.style.display = 'block';
    }
}

function markiereFortschrittsPunkt(index, korrekt) {
    const punkt = document.querySelector(`.fortschritt-punkt[data-index="${index}"]`);
    if (korrekt) {
        punkt.style.backgroundColor = 'green';
        punkt.style.color = 'white';
    } else {
        punkt.style.backgroundColor = 'red';
        punkt.style.color = 'white';
    }
}

function naechsteFrage() {
    if (aktuelleFrageIndex + 1 < quizFragen.length) {
        aktuelleFrageIndex++;
        frageAnzeigen(aktuelleFrageIndex);
    } else {
        anzeigenLeistung();
    }
}

function vorherigeFrage() {
    if (aktuelleFrageIndex > 0) {
        aktuelleFrageIndex--;
        frageAnzeigen(aktuelleFrageIndex);
    }
}

function anzeigenLeistung() {
    alert(`Du hast ${richtigBeantwortet} von ${quizFragen.length} Fragen beim ersten Versuch richtig beantwortet.`);
}

document.addEventListener('DOMContentLoaded', ladeFragen);