/* ============================================================
   FREE DAY PARKING BEAUVAIS — data/videos.js
   ============================================================
   AJOUTER OU MODIFIER UNE VIDÉO = modifier UNIQUEMENT ce fichier.

   Chaque vidéo :
   {
     id:      "identifiant YouTube" (extrait de l'URL : youtube.com/watch?v=XXXX)
     title:   "titre exact de la vidéo",
     description: "courte description affichée sur la carte",
     kind:    "video" (vidéo classique) ou "short" (YouTube Short)
   }

   La miniature est générée automatiquement par js/main.js à partir
   de l'identifiant (https://i.ytimg.com/vi/<id>/hqdefault.jpg) :
   aucune image à héberger, aucune clé API YouTube nécessaire.

   Les titres ci-dessous proviennent des résultats publics de la
   chaîne @FreeDayParkingBeauvais (vérifiés le 26/09/2026).
   Merci de vérifier que chaque titre correspond exactement au titre
   affiché sur YouTube avant publication.
   ============================================================ */

const YOUTUBE_VIDEOS = [
  {
    id: "XmHuYzTfU78",
    title: "Parking avec navette aéroport Beauvais-Tillé",
    description: "Découvrez Free Day Parking Beauvais : parking privé proche de l'aéroport Beauvais-Tillé, avec navette incluse.",
    kind: "video"
  },
  {
    id: "ql1SILkswhU",
    title: "Parking Aéroport Beauvais avec Navette | 82 Avis ⭐⭐⭐⭐⭐",
    description: "Le parking aéroport Beauvais avec navette présenté en vidéo : présentation du service et du parcours voyageur.",
    kind: "video"
  },
  {
    id: "BbVUKh0lsB0",
    title: "Parking Aéroport Beauvais : 96 Avis 5 Étoiles sur 99 ⭐",
    description: "Les voyageurs racontent leur expérience : stationnement économique et navette vers l'aéroport de Beauvais.",
    kind: "video"
  },
  {
    id: "OScRS3xbehk",
    title: "🅿️ Parking Beauvais Aéroport : 7 jours à 25 € avec navette ✈️",
    description: "L'offre 25 € TTC pour 7 jours expliquée en 1 minute : 3 jours offerts, navette aller-retour incluse.",
    kind: "short"
  },
  {
    id: "WVXo75oxm88",
    title: "Parking Aéroport Beauvais : les avantages du P1, voire plus…",
    description: "Les avantages du parking P1 à l'aéroport, sans en payer le prix : l'alternative économique avec navette.",
    kind: "short"
  },
  {
    id: "1jTJ3gVre_c",
    title: "Parking Aéroport Beauvais 😂 Quand tu découvres que tu aurais pu payer seulement 25 € pour 7 jours !",
    description: "Vous avez déjà payé votre parking trop cher ? Découvrez la solution économique près de l'aéroport de Beauvais.",
    kind: "short"
  },
  {
    id: "u_swmK9wYmk",
    title: "Parking Aéroport Beauvais : encore un avis 5 étoiles ⭐",
    description: "Encore un avis 5 étoiles de la part d'un voyageur : navette incluse, transfert rapide, service 24h/24.",
    kind: "short"
  },
  {
    id: "JjuJvaYbhzw",
    title: "Comment trouver une place de parking pas cher à l'aéroport de Beauvais",
    description: "La méthode simple pour trouver une place de parking économique avant votre départ de l'aéroport de Beauvais.",
    kind: "video"
  }
];
