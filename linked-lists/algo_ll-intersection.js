/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // get length of lists
    let lengthA = 0
    let lengthB = 0

    let nodeA = headA
    let nodeB = headB

    while (nodeA !== null){
        lengthA++
    }

    while (nodeB !== null){
        lengthB++
    }

    // find diff
    let diff = lengthA - lengthB
    let offsetA = 0
    let offsetB = 0

    if (diff > 0){
        offsetA = diff
    } else if (diff < 0){
        offsetB = -diff
    }

    // set start
    while (offsetA < 0) {
        nodeA = nodeA.next
        offsetA--
    }
    while (offsetB < 0) {
        nodeB = nodeB.next
        offsetB--
    }

    // step thru and compare
    while (nodeA !== null){
        if (nodeA === nodeB){
            return nodeA
        } else {
            nodeA = nodeA.next
            nodeB = nodeB.next
        }
    }
};

