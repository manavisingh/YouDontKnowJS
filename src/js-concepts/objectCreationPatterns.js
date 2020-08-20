/*
1 Factory Pattern:
- creates new specified object
- return the instance of the object
- each time it is called, a new object is created
*/

//Example:
var factoryObject = function (ram, hardDisk) {
    var newObject = {};
    newObject.ram = ram;
    newObject.hardDisk = hardDisk;
    newObject.availableMemory = function () {
        console.log("ram: " + ram);
        console.log("Hard Disk: " + hardDisk);
    }
    return newObject;
}

var facObj1 = factoryObject(4, 1024);
var facObj2 = factoryObject(16, 2024);

facObj1.availableMemory();
/*
ram: 4
Hard Disk: 1024 
*/

facObj2.availableMemory();
/*
ram: 16
Hard Disk: 2024
*/

/*
2. Constructor Pattern
- does not create a new object
- uses the 'new' operator to create instance
- does not return the object
*/

//Example:
var ConstructorObject = function (ram, hardDisk) {
    this.ram = ram;
    this.hardDisk = hardDisk;
    this.availableMemory = function () {
        console.log("RAM: " + this.ram);
        console.log("Hard Disk: " + this.hardDisk);
    }
}

var consObj1 = new ConstructorObject(4, 1024);
var consObj2 = new ConstructorObject(16, 2024);

consObj1.availableMemory();
/*
ram: 4
Hard Disk: 1024 
*/

consObj2.availableMemory();
/*
ram: 16
Hard Disk: 2024
*/

/*
3. Prototype Pattern
- every JS object has a prototype space
- it first creates a blank object and assign properties and functions to it
- then it uses the new operator to create a blank object and assign ACTUAL values to it
*/

//Example:
var ProtoObject = function () { }
ProtoObject.prototype.ram = 0;
ProtoObject.prototype.hardDisk = 0;
ProtoObject.prototype.availableMemory = function () {
    console.log("RAM: " + this.ram);
    console.log("Hard Disk: " + this.hardDisk);
}

var protoObj1 = new ProtoObject();
protoObj1.ram = 4;
protoObj1.hardDisk = 1024;

var protoObj2 = new ProtoObject();
protoObj2.ram = 16;
protoObj2.hardDisk = 2024;

protoObj1.availableMemory();
/*
ram: 4
Hard Disk: 1024 
*/

protoObj2.availableMemory();
/*
ram: 16
Hard Disk: 2024
*/

//Checking properties of the prototype objectvar proto3 = new ProtoObject()

'ram' in protoObj1 //true
protoObj1.hasOwnProperty("ram") //true

'ram' in protoObj2 //true
protoObj2.hasOwnProperty("ram") //true

var protoObj3 = new ProtoObject(); //assigning default values and no actual values
'ram' in protoObj3 //true
protoObj3.hasOwnProperty("ram") //false

//Reason: 'in' operator searches for the properties first in the object and then in its prototypes
// 'hasOwnProperty' searches for the properties only in the object's roots



