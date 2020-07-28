// Two major subroutines
    // Splitting 
        // i remembers the last position that an element was placed in that was less than the pivot. every item from i and behind is < the pivot
        // j scans all the items and sees if they are > or < the pivot
        // swap pivot into i + 1

        // if i < j, swap and advance i, then j
    // Partitioning (choosing a pivot)
        // Pivot - item you want to find a position for

// Picking a bad pivot is O(n^2) -> largest or smallest item
// Best pivot is the median of the partition space

function quickSort(arr) {
    split(arr, 0, arr.length - 1)
    return arr
}

function split(arr, left, right) {
    if (left < right) {
        let finalPivot = partition(arr, left, right)

        split(arr, left, finalPivot - 1)
        split(arr, finalPivot + 1, right)
    }
}

function partition(arr, left, right) {
    let pivot = arr[right]

    let i = left - 1
    for (j = left; i < right; j++) {
        if (arr[j] <= pivot) {
            i++

            swap(arr, i, j)
        }
    }

    swap(arr, i + 1, right)

    return i + 1
}

function swap(arr, first, second) {
    let temp = arr[first]
    arr[first] = arr[second]
    arr[second] = temp
}