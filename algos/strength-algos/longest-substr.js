// Attempt 1
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function(s) {
//     // store all sub in a hash
//     // run .includes every time you add an item to the end of a substr

//     let allSub = {}
//     let arr = s.split('')
//     let currSub = i = 0

//     while (i < arr.length) {
//         if (allSub[currSub]) {
//             if (allSub[currSub].indexOf(arr[i]) === -1) {
//                 allSub[currSub].push(arr[i])
//                 i++
//             } else {
//                 currSub = i
//             }
//         } else {
//             allSub[currSub] = [arr[i]]
//             i++
//         }
//     }

//     let subArrs = Object.values(allSub)
//     let subLengths = subArrs.map((a) => a.length)
//     let max = subLengths[0] === "" ? null : subLengths.reduce((a, b) => Math.max(a, b), 0)

//     return max
// };

// console.log(lengthOfLongestSubstring("pwwkew"))

// Attempt 2
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let arr = s.split('')
    let longest = [0, 1]
    let tracker = {}
    let start = 0

    if (arr.length === 0) return 0

    for (i in arr) {
        let char = arr[i]
        if (char in tracker) {
            start = Math.max(start, Number(tracker[char]) + 1)
        }
        if (longest[1] - longest[0] < i - Number(tracker[char]) + 1) {
            longest = [start, Number(i) + 1]
        }
        tracker[char] = i
    }

    return longest[1] - longest[0]
};

console.log(lengthOfLongestSubstring("pwwkew"))