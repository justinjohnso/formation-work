/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {
//     let left = 0
//     let right = nums.length - 1;

//     while (left <= right){
//         let mid = Math.floor((left + right)/2)
//         console.log(`left: ${left}, mid: ${mid}, right: ${right}`)
//         if (target === nums[mid]){
//             return mid
//         } else if (target < nums[mid]){
//             right = mid-1
//         } else if (target > nums[mid]){
//             left = mid+1
//         }
//     }

//     return -1
// };

// ------------------------------------------------------------------------

var search = function(nums, target) {
    // def left, right, mid bounds
    let left = 0
    let right = nums.length - 1

    while (left <= right){
        let mid = Math.floor((left + right )/2)
        if (target === nums[mid]){ // if target == mid, return
            return mid
        } else if (target > nums[mid]) { // else if target > mid + 1, move lower bound to mid, repeat
            left = mid + 1
        } else if (target < nums[mid]){ // else if target < mid, move higher bound to mid - 1, repeat
            right = mid - 1
        }
    }
    
    return -1
};

// -------------------------------------------------------------------------

function searchWrapper(arr, target) {
    let lo = 0
    let hi = arr.length - 1

    return searchRecur(lo, hi, arr, target)
}

function searchRecur(lo, hi, arr, target) {
    console.log(lo, hi, target)
    if (lo > hi) return false
    let mid = Math.floor((lo + hi) / 2)

    if (arr[mid] === target) return true

    return (
        searchRecur(lo, mid - 1, arr, target), // left
        searchRecur(mid + 1, hi, arr, target) // right
    )
}

let test = searchWrapper([-10,-3,0,5,7,9,12,25,82], -3)
console.log(test)