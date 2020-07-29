// remove duplicates from a sorted linked list
function removeDupes(head) {
    if (!head) return
    if (!head.next) return head

    let curr = head

    while (curr.next) {
        if (curr.next.value === curr.value) {
            curr.next = curr.next.next
        }
    }

    return
}