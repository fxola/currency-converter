if(navigator.serviceWorker){
    navigator.serviceWorker.register('sw.js').then(function(data){
        console.log('Service worker ti wa online');
    }).catch(function(err){
        console.log(err);
    })
}