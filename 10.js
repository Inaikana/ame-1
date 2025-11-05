// 編號：CANDY-010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

function tens(n) {
  // 10的n次方函數
  let jyuu = 1; // 10的0次方為1  所以初始值為1
  for (let i = 0; i < n; i++) {
    jyuu *= 10;
  }
  return jyuu;
}

// function expandedForm(num) {
//   // 實作寫在這裡
// }

// console.log(expandedForm(8)); // 印出 8
// console.log(expandedForm(25)); // 印出 10 x 2 + 5
// console.log(expandedForm(148)); // 印出 100 x 1 + 10 x 4 + 8
// console.log(expandedForm(1450)); // 印出 1000 x 1 + 100 x 4 + 10 x 5
// console.log(expandedForm(60308)); // 印出 10000 x 6 + 100 x 3 + 8

const num = 60308;
const moji = num.toString(); // 把數字轉成文字
const ikutsu = moji.length; // 這串數字有幾個字 = 它是幾位數
const hitotsu = [...moji]; // 數字 逐一的陣列

// ikutsu = 幾位數 = 幾個數字 但陣列是從0開始 所以要-1

let A = "";
for (let k = 0; k < ikutsu; k++) {
  for (let j = ikutsu - 1; j >= 0; j--) {
    A = A + `${hitotsu[k]} x ${tens(j)} + `;
  }
}

console.log(A);

// const SS = hitotsu.reduce((a, number) => {
//   let x = `10000 x ${number}`;
//   return `${a} + ${x} `;
// }, ""); //起始值用空字串
