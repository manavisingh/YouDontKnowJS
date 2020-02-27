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