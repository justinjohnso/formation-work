// iterative count
function count(head) {
    if (!head) return 0

    let curr = head
    let count = 1
    while (curr.next) {
        curr = curr.next
        count++
    }

    return count
}

// find max unsorted
function findMax(head) {
    if (!head) return 0

    let curr = head
    let max = curr.value

    while (curr.next) {
        if (curr.next.value > max) {
            max = curr.next.value
        }
        curr = curr.next
    }

    return max
}

// insert sorted recursive
// function insert(node, valToInsert) {
//     if (!node) {
//         node = new Node(valToInsert)
//     }

//     if (node.)

// }

// find middle 1 pass (2 pointers)
function findMid(head) {
    if (!head) return
    if (!head.next) return head
    let point1 = head
    let point2 = head

    while (point2.next.next) {
        point1 = point1.next
        point2 = point2.next.next
    }

    return point1
}

// reverse
function reverse(head) {
    if (!head) return
    if (!head.next) return head
    let curr = head
    let prev = curr
    let temp

    while (curr) {
        temp = curr.next // save
        curr.next = prev
        prev = curr
        curr = temp
    }
}