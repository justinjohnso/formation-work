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

    // add(data){
    //     const newNode = new Node(data)

    //     if (this.head === null){
    //         this.head = newNode
    //     } else {
    //         let current = this.head
    //         while (current.next !== null){
    //             current = current.next
    //         }
    //         current.next = newNode
    //     }
    // }

    deleteNodeWithValue(data){
        const valToDelete = data
        let current = this.head
        let currentVal = this.head.data
        let next = current.next
        let nextVal = currentVal.next.data

        while (nextVal !== valToDelete){
            current = next
        }
        // delete node
        let tempPointer = next.next
        next.next = null
        next.val = null

        // reassign current pointer
        next = tempPointer
    }
}