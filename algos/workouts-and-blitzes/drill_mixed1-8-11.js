// count elements in a linked list (recursive)
function listCount(node) {
    if (!node) return
    return listCount(node.next) + 1
}

// insert an element into a sorted linked list (iterative)
function insertSorted(head, item) {
    let curr = head
    while (curr.next) {
        if (curr.value < item) {
            curr = curr.next
        }
    }
    curr.next = new Node(item)
}

// number of unique elements in an array
function uniqueItems(arr) {
    let unique = {}
    let count = 0
    for (item of arr) {
        if (!unique[item]) {
            unique[item] = 1
        } else {
            unique[item]++
        }
    }
    for (item in unique) {
        if (unique[item] === 1) {
            count++
        }
    }
    return count
}

function uniqueSet(arr) {
    return new Set(...arr)
}

// sum all elements in a binary tree
function btSum(node) {
    if (!node) return
    return btSum(node.left) + btSum(node.right) + node.value
}

// insert an element into a bst
function bstInsertWrapper(root) {
    return bstInsert(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
}

function bstInsert(node, min, max) {
    if (!node) return true
    if (node.value >= max || node.value < min) return false

    return (
        bstInsert(node.left, min, node.value) &&
        bstInsert(node.right, node.value, max)
    )
}