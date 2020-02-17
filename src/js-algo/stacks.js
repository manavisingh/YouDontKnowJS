//Check for a palindrom using stack methods:

function isPalindrome(word){
    var letters = [];
    var rword = "";
    var rwordTest = "";

    for (var i = 0;i < word.length; i++){
        letters.push(word[i]);
    }

    for (var k = 0; k < letters.length; k++){
        rwordTest += letters.pop();
    }
    console.log(letters, letters.length, rwordTest);
    for (var j = 0; j < word.length; j++){
        rword += letters.pop();
    }

    return word === rword;
}

//Create a Stack
var Stack = function(){
    this.count = 0;
    this.storage = {};

    //Push
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    //Pop
    this.pop = function(){
        if (this.count === 0){
            return "Stack is empty";
        }
        var poppedValue = this.storage[this.count - 1];
        delete this.storage[this.count - 1];
        this.count--;
        return poppedValue;
    }

    //Length
    this.length = function(){
        return this.count;
    }

    this.peek = function(){
        return this.storage[this.count-1];
    }
}

//Create an object from the class Stack
var myStack = new Stack();

myStack.push("firstVal");
myStack.push("secondVal");
myStack.push("thirdVal");
myStack.pop();
myStack.peek();
myStack.length();
