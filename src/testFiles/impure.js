function impureObjChange (key, value, object){
    object[key] = value;
    return object;
}

const person = {
    "name": "Bob"
}

var newObject = impureObjChange("age",14,person);

console.log(person); //{name: "Bob", age: 14} person object has been changed
console.log(newObject); //{ name: 'Bob', age: 14 }