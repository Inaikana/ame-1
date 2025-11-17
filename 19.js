// 編號：CANDY-019
// 程式語言：JavaScript
// 題目：檢查是否為某個數字的平方數

function isSquare(num) {
  const square = Math.sqrt(num); // 先取平方 若是負數就是NaN
  const test = square * 10;
  if (test % 10 == 0) {
    // 如果是整數 ×10後 再÷10還是整數
    // NaN計算後還是NaN  NaN一定是false
    return true;
  } else {
    return false;
  }
}

console.log(isSquare(0)); // true
console.log(isSquare(4)); // true
console.log(isSquare(5)); // false
console.log(isSquare(100)); // true
console.log(isSquare(-4)); // false
console.log(isSquare(-1)); // false
