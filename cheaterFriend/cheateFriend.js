
//     A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
//     Within that sequence, he chooses two numbers, a and b.
//     He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
//     Given a number n, could you tell me the numbers he excluded from the sequence?

// The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]

// with all (a, b) which are the possible removed numbers in the sequence 1 to n.

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".

// It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).
//
//
// Example:
// removNb(26) should return [ {15, 21}, {21, 15} ]
// by brute forcr

var removNb = (n) => {
	var sum = 0;
	var result = [];
	
	var summer = (n) => {
		for(var i = 0; i <= n; i++) {
			som += i;
		}
	    return som;
	};
	
	for(var i = 1; i <= n; i++) {
		var testSubject = (mySum - i)/(i + 1);
		if((mySum - i)%(i + 1) === 0 && testSubject < n){
			result.push([i, testSubject])
		}
	}
	return result;
}

var removNb = (n) => {
	var result = [];
	var sum = (n**2 + n)/2;
	for(var i = 1; i <= n; i++) {
		var testSubject = (sum - i)/(i + 1);
		if((sum - i)%(i + 1) === 0 && testSubject < n){
			result.push([i, testSubject]);
		}
	}
	return result;
}


