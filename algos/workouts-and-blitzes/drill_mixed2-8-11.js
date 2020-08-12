// find the middle element from a linked list in one pass
function findMid(list) {
    let slow = list.head
    let fast = list.head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}

// first element to be repeated k times
function firstKTimes(arr, k) {
    let hash = {}

    for (item of arr) {
        if (!hash[item]) {
            hash[item] = 1
        } else {
            if (hash[item] === k) {
            } else {
                hash[item]++
                if (hash[item] === k) return hash.item
            }
        }
    }

    return -1
}

// find an element in a binary tree (dfs or bfs)
function btFind(root, target) {
    let stack = [root]
    while (stack > 0) {
        let curr = stack.pop
        if (curr.value === target) return true
        if (curr.left) {
            stack.push(curr.left)
        }
        if (curr.right) {
            stack.push(curr.right)
        }
    }
    return false
}

// kth number in fib
function fib(k, hash) {
    let hash = hash || {} // init hash
    if (k <= 1) return 1 // base
    if (hash[k]) return hash[k] // check hash
    return hash[k] = fib(k - 1, hash) + fib(k - 2, hash) // recur
}