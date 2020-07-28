// [2016, 2017, 2017, 2016, 2019, 2018, 2019] = 1

function uniqueCount(arr) {
    let tracker = {}
    let count = 0

    for (i = 0; i < arr.length; i++){
        let curr = arr[i]
        if (tracker[curr]){
            tracker[curr] += 1
        } else {
            tracker[curr] = 1
        }
    }

    for (item in tracker){
        if (tracker[item] === 1){
            count++
        }
    }

    return count
}

let test = uniqueCount([2016, 2017, 2017, 2016, 2019, 2018, 2019, "bob"])
console.log(test)