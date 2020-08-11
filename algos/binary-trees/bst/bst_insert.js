function bstInsert(TreeNode, item) {
    let node = TreeNode
    if (item <= node.value) {
        if (!node.left) {
            node.left = new TreeNode(item)
        } else {
            bstInsert(node.left, item)
        }
    } else {
        if (!node.right) {
            node.right = new TreeNode(item)
        } else {
            bstInsert(node.right, item)
        }
    }
}