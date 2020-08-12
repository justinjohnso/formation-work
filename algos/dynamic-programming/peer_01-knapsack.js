// const items = [
//     {weight: 1, value: 6},
//     {weight: 2, value: 10},
//     {weight: 3, value: 12},
//   ];
  
  const weights = [1, 2, 3];
  const values = [6, 10, 12];
  const capacity = 5;
  
  /*
  columns = capacity
  row = item
  [
   0   1   2    3    4    5
  [0],[0],[0 ],[0 ],[0 ],[0 ]   // w:0  val:0
  [0],[6],[6 ],[6 ],[6 ],[6 ]   // w:1, val:6
  [0],[6],[10],[16],[16],[16]   // w:2, val:10  
  [0],[6],[10],[16],[18],[22]   // w:3, val:12
  ]
  */
  
  function knapSack(values, weights, capacity){
    let n = weights.length
    let kp = [];
    // fill rows
    for (let i = 0; i <= n; i++) {
      kp[i] = [];
      // fill columns
      for (let j = 0; j <= capacity; j++) {
        kp[i][j] = 0;
      }
    }
    // check if result exists
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= capacity; j++) {
        // base
        if (i === 0 || j === 0) {
          kp[i][j] = 0
        } else if (weights[i - 1] > j){ // if item weight > capacity
          kp[i][j] = kp[i - 1][j]
        } else { // if item weight <= capacity, make choice
          let withoutItem = kp[i - 1][j];
          let withItem = kp[i - 1][j - weights[i - 1]] + values[i - 1];
          kp[i][j] = Math.max(withoutItem, withItem)
        }
      }
    }
    // console.log(kp);
    return kp[n][capacity]
  }
  
  const result = knapSack(values, weights, capacity);
  // console.log(result);
  
  // time complexity: O(n) => O(items * capacity) (row * col) 
  // space complexity: O(n) => O(items * capacity) (row * col)

// ------------------------------------------
function knapSack3(values, weights, capacity) {
  let n = weights.length
  let kp = new Array(n + 1).fill(new Array(capacity + 1).fill(0))
  console.log(kp)
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j<= capacity; j++) {
      console.log(i, j)
      if (kp[i][j]) { // if exists
        break
      }
      if (i === 0 || j === 0) { // if 0
        kp[i][j] = 0
      } else if (weights[i - 1] > j) { // if weight > cap
        kp[i][j] = kp[i - 1][j]
      } else { // make choice
        let withoutItem = kp[i - 1][j]
        let withItem = kp[i - 1][j - weights[i - 1]] + values[i - 1]
        kp[i][j] = Math.max(withoutItem, withItem)
      }
    }
  }
  console.log(kp)
  return kp[n][capacity]
}

let test = knapSack3(values, weights, capacity)
console.log(test)

// -------------------
