// Method 1 - 2 stacks: O(1) push, O(n) pop
class Stack1 {
    constructor() {
        this.q1 = []
        this.q2 = []
    }

    get getData() {
        return this.q1
    }

    push(val) {
        // push val to q1
        this.q1.push(val)
    }

    pop() {
        // shift each val except last to q2
        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift())
        }
        // shift last val out of q1
        let val = this.q1.shift()
        // swap q1 and q2
        let temp = this.q1
        this.q1 = this.q2
        this.q2 = temp
        return val
    }
}

// let test1 = new Stack1()
// test1.push(1)
// test1.push(2)
// test1.push(3)
// test1.pop()
// test1.push(4)
// test1.push(5)
// console.log(test1.getData)
// test1.pop()
// test1.pop()


// Method 2 - 2 stacks: O(n) push, O(1) pop
class Stack2 {
    constructor() {
        this.q1 = []
        this.q2 = []
    }

    get getData() {
        return this.q1.reverse()
    }

    push(val) {
        this.q2.push(val)
        while(this.q1.length > 0) {
            this.q2.push(this.q1.shift())
        }
        let temp = this.q1
        this.q1 = this.q2
        this.q2 = temp
    }

    pop() {
        return this.q1.shift()
    }
}

// let test2 = new Stack2()
// test2.push(1)
// test2.push(2)
// test2.push(3)
// test2.pop()
// test2.push(4)
// test2.push(5)
// console.log(test2.getData)


// Method 3 - 1 stack: O(n) push, O(1) pop
class Stack3 {
    constructor() {
        this.q = []
    }

    get getData() {
        return this.q.reverse()
    }

    push(val) {
        this.q.push(val)
        while (this.q[0] !== val) {
            this.q.push(this.q.shift())
        }
    }

    pop() {
        return this.q.shift()
    }
}

// let test3 = new Stack3()
// test3.push(1)
// test3.push(2)
// test3.push(3)
// test3.pop()
// test3.push(4)
// test3.push(5)
// console.log(test3.getData)