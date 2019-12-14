
/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/
Array.prototype.returner = function(a,b,c){
    return this[a]*this[b]*this[c]
}

function largestProductOfThree(array) {
    if(array.length < 3){return;}
    if(array.length === 3)
        return array.returner(0,1,2);
    array.sort(function compareNumbers(a, b) {
        return a - b;
    })
    if(array[0] < 0 && array[1] < 0 && Math.abs(array[0] * array[1]) > array[array.length - 2]*array[array.length - 3] )
        return array.returner(array.length - 1,0,1)
    return array.returner(array.length - 1, array.length - 2, array.length - 3) 
}
