/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/


var isBalanced = function (str) {
    if (!str.length) { return true; }
    for (var letter of str) {
        if (letter === "(")
            break;
        if (letter === ")")
            return false;
    }
    for (var i = str.length; i > 0; i--) {
        if (str[i] === ")")
            break;
        if (str[i] === "(")
            return false;
    }
    var regOfLeft = /\(/g;
    var regOfright = /\)/g;
    return str.match(regOfright).length === str.match(regOfLeft).length
};
