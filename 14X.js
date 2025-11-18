// 編號：CANDY-014
// 程式語言：JavaScript
// 題目：把鄰近的重複值去除，但仍照原本的順序排序
// 範例："AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']

function uniqueOrder(sequence) {
  let arr;
  let asw = [];

  if (typeof sequence == typeof "string") {
    arr = [...sequence];
  } else {
    arr = sequence;
  }

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] != arr[i] && arr[i] != arr[i + 1]) {
      asw.push(arr[i - 1]);
      asw.push(arr[i]);
      asw.push(arr[i + 1]);
      const next = i + 1;
      i = next;
    } else if (arr[0] != arr[1]) {
      asw.push(arr[0]);
    } else if (arr[i] != arr[i + 1]) {
      asw.push(arr[i + 1]);
    }
  }

  return asw;
}

console.log(uniqueOrder("AABCC")); // [ 'A', 'B', 'C']
console.log(uniqueOrder("AAABBBCCBCC")); // [ 'A', 'B', 'C', 'B', 'C']
console.log(uniqueOrder([1, 2, 1, 2, 1])); // [ 1, 2, 1, 2, 1 ]
console.log(uniqueOrder([1, 1, 1, 2, 2, 2, 1])); // [1, 2, 1]

// const word = arr.map((n) => n.toString()); // 把陣列內容變成全部都是文字
// const count = word.reduce((obj, key) => {
//   obj[key] = (obj[key] || 0) + 1;
//   return obj;
// }, {});

// for (const key in count) {
//   if (key.charCodeAt(0) > 64) {
//     asw.push(key);
//   } else {
//     asw.push(Number(key));
//   }
// }

// return asw;
