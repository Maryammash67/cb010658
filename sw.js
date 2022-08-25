
const statCache='statv1';

const dynaCache='dynav1';

const assets=['./', './wages/style/activity.css', './wages/style/beach.css', './wages/scripts/main.js', './wages/home.html',"./wages/style/form.css",
"wages/style/heritage1.css", "wages/style/home.css", "wages/style/purchase.css", "wages/style/style.css", "wages/style/wildlife.css", "wages/activity.html",
"wages/beach.html", "wages/form.html", "wages/heritage1.html", "wages/index.html", "wages/wildlife.html"];


self.addEventListener('install',(evt)=>{
 
    evt.waitUntil(
       
        caches.open(statCache)
    .then((cache)=>{
        console.log("Caching assets...");
        
        cache.addAll(assets);
    })
    );
    
});


self.addEventListener('activate',(evt)=>{
    
    evt.waitUntil(
        
        caches.keys()
        .then((keys)=>{
           
            return Promise.all(
                keys.filter(key=>key!==statCache && key!==dynaCache)
                .map(key=>caches.delete(key))
            );

        })
    );
});

//The fetch event handler
self.addEventListener('fetch',(evt)=>{
    //console.log("Fetch event",evt);
    //interrupt the normal request and respond with a custom response
    evt.respondWith(
        //check if the resource exists in cache
        caches.match(evt.request)
        .then((cacheRes)=>{
            //return from cache if it is there in cache. or else fetch from server
            return cacheRes || fetch(evt.request)
            //when fetching from server, add the request and response to dynamic cache to access the resource/s when offline
            .then(fetchRes=>{
                return caches.open(dynaCache)
                .then(cache=>{
                    cache.put(evt.request.url,fetchRes.clone());
                    return fetchRes;
                });
            });
            //returning the fallback page if the resource is not available in any of the caches
        }).catch(()=>{
            //check whether the request url contains .html in it
            if(evt.request.url.indexOf('.html')>-1){
                return caches.match('/fallback.html')
            }
            })
    );
})