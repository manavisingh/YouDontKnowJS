/*ALl functions in JS are first class functions meaning they can be passed as parameters to 
other functions just like variables.
*/

//Example:

function firstClass(a,b,functionParam){
    var c = a + b;
    functionParam(c);
}

firstClass(3,5,function(result){
    console.log(result); //8
})