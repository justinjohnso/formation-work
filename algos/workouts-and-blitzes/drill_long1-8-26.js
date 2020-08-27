// find the max element in an unsorted linked list (iterative)
function findMaxIter(list) {
    let node = list.head
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
  function findMaxRecur(node, max) {
    if (!node) return
    if (node.value > max) {
      return findMaxRecur(node.next, node.value)
    } else {
      return findMaxRecur(node.next, max)
    }
  }
  
  // reverse linked list
  function reverseList(list) {
    let node = list.head
    let prev
    
    while (node) {
      [node.next, prev, node] = [prev, node, node.next]
    }
  }
  
  // bubble sort
  function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= arr[i+1]) {
        continue
      }
      for (let j = 0; j < arr.length - j; j++) {
        [arr[j], arr[j + 1]] = [arr[j+1], arr[j]]
      }
    }
    return arr
  }
  
  
  // number of duplicated elements in an array
  function findDupes(arr) {
    let hash = {}
    let count = 0
    
    for (let item of arr) {
      if (hash[item] === 1) {
        count++
        hash[item]++
      } else if (hash[item] > 1) {
        hash[item]++
      } else {
        hash[item] = 1
      }
    }
    console.log(hash)
    return count
  }
  
  console.log(findDupes([1,2,3,1,2,3]))
  
  // max element in a binary tree
  function findMaxBTRecur(node, max) {
    let currMax = Math.max(max, node.value)
    if (!node) return
    
    if (node.left) {
      return findMaxBTRecur(node.left, currMax)
    }
    if (node.right) {
      return findMaxBTRecur(node.right, currMax)
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
  function validateBST(node, min = -Infinity, max = Infinity) {
    if (!node) return true
    if (node.value <= min || node.value >= max) return false // allow
  
    return (
      validateBST(node.left, min, node.value) &&
      validateBST(node.right, node.value, max)
    )
  }