// remove a target element from a linked list (iterative)
function listRemove(node = list.head, target) {
    if (!node || !node.next) return
        
    while(node.next.val !== target) {
        node = node.next
    }
    
    let temp = node.next.next
    node.next.next = null
    node.next.val = null
    node.next = temp
}

// remove a target element from a linked list (recursive)
function listRemoveRecur(node = list.head, target) {
    if (!node) return
    if (node.value === target) {
        let res = node.next
        return res
    }
    node.next = listRemoveRecur(node.next, target)
    return node
}


// return the kth from the end of a linked list in one pass


// reverse linked list


// selection sort


// merge sort


// binary search


// validate a bst


// knapsack