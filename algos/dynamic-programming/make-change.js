// Fewest coins
// https://backtobackswe.com/platform/content/the-change-making-problem/

let coins = [1, 2, 5, 10, 25]
let amount = 90

function leastCoins(coins, amount) {
    const hist = Array(amount + 1).fill(amount + 1)
    hist[0] = 0

    for (let i = 1; i <= amount; i++) {
        for (let j in coins) {
            if (coins[j] <= i) {
                hist[i] = Math.min(hist[i], hist[i - coins[j]] + 1)
            }
        }
    }

    console.log(hist)
    return hist[amount] > amount ? -1 : hist[amount]
}

// console.log(leastCoins(coins, amount))

// Total Amount of Combinations
// Recursive - O(2^n)
function numberOfWaysRecur(coins, amount, i = 0) {
    if (amount < 0) return 0 // amt is negative, not valid
    if (amount === 0) return 1 // only way for 0 is 0 coins, 1 way

    if (i === coins.length) return 0 // we've tried all solutions, and iterated to the end with no solution
    return (
        numberOfWaysRecur(coins, amount - coins[i], i) + // include current coin
        numberOfWaysRecur(coins, amount, i + 1) // exclude current coin, move on
    )
}

// Top Down
let hist = {}
function numberOfWaysTD(coins, amount, i = 0) {
    if (amount < 0) return 0 // amt is negative, not valid
    if (amount === 0) return 1 // only way for 0 is 0 coins, 1 way

    if (i === coins.length) return 0 // we've tried all solutions, and iterated to the end with no solution

    let key = "$" + amount + ", iteration " + i
    if (hist[key]) return hist[key]
    return (
        hist[key] = numberOfWaysTD(coins, amount - coins[i], i) + // include current coin
        numberOfWaysTD(coins, amount, i + 1) // exclude current coin, move on
    )
}

console.log(numberOfWaysTD(coins, amount))