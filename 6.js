// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

function findDifferent(numbers) {
  let onaji; //設一個變數先不給值 等等用來裝陣列中相同的數字
  if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
    onaji = numbers[1]; // 如果 numbers[0] 同時和後兩個都不一樣 那它就是不一樣的 ; 代表 numbers[1] 是一樣的
  } else if (numbers[1] !== numbers[0] && numbers[1] !== numbers[2]) {
    onaji = numbers[0]; // 如果 numbers[1] 同時和前後兩個都不一樣 那它就是不一樣的 ; 代表 numbers[0] 是一樣的
  } else {
    // 沒觸發上兩式代表 numbers[0] = numbers[1] = 一樣的
    onaji = numbers[0];
  }

  for (let i = 0; i < numbers.length; i++) {
    // 用迴圈找出不一樣的
    if (numbers[i] !== onaji) {
      return numbers[i];
    }
  }
}

console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8

// const numbers = [1, 1, 1, 1, 1, 7, 1, 1, 1];
// let onaji;
// if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
//   onaji = numbers[1];
// } else if (numbers[1] !== numbers[0] && numbers[1] !== numbers[2]) {
//   onaji = numbers[0];
// } else {
//   onaji = numbers[0];
// }

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] !== onaji) {
//     console.log(numbers[i]);
//   }
// }
