/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var dnf = function(arr) {
    let countZero = 0
    let countOne = 0
    let countTwo = 0

    for (let num of arr) {    
        if (num === 0) {
            countZero++
        } else if (num === 1) {
            countOne++
        } else if (num === 2) {
            countTwo++
        }
    }

    let i = 0

    while (countZero > 0) {
        arr[i] = 0
        i++
        countZero--
    }
    while (countOne > 0) {
        arr[i] = 1
        i++
        countOne--
    }
    while (countTwo > 0) {
        arr[i] = 2
        i++
        countTwo--
    }

    return arr
};

console.log(dnf([2,0,2,1,1,0]))