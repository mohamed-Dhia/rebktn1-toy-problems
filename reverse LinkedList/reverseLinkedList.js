/*
Write a function that reverses a linked list.
​
Explanation:
​
Given the below linked list:
​
	A -> B -> C -> D -> E -> null
​
Return:
​
	E -> D -> C -> B -> A -> null
​
Constraint 1: Do this in linear time
Constraint 2: Do this in constant space
Constraint 3: Do not mutate the original nodes by adding any new properties
*/
​
// Helpers
​
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null; 
  return obj;
}

var countLinkedList = (linkedList,counter = 0) => {
  //condition for empty obj
  return !linkedList.next ? counter + 1 : countLinkedList(linkedList.next, counter + 1) 
}

var reverseLinkedList = function(linkedList, NewNodeHead = {},counter = 0, size = countLinkedList(linkedList)) {
  // your code here...
  while(counter <= size){  //A => B => C
    bucket = bucket.next  ?? linkedList.next  // bucket = B 
    holder = NewNodeHead 
    NewNodeHead = Node(bucket.next.value)  
    NewNodeHead.next = Node(bucket.value)  // new = B => A
    counter++ 
  }
};