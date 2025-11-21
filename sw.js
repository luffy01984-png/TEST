// ===== Service Worker Optimisé =====
const CACHE_NAME = 'renault-trucks-cse-v1.6'; // Incrémenter à chaque mise à jour

// Fichiers locaux à pré-cacher
const PRECACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/style.css',
  '/assets/app.js',
  '/assets/Header.webp',
  '/assets/elecctra.webp'
  // Ne PAS inclure les CDN externes
];

// Installation : pré-cache des fichiers locaux
self.addEventListener('install', event => {
  console.log('SW: Installation en cours…');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE))
      .catch(err => console.error('SW: Erreur pré-cache', err))
  );
  self.skipWaiting(); // Active immédiatement le nouveau SW
});

// Activation : suppression des anciens caches
self.addEventListener('activate', event => {
  console.log('SW: Activation en cours…');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim(); // Prend le contrôle des pages ouvertes
});

// Fetch : Network-first pour HTML/JS/CSS, Cache-first pour images et fonts
self.addEventListener('fetch', event => {
  const request = event.request;

  // Fichiers critiques : network-first
  if (request.destination === 'document' ||
      request.destination === 'script' ||
      request.destination === 'style') {

    event.respondWith(
      fetch(request).then(networkResponse => {
        caches.open(CACHE_NAME).then(cache => cache.put(request, networkResponse.clone()));
        return networkResponse;
      }).catch(() => caches.match(request))
    );

  } else {
    // Images et fonts : cache-first
    event.respondWith(
      caches.match(request).then(cached => cached || fetch(request))
    );
  }
});

// Gestion du rechargement automatique lors de la mise à jour du SW
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});
