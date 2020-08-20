//Map
// What you have
var officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
];
// What you need: [20, 24, 56, 88]

var officersId = officers.map(function (officer) {
    return officer.id;
})

console.log(officersId) //[20, 24, 56, 88]

//Filter
var pilots = [
    {
        id: 2,
        name: "Wedge Antilles",
        faction: "Rebels",
    },
    {
        id: 8,
        name: "Ciena Ree",
        faction: "Empire",
    },
    {
        id: 40,
        name: "Iden Versio",
        faction: "Empire",
    },
    {
        id: 66,
        name: "Thane Kyrell",
        faction: "Rebels",
    }
];

// What you need: two arrays with ids of empires and rebels
var empires = pilots.filter(function(pilot){
    return pilot.faction === "Empire";
})

var rebels = pilots.filter(function(pilot){
    return pilot.faction === "Rebels";
})

/* Why not .forEach()??
1. .forEach() doesn’t return anything. It can’t. That means you have to push the results inside a predetermined array.
2. expensive operation in terms or time and memory
*/

/*
Reduce - apply a function to each array value and reduce it to a single value..
- parameters: 
1. total/accumulator - final total val of the array
2. element - single/current element
3. index - index of elements
4. arr - input array
*/

//examples:
//1
var array = [1,2,3,4];
arr.reduce(function(acc,val){
    return acc + val
})

//10

//Can also take an initial value
arr.reduce(function(acc,val){
    return acc+val
},300)

//310

//2- find average of array elems

var arr = [3,4,2,5];
arr.reduce(function(total,elem,i,array){
    total += elem;
    if (i === array.length-1){
        return total/arr.length
    }
    else {
        return total
    }
})
