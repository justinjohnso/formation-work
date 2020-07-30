// Linked list
class Node {
    constructor(data) {
      this.data = data
      this.next = null
    }
  }
  class LinkedList {
    constructor() {
      this.head = null
    }
  
    // Sum all elements in a linked list (recursive)
    function sum(node) {
      // null check
      let node = this.head
      if (this.head === null) {
        return 0
      } else {
        return node.value + this.sum(this.next)
      }
    }
  
  // Score: C (forgot the .value)
  
  // Reverse linked list 
    function reverse() {
      let current = this.head
      // iterate
      while (current.next !== null){
        current = current.next
        // TO_DO
      }
    }
  }
  // Score: -
  
  // Validate a binary search tree
  //  10
  // 3
  //  12
  function checkBST(root){
    // check if left is <
    if (root.left !== null && root.left.value < root.value){
      checkBST(root.left)
    } else {
      return 0
    }
    // check if right is >
    if (root.right !== null && root.right.value < root.value){
      checkBST(root.right)
    } else {
      return 0
    }
  }
  
  // Score: D
  
  // Bubble Sort
  function bubbleSort(arr) {
    // Optimization - if fully sorted, do one pass check
    // Optimization - because biggest el will be at last position, every loop can be decreased by one
    
    // for each in arr
    for (let i = 0; i < arr.length; i++) {
      // inner compare
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j+1]) {
          // temp swap
          let temp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = temp
        }
      }
    }
    return arr
  }
  // Score: B (
  
  // Remove an target element from a sorted linked list (iterative) - 3m
  // Score:
  
  // First element to be repeated k times
  // Score: 
  
  // Binary Search
  function binarySearch(arr, target){
    let left = 0
    let right = arr.length - 1
    
    while (left <= right){
      let mid = (left + right/2)
      // if target = mid
      if (target === arr[mid]) {
        return mid
        // right
      } else if (target < arr[mid]) {
        right = mid-1
        // left
      } else if (target > arr[mid]) {
        left = mid+1
      }
    }
    
    return 0
  }
  // Score:
  
  // Find an element in a binary tree using DFS
  // I did this with BFS, didn't I?
  function BSTfind(root, val) {
    let root = node
    // if = node
    if (val === node.value){
      return true
    // if < node
    } else if (val < node.value){
      return BSTfind(node.left)
    // if > node
    } else if (val > node.value){
      return BSTfind(node.right)
    }
  }
  // Score:
  
  // Merge Sort
  // Score:
  
  // 0-1 Knapsack
  // Brute force
  // int max, arr wt, arr val, 
  function knapSack(max, wt, val){
    n = val.length
    // base case
    if (n === 0 || max === 0){
      return 0
    }
    // if weight of nth > max, item cannot fit
    if (wt[n-1] > max){
      return knapSack(max, wt, val, n-1)
    } else {
    // return max of a) nth  included, b) item not included 
      return Math.max(
        (val[n-1] + knapSack(max-wt[n-1]), wt, val, n-1),
        (knapSack(max, wt, val, n-1)
      )
    }
  }
  
  // Score: