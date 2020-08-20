class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 Adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function () {
    return this.w * this.h;
}
/*
 * Creates a Square class that inherits from Rectangle and implements its class constructor
 */

class Square extends Rectangle {
    constructor(s) {
        super(s);
        this.h = s;
        this.w = s;
    }

}

JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) //JSON.stringify([ 'constructor' ]) which means Sqaure has only one
//constructor and no methods but uses the area method of Rectangle to print its area

const rec = new Rectangle(3, 4);
const sqr = new Square(3);

console.log(rec.area());
console.log(sqr.area());
