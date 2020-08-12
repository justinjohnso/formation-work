# Spiral Matrix
m = [[1, 2, 3, 'a'], 
     [5, 6, 7, 'b'],
     [8, 9, 10, 'c'], 
     [11, 12, 13, 'd']]

m1 = [[1, 2, 3, 4 ],
     [5, 6, 7, 8 ],
     [9, 10, 11, 12],
     [13, 14, 15, 16]]

# res = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
# result = []

# Time = O(n) | Space = O(n)

def spiralMatrix(matrix):
    topRow = 0
    btmRow = len(matrix) - 1
    leftCol = 0
    rightCol = len(matrix[0]) - 1
    results = []
    
    if not matrix or len(matrix) == 0: # base case
        return results
    
    while (topRow <= btmRow and leftCol <= rightCol): # while rows and cols don't cross
        for i in range(leftCol, rightCol + 1): # left -> right
            results.append(matrix[topRow][i])
        topRow += 1
        
        for i in range(topRow, btmRow + 1): # top -> bottom
            results.append(matrix[i][rightCol])
        rightCol -= 1
        
        for i in range(rightCol, leftCol-1, -1): # right -> left
            results.append(matrix[btmRow][i])
        btmRow -= 1
        
        for i in range(btmRow, topRow - 1, -1): # bottom -> top
            results.append(matrix[i][leftCol])
        leftCol += 1
        
    return results

print(spiralMatrix(m1))