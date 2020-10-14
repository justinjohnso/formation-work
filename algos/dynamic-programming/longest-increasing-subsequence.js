// Dynamic

const arr = [-1, 3, 4, 5];
const test = [5, 7, -24, 12, 10, 2, 3, 12, 5, 6, 35];
// [-24, 2, 3, 5, 6, 35]
// default answer is 1 (just the item at that index)

// solve the problem for j
// look at every single answer before j (this is i)
// ask: can arr[j] extend the longest subsequence at each val of i
// if yes, compare val[i] (exclude), and val[i] + 1 (include)

// when i hits j, we've solved the subproblem for j, we can increase j and reset i

function dynamicSubsequence(arr) {
  let dp = new Array(arr.length).fill(1); // same length as arr, default val of 1
  let final = [];
  let i;

  for (let j = 1; j < arr.length; j++) {
    i = 0;
    res = [];
    while (i < j) {
      if (arr[i] < arr[j]) {
        dp[j] = Math.max(dp[j], dp[i] + 1); // exclude (j) or include (i + 1)
      }
      i++;
    }
    final = res;
    console.log(arr);
  }
}

// console.log(dynamicSubsequence(test));

// ------------------------------------------
let input = [10, 9, 2, 5, 3, 7, 101, 18]; // output -> 4 || [2,3,7,101]
// find subproblems
// include, exclude
// at each step we can ask: can arr[j] extend the lcs of arr[i]?
//      if yes - take the max of:
//          include -> dp[j] + 1
//          exclude -> dp[i]
//      if no - move on, increase i
// - - -
// Return subsequence
const lcsArr = (arr) => {
  // let dp = new Array(arr.length).fill(1);
  // for (let j = 1; j < arr.length; j++) {
  //   // outer loop
  //   for (let i = 0; i < j; i++) {
  //     // inner loop comparing dp[i]
  //     if (arr[i] < arr[j]) {
  //       let exclude = dp[i];
  //       let include = dp[j] + 1;
  //       dp[j] = Math.max(include, exclude);
  //     }
  //   }
  // }
};
// - - -
// Return length
const lcsLength = (arr) => {
  let dp = new Array(arr.length).fill(1);

  for (let j = 1; j < arr.length; j++) {
    // outer loop
    for (let i = 0; i < j; i++) {
      // inner loop comparing dp[i]
      if (arr[i] < arr[j]) {
        // can we increase the lcs of arr[i] using arr[j]?
        let exclude = dp[j]; // take j
        let include = dp[i] + 1;
        dp[j] = Math.max(include, exclude);
      }
      // console.log(i, [dp[i]], j, [dp[j]]);
    }
  }

  return dp[dp.length - 1];
};
console.log(lcsLength(input));
// - - -
// Return substr
const lcsStr = (str) => {
  let res = "";

  return res;
};
// - - -
// Return consecutive subsequence
const lcsConsecutive = (arr) => {
  let res = "";

  return res;
};
