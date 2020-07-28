// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeKthNodeFromEnd(head, n) {
    // Write your code here.
    let counter = 1
    let first = head
    let second = head

    // move counter second n times
    // you want to be n nodes AHEAD of first pointer, not just n nodes into the list 
    while (counter <= n){
        second = second.next
        counter++
    }

    // null check, second is at null, "remove" the head node
    if (second === null){
        head.value = head.next.value
        head.next = head.next.next
        return
    }
    
    // make sure second pointer is pointing to the final value (not null)
    while (second.next !== null){
        second = second.next
        first = first.next
    }
    
    // first is pointing to the node right before the node we want to remove
    // first.next = NODE_TO_REMOVE
    // set first.next to NODE_TO_REMOVE.next
    first.next = first.next.next

  }
  
  // Do not edit the line below.
  exports.LinkedList = LinkedList;
  exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
  