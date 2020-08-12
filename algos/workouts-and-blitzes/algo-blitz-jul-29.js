// Count the elements in a linked list (recursive)
// Score: A
function countRecur(node, currCount) {
    if (!node) return currCount // base
    if (node) {
      countRecur(node.next, currCount + 1)
    }
  }
  
  // Reverse Linked List
  // Score: C
  function reverse(node) {
    let prev, temp
    
    while (node.next) {
      let temp = node.next
      node.next = prev
      prev = current
      node = temp
    }
    
    return prev
  }
  
  // Selection Sort
  // Score:
  
  // loop through and swap min to bottom
  function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let min = i
      for (let j = 0; j < arr.length; j++) { // iterate again and compare
        if (arr[min] > arr[j]) {
          min = j
        }
      }
      if (min !== i) { // if min isn't i, swap
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
      }
    }
    return arr
  }
  
  // Binary Search
  // Score:
  
  function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1
    
    while (left <= right) {
      let mid = Math.floor((left + right)/2)
      if (target === nums[mid]) return mid
    } 
    
    if (target > nums[mid]) {
      left = mid + 1
    } else if (target < nums[mid]) {
      right = mid - 1
    }
  }
  
  // Find the max element in a binary tree
  // Score: B-
  
  // iterate through and find max
  
  function findMax(root) {
    let stack = [root]
    let max = root.value
    
    while (stack.length > 0) {
      let curr = stack.pop()
      if (curr.value > max) {
        max = curr.value
      }
      if (curr.left) {
        stack.push(curr.left)
      }
      if (curr.right) {
        stack.push(curr.right)
      }
    }
    
    
    return max
  }
    
  
  // Validate a binary search tree
  // Score: A-
  
  function validateBST(root) {
    return validateBSTRecur(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
  }
  
  function validateBSTRecur(node, min, max) {
    if (!node) return true
    if (node.value >= max || node.value < min) {
      return false
    }
    
    return (
      validateBSTRecur(node.left, min, node.value) &&
      validateBSTRecur(node.right, node.value, max)
    )
  }
  
  // Number of duplicated elements in an array
  // Score: B-
  function countDupes(arr) {
    let tracker = {}
    let count = 0
    
    for (let i = 0; i < arr.length; i++) {
      let curr = arr[i]
      if (tracker[curr]) {
        count++
      } else {
        tracker[curr] = 1
      }
    }
    
    return count
    
    // for (item in tracker) {
    //   if (tracker[item] > 1) {// if dupe
    //     count++
    //   }
    // }
  }
  
  // Kth element in Fibonacci sequence
  // Score: A
  function fib(target) {
    return dynamicFib(target, {})
  }
  
  function dynamicFib(target, hist) {
    hist = hist || {}
    
    if (hist[target]) return hist[target] // if exists
    if (target <= 1) return 1 // base
    
    hist[num] = dynamicFib(num - 1, hist) + dynamicFib(num - 2, hist)
    return hist[num]
  }
  
  // Find an element in a binary tree (NOT BST) using BFS
  // Score: A
  function findEl(root, target) {
    let queue = [root]
    
    while (queue.length > 0) {
      let curr = queue.shift()
      if (curr.value === target) {
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
  
  // 0-1 Knapsack
  // Score:
  
  // def weights, vals, capacity
  let weights, vals, capacity
  
  function knapSack(weights, vals, capacity) {
    // noooooooooo
  }