// Palindrome
// Numbers specifically

// Check if palindrome, return true or false
// Aim for O(n)

// let input -> does this equal input.reverse()


const test1 = 232
const test2 = 234
const test3 = 999999
const test4 = 235189014  

function isPalindromeStr(int) {
    let intStr = int.toString()
    let flipped = ''
    
    for (let i = intStr.length - 1; i >= 0 ; i--) {
        flipped = flipped.concat(intStr[i])
    }
    
    // console.log (int, flipped)
    if (flipped === int.toString()) return true
    return false
}

var items = numri.split( "" );
var isPalindrome = items.join( "" ) === items.reverse().join( "" );

function isPalindromeNum(int) {
    let num = int
    let flipped = 0
    let mod = 10
    
    while (num > 0) {
        let last = num % mod
        flipped += last // 30
        num = num - last // 200
        mod = Math.pow(mod, 10)
        
        console.log("Flipped: " + flipped)
        console.log("Last: " + last)
    }
    
    return flipped === int ? true : false
    
}

console.log(isPalindromeNum(test4))