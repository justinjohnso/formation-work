test = "abaxyzzyxf"
// output: "xyzzyx"

// function longestPalindromicSubstring(string) {
//     let arr = string.split('')
//     let longest = 1
//     let hash = {}

//     for (i in arr) {
//         let char = arr[i]
//         if (hash[char]) {
//             // get string, check if palindrome
//             let subStr = arr.slice(arr[hash[char]], arr[i])
//             if (subStr === subStr.reverse()) {
//                 longest = Math.max(longest, subStr.length)
//             }
//         }
//         hash[char] = [i]
//         console.log(hash)
//     }

//     return longest
// }

// console.log(longestPalindromicSubstring(test))
  