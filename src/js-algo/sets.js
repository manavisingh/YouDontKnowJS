//Set functions: Add, has, values, size, remove, union, intersection, difference, subset

var MySet = function(){
    this.collection = [];

    this.has = function(element){
        if (this.collection.indexOf(element) !== -1){
            return true;
        }
        else {
            return false;
        }
    }

    this.add = function(element){
        if (!this.has(element)){
            this.collection.push(element);
            return true;
        }
        else {
            return "element already present in set";
        }
    }

    this.size = function(){
        return this.collection.length;
    }

    this.remove = function(element){
        if (this.has(element)){
            var elemIndex = this.collection.indexOf(element);
            this.collection.splice(elemIndex,1);
            return true;
        }
        else {
            return false;
        }
    }

    this.values = function(){
        return this.collection;
    }

    this.union = function(otherSet){
        var unionSet = new MySet();
        var firstSetVals = this.values();
        var secondSetVals = otherSet.values();
        firstSetVals.forEach(function(val){
            unionSet.add(val);
        })
        secondSetVals.forEach(function(val){
            unionSet.add(val);
        })
        return unionSet;
    }

    this.intersection = function(otherSet){
        var intersectionSet = new MySet;
        var firstSetVals = this.values();
        firstSetVals.forEach(function(val){
            if (otherSet.has(val)){
                intersectionSet.add(val);
            }
        })
        return intersectionSet;
    }

    this.difference = function(otherSet){
        var differenceSet = new MySet;
        var firstSetVals = this.values();
        firstSetVals.forEach(function(val){
            if (!otherSet.has(val)){
                differenceSet.add(val);
            }
        })
        return differenceSet;
    }

    //Subset to follow..

}