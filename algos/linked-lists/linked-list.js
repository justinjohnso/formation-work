// Array
// [6, 3, 4, 2, 1]

// Linked List
// [6]->[3]->[4]->[2]->[1]
// connections go one direction (middle -> 4, middle.next -> 2, middle.next.next -> 1)

// class Node {
//     constructor(data) {
//     // data is whatever exists inside the current box
//         this.data = data;
//     // next references the next box
//         this.next = null;
//     // head -> first box
//     // head.data -> first box data
//     // head.next -> next box
//     // head.next.data -> next box data
//     }
// }

// // inits all the nodes
// let nodeA = new Node(6);
// let nodeB = new Node(3);
// let nodeC = new Node(4);
// let nodeD = new Node(2);
// let nodeE = new Node(1);

// // links all the nodes
// nodeA.next = nodeB
// nodeB.next = nodeC
// nodeC.next = nodeD
// nodeD.next = nodeE

// ----------- 
// The better way

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        const newNode = new Node(data)

        // if there's nothing in the list yet
        if (this.head === null) {
            // add the node
            this.head = newNode
        } else {
            let current = this.head;
            // iterate to the end of the list
            while (current.next !== null) {
                current = current.next;
            }
            // add node at the end
            current.next = newNode;
        }
    }

    countNodes(){
        // set current node and counter
        let current = this.head;
        let counter = 1
        // while there is a next node, move to it and increment counter
        while (current.next !== null){
            current = current.next
            counter++
        }
        return counter
    }

    deleteNodeWithValue(data){
        const valToDelete = data
        let current = this.head
        let currentVal = this.head.data

        if (currentVal === valToDelete){
            console.log(current)
            current = null
            currentVal = null
        } else if (current.next !== null) {
            while (current.next.data !== valToDelete){
                current = current.next
            }

            // delete node
            let tempNode = current.next
            let tempPointer = current.next.next
            console.log(tempNode)
            current.next.next = null
            current.next.data = null

            // reassign current pointer
            current.next = tempPointer
        } else {
            if (currentVal === valToDelete){
                console.log(current)
                current = null
                currentVal = null
            }
        }
    }
}

let myList = new LinkedList;
myList.add(4)
myList.add(56)
myList.add(1)
myList.add(45)
myList.add(321)

myList.deleteNodeWithValue()

// console.log(myList.countNodes())
// console.log(myList.head)

// -----------------------------------------------
