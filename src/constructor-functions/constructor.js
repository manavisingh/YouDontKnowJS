//constructor functions

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log(radius);
    }
}

//ways of calling this function and what it means

// using new 
var circleOne = new Circle(2);

//using call
var circleTwo = Circle.call({},4);

//without using new (wrong)
var circleThree = Circle(3);

//Line 18 equivalent to 
var circleFour = Circle.call(window,5);

var keys = Object.keys(circleOne)