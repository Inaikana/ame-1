// // 編號：CANDY-017
// // 程式語言：JavaScript
// // 題目：計算數字的 2 進位裡有幾個 1
// // 範例：5 -> 101 -> 2 個 1

// function twos(num) {
//   let n = 0;
//   for (let x = 1; x < num; x = x * 2) {
//     // 用迴圈找出 比num大的 【最小2的n次方】
//     // 例:twos(100) 就會得到7    2^7 = 128 > 100
//     // 例:twos(20) 就會得到5    2^5 = 32 > 20
//     n++; // 用 n 計算幾次方
//   }
//   return n;
// }
// // 也就是說 2 的 two(num) - 1 次方就是   num包含的最大2^n

// function countBits(num) {
//   let rest = num; // rest預計作為 為每次和2^n次方相減 剩下的值  一開始讓它是原數
//   let count;
//   for (count = 0; rest >= 2; count++) {
//     let t = twos(rest); // 取得比num大的 【最小2的n次方】
//     rest = rest - Math.pow(2, t - 1); // 每次和2^n次方相減 剩下的值 當每輪剩下的值 >=2  就對剩下的值再做一次
//   }
//   // 迴圈整理概念 : 在二進位中只有0和1 上方迴圈有作用就是有對應的2^n 代表那個位數就是1
//   // 因此每執行迴圈一次就等於有一個1 最後取count

//   if (num % 2 == 0) {
//     return count;
//   } else {
//     return count + 1;
//   }
//   // 但是我的判斷式下 rest >= 2 才執行 若是奇數 第一位數必為1 所以補上if式
// }

// console.log(countBits(1234)); // 5
// console.log(countBits(1450)); // 6
// console.log(countBits(9527)); // 8

function countBits(num) {
  return [...num.toString(2)].reduce((a, b) => Number(a) + Number(b));
}

console.log(countBits(1234)); // 5
console.log(countBits(1450)); // 6
console.log(countBits(9527)); // 8
