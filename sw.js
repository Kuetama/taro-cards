const CACHE_NAME = 'taro-cards-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/main.css',
  '/main.js',
  '/how-to.html',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});