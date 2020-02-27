//TYPE 1: Given a sorted list with an unsorted number E in the rightmost cell, can you write some simple code to insert E  into the array so that it remains sorted?

function sortArr(n,arr){
    for (var i = n; i >= 0; i--){
        if (arr[i-1] > arr[i]){
            var temp = arr[i];
            arr[i] = arr[i-1];
            arr[i-1] = temp;
            console.log(arr);
        }
    }
}

sortArr(5,[2,4,6,8,3]);
sortArr(14,[1, 3, 5, 9, 13, 22, 27, 35, 46, 51, 55, 83, 87, 23]);

//TYPE 2: Fully sort an array using insertion sort

function fullSort(arr){
    for (var i = 0; i < arr.length; i++){
        //current element
        var key = arr[i];
        
        //element before current element
        var j = i - 1;
        
        //while j is the 0th element or further and is greater than element on its right
        while (j >= 0 && arr[j] > key){
            arr[j+1] = arr[j];
            j = j - 1;
        }
        
        //last element remaining
        arr[j + 1] = key;
    }
    return arr;
}

fullSort([2,4,6,8,3,4,5,5,2,9,3,8,6]);

function iSort(arr){
    var length = arr.length;
    for (var i = 0; i < length; i++){
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && (arr[j] > key)){
            arr[j+1] = arr[j];
            j = j - 1;
        }
        arr[j+1] = key;
    }
}

/*Better than bubble sort and selection sort;
Best case is 0(n) if array is already sorted
Worst O(n^2)
Some implementations of those advanced algorithms will even switch from using their more advanced methodology 
to insertion sort when the list gets small enough.
Sorts the list in place so space complexity is O(1)
*/