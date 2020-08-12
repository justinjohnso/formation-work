// insertion sort
function insertionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let key = arr[i]; // find key
    let j = i - 1; // set j
    while (j >= 0 && arr[j] > key) {
      // while j > key, swap
      arr[j + 1] = j;
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// selection sort
// scan and select
function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let min = i;
    for (j = 0; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
}

// merge sort
// split then merge
function mergeSort(arr) {
  return split(arr);
}

function split(arr) {
  if (arr.length <= 1) return arr; // base

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length - 1);

  return merge(split(left), split(right));
}

function merge(left, right) {
  let res = [];
  // two pointers
  let leftPointer = 0;
  let rightPointer = 0;
  while (leftPointer < left.length && rightPointer < right.length) {
    if (left[leftPointer] < right[rightPointer]) {
      res.push(left[leftPointer]);
      leftPointer++;
    } else {
      res.push(right[rightPointer]);
      rightPointer++;
    }
  }
  return res.concat(left.slice(leftPointer)).concat(right.slice(rightPointer));
}

// binary tree height
function findHeight(root) {
  findHeightRecur(root, 1);
}

function findHeightRecur(node, currDepth) {
  if (!node) return 0; // if null return 0
  if (!node.left && !node.right) return currDepth; // if leaf return currDepth

  if (node.left && node.right) {
    return Math.max(
      findHeightRecur(node.left, currDepth + 1),
      findHeightRecur(node.right, currDepth + 1)
    );
  } else if (node.left) {
    return findHeightRecur(node.left, currDepth + 1);
  } else if (node.right) {
    return findHeightRecur(node.right, currDepth + 1);
  }
}

// bst find
function bstFind(root, target) {
  let stack = [root];
  while (stack.length > 0) {
    let curr = stack.pop();
    if (curr.value === target) {
      return true;
    }

    if (curr.left) {
      stack.push(curr.left);
    }
    if (curr.right) {
      stack.push(curr.right);
    }
  }
  return false;
}

// bst insert
function bstInsert(node, toBeInserted) {
  if (toBeInserted <= node.value) {
    // left
    if (!node.left) {
      node.left = new Node(toBeInserted);
    } else {
      bstInsert(node.left);
    }
  } else {
    // right
    if (!node.right) {
      node.right = new Node(toBeInserted);
    } else {
      bstInsert(node.right);
    }
  }
}
