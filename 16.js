// 編號：CANDY-016
// 程式語言：JavaScript
// 題目：把原本 snake_case 的字轉換成 camelCase 格式
// 範例："hello_world" -> "helloWorld"

function big(word) {
  // 把英文字首從小寫變大寫的函數
  const one = [...word.toString()]; // 先轉成逐一字母的陣列
  const firstNum = one[0].charCodeAt(0); // 針對第一個字母 取它的 Unicode 編碼值
  const firstWord = String.fromCharCode(firstNum - 32); // 在Unicode編碼值中 【 小寫 - 32 = 大寫】
  one.splice(0, 1, firstWord); // 把換好的大寫塞進來
  const done = one.reduce((a, b) => a + b); // 用reduce合併
  return done;
}

function toCamelCase(str) {
  const open = str.split("_"); // 分離_ 變成一個個單獨單字的陣列
  for (let x = 1; x < open.length; x++) {
    //第一個單字不變 所以從1開始
    open[x] = big(open[x]); // 陣列[0]以外的所有元素 都進big(word) 使之變大寫
  }
  return open.reduce((a, b) => a + b); // 用reduce合併
}

console.log(toCamelCase("book")); // book
console.log(toCamelCase("book_store")); // bookStore
console.log(toCamelCase("get_good_score")); // getGoodScore
