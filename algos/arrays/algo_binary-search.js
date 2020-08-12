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

function bsRecur(arr, lo, hi, target) {
    if (hi >= low) {
        let mid = (hi + lo) / 2

        if (target === arr[mid]) {
            return target
        } else if (target < arr[mid]) {
            return bsRecur(arr, lo, mid - 1, target)
        } else {
            return bsRecur(arr, mid + 1, hi, target)
        }
    }

    return -1
}


// let test = searchWrapper([-10,-3,0,5,7,9,12,25,82], -3)
// console.log(test)