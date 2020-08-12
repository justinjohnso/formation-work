// 1. Return the kth from the end of a linked list in one(-ish) pass
// Score: A-

// 1 -> 2 -> 3 -> 4 -> 5 -> 6; k = 2
function kFromEnd(list, k) {
    let pointer1 = list.head
    let pointer2 = list.head
    
    // set pointer1 location
    while (k > 0) {
        pointer2 = pointer2.next
        k--
    }
    
    while (pointer2.next) {
        pointer1 = pointer1.next
        pointer2 = pointer2.next
    }
    
    return pointer1
}

// 2. Reverse linked list
// Score: A
function reverseList(head) {
    let node = head
    let prev
    
    while (node) {
        // let temp = node.next
        // node.next = prev
        // prev = node
        // node = temp
      [node.next, prev, node] = [prev, node, node.next] // ES6
    }
    
    return prev
}

// 3. Selection Sort
// Score:A-
function selectionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) { // if current < last min
                min = j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]] // ES6
        // if (min !== i) {
        //     let temp = arr[i]
        //     arr[i] = arr[min]
        //     arr[min] = temp
        // }
    }
    return arr
}

// 4. Binary Search
// Score: A
function binarySearch(arr, target, low = 0, high = arr.length - 1) { // usually done iteratively
    if (low <= high) {
        let mid = Math.floor((low + high) / 2)
        
        if (target === arr[mid]) {
            return true
        } else if (target < arr[mid]) {
            return binarySearch(arr, target, low, mid - 1)
        } else {
            return binarySearch(arr, target, mid + 1, high)
        }
    }
    
    return false
}

// 5. Find an element in a binary tree using BFS
// Score: A-
function bfs(root, target) {
    let queue = [root] // research JS built-in queue
    
    while(queue.length > 0) {
        let curr = queue.shift() 
        if (target === curr.value) {
            return true
        }
        if (curr.left) {
            queue.push(curr.left)
        }
        if (curr.right) {
            queue.push(curr.right)
        }
    }
    return false
}

// 6. Count the elements in a binary tree (recursive)
// Score: A
function countTree(node = root) {
    if (!node) return 0
    return countTree(node.left) + countTree(node.right) + 1
}


// 7. Sum all elements in a linked list (recursive)
// Score: A-
function sumList(node = list.head, sum = list.head.value) { // it matters what's given here
    if (!node) return
    if (node.next) {
        return sumList(node.next, sum + node.value)
    } else {
        return sum
    }
}

// 8. Number of unique elements in an array
// Score: C

// I fixed it!
function uniqueInArr(arr) {
    let hash = {}
    let count = 0
    
    for (item of arr) {
        if (hash[item]) {
            continue
        } else {
            hash[item]
            count ++
        }
    }
    
    return count
}

// 9. Validate a binary search tree
// Score: B+ (answering that question wrong)
function validateBST(node, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY) {
    if (!node) return true
    if (node.value <= min || node.value >= max) { // make sure to know allow vs disallow
        return false
    } 
    return (
        validateBST(node.left, min, node.value) &&
        validateBST(node.right, node.value, max)
    )
}

// 10. 0-1 Knapsack
// Score: A
let wts = [1,2,3,4,5]
let vals = [10,20,30,40,50]
let C = 50
let n = wts.length
let kp = new Array(n + 1).fill(new Array(C + 1).fill(0))

function knapsack(wts, vals, C, n) {
    if (n <= 0 || C <= 0) return 0
    if (kp[n][C]) return kp[n][C]
    
    if (wts[n - 1] > C) { // dont take
        return kp[n][C] = knapsack(wts, vals, C, n - 1)
    } else {
        let withoutItem = knapsack(wts, vals, C, n - 1)
        let withItem = vals[n - 1] + knapsack(wts, vals, C - wts[n - 1], n - 1)
        return kp[n][C] = Math.max(withoutItem, withItem)
    }
}