# Documentation Technique - AVSConciergerie - IA

## Structure du Projet

Le projet est structuré comme suit :

-   **`/` (Racine)**
    -   `index.html`: Page d'accueil de l'application (style jeu des années 80).
    -   `chat.html`: Interface de chat principale.
    -   `style.css`: Styles CSS pour l'interface de chat.
    -   `index.css`: Styles CSS pour la page d'accueil.
    -   `script.js`: Script JavaScript pour la logique de l'interface de chat.
    -   `index.js`: Script JavaScript pour la page d'accueil.
    -   `theme.js`:  Module JavaScript pour la gestion du thème (clair/sombre).
    -   `logo.png`: Logo de l'application.
    -   `package.json`: Fichier de configuration du projet Node.js (dépendances, scripts).
-   **`docs/`**
    -   `technical_documentation.md`: Ce fichier de documentation technique.

## Configuration et Démarrage

1.  **Prérequis:**
    -   Node.js et npm installés.

2.  **Installation des Dépendances:**
    -   Exécutez `npm install` à la racine du projet pour installer les dépendances (Vite).

3.  **Démarrage du Serveur de Développement:**
    -   Exécutez `npm run dev`. Cela démarrera un serveur de développement local avec rechargement automatique.

4.  **Accès à l'Application:**
  - Ouvrez un navigateur et accédez à l'URL fournie par le serveur de développement (généralement `http://localhost:5173`).

## Fonctionnalités

### Page d'Accueil (`index.html`)

-   Affiche un écran de bienvenue de style jeu des années 80.
-   Contient deux boutons :
    -   "En savoir plus": Affiche une alerte (fonctionnalité à implémenter).
    -   "Démarrer": Redirige vers l'interface de chat (`chat.html`).
-   **Bascule de Thème (Soleil/Lune):** Permet de changer entre le mode clair et le mode sombre (design avec icônes Google Fonts, en bas à gauche, soleil affiché par défaut).

### Interface de Chat (`chat.html`)

-   **Barre Latérale (Sidebar):**
    -   Bouton "+ Nouvelle conversation": Efface l'historique de la conversation actuelle.
    -   Liste d'historique des conversations (statique pour l'instant).

-   **En-tête (Header):**
    -   Affiche le logo (cliquable et redirige vers la page d'accueil).  Le logo est centré.
    -   Bouton "Connexion" (non fonctionnel, pour l'instant). Le bouton est aligné à gauche.

-   **Zone de Chat Principale:**
    -   Affiche les messages de l'utilisateur et du bot.
    -   Affiche un indicateur de chargement ("Réflexion...") pendant la simulation de la réponse du bot.

-   **Barre de Saisie:**
    -   Champ de texte pour taper le message.
    -   Bouton "Envoyer" (➤).
    -   Boutons pour attacher des fichiers (📎) et ajouter des emojis (😊) (non fonctionnels, pour l'instant).
-   **Bascule de Thème (Soleil/Lune):** Permet de changer entre le mode clair et le mode sombre (design avec icônes Google Fonts, en bas à gauche, soleil affiché par défaut).

## JavaScript

-   **`index.js`:**
    -   Gère la redirection vers `chat.html`.
    -   Importe et initialise la gestion du thème avec `initTheme()` de `theme.js`.
-   **`script.js`:**
    -   `addMessage(text, isUser)`: Ajoute un message à la zone de chat.
    -   `simulateBotResponse(userMessage)`: Simule une réponse du bot après un délai.
    -   Gère les événements des boutons "Envoyer", "Nouvelle conversation".
    -   Importe et initialise la gestion du thème avec `initTheme()` de `theme.js`.
- **`theme.js`:**
    -   `applyTheme(theme)`: Applique le thème (clair/sombre) en utilisant l'attribut `data-theme` sur l'élément `<html>` et sauvegarde le thème dans `localStorage`. Met à jour l'icône de thème.
    -   `toggleTheme()`:  Bascule entre les thèmes clair et sombre.
    -   `updateIcon(theme)`: Met à jour l'icône affichée (soleil/lune) en fonction du thème actuel.
    -   `initTheme()`:
        -   Charge le thème sauvegardé depuis `localStorage`.
        -   Si aucun thème n'est sauvegardé, détecte la préférence de l'utilisateur (clair/sombre) avec `window.matchMedia('(prefers-color-scheme: dark)')`.
        -   Applique le thème détecté ou sauvegardé.
        -   Met à jour l'icône affichée (soleil/lune) en fonction du thème initial.
        -   Ajoute un écouteur d'événements au bouton de bascule de thème pour appeler `toggleTheme()` lors du changement d'état de la checkbox.

## Améliorations Futures

-   Implémenter la fonctionnalité "En savoir plus".
-   Implémenter la fonctionnalité de connexion.
-   Ajouter la logique pour attacher des fichiers et ajouter des emojis.
-   Connecter l'interface à une véritable IA pour les réponses du bot.
-   Implémenter la persistance de l'historique des conversations (par exemple, avec LocalStorage).
-   Ajouter la possibilité de charger/sauvegarder des conversations.
</boltArtifact>

  <boltAction type="start">npm run dev
