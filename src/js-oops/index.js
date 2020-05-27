//Object Literals

let circle = {
    x: 1,
    y: 1,
    draw: function(){
        console.log("drawing");
    }
}

circle.draw();

//removing the hard coded values: creating a factory function

function createCirle(radius){
    return {
        radius: radius,
        draw: function(){
            console.log("drawing");
        }
    }
}

const circleNew = createCirle(2);