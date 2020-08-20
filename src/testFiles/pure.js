function noObjectChange(key, value, object){
    const newObject = {...object};
    newObject[key] = value;
    return newObject;
}

var person = {
    "name": "Bob"
}

var newObject = noObjectChange("age",14,person);

console.log(person); //{ name: 'Bob' }
console.log(newObject); //{ name: 'Bob', age: 14 }
