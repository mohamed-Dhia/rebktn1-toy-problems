/*
Sorted Insert

Given a sorted stack of integers (smallest integer at the top) and an element to insert, write a function – sortedInsert(stack, element) – which inserts the element into the correct position of the stack.

sortedInsert should manipulate the original stack and return the original stack.

The stack will have the methods:
  • isEmpty
  • peek
  • push
  • pop. 
  
You can also use count to view how many elements are in the stack. 
The stack implementation is available to view below.
*/

// the stack class is exposed here for reference, you may or may not utilize additional stacks in your algorithm.var Stack = function(initialValue) {
var Stack = function(initialValue) {
  this.store = {};
  this.count = 0;

  if (initialValue !== undefined) {
    this.push(initialValue);
  }
};

Stack.prototype.isEmpty = function() {
  return !this.count;
};

Stack.prototype.peek = function() {
  return this.store[this.count];
};

Stack.prototype.push = function(val) {
  this.store[++this.count] = val;
};

Stack.prototype.pop = function() {
  if (!this.isEmpty()) {
    var tmp = this.store[this.count];
    delete this.store[this.count--];
    return tmp;
  }
};
Stack.prototype.findPosition = function(ele, start = 1, end = this.count) {
  if (this.isEmpty()) return this.push(ele);
  let middle = Math.floor((start + end) / 2);
  ele < this.store[start]
    ? this.insert(ele, start)
    : ele > this.store[end]
    ? this.insert(ele, end + 1)
    : end - start === 1
    ? this.insert(ele, end)
    : ele > this.store[middle]
    ? this.findPosition(ele, middle, end)
    : this.findPosition(ele, start, middle);
};

Stack.prototype.insert = function(ele, index) {
  !this.store[index]
    ? ((this.store[index] = ele), this.count++)
    : (tmp = this.store[index]),
    (this.store[index] = ele),
    this.insert(tmp, index + 1);
};
function sortedInsert(stack, element) {
  // your code here...
}
