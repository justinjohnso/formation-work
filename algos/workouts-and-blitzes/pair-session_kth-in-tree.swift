/* 
Your previous JavaScript content is preserved below:

// Binary Search Tree Kth Element

// Today, you will be giving a problem to find the kth smallest element in a BST (0-indexed)
// The target solve time for this question is 15 minutes.
// Example

//    3
//  2  4
// 1    5, 2 => 3

// [1, 2, 3, 4, 5]


//     4
//   2   10
// 1    8               , 3 => 8

// [1, 2, 4, 8, 10]
// [1, 2, 3, 3, 3]


// Function Signature

// func kth(root: Node, k: Int) -> Node?
 */

class Node {
  var val: Int
  var left: Node? = nil
  var right: Node? = nil
  init(_ val: Int) {
    self.val = val
  }
}

// [10]
// idx: 3
// cur: nil
// popped: 8

func kth(_ root: Node, _ k: Int) -> Node? {
  var cur: Node? = root
  var result: Node? = nil
  var stack: [Node] = []
  var curInd = -1
  
  while cur != nil || !stack.isEmpty {
    if let unwrappedCur = cur {
      stack.append(unwrappedCur)
      cur = cur?.left
    } else {
      if !stack.isEmpty {
        let poppedNode = stack.popLast()
        curInd += 1
        if curInd == k { return poppedNode }
        if let rightChild = poppedNode?.right {
          cur = rightChild
        }
      }
    }
  }
  return nil
}

let root = Node(3)
root.left = Node(2)
root.left?.left = Node(1)
root.right = Node(4)
root.right?.right = Node(5)

print(kth(root, 2)?.val)