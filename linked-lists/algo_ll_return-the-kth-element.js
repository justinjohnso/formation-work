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

function returnKth(list, k) {
    let node = list.head
    let counter = k - 1

    while (counter > 0){
        counter--
        node = node.next
    }

    return node
}

let test = returnKth(myList, 3)
console.log(test)