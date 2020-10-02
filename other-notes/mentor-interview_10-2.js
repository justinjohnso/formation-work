/* 


/*
"""
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
  
"""
*/

// print the furthest right value of each level\
// traverse breadth first using q
// at each level, get all vals
// print last val from "level" arr

// start at root
// traverse from root 
// store curr in output array
// at each node, check if right
  // if yes, move right
  // if no, move left

// q: [3, 5]
// out: [1]

function printAllRight(root) {
    if (!root) return []
    
    let queue = [root]
    let res = []
    // let resLeft = []
    // let resRight = []
    
    while (queue.length > 0) { // 1
      if (queue.length == 1) {
        res.push(queue[0].value)
      }
      res.push(queue[queue.length - 1].value)
      
      let levelLength = queue.length
      for (let i = 0; i < levelLength; i++) { // 1 
        let currNode = queue.shift() // 
        if (currNode.left) {
          queue.push(currNode.left)
        }
        if (currNode.right) {
          queue.push(currNode.right)
        }
      }
    }
    
    return res
  }
  
  class Node {
    constructor(val){
      this.value = val
      this.left = null
      this.right = null
    }
  }
  
  let test = new Node(1)
  test.left = new Node(2)
  test.left.right = new Node(5)
  test.right = new Node(3)
  test.right.left = new Node(9)
  test.right.right = new Node(8)
  
  // console.log(test)
  
  console.log(printAllRight(test))
  
  
  
  /* 
  function printAllRight(root) {
    if (!root) return []
    
    let queue = [root]
    let res = []
    
    while (queue.length > 0) { // 1
      res.push(queue[-1])
      for (let i = 0; i < queue.length; i++) {
        let currNode = queue.shift() // pop from beginning
        if (currNode.left) {
          queue.push(currNode.left)
        }
        if (currNode.right) {
          queue.push(currNode.right)
        }
      }
    }
    
    return res
  }
  */