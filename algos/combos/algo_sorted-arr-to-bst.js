/**
 * Definition for a binary tree node.

 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// recursively find midpoint, insert into tree, then find mid of left half and right half, and keep doing that until there's nothing left 
// find mid recursively
// [-10,-3,0,5,7,9,12,25,82]

var sortedArrayToBST = function(nums) {
    let lo = 0                            // 0
    let hi = nums.length - 1              // 8
    let root = new TreeNode(null)

    return arrToBSTRecur(lo, hi, root, nums, [])
}

function arrToBSTRecur(lo, hi, node, arr, res) {
    mid = Math.floor((lo + hi) / 2)      
    if (lo > hi || res.includes(mid)) return node
    node = new TreeNode(arr[mid])
    console.log(`mid = ${mid}`)
    res.push(mid)

    return (
        arrToBSTRecur(lo, mid - 1, node.left, arr, res), // left side
        arrToBSTRecur(mid + 1, hi, node.right, arr, res) // right side
    )
}

let test = sortedArrayToBST([-10,-3,0,5,7,9,12,25,82])
console.log(test)