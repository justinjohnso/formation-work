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

function bsRecur(arr, target, low = 0, high = arr.length - 1) {
    if (low <= high) {
        let mid = Math.floor((high + low) / 2)

        if (target === arr[mid]) {
            return mid
        } else if (target < arr[mid]) {
            return bsRecur(arr, target, low, mid - 1)
        } else {
            return bsRecur(arr, target, mid + 1, high)
        }
    }

    return -1
}

let arr = [-10,-3,0,5,7,9,12,25,82]
// let test = bsRecur(arr, 12)
let test = search(arr, 12)
console.log(test)