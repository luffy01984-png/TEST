const CACHE_NAME = 'renault-trucks-cse-v1.3'; // Version du cache (incrémentez pour forcer une mise à jour, ex: v2)

// Liste des ressources à mettre en cache (ajoutez toutes vos ressources statiques ici)
const urlsToCache = [
  '/', // Page d'accueil
  '/index.html', // Votre index.html
  '/manifest.json', // Votre manifest PWA
  'https://cdn.tailwindcss.com', // Tailwind CSS
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', // Polices Google
  // Ajoutez toutes vos images statiques (ex: celles de GitHub Raw), par exemple :
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/Header.webp',
  'https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/elecctra.webp',
  // ... et toutes les autres ressources (images partenaires, etc.). Utilisez un script pour générer cette liste si elle est longue.
];

// Installation : Met en cache les ressources
self.addEventListener('install', event => {
  console.log('SW: Installation en cours...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('SW: Mise en cache des ressources...');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('SW: Erreur lors de la mise en cache :', error);
      })
  );
  self.skipWaiting(); // Force l'activation immédiate du nouveau SW
});

// Activation : Nettoie les anciens caches et prend le contrôle
self.addEventListener('activate', event => {
  console.log('SW: Activation en cours...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('SW: Suppression de l\'ancien cache :', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim(); // Prend le contrôle de toutes les pages ouvertes
});

// Fetch : Sert depuis le cache ou le réseau
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          console.log('SW: Ressource servie depuis le cache :', event.request.url);
          return response;
        }
        // Sinon, récupère depuis le réseau et met en cache si possible
        return fetch(event.request).then(networkResponse => {
          // Met en cache les nouvelles ressources (optionnel, pour les ressources dynamiques)
          if (networkResponse.ok && event.request.url.startsWith('https://raw.githubusercontent.com')) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        }).catch(() => {
          // Fallback si hors ligne (par exemple, une page d'erreur)
          console.log('SW: Réseau indisponible, fallback...');
          return caches.match('/index.html'); // Ou une page de fallback
        });
      })
  );
});

// Gestion des messages (pour forcer la mise à jour)
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('SW: Mise à jour forcée...');
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'UPDATE_CACHE') {
    // Logique pour mettre à jour le cache manuellement (si besoin)
    console.log('SW: Mise à jour du cache demandée...');
    // Ici, vous pourriez recharger les ressources critiques
  }
});
