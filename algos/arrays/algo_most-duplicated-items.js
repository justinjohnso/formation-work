// For example, in this array: [1, 2, 1, 2, 1], 1 is duplicated 3 times, but 2 is duplicated 2 tiems, so the answer is 1.

function mostDup(arr) {
    // iterate, store number of dupes in an obj
    let res = []
    let tracker = {}
    for (i = 0; i < arr.length; i++){
        let curr = arr[i]
        if (tracker[curr]) {
            tracker[curr] += 1
        } else {
            tracker[curr] = 1
        }
    }
    
    let maxVal = Math.max(...Object.values(tracker))
    for (item in tracker) {
        if (tracker[item] === maxVal){
            res.push(parseInt(item))
        }
    }

    return res
}

let test = mostDup([1, 2, 1, 2, 1, 2])
console.log(test)