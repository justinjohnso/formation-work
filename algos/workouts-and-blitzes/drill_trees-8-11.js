// count the elements in a binary tree
function count(root) {
    let stack = [root]
    let count = 0
    while (stack.length > 0 ) {
        let curr = stack.pop()
        count++
        if (curr.left) {
            stack.push(curr.left)
        }
        if (curr.right) {
            stack.push(curr.right)
        }
    }
    return count
}

function countRecur(node) {
    if (!node) {
        return
    } else {
        return countRecur(node.left) + countRecur(node.right) + 1
    }
}

// sum the elements in a binary tree
function sum(root) {
    let stack = [root]
    let sum = 0
    while (stack.length > 0 ) {
        let curr = stack.pop()
        sum += curr.value
        if (curr.left) {
            stack.push(curr.left)
        }
        if (curr.right) {
            stack.push(curr.right)
        }
    }
    return sum
}

// find an element in a binary tree using DFS
function find(root, target) {
    let stack = [root]

    while (stack.length > 0 ) {
        let curr = stack.pop()
        if (target === curr.value) {
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

// insert an element into a bst
function insert(node, item) {
    if (item <= node.value) {
        if (!node.left) {
            node.left = new TreeNode(item)
        } else {
            insert(node.left, item)
        }
    } else {
        if (!node.right) {
            node.right = new TreeNode(item)
        } else {
            insert(node.right, item)
        }
    }
}

// validate a bst
function validateWrapper(root) {
    return validateBst(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
}

function validateBst(node, min, max) {
    if (!node) return true
    if (node.value >= max || node.value < min) return false
    return ( // DON'T FORGET TO RETURN A VALUE
        validateBst(node.left, min, node.value) &&
        validateBst(node.right, node.value, max)
    )
}