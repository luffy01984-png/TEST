// ===== Service Worker Optimisé =====
const CACHE_NAME = 'renault-trucks-cse-v1.5'; // Incrémentez à chaque mise à jour

// Fichiers à pré-cacher (essentiels pour offline)
const PRECACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/style.css',
  '/assets/app.js',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/Header.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/elecctra.webp'
];

// Installation : pré-cache des fichiers essentiels
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting(); // Activation immédiate
});

// Activation : suppression des anciens caches
self.addEventListener('activate', event => {
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

// Fetch : Network-first pour HTML, CSS, JS ; Cache-first pour images et polices
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);

  // Network-first pour fichiers critiques
  if (request.destination === 'document' || 
      request.destination === 'script' || 
      request.destination === 'style') {

    event.respondWith(
      fetch(request).then(networkResponse => {
        // Mise à jour du cache
        caches.open(CACHE_NAME).then(cache => cache.put(request, networkResponse.clone()));
        return networkResponse;
      }).catch(() => caches.match(request))
    );

  } else {
    // Cache-first pour images et fonts
    event.respondWith(
      caches.match(request).then(cached => cached || fetch(request))
    );
  }
});

// Gestion du rechargement automatique lors de la mise à jour
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});
