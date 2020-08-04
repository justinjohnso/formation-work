// array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
// output = 19, [1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1]

// at each index, the maxSum is either the current number (arr[i]) or the maxSum + arr[i] -> maxEndingHere
// maxSoFar is either maxSoFar or maxEndingHere

function kadanesAlgo(arr) {
    let maxEndingHere = arr[0]
    let maxSoFar = arr[0]

    for (let item of arr.slice(1)) {
        maxEndingHere = Math.max(item, maxEndingHere + item)
        maxSoFar = Math.max(maxSoFar, maxEndingHere)
    }

    return maxSoFar
}

let test = kadanesAlgo([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])
console.log(test)