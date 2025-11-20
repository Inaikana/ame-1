// 編號：CANDY-020
// 程式語言：JavaScript
// 題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫

function xxoo(str) {
  const one = [...str]; // 把字串轉成一個個英文字母的陣列
  let count = 0;
  for (let i = 0; i < one.length; i++) {
    if (one[i] == "o" || one[i] == "O") {
      count++; // 如果是o或O   count+1
    } else if (one[i] == "x" || one[i] == "X") {
      count--; // 如果是x或X   count-1
    }
  }
  // 所以count為0代表oOxX一樣多
  if (count == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(xxoo("ooxx")); // true
console.log(xxoo("xxoo")); // true
console.log(xxoo("xxooo")); // false
console.log(xxoo("xoox")); // true
console.log(xxoo("ooAA")); // false
console.log(xxoo("xoXoA")); // true

// function xxoo(str) {
//   const one = [...str]; // 把字串轉成一個個英文字母的陣列
//   const only = one.filter((eng) => {
//     // 過濾不是OoXx的元素
//     if (eng == "o" || eng == "O") {
//       return eng;
//     } else if (eng == "x" || eng == "X") {
//       return eng;
//     }
//   });

//   if (only.length % 2 == 1) {
//     // 陣列只有奇數的 直接錯了
//     return false;
//   } else {
//     const same = only.map((lit) => {
//       return lit.toUpperCase();
//     });
//     // 統一轉成大寫

//     let count = 0;
//     for (let i = 0; i < same.length; i++) {
//       if (same[i] == "O") {
//         count++;
//       }
//     }
//     // 記錄陣列有幾個O
//     if (count == same.length / 2) {
//       return true;
//     } else {
//       return false;
//     }
//     // O的數量為陣列長度的一半 代表OX一樣多
//   }
// }
