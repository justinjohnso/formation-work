// compare "key" value with previous, leaving behind a sorted array
// Worst: O(n^2), Best: O(n)
function insertionSort(arr){
    for (let i = 1; i < arr.length; i++){
        // val at i
        let key = arr[i]
        // item before i
        let j = i-1
        // while index of j is 0 or more, and value of j is greater than value of i
        while (j >=0 && arr[j] > key) {
            // replace item to the right of j with j
            arr[j+1] = arr[j]
            // move j one to the left
            j = j-1
        }
        // move key 
        arr[j+1] = key;
    }
    return arr
}

// compare pairs of elements, move greater to the right, repeat until array is sorted
// O(n^2)
function bubbleSort(arr){
    // for each item in array
    for (let i = 0; i < arr.length; i++){
        // inner comparison
        for (let j = 0; j < arr.length; j++){
            // if left is larger than right
            if (arr[j] > arr[j+1]) {
                // swap them using temp var
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

// loop through and swap lowest to bottom of array, leaving behind a sorted array. move pointer up one and repeat
// O(n^2)
function selectionSort(arr){
    for (let i = 0; i < arr.length; i++){
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            // if current
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        if (min !== i) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}