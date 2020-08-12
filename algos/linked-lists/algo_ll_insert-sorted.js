function insertSortedRecur(node, item) {
    if (!node || item <= node.value) {
        return new Node(item)
    }
    node.next = insertSortedRecur(node.next, item)
    return node
}