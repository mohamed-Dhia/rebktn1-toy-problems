/**
  *
  * Implement a `BFSelect` method on this Tree class.
  *
  * BFSelect accepts a filter function, calls that function on each of the nodes
  * in Breadth First order, and returns a flat array of node values of the tree
  * for which the filter returns true.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   root1.BFSelect(function (value, depth) {
  *     return value % 2;
  *   })
  *   // [1, 3, 5, 7]
  *
  *   root1.BFSelect(function (value, depth) {
  *     return depth === 1;
  *   })
  *   // [2, 3]
  *
  */

/*
 * Basic tree that stores a value.
 */

var Tree = function (value, depth) {
  this.value = value;
  this.children = [];
  this.depth = depth || 0;
};

Tree.prototype.BFSelect = function (filter, result = []) {  // this one is using a modified tree that has depth as a property
  // return an array of values for which the function filter(value, depth) returns true
  if (this.depth === 0 && filter(this.value, this.depth))
    result.push(this.value)
  for (tree of this.children) {
    if (filter(tree.value, tree.depth))
      result.push(tree.value)
  }
  for (tree of this.children) {
    tree.BFSelect(filter, result)
  }
  return result
};



Tree.prototype.BFSelect = function (filter, result = [], depth = 0) {  // this one is using a depth as an argument
  // return an array of values for which the function filter(value, depth) returns true
  if (depth === 0 && filter(this.value, depth))
    result.push(this.value)
  for (tree of this.children) {
    if (filter(tree.value, depth + 1))
      result.push(tree.value)
  }
  for (tree of this.children) {
    tree.BFSelect(filter, result, depth + 1)
  }
  return result
};

/**
 * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function (child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child, this.depth + 1);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};
/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function (child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function (child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};
