// For example:
// [1, 2, 1, 2, 1, 2], k = 3
// In this example, both 1 and 2 are repeated 3 times, so the answer is 2

// iterate
// track occurance of each element in obj
// at end check num of elements where val in obj = k

function repeatedKTimes(arr, k){
    let tracker = {}
    for (i = 0; i < arr.length; i++){
        let curr = arr[i]
        if (tracker[curr]) { // if exists, counter ++
            tracker[curr] += 1
        } else { // else, add to obj
            tracker[curr] = 1
        }
    }
    let counter = 0
    for (item in tracker) {
        if (tracker[item] === k){
            counter++
        }
    }
    return counter
}

let test = repeatedKTimes([1, 2, 1, 2, 1, 2], 3)
console.log(test)