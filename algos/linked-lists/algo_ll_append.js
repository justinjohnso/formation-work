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
        const newNode = data
        let current = this.head

        while (current.next !== null){
            current = current.next
        }

        current.next = newNode
    }

    addRecur(current, data){
        const newNode = data

        if (current.next !== null){
            this.addRecur(current.next, data)
        } else {
            current.next = newNode
        }
    }
}