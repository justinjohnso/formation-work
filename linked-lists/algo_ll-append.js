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

    add(data){
        const newNode = new Node(data)

        if (this.head === null){
            this.head = newNode
        } else {
            let current = this.head
            while (current.next !== null){
                current = current.next
            }
            current.next = newNode
        }
    }

    addRecur(current, data){
        if (current != null){
            this.add(current.next, data) // recursion instead of a loop
        } else {
            current = new Node(data)
        }
    }
}