function findDupes(root) {
    let stack = [root]
    let dupesArr = []
    let dupesCount = 0

    while (stack.length > 0) {
        let curr = stack.pop()

        if (dupesArr.includes(curr.value)) {
            dupesCount++
        } else {
            dupesArr.push(curr.value)
        }

        if (curr.left) {
            stack.push(curr.left)
        }
        if (curr.right) {
            stack.push(curr.right)
        }
    }

    return dupesCount
}