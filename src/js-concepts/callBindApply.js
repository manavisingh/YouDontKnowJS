//1. bind(): The bind() method creates a new function that, when called, has its this keyword set to the provided value. It let’s us explicitly define the value of this when calling a function

var pokemon = {
    name: "pika",
    lastname: "chu",
    getname: function(){
        return this.name + this.lastname;
    }
}

var getPokemonName = function(){
    console.log("the name is: " + this.getname());
}

pokemonName() //VM294:11 Uncaught TypeError: this.getPokeName is not a function.

//created a new object and binds pokemon, now: this of pokemon is pokemon
var logPokemon = getPokemonName.bind(pokemon);

logPokemon(); //the name is: pikachu

/* 2. Call and apply: The call() method calls a function with a given this value and arguments provided individually.
What that means, is that we can call any function, and explicitly specify what this should reference within the calling function. 
call() and apply() serve the exact same purpose. The only difference between how they work is that call() expects all parameters to be passed in individually, whereas apply() expects an array of all of our parameters. */

//Example 1:

var pokemon = {
    name: "pika",
    lastname: "chu",
    getname: function(){
        return this.name + this.lastname;
    }
}

var getPokemonName = function(snack, hobby){
    console.log("the name is: " + this.getname());
    console.log(this.getname() + " loves " + snack + ", " + hobby);
}

getPokemonName.apply(pokemon,["sushi","coding"]);
getPokemonName.call(pokemon, "sushi", "coding");

//Example 2:
var arr = [3,7,5,8];
Math.max.apply(Math, arr) //8;
Math.max.call(Math, 3,7,5,8); //8


//Using Bind - sometimes we lose the scope of this variable and its reference. In such cases we use bind to explicitly 
//bind a function to an object that we pass as a param.
//Example:

var person = {
    name: "manavi",
    lastName: "singh",
    getFullName: function(){
        return this.name + " " + this.lastName;
    }
}

var personInfo = function(snack,hobby){
    console.log(this.getFullName() + "'s favourite snack is " + snack);
    console.log(this.getFullName() + "'s hobby is " + hobby);
}

personInfo("chips","badminton"); //Uncaught TypeError: this.getFullName is not a function
//We bind personInfo to object person and assign it to another variable like so:

var bindPerson = personInfo.bind(person);
bindPerson("chips","badminton");
//Output ->
//manavi singh's favourite snack is chips
//manavi singh's hobby is badminton

//Call and Apply
/* Call: similar to bind except:
    1. Accepts multiple parameters
    2. Does not make a copy of the function it is being called on
    3. Executes the function it was called on immediately
*/

//Example:
var person = {
    name: "manavi",
    lastName: "singh",
    getFullName: function(){
        return this.name + " " + this.lastName;
    }
}

var personInfo = function(snack,hobby){
    console.log(this.getFullName() + "'s favourite snack is " + snack);
    console.log(this.getFullName() + "'s hobby is " + hobby);
}

personInfo.call(person,"chips","badminton"); 
//Output ->
//manavi singh's favourite snack is chips
//manavi singh's hobby is badminton

//Apply: Similar to call but takes arguments in an array like so:
personInfo.apply(person,["chips","badminton"]); //Same Output
