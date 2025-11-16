// 編號：CANDY-018
// 程式語言：JavaScript
// 題目：實作一個可以印出隨機整數的函數

// function randomNumber(min, max) {
//   if (max == undefined) {

//     return ;
//   } else {

//     return ;
//   }
// }

// console.log(randomNumber(50)); // 隨機印出 0 ~ 49 之間的任何一個數字
// console.log(randomNumber(5, 30)); // 隨機印出 5 ~ 29 之間的任何一個數字

const num = Math.random(); // 輸出一個介於 0.0 到 0.999... 之間的數字
const min = 5;
const max = 500;
const A = Math.floor(num);
const B = Math.ceil(num);

const rates = Math.pow(10, max.toString().length);
console.log(num);
