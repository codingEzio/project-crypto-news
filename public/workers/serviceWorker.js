const cacheName = 'crypto-news-1.0';

const urlsToCache = [
  // Generated bundle
  'app.js',
  'index.html',

  // Static assets
  'favicon.ico',
  'images/bg.svg',
  'images/map.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Cache opened');

      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener('fetch', event => {
  console.log(event.request.url);

  event.respondWith(
    caches
      // Either serve directly from cache or fetch new ones
      .match(event.request)
      .then(response => response || fetch(event.request)),
  );
});

self.addEventListener('activate', event => {
  console.log('Worker activated');

  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          // Filter out old versioned keys
          .filter(key => key !== cacheName)
          // And delete the old ones
          .map(key => caches.delete(key)),
      );
    }),
  );
});
