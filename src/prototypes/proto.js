var Human = function(first,last){
    this.first = first;
    this.last = last;
    this.makeName = function(){
        return this.first + ' ' + this.last;
    }
}

var me = new Human('manavi','singh');

Human.prototype.sayHello = function(){
    return 'Hi '+this.makeName();
}