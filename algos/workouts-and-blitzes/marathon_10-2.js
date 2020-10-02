//////////////////////////////////////////////////////////////////////////////////
// Welcome to Algo Marathon :)
//
// You will be given a series of algo problems to solve.
// You may add a helper functiontion(s) if necessary.
// However, do not modify functiontion signatures nor test cases.
// Some functions already have a return statement filled out for you, but
// this is just a placeholder. So you may modify it.
//
// Ready? Set??? Go!!!!
//
//////////////////////////////////////////////////////////////////////////////////

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
        
var test = new Test("Algo Marathon")

//////////////////////////////////////////////////////////////////////////////////
// 1-1. Return the kth from the end of a linked list in one(-ish) pass 
//
// Q. Given a linked list, return the kth element from the end of the list.
//    Note: - You must return the value of the element, not the element itself.
//          - You may assume all elements have positive integer value.
//          - If K exceeds the length of the list, return -1 instead.
//
//////////////////////////////////////////////////////////////////////////////////

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

// 13 -> 1 -> 5 -> 3 -> 7 -> 10
//  s         f               

// move fast to k point
// move slow until fast is null
// return slow

function findKthFromLast(head, k) {
    let fast = head
    let slow = head
    
    // move fast k-1 times
    // move both until fast.next == null
    
    while (k >= 2) {
        if (fast.next) {
            fast = fast.next
            k-- 
        } else {
            return -1
        }
        
    }
    
    while (fast && fast.next) {
        fast = fast.next
        slow = slow.next
    }

    return slow.value
}




// Test Cases
test.startProblem("1-1. Find the Kth from the Last")
var LL5 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
test.test(10, findKthFromLast(LL5, 1), 1)
test.test(3, findKthFromLast(LL5, 3), 2)
test.test(13, findKthFromLast(LL5, 6), 3)
test.test(-1,  findKthFromLast(LL5, 7), 4)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////
// 1-2. Return a copy from the kth to the end of a linked list
//
// Q. Given a linked list, make a copy of the list from the kth position
//    to the end.
//    Note: - You must return the head of the copied linked list.
//          - You may assume all elements have positive integer value.
//          - If K exceeds the length of the list, return noneType
//            (e.g. None, null, or nil) instead.
//
//////////////////////////////////////////////////////////////////////////////////

// Do not comment out the ListNode class below,
// but you may assume the class "ListNode" is defined as the following:
// class ListNode {
//     constructor(value = 0, next = null) {
//         this.value = value
//         this.next = next
//     }
// }

function copyKthToLast(head, k) {
    // let fast = head
    // let slow = head
    
    // move fast k-1 times
    // move both until fast.next == null
    
//     while (k >= 2) {
//         if (fast.next) {
//             fast = fast.next
//             k-- 
//         } else {
//             return -1
//         }
        
//     }
    
//     while (fast && fast.next) {
//         fast = fast.next
//         slow = slow.next
//     }
    
    // Write your code here.
    return [-1]
}




// Test Cases
test.startProblem("1-2. Copy Kth")
var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
test.testForArrays([10], arrayify(copyKthToLast(LL1, 1)), 1)
test.testForArrays([3, 7, 10], arrayify(copyKthToLast(LL1, 3)), 2)
test.testForArrays([13, 1, 5, 3, 7, 10], arrayify(copyKthToLast(LL1, 6)), 3)
test.testForArrays([], arrayify(copyKthToLast(LL1, 7)), 4)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////
// 1-3. Count from kth to the end of a linked list
//
// Q. Given a linked list and kth position, return the number of nodes
//    between the kth and the end of the list.
//    Note: - You may assume all elements have positive integer value.
//          - If K exceeds the length of the list, return -1 instead
//
//////////////////////////////////////////////////////////////////////////////////

// Do not comment out the ListNode class below,
// but you may assume the class "ListNode" is defined as the following:
// class ListNode {
//     constructor(value = 0, next = null) {
//         this.value = value
//         this.next = next
//     }
// }

function countKthToLast(head, k) {
    // Write your code here.
}




// Test Cases
test.startProblem("1-3. Count Kth")
var LL2 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
test.test(4, countKthToLast(LL1, 1), 1)
test.test(2, countKthToLast(LL1, 3), 2)
test.test(-1, countKthToLast(LL1, 6), 3)
test.test(-1, countKthToLast(LL1, 7), 4)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////
// 2. Merge Sort
//
// Q. Given an unsorted array, perform merge sort in ascending order.
//
//////////////////////////////////////////////////////////////////////////////////

// split into individual
// merge back together
    //compare left and right, merge as one sorted list

function mergeSort(input) {
    if (input.length <= 1) return input
    
    let mid = Math.floor(input.length/2)
    let left = input.slice(0, mid)
    let right = input.slice(mid)
    
    return merge(
        mergeSort(left), mergeSort(right)
    )
    
    // return [-1]
}

function merge(leftArr, rightArr) {
    if (!leftArr) return rightArr
    if (!rightArr) return leftArr
    
    let leftPoint = 0
    let rightPoint = 0
    let res = []
    
    while (leftPoint < leftArr.length && rightPoint < rightArr.length) {
        // compare
        if (leftArr[leftPoint] < rightArr[rightPoint]) {
            res.push(leftArr[leftPoint])
            leftPoint++
        } else {
            res.push(rightArr[rightPoint])
            rightPoint++
        }
    }
    // concat other arr on
    return res.concat(leftArr.slice(leftPoint).concat(rightArr.slice(rightPoint)))
}



// Test Cases
test.startProblem("2. Merge Sort")
test.testForArrays([], mergeSort([]), 1)
test.testForArrays([1], mergeSort([1]), 2)
test.testForArrays([1, 2, 3, 4], mergeSort([3, 1, 2, 4]), 3)
test.testForArrays([-13, -10, 1, 3, 5, 8, 9, 32], mergeSort([-10, 1, 3, 8, -13, 32, 9, 5]), 4)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////
// 3. Implement Queue Using Stacks
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
        this.stack1 = []
        this.stack2 = []
    }
    
    // Push element x to the back of queue.
    push(x) { 
        this.stack1.push(x)
    }

    // Removes the element from in front of queue and returns that element.
    pop() {
        // Write your code here.
        
        // move from stack1 to stack2
        while (this.stack1.length > 1) {
            this.stack2.push(this.stack1[this.stack1.length - 1])
            this.stack1.pop()
        }
        
        // pop from stack1
        let el = this.stack1.pop()
        
        // move back to stack1
        while (this.stack2.length > 0) {
            this.stack1.push(this.stack2[this.stack2.length - 1])
            this.stack2.pop()
        }
        
        return el
    }

    // Get the front element.
    peek() {
        // Write your code here.
        return this.stack1[0]
    }

        
    // Returns whether the queue is empty.
    isEmpty() {
        return this.stack1.length > 0 ? false : true
    }
}




// Test Cases
test.startProblem("3. Implement Queue Using Stacks")
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
// 4. Print Tree by Level
//
// Q. Given a binary tree, print level order traversal so that
//    nodes of all levels are printed in several lines
//    Note: return a matrix (2D array) containing all values
// 
// Examples: 
//     Input1:                        Input2:
//                  1                             1
//                 / \                           / \
//                2   3                         2   3
//                                                 / \
//                                                4   5
//
//     Output1: [[1], [2, 3]]         Output2: [[1], [2, 3], [4, 5]] 
//
//////////////////////////////////////////////////////////////////////////////////

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function printTree(root) {
    let queue = [root]
    let res = []
    
    while (queue.length > 0) {
      let level = queue.length
      let levelArr = []
      for (let j = 0; j < level; j++) {
        let curr = queue.shift()
        levelArr.push(curr.value)
        if (curr.left) {
          queue.push(curr.left)
        }
        if (curr.right) {
          queue.push(curr.right)
        }
      }
      res.push(levelArr)
    }
    
    return res
}




// Test Cases
test.startProblem("4. Print Tree by Level")
test.testForArrays([[1], [2, 3]], printTree(new TreeNode(1, new TreeNode(2), new TreeNode(3))), 1)
test.testForArrays([[2], [29, 4], [26, 2], [9]], printTree(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))), 2)
test.testForArrays([[1], [2, 3], [4, 5]], printTree(new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)))), 3)
test.testForArrays([[-3]], printTree(new TreeNode(-3)), 4)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////
// 5. Trie
//
// Q. Implement a trie with insert, search, and startsWith methods.
//    Note: - A trie is a tree-like data structure whose nodes store
//            the letters of an alphabet.
//          - By structuring the nodes in a particular way, words and strings
//            can be retrieved from the structure by traversing down a branch path
//            of the tree.
//          - You may assume that all inputs are consist of lowercase letters a-z.
//          - All inputs are guaranteed to be non-empty strings.
//
// Examples: 
//     trie = Trie()
//     trie.insert("apple")
//     trie.search("apple")       // returns True
//     trie.search("app")         // returns False
//     trie.startsWith("app")     // returns True
//     trie.insert("app")   
//     trie.search("app")         // returns True
//
//////////////////////////////////////////////////////////////////////////////////

class Trie {
    // Write your code here.
    
    // Initialize your data structure here.
    constructor() {
        // Write your code here.
    }
       
    // Inserts a word into the trie.
    insert(word) {
        // Write your code here.
    }

    // Returns if the word is in the trie.
    search(word) {
        // Write your code here.
    }
        
    // Returns if there is any word in the trie that starts with the given prefix.
    startsWith(prefix) {
        // Write your code here.
    }
}




// Test Cases
test.startProblem("5. Trie")
var trie = new Trie()
trie.insert("apple")
test.test(true, trie.search("apple"), 1)
test.test(false, trie.search("app"), 2)
test.test(true, trie.startsWith("app"), 3)
trie.insert("app")
test.test(true, trie.search("app"), 4)
test.test(true, trie.startsWith("a"), 5)
test.test(false, trie.startsWith("ple"), 6)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////
// 6. Merge K Sorted Lists
//
// Q. Given an array of linked-lists lists, merge all the linked-lists into
//    one sorted linked-list and return it.
//    Note: Each linked list is sorted in ascending order. 
//
// Examples:
//     Input1: [[1,4,5],[1,3,4],[2,6]        // 1->4->5, 1->3->4, 2->6
//     Output1: [1,1,2,3,4,4,5,6]            // 1->1->2->3->4->4->5->6
//
//     Input2: []
//     Ouput2: []
//
//////////////////////////////////////////////////////////////////////////////////

// Do not comment out the ListNode class below,
// but you may assume the class "ListNode" is defined as the following:
// class ListNode {
//     constructor(value = 0, next = null) {
//         this.value = value
//         this.next = next
//     }
// }
    
function mkl(lists) {
    // Write your code here.
}




// Test Cases
test.startProblem("6. Merge K Sorted Lists")
var LL9 = new ListNode(-1, new ListNode(4, new ListNode(5)))
var LL6 = new ListNode(1, new ListNode(3, new ListNode(4, new ListNode(4))))
var LL7 = new ListNode(2, new ListNode(6))
var LL8 = new ListNode(1, new ListNode(11, new ListNode(111)))
test.testForArrays([-1, 1, 2, 3, 4, 4, 4, 5, 6], arrayify(mkl([LL9, LL6, LL7])), 1)
test.testForArrays([0, 1, 11, 111], arrayify(mkl([LL8, new ListNode()])), 2)
test.testForArrays([0], arrayify(mkl([new ListNode()])), 3)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////
// 7. Max Path Sum
//
// Q. Given a non-empty binary tree, find the maximum path sum.
//    Note: A path is any sequence of nodes from some starting node to any node
//          in the tree along the parent-child connections. The path must contain
//          at least one node and does not need to go through the root.
//
// Example:
//    Input: 
//                 1
//                / \    
//               2   3
//              /     
//             -1   
//
//    Output: 6
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

function mps(root) {
    // Write your code here.
}




// Test Cases
test.startProblem("7. Max Path Sum")
test.test(6, mps(new TreeNode(1, new TreeNode(2, new TreeNode(-1)), new TreeNode(3))), 1)
test.test(18, mps(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)))), 2)
test.test(3, mps(new TreeNode(1, new TreeNode(2), new TreeNode(-4))), 3)
test.test(6, mps(new TreeNode(1, new TreeNode(-5, new TreeNode(6)), new TreeNode(3))), 4)
test.test(21, mps(new TreeNode(1, new TreeNode(-10, new TreeNode(3, new TreeNode(5, new TreeNode(13), new TreeNode(-1)), new TreeNode(-1))), new TreeNode(-5, new TreeNode(-20), new TreeNode(-21)))), 5)
test.endProblem()

//////////////////////////////////////////////////////////////////////////////////
// 8. Longest Common Subsequence
//
// Q. Given two strings, return their longest common subsequence.
//    Note: A subsequence of a string is a new string generated from the original string
//          with some characters (can be none) deleted without changing the relative order
//          of the remaining characters. (e.g. "ade" is a subsequence of "abcde" while
//          "aed" is not). A common subsequence of two strings is a subsequence that is
//          common to both strings.
//
// Examples:
//    Input1: string1: "abcde", string2: "ade"
//    Output1: ["a", "d", "e"]
//
//    Input2: string1: "abc", string2: "abc"
//    Output2: ["a", "b", "c"]
//
//    Input3: string1: "", string2: "abc"
//    Output3: []
//
//    Input4: string1: "abc", string2: "def"
//    Output4: []
//
//////////////////////////////////////////////////////////////////////////////////

function lcs(str1, str2) {
    // Write your code here.
    return []
}




// Test Cases
test.startProblem("8. Longest Common Subsequence")
test.testForArrays([], lcs("", ""), 1) 
test.testForArrays([], lcs("", "Formation"), 2)
test.testForArrays(["F", "o", "r", "m"], lcs("Formation", "Form"), 3)
test.testForArrays(["a", "p", "p", "l", "e"], lcs("apple", "pineapple"), 4)
test.testForArrays(["p", "p", "l", "e"], lcs("apple", "Apple"), 5)
test.testForArrays(["C", "D", "E", "G", "H", "J", "K", "L", "T", "U", "V"], lcs("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "CCDDEGDHAGKGLWACCDDDDDDJWKJAWGKGWJAKGGWAFWLFFAGJWKAGTUV"), 6)
test.testForArrays(["2", "2", "2", "2", "2", "2", "7"], lcs("13222323227", "2222222222517"), 7)
test.endProblem()
test.printFinal()

//////////////////////////////////////////////////////////////////////////////////
//                                                                              //
//  #####  #####  #   #  #####   ####  #   #     #     #####  #   #  #####   #  //
//  #        #    ##  #    #    #      #   #     #       #    ##  #  #       #  //
//  #####    #    # # #    #    #####  #####     #       #    # # #  #####   #  //
//  #        #    #  ##    #        #  #   #     #       #    #  ##  #          //
//  #      #####  #   #  #####  ####   #   #     ##### #####  #   #  #####   #  //
//                                                                              //
//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////
// Well done! Here's a programming quote of the week:
//
// “Perfection is achieved not when there is nothing more to add,but rather
// when there is nothing more to take away.” – Antoine de Saint-Exupery
//
//////////////////////////////////////////////////////////////////////////////////