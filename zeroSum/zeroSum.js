/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
*/
zeroSum = numbers => {
  var holder = {};
  //using a noramal for loop
  for (var i = 0; i < numbers.length; i++) {
    if (holder[-1 * numbers[i]]) return true;
    else holder[numbers[i]] = 1;
  }
  return false;
  //using for each but it doesn't return so i have to use state but i get to use sexy es6 lol
  // var state = false
  // numbers.forEach(number => {
  //     holder[-1 * number] ?  state = true : holder[number] = 1
  // });
  // return state;
};
