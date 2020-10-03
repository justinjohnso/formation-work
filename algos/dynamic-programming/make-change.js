// Fewest coins
// https://backtobackswe.com/platform/content/the-change-making-problem/

let coins = [1, 2, 5];
let amount = 7;

function leastCoins(coins, amount) {
  const hist = Array(amount + 1).fill(amount + 1);
  hist[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j in coins) {
      if (coins[j] <= i) {
        hist[i] = Math.min(hist[i], hist[i - coins[j]] + 1);
      }
    }
  }

  console.log(hist);
  return hist[amount] > amount ? -1 : hist[amount];
}

// console.log(leastCoins(coins, amount))

// Total Amount of Combinations
// Recursive - O(2^n)
function numberOfWaysRecur(coins, amount, i = 0) {
  if (amount < 0) return 0; // amt is negative, not valid
  if (amount === 0) return 1; // only way for 0 is 0 coins, 1 way

  if (i === coins.length) return 0; // we've tried all solutions, and iterated to the end with no solution
  return (
    numberOfWaysRecur(coins, amount - coins[i], i) + // include current coin
    numberOfWaysRecur(coins, amount, i + 1) // exclude current coin, move on
  );
}

// Top Down
let hist = {};
function numberOfWaysTD(coins, amount, i = 0) {
  if (amount < 0) return 0; // amt is negative, not valid
  if (amount === 0) return 1; // only way for 0 is 0 coins, 1 way

  if (i === coins.length) return 0; // we've tried all solutions, and iterated to the end with no solution

  let key = "$" + amount + ", iteration " + i;
  if (hist[key]) return hist[key];
  return (hist[key] =
    numberOfWaysTD(coins, amount - coins[i], i) + // include current coin
    numberOfWaysTD(coins, amount, i + 1)); // exclude current coin, move on
}

// console.log(numberOfWaysTD(coins, amount))

// -------------------------------------------------------
// Min coins
function makeChangeMin(coins, amount) {
  let memo = new Array(amount + 1).fill(Infinity);
  memo[0] = 0;


  for (i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        // don't forget this check
        let include = memo[i - coins[j]] + 1;
        let exclude = memo[i];
        console.log();
        memo[i] = Math.min(include, exclude);
      }
    }
  }

  return memo[amount];
}

// console.log(makeChangeMin(coins, amount))

// Total ways
function totalWays(coins, amount) {
  let memo = new Array(amount + 1).fill(0);
  memo[0] = 1

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      console.log(coin)
      if (coin <= i) {
        memo[i] = memo[i - coin] + memo[i];
      }
    }
  }
  console.log(memo)
  return memo[amount];
}

console.log(totalWays(coins, amount));
// FAST
// Find the First solution
// Analyze it
// Subproblem it
// Turn it around
