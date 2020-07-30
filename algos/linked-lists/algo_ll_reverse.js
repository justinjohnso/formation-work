// iterative
function reverse(head) {
    let node = head,
        previous,
        tmp;
  
    while (node) {
      // save next before we overwrite node.next!
      tmp = node.next;
  
      // reverse pointer
      node.next = previous;
  
      // step forward in the list
      previous = node;
      node = tmp;
    }
  
    return previous;
}

// recursive
function reverse(head) {
    if (!head || !head.next) {
      return head;
    }
    let tmp = reverse(head.next);
    head.next.next = head;
    head.next = undefined;
    return tmp;
}