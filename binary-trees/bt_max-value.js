class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

function findMax(root) {
    let stack = [root]
    let currMax = root.value

    while (stack.length > 0) { // while items in stack
        let curr = stack.pop() // pop from stack
        if (curr.val > currMax) {
            currMax = curr.val // if curr.val > currMax, currMax = curr.val
        }
        // do for all items in tree (no guarantee of values because not BST)
        if (curr.right) {
            stack.push(curr.right)
        }
        if (curr.left) {
            stack.push(curr.left)
        }
    }
    
    return currMax
}

// ----------------------------------------------------

function findMax(node, max) {
    let currMax = max
    if (node.value > currMax) {
        currMax = node.value
    }
    
    if (!node.left && !node.right){
        return currMax
    } else {
        return Math.max(
            findMax(node.left, currMax),
            findMax(node.right, currMax)
        )
    }
}