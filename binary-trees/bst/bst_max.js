// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// max in a bst will be furthest val to the right
function findMaxBST(node){
    if (!node) return

    if (!node.right) {
        return node.value
    } else {
        return findMaxBST(node.right)
    }
}