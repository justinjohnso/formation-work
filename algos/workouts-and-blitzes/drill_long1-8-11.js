// find the max element in an unsorted linked list (iterative)
function maxListIter(head) {
    let head = node
    let max = node.value

    while (node) {
        if (node.value > max) {
            max = node.value
        }
        node = node.next
    }

    return max
}

// find the max element in an unsorted linked list (recursive)
function maxListRecur(node, max) {
    if (!node) return
    if (node.value > max) {
        return Math.max(maxListRecur(node.next, node.value))
    } else {
        return Math.max(maxListRecur(node.next, max))
    }
}

// reverse linked list
function listReverse(node) {
    while (node) {
        let tmp = node.next
        node.next = node
        node = tmp
    }
}

// bubble sort
function bubbleSort(arr) {
    for (i of arr) {
        for (j of arr) {
            if (arr[j] > arr[j+1]) {
                let tmp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = tmp
            }
        }
    }
    return arr
} 

// number of duplicated elements in an array
function dupesInArr(arr) {
    let dupeCount = 0
    let dupeHash = {}

    for (item of arr) {
        if (!dupeHash[item]) {
            dupeHash[item] = 1
        } else {
            dupeHash[item]++
        }
    }

    for (item in dupeHash) {
        if (dupeHash[item] > 1) {
            dupeCount++
        }
    }

    return dupeCount
}

// max element in a binary tree
function btMaxRecur(node, max) {
    let currMax = Math.max(node.value, max)
    if (!node) return
    if (node.left) {
        return btMaxRecur(node.left, currMax)
    }
    if (node.right) {
        return btMaxRecur(node.right, currMax)
    }
}

// insert an element into a bst
function bstInsert(node, item) {
    if (item.value <= node.value) {
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

// validate a bst
function validateWrapper(root) {
    validateBst(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
}

function validateBst(node, min, max) {
    if (!node) return true
    if (node.value <= min || node.value > max) return false

    return (
        validateBst(node.left, min, node.value) &&
        validateBst(node.right, node.value, max)
    )
}
