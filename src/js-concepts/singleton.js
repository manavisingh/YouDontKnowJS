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


var singletonNew = (function(){
    var instance;
    function makeInstance(){
        var object = new Object();
        object.name = "manavi";
        return object;
    }
    return {
        returnInstance: function(){
            if (!instance){
                instance = makeInstance();
            }
            return instance
        }
    }
})();

var single = (function(){
    var singleInstance;
    function makeInstance(){
        if (singleInstance === undefined){
            var object = new Object();
            object.name = "x";
            return object
        }
        else {
            return singleInstance
        }
    }
    return {
        returnInstance: function(){
            instanceToReturn = makeInstance();
            return instanceToReturn;
        }
    }
})()
