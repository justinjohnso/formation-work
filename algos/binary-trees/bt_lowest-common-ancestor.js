// Explanation - https://www.youtube.com/watch?v=py3R23aAPCA
// Code - https://github.com/bephrem1/backtobackswe/blob/master/Trees%2C%20Binary%20Trees%2C%20%26%20Binary%20Search%20Trees/LowestCommonAncestorBinaryTree/LowestCommonAncestorBinaryTree.java

// Build your recursion from the bottom up
// - What will be the first thing to send something back up the stack?
// - What will be the last?

function lca(node, targetA, targetB) {
    if (!node) return null // base
    if (node.val === targetA.val || node.val === targetB.val) return node // if we find either value, return self up the recursion stack

    // if we don't find the node here, search left and right
    let leftResult = lca(node.left, targetA, targetB)
    let rightResult = lca(node.right, targetA, targetB)

    if (!leftResult) return rightResult
    if (!rightResult) return leftResult

    // if we hit this point, then we got something from BOTH sides, therefore this is the LCA
    return node
}