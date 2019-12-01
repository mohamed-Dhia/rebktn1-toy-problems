// Given an array X of positive integers, its elements are to be transformed by running the following operation on them as many times as required:

// if X[i] > X[j] then X[i] = X[i] - X[j]

// When no more transformations are possible, return its sum ("smallest possible sum").

// For instance, the successive transformation of the elements of input X = [6, 9, 21] is detailed below:

// X_1 = [6, 9, 12] # -> X_1[2] = X[2] - X[1] = 21 - 9
// X_2 = [6, 9, 6]  # -> X_2[2] = X_1[2] - X_1[0] = 12 - 6
// X_3 = [6, 3, 6]  # -> X_3[1] = X_2[1] - X_2[0] = 9 - 6
// X_4 = [6, 3, 3]  # -> X_4[2] = X_3[2] - X_3[1] = 6 - 3
// X_5 = [3, 3, 3]  # -> X_5[1] = X_4[0] - X_4[1] = 6 - 3

// The returning output is the sum of the final transformation (here 9).
// Example

// solution([6, 9, 21]) #-> 9

// Solution steps:

// [6, 9, 12] #-> X[2] = 21 - 9
// [6, 9, 6] #-> X[2] = 12 - 6
// [6, 3, 6] #-> X[1] = 9 - 6
// [6, 3, 3] #-> X[2] = 6 - 3
// [3, 3, 3] #-> X[1] = 6 - 3

// Additional notes:

// There are performance tests consisted of very big numbers and arrays of size at least 30000. Please write an efficient algorithm to prevent timeout.
var pgcd = (a,b) => { // i have noticed that the array goes back to the smalest pgcd so i started with making pgcd function
	if(a === b) {
		return a; 
	}
	if(a === 0) {
		return b; 
	}
	if(a < b){
		return pgcd(b,a);
	}
	return pgcd(a-b,b)
}
var smallestSum = (numbers) => {
	var truePGCD =  pgcd(numbers[0],numbers[1]) // i asseined the first pgcd as the smallest one aka the true one
	
	for(var i = 1; i < numbers.length - 1; i++) { // check if it's really the true one 
		var currentPGCD = pgcd(numbers[i],numbers[i+1]);
		currentPGCD < truePGCD ?  truePGCD = currentPGCD : undefined // i'm starting to like es6 lol
		truePGCD === 1 ? i =  numbers.length - 2 : undefined // if the true PGCD is 1 then there's no use of checking the rest therefore by seting i to the last elemnt we quit the loop
	};
	return numbers.length * truePGCD; // now that all of numbers are the true pcgd we just multiply
}