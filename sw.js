const CACHE_NAME = "renault-cse-cache-v3.6"; // Changez ce numéro pour déclencher la mise à jour chez l'utilisateur
const ESSENTIALS_CACHE = [
  "/",
  "/index.html",
  "/manifest.json",
  "https://cdn.tailwindcss.com",
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
];
const IMAGE_CACHE = "renault-images-cache-v1";
const MAX_IMAGE_ITEMS = 50; 

// INSTALL
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ESSENTIALS_CACHE))
  );
});

// FETCH
self.addEventListener("fetch", event => {
  const requestUrl = new URL(event.request.url);

  // Stratégie de cache
  if (requestUrl.origin === location.origin || event.request.destination === "image") {
    event.respondWith(
      fetch(event.request)
        .then(networkResponse => {
          // Mise en cache des essentiels
          if (ESSENTIALS_CACHE.includes(event.request.url)) {
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, networkResponse.clone()));
          } 
          // Mise en cache des images avec limite
          else if (event.request.destination === "image") {
            caches.open(IMAGE_CACHE).then(async cache => {
              await cache.put(event.request, networkResponse.clone());
              limitCacheSize(IMAGE_CACHE, MAX_IMAGE_ITEMS);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Fallback en cas de hors connexion
          if (event.request.destination === "image") {
            return caches.match(event.request, { cacheName: IMAGE_CACHE });
          }
          return caches.match(event.request, { cacheName: CACHE_NAME });
        })
    );
  }
});

// Fonction de limitation du cache
async function limitCacheSize(cacheName, maxItems) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length > maxItems) {
    await cache.delete(keys[0]);
    limitCacheSize(cacheName, maxItems);
  }
}

// ACTIVATE
self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME, IMAGE_CACHE];
  event.waitUntil(
    Promise.all([
      // Nettoyage des vieux caches
      caches.keys().then(keys =>
        Promise.all(keys.map(key => !cacheWhitelist.includes(key) && caches.delete(key)))
      ),
      // MODIFICATION ICI : Force le SW à prendre le contrôle immédiat des pages ouvertes
      self.clients.claim()
    ])
  );
});

// Message pour activation immédiate (SKIP_WAITING)
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
