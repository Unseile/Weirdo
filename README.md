# Conception d'un jeu pour le cours d'ArchiOWeb et DevMobil à l'HEIG-VD

## Concept de jeu
Vous êtes à Weirdocity, une ville peuplée de « weirdos », des superhéros un peu nuls. Chaque partie débute avec 4 weirdos, dont les cinq compétences sont notées sur une échelle de 1 à 10 et démarrent à un niveau très bas. Pour obtenir un weirdo parfait, le joueur doit choisir d'accoupler des weirdos ensemble (en tenant compte de leurs compétences respectives) pour créer l'enfant parfait. 

### Objectif et fin du jeu 
Créer le weirdo final avec toutes les compétences au niveau maximum (10/10).

### Déroulement du jeu
Info : Le joueur est “dieu” (décide quels weirdos s’accouplent).
1. Le joueur se crée un compte
2. Générique de début (spermatozoïde super héro) - OPTIONNEL
3. Pop-up explicatif du jeu
3. Le joueur tombe dans un monde qui contient des weirdos
4. Il peut choisir deux weirdos pour faire un date (peut voir leur fiche de compétences)
5. Lancement du date minigame
6. Le date minigame est une préparation de cocktail. Il doit secouer le téléphone pour préparer le verre du date. Il faut s’arrêter juste dans la jauge.
7. Accouplement réussi → donne un enfant (update la toile de compétences)
8. Puis on retourne à l'étape 4

## Ressources REST
- à compléter

## Instructions d'installation 
### 1. Cloner le dépôt

```bash
git clone git@github.com:Unseile/Weirdo.git
cd <depot>
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer l'application

Faire cette commande dans le dossier `my-api`, ça run le backend:

```bash
npm run dev
```

## Déploiement

- API déployée sur **Render** : `https://weirdo-14wu.onrender.com`
- Base de données sur **MongoDB Atlas** (MongoDB 8.0)
- La variable `MONGODB_URI` est déjà définie dans les variables d'environnement de Render.


## Technologies utilisées

### Backend
- **Node.js** : environnement d'exécution JavaScript
- **Express** : framework web pour l'API REST
- **MongoDB 8.0** : base de données NoSQL
- **Mongoose 9.12** : modélisation des données (schémas, validation)

### Authentification et sécurité
- à définir

### Temps réel
- à définir

### Outils de développement et de test
- **Postman** : test manuel des routes de l'API
- **mongosh** : shell MongoDB
- **MongoDB Compass** : interface graphique (optionnel)
- **GitHub** : gestion de version

### Déploiement
- **Render** : hébergement de l'API
- **MongoDB Atlas** : base de données dans le cloud


## Liens utiles
- Instructions partie ArchiOWeb : https://github.com/MediaComem/comem-archioweb#project-roadmap
- Instructions partie DevMobil : https://chabloz.eu/devmobil/index.html
- FigJam (privé) : https://www.figma.com/board/QBPahGbmvWJFmnXWyEjZlP/brainstorm-archioweb?node-id=0-1&t=nKbcA1XfUSrFUM0A-1
