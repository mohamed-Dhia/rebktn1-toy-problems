/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
 * Stack Class
 */
var Stack = function() {
  // add an item to the top of the stack
  this.storage = [];
  this.stackSize = 0;
  this.minimum;
  this.push = function(value) {
    // if(this.min > value)
    //     this.min = value;
    this.minimum === undefined
      ? (this.minimum = value)
      : this.minimum > value
      ? (this.minimum = value)
      : this.minimum;
    this.storage.push(value);
    this.stackSize += 1;
  };

  // remove an item from the top of the stack
  this.pop = function() {
    return this.storage.pop();
  };

  // return the number of items in the stack
  this.size = function() {
    return this.stackSize;
  };

  // return the minimum value in the stack
  this.min = function() {
    return this.minimum;
  };
};
