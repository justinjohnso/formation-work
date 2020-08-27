// remove every other from linked list (recursive)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function everyOtherRecur(node) {
    if(!node.next) return
    node.next = node.next.next || null
    return everyOtherRecur(node.next) 
  }
  
  // remove every other from linked list (recursive)
  function everyOtherIter(head) {
    if (!head) return
    let node = head
    while (node.next) {
      node.next = node.next.next
      node = node.next
    }
  }