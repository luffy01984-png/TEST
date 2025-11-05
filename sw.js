// Nom du cache (à changer à chaque mise à jour pour forcer le refresh)
const CACHE_NAME = "cse-renault-trucks-v1";

// Liste des fichiers à mettre en cache
const ASSETS = [
  "/Renault-trucks-CE/",
  "/Renault-trucks-CE/index.html",
  "/Renault-trucks-CE/manifest.json",
  "/Renault-trucks-CE/assets/1761728183491.jpg",
  "https://cdn.tailwindcss.com",
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
];

// Installation du service worker → mise en cache initiale
self.addEventListener("install", (event) => {
  console.log("🛠️ Installation du Service Worker...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting(); // activation immédiate
});

// Activation → nettoyage des anciens caches
self.addEventListener("activate", (event) => {
  console.log("⚙️ Activation du Service Worker...");
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("🧹 Suppression de l'ancien cache :", key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim(); // prend le contrôle immédiatement
});

// Interception des requêtes → cache + réseau de secours
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // réponse depuis le cache
      }

      // Sinon, on va chercher sur le réseau et on met en cache
      return fetch(event.request)
        .then((response) => {
          // Évite de mettre en cache les requêtes non valides
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response;
          }

          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });

          return response;
        })
        .catch(() => {
          // Mode hors ligne : renvoie une page fallback si souhaité
          return caches.match("/Renault-trucks-CE/index.html");
        });
    })
  );
});
