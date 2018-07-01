self.addEventListener('install', (e)=>{
    e.waitUntil(
        caches.open('resources').then((cache)=>{
            return cache.addAll([
                './index.html',
                './sw.js',
                './js/index.js',
                './js/idb.js',
                './css/font/digital-7-italic.ttf',
                './css/normalize.css',
                './css/stylesheet.css',
                'https://fonts.googleapis.com/css?family=Lato',
                'https://free.currencyconverterapi.com/api/v5/countries'
            ])
        }).catch((err)=> console.log(err))
    );
});

self.addEventListener('fetch', (e)=>{
    e.respondWith(
        caches.match(e.request).then((response)=>{
            if(response){
                return response;
            } 
            return fetch(e.request);
        })
    )
})