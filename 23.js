// 編號：CANDY-023
// 程式語言：JavaScript
// 題目：算出 N 個數字的最大公因數

function calcGCD(...numbers) {
  const min = Math.min(...numbers); // 找出陣列min
  if (numbers.includes(0)) {
    return "0沒有任何因數"; // 防呆 0沒有任何因數
  } else {
    let clear = 0; // 計算用
    for (let j = min; j > 0; j--) {
      // 從陣列中的min開始 每個數都拿來跟整個陣列相除
      // 例:[50,62,17]  min=17
      // 第一輪 50÷17 62÷17 17÷17
      // 第二輪 50÷16 62÷16 17÷16
      // ...直到做完1為止

      for (let i = 0; i < numbers.length; i++) {
        // 陣列中每個元素都要跟這輪由min遞減的值相除
        if (numbers[i] % j == 0) {
          clear++;
          // 陣列中若能整除 clear就+1
        }
      }
      if (clear == numbers.length) {
        return j;
        // 如果這輪j = 陣列長度 代表 全都能整除 印出j 即為最大公因數
        // 如果上面用 console.log()  這邊要加 break; 停止迴圈
      }
      clear = 0; // 每輪j做完要清空clear
    }
  }
}

// console.log(calcGCD(10)); // 10
// console.log(calcGCD(103, 27)); // 1
// console.log(calcGCD(21, 15, 18)); // 3
// console.log(calcGCD(104, 96, 36, 88)); // 4

export default calcGCD;
