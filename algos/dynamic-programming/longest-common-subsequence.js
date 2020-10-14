// Given two strings text1 and text2, return the length of their longest common subsequence.

// A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

// If there is no common subsequence, return 0.
(text1 = "acbcf"), (text2 = "abcdaf");
// (text1 = "abc"), (text2 = "abc");
// (text1 = "abc"), (text2 = "def");

[
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

const lcs = (str1, str2) => {
  // include vs don't include
  // if str1[i] != str2[j], take the max of the last i iter and the last j iter
  // if they are equal, take the last of both iter, and add 1 (for curr)
  let dp = new Array(str1.length + 1).fill(Array(str2.length + 1).fill(0));
  console.log(dp);
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      // console.log(i, str1[i], j, str2[j], lcs);
      if (str1[i - 1] != str2[j - 1]) {
        // exclude
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      } else {
        // include
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
      // console.log(i, j, dp[i][j]);
    }
  }
  console.log(dp);
  return dp[str1.length - 1][str2.length - 1];
};

console.log(lcs(text1, text2));
