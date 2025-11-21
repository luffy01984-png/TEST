const CACHE_NAME = 'renault-trucks-cse-v1.5'; // Incrémentez à chaque update

// Ressources à pré-cacher (offline)
const PRECACHE = [
  '/',
  '/index.html',
  '/manifest.json',

  // CDN
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',

  // Images principales (optionnel)
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/Header.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/elecctra.webp'
];

// INSTALLATION — Pré-cache les fichiers essentiels
self.addEventListener('install', event => {
  console.log('SW: Installation…');

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('SW: Pré-cache…');
      return cache.addAll(PRECACHE);
    })
  );

  self.skipWaiting(); // Active immédiatement la nouvelle version
});

// ACTIVATION — Supprime les anciens caches
self.addEventListener('activate', event => {
  console.log('SW: Activation…');

  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('SW: Suppression cache obsolete :', key);
            return caches.delete(key);
          }
        })
      )
    )
  );

  self.clients.claim();
});

// FETCH — Stratégie Network First
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Si OK → mise à jour du cache
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        // Hors-ligne → fallback cache
        return caches.match(event.request).then(cached => {
          return cached || caches.match('/index.html');
        });
      })
  );
});

// Gestion manuelle (rarement utile)
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
