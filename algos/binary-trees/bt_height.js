class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

// height = greatest depth
// stop when you hit a leaf node

function findHeight(root) {
    return findHeightRecur(root, 1)
}

function findHeightRecur(root, currDepth) {
    if (!root) return 0 // base

    if (!root.left && !root.right) { // at a leaf, return current depth
        return currDepth
    }

    if (root.left && root.right) { // two children
        return Math.max(
            findHeightRecur(root.left, currDepth + 1),
            findHeightRecur(root.right, currDepth + 1)
        )
    } else if (root.left) { // left child
        return findHeightRecur(root.left, currDepth + 1)
    } else { // right child
        return findHeightRecur(root.right, currDepth + 1)
    }
}

// -----------------------------------------
function findHeight(node) {
    if (!node) return 0

    let queue = [node]
    let depth = 0

    while (queue.length > 0) { 
        // pop nodes and enqueue children for queue.length iterations
        for (i = 0; i < queue.length; i++) { 
            let curr = queue.pop()
            if (curr.left){
                queue.push(curr.left)
            }
            if (curr.right){
                queue.push(curr.right)
            }
        }
        depth++
    }

    return depth
}