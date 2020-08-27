//////////////////////////////////////////////////////////////////////////////////////////
// Welcome to Algo Blitz :)
//
// You will be given ten algo problems to solve.
// You may add a helper functiontion(s) if necessary.
// However, do not modify functiontion signatures nor test cases.
// Good luck!
//
//////////////////////////////////////////////////////////////////////////////////////////

class Test {
    constructor(test_name = "", printTests = false) {
        this.total_count = 0
        this.problem_count = 0
        this.total_score = 0
        this.problem_score = 0
        this.current_problem = ""
        this.failed_problems = []
        this.printTests = printTests
        console.log(`Beginning Test: ${test_name}`)
    }
        
    // Test Helpers
    test(expected_outcome, outcome, case_num = 0) {
        if (expected_outcome == outcome) {
            if (this.printTests == true) {
                console.log(`\n   Test Case ${case_num} Passed!`)
            }
            return this.passed(case_num)
        }
        if (this.printTests) {
            console.log(`\n   Test Case ${case_num} Failed.`)
        }
        return this.failed(case_num)
    }

    testForArrays(expected_outcome, outcome, case_num = 0) {
        if (this.compareArrays(expected_outcome, outcome)) {
            if (this.printTests == true) {
                console.log(`\n   Test Case ${case_num} Passed!`)
            }
            return this.passed(case_num)
        }
        if (this.printTests) {
            console.log(`\n   Test Case ${case_num} Failed.`)
        }
        return this.failed(case_num)
    }

    compareArrays(array1, array2) {
        return array1.length === array2.length && array1.filter((a, i) => Array.isArray(a) ? !this.compareArrays(a, array2[i]) : array2[i] !== a).length === 0;
    }
  
    // Test Logistics
    startProblem(problemName) {
        this.current_problem = problemName
        this.problem_score = 0
        this.problem_count = 0
        this.failed_problems = []
    }
    passed(case_num) {
        this.total_score += 1
        this.problem_score += 1
        this.problem_count += 1
        this.total_count += 1
    }
    failed(case_num) {
        this.problem_count += 1
        this.total_count += 1
        this.failed_problems.push(case_num)
    }
    endProblem() {
        if (this.failed_problems.length > 0) {
            console.log(`\n   ** Failed Test Cases: ${this.failed_problems}`)
        }
        else {
            console.log(`\n`)
        }
        console.log(`   ${this.current_problem} Score: ${this.problem_score} / ${this.problem_count}`)
    }
    printFinal() {
        console.log(`\nTotal Score: ${this.total_score} / ${this.total_count}`)
    }
}
        
var test = new Test("Algo Blitz")

//////////////////////////////////////////////////////////////////////////////////////////
// 1. Remove a target element from a sorted linked list (iterative)
//
// Q. Given a sorted linked list, remove a target element in the list.
//    Note: - You must return the head of the updated linked list.
//          - You may assume there are no duplicates.
//          - If the list does not contain the target element,
//            do nothing.
//
//////////////////////////////////////////////////////////////////////////////////////////

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function arrayify(head) {
    let ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.value)
        ptr = ptr.next
    }
    return array
}

function remove(head, target) {
//     let node = head
//     while (node.next) {
//       if (node.next.next !== null) {
        
//       }
//     }
    
    return new ListNode(1)
}




// Test Casees
test.startProblem("1. Remove an Element")
var LL1 = new ListNode(-1, new ListNode(1, new ListNode(3, new ListNode(4))))
var LL2 = new ListNode(-1, new ListNode(1, new ListNode(3, new ListNode(4))))
var LL3 = new ListNode(-1, new ListNode(1, new ListNode(3, new ListNode(4))))
var LL4 = new ListNode(-1, new ListNode(1, new ListNode(3, new ListNode(4))))
test.testForArrays([-1, 3, 4], arrayify(remove(LL1, 1)), 1)
test.testForArrays([1, 3, 4], arrayify(remove(LL2, -1)), 2)
test.testForArrays([-1, 1, 3], arrayify(remove(LL3, 4)), 3)
test.testForArrays([-1, 1, 3, 4], arrayify(remove(LL4, 5)), 4)
test.testForArrays([], arrayify(remove(new ListNode(1), 1)), 5)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////////////
// 2. Return the kth from the end of a linked list in one(-ish) pass 
//
// Q. Given a linked list, return the kth element from the end of the list.
//    Note: - You must return the value of the element, not the element itthis.
//          - You may assume all elements have positive Integer value.
//          - If K exceeds the length of the list, return -1 instead.
//
//////////////////////////////////////////////////////////////////////////////////////////

// Do not comment out the ListNode class below,
// but you may assume the class "ListNode" is defined as the following:
// class ListNode {
//     constructor(value = 0, next = null) {
//         this.value = value
//         this.next = next
//     }
// }

// 1 from the end SHOULD NOT BE THE LAST NODE

function findKthFromLast(head, k) {
    let slow = head
    let fast = head
    let length = 1;
    
    while (fast && k >= 1) { // move fast k times
      fast = fast.next;
      k--;
    }
    
    while (fast) {
      slow = slow.next;
      fast = fast.next;
      length++;
    }
    // console.log(slow.value, length)
   
    // if (length > k) return -1;
    return slow.value;
}




// Test Cases
var LL5 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
test.startProblem("2. Find the Kth from the Last")
test.test(10, findKthFromLast(LL5, 1), 1)
test.test(3, findKthFromLast(LL5, 3), 2)
test.test(13, findKthFromLast(LL5, 6), 3)
test.test(-1,  findKthFromLast(LL5, 7), 4)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////////////
// 3. Reverse linked list
//
// Q. Reverse a given linked list.
//    Note: You must return the head of the updated linked list.
//
//////////////////////////////////////////////////////////////////////////////////////////

// Do not comment out the ListNode class below,
// but you may assume the class "ListNode" is defined as the following:
// class ListNode {
//     let value
//     var next: ListNode

//     init(value = 0, next: ListNode = null) {
//         this.value = value
//         this.next = next
//     }  
// }
    
function reverseLL(head) {
    // Write your code here.
}




// Test Cases
let LL6 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
test.startProblem("3. Reverse Linked List")
test.testForArrays([1], arrayify(reverseLL(new ListNode(1))), 1)
test.testForArrays([2, 1], arrayify(reverseLL(new ListNode(1, new ListNode(2)))), 2)
test.testForArrays([10, 7, 3, 5, 1, 13], arrayify(reverseLL(LL6)), 3)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////////////
// 4. Merge Sort
//
// Q. Given an unsorted array, perform merge sort in ascending order.
//
//////////////////////////////////////////////////////////////////////////////////////////

function mergeSort(input) {
  // console.log("input", input);
  if (input.length <= 1) {
    return input
  }
  let mid = Math.floor(input.length/2)
  let left = input.slice(0, mid)
  let right = input.slice(mid)
  
  return merge(mergeSort(left), mergeSort(right));
  return [-1]
}

function merge(leftArr, rightArr) {
  let res = []
  let leftPointer = 0
  let rightPointer = 0
  
  // console.log(rightArr);
  while (leftPointer < leftArr.length && rightPointer < rightArr.length) {
    // lesser item wins
    if (leftArr[leftPointer] < rightArr[rightPointer]) {
      res.push(leftArr[leftPointer])
      leftPointer++
    } else {
      res.push(rightArr[rightPointer])
      rightPointer++
    }
  }
  
  return res
    .concat(leftArr.slice(leftPointer))
    .concat(rightArr.slice(rightPointer))
}




// Test Cases
test.startProblem("4. Merge Sort")
test.testForArrays([], mergeSort([]), 1)
test.testForArrays([1, 2, 3, 4, 5], mergeSort([3, 1, 5, 2, 4]), 2)
test.testForArrays([-1312, -3, 0, 1, 2, 3, 4, 12, 13, 15, 132], mergeSort([1, 13, -1312, 132, 0, -3, 12, 15, 4, 2, 3]), 3)
test.testForArrays([1], mergeSort([1]), 4)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////////////
// 5. Binary Search
//
// Q. Given a sorted array of n Integers and a target Integer, check
//    if the array contains a target via binary search.
//    Note: - You must return the Integer index of the target.
//          - If the array does not contain the target value, return -1.
//
//////////////////////////////////////////////////////////////////////////////////////////

function binarySearch(array, target) {
    // Write your code here.
}




// Test Cases
test.startProblem("5. Binary Search")
var array = [1, 2, 3, 6, 8, 13, 113, 153, 200]
test.test(0, binarySearch(array, 1), 1)
test.test(8, binarySearch(array, 200), 2)
test.test(4, binarySearch(array, 8), 3)
test.test(-1, binarySearch(array, 154), 4)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////////////
// 6. Count the elements in a binary tree (iterative and recursive)
//
// Q. Given a binary tree, count the number of elements in the tree.
//    Note: You must implement the function both iteratively and recursively.
//
//////////////////////////////////////////////////////////////////////////////////////////

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}
        
function countTreeNodesIterative(root) {
//     let stack = [tree.root]
    
//     while(stack.length > 0) {
//       let curr = stack.pop()
//       // console.log(curr)
//       if (target === curr.value) {
//         return true
//       }
//       if (curr.left) {
//         stack.push(curr.left)
//       }
//       if (curr.right) {
//         stack.push(curr.right)
//       }
//     }
//   return false
}

function countTreeNodesRecursive(root) {
    // Write your code here.
}




// Test Cases
test.startProblem("6. Count Tree Nodes")
test.test(0, countTreeNodesIterative(null), 1)
test.test(3, countTreeNodesIterative(new TreeNode(1, new TreeNode(2), new TreeNode(3))), 2)
test.test(6 , countTreeNodesIterative(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))), 3)
test.test(1, countTreeNodesIterative(new TreeNode()), 4)
test.test(0, countTreeNodesRecursive(null), 5)
test.test(3, countTreeNodesRecursive(new TreeNode(1, new TreeNode(2), new TreeNode(3))), 6)
test.test(6 , countTreeNodesRecursive(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))), 7)
test.test(1, countTreeNodesRecursive(new TreeNode()), 8)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////////////
// 7. Find the height of a binary tree 
//
// Q. Given a binary tree, find the height of the tree.
//
//////////////////////////////////////////////////////////////////////////////////////////

// Do not comment out the TreeNode class below,
// but you may assume the class "TreeNode" is defined as the following:
// class TreeNode {
//     constructor(value = 0, leftChild = null, rightChild = null) {
//         this.value = value
//         this.left = leftChild
//         this.right = rightChild
//     }
// }

function findHeight(root) {
    // Write your code here.
}




// Test Cases
test.startProblem("7. Find Height of a Tree")
test.test(0, findHeight(null), 1)
test.test(2, findHeight(new TreeNode(1, new TreeNode(2), new TreeNode(3))), 2)
test.test(4 , findHeight(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))), 3)
test.test(1, findHeight(new TreeNode()), 4)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////////////
// 8. Find an element in a binary search tree
//
// Q. Given a binary search tree and a target Integer, check if the tree
//    contains a target
//    Note: You must return a boolean.
//
//////////////////////////////////////////////////////////////////////////////////////////

// Do not comment out the TreeNode class below,
// but you may assume the class "TreeNode" is defined as the following:
// class TreeNode {
//     constructor(value = 0, leftChild = null, rightChild = null) {
//         this.value = value
//         this.left = leftChild
//         this.right = rightChild
//     }
// }

function searchBST(root, target) {
//     console.log(root)
//     let stack = [tree.root]
    
//     while(stack.length > 0) {
//       let curr = stack.pop()
//       // console.log(curr)
//       if (target === curr.value) {
//         return true
//       }
//       if (curr.left) {
//         stack.push(curr.left)
//       }
//       if (curr.right) {
//         stack.push(curr.right)
//       }
//     }
//   return false
}




// Test Cases
test.startProblem("8. Search BST")
let tree = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))
test.test(false, searchBST(null, 1), 1)
test.test(true, searchBST(tree, 1), 2)
test.test(true, searchBST(tree, 14), 3)
test.test(false, searchBST(tree, 2), 4)
test.test(true, searchBST(tree, 13), 5)
test.test(true, searchBST(new TreeNode(), 0), 6)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////////////
// 9. Validate a binary search tree
//
// Q. Given a binary tree, determine if it is a valid BST.
//    Note: You must return a boolean.
//
//////////////////////////////////////////////////////////////////////////////////////////

// Do not comment out the TreeNode class below,
// but you may assume the class "TreeNode" is defined as the following:
// class TreeNode {
//     constructor(value = 0, leftChild = null, rightChild = null) {
//         this.value = value
//         this.left = leftChild
//         this.right = rightChild
//     }
// }

function validateBST(tree) {
    let node = tree
    return validateBSTHelper(tree)
}

function validateBSTHelper(node, min = -Infinity, max = Infinity) {
  if (!node) return true
  if (node.value <= min || node.value >= max) return false
  
  return (
    validateBSTHelper(node.left, min, node.value) &&
    validateBSTHelper(node.right, node.value, max)
  )
}



// Test Cases
test.startProblem("9. Validate BST")
var tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3))
var tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
var tree3 = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))
test.test(true, validateBST(null), 1)
test.test(true, validateBST(tree1), 2)
test.test(false, validateBST(tree2), 3)
test.test(true, validateBST(tree3), 4)
test.test(true, validateBST(new TreeNode()), 5)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////////////
// 10. Fibonacci Sequence 
//
// Q. Given a target n, find the n-th Fibonacci Sequence Number
//    Note: - Fibonacci sequence is functionined: Fn = Fn-1 + Fn-2 (F0 = 0, F1 = 1).
//            In other words, the first number (F sub 0) of the sequence is 0,
//            and the second number (F sub 1) is 1, where the following nth number (Fn)
//            is the sum of the previous two numbers (F sub n-1 + F sub n-2).
//            e.g. 0, 1, 1, 2, 3, 5, 8, 13, 21...
//          - You may assume n is a non-negative Integer (i.e. n >= 0).
//
//////////////////////////////////////////////////////////////////////////////////////////

function fibonacci(n) {
  let hist = {}
  return fib(n, hist)
}

function fib(target, hist) {
  // console.log(hist)
  if (hist[target]) return hist[target]
  if (target <= 1) return 1
  
  return hist[target] = fib(target - 1, hist) + fib(target - 2, hist)
}


// Test Cases
test.startProblem("10. Fibonacci Sequence")
test.test(0, fibonacci(0), 1)
test.test(1, fibonacci(1), 2)
test.test(55, fibonacci(10), 3)
test.test(6765, fibonacci(20), 4)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////////////
// Well done! Here's a programming quote of the week:
//
// “Always code as if the guy who ends up maIntaining your code will
//  be a violent psychopath who knows where you live” ― John Woods
//
//////////////////////////////////////////////////////////////////////////////////////////