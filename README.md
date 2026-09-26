# Free Day Parking Beauvais — Site web (V2)

Landing page de conversion **mobile-first**, SEO-ready et 100 % statique,
centrée sur la chaîne YouTube de l'activité :
👉 https://www.youtube.com/@FreeDayParkingBeauvais

**Aucun framework. Aucune clé API. Aucune base de données.**
Le site fonctionne tel quel avec les fichiers de ce repository, déployé sur Netlify.

---

## 1. Aperçu du projet

Parcours visiteur conçu : **Vidéo → Intérêt → Informations → Confiance → Offre → Réservation**

Sections de la page (`index.html`) :

1. Hero — parking près de l'aéroport de Beauvais, 25 € TTC / 7 jours, navette incluse
2. Bandeau défilant des avantages clés
3. **Nos vidéos** — cartes générées depuis `data/videos.js`
4. Conversion intermédiaire
5. **Offre** — 25 € TTC / 7 jours + règle de tarification + newsletter
6. Avantages (navette 24h/24, parking couvert, annulation gratuite…)
7. Comment ça marche (4 étapes)
8. Avis / confiance (structure prête, aucun avis inventé)
9. FAQ (10 questions, données structurées `FAQPage`)
10. CTA final + Footer

---

## 2. Structure du repository

```
/
├── index.html                  ← la page principale
├── mentions-legales.html       ← placeholder (À REMPLIR avant mise en ligne)
├── politique-confidentialite.html ← placeholder (À REMPLIR)
├── robots.txt
├── sitemap.xml
├── netlify.toml
├── .env.example                ← documentation seule (aucun secret)
├── README.md                   ← ce fichier
├── assets/
│   ├── images/
│   │   ├── og-image.png        ← image de partage social (générée)
│   │   └── README.md           ← où placer les vraies photos
│   ├── logo/
│   │   └── README.md           ← où placer le logo officiel
│   └── icons/
│       ├── favicon.svg
│       └── favicon.png
├── css/
│   └── style.css               ← tout le design (mobile-first)
├── js/
│   ├── config.js               ← ★ PRIX/LIENS/ANALYTICS : tout se modifie ici
│   └── main.js                 ← logique (aucune dépendance)
└── data/
    └── videos.js               ← ★ AJOUTER/MODIFIER LES VIDÉOS ICI
```

---

## 3. Déploiement GitHub → Netlify

### 3.1 Créer le repository GitHub

```bash
# Dans le dossier du projet
git init
git add .
git commit -m "Initial commit : site V2 Free Day Parking Beauvais"
```

1. Sur https://github.com → **New repository** → nom : `freedayparkingbeauvais-site` (par ex.)
2. **Ne pas** ajouter de README/licence via GitHub (les fichiers existent déjà)
3. Pousser le code :

```bash
git remote add origin https://github.com/VOTRE_COMPTE/freedayparkingbeauvais-site.git
git branch -M main
git push -u origin main
```

### 3.2 Connecter Netlify

1. https://app.netlify.com → **Add new site → Import an existing project**
2. Choisir **GitHub** et autoriser l'accès
3. Sélectionner le repository
4. Paramètres de build (tout est déjà dans `netlify.toml`) :
   - **Build command** : *(vide)*
   - **Publish directory** : `.`
   - **Branch** : `main` ✅ **Production branch**
5. **Deploy** → Netlify fournit une URL du type `https://votre-site.netlify.app`

### 3.3 Nouveaux déploiements

Chaque `git push` sur `main` déclenche un déploiement automatique.
Historique et possibilité de **rollback** (retour à une version précédente en 1 clic) :
**Netlify → Deploys**.

---

## 4. Modifications courantes (sans toucher au reste)

### 4.1 Ajouter / modifier une vidéo

Éditer **uniquement** `data/videos.js` :

```js
{
  id: "XXXXXXXXXXX",              // identifiant dans l'URL youtube.com/watch?v=XXXXXXXXXXX
  title: "Titre exact de la vidéo",
  description: "Courte description affichée sur la carte.",
  kind: "video"                   // ou "short" pour un YouTube Short
}
```

- La miniature est générée **automatiquement** depuis l'identifiant
  (`i.ytimg.com`) : rien d'autre à faire, aucune clé API.
- Commiter → push → le site est mis à jour en quelques secondes.

### 4.2 Modifier le prix ou l'offre

Les prix sont dans **deux endroits** :

1. `js/config.js` → *pas de prix* (prix = contenu éditorial)
2. `index.html` → sections **Offre** (`#offre`) et **FAQ**
   (rechercher `25`, `7&nbsp;€`, `6&nbsp;€`, `3 jours offerts`)

⚠️ Pensez à mettre à jour **aussi** les données structurées JSON-LD
(offre, FAQ) dans l'en-tête de `index.html` pour rester cohérent côté SEO.

### 4.3 Modifier le lien de réservation

Un seul endroit : **`js/config.js`** → `reservationUrl`.
Tous les boutons « Réserver » du site sont mis à jour automatiquement,
**avec transmission des paramètres UTM**.

### 4.4 Lien « Voir les avis Google »

`js/config.js` → `googleReviewsUrl`.
Tant qu'il est vide, le bouton est affiché désactivé (aucun lien cassé).
Une fois renseigné, il s'active automatiquement.

### 4.5 Ajouter Google Analytics

`js/config.js` → `analyticsId = "G-XXXXXXXXXX"`.
Le script se charge automatiquement **uniquement** si l'identifiant est
renseigné (rien n'est chargé sinon → RGPD-friendly par défaut).
⚠️ Complétez alors `politique-confidentialite.html`.

### 4.6 Déposer le logo officiel

Voir `assets/logo/README.md` : placer `logo.svg` (ou `logo.png`) dans
`assets/logo/`. **Ne pas modifier le logo.** Tant qu'il est absent, le nom
s'affiche en texte (aucune erreur, aucune image cassée).

### 4.7 Remplacer l'illustration du hero par de vraies photos

Voir `assets/images/README.md`. **Ne jamais présenter une photo de banque
d'images comme le parking réel.**

---

## 5. Tracking UTM des CTA

Les liens `[data-reservation-link]` transmettent automatiquement les
paramètres UTM de l'URL visitée à la page de réservation :

| Arrivée du visiteur via | Résultat sur le lien « Réserver » |
|---|---|
| `?utm_source=tiktok&utm_medium=social` | `reservationUrl?utm_source=tiktok&utm_medium=social…` |
| `?utm_source=youtube&utm_medium=description` | idem, valeurs YouTube transmises |
| aucun paramètre | UTM par défaut configurés dans `js/config.js` (`defaultUtm`) |

Pour créer un lien traqué depuis une vidéo TikTok/YouTube, utilisez :
`https://votre-site.netlify.app/?utm_source=tiktok&utm_medium=social&utm_campaign=video-25euros`

---

## 6. Test avant migration (domaine actuel préservé)

1. Tester la nouvelle version sur l'URL Netlify (`https://xxx.netlify.app`) :
   mobile, tablette, ordinateur.
2. **Ne pas toucher** au site actuel :
   `https://www.freedayparkingbeauvais.com/youtube-location-parking-beauvais-25-euros-les-7-jours`
   reste en ligne tel quel pendant les tests.
3. Une fois validé, connecter le domaine personnalisé dans Netlify :
   **Domain settings → Add custom domain → `www.freedayparkingbeauvais.com`**,
   puis mettre à jour les enregistrements DNS chez le registrar
   (A record vers `75.2.60.5`, CNAME `www` vers `votre-site.netlify.app` —
   valeurs exactes indiquées par Netlify au moment de l'ajout).
   HTTPS gratuit via Let's Encrypt (bouton **Verify DNS → Provision certificate**).
4. ⚠️ Avant bascule : mettre à jour `sitemap.xml`, `robots.txt`, le
   `canonical` et les URL `og:` dans `index.html` si besoin
   (les valeurs officielles du domaine sont déjà pré-remplies).

---

## 7. Sécurité

- ✅ Aucun secret, token ou mot de passe dans le code
- ✅ Aucune API payante requise
- ✅ En-têtes de sécurité configurés dans `netlify.toml`
  (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`)
- ⚠️ Compte tenu des avis Google : ne pas exposer la moindre clé
  dans le code côté client (les futurs avis s'intégreront en front
  via un mécanisme sans secret, ou via un script de build).

---

## 8. Évolution prévue : affichage automatique des avis Google

Le compte de service Google Business Profile est prêt. Deux options
(documentées ici pour plus tard, **non implémentées volontairement** pour
ne pas exposer de clé) :

1. **Option recommandée (sans secret exposé)** : un petit script exécuté
   localement ou en CI (GitHub Actions, secret dans les *repository
   secrets*) qui récupère les avis via l'API Google My Business et écrit
   `data/reviews.js` à chaque changement. Le site reste 100 % statique.
2. **Option dynamique** : une Netlify Function servant de relais sécurisé
   (clé stockée dans les variables d'environnement Netlify, jamais dans
   le code). À documenter ici si cette voie est choisie.

La section `#avis` contient déjà l'emplacement `[data-reviews-slot]` prêt
à accueillir ces avis.

---

## 9. Checklist avant mise en ligne définitive

- [ ] `reservationUrl` renseigné dans `js/config.js`
- [ ] `googleReviewsUrl` renseigné (sinon bouton désactivé, ok pour un lancement)
- [ ] Logo officiel déposé dans `assets/logo/`
- [ ] Titres des vidéos dans `data/videos.js` vérifiés sur YouTube
- [ ] `mentions-legales.html` complétée
- [ ] `politique-confidentialite.html` complétée (obligatoire dès Analytics)
- [ ] Test mobile + desktop sur l'URL Netlify
- [ ] Test des boutons « Réserver » avec paramètres UTM
- [ ] DNS/domaine basculés uniquement après validation complète
