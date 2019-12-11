/*
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:

Input:
	Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
Output:
Merged tree:
	     3
	    / \
	   4   5
	  / \   \
	 5   4   7


Note: The merging process must start from the root nodes of both trees.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}
var mergeTrees = function(t1, t2) {
	var mergeTree = new TreeNode(t1.val + t2.val);
	if(t1.right || t2.right)
	 mergeTree.right = new TreeNode(t1.right.val + t2.right.val);
  if(t1.left || t2.left)
		mergeTree.left = new TreeNode(t1.left.val + t2.left.val);
	// if(t1.right.left || t1.right.right ||t2.right.left || t2.right.right )
	// 	mergeTree.right = mergeTrees(t1.right,t2.right);
	// if(t1.left.left || t1.left.right ||t2.left.left || t2.left.right )
	// 	mergeTree.left = mergeTrees(t1.left,t2.left);
  return mergeTree;
};
var mergeTrees = function(t1, t2) {
	var mergeTree = new TreeNode((t1 ? t1.val : 0) + (t2 ? t2.val : 0));
	if((t1 ? t1.right : null) || (t2 ? t2.right : null))
		mergeTree.right = mergeTrees(t1.right,t2.right)
	if((t1 ? t1.left : null) || (t2 ? t2.left : null))
		mergeTree.left = mergeTrees(t1.left,t2.left)
	return mergeTree;
};
