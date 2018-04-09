const CACHE_NAME = 'kana-practice-cache'
const urlsToCache = [
  '/',
  './index.html',
  './build.js',
  './build.js.map',
  './manifest.json',
  './icons/',
  './Aoyagi Kouzan.otf',
  './Sazanami Mincho.ttf',
]

this.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(caches.open(CACHE_NAME)     // eslint-disable-line
    .then((cache) => {
      console.log('Opened cache')             // eslint-disable-line
      return cache.addAll(urlsToCache)
    }))
})


this.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request)                     // eslint-disable-line
    .then((response) => {
      // Cache hit - return response
      if (response) {
        return response
      }

      // IMPORTANT: Clone the request. A request is a stream and
      // can only be consumed once. Since we are consuming this
      // once by cache and once by the browser for fetch, we need
      // to clone the response.
      const fetchRequest = event.request.clone()

      return fetch(fetchRequest).then((response) => {               // eslint-disable-line
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response
        }

        // IMPORTANT: Clone the response. A response is a stream
        // and because we want the browser to consume the response
        // as well as the cache consuming the response, we need
        // to clone it so we have two streams.
        const responseToCache = response.clone()

        caches.open(CACHE_NAME)                                     // eslint-disable-line
          .then((cache) => {
            cache.put(event.request, responseToCache)
          })

        return response
      })
    }))
})
