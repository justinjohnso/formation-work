// sum all elements in a linked list (iterative)
function sumList(list) {
    let node = list.head
    let sum = node.value
    
    while(node) {
      sum += node.value
      node = node.next
    }
    
    return sum
  }
  
  // insert an element into a sorted linked list (recursive)
  function insertIntoSorted(node, val) {
    if(!node || val <= node.value) return new Node(val)
    node.next = insertIntoSorted(node.next, val)
    return node
  }
  
  // find the middle element from a linked list in one pass
  function findMid(head) {
    let slow = list.head
    let fast = list.head
    
    while(fast.next) {
      slow = slow.next
      fast = fast.next.next
    }
    
    return slow
  }
  
  // insertion sort
  function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
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
    let count = 0
    
    for (let item of arr) {
      if (hash[item]) {
        hash[item]++
      } else {
        hash[item] = 1
        count++
      }
    }
    return count
  }
  
  // find the height of a binary tree
  function findHeight(root) {
    let queue = [root]
    let height = 0
    
    while (queue.length > 0) {
      let level = queue.length
      for (let i = 0; i < level; i++) {
        let curr = queue.shift() // O(n), no built in Queue in JS
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
  function btFind(node, target) {
    if (!node) return false
    if (node.value === target) return true
    
    if (node.left) {
      return btFind(node.left, target)
    }
    if (node.right) {
      return btFind(node.right, target)
    }
    
    return false
  }
  
  // knapsack
  const wts = [1, 2, 3, 4, 5]
  const vals = [6, 7, 8, 9, 10]
  const C = 5
  const n = wts.length
  let ks = new Array(n + 1).fill(new Array(C + 1).fill(0))
  
  function knapsack(wts, vals, C, n) {
    if (n === 0 || C === 0) return 0 // if 0
    if (ks[n][C]) return ks[n][C] // if exists
    
    if (wts[n - 1] > C) { // dont take
      return ks[n][C] = knapsack(wts, vals, C, n - 1)
    } else { // choose
      let withoutItem = knapsack(wts, vals, C, n - 1)
      let withItem = vals[n - 1] + knapsack(wts, vals, C - wts[n - 1], n - 1)
      return kp[n][C] = Math.max(withoutItem, withItem)
    }
  }  