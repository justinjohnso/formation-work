// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// recursive
function findClosestValueInBst(tree, target) {
    return findClosestValueInBstRecur(tree, target, tree.value)
}

function findClosestValueInBstRecur(tree, target, closest) {
    if (!tree) return closest // base
    
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
        closest = tree.value
    }
    if (target < tree.value) {
        return findClosestValueInBstRecur(tree.left, target, closest)
    } else if (target > tree.value) {
        return findClosestValueInBstRecur(tree.right, target, closest)
    } else {
        return closest
    }
}

// iterative
function findClosestValueInBstIterative(tree, target) {
    let curr = tree
    while (curr) {
        if (Math.abs(target - closest) > Math.abs(target - curr.value)) {
            closest = curr.value
        }
        if (target < curr.value) {
            curr = curr.left
        } else if (target > curr.value) {
            curr = curr.right
        } else {
            break
        }
    }
    return closest
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
