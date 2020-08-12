// Brute force, recursion
// O(n^2)
// W = max weight
// wt = item weights
// val = item values
// n = number of items

let val = [60, 100, 120] 
let wt = [10, 20, 30] 
let W = 50
let n = val.length

function knapSack(W, wt, val, n){
    // base, if no items or no max weight, answer is 0
    if (n == 0 || W == 0){
        return 0
    }
    // If weight of the nth item is more than W, then item cannot be included
    if (wt[n-1] > W){
        return knapSack(W, wt, val, n-1)
    // Else, return maximum of two possible cases:
    // - nth item included
    // - item not included
    } else {
        return Math.max(
            (val[n-1] + knapSack(W-wt[n-1], wt, val, n-1)),
            knapSack(W, wt, val, n-1)
        )
    }
}

// console.log(W, wt, val, n)
// console.log(knapSack(W, wt, val, n))

// Dynamic Programming
// 1. Come up with recursive solution
// 2. Memoize (store) intermediate results to make it run faster
// 3. Optional: bottom-up approach


// -------------------------------------------------------------------------
// https://backtobackswe.com/platform/content/the-knapsack-problem/video
// If we don't choose an item, we go dp[row-1][wt] -> n-1, W
// If we choose the item, we go dp[row-1]+[wt-weight[row]]

// Time: O(weight*items)
// Space: O(weight*items) -> can reduce if you only record the current and last row

function knapSack2(n, W){
    if (n == 0 || W == 0){
        return 0
    // if weight at n is greater than max weight, can't choose to begin with
    } else if (wt[n-1] > W){ 
        return knapSack2(n-1, W)
    // make decision
    } else {
        let withoutItem = knapSack2(n-1, W)
        let withItem = val[n] + knapSack2(n-1, W-wt[n-1])
        return Math.max(withItem, withoutItem)
    }
}

// Memoization
// Init an empty array
// let hist = [...Array(n)].map(e => Array(W).fill(0));
// console.log(hist[n-1])
function knapSackMem(n, W){
    // if (hist[n-1][W]) {
    //     return hist[n][W]
    // }
    let res
    if (n == 0 || W == 0){
        res = 0
    // if weight at n is greater than max weight, can't choose to begin with
    } else if (wt[n-1] > W){ 
        res = knapSackMem(n-1, W)
    // make decision
    } else {
        let withoutItem = knapSackMem(n-1, W)
        let withItem = val[n] + knapSackMem(n-1, W-wt[n-1])
        res = Math.max(withItem, withoutItem)
    }
    // hist[n][W] = res
    return res
}

// console.log(knapSackMem(n, W))

// --------------------------------------------------
let val = [60, 100, 120] 
let wt = [10, 20, 30] 
let C = 50

function ksWrap(wt, val, C) {
    let n = wt.length
    let hist = new Array(n + 1).fill(new Array(C + 1).fill(0))
    ksRecur(n, C, hist)
} 

function ksRecur(n, C, hist) {
    console.log(hist)
    if (hist[n][C]) return hist[n][C] // check if in hist
    if (n === 0 || C === 0) return 0 // base

    if (wt[n] > C) { // can't choose if wt[n] is greater than capacity
        return ksRecur(n - 1, C) // without item
    } else {
        let withoutItem = ksRecur(n - 1, C)
        let withItem = ksRecur(val[n] + ksRecur(n - 1, C - wt[n - 1]))
        return hist[n][C] = Math.max(withItem, withoutItem)
    }

}

let test = ksWrap(wt, val, C)
console.log(test)