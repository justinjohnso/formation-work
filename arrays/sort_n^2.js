// compare "key" value with previous, leaving behind a sorted array
// Worst: O(n^2), Best: O(n)
function insertionSort(arr){
    for (let i = 1; i < arr.length; i++){
        let key = arr[i] // val at i
        let j = i-1 // item before i
        // while index of j is 0 or more, and value of j is greater than value of i
        while (j >=0 && arr[j] > key) {
            arr[j+1] = arr[j] // replace item to the right of j with j
            j = j-1 // move j one to the left
        }
        arr[j+1] = key; // move key 
    }
    return arr
}

// compare pairs of elements, move greater to the right, repeat until array is sorted
// O(n^2)
function bubbleSort(arr){
    
    for (let i = 0; i < arr.length; i++){ // for each item in array
        for (let j = 0; j < arr.length; j++){ // inner comparison
            if (arr[j] > arr[j+1]) { // if left is larger than right
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
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) { // initial loop
        let min = i // set min
        // loop through and reset min to new min
        for (let j = i + 1; j < arr.length; j++) { // second pointer at i + 1
            if (arr[min] > arr[j]) { // if current < last min
                min = j // reset min
            }
        }
        if (min !== i) { // if new min is not at bottom of iteration
            // temp var swap
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}