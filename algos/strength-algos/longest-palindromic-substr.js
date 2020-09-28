// Brute force - O(n^3)
// Generate all substrings of the string (O(n^2)), then check if palindrome and keep track of largest

function longestPalindrome(str) {
    if (!str || str.length < 1) return ""

    // set starting and ending boundaries
    // we'll adjust these based on the palindromes we find while looping
    let start = 0
    let end = 0
    // let longest = [0, 1]

    for (i in str) {
        let len1 = expandAroundCenter(str, i, i) // middle 1 char
        let len2 = expandAroundCenter(str, i, i+1) // middle 2 chars
        let len = Math.max(len1, len2) // get max between those two (we don't know which we'll actually hit)

        if (len > end - start) {
            // reset bounds
            start = i - ((len - 1) / 2) // set start to the left of mid
            end = i + (len / 2) // set end to right of mid
        }
    }

    return str.slice(start, end + 1)
}

function expandAroundCenter(str, left, right) {
    if (!str || left > right) return 0 // base

    // while we're within bounds and left == right
    while (left >= 0 && right < str.length && string[left] === string[right]) {
        // expand bounds until it breaks
        left--
        right++
    }

    return right - left - 1

}

const test = "racecar"
console.log(longestPalindrome(test))

// abba
// racecar
// aaabccxyyxcsua
