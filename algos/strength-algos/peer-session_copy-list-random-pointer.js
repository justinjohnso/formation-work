function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};

var copyRandomList = function(head) {
    if (!head) return null
    let old = head;
    let cloneMap = new Map();

    // 1st pass
    while (old) { 
        cloneMap.set(old, new Node(old.val));
        old = old.next;
    }

    old = head

    // 2nd pass
    while (old) {
        let copy = cloneMap.get(old);
    
        if (!old.next) { 
            copy.next = null
        } else {  
            copy.next = cloneMap.get(old.next);
        }
        
        if (!old.random) {
            copy.random = null
        } else {
            copy.random = cloneMap.get(old.random);
        }
        
        old = old.next;
    }

    return cloneMap.get(head);
};

//////////////////////////

function copyRandomOnePass(head) {
    if (!head) return null
    let old = head;
    let cloneMap = new Map();

    while (old) {
        cloneMap.set(old, new Node(old.val)); //create entry
        let copy = cloneMap.get(old)
        
        if (!old.next) {
        copy.next = null
        } else {
        // TO DO
        cloneMap.set(old.next, new Node(old.next.val));
        
        }
        
        if (!old.random) {
        copy.random = null
        } else {
        // TO DO
        }
    }
}