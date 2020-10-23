// Explanation - https://www.youtube.com/watch?v=py3R23aAPCA
// Code - https://github.com/bephrem1/backtobackswe/blob/master/Trees%2C%20Binary%20Trees%2C%20%26%20Binary%20Search%20Trees/LowestCommonAncestorBinaryTree/LowestCommonAncestorBinaryTree.java

// Build your recursion from the bottom up
// - What will be the first thing to send something back up the stack?
// - What will be the last?

function lca(node, targetA, targetB) {
  if (!node) return null; // base
  if (node.val === targetA.val || node.val === targetB.val) return node; // if we find either value, return self up the recursion stack

  // if we don't find the node here, search left and right
  let leftResult = lca(node.left, targetA, targetB);
  let rightResult = lca(node.right, targetA, targetB);

  if (!leftResult) return rightResult;
  if (!rightResult) return leftResult;

  // if we hit this point, then we got something from BOTH sides, therefore this is the LCA
  return node;
}

// -------------------------------------------------------------
// If you find a common ancestor, and you're going bottom up in a tree, the first one you see is the LCA
// Whenever you're solving a recursive tree problem, ONLY FOCUS ON A SINGLE NODE
// - What needs to happen at this node for me to solve the problem?
// - This node represents a function call, it is the key to getting us an answer
// - So we need to define a policy
//      - Given a certain state, what needs to happen at a single node?

// We need to search the left and right subtrees from a node. If we find both targets, then this is the LCA
// Cases
// 1. Find both
// 2. Find one
// 3. Find neither

const lca2 = (root, x, y) => {
  if (!root) return null;
  if (root.val === x.val || root.val === y.val) return root;

  let leftSearchResult = lca2(root.left, x, y);
  let rightSearchResult = lca2(root.right, x, y);

  if (!leftSearchResult) return rightSearchResult;
  if (!rightSearchResult) return leftSearchResult;
  return root;
};

// You can nest ternary operators!
// return !leftSide ? rightSide : !rightSide ? leftSide : root.value
