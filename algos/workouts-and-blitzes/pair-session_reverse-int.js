// Reverse an Integer

// Today, you will write a function that reverses a given number.

// Example

// Input: reverse(number: 123)</br>
// Ouput: 321 
// Input: reverse(number: 1548)</br>
// Ouput: 8451
// in: 5 -> 5?
// empty -> null
// Function Signature

// func reverse(number: Int) -> Int

// const reverseAsString = (int) => Number(String(int).split('').reverse().join(''))
// O(n) time
// O(1)

// 1 | 2 | 3

const reverseAsNum = (int) => {
    //     let ones = int % 10
    //     let tens = (int % 100 - int % 10) / 10
    //     let hundreds = (int % 1000 - int % 100) / 100
        
    //     console.log(ones * 100 + tens * 10 + hundreds)
        
        let loopRes = null
        let i = 1
        
        let power = null
        let res = null
        
        while (loopRes !== int) {
            let mod = Math.pow(10, i)
            let div = mod / 10
            let digit = (int - loopRes) % mod / div
            
            loopRes = int % mod
            
            i++
            // console.log(mod, div, loopRes, digit)
            power = mod / 10
        }
        
        // console.log(powerCount)
        
        loopRes = null
        i = 1
        
        while (power > 0) {
            let mod = Math.pow(10, i)
            let div = mod / 10
            let digit = (int - loopRes) % mod / div
            
            loopRes = int % mod
            i++
            
            // console.log(power, digit)
            res += power * digit
            power = power / 10
        }
        
        return res
    
    }
    
    let test = 5
    let test2 = 1548
    
    console.log(reverseAsNum(test))
    