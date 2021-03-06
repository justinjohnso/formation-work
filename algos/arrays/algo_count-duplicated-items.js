// For example, in this array: [1, 2, 1, 2, 1], 1 is duplicated 3 times, but 2 is duplicated 2 tiems, so the answer is 2, as 2 items occur more than once.

function countDupes(arr) {
    let tracker = {}
    let count = 0

    for (i = 0; i < arr.length; i++) {
        let curr = arr[i]
        if (tracker[curr]) {
            tracker[curr] += 1
        } else {
            tracker[curr] = 1
        }
    }

    for (item in tracker) {
        if (tracker[item] > 1) {
            count++
        }
    }
    return count
}

let test = countDupes([1, 2, 1, 2, 1])
console.log(test)

// ---------------------
function dupesInArr(arr) {
    let hash = {}
    let count = 0

    for (el of arr) {
        if (hash[el] === 1) {
            hash[el]++
            count++
        } else if (hash[el] > 1) {
            continue
        } else {
            hash[el] = 1
        }
    }

    return count
}

let test1 = dupesInArr([1, 2, 1, 2, 1])
console.log(test1)