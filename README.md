# Frais & Congelé

Site vitrine React + Vite pour Frais & Congelé, marque de Liberty SARL, spécialisée dans la vente de produits surgelés et alimentaires.

## Technologies utilisées

- React
- Vite
- React Router DOM
- Lucide React
- CSS moderne avec design Bento Grid

## Structure du projet

```text
src/
├── config/
│   └── siteConfig.js
├── data/
│   └── products.js
├── pages/
│   ├── HomePage.jsx
│   ├── ProductsPage.jsx
│   ├── WholesalePage.jsx
│   ├── RetailPage.jsx
│   ├── AboutPage.jsx
│   └── ContactPage.jsx
├── App.jsx
├── index.css
├── main.jsx
└── ...
public/
├── logo.svg
└── ...
```

## Installation

```bash
npm install
```

## Démarrage en développement

```bash
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

## Déploiement sur Vercel

Le projet est configuré pour Vercel avec `vercel.json` : Vercel exécute
`npm run build`, publie le dossier `dist` et redirige les routes React Router
vers l’application pour permettre leur accès direct.

Pour déployer :

1. Importer le dépôt Git du projet dans Vercel.
2. Garder les paramètres détectés ou définir le framework sur **Vite**.
3. Vérifier la commande de build `npm run build` et le dossier de sortie `dist`.
4. Lancer le déploiement.

Le déploiement peut aussi être lancé depuis le terminal avec la CLI Vercel :

```bash
npx vercel
```

Pour publier en production :

```bash
npx vercel --prod
```

## Emplacement des images

Les visuels de démonstration sont gérés via des URLs d’images et le logo est disponible dans `public/logo.svg`.
Pour remplacer les visuels ou ajouter des produits réels, modifier :

- `src/data/products.js`
- `src/pages/HomePage.jsx`

## Modifier les informations de l’entreprise

Les coordonnées et le texte central de l’entreprise sont centralisés dans :

- `src/config/siteConfig.js`

Vous pouvez y compléter :

- le nom commercial,
- le slogan,
- la description,
- l’adresse,
- le téléphone,
- l’e-mail,
- le WhatsApp,
- les villes concernées.

## Fonctionnalités nécessitant un backend ou une intégration

- envoi réel du formulaire de contact,
- intégration WhatsApp avec numéro officiel,
- gestion dynamique des stocks ou des prix,
- connexion à un CMS ou un back-office de gestion produits.
