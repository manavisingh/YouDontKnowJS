console.log('Start');

function getUserData(email,pass,callback){
    setTimeout(function(){
        callback(email,pass);
    },5000)
}

getUserData("ms1576",'12345',function(email,pwd){
    console.log(email + ' ' + pwd)
})
console.log('End')