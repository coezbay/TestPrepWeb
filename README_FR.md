# Projet TestPrepWeb

## À propos du projet

Ce projet est un quiz en ligne créé avec HTML, CSS et JavaScript. Il vise à offrir aux utilisateurs une manière engageante et interactive de tester et d'étendre leurs connaissances dans divers domaines.
Les utilisateurs peuvent intégrer le `jsonschema.json` dans leur IDE pour implémenter et valider des questions et réponses individuelles dans le `fragen.json`. Cela aide à éviter les erreurs dans les questions et réponses créées par eux-mêmes.

## État actuel

### Points accomplis

- **Structure de base du quiz** : La structure de base du quiz avec des questions, des options de réponse et des boutons de navigation ("Retour" et "Question suivante") est implémentée.
- **Optimisations de la feuille de style** : Améliorations dans le `styles.css` pour une interface utilisateur cohérente et attrayante.
- **Affichage dynamique des questions** : Les questions et réponses sont chargées dynamiquement à partir d'un fichier JSON.
- **Affichage de la couleur de feedback** : L'affichage du feedback est réalisé avec un arrière-plan gris.
- **Amélioration de l'affichage du feedback** : Implémentation d'un codage couleur pour le feedback (vert pour les réponses correctes, rouge pour les réponses incorrectes) et ajustement de la couleur de la police en conséquence.
- **Alignement central de l'arrière-plan du feedback** : Correction de l'alignement pour que l'arrière-plan du feedback soit centré et cohérent avec la mise en page des questions et réponses.
- **Affichage des performances au premier essai** : Ajout d'une fonctionnalité pour afficher le nombre de questions répondues correctement au premier essai.

### À faire

- **Ajustement des positions des boutons** : Assurer que les boutons "Retour" et "Question suivante" restent statiques indépendamment de la longueur du texte de la question ou des options de réponse.
- **Écrire des tests** : Tester minutieusement et s'assurer que TestPrepWeb fonctionne de manière cohérente sur différents navigateurs et appareils.
- **Justification des questions** : Réfléchir si les questions devraient être affichées en justification pour améliorer la lisibilité.

## Fonctionnalités prévues

- **Conception réactive** : Optimisation de l'application quiz pour différentes tailles d'écran et appareils.
- **Vue d'ensemble des réponses incorrectes** : Créer un aperçu affichant les questions auxquelles on a répondu incorrectement avec les bonnes réponses, pour pouvoir les réviser.
- **Langues**: Rendre l'application disponible en plusieurs langues

## Développement continu

- **Extension du catalogue de questions** : Ajout de plus de questions et domaines au quiz.

## Contribution

- **Feedback et collaboration** : Les retours et contributions sont les bienvenus ! N'hésitez pas à ouvrir des issues ou à créer des pull requests pour des améliorations suggérées.

## Reconnaissance des sources externes

Une partie des questions et réponses utilisées dans ce dépôt est basée sur les matériaux de l'ISTQB® (International Software Testing Qualifications Board).
Ces matériaux sont utilisés en reconnaissant l'ISTQB® comme source et détenteur du droit d'auteur conformément à leurs directives.
Je remercie l'ISTQB® pour la mise à disposition de ces ressources et reconnais pleinement leur paternité.

## Licence

Ce projet est publié sous la [licence MIT](LICENSE/LICENSE.txt).

## Langues

- [Anglais](README.md)
- [Allemand](README_DE.md)
- [Français](README_FR.md)