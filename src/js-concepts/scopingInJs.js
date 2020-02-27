//Local and Global Variables
//All functions in setTimeout are executed in the global scope and not local
//Example: 

var val = 200;
var constVal = 2;
var obj = {
    val: 100,
    constVal: 5,
    calculateIt: function(){
        setTimeout(function(){
            console.log(this.val + this.constVal); //this is referred to window object and not obj
        },2000)
    }
}

obj.calculateIt() //202 and not 105

//Hoisting: Variable and function declaration are lifted and declared. not applicable to function assignment and initialization
//Precedence Order: variable assignment -> function declaration -> variable declaration
//Example 1:
var myName;
function myName(){
    console.log("manavi");
}

typeof(myName); //function

//Example 2:
var myName = "Manavi";
function myName(){
    console.log("manavi");
}

typeof(myName); //string