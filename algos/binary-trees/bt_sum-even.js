function btSumEven(root) {
    let stack = [root]
    let sum = 0
    while (stack.length > 0) {
        let curr = stack.pop()
        if (curr.value % 2 === 0) {
            sum += curr.value
        }
        if (curr.left) {
            stack.push(curr.left)
        }
        if (curr.right) {
            stack.push(curr.right)
        }
    }
    return sum
}