const CACHE_NAME = "renault-cse-cache-v3.3";
const ESSENTIALS_CACHE = [
"/",
"/index.html",
"/manifest.json",
"[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)",
"[https://fonts.googleapis.com/css2?family=Inter](https://fonts.googleapis.com/css2?family=Inter):wght@400;500;600;700&display=swap"
];
const IMAGE_CACHE = "renault-images-cache-v1";
const MAX_IMAGE_ITEMS = 50; // Limite du nombre d'images dans le cache

// INSTALL
self.addEventListener("install", event => {
event.waitUntil(
caches.open(CACHE_NAME).then(cache => cache.addAll(ESSENTIALS_CACHE))
);
});

// FETCH
self.addEventListener("fetch", event => {
const requestUrl = new URL(event.request.url);

if (requestUrl.origin === location.origin || event.request.destination === "image") {
event.respondWith(
fetch(event.request)
.then(networkResponse => {
if (ESSENTIALS_CACHE.includes(event.request.url)) {
caches.open(CACHE_NAME).then(cache => cache.put(event.request, networkResponse.clone()));
} else if (event.request.destination === "image") {
caches.open(IMAGE_CACHE).then(async cache => {
await cache.put(event.request, networkResponse.clone());
limitCacheSize(IMAGE_CACHE, MAX_IMAGE_ITEMS);
});
}
return networkResponse;
})
.catch(() => {
if (event.request.destination === "image") {
return caches.match(event.request, { cacheName: IMAGE_CACHE });
}
return caches.match(event.request, { cacheName: CACHE_NAME });
})
);
}
});

// Limitation du nombre d'éléments dans le cache
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
caches.keys().then(keys =>
Promise.all(keys.map(key => !cacheWhitelist.includes(key) && caches.delete(key)))
)
);
});
