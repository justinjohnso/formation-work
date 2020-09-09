// Input: "the sky is blue"
// Output: "blue is sky the"

// Input: "  hello world!  "
// Output: "world! hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

// Input: "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

function reverseWords(str) {
    let arr = str.split(' ')
    let filter = arr.filter(str => str)
    let reverse = filter.reverse().join(' ')
    return reverse
}

const reverseOneLiner = (str) => str.split(' ').filter(str => str).reverse().join(' ')

console.log(reverseOneLiner('the sky is blue'))
console.log(reverseOneLiner('  hello world!  '))
console.log(reverseOneLiner('a good   example'))