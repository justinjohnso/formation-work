// find kth in fibonacci sequence
// Fib (0, 1, 1, 2, 3, 5, 8, 13, etc)
// kth = seq[prev] + seq[prev-1]

let fibArr = []

function fibRecur(k){
    if (fibArr[k]){
        return k
    }
    if (k <= 1) {
        fibArr[k] = k
    } else {
        fibArr[k] = fibRecur(k-1) + fibRecur(k-2)
    }

    return fibArr[k]
}

// console.log(fibRecur(276), fibArr)

// -------------------------------
function fibEasy(target) {
    let a = 1
        b = 0
        temp

    while (target >= 0) {
        temp = a // save val a
        a = a + b
        b = temp
        target--
    }
}

function dynamicFib(target, hist) {
    hist = hist || {} // create hist if it doesn't already exist

    if (hist[target]) return hist[target] // if target is in hist, return
    if (target <= 1) return 1 // base

    // call recursively, save to hist
    return hist[num] = dynamicFib(num - 1, hist) + dynamicFib(num - 2, hist)
}

// -----------------

// function fib(target, hist) {
//     let hist = hist || {}

//     if (hist[target]) return hist[target]
//     if (target <= 1) return 1
    
//     return hist[target] = fib(target - 1, hist) + fib(target - 2, hist)
// }

// ----------------------

// fib last 3
// function fib(target, hist) {
//     let hist = hist || {} // create hist if doesn't already exist
//     if (hist[target]) return hist[target] // check
//     if (target <= 2) return 1 // if target index is of first 3, return
    
//     return hist[target] = fib(target - 1, hist) + fib(target - 2, hist) + fib(target - 3, hist)
//   }

// -----------------------------------------
// -----------------------------------------
// -----------------------------------------

// FAST
// F (find the brute-force solution)
function fastFibStart(num) {
    if (num === 0 || num === 1) return num
    return (fastFib(n - 1) + fastFib(n - 2))
}

// A (analyze that solution)
    // Brute force is O(2^n) - each call results in 2 child calls, n times
    // To optimize a problem using dynamic programming, it must have optimal substructure and overlapping subproblems.
    // This has optimal substructure
        // You can get the answer by combining subproblems
    // This has overlapping subproblems
        // You're redoing work as you continue your recursion

// S (identify the subproblems)
    // The subproblems are just the recursive calls of fib(n-1) and fib(n-2). We know that the result of fib(c) is just the cth fibonacci number for any value of c.
    // Now we can memoize
        // Check cache, create cache (if it doesn't exist already), save to cache

function fastFibMemo(num, cache = []) {
    if (num < 2) return num
    
    // Check cache
    if (cache[num]) return cache[num]
    // Create cache
    return (
        // Save to cache
        cache[num] = fastFibMemo(num - 1, cache) + fastFibMemo(num - 2, cache)
    )
}

// T (turn around the solution; make it bottom-up and iterative)
function fastFibIter(num) {
    if (num === 0) return 0

    // Create cache
    let cache = [0, 1]  // first two values will always be the same

    // Save to cache
    for (let i = 2; i <= num; i++) {
        cache[i] = cache[i-1] + cache[i-2]
    }
    return cache[num]
}

console.log(fastFibIter(30))