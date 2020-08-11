function btUnique(root) {
    let stack = [root]
    let items = []
    let dupesCount = 0

    while (stack.length > 0) {
        let curr = stack.pop
        if (items.includes(curr.value)) {
            dupesCount++
        } else {
            items.push(curr.value)
        }

        if (curr.left) {
            stack.push(curr.left)
        }
        if (curr.right) {
            stack.push(curr.right)
        }
    }

    return items.length - dupesCount // item count - duplicate count = unique count
}