// -----------------------------------------------------
class Node {
    constructor(data){
        this.data = data;
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

function sumWrapper(list) {
    return sumRecur(list.head, 0)
}

function sumRecur(node, sum){
    let currSum = sum + node.data

    if (node.next) {
        return sumRecur(node.next, currSum)
    } else {
        return currSum
    }
}

let test = (sumWrapper(myList))
console.log(test)