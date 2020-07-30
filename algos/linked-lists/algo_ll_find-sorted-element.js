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
myList.add(1)
myList.add(4)
myList.add(45)
myList.add(56)
myList.add(321)
// -----------------------------------------------------

function findSorted(list, num) {
    let node = list.head

    while (node.next && node.value != num) {
        node = node.next
    }

    if (node.value === num){
        return node
    } else {
        return -1
    }
}

let test = findSorted(myList, 56)
console.log(test)