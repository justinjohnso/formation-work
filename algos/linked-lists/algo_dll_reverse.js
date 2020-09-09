// Doubly Linked List Reverse

// Given a doubly linked list, write a function that returns the head of the list when it's reversed. 
// A doubly linked list is just like a normal linked list, except now each node keeps track of previous along with next. For example: 
// alt text
// Essentially, each listNode will have 3 variables: data, next, and prev. A basic implementation of this class is shown here:
// class doublyListNode {
//   var data: Int
//   var prev: doublyListNode?
//   var next: doublyListNode?
// }
// The target solve time for this question is 20 minutes.
// Example

// Input: 1 <-> 2 <-> 3 <-> 4 <-> 5
// Output: 3 <-> 2 <-> 1


// standard

class Node {
    constructor(val, prev=null, next=null) {
       this.val = val;
       this.next = next;
       this.prev = prev;
    }
        toString() {
          let result = String(this.val);
          if (this.next) {
              result += ` <-> ${this.next.toString()}`;
          }
          return result;
      }
  }
  
  function reverseLL(head) {
    let node = head //set node to head //1
    
    while (node) { // 1, 2, 3, null
      // [node.next, node.prev, head, node] = [node.prev, node.next, node, node.next]
      let temp = node.next // 2, 3, null
      node.next = node.prev // 2 -> null,  3 -> 1, null -> 2
      node.prev = temp // null -> 2, 1 -> 3, 2 -> null
      head = node // 1 -> 1, 2 -> 2, 3 -> 3
      
      node = temp // 1 -> 2 (move to node.next), 2 -> 3, null
    }
  
    return head.toString() //3->2->1->null
  }
  
  
  let test = new Node(1);
  test.next = new Node(2, test);
  test.next.next = new Node(3, test.next);
  test.next.next.next = new Node(4, test.next.next);
  test.next.next.next.next = new Node(5, test.next.next.next);
  
  console.log(test.toString())
  console.log(reverseLL(test))