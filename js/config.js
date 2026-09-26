/* ============================================================
   FREE DAY PARKING BEAUVAIS — js/config.js
   ============================================================
   CENTRALISEZ TOUTES LES MODIFICATIONS COURANTES ICI.

   1. reservationUrl   → URL de votre page de réservation.
                         À REMPLACER par la vraie URL de réservation
                         dès que possible (actuellement : page d'accueil
                         du site officiel, fournie dans le brief).
   2. googleReviewsUrl → URL de votre fiche Google Business Profile
                         (bouton "Voir les avis Google"). Laisser vide ""
                         tant qu'elle n'est pas disponible.
   3. analyticsId      → identifiant Google Analytics (format G-XXXXXXXXXX).
                         Laisser vide "" tant qu'il n'est pas disponible.
   4. defaultUtm       → paramètres UTM ajoutés aux liens de réservation
                         quand aucun UTM n'est présent dans l'URL visitée.
   ============================================================ */

const SITE_CONFIG = {
  reservationUrl: "https://www.freedayparkingbeauvais.com/",
  googleReviewsUrl: "",
  analyticsId: "",

  defaultUtm: {
    utm_source: "site",
    utm_medium: "cta",
    utm_campaign: "landing-youtube"
  }
};
