// -----------------------------------------------------
class Node {
    constructor(data){
        this.value = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    add(data) {
        const newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
}

let myList = new LinkedList;
myList.add(4)
myList.add(56)
myList.add(1)
myList.add(45)
myList.add(321)
// -----------------------------------------------------

// iterative
function findMaxIterative(list) {
    let node = list.head
    let currMax = node.value
    console.log(currMax)

    while (node.next){
        if (node.next.value > currMax){
            currMax = node.next.value
        }
        node = node.next
    }

    return currMax
}

// recursive
function findMaxRecurWrap(list){
    let node = list.head
    return findMaxRecur(node, 0)
}

function findMaxRecur(node, currMax){
    let newMax = currMax + node.value
    if (!node.next){ // base
        return newMax
    } else {
        return findMaxRecur(node.next, newMax)
    }
}

let test = findMaxRecurWrap(myList)
console.log(test)