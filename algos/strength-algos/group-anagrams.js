// function groupAnagrams(words) {
//     let res = []
//     let hash = {}
//     let alpha = words.map((word) => word.split('').sort().join(''))

//     for (i in words) {
//         if (hash[alpha[i]]) {
//             hash[alpha[i]].push(i)
//         } else {
//             hash[alpha[i]] = [i]
//         }
//     }

//     for (item in hash) {
//         let indexes = [...hash[item]]
//         res.push(indexes.map((i) => words[i]))
//     }

//     return res
//   }

// let words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
//  // alpha = ["oy", "act", "flop", "act", "foo", "act", "oy", "flop"]
// console.log(groupAnagrams(words))

function groupAnagrams(words) {
    let hash = {} // hash of indexes
    let alpha = words.map((word) => word.split('').sort().join(''))
    
    for (let i in words) {
        if (hash[alpha[i]]) {
            hash[alpha[i]].push(words[i])
        } else {
            hash[alpha[i]] = [words[i]]
        }
    }
    
    return Object.values(hash)
}

const words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
console.log(groupAnagrams(words))
