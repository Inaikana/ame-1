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

// let N = chars.map((O) => {
//   // 大寫的數字陣列
//   return O.charCodeAt(0);
// });

let N = [3, 6];

for (let i = 0; i < N.length; i++) {
  //補齊填數字的迴圈-完成
  if (i + 1 < N.length && N[i + 1] !== N[i] + 1) {
    N.splice(i + 1, 0, N[i] + 1);
    console.log(N[i] + 1);
  }
}
// const A = N; //大寫的數字陣列(補齊成連續數字)
// console.log(A);
