const dbPromise =  idb.open('rates', 1, (upgradeDB)=>{
        let newValue = upgradeDB.createObjectStore('exchangeRates');
    });

dbPromise.then((db)=>{
    let tx = db.transaction('exchangeRates','readwrite');
    let newValue = tx.objectStore('exchangeRates');
});
// const button = document.getElementsByClassName('button')[0];
