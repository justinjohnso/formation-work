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

function countOddWrap(list) {
    let head = list.head
    return countOddRecur(head, 0, 0)
}

function countOddRecur(node, count, iteration) {
    let newIteration = iteration
    let newCount = count
    newIteration++
    if (newIteration % 2 != 0){
        newCount++ 
    }
    // base
    if (!node.next){
        return newCount
    } else {
        return countOddRecur(node.next, newCount, newIteration)
    }
}

let test = countOddWrap(myList)
console.log(test)