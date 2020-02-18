/*
Words within Words

Given an array of unique words, find the word that contains the greatest number of other words. A word must be at least two letters long.

nestedWordCount([ "gray", "grays", "ray", "rays", "strays" ]) // 'grays'

*/

const nestedWordCount = words =>
  findBiggest(countNestedWords(spreadIntoObject(words)));

const spreadIntoObject = array => {
  var res = {};
  for (let ele of array) {
    res[ele] = 0;
  }
  return res;
};

const compareNestedWord = (word1, word2) => new RegExp(word2, "g").test(word1); //returns true only if word1 contains word2

const countNestedWords = objOfWords => {
  for (let target in objOfWords) {
    for (let compareTarget in objOfWords) {
      if (target === compareTarget) continue;
      if (compareNestedWord(target, compareTarget)) objOfWords[target]++;
    }
  }
  return objOfWords;
};

const findBiggest = objOfWords => {
  var max = 0;
  for (let word in objOfWords) {
    if (objOfWords[word] > max) {
      max = objOfWords[word];
      var biggest = word;
    }
  }
  return biggest;
};

///////////////////////////////////////////
const nestedWordCount = words =>
  findBiggest(countNestedWords(addCountToWords(words)));

const addCountToWords = array => {
  return array.map(ele => [ele, 0]);
};

const compareNestedWord = (word1, word2) => new RegExp(word2, "g").test(word1); //returns true only if word1 contains word2

const countNestedWords = arrayOfWords => {
  arrayOfWords.forEach((target, indexOfTarget) => {
    for (let i = 0; i < arrayOfWords.length; i++) {
      let compare = arrayOfWords[i][0];
      if (target[0] === compare[0] && indexOfTarget === i) continue;
      if (compareNestedWord(target[0], compare[0])) target[1]++;
    }
  });
  return arrayOfWords;
};
const findBiggest = (arrayOfWords, max = 0, biggest = "") => {
  arrayOfWords.forEach(ele => {
    if (ele[1] > max) (max = ele[1]), (biggest = ele[0]);
  });
  return biggest;
};
