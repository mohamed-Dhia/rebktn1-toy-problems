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

const sumOfPrimes = (n, sum = 0, curr = 2) => {
  if (n < 0) {
    console.log("enter a positif number ➕, 😠");
    return;
  }
  if (n <= 1) {
    return "0️⃣";
  }
  if (isPrime(curr)) sum += curr;
  if (curr >= n) return sum;
  return sumOfPrimes(n, sum, curr + 1);
};
