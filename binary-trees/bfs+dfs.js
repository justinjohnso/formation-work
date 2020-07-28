// bfs
function bfs(node, target) {
    let queue = [node];
  
    while (queue.length > 0) {
      let cur = queue.shift(); // dequeue first element
      if (cur.value === target) {
        return true;
      }
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
  
    return false;
}

// dfs
// iterative
function dfs(node, target) {
    let stack = [node];
  
    while (stack.length > 0) {
      let cur = stack.pop(); // pop last element
      if (cur.value === target) {
        return true;
      }
      if (cur.left) {
        stack.push(cur.left);
      }
      if (cur.right) {
        stack.push(cur.right);
      }
    }
  
    return false;
}

// recursive
function dfs(node, target) {
    if (!node) {
      return false;
    }
  
    if (node.value === target) {
      return true;
    }
  
    return dfs(node.left, target) || dfs(node.right, target);
}

// ---------------------------------------------
function dfs(root, target) {
  let stack = [root]

  while (stack.length > 0){
      let curr = stack.pop()
      if (curr.value === target){
          return curr
      }

      if (curr.left) {
          stack.push(curr.left)
      }

      if (curr.right) {
          stack.push(curr.right)
      }
  }

  return -1
}

// ------------------------------------------------
function bfs(root, target) {
  let queue = [root]

  while (queue.length > 0){
      let curr = queue.shift()
      if (curr.value === target){
          return true
      }
      if (curr.left){
          queue.push(curr.left)
      }
      if (curr.right){
          queue.push(curr.right)
      }
  }

  return false
}