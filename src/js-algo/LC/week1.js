//#1
function singleNumber(arr){
    var single = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
            single = arr[i];
        }
    }
    return single;
}

//#2
var isHappy = function(n,counter=0) {
    result = false;
    if (counter < 8){
        var sum = loopAndSqDigits(n);
        if (sum === 1){
            result = true;
            return result;
        }
        else {
            counter += 1;
            isHappy(sum,counter);
        }
    }
    return result;
};

function loopAndSqDigits(n){
    n = n.toString().split('');
    var newN = 0;
    for (var i = 0; i < n.length; i++){
        var sq = n[i]*n[i];
        newN += sq;
    }
    return newN;
}

//#3
var maxSubArray = function(nums){
    var maxVal = -Infinity;
    var sum = 0;
    var len = nums.length;
    for (var i = 0; i < len; i++){
        sum += nums[i];
        if (sum > maxVal){
            maxVal = sum;
        }
        if (sum < 0){
            sum = 0;
        }
    }
    return maxVal
}

maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);

//#4
var moveZeroes = function(nums) {
    var temp;
    for (var i = 0; nums.length; i--){
        if (nums[i] === 0){

        }
    }
};