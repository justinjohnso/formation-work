// count elements (iterative)
function count(head) {
    let count = 0
    let node = head

    while (node) {
        count++
        node.next = node
    }

    return count
}

// find the max element in an unsorted linked list (iterative)
function findMax(head) {
    let max = head.value
    let node = head
    
    while (node) {
        if (node.value > max) {
            max = node.value
        }
        node.next = node
    }

    return max
}

// insert into a sorted list (recursive)
function insert(node, item) {
    if (!node) return
    if (item >= node.value) {
        let temp = node
        node = new Node(item)
        node.next = temp
    } else {
        insert(node.next, item)
    }
}

// find the middle element in one pass
function findMid(head) {
    let pointer1 = head
    let pointer2 = head

    while(pointer2.next) {
        pointer1 = pointer1.next
        pointer2 = pointer2.next.next
    }

    return pointer1
}

// reverse
// function reverse(node) {
//     while(node) {
//         let temp = node.next
//         node.next = node
//         node = temp
//     }
// }

function reverseRecur(node) {
    if(!node || !node.next) return node

    let temp = reverseRecur(node.next)
    node.next.next = node
    node.next = null
    return temp
}