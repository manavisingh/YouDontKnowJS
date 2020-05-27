/*
Pure functions:
    1. Same inputs will always give the same output
    2. Does not cause any side effects: logging, http calls, mutation of input, writing to disk (fs) etc..
    3. Easier to test
*/

//Example 1:
function pureAdd(x, y) {
    return x + y;
}

pureAdd(3, 4) //7 same inputs will always give the same output.

//Example 2: 

function noObjectChange(key, value, object) {
    const newObject = { ...object };
    newObject[key] = value;
}

var person = {
    "name": "Bob"
}

noObjectChange("age", 14, person);
/*
Impure Functions: 
    1. Mutate the input
    2. Can give errors that are difficult to debug.
*/

//Example 1:

var x = 3;
function impureAdd(y) {
    return x += y;
}

impureAdd(4) //7
impureAdd(5) //12
x //12

//It has changed the value of x and it doesnt give the same output with the same input.

//Example 2:

function impureObjChange(key, value, object) {
    object[key] = value;
    return object;
}

const person = {
    "name": "Bob"
}

var changed = impureObjChange("age", 14, person);

console.log(person); //{name: "Bob", age: 14} person object has been changed
console.log(changed);

//Impure function - shared state

var x = {
    val: 2
}

var x1 = function () {
    x.val *= 2;
}

var x2 = function () {
    x.val += 2;
}

x1();
x2();

//Pure functions - independent, one doesnt change another, no mutation
//using Object.assign()

var obj1 = { a: 10 };
var obj2 = { b: 20 };
var obj3 = { c: 30 };

var new_obj = Object.assign(obj1, obj2, obj3);

//implementing a pure function to avoid shared as above

var xnew = {
    val: 3
}

function xnew1(x){
    Object.assign({},x,{val: x.val*3})
}

function xnew2(x){
    Object.assign({},x,{val: x.val + 2})
}