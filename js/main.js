/* ============================================================
   FREE DAY PARKING BEAUVAIS — js/main.js
   Aucune dépendance. Vanilla JS uniquement.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 1. URL de réservation + paramètres UTM ----------
     Tout lien portant l'attribut [data-reservation-link] reçoit
     automatiquement :
       - l'URL de réservation configurée dans js/config.js ;
       - les paramètres UTM présents dans l'URL de la page visitée
         (utm_source, utm_medium, utm_campaign, utm_term, utm_content),
         ou les UTM par défaut de la config si aucun n'est présent.

     Exemple : un visiteur arrivant via
     https://votre-site.netlify.app/?utm_source=tiktok&utm_medium=social
     transmettra ces paramètres au lien "Réserver".
     ---------------------------------------------------------- */
  function applyReservationLinks() {
    var params = new URLSearchParams(window.location.search);
    var utm = {};
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach(function (key) {
      var value = params.get(key);
      if (value) { utm[key] = value; }
    });
    if (!utm.utm_source && !utm.utm_medium && !utm.utm_campaign) {
      utm = Object.assign({}, SITE_CONFIG.defaultUtm);
    }

    document.querySelectorAll("[data-reservation-link]").forEach(function (link) {
      var url;
      try {
        url = new URL(SITE_CONFIG.reservationUrl);
      } catch (e) {
        return; // URL invalide : on ne touche pas au lien
      }
      Object.keys(utm).forEach(function (key) { url.searchParams.set(key, utm[key]); });
      link.href = url.toString();
      if (url.hostname !== window.location.hostname) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener");
      }
    });
  }

  /* ---------- 2. Lien "Voir les avis Google" ---------- */
  function applyGoogleReviewsLink() {
    var url = SITE_CONFIG.googleReviewsUrl;
    document.querySelectorAll("[data-google-reviews-link]").forEach(function (link) {
      if (url) {
        link.href = url;
      } else {
        // Lien non configuré : on neutralise proprement et on documente dans la console.
        link.removeAttribute("href");
        link.setAttribute("role", "button");
        link.setAttribute("aria-disabled", "true");
        link.style.opacity = ".55";
        link.style.cursor = "not-allowed";
        link.title = "Lien à configurer dans js/config.js (googleReviewsUrl)";
        console.info("[Free Day Parking Beauvais] Renseignez googleReviewsUrl dans js/config.js pour activer le bouton « Voir les avis Google ».");
      }
    });
  }

  /* ---------- 3. Cartes vidéos (depuis data/videos.js) ---------- */
  function renderVideos() {
    var grid = document.querySelector("[data-videos-grid]");
    if (!grid || typeof YOUTUBE_VIDEOS === "undefined") { return; }

    var cards = YOUTUBE_VIDEOS.map(function (video) {
      var watchUrl = "https://www.youtube.com/watch?v=" + encodeURIComponent(video.id);
      var thumbUrl = "https://i.ytimg.com/vi/" + encodeURIComponent(video.id) + "/hqdefault.jpg";
      var kindLabel = video.kind === "short" ? "Short" : "Vidéo";
      return (
        '<article class="video-card">' +
          '<a class="video-thumb" href="' + watchUrl + '" target="_blank" rel="noopener" aria-label="Regarder la vidéo « ' + escapeHtml(video.title) + ' » sur YouTube">' +
            '<img src="' + thumbUrl + '" alt="Miniature de la vidéo « ' + escapeHtml(video.title) + ' »" width="480" height="270" loading="lazy" decoding="async">' +
            '<span class="video-kind">' + kindLabel + '</span>' +
            '<span class="video-play" aria-hidden="true"><span><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5-11-6.5Z"/></svg></span></span>' +
          '</a>' +
          '<div class="video-body">' +
            '<h3>' + escapeHtml(video.title) + '</h3>' +
            '<p>' + escapeHtml(video.description) + '</p>' +
            '<a class="video-link" href="' + watchUrl + '" target="_blank" rel="noopener">Regarder sur YouTube' +
              '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
            '</a>' +
          '</div>' +
        '</article>'
      );
    });

    grid.innerHTML = cards.join("");
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }


  /* ---------- 3b. Avis Google réels (depuis data/reviews.js) ---------- */
  var STAR_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2Z"/></svg>';

  function renderReviews() {
    var slot = document.querySelector("[data-reviews-slot]");
    if (!slot || typeof GOOGLE_REVIEWS === "undefined") { return; }
    var stars = new Array(6).join(STAR_SVG); // 5 étoiles
    var cards = GOOGLE_REVIEWS.map(function (review) {
      return (
        '<figure class="review-card">' +
          '<div class="review-stars" role="img" aria-label="Avis noté 5 étoiles sur 5">' + stars + '</div>' +
          '<blockquote class="review-text"><p>«&nbsp;' + escapeHtml(review.text) + '&nbsp;»</p></blockquote>' +
          '<figcaption class="review-meta">' +
            '<span class="review-author">' + escapeHtml(review.author) + '</span>' +
            '<span class="review-date">' + escapeHtml(review.time) + ' &middot; Visité en ' + escapeHtml(review.visited) + '</span>' +
            '<span class="review-source">' +
              '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.35 11.1H12v3.9h5.35c-.5 2.4-2.6 3.9-5.35 3.9a5.9 5.9 0 1 1 0-11.8c1.5 0 2.85.55 3.9 1.45l2.85-2.85A9.9 9.9 0 1 0 12 21.9c5.7 0 9.5-4 9.5-9.65 0-.4-.05-.8-.15-1.15Z"/></svg>' +
              'Avis Google' +
            '</span>' +
          '</figcaption>' +
        '</figure>'
      );
    });
    slot.classList.remove("reviews-placeholder");
    slot.innerHTML = cards.join("");
  }

  /* ---------- 4. Logo officiel (avec repli texte propre) ---------- */
  function setupLogoFallback() {
    var logo = document.querySelector("[data-logo]");
    var fallback = document.querySelector("[data-brand-fallback]");
    if (!logo || !fallback) { return; }
    function showFallback() {
      logo.hidden = true;
      fallback.hidden = false;
    }
    logo.addEventListener("error", showFallback);
    if (logo.complete && logo.naturalWidth === 0) { showFallback(); }
  }

  /* ---------- 5. Header : état scrollé + menu mobile ---------- */
  function setupHeader() {
    var header = document.querySelector("[data-header]");
    var toggle = document.querySelector("[data-nav-toggle]");
    if (!header) { return; }

    function onScroll() {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (toggle) {
      toggle.addEventListener("click", function () {
        var open = header.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
      });
      // Fermer le menu après un clic sur un lien (mobile)
      header.querySelectorAll(".main-nav a").forEach(function (link) {
        link.addEventListener("click", function () {
          header.classList.remove("nav-open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }
  }

  /* ---------- 6. Animations d'apparition (défilement) ---------- */
  function setupReveal() {
    var elements = document.querySelectorAll("[data-reveal]");
    if (!elements.length) { return; }
    if (!("IntersectionObserver" in window)) {
      elements.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    elements.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- 7. Année automatique du footer ---------- */
  function setupYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  /* ---------- 8. Google Analytics (optionnel) ----------
     S'active uniquement si analyticsId est renseigné dans js/config.js.
     Aucun identifiant inventé : tant que la valeur est vide, rien
     n'est chargé. Complétez aussi politique-confidentialite.html. */
  function setupAnalytics() {
    var id = SITE_CONFIG.analyticsId;
    if (!id) { return; }
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", id);
  }

  /* ---------- Initialisation ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    applyReservationLinks();
    applyGoogleReviewsLink();
    renderVideos();
    renderReviews();
    setupLogoFallback();
    setupHeader();
    setupReveal();
    setupYear();
    setupAnalytics();
  });
})();
