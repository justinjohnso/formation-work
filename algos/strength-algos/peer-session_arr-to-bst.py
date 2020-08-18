# https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
    def __repr__(self):
            
        return f'NODE:{self.val}, LEFT:{self.left}, RIGHT:{self.right}'
        
# recursively find midpoint
# set that to node.value

# recur for node.left, node.right
arr = [-10,-3,0,5,7,9,12,25,82]

# return null when low > high

# class Solution:
#     def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
        
        
def arrayToBST(arr,low,high):
    
    if low > high: 
        return None 
    
    mid = (low + high) // 2 
    
    node = TreeNode(arr[mid])
    node.left = arrayToBST(arr,low,mid-1)
    node.right = arrayToBST(arr,mid+1,high)
    
    return node

print(arrayToBST(arr, 0, len(arr) - 1))