// base case is one item (a sorted list)
// depth first
// 8 -> 4 -> 2 -> 1

// n leaves
// log(n) levels

// splitting routine
function split(arr) {
    // if 0 or 1 items, return empty or that item
    if (arr.length <= 1) {
        return arr
    }
    // find middle
    let mid = Math.floor(arr.length/2)
    // sort left half, sort right half, call this function on itself
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(
        split(left), split(right)
    )
}
// merging routine
function merge(leftArr, rightArr) {
    // merge two sorted arrays
    // add a pointer to the front of both lists and compare
    let res = []
    let leftPointer = 0
    let rightPointer = 0

    while (leftPointer < leftArr.length && rightPointer < right.length) {
        // the lesser item wins, advance in that list and add the winner to new arr
        if (leftArr[leftPointer] < rightArr[rightPointer]) {
            res.push(leftArr[leftPointer])
            leftPointer++
        } else {
            res.push(rightArr[rightPointer])
            rightPointer++
        }
    }

    return res
        // there will be one item left in either the left or the right arr
        .concat(leftArr.slice(leftPointer))
        .concat(rightArr.slice(rightPointer))
}