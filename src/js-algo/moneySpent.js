/*Monica wants to buy a keyboard and a USB drive from her favorite electronics store. The store has several models of each. Monica wants to spend as much as possible for the  items, given her budget.

Given the price lists for the store's keyboards and USB drives, and Monica's budget, find and print the amount of money Monica will spend. If she doesn't have enough money to both a keyboard and a USB drive, print -1 instead. She will buy only the two required items.*/

function getMoneySpent(keyboards, drives, b) {
    var spend = 0;
    for (var i = 0; i < keyboards.length; i++){
        for (var j = 0; j < drives.length; j++){
            if (((keyboards[i] + drives[j]) > spend) && ((keyboards[i] + drives[j]) <= b)){
                spend = (keyboards[i] + drives[j]);
            }
            else {
                spend = -1;
            }
        }
    }
    return spend;
}

getMoneySpent([3,1], [5, 2, 8], 10); //9