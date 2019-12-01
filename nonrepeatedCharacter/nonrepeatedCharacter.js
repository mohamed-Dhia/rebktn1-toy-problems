/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

// var firstNonRepeatedCharacter = function(string,index) {
//   // TODO: your solution here
//   var index = index || 0
//   if(string.indexOf(string[index],index+1) === -1 ){
//   	return string[index]
//   }
//   function deleter(str){
//     string.replace(string.indexOf(string[index],index+1),"")
//     if(string.indexOf(string[index],index+1) === -1){
//       string.replace(string[index],"")
//       return
//     }
//   }
//   deleter(str)
//   index++
//   return firstNonRepeatedCharacter(string,index)
// };

var firstNonRepeatedCharacter = (string) => {
	var mem = {};
	
	for (var letter in string) {
		!mem[string[letter]] ? mem[string[letter]] = 1 : mem[string[letter]]++;
	};
	
	for(var letter in string) {
		if(mem[string[letter]] === 1){
			return string[letter];
		}
	};
	return "no non repeated characters";
}
