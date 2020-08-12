# Given an array, return the maximum sum of its possible subarrays

# array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
#                    i                               j

# output = 19 ---> [1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1]

# Sum will either be currEl || prevSum + currEl
# If currentMax > totalMax, totalMax = currentMax

# Time = 0(n) | Space = O(1)

def maxSubArraySum(array):
    if not array:
        return 0
    
    currSum = array[0]
    totalMaxSum = array[0]
    startIdx = endIdx = 0
    
    for i in range(1, len(array)):
        if (array[i] > currSum+array[i]):
            startIdx = i
            currSum = array[i]
        else:
            currSum = currSum+array[i]
        
        if (totalMaxSum > currSum):
            endIdx = i - 1
        
        # currSum = max(array[i], currSum+array[i])
        totalMaxSum = max(currSum,totalMaxSum)
        
    # return totalMaxSum
    return array[startIdx:endIdx]
array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]

print(maxSubArraySum(array))