/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */


// solution for 2 inputs
var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  var obj1 = {};
  var result = '';
  for (var i = 0; i < string1.length; i++) {
  	if(!obj1[string1[i]])
  		obj1[string1[i]] = 1;
  }
  for (var i = 0; i < string2.length; i++) {
  	if(obj1[string2[i]]){
  		result += string2[i];
  		delete obj1[string2[i]]
  	}
  }
return result;
};

// solution for more than one input
var commonCharacters = function(string1, string2) {
	var mem = {};
	var result = "";
	function looper (argumentsArray, index,tempMem) {

		if(index === argumentsArray.length){
			return mem
		}
		for (var i = 0; i < argumentsArray[index].length; i++) {
			if(!mem[argumentsArray[index][i]] && !tempMem[argumentsArray[index][i]]){
				mem[argumentsArray[index][i]] = 1;
				tempMem[argumentsArray[index][i]] = 1;
 			} else if (mem[argumentsArray[index][i]] && !tempMem[argumentsArray[index][i]]) {
 				mem[argumentsArray[index][i]]++;
			}
		}
		index++;
		return looper (argumentsArray,index,{});
	}
	looper(arguments,0,{})
	for(var key in mem){
		if(mem[key] >= arguments.length){
			result += key
		}
	}
	return result;
}
