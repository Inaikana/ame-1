// 編號：CANDY-014
// 程式語言：JavaScript
// 題目：把鄰近的重複值去除，但仍照原本的順序排序
// 範例："AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']

function uniqueOrder(sequence) {
  let arr;

  if (typeof sequence == typeof "string") {
    arr = [...sequence];
  } else {
    arr = sequence;
  }

  const asw = arr.filter((ele, idx, array) => {
    if (array[idx] != array[idx + 1]) {
      return true;
    }
  });

  return asw;
}

console.log(uniqueOrder("AABCC")); // [ 'A', 'B', 'C']
console.log(uniqueOrder("AAABBBCCBCC")); // [ 'A', 'B', 'C', 'B', 'C']
console.log(uniqueOrder([1, 2, 1, 2, 1])); // [ 1, 2, 1, 2, 1 ]
console.log(uniqueOrder([1, 1, 1, 2, 2, 2, 1])); // [1, 2, 1]

// function uniqueOrder(sequence) {
//   let arr;

//   if (typeof sequence == typeof "string") {
//     // 若是字串 就轉成陣列
//     arr = [...sequence];
//   } else {
//     arr = sequence;
//   }

//   for (let i = 0; i < arr.length - 1; i++) {
//     // 用迴圈掃描每個元素 如果它跟下一個一樣 就移除它
//     // 因為要跟下一個比 所以只做到 arr.length - 1
//     if (arr[i] == arr[i + 1]) {
//       arr.splice(i + 1, 1);
//       i--;
//       // 移除後若繼續執行 會跳過下一個 因此要先把i定住 從這輪再掃描一次
//     }
//   }

//   return arr;
// }
