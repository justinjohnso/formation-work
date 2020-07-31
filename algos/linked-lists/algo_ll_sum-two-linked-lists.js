// step through each in tandem, add new node to linked list with the sum of current nodes. (don't forget to carry the 1!)
function sumTwoLists(head1, head2) {
    let res = new ListNode(0)
    let curr = res
    
    let sum = 0 
    let carry = 0

    while (l1 || l2 || sum > 0) {
        if (l1) { // step through l1 and add val to sum
            sum += l1.value
            l1 = l1.next
        }
        if (l2) { // step through l1 and add val to sum
            sum += l2.value
            l2 = l2.next
        }

        carry = Math.floor(sum / 10); // carry the 1
        sum = sum % 10

        curr.next = new ListNode(sum)
        curr = curr.next
        
        sum = carry
        carry = 0
    }

    return res.next
}