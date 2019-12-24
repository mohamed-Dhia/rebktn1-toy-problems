/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

var isBalanced = str => {
  var closer = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "(") closer.push(")");
    if (str[i] === "[") closer.push("]");
    if (str[i] === "{") closer.push("}");
    if (str[i] === ")" || str[i] === "}" || str[i] === "]") {
      if (str[i] === closer[closer.length - 1]) {
        closer.pop();
      } else {
        return false;
      }
    }
  }
  if (closer.length !== 0) return false;
  return true;
};
