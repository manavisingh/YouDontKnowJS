/*
Use Strict 
When to use/Advantages:
1. this is undefined in global scope
2. assignments that will silently fail are handled and fail in strict mode
3. cant create global variables accidently
4. makes sure function parameter names are unique

When to not use/disadvantages
1. cant access function.caller and function.arguments
2. when there are multiple scripts used an application that may be written in different modes
3. some missing features that developers might be used to
*/


//Fizzbuzz
for (var i = 1; i <= 30; i++){
    if ((i % 3 === 0) && (i % 5 === 0)){
        console.log("fizzbuzz");
    }
    else if (i % 3 === 0){
        console.log("fizz");
    }
    else if (i % 5 === 0){
        console.log("buzz");
    }
    else {
        console.log(i);
    }
}

/* When would you use document.write()?
There are some answers online that explain document.write() is being used in analytics code or
when you want to include styles that should only work if JavaScript is enabled. 
It is even being used in HTML5 boilerplate to load scripts in parallel and preserve execution order! 
*/

/* What is event loop? What is the difference between call stack and task queue?
The event loop is a single-threaded loop that monitors the call stack and checks if 
there is any work to be done in the task queue. If the call stack is empty and there are callback functions in the task queue, 
a function is dequeued and pushed onto the call stack to be executed.
*/

//Storing by value and reference
//Primitive types are stored by value - number, boolean, string, null and undefined

var a = 9; 
var b = a;

a //9
b //9

a = 10

a //10
b //9

//Objects are stored byb reference - arrays, functions, date, error etc

var obj1 = {};
var obj2 = obj1;

obj1.name = "manavi";

obj1 //{"name":"manavi"}
obj2 //{"name":"manavi"}
obj1 === obj2 //true

obj3 = ["2"];
obj4 = ["2"];

obj3 === obj4 //false


//How storing value by reference leads to impure functions
//Impure Function
function changeAge(person){
    person.age = 25;
    return person;
}

var person = {
    name: "manavi",
    age: 35
}

var changedPerson = changeAge(person);
person //{name: "manavi", age: 25} Age changed by the function
//this function took an object person and changed its age property to 25 because it was dealing with a reference of the object

//Pure Function
function changeAge2(person){
    var newPersonObj = JSON.parse(JSON.stringify(person));
    newPersonObj.age = 25;
    return newPersonObj;
}

var person2 = {
    name: "manavi",
    age: 35
}

var changedPerson2 = changeAge2(person2);
person2 //{name: "manavi", age: 35} 
//Age not changed by the function because we created a new object by JSON.parse(JSON.stringify(person))
//The original object person2 is unaffected by this function


//Why is it better to use translate() rather than a position: absolute Top/Right/Bottom/Left?
/* 1. when we move an object using position: browser will handle the animation pixel by pixel thus making the whole process
expensive and slow (painting the frame is slower in this case)
2. translate() can interpolate at sub pixel level - animation is a smoother and lighter for the browser to 
process (browser can optimize painting here)
3. Positioning should be used to style an element on a page and thats it.
4. When it comes to moving/animating it, we should use translate() instead.
*/

//Garbage Collection
/*
1. Its a form of memory management
2. JS is a garbage-collected language and the process takes place at runtime
3. When the variables are no longer referenced in our application, they are cleaned up
4. This is why we should have local variabes as much as possible
5. Garbage collection cannot be forced manually, the JS engine does it on runtime and knows best what to clean and when
*/

/*
CSS Positioning:

Static: default position, not height width set on it, flows naturally on a page as its created

Relative: It is relative to itself, element with rel position must have a top/right/left/bottom for it be relatively positioned to itself

Absolute: 
Very powerful, 
to positions the element exactly where we want it on the page,
You use the positioning attributes top, left, bottom. and right to set the location. 
Remember that these values will be relative to the next parent element with relative (or absolute) positioning.
An element with this type of positioning is not affected by other elements and it doesn't affect other elements. 
This is a serious thing to consider every time you use absolute positioning.

Fixed:
This type of positioning is fairly rare but certainly has its uses. 
A fixed position element is positioned relative to the viewport, or the browser window itself. 
The viewport doesn't change when the window is scrolled, so a fixed positioned element will stay 
right where it is when the page is scrolled
*/

/*console.log questions
Number + Number -> Addition
Boolean + Number -> Addition
Boolean + Number -> Addition
Number + String -> Concatenation
String + Boolean -> Concatenation
String + String -> Concatenation
*/

//Defined at run time
var foo = function(){ 
    // Some code
};

//Defined at parse time
function bar(){ 
    // Some code
}; 
