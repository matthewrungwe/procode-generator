const filesToCache = [
    '/',
    '/css/main.css',
    '/js/main.js',
    '/index.html'
]

const staticCacheName = 'cache-name-v1';

self.addEventListener('install', (event) => {
    console.log('Attempting to install service worker and chache static assests.');
    event.waitUntil(
        caches.open(staticCacheName)
            .then((cache) => {
                return cache.addAll(filesToCache);
            })
    );
});

self.addEventListener('activate', () => {
    console.log('Activating service worker...');
})

self.addEventListener('fetch', (event) => {
    console.log(event.request.url);

    event.respondWith(

        caches.match(event.request).then(function (response) {

            return response || fetch(event.request);

        })

    ); 
})