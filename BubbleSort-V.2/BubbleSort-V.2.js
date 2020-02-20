// Bubble sort is considered the most basic sorting algorithm in Computer Science.
// It works by starting at the first element of an array and comparing it to the second element:

// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.

// NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

// You've got Helpers!
// myHelper(x, y)

// Examples
// input: [ 20, -10, -10, 2, 4, 299 ]
// Output:	[ -10, -10, 2, 4, 20, 299 ]

function bubbleSort(input, end = input.length - 1) {
  input.forEach((currEle, currIndex, input) => {
    let nextEle = input[currIndex + 1];
    let nextIndex = currIndex + 1;
    if (currEle > nextEle) {
      [input[currIndex], input[nextIndex]] = [
        input[nextIndex],
        input[currIndex]
      ];
    }
    if (currIndex === end) {
      bubbleSort(input, end - 1);
    }
  });
  return input;
}
