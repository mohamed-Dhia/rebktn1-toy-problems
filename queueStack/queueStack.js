/*
Queue Stack

Write a stack. Once you’re done, implement a queue using two stacks to create FIFO behavior. 
The queue should not have any storage separate from its stacks.
*/

var Stack = function() {
  var storage = [];

  this.push = element => {
    storage.push(element);
    return storage;
  };

  this.pop = () => storage.pop();

  this.size = () => storage.length;
};

var Queue = function() {
  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = element => {
    inbox.push(element);
    return `${element} is added`;
  };

  this.dequeue = () => {
    if (!outbox.size()) {
      while (inbox.size()) outbox.push(inbox.pop());
    }
    return outbox.pop();
  };

  this.size = () => inbox.size() + outbox.size();
};
