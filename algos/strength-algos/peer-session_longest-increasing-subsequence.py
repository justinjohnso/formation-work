"""
array = [8,9,1,10] => 8,9,10
test = [5, 7, -24, 12, 10, 2, 3, 12, 5, 6, 35]

       [      -24,         2, 3,     5, 6, 35]
       
                        i 
    [5, 7, -24, 12, 10, 2, 3, 12, 5, 6, 35]
                    j
     
     arr[j] < arr[i] and dp[j] <= dp[i]
       dp[i] = dp[j] + 1
       subarr[i] = j
       
     if dp[i] >= dp[idxOfMaxLength]
     idxOfMaxLength = i
       
     
    
dp = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
subarr = [None,]

      [0, 1, 2, 3, 4, 5, 6, 7, 8,  9, 10]
      [5, 7 -24, 12, 10, 2, 3, 12, 5, 6, 35]
dp =  [1, 2, 1, 3, 3, 2, 3, 4, 4, 5, 6]
sub = [N, 0, N, 1, 1, 2, 5, 4, 6, 8, 9]

[-24,2,3,5, 6, 35]

"""

# output = [-24, 2, 3, 5, 6, 35]

def lis(arr):
    dp = [1 for _ in range(len(arr))]
    sub = [None for _ in range(len(arr))]
    idxOfMaxLength = 0
    
    for i in range(len(arr)):
        for j in range(i):
            if arr[j] < arr[i] and dp[i] <= dp[j]:
                dp[i] = dp[j] + 1
                sub[i] = j
        if dp[i] >= dp[idxOfMaxLength]:
            idxOfMaxLength = i
    return getSubsequence(arr, sub, idxOfMaxLength)
    
def getSubsequence(arr, sub, curIdx):
    result = []
    while curIdx is not None:
        result.append(arr[curIdx])
        curIdx = sub[curIdx]
    
    return result[::-1]
                           
test = [5, 7, -24, 12, 10, 2, 3, 12, 5, 6, 35]
print(lis(test))