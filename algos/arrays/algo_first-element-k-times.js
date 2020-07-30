// Input: {1, 7, 4, 3, 4, 8, 7},
// k = 2
// Output: 4
// Both 7 and 4 occur 2 times.
// But 4 is the first that occurs 2 times.

// Input: {4, 1, 6, 1, 6, 4},
// k = 1
// Output: -1

function firstKTimes(arr, k){
    // iterate thru
    // keep track of each item and it's occurance
    // before adding an item to object, check if it has occured k-1 times
    // if yes, return
    // if no, add

    let tracker = {}
    for (i = 0; i < arr.length - 1; i++){
        let curr = arr[i]
        console.log(tracker)
        if (curr in tracker && tracker[curr] === k - 1 ){
            return curr
        } else if (curr in tracker){
            tracker[curr] += 1
        } else {
            tracker[curr] = 1
        }
    }

    return -1
}

let test = firstKTimes([1, 7, 4, 3, 4, 8, 7], 2)
console.log(test)