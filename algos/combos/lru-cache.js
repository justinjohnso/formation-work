// LRU Cache
// Doubly Linked List, Object/Hash
// Check if cache has reached capacity
// Least recently used item will be evicted if cache is at capacity

// O(1) time for access, remove, add
// O(1) space, as cache size is finite

// keeping track of currSize, maxSize
// Methods: get(key, value), set(key, value)

class Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  class LRUCache {
    constructor(capacity = 5) {
      this.capacity = capacity;
      this.currSize = 0;
      this.hash = {};
      this.head = null;
      this.tail = null;
    };
    
    // --- PUBLIC METHODS
    
    get(key) { 
      if (this.hash[key]) { // check if in cache (hash table)
        let value = this.hash[key].value // if yes, return (key,val)
        let node = new Node(key, value)//make a new node out of value
        this.removeNode(key) //remove node from its existing spot ll
        this.setHead(node) // set to head (becasue we just accessed it) to top ll
        return value
      } else {
        return -1 // if no, cache miss
      }
    
    };
    
    set(key, value) {
      let node = new Node(key, value)
  
      if (this.hash[key]) { // check if key is already in the cache -> node already exists
        this.removeNode(key)//move it to head as the most recently used ll
      } else {
        // cache is full
        if (this.currSize >= this.capacity) {
          // EVICT - delete tail and reset tail pointers
          this.tail = this.tail.prev //evict from ll (update prev pointers)
          this.tail.next = null //evict from ll (update next pointers)
          delete this.hash[this.tail.key]//evict from hash
          this.currSize--
        }
        //add node setting to head of linked list
        this.setHead(node)// set new key/val at head of doubly ll
      }
    };
    
    // --- PRIVATE METHODS
    
    removeNode(key) { 
      if(this.hash[key]) { //make new node with key we access
        let node = this.hash[key] // get node
        
        // reset prev pointer ll
        if (node.prev) {
          node.prev.next = node.next
        } else { //we're at head of linked list and prev is null
          this.head = node.next // reset head for remove node from doubly ll
        }
        
        // reset next pointer ll
        if (node.next) {
          node.next.prev = node.prev
        } else { //we're at tail of linked list and next is null
          this.tail = node.prev //reset tail for remove node from ll
        }
        
        // the easy stuff
        delete this.hash[key] //delete from hash since remove node ll 
        this.currSize-- //update size of ll
      }
    };
    
    setHead(node) {
      // setting pointers for node
      node.next = this.head
      node.prev = null
      
      if (this.head) { // if head exists, set it's prev to node
        this.head.prev = node //set cur head's prev to the input node
      }
      
      this.head = node //put node in its place
      
      if (!this.tail) { // if no tail, set node to tail
        this.tail = node //want tail to be head 
      }
      
      this.currSize++ // update the size of our doubly linked list
      this.hash[node.key] = node // update our hash with the node we just added to make a new entry into hash with new key value pair
    };
    
  }
  
  let lruCache = new LRUCache();
  lruCache.set(1, 4)
  lruCache.set(3, 6)
  lruCache.set(2, 7)
  lruCache.set(4, 9)
  lruCache.set(7, 5)
  
  
  // console.log(lruCache);
  console.log(lruCache.get(2));
  lruCache.set(8, 14)
  console.log(lruCache.get(4));
  console.log(lruCache);