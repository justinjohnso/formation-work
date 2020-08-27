// Algorithm: Max Path Sum In Binary Tree

// Given a binary tree where each node holds a positive integer value, write a function that computes and returns the maximum sum of data values obtained by traversing nodes along a path between any 2 leaves of the tree.
// The path must start and end at 2 different nodes of the tree, and the maximum sum is obtained by summing all of the data values of the node traversed along this path.

// Example

//       1
//      / \
//     2   3
//    / \ / \
//   4  5 6  7

// Path: 5 -> 2 -> 1 -> 3 -> 7
// Max Sum: 5 + 2 + 1 + 3 + 7 = 18

//       4
//      / \
//     1   6
//    / \ / \
//   7  2 3  9

// Path: 7 -> 1 -> 4 -> 6 -> 9
// Max Sum: 7 + 1 + 4 + 6 + 9 = 27
// Function Signature

// func maxSumPath(root: Node) -> Int

// Recursive solution
// O(n) Time || O(logn) Space

class TreeNode {
    constructor(value, left=null, right=null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  function maxPathSum(root) {
    if (!root) return 0;
    let maxSum = -Infinity;
    
    function maxPathRecur(node) {
      if (!node) return 0
      // let maxSum = -Infinity;
  
      let leftVal = Math.max(maxPathRecur(node.left), 0)
      let rightVal = Math.max(maxPathRecur(node.right), 0)
  
      maxSum = Math.max(maxSum, leftVal + node.value + rightVal)
      return Math.max(leftVal, rightVal) + node.value;
    }
    
    maxPathRecur(root);
    return maxSum
  }
  
  // function maxPathSum(root) {
  //   if (!root) return 0;
  //   let maxSum = -Infinity;
    
  //   let dfs = function(node) {
  //     if (!node) return 0;
  //     let left = Math.max(0, dfs(node.left));
  //     let right = Math.max(0, dfs(node.right));
  //     maxSum = Math.max(maxSum, left + node.value + right);
  //     return Math.max(left, right) + node.value;
  //   };
  //   dfs(root);
  //   return maxSum;
  // }
  
  
  let node1 = new TreeNode(1);
  node1.left = new TreeNode(2);
  node1.right = new TreeNode(3);
  node1.left.left = new TreeNode(4);
  node1.left.right = new TreeNode(5);
  node1.right.left = new TreeNode(6);
  node1.right.right = new TreeNode(7);
  
  let node2 = new TreeNode(4);
  node2.left = new TreeNode(1);
  node2.right = new TreeNode(6);
  node2.left.left = new TreeNode(7);
  node2.left.right = new TreeNode(2);
  node2.right.left = new TreeNode(3);
  node2.right.right = new TreeNode(9);
  
  console.log(maxPathSum(node1))
  console.log(maxPathSum(node2))
  
  // console.log(maxPathSum([1, 2, 3])); //6
  // console.log(maxPathSum([-10, 9, 20, null, null, 15, 7])); //42