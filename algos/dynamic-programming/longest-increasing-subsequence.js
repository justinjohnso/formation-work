// Dynamic

const arr = [-1, 3, 4, 5]
const test = [5, 7, -24, 12, 10, 2, 3, 12, 5, 6, 35]
// [-24, 2, 3, 5, 6, 35]
// default answer is 1 (just the item at that index)

// solve the problem for j
// look at every single answer before j (this is i)
// ask: can arr[j] extend the longest subsequence at each val of i
    // if yes, compare val[i] (exclude), and val[i] + 1 (include)

// when i hits j, we've solved the subproblem for j, we can increase j and reset i


function dynamicSubsequence(arr) {
    let dp = new Array(arr.length).fill(1) // same length as arr, default val of 1
    let final = []
    let i

    for (let j = 1; j < arr.length; j++) {
        i = 0
        res = []
        while (i < j) {
            if (arr[i] < arr[j]) {
                dp[j] = Math.max(dp[j], dp[i] + 1) // exclude (j) or include (i + 1)
            }
            i++
        }
        final = res
        console.log(arr)
    }
    
}

console.log(dynamicSubsequence(test))

// O(nlogn)
// function fasterSubsequence() {

// }