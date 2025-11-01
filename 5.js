// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

function squareDigits(num) {
  const moji = [...`${num}`].map(Number); // 把這串數字變成單個數字的陣列
  const gousei = moji.reduce((maemoji, e) => {
    // maemoji = 前面平方完的字串; e = 接下來要平方化的數字
    const squ = e * e;
    return maemoji + String(squ); //要把數字變成字串加回來
  }, ""); //起始值給空字串
  return gousei;
}

console.log(squareDigits(3212)); // 印出 9414
console.log(squareDigits(2112)); // 印出 4114
console.log(squareDigits(387)); // 印出 96449
