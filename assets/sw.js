const CACHE_NAME = 'konihaus-blog-v1';
const ASSETS_TO_CACHE = [
  '/assets/styles.css',
  '/assets/scripts.js',
  '/assets/favicon.svg',
  '/translations/de.json',
  '/translations/en.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.allSettled(ASSETS_TO_CACHE.map((url) => cache.add(url)))
    )
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - network first, fallback to cache
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip external domains (except fonts)
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin && !url.hostname.includes('fonts.googleapis.com')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Don't cache non-successful responses
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }

        // Clone response before checking content type
        const responseToCache = response.clone();
        const contentType = response.headers.get('content-type');

        // Cache successful responses for certain types
        if (
          event.request.url.includes('/translations/') ||
          (contentType && contentType.includes('application/json')) ||
          (contentType && contentType.includes('text/css')) ||
          (contentType && contentType.includes('application/javascript')) ||
          (contentType && contentType.includes('image/')) ||
          (contentType && contentType.includes('font/'))
        ) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }

        return response;
      })
      .catch(() => {
        // Fallback to cache
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          // Return a fallback for HTML pages
          if (event.request.headers.get('accept').includes('text/html')) {
            return caches.match('/');
          }

          return new Response('Offline - content not available', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/plain'
            })
          });
        });
      })
  );
});

// Handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
