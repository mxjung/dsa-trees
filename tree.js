/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    // check if root is null (edge case when Tree is empty)
    if (this.root === null) {
      return 0;
    }

    function sumTree(node) {
      let sumVal = node.val;

      for (let child of node.children) {
        sumVal = sumVal + sumTree(child);
      }
      return sumVal;
    }
    return sumTree(this.root);
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    // check if root is null (edge case when Tree is empty)
    if (this.root === null) {
      return 0;
    }

    function countEvenNodes(node) {
      let evenCount = node.val % 2 === 0 ? 1 : 0;

      for (let child of node.children) {
        evenCount = evenCount + countEvenNodes(child);
      }
      return evenCount;
    }
    return countEvenNodes(this.root);
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

  }
}

module.exports = { Tree, TreeNode };
