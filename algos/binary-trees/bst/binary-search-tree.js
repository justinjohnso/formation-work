class Node {
    constructor(val){
        this.left = null;
        this.right = null;
        this.value = val;
    }

    insert(val) {
        if (val <= this.value) { // if val is less than this node
            if (this.left === null) {
                this.left = new Node(val)
            } else {
                this.left.insert(val)
            }
        } else { // if val is greater than this node
            if (right === null) { 
                this.right = new Node(val)
            } else {
                this.right.insert(val)
            }
        }
    }

    contains(val) {
        // check if val = node
        // check if val < node, if yes, recur
        // check if val > node, if yes, recur
        if (val === this.value) { // if this node has val
            return true
        } else if (val < this.value) { // else if val is less than node
            if (this.left === null) {
                return false
            } else { // check left
                return this.left.contains(val)
            }
        } else { // else if val is greater than node
            if (this.right === null) {
                return false
            } else { // check right
                return this.right.contains(val)
            }
        }
    }

    printInOrder() {
        // prints: left, self, right
        if (this.left !== null) {
            this.left.printInOrder() // left
        }
        console.log(this.value) // self
        if (this.right !== null) {
            this.right.printInOrder() // right
        }
    }
}

