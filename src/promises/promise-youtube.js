//Simple promise

var cleanRoom = new Promise(function(resolve,reject){
    let clean = false;

    if (clean){
        resolve('cleaned');
    }
    else {
        reject('not clean');
    }
})

cleanRoom(); //Uncaught TypeError: cleanRoom is not a function

cleanRoom.then(function(resultFromPromise){
    console.log("Room is " + resultFromPromise)
}).catch(function(resultFromPromise){
    console.log("Room is " + resultFromPromise)
})

//Chaining can be done by passing the promise status in all methods
//one -> two -> three -> final -> catch block

var one = function(){
    return new Promise(function(resolve,reject){
        resolve("One is done");
    })
}

var two = function(statusOne){
    return new Promise(function(resolve,reject){
        resolve(statusOne + ' two done');
    })
}

var three = function(statusTwo){
    return new Promise(function(resolve,reject){
        resolve(statusTwo + ' three failed');
    })
}

one().then(function(status){
    return two(status)
}).then(function(status){
    return three(status)
}).then(function(finalStatus){
    console.log("Final Status: " + finalStatus)
}).catch(function(failedStatus){
    console.log(failedStatus);
})

//One is done two done three failed  -> one rejected
//Final Status: One is done two done three done -> all resolved
//One is done two done -> If two is rejected

//If we want all promises to run irrespective of the order
Promise.all([one(),two(),three()]).then(function(){
    console.log('all done')
})

Promise.race([one(),two(),three()]).then(function(){
    console.log('One of them finished')
})

/* ******************** */

var myPromise = new Promise(function(resolve,reject){
    let a = 6;
    if (a > 4){
        resolve('Success');
    }
    else {
        reject('Failuer');
    }
})

myPromise.then(function(result){
    console.log(result);
}).catch(function(result){
    console.log(result);
})