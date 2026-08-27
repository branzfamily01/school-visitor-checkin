const CACHE = 'school-visitor-checkin-v5';
const ASSETS = [
  './',
  './index.html',
  './manual.html',
  './styles.css',
  './app.js',
  './app-part-01.js',
  './app-part-02.js',
  './app-part-03.js',
  './app-part-04.js',
  './app-part-05.js',
  './app-part-06.js',
  './manifest.json',
  './my-hub.json',
  './icons/icon.svg',
  './LICENSES.txt'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(hit => hit || fetch(event.request).then(response => {
      if (response && response.ok && new URL(event.request.url).origin === self.location.origin) {
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copy));
      }
      return response;
    }).catch(() => {
      if (event.request.mode === 'navigate') return caches.match('./index.html');
      return Response.error();
    }))
  );
});
