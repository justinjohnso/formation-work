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