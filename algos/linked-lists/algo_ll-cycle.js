// this double pointer, double speed method can be used to find the midpoint in one pass as well

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    //null check
    if (head === null){
        return false
    }
    // set two pointers, one moving twice the speed of the other
    // start at two different points so they don't intersect at the start
    let fast = head.next
    let slow = head

    while ((fast !== null) && (fast.next !== null) && (slow !== null)){
        if (fast === slow) {
            return true
        }
        fast = fast.next.next
        slow = slow.next
    }
    // false if they hit the end without crossing 
    return false
};