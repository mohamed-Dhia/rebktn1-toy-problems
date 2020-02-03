/*
Sum of Primes
Given a positive number, return the sum of all positive primes that are less than or equal to that number.
*/

const isPrime = (n, counter = 2) => {
  if (n <= 1 || (!(n % counter) && n !== counter)) {
    return false;
  }
  if (counter >= Math.sqrt(n)) {
    return true;
  }
  return isPrime(n, counter + (n % counter));
};

function sumOfPrimes(n) {
  // your code here...
  var sum = 0;
  for (var i = 0; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
      sum += i;
    }
  }
  return sum;
}
