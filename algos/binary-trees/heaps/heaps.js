// Heap is a binary tree that is 
  // Complete (filled on every level)
  // The root is either < or > all of its children

// You can represent heaps as arrays
// Methods
  // buildHeap() <-- build heap from arr: run through all parents, run heapify                        on each
  // insert() <-- add to end
  // remove() <-- pop off top element
  // peek() <-- look at top
  // heapifyUp(), heapifyDown()
    // Functions to rebalance the heap
    // up(), used when inserting a value: take that value, check it against its     parent, bubble up the heap until it's no longer < or > its parent (depending     on heap type)
    // down(), used when removing a value: swap the first node with the last         node, then pop off the last element. Now new element is not in the right         spot. Compare the children of the element - determine which is < or >, then     compare to current node. Swap when needed until it;s in the correct spot

// i: current node
// 2i + 1: left child
// 2i + 2: right child
// Math.floor((i - 1) / 2): parent

  //   1
  // 3.  5
  //    7. 9
// [5, 3, 1, 7, 9]
//  0. 1. 2. 3  4


class Heap() {
    constructor(arr) {
      this.data = arr
    }
    
    buildHeap() {
      let currParent = Math.floor(this.data.length / 2)
      while (currParent >= 0) {
        heapifyDown(currParent)
        currParent--
      }
      return this.data
    }
    
    insert(val) {
      this.data.push(val)
      heapifyUp()
    }
    
    remove() {
      // swap
      let temp = this.data[0]
      this.data[0] = this.data[-1]
      this.data[-1] = temp
      // remove end
      let removed = this.data.pop()
      heapifyDown()
      return removed
      
    }
    
    get peek() => this.data[0]
    
    heapifyUp(i) {
      // take an element, compare with everything else in the list
      let idx = i
      let parent = Math.floor((idx - 1) / 2)
      let left = (2 * idx) + 1
      let right = (2 * idx) + 2
      
      // consider out of bounds parent idx
      // you only want to swap if parent is > curr
      while (parent >= 0 && this.data[parent] > this.data[idx]) {
        // swap
        let temp = this.data[parent]
        this.data[parent] = this.data[idx]
        this.data[idx] = temp
        
        idx = parent
        parent = Math.floor((idx - 1) / 2)
      }
    }
    
    heapifyDown(i) {
      let left = (2 * i) + 1
      let right = (2 * i) + 2
      
      // check out of bounds
      while (left <= this.data.length - 1) { // left always needs to be in bounds
        let smallerChild = left
        if (right <= this.data.length - 1) { // do you have a right child?
          if (this.data[left] > this.data[right]) {
            smallerChild = right
          }
        }
        
        // check if child is smaller and swap
        if (this.data[smallerChild] < this.data[i]) {
          let temp = this.data[i]
          this.data[i] = this.data[smallerChild]
          this.data[smallerChild] = temp
          
          i = smallerChild
          left = (2 * i) + 1
          right = (2 * i) + 2
        } else {
          break
        }  
      }
    }
      
  }