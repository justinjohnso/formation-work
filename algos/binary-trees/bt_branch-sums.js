// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
// depth first
// pass running sums down. when you hit a leaf, send running sum back up
// O(n)

function branchSums(root) {
    let res = []
    calculateBranchSums(root, 0, res) // run recursive function with root
    return res
}

function calculateBranchSums(node, sum, res){
    if (!node) return; // null check
    
    let runningSum = sum + node.value // add current val to running sum
    if (!node.left && !node.right) { // if leaf
        res.push(runningSum) // push runningSum back up
        return
    }
    // if not at a leaf
    calculateBranchSums(node.left, runningSum, res) // go left
    calculateBranchSums(node.right, runningSum, res) // go right
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
