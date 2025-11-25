// 編號：CANDY-024
// 程式語言：JavaScript
// 題目：算出 N 個數字的最小公倍數
// 提示：可使用 023 計算最大公因數的函數

import calcGCD from "./23.js";

function Xtwo(n1, n2) {
  // 可以取得兩個數的最小公倍數
  const ans = (n1 * n2) / calcGCD(n1, n2);
  // 兩個數相乘會等於最大公因數*最小公倍數
  // 因此最小公倍數 = 兩數相乘 / 最大公因數
  return ans;
}

function calcLCM(...numbers) {
  if (numbers.length < 2) {
    // 只有輸入一個值時 直接回傳
    return numbers[0];
  } else {
    const LCM = numbers.reduce((r, n) => {
      return Xtwo(r, n);
    });
    // 當輸入超過兩個值時 先取前兩個數字的最小公倍數
    // 再用這個最小公倍數 和第三個數字 取新一輪的最小公倍數
    // 直到全部都取完 那個最終結果就會是全部數字的最小公倍數

    return LCM;
  }
}

console.log(calcLCM(10)); // 10
console.log(calcLCM(103, 27)); // 2781
console.log(calcLCM(21, 15, 18)); // 630
console.log(calcLCM(104, 96, 36, 88)); // 41184

// function findKid(num) {
//   // 找出num的所有因數(1省略)
//   let kid = [];
//   for (let i = 2; i <= num; i++) {
//     if (num % i == 0) {
//       kid.push(i);
//     }
//   }
//   return kid;
// }

// function onlyKid(num) {
//   //  找出num的所有質因數
//   return findKid(num).filter((kid) => {
//     if (findKid(kid).length == 1) {
//       return true;
//     }
//   });
// }

// function howMany(num, y) {
//   // 找出 num 有幾個 y 因數
//   // 例 625 = 5^4 > 得到4
//   let start = num;
//   let n;
//   for (n = 0; start >= y; n++) {
//     if (start % y == 0) {
//       start = start / y;
//     } else {
//       break;
//     }
//   }
//   return n;
// }

// function useOver(num, y) {
//   // 找完 num 有幾個 y 因數後 除完剩下的值
//   let start = num;
//   for (let n = 0; start >= y; n++) {
//     if (start % y == 0) {
//       start = start / y;
//     } else {
//       break;
//     }
//   }
//   return start;
// }
