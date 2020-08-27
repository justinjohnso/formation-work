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

console.log(fibRecur(276), fibArr)

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

function fib(target, hist) {
    let hist = hist || {}

    if (hist[target]) return hist[target]
    if (target <= 1) return 1
    
    return hist[target] = fib(target - 1, hist) + fib(target - 2, hist)
}

// ----------------------

// fib last 3
function fib(target, hist) {
    let hist = hist || {} // create hist if doesn't already exist
    if (hist[target]) return hist[target] // check
    if (target <= 2) return 1 // if target index is of first 3, return
    
    return hist[target] = fib(target - 1, hist) + fib(target - 2, hist) + fib(target - 3, hist)
  }
  
  