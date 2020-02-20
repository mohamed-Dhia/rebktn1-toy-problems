var Range = function (start, end, step) {

    this.start = start
    if (!end) {
        this.end = start
    } else {
        this.end = end
    }
    if (!step) {
        this.step = (this.start <= this.end) ? 1 : -1
    } else {
        this.step = step
    }
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

Range.prototype.size = function () {
    return Math.floor((this.start - this.end) / this.step) + 1
};

Range.prototype.each = function (callback) {
    for (var x = this.start; this.step > 0 ? x <= this.end; x += this.step) {
        callback(x)
    }
}

Range.prototype.includes = function (val) {
    if (this.step > 0) {
        return (val >= this.start && val <= this.end &&
            (((val - this.start) / step) % 1 === 0))
    } else {
        return (val <= this.start && val >= this.end &&
            (((val - this.start) / step) % 1 === 0))
    }
};
