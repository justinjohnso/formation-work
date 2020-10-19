const test = [0, 1, 2, 2, 0, 1];
const test2 = [1, 0, 0, 1];

// 0s: 2, 1s: 2, 2s: 2

// Count (two passes)
const dfnCount = (arr) => {
  let zeroes = 0;
  let ones = 0;
  let twos = 0;

  for (let i in arr) {
    switch (arr[i]) {
      case 0:
        zeroes++;
        break;
      case 1:
        ones++;
        break;
      case 2:
        twos++;
        break;
    }
  }

  for (let i in arr) {
    if (zeroes > 0) {
      arr[i] = 0;
      zeroes--;
    } else if (ones > 0) {
      arr[i] = 1;
      ones--;
    } else if (twos > 0) {
      arr[i] = 2;
      twos--;
    }
  }

  return arr;
};
// console.log(dfnCount(test))

// Classic, one pass
const dfnCount2 = (arr) => {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid < high) {
    if (arr[mid] == 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else if (arr[mid] == 2) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
  return arr;
};
// console.log(dfnCount2(test))

// Two elements
const dfnCount3 = (arr) => {
  let low = 0;
  let high = arr.length - 1;

  while (low < high) {
    if (arr[high] === 1) {
      high--;
    } else if (arr[low] === 0) {
      low++;
    } else {
      [arr[low], arr[high]] = [arr[high], arr[low]];
    }
  }
  //
  // 1 1 1 0 0 0
  //       *

  return arr;
};
// console.log(dfnCount3(test2))

// Recursive
//           t
// [0, 0, 1, 1, 2, 2]
//        z
//.             c
function recursive_dnf(input, zeroIndex, currIndex, twoIndex) {
  if (currIndex > twoIndex) {
    return input;
  }

  // let res = null

  if (input[currIndex] === 0) {
    [input[zeroIndex], input[currIndex]] = [input[currIndex], input[zeroIndex]];
    currIndex++;
    zeroIndex++;
    recursive_dnf(input, zeroIndex, currIndex, twoIndex);
  } else if (input[currIndex] === 1) {
    currIndex++;
    recursive_dnf(input, zeroIndex, currIndex, twoIndex);
  } else if (input[currIndex] === 2) {
    //currIndex == 2
    [input[twoIndex], input[currIndex]] = [input[currIndex], input[twoIndex]];
    twoIndex--;
    recursive_dnf(input, zeroIndex, currIndex, twoIndex);
  }

  return input;
}

console.log(recursive_dnf(test, 0, 0, test.length - 1));
