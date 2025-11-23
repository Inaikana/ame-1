// 編號：CANDY-024
// 程式語言：JavaScript
// 題目：算出 N 個數字的最小公倍數
// 提示：可使用 023 計算最大公因數的函數

import calcGCD from "./23.js";

// function calcLCM(...numbers) {
//   // 實作程式碼寫在這裡
// }

// console.log(calcLCM(10)); // 10
// console.log(calcLCM(103, 27)); // 2781
// console.log(calcLCM(21, 15, 18)); // 630
// console.log(calcLCM(104, 96, 36, 88)); // 41184

// const numbers = [104, 96, 36, 88];
// const theBigest = calcGCD(...numbers); // 最大公因數
// const child = numbers.map((num) => num / theBigest);
// const together = child.reduce((a, b) => a * b);
// console.log(together);

function findKid(num) {
  // 找出所有因數(1省略)
  let kid = [];
  for (let i = 2; i <= num; i++) {
    if (num % i == 0) {
      kid.push(i);
    }
  }
  return kid;
}

const onlyKid = findKid(1240).filter((kid) => {
  if (findKid(kid).length == 1) {
    return true;
  }
});
// 質因數

console.log(findKid(1240));
console.log(onlyKid);
