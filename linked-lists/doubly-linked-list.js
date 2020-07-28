// [6]<->[3]<->[4]<->[2]<->[1]
// has both a head and a tail
// head and tail only point to one other thing

// set either the head or the tail at any time
// search
// remove any single node
// remove all nodes with a given value
// inserting a node before or after another node
// inserting a node at a given position

class Node {
    constructor(val) {
        this.value = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isHead(node) {
        if (this.prev === null){
            return true
        } else {
            return false
        }
    }

    isTail(node) {
        if (this.next === null){
            return true
        } else {
            return false
        }
    }

    // O(n) time | O(1) space
    containsNodeWithValue(value) {
        // set current node
        let node = this.head
        // while node has value, and value isn't the given value, traverse the list
        while ((node !== null) && (node.value !== value)){
            node = node.next
        }
        // while loop breaks
        // returns true if it does finds a node with value (not null), returns false if it does not find a node (tail.next will be null)
        return (node !== null)
    }

    removeNodeBindings(node) {
        if (node.prev !== null){
            // save value
            node.prev.next = node.next
        } else if (node.next !== null){
            // save value
            node.next.prev = node.prev
        }
        node.prev = null
        node.next = null
    }

    // O(1) time | O(1) space
    remove(node) {
        if (this.isHead(node)){
            this.head = this.head.next
        } else if (this.isTail(node)){
            this.tail = this.tail.prev
        }
        removeNodeBindings(node)
    }

    // O(n) time | O(1) space
    removeNodesWithValue(value) {
        // combination of searching and removal
        let node = this.head
        while (node !== null) {
            let nodeToRemove = node
            node = node.next
            if (nodeToRemove.value === value) {
                this.remove(nodeToRemove)
            }
        }
    }

    // O(1) time | O(1) space
    insertBefore(node, nodeToInsert) {
        // single node, don't do anything
        if ((nodeToInsert === this.head) && (nodeToInsert == this.tail)){
            this.remove(nodeToInsert)
            return
        }
        // insert before given node
        nodeToInsert.prev = node.prev
        nodeToInsert.next = node
        if (this.isHead(node)){
            this.head = nodeToInsert
        } else {
            // change the previous node's next pointer to the node we're inserting
            node.prev.next = nodeToInsert
        }
        node.prev = nodeToInsert
    }
    
    // O(1) time | O(1) space
    insertAfter(node, nodeToInsert) {
        // single node, don't do anything
        if ((nodeToInsert === this.head) && (nodeToInsert == this.tail)){
            this.remove(nodeToInsert)
            return
        }
        nodeToInsert.prev = node
        nodeToInsert.next = node.next
        if (this.isTail(node)){
            this.tail = nodeToInsert
        } else {
            // change next node's prev pointer to node we're inserting
            node.next.prev = nodeToInsert
        }
        node.next = nodeToInsert
    }
    
    // O(1) time | O(1) space
    setHead(node) {
        if (this.head === null){
            this.head = null
            this.tail = null
            return
        }
        // inserting node before head
        this.insertBefore(this.head, node)
    }
    
    // O(1) time | O(1) space
    setTail(node) {
        if (this.tail === null){
            this.setHead(node)
            return
        }
        this.insertAfter(this.tail, node)
    }

    // O(p) time | O(1) space
    insertAtPosition(position, nodeToInsert) {
        if (position === 1){
            this.setHead(nodeToInsert)
            return
        }
        let node = this.head
        let currentPosition = 1
        while ((node !== null) && (currentPosition !== position)){
            node = node.next
            currentPosition++
        }
        // if not at end of list
        if (node !== null){
            this.insertBefore(node, nodeToInsert)
        } else {
            this.setTail(nodeToInsert)
        }
    }

}