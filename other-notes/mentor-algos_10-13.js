// URL a -> b, c, d
// b -> a, e, f
// c -> g
// d -> []

// crawl(a) -> [b, c, d, e, f, g]
//

//     a
// b   c   d
//e f   g

function linkedUrls(url) {
  if (url === "a") return ["b", "c", "d"];
  else if (url === "b") return ["a", "e", "f"];
  else if (url === "c") return ["g"];
  else return [];
}

// console.log(linkedUrls('a'))

// function crawl(url) {
//   // a, b, c, d, e, f
//   // linkedUrls takes ONE url, returns arr

//   // b, c, d
//   // a, e, f
//   // g

//   // seen: [a, b, c, d]
//   // arr: [b, c, d]

//   let seen = []
//   seen.push(url)
//   let arr = linkedUrls(url)
//   seen.push(arr)

//   while (arr) {
//     for (i in arr) {
//       arr = linkedUrls(arr[i])
//       seen.push(arr)
//     }
//   }

//   return seen.slice(1)
// }

function crawlRecur(url, seen = []) {
  // a
  if (!url) return []; // base
  if (seen.includes(url)) return []; // check if includes url

  // get linked urls for url
  // push result to seen array
  // call crawlRecur on each url from  result array on line 54 if not in seen array

  let arr = linkedUrls(url); // [b,c,d]

  seen.push(url);
  arr.forEach((url) => crawlRecur(url, seen));

  // console.log(seen)
  return seen.slice(1);
}

console.log(crawlRecur("a"));
