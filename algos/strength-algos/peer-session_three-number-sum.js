// Three num sum
// Aiming for O(n^2)

// Sort the array
// Place pointers, i , left (i + 1), right (arr.length - 1)
// Loop through array i < arr.length - 2
// Move pointers based on current sum vs target sum

function threeNumSum(arr, target) {
  let res = []                                  // result arr
  arr.sort((a, b) => a - b)                     // initial sort
  
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1                            // left pointer
    let right = arr.length - 1                  // right pointer
    
    while (left < right) {
      let currSum = (arr[i] + arr[left] + arr[right])
      if (currSum === target) {
        res.push([arr[i], arr[left], arr[right]])
        left++
        right--
      } else if (currSum < target) {    // if < target, move left pointer up
        left++
      } else if (currSum > target) {    // if > target, move right pointer down
        right--
      }
    }
  }
  return res
}

console.log(threeNumSum([12,3,1,2,-6,5,-8,6], 0))

// O(n^2) Time | O(n) Space