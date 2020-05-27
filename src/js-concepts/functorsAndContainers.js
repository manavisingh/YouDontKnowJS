//functional programming - functors and containers
/*
Ex: Array.prototype.map() - here the container is Array that has a mapping utitility
allows us to abstract the daya type from mapping so that map() can be used for other data types too 
like = numbers array/object array etc..
*/

//Example:

var double = function (n) {
    return n * 2;
}

var doubleAndMap = function (numbersArray) {
    return numbersArray.map(double);
}

doubleMap([2, 3, 4])

/*
Now we can tweak the double method like below to double property values of an object array;
*/

var doubleNew = function (obj) {
    return obj.points * 2;
}

var doubleAndMapNew = function (objArray) {
    return objArray.map(double);
}

doubleAndMapNew([
    { name: 'ball', points: 2 },
    { name: 'coin', points: 3 },
    { name: 'candy', points: 4 }
])

/*
functional programming imp points:
1. pure functions - no shared state and no immutability
2. Declarative rather Imperative approach (what to do over how - map over for loop)
3. higher order functions
4. map, reduce, filter are all examples of functional programming methods

-> shared state: when scopes of an object are shared example: 
global - can be access in/outside functions
closure - outer variables can be access in the inner functions also
*/

//example: shared state

var x = {
    val : 9
}

function x1 (){
    x.val += 1;
}

function x2(){
    x.val *= 2
}

x1()
x2()

//x.val => 20

x2()
x1()

//x.val => 19
//^ x.val changes if function order is reversed

//avoiding shared state

var x = {
    val : 9
}

function x1(){
    Object.assign({},x,{val: x.val + 1})
}

function x2(){
    Object.assign({},x,{val: x.val * 2})
}

x1()
x2()

//x.val => 9

x2()
x1()

//x.val => 9
//^ no change in the x.val even if function order is changed

//Immutability - an object cant be modified after it is created

//example: mutable object

const mutObject = {
    name: "manavi",
    age: 19
}
mutObject.name = "singh" //changes the name property hence mutable

//example: immutable object

const immutObject = Object.freeze({
    name: "manavi",
    age: 19
})

immutObject.name = "singh" //does not change the name of the object

//However - this works only on the the top level of the object. example:

const immutObject = Object.freeze({
    name: "manavi",
    age: 19,
    innerObj : {
        nameInner: "singh",
        ageInner: 30
    }
})

immutObject.innerObj.nameInner = "shravan" //changes the inner object's name
