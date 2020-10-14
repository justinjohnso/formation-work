// Spreadsheets often use this alphabetical encoding for its columns: "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", ....

// Given a column number, return its alphabetical column id. For example, given 1, return "A". Given 27, return "AA".

// out -> in
// A = 1
// AA = 27
// AB = 28
// BA = 53, BB = 54 ... BZ = 78

/*Psuedocode
1.create an obj for key: letter of alpa, value: column id
2. based on given input id, search for value in obj
3. return the associated key
   - if column id > 26, take last letter of alpha value + firstletter of alpha value
4.. return key associated with value column id
*/

//3

function alphaEncode(int) {
  let alpha = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let keys = Object.keys(alpha);
  let result = "";
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (alpha[key] === int) {
      return key;
    } else {
      let diff = int - 26;
      result += key;
      console.log("result", result);
      // if (alpha[diff - 1]) {
      //   result +=
    }
  }
  console.log("result", result);
  return result;
}

// 999 / 26 -> 38, 11 k
// 37 / 26 -> 1, 11 k
// 1 / 2 -> A

// console.log(alphaEncode(3));
// console.log(alphaEncode(1));
// console.log(alphaEncode(26));
console.log(alphaEncode(27));
