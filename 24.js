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

function findKid(num) {
  // 找出num的所有因數(1省略)
  let kid = [];
  for (let i = 2; i <= num; i++) {
    if (num % i == 0) {
      kid.push(i);
    }
  }
  return kid;
}

function onlyKid(num) {
  //  找出num的所有質因數
  return findKid(num).filter((kid) => {
    if (findKid(kid).length == 1) {
      return true;
    }
  });
}

const numbers = [104, 96, 36, 88];
const min = Math.min(...numbers);

for (let x = 2; x <= min; x++) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % x == 0) {
    }
  }
}

// console.log(findKid(1315));
// console.log(onlyKid(47));
