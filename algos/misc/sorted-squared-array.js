// Brute force: O(n + n(logn)) -> O(n(logn)) - square then sort

function sortedSquaredBF(arr) {
    let squaredArr = arr.map((num) => { // O(n)
        num * num 
    })

    return arr.sort(squaredArr) // O(n(logn))
}

// O(n) - Step through arr from both ends, and compare absolute val of left to absolute val of right. Put square of larger into output arr starting from the end
function sortedSquaredArr(arr) {
    if (!arr.length) return []
    let output = new Array(arr.length).fill(0) // init output arr to same length

    let left = 0
    let right = arr.length - 1

    for (let i = output.length - 1; i >= 0; i--) { // loop through output
        if (Math.abs(arr[left]) >= Math.abs(arr[right])) {
            output[i] = arr[left] * arr[left]
            left++
        } else {
            output[i] = arr[right] * arr[right]
            right--
        }
    }

    return output
}

const test = [-6, -4, 1, 2, 3, 5] // => [1, 4, 9, 16, 25, 36]
console.log(sortedSquaredArr(test))