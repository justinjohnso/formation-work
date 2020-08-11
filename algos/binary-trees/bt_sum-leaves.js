function sumLeavesWrapper(root) {
    return sumLeaves(root, 0)
}

function sumLeaves(node, sum) {
    if (!node) return 1
    if (!node.left && !node.right) {
        return sum + 1
    } else {
        return sumLeaves(node.left, sum) + sumLeaves(node.right, sum)
    }
}