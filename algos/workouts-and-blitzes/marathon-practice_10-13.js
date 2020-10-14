//////////////////////////////////////////////////////////////////////////////////////////
// Welcome to Practice Algo Marathon :)
//
// This practice will help you prepare for Algo Marathon.
// You may add a helper function(s) if necessary.
// However, do not modify function signatures nor test cases.
// Some functions already have a return statement filled out for you, but
// this is just a placeholder. So you may modify it.
// Good luck, and don't forget to time yourself!
//
//////////////////////////////////////////////////////////////////////////////////////////

class Test {
  constructor(test_name = "", printTests = false) {
    this.total_count = 0;
    this.problem_count = 0;
    this.total_score = 0;
    this.problem_score = 0;
    this.current_problem = "";
    this.failed_problems = [];
    console.log(`Beginning Test: ${test_name}`);
  }

  // Test Helpers
  test(expected_outcome, outcome, case_num) {
    if (expected_outcome == outcome) {
      return this.passed(case_num);
    }
    return this.failed(case_num);
  }

  testMultipleCases(possible_outcomes, outcome, case_num) {
    var possible_outcome;
    for (possible_outcome of possible_outcomes) {
      if (this.compareArrays(possible_outcome, outcome)) {
        return this.passed(case_num);
      }
    }
    return this.failed(case_num);
  }

  testForArrays(expected_outcome, outcome, case_num) {
    if (this.compareArrays(expected_outcome, outcome)) {
      return this.passed(case_num);
    }
    return this.failed(case_num);
  }

  compareArrays(array1, array2) {
    return (
      array1.length === array2.length &&
      array1.filter((a, i) =>
        Array.isArray(a) ? !this.compareArrays(a, array2[i]) : array2[i] !== a
      ).length === 0
    );
  }

  testMatchAny(expected_outcome, outcome, case_num) {
    if (this.isEqual(expected_outcome, outcome)) {
      return this.passed(case_num);
    }
    return this.failed(case_num);
  }

  isEqual(array1, array2) {
    var sortedArr1 = [];
    var sortedArr2 = [];
    for (var a1 of array1) {
      sortedArr1.push(a1.sort());
    }
    for (var a2 of array2) {
      sortedArr2.push(a2.sort());
    }
    return this.compareArrays(sortedArr1.sort(), sortedArr2.sort());
  }

  // Test Logistics
  startProblem(problemName) {
    this.current_problem = problemName;
    this.problem_score = 0;
    this.problem_count = 0;
    this.failed_problems = [];
  }
  passed(case_num) {
    this.total_score += 1;
    this.problem_score += 1;
    this.problem_count += 1;
    this.total_count += 1;
  }
  failed(case_num) {
    this.problem_count += 1;
    this.total_count += 1;
    this.failed_problems.push(case_num);
  }
  endProblem() {
    console.log(
      `\n   ${this.current_problem} Score: ${this.problem_score} / ${this.problem_count}`
    );
    if (this.failed_problems.length > 0) {
      console.log(`   ** Failed Test Cases: ${this.failed_problems}`);
    }
  }
  printFinal() {
    console.log(`\nTotal Score: ${this.total_score} / ${this.total_count}`);
  }
}

var test = new Test("Practice Algo Marathon - Strings Edition");

//////////////////////////////////////////////////////////////////////////////////
// 1. Group Anagrams
//
// Q. Given an array of strings, group anagrams together
//    Note: Anagrams are strings fromed by rearranging the letters of a different
//          word or phrase. (e.g. LISTEN <-> SILENT, a <-> a)
//          You must return a sorted 2D list of anagrams.
//
// Examples:
//     Input1: array: ["cat", "act", "a", "tac"]
//     Output1: [["a"], ["act", "cat", "tac"]]
//
//     Input2: array: ["a", "ab", "ba"]
//     Ouput2: [["a"], ["ab", "ba"]]
//
//////////////////////////////////////////////////////////////////////////////////

function ga(strs) {
  // Write your code here.
  let alpha = strs.map((str) => str.split("").sort().join(""));
  let hash = {};

  for (let i in strs) {
    if (!hash[alpha[i]]) {
      hash[alpha[i]] = [];
    }
    hash[alpha[i]].push(strs[i]);
  }

  return Object.values(hash);
}

// Test Cases
test.startProblem("1. Group Anagrams:");
test.testMatchAny(
  [["foo"], ["oy", "yo"], ["tac", "cat", "act"], ["flop", "olfp"]],
  ga(["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]),
  1
);
test.testMatchAny(
  [["a"], ["act", "cat", "tac"]],
  ga(["cat", "act", "a", "tac"]),
  2
);
test.testMatchAny([["a"], ["ab", "ba"]], ga(["a", "ab", "ba"]), 3);
test.testMatchAny([], ga([]), 4);
test.testMatchAny([["Formation"]], ga(["Formation"]), 5);
test.endProblem();

//////////////////////////////////////////////////////////////////////////////////
//
// Longest Palindromic Substring
//
// Q. Given a string, find the longest palindromic substring.
//    Note: You may assume there is only one longest substring.
//
// Examples:
//     Input1: "babe"
//     Output1: "bab"
//
//     Input2: "aefez"
//     Ouput2: "efe"
//
//////////////////////////////////////////////////////////////////////////////////

function lps(input) {
  // Write your code here.
  // expand around middle
  let str = input;
  let longest = "";

  for (let i = 0; i < str.length; i++) {
    // let curr = str[i]
    let curr = checkPalindrome(str, i);
    if (curr.length > longest.length) {
      longest = curr;
    }
  }
}

function checkPalindrome(str, start) {
  let mid = Math.floor(str.length / 2);
  let left = mid - 1;
  let right = mid + 1;

  if (str.length % 2 === 0) {
    left = mid;
  }

  // console.log(str)
  // console.log(str, str[left], str[right])

  while (str[left] === str[right]) {
    left--;
    right++;
  }
  console.log(str.slice(left, right + 1));

  return str.slice(left, right);
}

// Test Cases
test.startProblem("2. Longest Palindromic Substring");
test.test("bab", lps("babe"), 1);
test.test("xyzzyx", lps("abaxyzzyxf"), 2);
test.test("noon", lps("it's afternoon"), 3);
test.test("a", lps("a"), 4);
test.test("b12365456321b", lps("kb12365456321bb"), 5);
test.endProblem();

//////////////////////////////////////////////////////////////////////////////////
// 3. Implement strStr
//
// Q. Given a string, return the index of the first occurrence of target string.
//    Note: Return -1 if the input string does not contain the target string.
//
// Examples:
//     Input1: input: "hello", target: "ll"
//     Output1: 2
//
//     Input2: input: "formation", target: "afor"
//     Ouput2: -1
//
//////////////////////////////////////////////////////////////////////////////////

function strStr(inputString, target) {
  // Write your code here.
  for (let i = 0; i <= inputString.length - target.length; i++) {
    if (target === inputString.slice(i, i + target.length)) {
      return i;
    }
  }
  return -1;
}

// Test Cases
test.startProblem("3. Implement strStr");
test.test(2, strStr("hello", "ll"), 1);
test.test(-1, strStr("", "a"), 2);
test.test(0, strStr("aaaaaaa", "a"), 3);
test.test(-1, strStr("formation", "afor"), 4);
test.test(-1, strStr("formation", "fora"), 5);
test.endProblem();

//////////////////////////////////////////////////////////////////////////////////
// 4. Reverse Words In String
//
// Q. Given an input string, reverse the string word by word.
//    Note: - Remove any extra white space (e.g. "b  a" -> "a b"  // only keep 1 whitespace)
//          - Remove any leading or trailing white spaces (e.g. "  Hi  " -> "iH")
//
// Examples:
//     Input1: "I love programming"
//     Output1: "programming love I"
//
//     Input2: "    "
//     Ouput2: ""
//
//////////////////////////////////////////////////////////////////////////////////

function rw(input) {
  // Write your code here.
  return input
    .split(" ")
    .reverse()
    .filter((el) => el !== "")
    .join(" ");
}

// Test Cases
test.startProblem("4. Reverse Words In String");
test.test("world! hello", rw("  hello world!  "), 1);
test.test("", rw(""), 2);
test.test("", rw("   "), 3);
test.test("a", rw("  a"), 4);
test.endProblem();

//////////////////////////////////////////////////////////////////////////////////

test.printFinal();
