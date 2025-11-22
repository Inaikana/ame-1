// 編號：CANDY-025
// 程式語言：JavaScript
// 題目：
//   一般我們常見的四捨五入計算方式在統計上容易造成計算偏差
//   於是有人推出了「銀行家捨入法」用來稍微平衡計算偏差
//   計算方式是「四捨六入五成雙」
//   當捨入計算位數剛好是 5 的時候，會算出離這個數字比較近的偶數

// function bankersRounding(num, digits = 0) {
//   // 實作程式碼寫在這裡
// }

// console.log(bankersRounding(0.4)); // 0
// console.log(bankersRounding(0.6)); // 1
// console.log(bankersRounding(0.5)); // 0
// console.log(bankersRounding(1.5)); // 2
// console.log(bankersRounding(1.24, 1)); // 1.2
// console.log(bankersRounding(1.26, 1)); // 1.3
// console.log(bankersRounding(1.25, 1)); // 1.2

//   if (digits == undefined) {
//     digits = 0;
//   }
//   return digits;

const num = 1.24999;
const digits = 2;
const cut = num.toString().split("."); // 分解小數
const word = [...cut[1]]; // 所有.後面的數字的一個個數字的陣列
const n = cut[1].length; //  .後面有幾個數字
const noFloat = num * Math.pow(10, n); // 暫時把num變成整數
const Float = noFloat / Math.pow(10, n); // 把num變回小數

if (word[word.length - 1] != 5) {
  if (digits == undefined) {
    console.log(Math.round(num));
  } else {
    console.log(Math.round(num * Math.pow(10, digits)) / Math.pow(10, digits));
  }
} else {
  console.log("要做銀行家");
}
