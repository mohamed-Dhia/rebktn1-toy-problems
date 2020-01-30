/*
Implement a function that finds the longest palindrome in a given string. 
For example, in the string "My dad is a racecar athlete", the longest palindrome is "a racecar a". 
Count whitespaces as valid characters. 
Other palindromes in the above string include "dad", "ete", " dad " (including whitespace on each side of dad).
*/

const compare = (string, index, howFar = 0) => {
  if (string[index - howFar] === string[index + howFar]) {
    return compare(string, index, howFar + 1);
  } else {
    return string(index - howFar, index + howFar);
  }
};

function longestPalindrome(string) {
  // your code here...
  for (let index = 0; index < string.length; index++) {
    const element = string[index];
  }
}
