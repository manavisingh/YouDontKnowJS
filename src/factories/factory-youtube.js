//factory function

function createCircle(radius){
    return {
        radius: radius,
        draw: function(){
            console.log('drawing');
        }
    }
}

var circleOne = createCircle(2);

let dog = function(){
    const sound = 'woof';
    return {
        talk: function(){
            console.log(sound);
        }
    }
}

var myDog = dog();
myDog.talk();

