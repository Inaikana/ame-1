// 編號：CANDY-011
// 程式語言：JavaScript
// 題目：找出一個數字陣列裡，出現奇數次數的數字
// 範例：[1, 1, 0]，`0` 只有出現 1 次
// [5, 5, 8, 8, 8, 4, 4]，`8` 出現了 3 次

// function findOddElm(numbers) {
//   // 實作寫在這裡
// }

// console.log(findOddElm([1, 1, 2])); // 印出 2
// console.log(findOddElm([5, 4, 2, 1, 5, 4, 2, 10, 10])); // 印出 1
// console.log(findOddElm([0, 1, 0, 1, 0])); // 印出 0
// console.log(findOddElm([1, 1, 2, -2, 5, 2, -1, -2, 5])); // 印出 -1
// console.log(findOddElm([20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 印出 5

const numbers = [20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5];
let count; // 記錄

const array = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple",
  "grape",
];

// 使用 reduce 建立一個計數器 (頻率表)
const counts = array.reduce((accumulator, value) => {
  // 如果 accumulator 中已經有這個 key，就加 1；否則設為 1
  accumulator[value] = (accumulator[value] || 0) + 1;
  return accumulator;
}, {}); // 初始值為一個空物件 {}

console.log(counts);
// 輸出: { apple: 3, banana: 2, orange: 1, grape: 1 }

const CC = { A: "aa", B: "bb", C: "cc" };
console.log(CC[aa]);
