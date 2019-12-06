// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.
var vowelBack = function (s) {
	var newString = "";
	for (var i = 0; i < s.length; i++) {
		newChar = s.charCodeAt(i);
		if(s[i] === "c" || s[i] === "o")
			newChar --;
		else if(s[i] === "d")
			newChar -= 3;
		else if(s[i] === "e")
			newChar -= 4;
		else if(s[i] === "a" || s[i] === "i" || s[i] === "u")
			newChar -= 5;
		else 
			newChar += 9;
		
		if(newChar > 122)
			newChar -= 26;
		if(newChar < 97)
			newChar += 26;
		if(String.fromCodePoint(newChar) === "c" ||String.fromCodePoint(newChar) === "o" ||String.fromCodePoint(newChar) === "d" ||String.fromCodePoint(newChar) === "e" ){
			newString += s[i];
			continue;
		}
		newString += String.fromCodePoint(newChar);
	}
	return newString;
}