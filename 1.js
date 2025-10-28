// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
// [15, 28, 4, 2, 43] 印出 6
// [23, 71, 33, 82, 1] 印出 24

function getMin(A) {
  // 找出陣列最小值 的函數
  let chiisai = A[0]; //假設A[0]是最小值
  for (let i = 0; i < A.length; i++) {
    if (A[i] < chiisai) {
      //用迴圈逐一比較 若你比較小 你來當最小值
      chiisai = A[i];
    }
  }
  return chiisai; //回傳最小值
}

////////////////////////////

function sumOfSmallestValues(arr) {
  const m = getMin(arr); //  陣列的最小值
  const newA = arr.filter((numb) => numb !== m); // 去除最小值的陣列
  const lessM = getMin(newA); // 陣列的第二小值 (【去除最小值的陣列】的最小值)

  return m + lessM;
}

const list1 = [19, 5, 42, 2, 77];
const list2 = [23, 15, 59, 4, 17];

console.log(sumOfSmallestValues(list1)); // 印出 7
console.log(sumOfSmallestValues(list2)); // 印出 19
