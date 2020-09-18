// longest palindromic substring


// abbzxyyxza

// iterate over all characters starting from index 1
// store a variable containing the indices of the current longest palindrome
// at each index of the original string, check for a palindrome expanding outward from that index
// and at the space before that index
// update the current longest indices if the length of the palindrome is longer than current longest

// return substring containing the longest palindrome


function getPalindromeFromIndices(str, left, right) {
    console.log(right);
    while (left >= 0 && right < str.length) {
      if (str[left] !== str[right]) {
        break; 
      }
      left--;
      right++;
    }
    // console.log('left', left + 1);
    // console.log('right', right);
    // console.log([left + 1, right]);
    return [left + 1, right];
  }
  
  function longestPalindromeSubstring(str) {
   
    if (!str.length) {
     return ""; 
    }
    
    let currentLongestIndices = [0, 1];
    
    for (let idx = 0; idx < str.length; idx++) {
      
      
      const oddExpandedPalindrome = getPalindromeFromIndices(str, idx - 1, idx + 1);
      const evenExpandedPalindrome = getPalindromeFromIndices(str, idx - 1, idx);
      
      let longest = oddExpandedPalindrome[1] - oddExpandedPalindrome[0] > evenExpandedPalindrome[1] - evenExpandedPalindrome[0] ? oddExpandedPalindrome : evenExpandedPalindrome;
      
      if (longest[1] - longest[0] > currentLongestIndices[1] - currentLongestIndices[0]) {
       currentLongestIndices = longest; 
      }
    }
    
    return str.substring(currentLongestIndices[0], currentLongestIndices[1]);
  }
  
  // abba
  // racecar
  
  
  const test = "abbzxyyxz"
  console.log(longestPalindromeSubstring(test))