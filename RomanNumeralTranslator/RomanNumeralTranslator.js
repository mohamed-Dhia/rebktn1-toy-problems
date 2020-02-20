// Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

// In a roman numeral, each character adds its value to the total. See the helper object DIGIT_VALUES for the correspondence between roman numeral characters and integers.
// VI = 6 (5 + 1 = 6)
// LXX = 70 (50 + 10 + 10 = 70)
// MCC = 1200 (1000 + 100 + 100 = 1200)

// When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.
// IV = 4 (5 – 1 = 4)
// XC = 90 (100 – 10 = 90)
// CM = 900 (1000 – 100 = 900)

// You should return “null” on invalid input.

// You've got Helpers!

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};
const translateRomanNumeral = romanNumeral => {
  return romanNumeral
    .split("")
    .map(ROMAN_VALUES => DIGIT_VALUES[ROMAN_VALUES]) // replace roman values with decimal numbers
    .reduce((acc, cur, index, src) => {
      // acc : accumulator/curr : current number / index : current index / src : the source array
      let nextNumber = src[index + 1];
      return nextNumber // check if the next number is avalible
        ? cur >= nextNumber // if so check if the next number is bigger than the current
          ? acc + cur // if so we add it to the sum
          : acc - cur // eles we subtract it so we can add the next one
        : acc + cur; // else (nextNumber === undefined) we add the last number
    }, 0); // if we give the deffault value we'll the initial value will be the first number but in the case of IV the first value should be -1 not 1
};

translateRomanNumeral("VI");

translateRomanNumeral("CCXXV");

translateRomanNumeral("MCC");

translateRomanNumeral("IV");

translateRomanNumeral("XC");

translateRomanNumeral("CM");
