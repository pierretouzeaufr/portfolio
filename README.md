# Portfolio Pierre Touzeau

Portfolio moderne et minimaliste de **Pierre Touzeau**, Cloud DevOps Engineer & Backend Engineer.

![Portfolio Preview](./preview.png)

## 🎨 Design

- **Style**: Glassmorphism + Bento Grid
- **Animations**: Framer Motion pour des transitions fluides
- **Couleurs**: Dégradés cyan → bleu → violet sur fond sombre
- **Typography**: Inter (system-ui)

## 🛠️ Technologies

- **React 19** + **TypeScript**
- **Tailwind CSS 3** pour le styling
- **Vite** pour le build
- **Framer Motion** pour les animations
- **Lucide React** pour les icônes

## 📁 Structure

```
portfolio-pierre/
├── src/
│   ├── App.tsx          # Composant principal avec toutes les données
│   ├── index.css        # Styles Tailwind + custom
│   └── main.tsx         # Point d'entrée
├── index.html           # HTML template
├── vite.config.ts       # Config Vite (export statique)
├── tailwind.config.js   # Config Tailwind
└── package.json
```

## 🚀 Développement local

```bash
# Installation des dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Le site sera accessible sur http://localhost:5173
```

## 📦 Build pour production

```bash
# Créer le build statique
npm run build

# Les fichiers seront dans le dossier `dist/`
```


## ✏️ Personnalisation

Toutes les données du portfolio sont centralisées dans l'objet `DATA` au début du fichier `src/App.tsx` :

```typescript
const DATA = {
  personal: {
    name: "Votre Nom",
    title: "Votre Titre",
    // ...
  },
  experiences: [...],
  education: [...],
  skills: {...},
  // ...
};
```

