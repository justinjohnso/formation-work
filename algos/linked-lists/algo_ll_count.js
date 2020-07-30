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

    countElements(){
        //set counter
        let counter = 1
        let current = this.head

        //null check
        if (current === null){
            return counter
        }

        //iterate
        while (current.next !== null){
            current = current.next
            counter++
        }

        return counter
    }

    countElementsRecur(current){
        let counter = 1;
        if (current.next !== null){
            counter++
            this.countElementsRecur(current.next)
        }
        return counter
    }
}