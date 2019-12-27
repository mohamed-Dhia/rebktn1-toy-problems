/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

var allAnagrams = function(string) {
  // Your code here.
  var allAnagrams = function(string) {
    // Your code here.
    var result = [];

    var create = (word = "", length = string.length) => {
      if (word.length === length) {
        result.push(word);
        return;
      }
      string.split("").forEach(letter => {
        create(word + letter, length);
      });
    };
    create();
    var conainsDubs = string => {
      var temp = {};
      var state = true;
      string.split("").forEach(letter => {
        if (!temp[letter]) {
          temp[letter] = 1;
        }
        if (temp[letter] === 1) {
          state = false;
        }
      });
      return state;
    };
    return result.filter(arr => {
      return !conainsDubs(arr);
    });
    return result;
  };
  console.log(allAnagrams("abc"));
};
