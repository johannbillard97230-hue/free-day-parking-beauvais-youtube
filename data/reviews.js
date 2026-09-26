/* ============================================================
   FREE DAY PARKING BEAUVAIS — data/reviews.js
   ============================================================
   AVIS GOOGLE RÉELS — copie d'écran Google Business Profile
   fournie par le propriétaire le 26/09/2026.

   AJOUTER UN AVIS : copier un bloc { ... } et adapter.
   - author  : prénom + nom affichés sur Google
   - time    : période relative affichée par Google (ex. "il y a 2 semaines")
   - visited : mois affiché par Google ("Visité en septembre 2026")
   - text    : texte de l'avis (orthographe corrigée, contenu inchangé)

   STATISTIQUE affichée sur le site : 97 avis 5 étoiles sur 100 avis.
   À mettre à jour dans index.html (rechercher "97 avis 5 étoiles")
   et dans la variable ci-dessous.
   ============================================================ */

const GOOGLE_REVIEWS_STATS = {
  total: 100,          // nombre total d'avis Google
  fiveStars: 97        // avis notés 5 étoiles
};

const GOOGLE_REVIEWS = [
  {
    author: "Laurine Chesneau",
    time: "il y a 3 jours",
    visited: "septembre 2026",
    text: "Très pratique, parking sécurisé, proche de l'aéroport avec transfert compris. Personne agréable et ponctuelle. Je recommande."
  },
  {
    author: "Floriane DNS",
    time: "il y a 2 semaines",
    visited: "septembre 2026",
    text: "Je recommande ! Très professionnel, parking sécurisé, véhicule électrique spacieux, déposés à la porte de l'aéroport, bonne communication via WhatsApp. Un stress en moins lorsque l'on part en vacances !"
  },
  {
    author: "Nathalie Vervaeck",
    time: "il y a 2 semaines",
    visited: "septembre 2026",
    text: "Rien à redire. Monsieur très gentil et ponctuel. Je recommande à 100 %."
  },
  {
    author: "Binesavert",
    time: "il y a 3 semaines",
    visited: "septembre 2026",
    text: "Parfait de la prise en charge à la restitution de la voiture. Ponctualité, gentillesse, très réactif et très bon rapport qualité-prix : vous pouvez y aller en toute confiance. Je recommande à 200 %. Surtout, il accepte les départs aux aurores et les retours tardifs."
  },
  {
    author: "Tarik Raja",
    time: "il y a 4 semaines",
    visited: "septembre 2026",
    text: "J'ai fait énormément de parkings près des aéroports, mais honnêtement, je n'ai jamais vu un service aussi incroyable que celui-ci ! Au début, je vais être honnête, je pensais que ça pouvait être une arnaque, tellement les prix sont honnêtes et le fonctionnement paraît simple. Mais absolument pas : c'est fiable à 100 % ! La personne qui s'occupe du service est vraiment hyper gentille, professionnelle et réactive. Tout est rapide, simple et parfaitement organisé. Franchement, c'est un 10/10. En plus, j'avais oublié mon téléphone dans la navette et la personne est venue me le rendre ! Encore un énorme merci pour ça. Les prix sont vraiment très honnêtes, le service est impeccable et l'accueil au top. Je reviendrai sans hésiter et je recommande ce parking à 100 % !"
  },
  {
    author: "Prescillia Rousselin",
    time: "il y a 4 semaines",
    visited: "août 2026",
    text: "Très bon contact et ponctualité ! Personne très sérieuse dans son travail, tout s'est bien passé !"
  }
];
