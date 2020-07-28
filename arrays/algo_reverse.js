// new arr

// in-place
function reverseInPlace(arr) {
    for (i = arr.length-1; i >= Math.ceil((array.length-1)/2); i--){
        let j = Math.abs(arr.length-1 - i)
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    return arr
}