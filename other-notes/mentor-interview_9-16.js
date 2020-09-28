/*
"""
1) Binary Search Trees (BST) have the following property: Left < Root < Right
2) An in-order traversal would result in visiting the nodes in sorted, ascending order (smallest->largest).

Given some value in a BST, get the in-order successor to that value.
The successor is the next node in the traversal.
You can assume the node is valid and exists somewhere in the tree.
"""
*/

// BST -> in order successor is next largest 

// right child
// parent
// in order successor is the node with no left child, furthest to the left of its right child

//
//                          50
//      25                                  60
//   20    30                       54               64
// 10  22 <-   31                52     57                   68
//                  37                    59
//               34    40
//           32 
//              33

// from the root -> target
// is there a right child? -> if no, we've seen it before, (keep track of values to find target)
// (if no) -> closest to and greater than target
// find nearest next value

// search for target
// check if right child <- return parent
// go to the right
// recurse, starting with the right child
 
function findNextSuccessor(root, target) {
    // search DFS
    let stack = [root]
    let curr
    let nodesSeen = [] // 22 20 25 50
    
    while (stack.length > 0) {
      curr = stack.pop()
      nodesSeen.push(curr.value)
      if (target === curr.value) {
        break // break out of loop
      }
      if (curr.left && target < curr.value) {
        stack.push(curr.left)
      }
      if (curr.right && target > curr.value) {
        stack.push(curr.right)
      }
    }
    
    if (curr.right) {
      // do stuff
      curr = curr.right
      stack = [curr]
      
      while (stack.length > 0) {
        curr = stack.pop()
        if (!curr.left) {
          // yay!
          return curr
        } else {
          stack.push(curr.left)
        }
      }
    } else {
      // parent comparison
      let bigNodes = nodesSeen.filter((val) => val > curr.val)
      return bigNodes[-1]
  //     let bigDiff = Infinity
      
  //     bigNodes.forEach((val) => {
  //       let diff = Math.abs(val - curr.val)
  //       if (diff < bigDiff) {
  //         bigDiff = diff
  //       }
  //     })
    }
    
  }
