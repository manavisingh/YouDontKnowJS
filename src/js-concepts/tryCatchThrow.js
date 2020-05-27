//Error handling in JavaScript
/*
Syntax:
    try {
        //try something in JS
    }
    catch(error){
        //if above doesnt work, the error will be handled in this block 
    }
When a runtime error occurs in JS, an Error object is created. This object has 3 properties:
    1. Error msg
    2. File name
    3. line number
*/

//Try and Catch
function handleErrors(str){
    try {
        var newString = str.split('').reverse().join('');
        console.log(newString);
    }
    catch(error){
        console.log(error.message);
    }
}

handleErrors("manavi"); //ivanam
handleErrors(32452); //str.split is not a function

//Try throw catch finally
function allPutTogether(str){
    try {
        var newString = str.split('').reverse().join('');
        if (newString.length > 5){
            throw new Error ("Oops, string is too long..");
        }
        else {
            console.log(newString);
        }
    }
    catch(e){
        console.log(e.message);
    }
    finally{
        console.log("all done");
    }
}

allPutTogether("manavi"); 
//Oops, string is too long..
//all done

allPutTogether("ere");
//ere
//all done