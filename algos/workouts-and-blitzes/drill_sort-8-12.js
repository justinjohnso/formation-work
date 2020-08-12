// bubble sort
function bubbleSort(arr) {
    for (let i = 0; i < array.length; i++) {
      if (arr[i] <= arr[i + 1]) {
        continue
      }
      for (let j = 0; j < array.length - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
    }
    
    return arr
  }
  
  // selection sort
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let min = i
      for (let j = i + 1; j < arr.length - 1; j++) {
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
  
  
  // insertion sort
  function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let key = arr[i]
      let j = i - 1
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j]
        j = j-1
      }
      arr[j + 1] = key
    }
    return arr
  }
  
  
  // merge sort
  function split(arr) {
    let low = 0
    let high = arr.length - 1
    let mid = Math.floor((low + high)/2)
    
    if (arr.length <= 1) return arr
    
    let left = arr.slice(low, mid)
    let right = arr.slice(mid)
    
    return merge(split(left), split(right))
  }
    
  function merge(arr1, arr2) {
    let pointer1 = 0
    let pointer2 = 0
    let res = []
    
    while (pointer1 < arr1.length && pointer2 < arr2.length) {
      if (arr1[pointer1] <= arr2[pointer2]) {
        res.push(arr1[pointer1])
        pointer1++
      } else {
        res.push(arr2[pointer2])
        pointer2++
      }
    }
    
    return res.concat(arr1.slice(pointer1)).concat(arr2.slice(pointer2))
  }