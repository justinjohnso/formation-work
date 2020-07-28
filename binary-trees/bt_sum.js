class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

function sumNodes(root) {
    let stack = [root]
    let sum = 0
    
    while (stack.length > 0){ // while stack has items
        let curr = stack.pop() // pop from the end of the stack
        sum += curr.value // add val to sum
        // add left and right to stack
        if (curr.right) {
            stack.push(curr.right)
        }
        if (curr.left) {
            stack.push(curr.left)
        }
    }

    return sum
}

// ----------------------------

function sumElements(node) {
    if (!node) {
        return 0
    } else {
        return node.value + sumElements(node.left) + sumElements(node.right)
    }
}