/* global $, jQuery */

function solution() {
    var getCommentElements = document.querySelectorAll("comment-list");
    for (var i = 0; i < getCommentElements.length; i++) {
        var dataCount = getCommentElements[i].getAttribute("data-count");

        getData(getCommentElements[i], dataCount);
    }
}

function getData(element, noOfComments) {
    var dataUrl = 'https://www.example.com/comments?count=' + noOfComments;
    element.innerHTML("Loading...");
    fetch(dataUrl,{
        method: "GET",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    }).then(function(response){
        return response.json();
    }).then(function(myJson){
        if (myJson && myJson.length > 0){
            renderData(element,myJson); 
        }   
        else {
            return "Error fetching Comment Data";
        }
    })
}

function renderData(elem, object) {
    elem.innerHTML = "";
    var html = "";
    for (var i = 0; i < object.length; i++) {
        html += '<div class="comment-item"> <div class="comment-item__username">' + object[i].username + '</div><div class="comment-item__message">' + object[i].message + '</div></div>';
    }
    elem.insertAdjacentHTML('beforeend', html);
}

function ss(arr){
    //for loop 1
    for (var i = 0; i < arr.length; i++){
        //Assuming first elem is the min
        var min = i;
        //for loop 2
        for (var j = i + 1; j < arr.length; j++){
            //if left elem is greater than right, change the value of min to j
            if (arr[j] < arr[min]){
                min = j;
            }
        }
        //if elements have been swapped and min no longer has the value of i, swap the left and right elements
        if (min !== i){
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

function solution(X, Y) {
    // write your code in JavaScript (Node.js 8.9.4)
    var sortedX = ss(X);
    var sortedY = ss(Y);
    
    var maxDiff = 0;
    var temp;
    for (var i = 0; i < sortedX.length; i++){
        temp = sortedX[i] - sortedX[i+1];
        maxDiff = Math.max(maxDiff,temp);
    }
    return maxDiff;
}

solution([6, 10, 1, 4, 3], [2, 5, 3, 1, 6]);