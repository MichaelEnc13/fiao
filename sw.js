var urlToCache = [
    "home.php",
    "client.php"
]
const CACHE_NAME = "facteasy-v1"

self.addEventListener('install', function(e) {
    // console.log("Instalado");

    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlToCache)
        })
    )
})

self.addEventListener('activate', function(e) {

})

self.addEventListener('fetch', function(e) {
    //   console.log(`URL SOLICITADA ${e.request.url}`);
})