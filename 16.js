// 編號：CANDY-016
// 程式語言：JavaScript
// 題目：把原本 snake_case 的字轉換成 camelCase 格式
// 範例："hello_world" -> "helloWorld"

// function toCamelCase(str) {
//   // 實作寫在這裡
// }

// console.log(toCamelCase("book")); // book
// console.log(toCamelCase("book_store")); // bookStore
// console.log(toCamelCase("get_good_score")); // getGoodScore

const str = "get_good_score";
const open = str.split("_");

function big(word) {
  const one = [...word];
  const first = String.fromCharCode(one[0].charCodeAt(0) - 32);
  one.splice(0, 1, first);
  const done = one.reduce((a, b) => a + b);
  return done;
}
