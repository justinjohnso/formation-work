// Given a string, find the length of the longest substring T that contains at most k distinct characters

// ex: s = "eceba", k = 2
// output: 3, T is "ece" with length 2
// import java.util.*;

// class Solution
// {

//   Map<Character,Integer> map= new HashMap<>();
//   int maxLen=0;
//     public int longestSubstring(String s, int k)
//     {

//         int left=0;int right=0;
//       while(right<s.length())
//       {
//           map.put(s.charAt(right),map.getOrDefault(s.charAt(right++),0)+1);

//           if(map.size()==k+1)
//           {
//             //int del_index=Collections.min(map.values());
//             map.remove(s.charAt(left));
//             left++;

//           }
//         maxLen=Math.max(maxLen,right-left+1);
//       }

//       return maxLen;
//     }

//   public static void main(String[] args)
//   {
//     Solution sol = new Solution();
//     System.out.println("maxLength"+sol.longestSubstring("ecebbbbbba",2));
//   }

// }

function longestSub(s, k) {
  if (!s || s.length === 0) return 0;
  let map = {};
  let left = 0;
  let right = 0;
  let unique = 0;
  let max = 0;

  for (right; right < s.length; right++) {
    if (map[s.charAt(right)] === 0) unique++;
    map[s.charAt(right)]++;
    while (unique > k) {
      map[s.charAt(left)]--;
      if (map[s.charAt(left)] === 0) unique--;
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
}
