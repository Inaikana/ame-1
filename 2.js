// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

// const chars1 = ["a", "b", "c", "d", "f", "g"];
// const chars2 = ["O", "Q", "R", "S"];

// function missingChar(chars) {
//   let N = chars.map((eng) => {
//     // 英文轉成的數字陣列
//     return eng.charCodeAt(0);
//   });

//   for (let i = 0; i < N.length; i++) {
//     if (i + 1 < N.length && N[i + 1] !== N[i] + 1) {
//       N.splice(i + 1, 0, N[i] + 1);
//       let eigo = String.fromCharCode(N[i] + 1); // 把數字改回英文
//       // return eigo;
//       console.log(eigo);
//     }
//   }
// }

// // console.log(missingChar(chars1)); // 印出 e
// // console.log(missingChar(chars2)); // 印出 P

// const J = ["A", "Q", "S"];
// console.log(missingChar(J));

const chars1 = ["a", "b", "c", "d", "f", "g"];
const chars2 = ["O", "Q", "R", "S"];

function SSS(N) {
  for (let i = 0; i < N.length; i++) {
    if (i + 1 < N.length && N[i + 1] !== N[i] + 1) {
      N.splice(i + 1, 0, N[i] + 1);
      let eigo = String.fromCharCode(N[i] + 1); // 把數字改回英文
      return eigo;
    }
  }
}

function missingChar(chars) {
  let D = chars.map((eng) => {
    // 英文轉成的數字陣列
    return eng.charCodeAt(0);
  });
  SSS(D);
}

// console.log(missingChar(chars1)); // 印出 e
// console.log(missingChar(chars2)); // 印出 P

const J = ["A", "Q", "S"];
console.log(missingChar(J));

TODO;
// return只印一個  console會使f(x)本身變undefined
// 想把for迴圈拉出變成另一個獨立函數 但印出undfined
// 待處理
