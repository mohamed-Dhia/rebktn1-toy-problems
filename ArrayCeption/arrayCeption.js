// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
//

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0

var Arrayception = (arr, curr = 0, lvl = 0, res = 0) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (!Array.isArray(element) && curr < lvl) {
      curr = lvl;
    }

    if (Array.isArray(element)) {
      return Arrayception(element, curr, lvl + 1, res);
    }
    if (i === arr.length - 1) {
      res = curr;
    }
  }
  return res;
};
