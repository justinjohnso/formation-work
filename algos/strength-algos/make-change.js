// https://backtobackswe.com/platform/content/the-change-making-problem/

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

    if (hist[amount] > amount) {
        return -1 
    } else {
        return hist[amount]
    }
}

let coins = [1, 3, 5, 6, 9]
let amount = 90

console.log(leastCoins(coins, amount))