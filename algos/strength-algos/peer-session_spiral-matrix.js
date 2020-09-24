// 54. Spiral Matrix

// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:

// Input:
let m2 = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
   ]
   // Output: [1,2,3,6,9,8,7,4,5]
   // Example 2:
   
   // Input:
   // [
   //   [1, 2, 3, 4],
   //   [5, 6, 7, 8],
   //   [9,10,11,12]
   // ]
   // Output: [1,2,3,4,8,12,11,10,9,5,6,7]
   
   // Spiral matrix
   let m1 = [[1,  2,  3,  4 ],
            [5,  6,  7,  8 ],
            [9,  10, 11, 12],
            [13, 14, 15, 16]]
   
   // res = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
   
   let m3 = null
   
   function spiralMatrix(mtx) {
     if (!mtx) return null
     if (!mtx[0]) return mtx
       
     let res = []
     let topRow = 0
     let bottomRow = mtx.length - 1
     let leftCol = 0
     let rightCol = mtx[0].length - 1
     
     
     while(topRow <= bottomRow && leftCol <= rightCol) {
       for (let i = leftCol; i <= rightCol; i++) {
         res.push(mtx[topRow][i])
       }
       topRow++
   
       for (let i = topRow; i <= bottomRow; i++) {
         res.push(mtx[i][rightCol])
       }
       rightCol--
   
       for (let i = rightCol; i >= leftCol; i--) {
         res.push(mtx[bottomRow][i])
       }
       bottomRow--
   
       for (let i = bottomRow; i >= topRow; i--) {
         res.push(mtx[i][leftCol])
       }
       leftCol++
     }
     
     return res
   }
   
   console.log(spiralMatrix(m3))