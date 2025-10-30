// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars = ["O", "Q", "R", "S"];
// const chars1 = ["a", "b", "c", "d", "f", "g"];
// const chars2 = ["O", "Q", "R", "S"];
const OONA = [
  65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
  84, 85, 86, 87, 88, 89, 90,
];

const chiisai = [
  97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
  113, 114, 115, 116, 117, 118, 119, 120, 121, 122,
];

// function missingChar(chars) {
//   // 實作寫在這裡
// }

// console.log(missingChar(chars1)); // 印出 e
// console.log(missingChar(chars2)); // 印出 P

// if (chars[0].charCodeAt(0) < 93) {
//   // console.log("大寫");
//   // chars[0].charCodeAt(0)  // 起始字母的那個值
//   // chars[chars.length - 1].charCodeAt(0)  // 最後字母的那個值

//   console.log(chars[0].charCodeAt(0));
//   console.log(chars[chars.length - 1].charCodeAt(0));
// } else {
//   console.log("小寫");
// }

// const N = chars.map((O) => {
//   // 大寫的數字陣列
//   return O.charCodeAt(0);
// });

let N = [87, 100, 101, 110];

// for (let i = 0; i < N.length; i++) {
//   if (N[i + 1] !== N[i] + 1) {
//     N.splice(i, 0, N[i] + 1);
//   }
// }
// console.log(N);

for (let i = 0; i < N.length; i++) {
  if (i + 1 < N.length && N[i + 1] !== N[i] + 1) {
    N.splice(i + 1, 0, N[i] + 1);
    i--;
  }
}
console.log(N);

// for (let i = 0; i < N.length; i++) {
//   // 檢查當前元素 N[i] 和它後面的元素 N[i + 1]
//   // 確保 N[i + 1] 存在（即不是陣列的最後一個元素）
//   if (i + 1 < N.length && N[i + 1] !== N[i] + 1) {
//     // 插入缺少的數字
//     N.splice(i + 1, 0, N[i] + 1);

//     // ⭐ 關鍵步驟：因為我們增加了 N 的長度並在 i+1 插入了一個新元素
//     // 我們需要將 i 設回 i-1，這樣下一次 i++ 執行後，
//     // 迴圈會停留在 i 的位置，重新檢查剛剛插入的數字。
//     // 這樣才能確保連續性，並避免跳過檢查。
//     i--;

//     // ⚠️ 註：這裡 i-- 之後，下一次迴圈的 i++ 會讓 i 變回原來的 i。
//     // 所以 N[i] 會被重新檢查一次，然後 N[i+1] (也就是剛插入的數字) 會被檢查。

//     // 如果我們想讓 i 跳到剛剛插入的數字，應該用 i++ 讓 i 停留在 i+1
//     // 但是最安全的方式是退回一步，確保檢查到所有新插入的元素。
//   }
// }

// console.log("修正後的陣列 (方法一):", N);
// // 輸出: [97, 98, 99, 100, 101, 102]
