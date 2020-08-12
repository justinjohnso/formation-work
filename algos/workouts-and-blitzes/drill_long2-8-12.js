// sum all elements in a linked list (iterative)
function sumLL(list) {
    let node = list.head
    let sum = 0
    
    if (!node) return null
    
    while(node) {
        sum+= node.value
        node = node.next
    }
    
    return sum
}


// insert an element into a sorted linked list (recursive)
function insertSortedRecur(node, valToInsert) {
    if (!node || valToInsert <= node.value) return new Node(valToInsert)
    node.next = insertSortedRecur(node.next, valToInsert)
    return node
}


// find the middle element from a linked list in one pass
function findMid(list1, list2) {
    let pointer1 = list1.head
    let pointer2 = list2.head
    
    while(pointer2.next) {
        pointer1 = pointer1.next
        pointer2 = pointer2.next.next
    }
    
    return pointer1
}

// insertion sort
function insertionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        let key = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = j
            j = j - 1
        }
        arr[j + 1] = key
    }
    
    return arr
}


// number of unique elements in an array
function uniqueInArr(arr) {
    let hash = {}
    for (item of arr) {
        if (!arr[item]) {
            arr[item] = 1
        } else {
            delete arr.item
        }
    }
    
    return Object.keys(hash).length
}


// find the height of a binary tree
function findHeight(root) {
    let queue = [root]
    let height = 0
    
    while (queue.length > 0) {
        let level = queue.length
        for (let i = 0; i < level; i++) {
            let curr = queue.shift()
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
        height++
    }    
    return height    
}


// find an element in a binary tree
function btFind(root, target) {
    let stack = [root]
    
    while (stack.length > 0) {
        let curr = stack.pop()
        if (curr.value === target) {
            return true
        }
        if (curr.left) {
            stack.push(curr.left)
        }
        if (curr.right) {
            stack.push(curr.right)
        }
    }
    
    return false
}

// knapsack
let wts = [1,2,3,4,5]
let vals = [10,20,30,40,50]
let C = 5
let n = wts.length

let ks = new Array(n + 1).fill(new Array(C + 1).fill(0))
function knapsack(wts, vals, C, n) {
    if (n === 0 || C === 0) return 0
    if (ks[n][C]) return ks[n][C]
    if (wts[n - 1] > C) {
        return ks[n][C] = knapsack(wts, vals, C, n - 1) // don't take
    } else {
        let withoutItem = knapsack(wts, vals, C, n - 1)
        let withItem = vals[n - 1] + knapsack(wts, vals, C - wts[n - 1], n - 1)
        return ks[n][C] = Math.max(withoutItem, withItem)
    }
}