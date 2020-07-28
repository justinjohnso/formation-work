// recursive
function countNodesRecursive(node){
    // base
    if (node === null){
        return 0
    } else {
        return 1 + countNodesRecursive(node.left) + countNodesRecursive(node.right)
    }
}

// iterative
function countNodesIterative(root){
    let counter = 0
    let stack = [node]
    
    while (stack.length > 0){
        let curr = stack.pop()
        if (curr){
            counter++
        }
        if (curr.left){
            stack.push(curr.left)
        }
        if (curr.right){
            stack.push(curr.right)
        }
    }

    return counter
}

// ----------------------------------

function binaryCount(root) {
    let stack = [root]
    let counter = 0
    
    while (stack.length > 0) {
        let curr = stack.pop()
        counter++ 
        if (curr.left){
            stack.push(curr.left)
        }
        if (curr.right){
            stack.push(curr.right)
        }
    }

    return counter
}

// ----------------------------------

function countNodes(node) {
    if (!node) {
        return
    } else {
        return 1 + countNodes(node.left) + countNodes(node.right)
    }
}