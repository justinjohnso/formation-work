// Find closest to target value in a binary tree
function btFindClosest(root, target) {
    let stack = [root]
    let currClosest = null
    let currLowestDiff = Infinity
    
    while (stack.length > 0) {
      let curr = stack.pop()
      let currDiff = Math.abs(curr.value - target)
      if (currDiff < currLowestDiff) {
        currClosest = curr
        currLowestDiff = currDiff
      }
      if (curr.left) {
        stack.push(curr.left)
      }
      if (curr.right) {
        stack.push(curr.right)
      }
    }
    return currClosest
  }