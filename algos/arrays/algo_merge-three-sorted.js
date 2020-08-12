function mergeThreeSortedLists(list1, list2, list3) {
    let merge1 = mergeTwoSortedLists(list1, list2)
    return mergeTwoSortedLists(merge1, list3)
}

function mergeTwoSortedLists(list1, list2) {
    let pointer1 = 0
    let pointer2 = 0
    let res = []

    while (pointer1 <= list1.length && pointer2 <= list2.length) {
        if (list1[pointer1] <= list2[pointer2]) {
            res.push(list1[pointer1])
            pointer1++
        } else {
            res.push(list2[pointer2])
            pointer2++
        }
    }

    res.concat(list1.split(pointer1))
    res.concat(list2.split(pointer2))

    return res
}