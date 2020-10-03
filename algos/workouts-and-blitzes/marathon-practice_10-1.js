//////////////////////////////////////////////////////////////////////////////////////////
// Welcome to Practice Algo Marathon :)
//
// This practice will help you prepare for Algo Marathon.
// You may add a helper function(s) if necessary.
// However, do not modify function signatures nor test cases.
// Some functions already have a return statement filled out for you, but
// this is just a placeholder. So you may modify it.
// Good luck, and don't forget to time yourself!
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
        console.log(`Beginning Test: ${test_name}`)
    }
        
    // Test Helpers
    test(expected_outcome, outcome, case_num) {
        if (expected_outcome == outcome) {
            return this.passed(case_num)
        }
        return this.failed(case_num)
    }
  
    testMultipleCases(possible_outcomes, outcome, case_num) {
        var possible_outcome
        for (possible_outcome of possible_outcomes) {
            if (this.compareArrays(possible_outcome, outcome)) {
                return this.passed(case_num)
            }
        }
        return this.failed(case_num)
    }

    testForArrays(expected_outcome, outcome, case_num) {
        if (this.compareArrays(expected_outcome, outcome)) {
            return this.passed(case_num)
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
        console.log(`\n   ${this.current_problem} Score: ${this.problem_score} / ${this.problem_count}`)
        if (this.failed_problems.length > 0) {
            console.log(`   ** Failed Test Cases: ${this.failed_problems}`)
        }
    }
    printFinal() {
        console.log(`\nTotal Score: ${this.total_score} / ${this.total_count}`)
    }
}
        
var test = new Test("Practice Algo Marathon - Mixed Set #1")

//////////////////////////////////////////////////////////////////////////////////////////
// 1. Reverse linked list
//
// Q. Reverse a given linked list.
//    Note: You must return the head of the updated linked list.
//
//////////////////////////////////////////////////////////////////////////////////////////

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function arrayify(head) {
    var ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.value)
        ptr = ptr.next
    }
    return array
}
    
function reverseLL(head) {
    let node = head
    let prev
    
    while (node) {
        [node.next, prev, node] = [prev, node, node.next]
    }
    
    return prev
}




// Test Cases
test.startProblem("1. Reverse Linked List")
var LL6 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
test.testForArrays([1], arrayify(reverseLL(new ListNode(1))), 1)
test.testForArrays([2, 1], arrayify(reverseLL(new ListNode(1, new ListNode(2)))), 2)
test.testForArrays([10, 7, 3, 5, 1, 13], arrayify(reverseLL(LL6)), 3)
test.endProblem()



//////////////////////////////////////////////////////////////////////////////////
// 2. Implement Queue Using Stacks
//
// Q. Implement the following operations of a queue using stacks:
//        push(x): Push element x to the back of queue.
//        pop(): Removes the element from in front of queue.
//        peek(): Get the front element.
//        empty(): Return whether the queue is empty.
//
// Examples:
//     queue = MyQueue()
//     queue.push(3)
//     queue.push(7)
//     queue.peek()       // returns 3
//     queue.pop()        // returns 3
//     queue.isEmpty()    // returns False
//
//////////////////////////////////////////////////////////////////////////////////

class MyQueue {
    // Write your code here.
    
    // Initialize your data structure here.
    constructor() {
        // Write your code here.
    }
    
    // Push element x to the back of queue.
    push(x) {
        // Write your code here.
    }

    // Removes the element from in front of queue and returns that element.
    pop() {
        // Write your code here.
    }

    // Get the front element.
    peek() {
        // Write your code here.
    }

        
    // Returns whether the queue is empty.
    isEmpty() {
        // Write your code here.
    }
}




// Test Cases
test.startProblem("2. Implement Queue Using Stacks")
var queue1 = new MyQueue()
test.test(true, queue1.isEmpty(), 1)
queue1.push(1)
test.test(1, queue1.peek(), 2)
queue1.push(2)
test.test(1, queue1.peek(), 3)
test.test(1, queue1.pop(), 4)
test.test(2, queue1.peek(), 5)
test.test(false, queue1.isEmpty(), 6)
test.test(2, queue1.pop(), 7)
test.test(true, queue1.isEmpty(), 8)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////
// 3. Implement strStr
//
// Q. Given a string, return the index of the first occurrence of target string.
//    Note: Return -1 if the input string does not contain the target string.
//
// Examples:
//     Input1: input: "hello", target: "ll"
//     Output1: 2
//
//     Input2: input: "formation", target: "afor"
//     Ouput2: -1
//
//////////////////////////////////////////////////////////////////////////////////

function strStr(input, target) {
    if (input === target) return input
    if (input === '') return -1
    
    for (let i = 0; i < input.length; i++) {
        if (target === input.slice(i, i + target.length)) return i
    }
    
    return -1
}




// Test Cases
test.startProblem("3. Implement strStr")
test.test(2, strStr("hello", "ll"), 1)
test.test(-1, strStr("", "a"), 2)
test.test(0, strStr("aaaaaaa", "a"), 3)
test.test(-1, strStr("formation", "afor"), 4)
test.test(-1, strStr("formation", "fora"), 5)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////
// 4. Convert Sorted Array to Binary Search Tree
//
// Q. Given an array where elements are sorted in ascending order,
//    convert it to a height balanced BST.
//    Note: - A height-balanced binary tree is a binary tree in which
//            the depth of the two subtrees of every node never differ
//            by more than 1.
//          - You must return the root of the BST.
// 
// Examples: 
//     Input: [-10,-3,0,5,9]
//
//     Output:
//                0
//               / \    
//             -3   9    // one possible solution: [0, -3, 9, -10, None, 5],
//             /   /
//           -10  5
//
//////////////////////////////////////////////////////////////////////////////////

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function arrayifyTree(root) {
    if (!root) { return [] }
    var queue = []
    var array = []
    queue.push(root)
    while (queue.length !== 0) {
        var node = queue.shift()
        array.push(node.value)
        if (node.left) { queue.push(node.left) }
        if (node.right) { queue.push(node.right) }
    }
    return array
}

function sortedArrayToBST(nums) {
    let low = 0
    let high = nums.length - 1
    
    return arrToBSTRecur(low, high, nums)
}

function arrToBSTRecur(low, high, nums) {
    if (low > high) return null
    let mid = Math.floor((low + high) / 2)
    
    let node = new TreeNode(nums[mid])
    
    node.left = arrToBSTRecur(low, mid - 1, nums)
    node.right = arrToBSTRecur(mid + 1, high, nums)
    
    return node
}



// Test Cases
test.startProblem("4. Convert Sorted Array to BST")
test.testForArrays([2, 1, 3], arrayifyTree(sortedArrayToBST([1, 2, 3])), 1)
test.testMultipleCases([[0, -3, 9, -10, 5], [0, -10, 9, -3, 5], [0, -10, 5, -3, 9], [0, -3, 5, -10, 9]], arrayifyTree(sortedArrayToBST([-10, -3, 0, 5, 9])), 2)
test.testForArrays([], arrayifyTree(sortedArrayToBST([])), 3)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////
// 5. Iterative In-Order Traversal
//
// Q. Given a binary tree, return the in-order traversal of its nodes' values.
//    Note: - In-order traversal:
//               1. Traverse the left subtree.
//               2. Visit the root.
//               3. Traversa the right subtree.
//          - You must use iterative approach.
//
//////////////////////////////////////////////////////////////////////////////////

// Do not comment out the TreeNode class below,
// but you may assume the class "TreeNode" is defined as the following:
// class TreeNode {
//     constructor(value = 0, leftChild = null, rightChild = null) {
//         this.value = value
//         this.left = leftChild
//         this.right = rightChild
//     }
// }


function inOrderTraversal(root) {
    let node = root
    let stack = []
    let res = []
    
    while (stack.length > 0 || node) {
        if (node) {
            stack.push(node)
            node = node.left 
        } else {
            node = stack.pop()
            res.push(node.value)
            node = node.right
        }
    }
    
    return res
}




// Test Cases
test.startProblem("5. In-Order Traversal")
var tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
var tree2 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3))
var tree3 = new TreeNode(1, new TreeNode(2, new TreeNode(4, new TreeNode(8), new TreeNode(9)), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)))
test.testForArrays([], inOrderTraversal(null), 1)
test.testForArrays([2, 1, 3], inOrderTraversal(tree1), 2)
test.testForArrays([4, 2, 5, 1, 3], inOrderTraversal(tree2), 3)
test.testForArrays([8, 4, 9, 2, 5, 1, 6, 3, 7], inOrderTraversal(tree3), 4)
test.endProblem()

// tree1:
//          1
//        /   \
//       2     3
//
// tree2:
//          1
//        /   \
//       2     3
//      / \  
//     4   5 
//
// tree3:
//          1
//        /   \
//       2     3
//      / \   / \
//     4   5 6   7
//    / \
//   8   9

//////////////////////////////////////////////////////////////////////////////////

test.printFinal()