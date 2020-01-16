/*
Prime Tester
A prime number is an integer greater than 1 that has no divisors other than itself and 1. 
Write a function that accepts a number and returns true if it’s a prime number, false if it’s not. 
The grader is looking at the efficiency of your solution (number of operations) as well as correctness!

primeTester(2) // true
primeTester(1) // false

*/

function primeTester(n, curr = 2) {
  if (curr >= Math.sqrt(n) || n === 1 || n === 2) {
    return true;
  }
  if (!(n % curr)) {
    return false;
  }
  return primeTester(n, curr + (n % curr));
}
