/**
 You can assume that there will only be one closest value.

  Each BST node has an integer value, a
  left child node, and a right child node. A node is
  said to be a valid BST node if and only if it satisfies the BST
  property: its value is strictly greater than the values of every
  node to its left; its value is less than or equal to the values
  of every node to its right; and its children nodes are either valid
  BST nodes themselves or None/null.


 Sample Input
  =       10
       /     \
      5      15
    /   \   /   \
   2     5 13   22
 /           \
1            14

target
 = 12

 Sample Output
 = 13
 */

function bstClosestValue(tree, target) {
  return bstTraversalToClosest(tree, target, closest = Infinity)
}

function bstTraversalToClosest(tree, target, closest) {
  if (tree === null) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return bstTraversalToClosest(tree.left, target, closest);
  }
  else if (target > tree.value) {
    return bstTraversalToClosest(tree.right, targer, closest);
  } else return closet
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}