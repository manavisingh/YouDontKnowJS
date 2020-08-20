//check palindrome using stack - O(n)

function checkPal(word){
    var stack = [];
    var reverseWord = '';
    var len = word.length;
    for (var i = 0; i < len; i++){
        stack.push(word[i]);
    }
    for (var j = 0 ; j < len; j++){
        reverseWord += stack.pop();
    }
    return word === reverseWord;
}

//Stack methods: push, pop, peek, length
//Creating a stack with all the above methods

