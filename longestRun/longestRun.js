/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

longestRun = string => {
  var mem = {};
  counter = 1;
  for (let index = 0; index < string.length; index++) {
    prev = string[index - 1];
    if (string[index] === prev) {
      counter++;
    }
    if (
      (string[index] !== prev && counter > 1) ||
      (index === string.length - 1 && counter > 1)
    ) {
      mem[index] = {
        letter: string[index - 1],
        start:
          index === string.length - 1
            ? string.length - counter
            : index - counter,
        end: index === string.length - 1 ? string.length - 1 : index - 1,
        number: counter
      };
      counter = 1;
    }
  }
  count = 0;
  res = [0, 0];
  console.log(mem);
  for (var key in mem) {
    if (mem[key].number > count) {
      count = mem[key].number;
      res = [mem[key].start, mem[key].end];
    }
  }

  return res;
};
