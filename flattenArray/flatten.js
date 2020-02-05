/*
Given an array of arrays, return all elements in a single array. You must use recursion.

Hint: Use Array.isArray(elem) to see if something is an array.

Example: 
flatten([[1, 1], [4], 3, [3], 4, [6, 7]]) // [1, 1, 4, 3, 3, 4, 6, 7]
*/

function flatten(arr, res = []) {
  arr.forEach(ele => {
    Array.isArray(ele) ? flatten(ele, res) : res.push(ele);
  });
  return res;
}
