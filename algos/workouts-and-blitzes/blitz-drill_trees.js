// Blitz drill - trees
class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

// Count the elements in a binary tree
function count(root) {
    let stack = [root]
    let counter = 0

    while (stack.length > 0) {
        let curr = stack.pop()
        counter ++
        if (curr.left) {
            stack.push(curr.left)
        }
        if (curr.right) {
            stack.push(curr.right)
        }
    }

    return counter
}

// Sum all the elements in a binary tree
function sumWrapper(root) {
    return sumNodes(root, 0)
}

function sumNodes(node, sum) {
    let currSum = sum

    if (!node) return 0
    if (!node.left && !node.right) {
        return currSum
    } else {
        return ( // dammit, you want the sum, so ADD YOU FOOL
            sumNodes(node.left, currSum) &&
            sumNodes(node.right, currSum)
        )
    }
}

// Find an element in a binary tree using DFS
function find(root, target) {
    let stack = [root]

    while (stack.length > 0) {
        let curr = stack.pop()
        if (curr.value === target) {
            return true
        }
        if (curr.left) {
            stack.push(curr.left)
        }
        if (curr.right) {
            stack.push(curr.right)
        }
    }

    return false
}

// Insert an element into a binary search tree
// Need to tell it to make a new node
// Just use recursion yo
function insert(node, root) { 
    let stack = [root]

    while (stack.length > 0) {
        let curr = stack.pop()
        if (!curr.left && !curr.right) {
            if (node.value < curr.value) {
                curr.left = node
            }
            if (node.value >= curr.value) {
                curr.right = node
            }
        }
        if (node.value < curr.value && curr.left) {
            stack.push(curr.left)
        } 
        if (node.value >= curr.value && curr.right) {
            stack.push(curr.right)
        }
    }

    return
}

// Validate a BST
function validateBSTWrapper(root) {
    return validateBST(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
}

function validateBST(node, min, max) {
    if (!node) return true

    if (node.value > min || node.value <= max) {
        return (
            validateBST(node.left, min, node.value) &&
            validateBST(node.right, node.value, max)
        )
    }
    
    return false
}