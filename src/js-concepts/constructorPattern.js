//Ways to create Objects
var object = {};
var object = new Object();
var object = Object.create(Object.prototype);

//Ways to add properties to Objects
object.key = "Key One";

object["key2"] = "Key Two";

Object.defineProperties(object,"key",{
    "key3" : "Key Three",
    writable: true
});

Object.defineProperties(object,{
    "key4": {
        value: "Key Four",
        writable: true
    },
    "key5": {
        value: "Key Five",
        writable: true
    }
});

//Using Prototype-based Inheritance
function Person(name, age, isDeveloper){
    this.name = name;
    this.age = age;
    this.isDeveloper = isDeveloper || false;
}

Person.prototype.writesCode = function(){
    return this.isDeveloper ? "Yes" : "No";
}

//Instantiate an Object
var me = new Person("manavi","29",true);
me.writesCode(); //Yes