/*this : refers to the object in context at any given time
used to refer to the object that a function (in context) is bound to
this refers to the object and also contains its value
*/

/*
function has this object
function then gets invoked by an object
this refers to THAT object which invokes the function
*/

//Example 1:
var person = {
    firstName: "manavi",
    secondName: "singh",
    showFullName: function () {
        return this.firstName + " " + this.secondName; //this refers to person object because that will invoke the showFullName function
    }
}

person.showFullName(); //manavi singh

//Example 2:
var Person = function (name, age) {
    this.name = name;
    this.age = age;
    this.makePerson = function () {
        console.log(this.name + " " + this.age);
    }
}

var me = new Person("manavi", 30);

//When this becomes confusing/Common mistakes with this
//1. When used in a callback method that we pass as a parameter to another function

//We have a simple object with a clickHandler method that we want to use when a button on the page is clicked
var user = {
    name: "manavi",
    age: 29,
    clickHandler: function (event) {
        console.log(this.name + " " + this.age);
    }
}

// The button is wrapped inside a jQuery $ wrapper, so it is now a jQuery object
// And the output will be undefined because there is no data property on the button object
$("button").click(user.clickHandler); // Cannot read property '0' of undefined

/*
This happened because user.clickHandler method was invoked by the button object even if its defined in the user object.
Hence 'this' in the user.clickHandler method is referrring to the button object which does not have name and age properties.
*/

//Fix:
/*
We use "bind" to explicitly bind the user.clickHandler method to user everytime its called like so:
*/
$("button").click(user.clickHandler.bind(user));

//2. When there is an inner function trying to access outer functions's this.
var user = {
    tournament: "The Masters",
    data: [
        { name: "T. Woods", age: 37 },
        { name: "P. Mickelson", age: 43 }
    ],
    clickHandler: function () {
        // the use of this.data here is fine, because "this" refers to the user object, and data is a property on the user object.        

        this.data.forEach(function (person) {
            // But here inside the anonymous function (that we pass to the forEach method), "this" no longer refers to the user object.
            // This inner function cannot access the outer function's "this"
            console.log("What is This referring to? " + this); //this here is window object
            console.log(person.name + " is playing at " + this.tournament); //this here is window object
        })
    }
}
user.clickHandler();
/* Output:
VM714:15 What is This referring to? [object Window]
VM714:17 T. Woods is playing at undefined
VM714:15 What is This referring to? [object Window]
VM714:17 P. Mickelson is playing at undefined
*/

//Fix: We set the value of this using another variable before entering the inner function like so:
var user = {
    tournament: "The Masters",
    data: [
        { name: "T. Woods", age: 37 },
        { name: "P. Mickelson", age: 43 }
    ],
    clickHandler: function () {
        var dataOuter = this; //store this in another variable to be used inside the inner function
        this.data.forEach(function (person) {
            console.log(person.name + " is playing at " + dataOuter.tournament); //now we are calling the outer function's this (user)
        })
    }
}
user.clickHandler();
/* Output:
T. Woods is playing at The Masters
P. Mickelson is playing at The Masters
*/

//3. When a method using this is assigned to another variable

// This data variable is a global variable
var data = [
    { name: "Samantha", age: 12 },
    { name: "Alexis", age: 14 }
];

var user = {
    // this data variable is a property on the user object
    data: [
        { name: "T. Woods", age: 37 },
        { name: "P. Mickelson", age: 43 }
    ],
    showData: function (event) {
        var randomNum = ((Math.random() * 2 | 0) + 1) - 1; // random number between 0 and 1
        // This line is adding a random person from the data array to the text field
        console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
    }

}

// Assign the user.showData to a variable
var showUserData = user.showData;

// When we execute the showUserData function, the values printed to the console are from the global data array, 
//not from the data array in the user object
showUserData(); // Samantha 12 (from the global data array)
//Fix: bind the method to the object when assigning it to another variable like so:

var showUserData = user.showData.bind(user);

//4. When using borrowing methods
//Example:

// We have two objects. One of them has a method called avg() and the other doesn't
// So we will borrow the (avg()) method

//Does not have avg()
var gameController = {
    scores: [20, 34, 55, 46, 77],
    avgScore: null,
    players: [
        { name: "Tommy", playerID: 987, age: 23 },
        { name: "Pau", playerID: 87, age: 33 }
    ]
}

//Has avg()
var appController = {
    scores: [900, 845, 809, 950],
    avgScore: null,
    avg: function () {
        var sumOfScores = this.scores.reduce(function (prev, cur, index, array) {
            return prev + cur;
        });
        this.avgScore = sumOfScores / this.scores.length;
    }
}

// If we run the code below,
// the gameController.avgScore property will be set to the average score from the appController object "scores" array

//We are trying to borrow the avg method from appController. But this doesnt work and will set the avgScore of appController instead.
gameController.avgScore = appController.avg();

//Fix: We will use the apply() method to borrow avg method from appController like so:
appController.avg.apply(gameController,gameController.scores); //borrow the avg method from appController and apply it to the array values of gameController
gameController.avgScore; //46.4
appController.avgScore; //null (Nothing changed here)
gameController.avg(); //gameController.avg is not a function (the method wasnt given to appController permanently, only borrowed to calculate the gameController.avgScore)