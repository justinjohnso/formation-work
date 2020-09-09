// Spiral matrix
m1 = [[1,  2,  3,  4 ],
      [5,  6,  7,  8 ],
      [9,  10, 11, 12],
      [13, 14, 15, 16]]

// res = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

function spiralMatrix(matrix) {
    let res = []
    let topRow = 0
    let bottomRow = matrix.length - 1
    let leftCol = 0
    let rightCol = matrix[0].length - 1

    while(topRow < bottomRow && leftCol < rightCol){
        for (let i = leftCol; i <= rightCol; i++)
            res.push(matrix[topRow][i])
        topRow++

        for (let i = topRow; i <= bottomRow; i++) {
            res.push(matrix[i][rightCol])
        }
        rightCol--

        for (let i = rightCol; i >= leftCol; i--) {
            res.push(matrix[bottomRow][i])
        }
        bottomRow--

        for (let i = bottomRow; i >= topRow; i--) {
            res.push(matrix[i][leftCol])
        }
        leftCol++
    }
    return res
}

console.log(spiralMatrix(m1))