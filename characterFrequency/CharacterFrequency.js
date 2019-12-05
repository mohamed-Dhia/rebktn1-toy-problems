/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]//is this an empty array or an array that has an empty element ?
*/

var characterFrequency = function (string) {
	var result = [];
	var mem = {};
	string = string.toLocaleLowerCase();
	
	for(var letter in string){
		!mem[string[letter]] ? mem[string[letter]] = 1 : mem[string[letter]]++;
	}

	for (var key in mem) {
		result.push([key,mem[key]]);
	}

 	result.sort(function(a, b) {
  		return  a[0].charCodeAt(0) - b[0].charCodeAt(0);
	});
	
	return result.sort(function(a, b) {
  		return  b[1] - a[1];
	});
}