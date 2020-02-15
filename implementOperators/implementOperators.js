/*
Implement Operators

Write three functions to replace the multiply, divide, and modulo operators. 
The only operators you may only use in your solution are addition and subtraction. 
Your functions will only have to handle integer math.

EXAMPLES:
  multiply(5, 2) // 10
  divide(5, 2) // 2
  modulo(5, 2) // 1
*/

var multiply = (x, y, c = x) => (y === 1 ? x : multiply(x + c, y - 1, c));
var divide = (x, y, c = 0) => (x < y ? c : divide(x - y, y, c + 1));
var modulo = (x, y) => (x < y ? x : modulo(x - y, y));
