let quizFragen = [];
let richtigBeantwortet = 0;
let antwortVersuche = [];
let aktuelleFrageIndex = 0;

function startQuiz() {
    const presetFile = document.getElementById('preset-files').value;
    const fileInput = document.getElementById('file-input');

    if (presetFile) {
        ladeFragenAusServer(presetFile);
    } else if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = function (event) {
            try {
                const fragen = JSON.parse(event.target.result);
                starteQuizMitFragen(fragen);
            } catch (error) {
                alert('Fehler beim Laden der Datei. Bitte stellen Sie sicher, dass die Datei im korrekten Format vorliegt.');
            }
        };
        reader.readAsText(file);
    } else {
        alert('Bitte wählen Sie eine .json-Datei aus.');
    }
}

function ladeFragenAusServer(datei) {
    fetch(datei)
        .then(response => response.json())
        .then(fragen => {
            starteQuizMitFragen(fragen);
        })
        .catch(error => {
            console.error("Fehler beim Laden der Fragen: ", error);
            alert('Fehler beim Laden der Datei. Bitte versuchen Sie es erneut.');
        });
}

function starteQuizMitFragen(fragen) {
    quizFragen = fragen;
    antwortVersuche = fragen.map(() => false);
    document.getElementById('start-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'flex';
    document.getElementById('fortschritt-map-container').style.display = 'flex';
    generiereFortschrittsMap();
    frageAnzeigen(aktuelleFrageIndex);
}

function generiereFortschrittsMap() {
    const mapContainer = document.getElementById('fortschritt-map-container');
    mapContainer.innerHTML = '';
    quizFragen.forEach((_, index) => {
        const punkt = document.createElement('span');
        punkt.classList.add('fortschritt-punkt');
        punkt.setAttribute('data-index', index);
        punkt.innerText = index + 1;
        punkt.addEventListener('click', () => frageAnzeigen(index));
        mapContainer.appendChild(punkt);
    });
    aktualisiereAktivenPunkt();
}

function aktualisiereAktivenPunkt() {
    document.querySelectorAll('.fortschritt-punkt').forEach(punkt => {
        punkt.classList.remove('aktiv');
    });
    const aktiverPunkt = document.querySelector(`.fortschritt-punkt[data-index="${aktuelleFrageIndex}"]`);
    if (aktiverPunkt) {
        aktiverPunkt.classList.add('aktiv');
    }
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
    aktualisiereAktivenPunkt();

    let htmlContent = `<div class="frage-text">${frage.frage}</div>`;

    frage.inhalte.forEach(element => {
        switch (element.typ) {
            case 'text':
                htmlContent += `<div class="text">${element.inhalt}</div>`;
                break;
            case 'bild':
                htmlContent += `<div class="bild-container"><img src="${element.inhalt}" alt="Bild zur Frage" style="max-width:100%;height:auto;display:block;margin:0 auto;"></div>`;
                break;
            case 'tabelle':
                htmlContent += generiereTabellenHTML(element.inhalt);
                break;
        }
    });

    htmlContent += `<ul>` + Object.keys(frage.antworten).map(buchstabe =>
        `<li><button onclick="antwortAuswaehlen('${buchstabe}')">${buchstabe}) ${frage.antworten[buchstabe]}</button></li>`
    ).join('') + `</ul>`;

    quizContainer.innerHTML = htmlContent;

    scrollToTop();
}

function generiereTabellenHTML(tabelle) {
    let htmlContent = `<table class="quiz-tabelle">`;

    if (tabelle.kopf && tabelle.kopf.length > 0) {
        htmlContent += `<thead><tr>`;
        tabelle.kopf.forEach(kopfElement => {
            htmlContent += `<th>${kopfElement}</th>`;
        });
        htmlContent += `</tr></thead>`;
    }

    htmlContent += `<tbody>`;
    tabelle.koerper.forEach(zeilenElement => {
        htmlContent += `<tr>`;
        if (Array.isArray(zeilenElement)) {
            zeilenElement.forEach(zelle => {
                htmlContent += `<td>${zelle}</td>`;
            });
        } else if (zeilenElement.zeile) {
            zeilenElement.zeile.forEach(zelle => {
                const zellTag = zeilenElement.istKopfZeile ? 'th' : 'td';
                htmlContent += `<${zellTag}>${zelle}</${zellTag}>`;
            });
        }
        htmlContent += `</tr>`;
    });
    htmlContent += `</tbody></table>`;
    return htmlContent;
}

function antwortAuswaehlen(antwort) {
    const frage = quizFragen[aktuelleFrageIndex];
    const korrekt = antwort === frage.korrekteAntwort;

    if (!antwortVersuche[aktuelleFrageIndex]) {
        antwortVersuche[aktuelleFrageIndex] = true;
        if (korrekt) {
            richtigBeantwortet++;
        }
    }

    aktualisiereRichtigeAntwortenAnzeige();
    markiereFortschrittsPunkt(aktuelleFrageIndex, korrekt);
    const feedbackContainer = document.getElementById('feedback-container');
    feedbackContainer.innerHTML = `<p>${frage.feedback[antwort]}</p>`;
    feedbackContainer.style.backgroundColor = korrekt ? 'lightgreen' : 'lightcoral';
    feedbackContainer.style.display = 'block';
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

function scrollToTop() {
    window.scrollTo(0, 0);
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

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-container').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('fortschritt-map-container').style.display = 'none';
});