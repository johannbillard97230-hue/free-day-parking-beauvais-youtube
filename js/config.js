/* ============================================================
   FREE DAY PARKING BEAUVAIS — js/config.js
   ============================================================
   CENTRALISEZ TOUTES LES MODIFICATIONS COURANTES ICI.

   1. reservationUrl   → URL de votre page de réservation.
                         À REMPLACER par la vraie URL de réservation
                         dès que possible (actuellement : page d'accueil
                         du site officiel, fournie dans le brief).
   2. googleReviewsUrl → URL de votre fiche Google Business Profile
                         (bouton "Voir les avis Google"). ✅ Renseignée le 26/09/2026.
                         tant qu'elle n'est pas disponible.
   3. analyticsId      → identifiant Google Analytics (format G-XXXXXXXXXX).
                         Laisser vide "" tant qu'il n'est pas disponible.
   4. defaultUtm       → paramètres UTM ajoutés aux liens de réservation
                         quand aucun UTM n'est présent dans l'URL visitée.
   ============================================================ */

const SITE_CONFIG = {
  reservationUrl: "https://www.freedayparkingbeauvais.com/",
  googleReviewsUrl: "https://www.google.com/maps/place/FreeDayParkingBeauvais+(25%E2%82%AC+pour+7+jours+avec+navette+aller+%2F+retour)/@49.4215075,2.0704149,838m/data=!3m2!1e3!5s0x47e70136f1ee5bbb:0x5750ca7bab9c3e4a!4m18!1m9!4m8!1m0!1m6!1m2!1s0x47e7011af3fc9665:0xd51e7841cd21f3fc!2sFreeDayParkingBeauvais+(25%E2%82%AC+pour+7+jours+avec+navette+aller+%2F+retour),+4+Rue+Pierre+Chardeaux,+60000+Beauvais!2m2!1d2.0752858!2d49.4215076!3m7!1s0x47e7011af3fc9665:0xd51e7841cd21f3fc!8m2!3d49.4215076!4d2.0752858!9m1!1b1!16s%2Fg%2F11yh0xb2gn",
  analyticsId: "",

  defaultUtm: {
    utm_source: "site",
    utm_medium: "cta",
    utm_campaign: "landing-youtube"
  }
};
