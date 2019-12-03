/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = (array, target, start = 0, end = array.length) => { //this is the es6 one line version  (btw i love this)
	return (array[Math.floor((start + end) / 2)] === target) ? Math.floor((start + end) / 2) : (array[Math.floor((start + end) / 2)] > target? binarySearch(array, target, start, Math.floor((start + end )/2)) : binarySearch(array, target, Math.floor((start + end )/2), end))
};


var binarySearch = (array, target, start = 0, end = array.length) => { //and the boring line by line one
	if (array[Math.floor((start + end) / 2)] === target) 
		return Math.floor((start + end) / 2)

	if (array[Math.floor((start + end) / 2)] > target)
		return binarySearch(array, target, start, Math.floor((start + end )/2))

	if (array[Math.floor((start + end) / 2)] < target) 
		return binarySearch(array, target, Math.floor((start + end )/2), end)
}

