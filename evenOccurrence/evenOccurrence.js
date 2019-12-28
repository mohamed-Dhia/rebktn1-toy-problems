/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/
var deepEquals = function(apple, orange) {
  if (typeof apple !== typeof orange) return false;
  if (
    (typeof apple === "string" || typeof apple === "number") &&
    apple !== orange
  )
    return false;
  if (Object.keys(apple).length !== Object.keys(orange).length) return false;
  for (key in orange) {
    if (typeof apple[key] === "object" && typeof orange[key] === "object")
      return deepEquals(apple[key], orange[key]);
    if (apple[key] !== orange[key]) return false;
  }
  return true;
};
console.log(deepEquals(1, 2));
var evenOccurrence = (coll, curr = 0, occ = 1, temp = {}) => {
  for (var i = curr + 1; i < coll.length; i++) {
    if (temp[coll[curr]]) {
      return evenOccurrence(coll, curr + 1, 1, temp);
    }

    if (deepEquals(coll[i], coll[curr])) occ++;

    if (i === coll.length - 1) {
      if (occ % 2 === 0) return coll[curr];
      else {
        temp[coll[curr]] = 1;
        return evenOccurrence(coll, curr + 1, 1, temp);
      }
    }
  }
  return null;
};
