// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
// [15, 28, 4, 2, 43] 印出 6
// [23, 71, 33, 82, 1] 印出 24

//需要寫一小段文字說明為什麼這樣做

// function sumOfSmallestValues(arr) {
//   // 實作程式碼寫在這裡
// }

// const list1 = [19, 5, 42, 2, 77];
// const list2 = [23, 15, 59, 4, 17];

// console.log(sumOfSmallestValues(list1)); // 印出 7
// console.log(sumOfSmallestValues(list2)); // 印出 19

///
///
///
///
///

// const minVal = Math.min(...list1);
// console.log(minVal);
// //找出陣列最小值 的函數

const list1 = [17, 15, 16, 16, 16, -1, 16, 0, 0, 2, 5.5, 77.77, 3, 17];

function getMin(A) {
  // 找出陣列最小值 的函數
  let chiisai = A[0];
  for (let i = 0; i < A.length; i++) {
    if (A[i] < chiisai) {
      chiisai = A[i];
    }
  }
  return chiisai;
}

const m = getMin(list1); //  list1的最小值

const newA = list1.filter((numb) => numb !== m); // 去除最小值的陣列

console.log(newA);

// function getIndex(A, numb) {
//   // 找出最小值的index的函數
//   let doko;
//   for (let j = 0; j < A.length; j++) {
//     if (A[j] == numb) {
//       doko = j;
//       return doko;
//     }
//   }
// }

// const koko = getIndex(list1, m); // list1的最小值的位置

// const newA = list1.splice(koko, 1); // 移除list1的最小值的新陣列
