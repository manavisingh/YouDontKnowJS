 function bsort(arr){
    for (var i = arr.length-1; i >= 0; i--){
        for (var j = 1; j <= i; j++){
            if (arr[j-1] > arr[j]){
                var temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
     return arr;
};

bsort([1,5,1,6,8,1]) //[1, 1, 1, 5, 6, 8]

function bs(arr){
    var length = arr.length;
    for (var i = 0; i < length; i++){
        for (var j = 0; j < length; j++){
            if (arr[j] > arr[j+1]){
                var tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
}

//Time complexity O(n^2); To code it in a more efficient manner is to keep track of whether values have been swapper before or not.
//swapped can be set to false; during each iteration, if the values are swapper then set the swapper to true;
//Less efficient than insertion sort even with small sample sets
