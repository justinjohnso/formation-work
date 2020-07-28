// This is an input class. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// recursively check if left nodes are less and right nodes are more
// if the check ever fails, return false

function validateBst(root) {
    return validateBstRecur(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) // run with min/max bounds
}

function validateBstRecur(root, min, max){
    if (!root) return true // base
    if (root.value >= max || root.value < min) return false; // if it defies bst

    return (
        validateBstRecur(root.left, min, root.value) && 
        validateBstRecur(root.right, root.value, max)
    )
}

// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;

// --------------------------------------------------------

function validateBSTWrapper(root) {
    return validateBSTRecur(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
}

function validateBSTRecur(node, min, max) {
    if (!node) return true
    if (node.value >= max || node.value < min){
        return false
    }

    return (
        validateBSTRecur(node.left, min, node.value) &&
        validateBSTRecur(node.right, node.value, max)
    )
}