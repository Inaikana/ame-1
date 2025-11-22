// 編號：CANDY-025
// 程式語言：JavaScript
// 題目：
//   一般我們常見的四捨五入計算方式在統計上容易造成計算偏差
//   於是有人推出了「銀行家捨入法」用來稍微平衡計算偏差
//   計算方式是「四捨六入五成雙」
//   當捨入計算位數剛好是 5 的時候，會算出離這個數字比較近的偶數

function bankersRounding(num, digits = 0) {
  const cut = num.toString().split("."); // 分解小數
  const word = [...cut[1]]; // 所有.後面的數字的一個個數字的陣列

  if (word[word.length - 1] != 5) {
    // 若陣列最後一個不是5 就可以用普通四捨五入
    // 直接拿去除會怪怪的 應該是浮點數差值在搞鬼
    if (digits == 0) {
      // 如果沒要求位數 直接做普通四捨五入
      return Math.round(num);
    } else {
      // 要求位數 先 x (10的 digits 次方) 然後做普通四捨五入 再除(10的 digits 次方)
      return Math.round(num * Math.pow(10, digits)) / Math.pow(10, digits);
    }
  } else {
    if (digits == 0) {
      // 沒要求位數 用銀行家
      if (cut[0] % 2 == 0) {
        return Math.floor(num); // .左邊是偶數就捨去
      } else {
        return Math.ceil(num); // .左邊是奇數就進位
      }
    } else {
      // 這邊不能套用上面方法  例: 1.25  1是奇數 但放大後12是偶數
      const bank = num * Math.pow(10, digits); // 暫時放大的數
      const bankLeft = bank.toString().split(".")[0]; // 取得.左邊  也就是整數部分
      if (bankLeft % 2 == 0) {
        return Math.floor(bankLeft) / Math.pow(10, digits);
        // .左邊是偶數就捨去 捨去完再除 (10的 digits 次方) 變回原比例
      } else {
        return Math.ceil(bankLeft) / Math.pow(10, digits);
        // .左邊是奇數就進位 進位完再除 (10的 digits 次方) 變回原比例
      }
    }
  }
}

console.log(bankersRounding(0.4)); // 0
console.log(bankersRounding(0.6)); // 1
console.log(bankersRounding(0.5)); // 0
console.log(bankersRounding(1.5)); // 2
console.log(bankersRounding(1.24, 1)); // 1.2
console.log(bankersRounding(1.26, 1)); // 1.3
console.log(bankersRounding(1.25, 1)); // 1.2
