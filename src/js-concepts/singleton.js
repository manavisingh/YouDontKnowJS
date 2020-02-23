//Used when we need exactly one instance of a class
//Example:

var singletonFunc = (function(){
    var instance;

    function makeInstance(){
        var object = new Object("I am the only instance");
        return object;
    }
    return {
        returnInstance: function(){
            if (!instance)
                instance = makeInstance();
            return instance;
        }
    }
})();

