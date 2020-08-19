// https://backtobackswe.com/platform/content/clone-a-linked-list-with-random-pointers/

// Using a Map
// O(n) Time | O(n) Space
function copyRandomListMap(head) {
    if (!head) return null
    let cloneMap = new Map() // this is where we map the clone node to its original
    let curr = head

    // 1st pass - give all nodes their clone in our Map
    while (curr) {
        cloneMap.set(curr, new Node(curr.value))
        curr = curr.next
    }
    
    curr = head // reset current pointer to head of original list

    // 2nd pass - Give all clones their next and random pointer assignments
    while (curr) {
        // set the next of curr's clone -> to the clone of curr's next
        cloneMap.get(curr).next = cloneMap.get(curr.next) 
        // set the random of curr's clone -> to the clone of curr's random
        cloneMap.get(curr).random = cloneMap.get(curr.random)
        curr = curr.next
    }

    return cloneMap.get(head)
}

// -----------------------------------------------------

// Rewiring
// O(n) Time | O(1) Space
function copyRandomListRewire(head) {
    if (!head) return null

    let curr = head
    let next = null

    // 1st pass - Clone each node and link each original node to it's copy via the original node's next pointer
    while (curr) {
        next = curr.next
        let copy = new Node(curr.value)
        curr.next = copy
        copy.next = next

        curr = next // advance
    }

    curr = head // reset pointer

    // 2nd pass - We use each original node's next value to map to the clone, allowing us to reach the clone list
    while (curr) {
        if (curr.random) {
            curr.next.random = curr.random.next
            curr = curr.next.next // advance (we've mapped every other node)
        }
    }

    curr = head // reset pointer

    // 3rd pass - Restore the original list, and extract the copy list
    let dummyHead = new Node(0)
    let cloneListTail = dummyHead
    let copy = null

    while (curr) {
        next = curr.next.next // save the next value of the current original node (every other)
        copy = curr.next // save the curr's clone
        // append copy to clone list
        cloneListTail.next = copy
        cloneListTail = copy 

        curr.next = next // restore original next value
        curr = next // move to the next original node
    }

    return dummyHead.next // dummyHead.next is the head of our cloned list
}