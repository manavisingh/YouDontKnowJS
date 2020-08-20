//Creating Promises, chaining promises, calling promises

//Creating a promise.
var isHappy = false;

//Promise #1
var willGetPhone = new Promise(function (resolve, reject) {
    if (isHappy) {
        var phone = {
            brand: "iphone",
            color: "gold"
        }
        resolve(phone);
    }
    else {
        var errorMsg = "no phone, sorry!";
        reject(errorMsg);
    }
});

//Promise #2
var showOff = function (phone) {
    var message = "hey i got a " + phone.color + " " + phone.brand;
    return resolve(message);
}

//Calling a promise.
var findOut = function () {
    willGetPhone
        .then(showOff)
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error);
        })
};

findOut();

//Promise and set time out
var dataFetch = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({
                users: [{
                    name: 'Jack',
                    age: 22
                }, {
                    name: 'Tom',
                    age: 21
                }, {
                    name: 'Isaac',
                    age: 21
                }, {
                    name: 'Iain',
                    age: 20
                }]
            })
        }, 3000)
    })
}

var prepareDataForCsv = function (data) {
    return new Promise(function (resolve, reject) {
        resolve("Data is ready");
        reject("Data could not be prepared");
    })
}

var writeDataToCsv = function (data) {
    return new Promise(function (resolve, reject) {
        resolve("Writing data to CSV");
    })
}

//Calling the functions

dataFetch().then(function (data) {
    return prepareDataForCsv(data)
}).then(function (data) {
    return writeDataToCsv(data)
}).then(function () {
    console.log("Data has been written to csv")
}).catch(function (error) {
    console.log(error)
})

var testing = function(count){
    return new Promise(function (resolve, reject) {
        if (count > 8) {
            resolve(console.log("promise has been resolved"));
        }
        else {
            reject(console.log("error has occured"))
        }
    })
}

testing(4).then(function(){
    console.log("in then success");
}).catch(function(){
    console.log("in catch error");
})
