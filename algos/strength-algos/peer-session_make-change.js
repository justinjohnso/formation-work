// You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.

//              0  1  2  3  4  5    <-- amount r

// []        0  1  0  0  0  0  0
// [1]       1  1  1  1  1  1  1
// [1, 2]    2  1  1  2  2  3  3
// [1, 2, 5] 3  1  1  2  2  3  4                 

//     coins[i]c


// exclude, (don't use current, move on)
// include, (use)
// formula = (amount - coins[i]) + last excluded

let coins = [1, 2, 5]
let amount = 5

let hist = {}

function change(coins, amount, i = 0) {
    let key = "$" + amount + ", iter " + i
    if (hist[key]) return hist[key]
    console.log(hist)
    
    if (amount < 0) return 0 // neg amount
    if (amount === 0) return 1 // one option for amt 0
    if (i === coins.length) return 0 // iterated through all
    
    return (hist[key] = change(coins, amount - coins[i], i) + change(coins, amount, i + 1))
}

// console.log(change(coins, amount))


function makeChange(amount, coins) {
  const n = coins.length;
  const dp = Array(amount + 1).fill(0) 
  
  dp[0] = 1; 
  for (let num of coins) {
    for (let i = num; i <= amount; i++) {
      dp[i] += dp[i - num]; 
    }
  }
  return dp[amount]
}

console.log(makeChange(amount, coins)) 
