# Dutch national flaaaaaag

input = [2,0,2,1,1,0]
# Output: [0,0,1,1,2,2]


# O(n) Time | O(1) Space
def sortColors(nums):
    p0 = 0 
    curr = 0 
    p2 = len(nums)-1 
    
    while curr <= p2: 
        if nums[curr] == 0: 
            nums[p0], nums[curr] = nums[curr], nums[p0] 
            p0 += 1
            curr +=1 
            
        elif nums[curr] == 2: 
            nums[curr], nums[p2] = nums[p2], nums[curr]
            p2 -=1 
        else: 
            curr+=1 
    return nums 

# print(sortColors(input))


# O(n) Time | O(1) Space
def dnf(arr):
    countZero = 0
    countOne = 0
    countTwo = 0
    
    for i in range(len(arr)):
        if arr[i] == 0:
            countZero += 1
        elif arr[i] == 1:
            countOne += 1
        elif arr[i] == 2:
            countTwo += 1
            
    i = 0
    
    while countZero > 0:
        arr[i] = 0
        countZero -= 1
        i += 1
        
    while countOne > 0:
        arr[i] = 1
        countOne -= 1
        i += 1
        
    while countTwo > 0:
        arr[i] = 2
        countTwo -= 1
        i += 1
        
    return arr

# print(dnf(input))